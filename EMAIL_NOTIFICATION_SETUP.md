# 订单邮件通知配置指南

## 当前状态

| 功能 | 状态 |
|------|------|
| 订单本地存储 | ✅ 已完成（保存在浏览器本地） |
| 邮件通知（Formspree） | ⏳ 需要配置 |
| 邮件通知（备选：mailto） | ✅ 已内置（需手动点击） |

---

## 方案一：Formspree（推荐，全自动）

Formspree 是一个免费的表单处理服务，不需要搭建服务器，适合接收订单通知邮件。

### 步骤：

1. **注册 Formspree**
   - 访问 https://formspree.io/register
   - 用邮箱注册账号

2. **创建新表单**
   - 登录后点击 "New Form"
   - 表单名称：`VIPChinaGuide Orders`
   - 接收邮箱：`sistian@foxmail.com`

3. **获取表单 ID**
   - 创建后你会得到一个类似 `xvodpyqb` 的表单 ID
   - 完整的提交地址是：`https://formspree.io/f/xvodpyqb`

4. **填入代码**
   - 打开 `booking.html`
   - 找到这行代码：
     ```javascript
     const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
     ```
   - 替换为：
     ```javascript
     const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvodpyqb';
     ```

5. **完成！**
   - 每次客人下单付款后，你会自动收到邮件通知
   - 邮件包含：客人信息、行程详情、价格、联系方式

### Formspree 免费额度：
- 每月 50 次提交（对于初创阶段足够）
- 超出后 $10/月（1000次提交）

---

## 方案二：Google Forms（免费，无限制）

如果你不想用 Formspree，可以用 Google Forms + Google Apps Script 来接收通知。

### 步骤：

1. 创建 Google Form，字段对应订单信息
2. 用 Google Apps Script 将提交转发到你的邮箱
3. 在 `booking.html` 中用 `fetch()` 提交到 Google Form

（需要的话我可以帮你配置）

---

## 方案三：自建后端（最专业）

如果你有服务器或云主机，可以搭建 Node.js 后端：

```javascript
// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// 配置邮件发送（QQ邮箱示例）
const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your-qq@qq.com',  // 你的QQ邮箱
    pass: 'your-auth-code'   // QQ邮箱授权码（不是密码）
  }
});

app.post('/api/notify-order', async (req, res) => {
  const order = req.body;
  
  await transporter.sendMail({
    from: 'VIPChinaGuide <your-qq@qq.com>',
    to: 'sistian@foxmail.com',
    subject: `【新订单】VIPChinaGuide - ${order.id}`,
    html: `
      <h2>新订单通知</h2>
      <p><strong>订单号：</strong>${order.id}</p>
      <p><strong>客人：</strong>${order.name}</p>
      <p><strong>邮箱：</strong>${order.email}</p>
      <p><strong>电话：</strong>${order.phone}</p>
      <p><strong>城市：</strong>${order.city}</p>
      <p><strong>服务：</strong>${order.service}</p>
      <p><strong>金额：</strong>${order.amount}</p>
    `
  });
  
  res.json({ success: true });
});

app.listen(3000);
```

---

## 当前邮件通知内容格式

当客人下单后，你会收到如下内容的邮件：

```
Subject: 【新订单】VIPChinaGuide - VCG-2025-XXXXXX

Order ID: VCG-2025-XXXXXX
Name: John Smith
Email: john@example.com
Phone: +1 234 567 8900
Passport: G12345678
City: Beijing
Service: Full Day (8 hours)
Guide Level: Expert Guide
Date: 2025-07-15 to 2025-07-15
Travelers: 2
Hotel: Hilton Beijing
Amount: ¥1,260
Payment: alipay
Requests: Vegetarian meals
Status: PAID - Awaiting guide assignment
```

---

## 建议

**快速上线**：先用 **Formspree 方案**，5分钟配置完成，今天就能收订单邮件。

**长期发展**：后续搭建 Node.js 后端，实现全自动订单管理 + 邮件通知。

---

*Updated: June 2025*