import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // 设置 CORS 允许跨域调用
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const order = req.body;

  if (!order?.email || !order?.id) {
    return res.status(400).json({ error: 'Missing required fields: email, id' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true,
      auth: {
        user: '82839626@qq.com',
        pass: process.env.QQ_AUTH_CODE
      }
    });

    const subject = `【VIPChinaGuide】新订单 ${order.id} - ${order.firstName || ''} ${order.lastName || ''}`;

    const htmlContent = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#0d9488;border-bottom:2px solid #0d9488;padding-bottom:10px">🎯 VIPChinaGuide 新订单通知</h2>
        <table style="border-collapse:collapse;width:100%;margin-top:20px">
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold;width:140px">订单编号</td><td style="padding:12px;border:1px solid #e2e8f0">${order.id}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">客户姓名</td><td style="padding:12px;border:1px solid #e2e8f0">${order.firstName || ''} ${order.lastName || ''}</td></tr>
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">邮箱</td><td style="padding:12px;border:1px solid #e2e8f0">${order.email}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">电话/WhatsApp</td><td style="padding:12px;border:1px solid #e2e8f0">${order.phone || '-'}</td></tr>
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">护照号</td><td style="padding:12px;border:1px solid #e2e8f0">${order.passport || '-'}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">国籍</td><td style="padding:12px;border:1px solid #e2e8f0">${order.nationality || '-'}</td></tr>
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">城市</td><td style="padding:12px;border:1px solid #e2e8f0">${order.city || '-'}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">服务类型</td><td style="padding:12px;border:1px solid #e2e8f0">${order.serviceType || '-'} ${order.numDays && order.numDays !== '1' ? `(${order.numDays}天)` : ''}</td></tr>
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">导游级别</td><td style="padding:12px;border:1px solid #e2e8f0">${order.guideLevel || '-'}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">人数</td><td style="padding:12px;border:1px solid #e2e8f0">${order.travelers || '-'}</td></tr>
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">旅行月份</td><td style="padding:12px;border:1px solid #e2e8f0">${order.travelMonth || '-'}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">酒店/集合点</td><td style="padding:12px;border:1px solid #e2e8f0">${order.hotel || 'Not specified'}</td></tr>
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">特殊需求</td><td style="padding:12px;border:1px solid #e2e8f0">${order.requests || 'None'}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">金额</td><td style="padding:12px;border:1px solid #e2e8f0;color:#f97316;font-weight:bold;font-size:18px">¥${order.price || 0} (≈ $${order.usdEstimate || Math.round((order.price || 0) / 7.2)})</td></tr>
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">支付方式</td><td style="padding:12px;border:1px solid #e2e8f0">${order.paymentMethod || '-'}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">交易号</td><td style="padding:12px;border:1px solid #e2e8f0">${order.transactionId || '-'}</td></tr>
          <tr style="background:#f8fafc"><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">订单状态</td><td style="padding:12px;border:1px solid #e2e8f0;color:#22c55e;font-weight:bold">${order.status || 'Pending'}</td></tr>
          <tr><td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">提交时间</td><td style="padding:12px;border:1px solid #e2e8f0">${order.createdAt ? new Date(order.createdAt).toLocaleString('zh-CN') : '-'}</td></tr>
        </table>
        <p style="margin-top:20px;color:#64748b;font-size:13px">本邮件由 VIPChinaGuide 自动发送 · 回复可直接联系客户</p>
      </div>
    `;

    await transporter.sendMail({
      from: 'VIPChinaGuide <82839626@qq.com>',
      to: '82839626@qq.com',
      subject: subject,
      html: htmlContent,
      replyTo: order.email
    });

    return res.status(200).json({ success: true, message: 'Email sent to 82839626@qq.com' });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
