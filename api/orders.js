// P2 订单核心接口（同源 /api/orders）
//
// POST  /api/orders  下单：校验 → 落库(含 manage_token SHA-256) → 管理员+客户双向邮件
//                   Supabase 未配置时自动降级为"仅管理员邮件"（保持网站可用，等钥匙配好即自动落库）
// GET   /api/orders?order_no=VCG-xxx&token=xxx  凭确认邮件里的管理链接查订单（无需注册）
// PATCH /api/orders  凭 token 自助操作（P5）：
//         { order_no, token, action: 'reschedule', new_date, note? }  → 改期申请（等管理员审批）
//         { order_no, token, action: 'cancel', note? }               → 免费取消（行程前 ≥ 7 天）
//
// 依赖业务规则（2026-09-17 已确认）：
//   - 游客可下单（user_id 为空）
//   - 前端 status:'paid' 映射为 DB status:'pending'（等管理员核实线下转账）
//   - manage_token 32 字节随机，库存 SHA-256 摘要，72 小时有效（P3 改期/取消复用）

import crypto from 'node:crypto';
import { cors, json, errJson, clientIp } from './_lib/respond.js';
import { isEmail, str, int, isDate, isHoneypotTripped } from './_lib/validate.js';
import { rateLimit } from './_lib/rate-limit.js';
import { isDbConfigured, getDB } from './_lib/db.js';
import { verifyManageToken, newManageToken, hashToken } from './_lib/auth.js';
import {
  sendMail, renderOrderTable, renderCustomerConfirmation,
  renderRescheduleRequestAdmin, renderChangeDecisionCustomer,
  renderCancelAdmin, renderCancelConfirmCustomer,
  adminNotifyEmail, mailerConfigured,
} from './_lib/mailer.js';

const TOKEN_TTL_MS = 72 * 60 * 60 * 1000; // 72h

function sha256(v) {
  return crypto.createHash('sha256').update(v).digest('hex');
}

function genOrderNo() {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
  const rnd = crypto.randomBytes(6).toString('base64url').replace(/[-_]/g, '').toUpperCase().slice(0, 8);
  return `VCG-${ymd}-${rnd || 'PENDING'}`;
}

function frontendBaseUrl() {
  return (process.env.FRONTEND_URL || 'https://www.vipchinaguide.com')
    .split(',')[0].trim().replace(/\/+$/, '');
}

// 把前端 camelCase 清洗为 DB snake_case 行
function buildRow(raw) {
  return {
    first_name: str(raw.firstName, 100) || 'Guest',
    last_name: str(raw.lastName, 100),
    email: str(raw.email, 254).toLowerCase(),
    phone: str(raw.phone, 50),
    nationality: str(raw.nationality, 100),
    passport_no: str(raw.passport, 50),
    dob: /^\d{4}-\d{2}-\d{2}$/.test(String(raw.dob || '').slice(0, 10)) ? String(raw.dob).slice(0, 10) : null,
    emergency_contact: str(raw.emergency, 200),
    travel_date: /(^|T)\d{4}-\d{2}-\d{2}/.test(String(raw.tourDate || raw.travelDate || '')) ? String(raw.tourDate || raw.travelDate || '').slice(0, 10) : null,
    city: str(raw.city, 100),
    service_type: str(raw.serviceType, 100),
    guide_level: str(raw.guideLevel, 50),
    num_days: int(raw.numDays, 1, 1, 30),
    travelers: int(raw.travelers, 1, 1, 50),
    travel_month: str(raw.travelMonth, 50),
    hotel: str(raw.hotel, 300),
    requests: str(raw.requests, 2000),
    price_cny: Number(raw.price) > 0 ? Math.round(Number(raw.price)) : null,
    payment_method: str(raw.paymentMethod, 50),
    transaction_id: str(raw.transactionId, 100),
    status: 'pending', // 前端的 'paid' 仅代表客户自报已转账，统一等管理员核实
  };
}

// 邮件用的 camelCase 视图（复用 mailer 模板）
function toMailView(row, orderNo) {
  return {
    order_no: orderNo,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    passport: row.passport_no,
    dob: row.dob || '',
    emergency: row.emergency_contact,
    nationality: row.nationality,
    city: row.city,
    serviceType: row.service_type,
    guideLevel: row.guide_level,
    numDays: String(row.num_days),
    travelers: String(row.travelers),
    travelMonth: row.travel_month,
    travel_date: row.travel_date || '',
    hotel: row.hotel,
    requests: row.requests,
    price: row.price_cny || 0,
    usdEstimate: row.price_cny ? Math.round(row.price_cny / 7.2) : undefined,
    paymentMethod: row.payment_method,
    transactionId: row.transaction_id,
    status: 'Pending verification',
    createdAt: new Date().toISOString(),
  };
}

