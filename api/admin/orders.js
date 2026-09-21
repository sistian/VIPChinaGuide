// P4+P5 管理员订单管理 API（需 Supabase JWT，且用户 role='admin'）
//
// GET    /api/admin/orders          列出所有订单（管理员）
// PATCH  /api/admin/orders          更新订单：
//   { order_no, status, note? }                    状态流转（change_pending→confirmed 时自动应用改期）
//   { order_no, action: 'approve_change', note? }  批准改期（应用新日期 + 邮件通知客户）
//   { order_no, action: 'reject_change', note? }   拒绝改期（恢复 confirmed + 邮件通知客户）
//
// 为防止探测，返回格式统一：{ success, orders? } 或 { success, error }

import { cors, json, errJson } from '../_lib/respond.js';
import { str } from '../_lib/validate.js';
import { rateLimit } from '../_lib/rate-limit.js';
import { isDbConfigured, getDB } from '../_lib/db.js';
import { requireAdmin, newManageToken, hashToken, MANAGE_TOKEN_TTL_HOURS } from '../_lib/auth.js';
import { sendMail, renderChangeDecisionCustomer, adminNotifyEmail, mailerConfigured } from '../_lib/mailer.js';

// 与 sql/001-init.sql 的 check 约束保持一致（数据库是唯一事实来源）
const VALID_STATUSES = ['pending', 'confirmed', 'change_pending', 'completed', 'cancelled'];

function frontendBaseUrl() {
  return (process.env.FRONTEND_URL || 'https://www.vipchinaguide.com')
    .split(',')[0].trim().replace(/\/+$/, '');
}

export default async function handler(req, res) {
  if (cors(req, res)) return;

  // 限流：每 IP 10 分钟 100 次
  const rl = rateLimit('admin-api:' + (req.headers['x-forwarded-for'] || 'unknown'), 100, 10 * 60 * 1000);
  if (!rl.ok) return errJson(res, 429, 'Too many requests');

  if (req.method === 'GET') return listOrders(req, res);
  if (req.method === 'PATCH') return updateOrder(req, res);

  res.setHeader('Allow', 'GET, PATCH, OPTIONS');
  return errJson(res, 405, 'Method not allowed');
}

// GET /api/admin/orders
async function listOrders(req, res) {
  if (!isDbConfigured()) return errJson(res, 503, 'Service not configured');

  let user;
  try {
    user = await requireAdmin(req);
  } catch (e) {
    return errJson(res, e.status || 401, e.message || 'Unauthorized');
  }

  const db = getDB();
  const { data, error } = await db
    .from('orders')
    .select(`
      order_no, status, change_request, cancel_reason,
      first_name, last_name, email, phone, nationality,
      passport_no, dob, emergency_contact, city, service_type, guide_level,
      num_days, travelers, travel_month, travel_date, hotel, requests,
      price_cny, payment_method, transaction_id,
      created_at, updated_at, user_id
    `)
    .order('created_at', { ascending: false })
    .limit(200);

  if (error) {
    console.error('[admin/orders] list error:', error.message);
    return errJson(res, 500, 'Failed to fetch orders');
  }

  return json(res, 200, { success: true, orders: data || [] });
}

async function logEvent(db, orderId, actor, eventType, detail) {
  try {
    // actor 列有 check 约束（customer/admin/system）；操作者身份放 detail
    await db.from('order_events').insert({ order_id: orderId, actor, event_type: eventType, detail });
  } catch (e) {
    console.error('[admin/orders] event log failed:', e && e.message);
  }
}

// 改期审批结果邮件（关键动作：调用方 await，确保响应前完成）
// 仅【批准】时轮换 manage_token（订单已实质变更，发新链接)；
// 拒绝时订单未变，保留客户当前链接，便于其继续操作（再申请/取消）
async function emailChangeDecision(db, order, approved, note) {
  let manageUrl = null;
  if (approved) {
    // 同步轮换：安全相关的状态变更不放在后台任务里竞态
    const token = newManageToken();
    const { error: rotErr } = await db.from('orders').update({
      manage_token_hash: hashToken(token),
      manage_token_expires_at: new Date(Date.now() + MANAGE_TOKEN_TTL_HOURS * 3600 * 1000).toISOString(),
    }).eq('id', order.id);
    if (!rotErr) {
      manageUrl = `${frontendBaseUrl()}/manage-order.html?order_no=${encodeURIComponent(order.order_no)}&token=${encodeURIComponent(token)}`;
    }
  }
  if (!mailerConfigured()) return;
  const view = {
    order_no: order.order_no, city: order.city,
    travel_date: order.travel_date || '', travel_month: order.travel_month || '',
  };
  let ok = true, err = null;
  try {
    await sendMail({
      to: order.email,
      subject: approved
        ? `Reschedule Confirmed — ${order.order_no}`
        : `About Your Reschedule Request — ${order.order_no}`,
      html: renderChangeDecisionCustomer(view, approved, approved ? order.change_request_new_date : null, note, manageUrl),
      replyTo: adminNotifyEmail(),
    });
  } catch (e) {
    ok = false; err = e;
    console.error('[admin/orders] decision email failed:', e && e.message);
  }
  try {
    await db.from('email_log').insert({
      order_id: order.id, to_email: order.email,
      subject: approved ? '改期已批准' : '改期已拒绝', status: ok ? 'sent' : 'failed',
      error: err ? String(err && err.message).slice(0, 500) : null,
    });
  } catch (_) {}
}

