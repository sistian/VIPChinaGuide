// P4 管理员订单管理 API（需 Supabase JWT，且用户 role='admin'）
//
// GET    /api/admin/orders          列出所有订单（管理员）
// PATCH  /api/admin/orders          更新指定订单状态 { order_no, status }
//                                      请求体: { order_no, status, note? }
//                                      权限: 需有效 Supabase JWT + profiles.role='admin'
//
// 为防止探测，返回格式统一：{ success, orders? } 或 { success, error }

import { cors, json, errJson } from '../_lib/respond.js';
import { str, int } from '../_lib/validate.js';
import { rateLimit } from '../_lib/rate-limit.js';
import { isDbConfigured, getDB } from '../_lib/db.js';
import { requireAdmin } from '../_lib/auth.js';

const VALID_STATUSES = ['pending', 'confirmed', 'active', 'change_pending', 'completed', 'cancelled'];

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
      order_no, status, first_name, last_name, email, phone, nationality,
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

// PATCH /api/admin/orders { order_no, status, note? }
async function updateOrder(req, res) {
  if (!isDbConfigured()) return errJson(res, 503, 'Service not configured');

  let user;
  try {
    user = await requireAdmin(req);
  } catch (e) {
    return errJson(res, e.status || 401, e.message || 'Unauthorized');
  }

  const { order_no, status, note } = req.body || {};

  if (!str(order_no, 40)) return errJson(res, 400, 'Missing order_no');
  if (!str(status, 30) || !VALID_STATUSES.includes(status)) {
    return errJson(res, 400, `Invalid status. Must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  const db = getDB();

  // 查找订单
  const { data: existing, error: findErr } = await db
    .from('orders')
    .select('id, status')
    .eq('order_no', order_no)
    .maybeSingle();

  if (findErr || !existing) {
    return errJson(res, 404, 'Order not found');
  }

  // 更新状态
  const update = { status, updated_at: new Date().toISOString() };
  const { error: updateErr } = await db
    .from('orders')
    .update(update)
    .eq('order_no', order_no);

  if (updateErr) {
    console.error('[admin/orders] update error:', updateErr.message);
    return errJson(res, 500, 'Failed to update order');
  }

  // 记录事件
  try {
    await db.from('order_events').insert({
      order_id: existing.id,
      actor: user.id,
      event_type: 'status_changed',
      detail: { from: existing.status, to: status, note: str(note, 500) || null },
    });
  } catch (e) {
    console.error('[admin/orders] event log failed:', e && e.message);
  }

  return json(res, 200, { success: true, order_no, status });
}