async function logEmail(db, orderId, to, subject, ok, error) {
  try {
    await db.from('email_log').insert({
      order_id: orderId || null, to_email: to, subject,
      status: ok ? 'sent' : 'failed', error: error ? String(error).slice(0, 500) : null,
    });
  } catch (e) {
    console.error('[orders] email_log insert failed:', e && e.message);
  }
}

export default async function handler(req, res) {
  if (cors(req, res)) return;

  if (req.method === 'POST') return createOrder(req, res);
  if (req.method === 'GET') return lookupOrder(req, res);
  if (req.method === 'PATCH') return manageOrder(req, res);

  res.setHeader('Allow', 'POST, GET, PATCH, OPTIONS');
  return errJson(res, 405, 'Method not allowed');
}

// ———————————————— POST 下单 ————————————————

async function createOrder(req, res) {
  // 限流：每 IP 10 分钟 5 单
  const rl = rateLimit('orders:' + clientIp(req), 5, 10 * 60 * 1000);
  if (!rl.ok) {
    return errJson(res, 429, 'Too many requests, please retry later', { retryAfterSec: rl.retryAfterSec });
  }

  const raw = req.body || {};

  // 从 Authorization header 提取 Supabase JWT，验证后获取 user_id（关联登录用户的订单）
  let userId = null;
  const authHeader = req.headers.authorization || '';
  if (authHeader.startsWith('Bearer ')) {
    const token = authHeader.slice(7).trim();
    if (token && isDbConfigured()) {
      try {
        const { data } = await getDB().auth.getUser(token);
        if (data && data.user) userId = data.user.id;
      } catch (_) { /* ignore auth errors, guest checkout */ }
    }
  }

  // 蜜罐：对机器人假装成功
  if (isHoneypotTripped(raw)) {
    return json(res, 200, { success: true, order_no: genOrderNo() });
  }

  if (!isEmail(raw.email) || !str(raw.firstName, 100)) {
    return errJson(res, 400, 'Missing or invalid required fields: firstName, email');
  }

  const row = buildRow(raw);
  const dbReady = isDbConfigured();
  const mailReady = mailerConfigured();

  if (!dbReady && !mailReady) {
    return errJson(res, 503, 'Order service not configured yet');
  }

  // ———— 路径 A：完整落库 + 双向邮件 ————
  if (dbReady) {
    const db = getDB();
    const token = crypto.randomBytes(32).toString('base64url');
    const tokenHash = sha256(token);
    const tokenExpires = new Date(Date.now() + TOKEN_TTL_MS).toISOString();

    let orderNo = genOrderNo();
    let inserted = null;

    // order_no 撞号概率极低，重试一次兜底
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const { data, error } = await db.from('orders').insert({
          ...row,
          order_no: orderNo,
          manage_token_hash: tokenHash,
          manage_token_expires_at: tokenExpires,
          user_id: userId, // 关联登录用户；未登录时为 null
        }).select('id, order_no').single();
        if (error) throw error;
        inserted = data;
        break;
      } catch (e) {
        if (attempt === 0 && e && /duplicate key|unique/i.test(e.message || '')) {
          orderNo = genOrderNo();
          continue;
        }
        console.error('[orders] DB insert failed:', e && e.message);
        // 数据库挂了但邮件可用：降级为只发管理员邮件，不让客户下单失败
        return fallbackEmailOnly(row, raw, res);
      }
    }
    if (!inserted) return fallbackEmailOnly(row, raw, res);

    const view = toMailView(row, inserted.order_no);
    const manageUrl = `${frontendBaseUrl()}/manage-order.html?order_no=${encodeURIComponent(inserted.order_no)}&token=${encodeURIComponent(token)}`;

    // 流水：created
    db.from('order_events').insert({
      order_id: inserted.id, actor: 'system', event_type: 'created',
      detail: { client_ref: str(raw.id, 64), payment_method: row.payment_method, transaction_id: row.transaction_id },
    }).then(() => {}).catch((e) => console.error('[orders] event insert failed:', e && e.message));

    // 双向邮件并行（失败不阻塞下单）
    const results = await Promise.allSettled([
      sendMail({
        to: adminNotifyEmail(),
        subject: `【VIPChinaGuide】新订单 ${inserted.order_no} - ${view.firstName} ${view.lastName}`.trim(),
        html: renderOrderTable(view),
        replyTo: view.email,
      }),
      sendMail({
        to: view.email,
        subject: `Your VIPChinaGuide Booking Confirmation (${inserted.order_no})`,
        html: renderCustomerConfirmation(view, manageUrl),
        replyTo: adminNotifyEmail(),
      }),
    ]);

    const [adminR, custR] = results;
    await logEmail(db, inserted.id, adminNotifyEmail(), `新订单 ${inserted.order_no}`, adminR.status === 'fulfilled', adminR.reason);
    await logEmail(db, inserted.id, view.email, `Booking Confirmation ${inserted.order_no}`, custR.status === 'fulfilled', custR.reason);

    return json(res, 200, {
      success: true,
      order_no: inserted.order_no,
      email_sent: custR.status === 'fulfilled',
    });
  }

  // ———— 路径 B：数据库未配置 → 只发管理员邮件（兼容过渡期）————
  return fallbackEmailOnly(row, raw, res);
}

