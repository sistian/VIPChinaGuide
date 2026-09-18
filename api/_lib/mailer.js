// 邮件模块：QQ SMTP + Nodemailer（管理员通知 / 客户通知统一走这里）
// P2 上线 /api/orders 后，客户确认邮件将附带订单管理链接（改期/取消）

import nodemailer from 'nodemailer';

const HOST = process.env.QQ_SMTP_HOST || 'smtp.qq.com';
const PORT = Number(process.env.QQ_SMTP_PORT || 465);
const USER = process.env.QQ_SMTP_USER || '82839626@qq.com';
// QQ_SMTP_PASS 为新的名字；兼容旧部署的 QQ_AUTH_CODE
const PASS = process.env.QQ_SMTP_PASS || process.env.QQ_AUTH_CODE || '';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || USER;
const FROM_NAME = process.env.MAIL_FROM_NAME || 'VIPChinaGuide';

let transporter = null;

export function mailerConfigured() {
  return Boolean(PASS);
}

export function adminNotifyEmail() {
  return ADMIN_EMAIL;
}

function getTransporter() {
  if (!mailerConfigured()) {
    const e = new Error('SMTP not configured (QQ_SMTP_PASS)');
    e.status = 503;
    throw e;
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: PORT === 465,
      auth: { user: USER, pass: PASS },
    });
  }
  return transporter;
}

export async function sendMail({ to, subject, html, replyTo }) {
  const t = getTransporter();
  const info = await t.sendMail({
    from: `"${FROM_NAME}" <${USER}>`,
    to,
    subject,
    html,
    replyTo,
  });
  return info;
}

// ———— 模板 ————

export function escapeHtml(v) {
  return String(v == null ? '' : v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 管理员订单通知表格（字段对齐 booking.html 表单）
export function renderOrderTable(o) {
  const e = escapeHtml;
  const row = (label, value, opts = {}) =>
    `<tr${opts.alt ? ' style="background:#f8fafc"' : ''}><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold;width:140px">${e(label)}</td><td style="padding:12px;border:1px solid #e2e8f0">${opts.html || e(value || '-')}</td></tr>`;

  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
    <h2 style="color:#0d9488;border-bottom:2px solid #0d9488;padding-bottom:10px">🎯 VIPChinaGuide 新订单通知</h2>
    <table style="border-collapse:collapse;width:100%;margin-top:20px">
      ${row('订单编号', o.order_no || o.id, { alt: true })}
      ${row('客户姓名', `${o.firstName || ''} ${o.lastName || ''}`)}
      ${row('邮箱', o.email, { alt: true })}
      ${row('电话/WhatsApp', o.phone)}
      ${row('护照号', o.passport, { alt: true })}
      ${row('出生日期', o.dob)}
      ${row('紧急联系人', o.emergency, { alt: true })}
      ${row('国籍', o.nationality)}
      ${row('城市', o.city, { alt: true })}
      ${row('服务类型', `${o.serviceType || '-'}${o.numDays && o.numDays !== '1' ? ` (${o.numDays}天)` : ''}`)}
      ${row('导游级别', o.guideLevel, { alt: true })}
      ${row('人数', o.travelers)}
      ${row('旅行日期', o.travel_date || o.travelMonth, { alt: true })}
      ${row('酒店/集合点', o.hotel)}
      ${row('特殊需求', o.requests, { alt: true })}
      ${row('金额', (o.price ? `¥${o.price} (≈ $${o.usdEstimate || Math.round(o.price / 7.2)})` : ''), { html: `<span style="color:#f97316;font-weight:bold;font-size:18px">${e(o.price ? `¥${o.price} (≈ $${o.usdEstimate || Math.round(o.price / 7.2)})` : '-')}</span>` })}
      ${row('支付方式', o.paymentMethod, { alt: true })}
      ${row('交易号', o.transactionId)}
      ${row('订单状态', o.status || 'Pending', { html: `<span style="color:#22c55e;font-weight:bold">${e(o.status || 'Pending')}</span>`, alt: true })}
      ${row('提交时间', o.createdAt ? new Date(o.createdAt).toLocaleString('zh-CN') : new Date().toLocaleString('zh-CN'))}
    </table>
    <p style="margin-top:20px;color:#64748b;font-size:13px">本邮件由 VIPChinaGuide 自动发送 · 回复可直接联系客户</p>
  </div>`;
}

// 客户下单确认邮件（英文，含订单管理链接）
export function renderCustomerConfirmation(o, manageUrl) {
  const e = escapeHtml;
  const item = (label, value) =>
    `<tr><td style="padding:8px 12px;border:1px solid #e2e8f0;color:#64748b;font-size:13px">${e(label)}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;font-weight:bold">${e(value || '-')}</td></tr>`;

  const fmtPrice = o.price ? `¥${o.price} (≈ $${o.usdEstimate || Math.round(o.price / 7.2)})` : 'To be quoted';

  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:24px;border-radius:12px">
    <div style="background:#fff;border-radius:12px;padding:32px;border:1px solid #e2e8f0">
      <div style="text-align:center;margin-bottom:24px">
        <div style="font-size:40px">🎉</div>
        <h2 style="color:#0d9488;margin:12px 0 4px">Thank you, ${e(o.firstName || 'there')}!</h2>
        <p style="color:#64748b;margin:0">Your booking has been received and is now <b style="color:#f97316">pending verification</b>.</p>
      </div>

      <table style="border-collapse:collapse;width:100%;margin:20px 0">
        ${item('Order No.', o.order_no)}
        ${item('Name', `${o.firstName || ''} ${o.lastName || ''}`.trim())}
        ${item('City', o.city)}
        ${item('Service', `${o.serviceType || '-'}${o.numDays && o.numDays !== '1' ? ` · ${o.numDays} days` : ''}`)}
        ${item('Guide Level', o.guideLevel)}
        ${item('Travelers', o.travelers)}
        ${item('Travel Date', o.travel_date || o.travelMonth)}
        ${item('Total', fmtPrice)}
        ${item('Payment', o.paymentMethod)}
      </table>

      <p style="color:#334155;font-size:14px">We are verifying your payment. Our travel consultant will confirm everything with you within <b>24 hours</b> at this email address.</p>

      <div style="text-align:center;margin:28px 0">
        <a href="${e(manageUrl)}" style="display:inline-block;background:#0d9488;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:bold;font-size:15px">View My Order</a>
        <p style="color:#94a3b8;font-size:12px;margin-top:10px">This private link is valid for 72 hours · Keep this email to access your order anytime</p>
      </div>

      <div style="border-top:1px solid #e2e8f0;padding-top:16px;margin-top:8px;color:#64748b;font-size:13px">
        Questions? Just reply to this email, or contact us:<br>
        📧 82839626@qq.com · 📱 WhatsApp / WeChat: +86 155 2777 1775
      </div>
    </div>
    <p style="text-align:center;color:#94a3b8;font-size:12px;margin-top:16px">VIPChinaGuide · Private China Tours with Licensed Guides</p>
  </div>`;
}
