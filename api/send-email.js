// 兼容旧版预订提交通知（booking.html 当前仍调这里）
// P2 上线 /api/orders（落库 + 客户确认邮件）后，本接口保留作为兼容入口
//
// POST /api/send-email
// body: 订单 JSON（email + id 必填，website_url 为 honeypot）

import { cors, json, errJson, clientIp } from './_lib/respond.js';
import { isEmail, str, isHoneypotTripped } from './_lib/validate.js';
import { rateLimit } from './_lib/rate-limit.js';
import { sendMail, renderOrderTable, adminNotifyEmail, mailerConfigured } from './_lib/mailer.js';

export default async function handler(req, res) {
  if (cors(req, res)) return;

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    return errJson(res, 405, 'Method not allowed');
  }

  // 限流：每个 IP 10 分钟 5 次
  const rl = rateLimit('send-email:' + clientIp(req), 5, 10 * 60 * 1000);
  if (!rl.ok) {
    return errJson(res, 429, 'Too many requests, please retry later', {
      retryAfterSec: rl.retryAfterSec,
    });
  }

  const raw = req.body || {};

  // honeypot 命中：对机器人假装成功，不发送
  if (isHoneypotTripped(raw)) {
    return json(res, 200, { success: true });
  }

  if (!isEmail(raw.email) || !raw.id) {
    return errJson(res, 400, 'Missing or invalid required fields: email, id');
  }

  if (!mailerConfigured()) {
    return errJson(res, 503, 'Mail service not configured yet');
  }

  // 清洗所有字段
  const order = {
    id: str(raw.id, 64),
    firstName: str(raw.firstName, 100),
    lastName: str(raw.lastName, 100),
    email: str(raw.email, 254),
    phone: str(raw.phone, 50),
    passport: str(raw.passport, 50),
    nationality: str(raw.nationality, 100),
    city: str(raw.city, 100),
    serviceType: str(raw.serviceType, 100),
    numDays: str(raw.numDays, 10),
    guideLevel: str(raw.guideLevel, 50),
    travelers: str(raw.travelers, 10),
    travelMonth: str(raw.travelMonth, 50),
    travel_date: str(raw.travelDate || raw.travel_date, 20),
    hotel: str(raw.hotel, 300),
    requests: str(raw.requests, 2000),
    price: Number(raw.price) > 0 ? Number(raw.price) : 0,
    usdEstimate: Number(raw.usdEstimate) > 0 ? Math.round(Number(raw.usdEstimate)) : undefined,
    paymentMethod: str(raw.paymentMethod, 50),
    transactionId: str(raw.transactionId, 100),
    status: str(raw.status, 30) || 'Pending',
    createdAt: raw.createdAt || new Date().toISOString(),
  };

  try {
    await sendMail({
      to: adminNotifyEmail(),
      subject: `【VIPChinaGuide】新订单 ${order.id} - ${order.firstName} ${order.lastName}`.trim(),
      html: renderOrderTable(order),
      replyTo: order.email,
    });
    return json(res, 200, { success: true });
  } catch (err) {
    console.error('[send-email] failed:', err && err.message);
    return errJson(res, 502, 'Failed to send notification email');
  }
}