// 过渡期兜底：不落库，仅通知管理员（与旧 /api/send-email 行为一致）
async function fallbackEmailOnly(row, raw, res) {
  if (!mailerConfigured()) {
    return errJson(res, 503, 'Order service not configured yet');
  }
  const orderNo = str(raw.id, 64) || genOrderNo();
  const view = toMailView(row, orderNo);
  try {
    await sendMail({
      to: adminNotifyEmail(),
      subject: `【VIPChinaGuide】新订单 ${orderNo} - ${view.firstName} ${view.lastName}`.trim(),
      html: renderOrderTable(view),
      replyTo: view.email,
    });
    return json(res, 200, { success: true, order_no: orderNo });
  } catch (err) {
    console.error('[orders] admin email failed:', err && err.message);
    return errJson(res, 502, 'Failed to send order notification');
  }
}

// ———————————————— GET 凭 token 查单 ————————————————

async function lookupOrder(req, res) {
  const rl = rateLimit('orders-get:' + clientIp(req), 30, 10 * 60 * 1000);
  if (!rl.ok) {
    return errJson(res, 429, 'Too many requests, please retry later', { retryAfterSec: rl.retryAfterSec });
  }

  const orderNo = str(req.query.order_no, 40);
  const token = str(req.query.token, 200);
  if (!orderNo || !token) {
    return errJson(res, 400, 'Missing required params: order_no, token');
  }
  if (!isDbConfigured()) {
    return errJson(res, 503, 'Order lookup not available yet');
  }

  const db = getDB();
  const { data, error } = await db.from('orders')
    .select('order_no,status,change_request,first_name,last_name,city,service_type,guide_level,num_days,travelers,travel_month,travel_date,hotel,requests,price_cny,payment_method,transaction_id,created_at,updated_at,manage_token_hash,manage_token_expires_at')
    .eq('order_no', orderNo)
    .maybeSingle();

  if (error) {
    console.error('[orders] lookup failed:', error.message);
    return errJson(res, 500, 'Lookup failed');
  }
  if (!data) return errJson(res, 404, 'Order not found');

  // 恒时比较 + 过期检查（统一走 _lib/auth.js，防时序侧信道）
  if (!verifyManageToken(data, token)) {
    return errJson(res, 404, 'Order not found'); // 不区分"链接错误/过期"，防探测
  }

  // 不返回 email/passport/dob 等敏感字段（链接可能被转发）
  const { manage_token_hash, manage_token_expires_at, ...safe } = data;
  return json(res, 200, { success: true, order: safe });
}

// ———————————————— PATCH 凭 token 自助改期 / 免费取消（P5） ————————————————

// 免费取消资格：具体行程日期存在且距今 ≥ 7 天（无具体日期/临近出发 → 转人工）
function freeCancelEligible(travelDateStr) {
  if (!isDate(travelDateStr)) return false;
  const diffDays = Math.floor((new Date(travelDateStr + 'T00:00:00Z').getTime() - Date.now()) / 86400000);
  return diffDays >= 7;
}

