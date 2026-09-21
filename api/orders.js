// P2 订单核心接口（同源 /api/orders）
//
// POST /api/orders  下单：校验 → 落库(含 manage_token SHA-256) → 管理员+客户双向邮件
//                   Supabase 未配置时自动降级为"仅管理员邮件"（保持网站可用，等钥匙配好即自动落库）
// GET  /api/orders?order_no=VCG-xxx&token=xxx  凭确认邮件里的管理链接查订单（无需注册）
//
// 依赖业务规则（2026-09-17 已确认）：
//   - 游客可下单（user_id 为空）
//   - 前端 status:'paid' 映射为 DB status:'pending'（等管理员核实线下转账）
//   - manage_token 32 字节随机，库存 SHA-256 摘要，72 小时有效（P3 改期/取消复用）

import crypto from 'node:crypto';
import { cors, json, errJson, clientIp } from './_lib/respond.js';
import { isEmail, str, int, isHoneypotTripped } from './_lib/validate.js';
import { rateLimit } from './_lib/rate-limit.js';
import { isDbConfigured, getDB } from './_lib/db.js';
import { verifyManageToken } from './_lib/auth.js';
import {
  sendMail, renderOrderTable, renderCustomerConfirmation,
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

  res.setHeader('Allow', 'POST, GET, OPTIONS');
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
    .select('order_no,status,first_name,last_name,city,service_type,guide_level,num_days,travelers,travel_month,travel_date,hotel,requests,price_cny,payment_method,transaction_id,created_at,updated_at,manage_token_hash,manage_token_expires_at')
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
