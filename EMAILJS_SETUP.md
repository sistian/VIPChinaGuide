# EmailJS 配置指南 - VIPChinaGuide 订单通知

## 目标
客户提交预订后，自动发送邮件到 **82839626@qq.com**

## 方案A：EmailJS（推荐，免费200封/月）

### Step 1：注册 EmailJS
1. 打开 https://www.emailjs.com/
2. 点击 "Sign Up"，用邮箱注册（可用QQ邮箱）
3. 验证邮箱

### Step 2：创建 Email Service（发件服务）
1. 登录后点击左侧 "Email Services"
2. 点击 "Add New Service"
3. 选择 **Gmail**（推荐）或 Outlook
4. 点击 "Connect Account"，授权登录你的 Gmail
5. 给服务起个名字，比如 `vipchinaguide_service`
6. 点击 "Create Service"
7. **复制 Service ID**（格式类似 `service_abc123`）

### Step 3：创建 Email Template（邮件模板）
1. 点击左侧 "Email Templates"
2. 点击 "Create New Template"
3. 填写以下信息：

**Template Name:** `vipchinaguide_order`

**Subject:**
```
【VIPChinaGuide】新订单 {{order_id}} - {{customer_name}}
```

**Content (HTML):**
```html
<h2 style="color:#0d9488">🎯 VIPChinaGuide 新订单通知</h2>

<table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif">
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold;width:140px">订单编号</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{order_id}}</td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">客户姓名</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{customer_name}}</td>
  </tr>
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">邮箱</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{email}}</td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">电话/WhatsApp</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{phone}}</td>
  </tr>
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">护照号</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{passport}}</td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">国籍</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{nationality}}</td>
  </tr>
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">城市</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{city}}</td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">服务类型</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{service}}</td>
  </tr>
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">导游级别</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{guide_level}}</td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">人数</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{travelers}} 人</td>
  </tr>
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">出行月份</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{month}}</td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">酒店</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{hotel}}</td>
  </tr>
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">金额</td>
    <td style="padding:12px;border:1px solid #e2e8f0;color:#f97316;font-weight:bold;font-size:18px">
      {{amount_cny}} (≈ {{amount_usd}})
    </td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">支付方式</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{payment_method}}</td>
  </tr>
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">交易号</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{transaction_id}}</td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">特殊需求</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{special_requests}}</td>
  </tr>
  <tr style="background:#f8fafc">
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">订单状态</td>
    <td style="padding:12px;border:1px solid #e2e8f0">
      <span style="color:#22c55e;font-weight:bold">{{status}}</span>
    </td>
  </tr>
  <tr>
    <td style="padding:12px;border:1px solid #e2e8f0;font-weight:bold">提交时间</td>
    <td style="padding:12px;border:1px solid #e2e8f0">{{created_at}}</td>
  </tr>
</table>

<p style="margin-top:20px;color:#64748b;font-size:13px">
  本邮件由 VIPChinaGuide 自动发送 · <a href="mailto:{{email}}">回复客户</a>
</p>
```

**To Email:** `82839626@qq.com`

4. 点击 "Save"
5. **复制 Template ID**（格式类似 `template_xyz456`）

### Step 4：获取 Public Key
1. 点击左侧 "Account"（账户头像）
2. 找到 **Public Key**（格式类似 `AbC123XyZ`）
3. 复制这个Key

### Step 5：填入代码
打开 `booking.html`，找到这3行，替换为实际值：

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // 替换为 service_xxx
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';     // 替换为 template_xxx
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';         // 替换为 Public Key
```

同时找到这一行替换：
```javascript
emailjs.init('YOUR_PUBLIC_KEY');  // 替换为 Public Key
```

### Step 6：测试
1. 打开 booking.html
2. 完成一次预订流程
3. 检查 82839626@qq.com 是否收到邮件

---

## 方案B：FormSubmit.co（零配置，备用）
如果EmailJS配置有问题，可以使用这个零配置方案：

1. 在 `booking.html` 中找到这一行：
```javascript
const FORMSUBMIT_ENABLED = false;  // 改为 true
```

2. 保存即可，不需要注册任何服务。

⚠️ **缺点：** 第一次提交后，QQ邮箱会收到一封确认邮件，需要点击确认后才能正常接收。且邮件可能被QQ拦截到垃圾箱。

---

## 常见问题

**Q: 邮件发不到QQ邮箱？**
A: QQ邮箱拦截较严。如果用EmailJS+Gmail，通常可以送达。建议：
- 把 82839626@qq.com 添加为联系人
- 检查垃圾邮件文件夹
- 如果收不到，换用 Gmail 或企业邮箱

**Q: 超过200封/月怎么办？**
A: EmailJS付费版$10/月（5000封）。或者升级方案到自建服务器。

**Q: 需要备案吗？**
A: 不需要。EmailJS是第三方服务，不涉及中国服务器备案。