async function manageOrder(req, res) {
  const rl = rateLimit('orders-manage:' + clientIp(req), 15, 10 * 60 * 1000);
  if (!rl.ok) {
    return errJson(res, 429, 'Too many requests, please retry later', { retryAfterSec: rl.retryAfterSec });
  }
  if (!isDbConfigured()) return errJson(res, 503, 'Order service not available yet');

  const body = req.body || {};
  const orderNo = str(body.order_no, 40);
  const token = str(body.token, 200);
  const action = str(body.action, 20);
  const note = str(body.note, 500);
  const newDate = isDate(body.new_date) ? body.new_date : null;

  if (!orderNo || !token) return errJson(res, 400, 'Missing required fields: order_no, token');
  if (action !== 'reschedule' && action !== 'cancel') {
    return errJson(res, 400, "action must be 'reschedule' or 'cancel'");
  }

  const db = getDB();
  const { data: order, error } = await db.from('orders')
    .select('id,order_no,status,change_request,travel_date,travel_month,first_name,last_name,email,city,price_cny,manage_token_hash,manage_token_expires_at')
    .eq('order_no', orderNo)
    .maybeSingle();
  if (error) {
    console.error('[orders:manage] lookup failed:', error.message);
    return errJson(res, 500, 'Lookup failed');
  }
  if (!order || !verifyManageToken(order, token)) {
    return errJson(res, 404, 'Order not found'); // 防探测
  }

  const mailView = {
    order_no: order.order_no,
    first_name: order.first_name, last_name: order.last_name,
    email: order.email, city: order.city,
    travel_date: order.travel_date || '', travel_month: order.travel_month || '',
    price_cny: order.price_cny,
  };

  // ———— 改期申请 ————
  if (action === 'reschedule') {
    if (!['pending', 'confirmed'].includes(order.status)) {
      return errJson(res, 409, `Reschedule not available for status '${order.status}'`);
    }
    if (!newDate) return errJson(res, 400, 'new_date must be a valid date (YYYY-MM-DD)');

    const today = new Date(); today.setHours(0,0,0,0);
    const d = new Date(newDate + 'T00:00:00Z');
    const minDay = new Date(today.getTime() + 86400000);   // 至少明天
    const maxDay = new Date(today.getTime() + 730 * 86400000); // 最远 2 年
    if (d < minDay || d > maxDay) {
      return errJson(res, 400, 'new_date must be between tomorrow and 2 years from now');
    }
    if (order.travel_date && order.travel_date === newDate) {
      return errJson(res, 400, 'new_date is the same as current travel date');
    }

    const { error: updErr } = await db.from('orders').update({
      status: 'change_pending',
      change_request: { new_date: newDate, note: note || null, requested_at: new Date().toISOString() },
    }).eq('id', order.id);

    if (updErr) {
      console.error('[orders:manage] reschedule update failed:', updErr.message);
      return errJson(res, 500, 'Failed to submit request');
    }

    db.from('order_events').insert({
      order_id: order.id, actor: 'customer', event_type: 'date_change_requested',
      detail: { from: order.travel_date || order.travel_month, to: newDate, note: note || null },
    }).then(() => {}).catch((e) => console.error('[orders:manage] event insert failed:', e && e.message));

    // 通知管理员（改期申请是审批流程的触发器：await 确保发出/落库后再响应）
    try {
      await sendMail({
        to: adminNotifyEmail(),
        subject: `【待审批】改期申请 ${order.order_no}: ${order.travel_date || order.travel_month || '—'} → ${newDate}`,
        html: renderRescheduleRequestAdmin(mailView, newDate, note),
        replyTo: order.email,
      });
      await logEmail(db, order.id, adminNotifyEmail(), '改期申请通知', true, null);
    } catch (e) {
      await logEmail(db, order.id, adminNotifyEmail(), '改期申请通知', false, e);
    }

    return json(res, 200, { success: true, status: 'change_pending', message: 'Reschedule request submitted. We will confirm by email within 24 hours.' });
  }

  // ———— 免费取消 ————
  if (!['pending', 'confirmed', 'change_pending'].includes(order.status)) {
    return errJson(res, 409, `Cancel not available for status '${order.status}'`);
  }
  if (!freeCancelEligible(order.travel_date)) {
    // 无具体日期或 7 天内 → 转人工，不动状态
    return errJson(res, 422, 'Free cancellation (≥ 7 days before departure) is not available for this order. Please contact us and our team will help.', { contact_required: true });
  }

  const { error: cancelErr } = await db.from('orders').update({
    status: 'cancelled',
    cancel_reason: note || 'Cancelled by customer (free cancellation)',
    change_request: null,
  }).eq('id', order.id);

  if (cancelErr) {
    console.error('[orders:manage] cancel update failed:', cancelErr.message);
    return errJson(res, 500, 'Failed to cancel order');
  }

  db.from('order_events').insert({
    order_id: order.id, actor: 'customer', event_type: 'cancelled',
    detail: { reason: note || null, was_change_pending: order.status === 'change_pending' },
  }).then(() => {}).catch((e) => console.error('[orders:manage] event insert failed:', e && e.message));

  const mails = await Promise.allSettled([
    sendMail({
      to: adminNotifyEmail(),
      subject: `【已取消】订单 ${order.order_no} 客户免费取消`,
      html: renderCancelAdmin(mailView, note),
      replyTo: order.email,
    }),
    sendMail({
      to: order.email,
      subject: `Your VIPChinaGuide Booking ${order.order_no} has been cancelled`,
      html: renderCancelConfirmCustomer(mailView),
      replyTo: adminNotifyEmail(),
    }),
  ]);
  for (let i = 0; i < mails.length; i++) {
    const r = mails[i];
    await logEmail(db, order.id, i === 0 ? adminNotifyEmail() : order.email, '取消通知', r.status === 'fulfilled', r.reason);
  }

  return json(res, 200, { success: true, status: 'cancelled', message: 'Your booking has been cancelled. A confirmation email is on its way.' });
}