// PATCH /api/admin/orders
async function updateOrder(req, res) {
  if (!isDbConfigured()) return errJson(res, 503, 'Service not configured');

  let user;
  try {
    user = await requireAdmin(req);
  } catch (e) {
    return errJson(res, e.status || 401, e.message || 'Unauthorized');
  }

  const body = req.body || {};
  const orderNo = str(body.order_no, 40);
  if (!orderNo) return errJson(res, 400, 'Missing order_no');

  const action = str(body.action, 30);
  const note = str(body.note, 500);

  const db = getDB();
  const { data: existing, error: findErr } = await db
    .from('orders')
    .select('id, order_no, status, change_request, travel_date, travel_month, city, email')
    .eq('order_no', orderNo)
    .maybeSingle();

  if (findErr || !existing) {
    return errJson(res, 404, 'Order not found');
  }

  // ———— 显式改期审批动作 ————
  if (action === 'approve_change' || action === 'reject_change') {
    const cr = existing.change_request;
    if (existing.status !== 'change_pending' || !cr || !cr.new_date) {
      return errJson(res, 409, "No pending change request on this order");
    }

    if (action === 'approve_change') {
      const { error: updErr } = await db.from('orders').update({
        status: 'confirmed',
        travel_date: cr.new_date,
        travel_month: null, // 已有具体日期，月份字段作废
        change_request: null,
      }).eq('id', existing.id);
      if (updErr) {
        console.error('[admin/orders] approve failed:', updErr.message);
        return errJson(res, 500, 'Failed to approve change');
      }
      await logEvent(db, existing.id, 'admin', 'date_change_approved', {
        admin_id: user.id, from: existing.travel_date || existing.travel_month, to: cr.new_date, note: note || null,
      });
    } else {
      const { error: updErr } = await db.from('orders').update({
        status: 'confirmed',
        change_request: null,
      }).eq('id', existing.id);
      if (updErr) {
        console.error('[admin/orders] reject failed:', updErr.message);
        return errJson(res, 500, 'Failed to reject change');
      }
      await logEvent(db, existing.id, 'admin', 'date_change_rejected', {
        admin_id: user.id, requested: cr.new_date, note: note || null,
      });
    }

    // 邮件通知客户（关键动作，await 确保响应前完成）
    await emailChangeDecision(db, {
      id: existing.id, order_no: existing.order_no, email: existing.email, city: existing.city,
      travel_date: existing.travel_date, travel_month: existing.travel_month,
      change_request_new_date: cr.new_date,
    }, action === 'approve_change', note);

    return json(res, 200, { success: true, order_no: orderNo, status: 'confirmed', change: action === 'approve_change' ? 'approved' : 'rejected' });
  }

  if (action) {
    return errJson(res, 400, "Unknown action. Use 'approve_change' or 'reject_change', or pass status for a plain status change.");
  }

  // ———— 普通状态流转 ————
  const status = str(body.status, 30);
  if (!status || !VALID_STATUSES.includes(status)) {
    return errJson(res, 400, `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  const update = { status };
  // 联动处理改期请求，避免残留脏数据
  if (existing.status === 'change_pending') {
    const cr = existing.change_request;
    if (status === 'confirmed' && cr && cr.new_date) {
      // 管理员直接把 change_pending 拉回 confirmed = 视为批准改期
      update.travel_date = cr.new_date;
      update.travel_month = null;
      update.change_request = null;
      await logEvent(db, existing.id, 'admin', 'date_change_approved', {
        admin_id: user.id, from: existing.travel_date || existing.travel_month, to: cr.new_date, via: 'status_change',
      });
    } else if (status !== 'change_pending') {
      update.change_request = null; // 取消/完成等场景丢弃未决申请
    }
  }

  const { error: updateErr } = await db.from('orders')
    .update(update)
    .eq('order_no', orderNo);

  if (updateErr) {
    console.error('[admin/orders] update error:', updateErr.message);
    return errJson(res, 500, 'Failed to update order');
  }

  // 记录事件（状态变更；上面联动场景已记过更详细的事件，这里只记纯状态流转）
  if (!(existing.status === 'change_pending' && status === 'confirmed')) {
    await logEvent(db, existing.id, 'admin', 'status_changed', {
      admin_id: user.id, from: existing.status, to: status, note: note || null,
    });
  }

  return json(res, 200, { success: true, order_no: orderNo, status });
}
