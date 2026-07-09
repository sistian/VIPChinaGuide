# 支付宝支付配置指南（已更新）

## 你的当前状态

| 项目 | 状态 |
|------|------|
| APPID | ✅ 已配置（2016031801224737） |
| 电脑网站支付 | ✅ 已开通 |
| 应用私钥 | ⏳ 待获取 |
| 支付宝公钥 | ⏳ 待获取 |
| 后端服务器 | ⏳ 需要搭建 |

---

## 接下来你需要获取的密钥

### 第 1 步：获取应用私钥和支付宝公钥

1. 登录 [支付宝开放平台](https://open.alipay.com/)
2. 进入你的应用（APPID: 2016031801224737）
3. 找到 **开发设置** → **接口加签方式**
4. 点击 **设置加签方式** → 选择 **公钥模式**
5. 如果还没有生成过密钥对：
   - 下载 [支付宝密钥生成工具](https://opendocs.alipay.com/common/02kipl)（Windows/Mac）
   - 或在线生成（不推荐，私钥不应在网页上生成）
6. 生成 **2048位 RSA2 密钥对**
7. 将 **应用公钥** 粘贴到支付宝开放平台 → 支付宝会返回 **支付宝公钥**
8. 保存好 **应用私钥**（这个文件绝对不要泄露！）

你会得到3个文件：
- `app_private_key.pem` — 应用私钥（后端签名用）
- `app_public_key.pem` — 应用公钥（已上传到支付宝）
- `alipay_public_key.pem` — 支付宝公钥（验签用）

---

## 第 2 步：搭建后端服务器（必需）

支付宝电脑网站支付**必须**通过后端服务器签名，不能纯前端完成。这是安全要求。

### 方案 A：Node.js 后端（推荐，最轻量）

创建一个 `server.js` 文件：

```javascript
const express = require('express');
const AlipaySdk = require('alipay-sdk').default;
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 读取私钥文件（从支付宝开放平台下载）
const privateKey = fs.readFileSync(path.join(__dirname, 'app_private_key.pem'), 'ascii');
const alipayPublicKey = fs.readFileSync(path.join(__dirname, 'alipay_public_key.pem'), 'ascii');

const alipaySdk = new AlipaySdk({
  appId: '2016031801224737',
  privateKey: privateKey,
  alipayPublicKey: alipayPublicKey,
  gateway: 'https://openapi.alipay.com/gateway.do',
  signType: 'RSA2'
});

// 创建支付宝支付订单（电脑网站支付）
app.post('/api/alipay/create', async (req, res) => {
  const { orderId, amount, subject, returnUrl } = req.body;
  
  try {
    const result = await alipaySdk.exec('alipay.trade.page.pay', {
      returnUrl: returnUrl || 'https://vipchinaguide.com/payment-success.html',
      notifyUrl: 'https://vipchinaguide.com/api/alipay/notify',
      bizContent: {
        out_trade_no: orderId,
        product_code: 'FAST_INSTANT_TRADE_PAY',
        total_amount: amount.toString(),
        subject: subject
      }
    }, { formData: true });
    
    // result 是一个可直接提交的 HTML 表单
    res.json({ success: true, form: result });
  } catch (err) {
    console.error('Alipay error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// 接收支付宝异步通知（支付结果回调）
app.post('/api/alipay/notify', async (req, res) => {
  const notifyData = req.body;
  
  // 验签
  const signVerified = await alipaySdk.checkNotifySign(notifyData);
  if (!signVerified) {
    return res.send('fail');
  }
  
  if (notifyData.trade_status === 'TRADE_SUCCESS') {
    console.log('Payment successful:', notifyData.out_trade_no);
    // 更新订单状态为已支付
  }
  
  res.send('success');
});

// 静态文件服务（部署时不需要，开发测试用）
app.use(express.static('.'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Alipay server running on port ${PORT}`);
});
```

安装依赖并运行：
```bash
npm init -y
npm install express alipay-sdk body-parser
node server.js
```

### 方案 B：使用云函数（无需买服务器）

如果你不想买服务器，可以用以下免费/低成本的方案：

| 平台 | 说明 | 成本 |
|------|------|------|
| **Vercel Functions** | 每月100GB带宽免费 | 免费 |
| **Netlify Functions** | 每月125K请求免费 | 免费 |
| **腾讯云云函数 SCF** | 每月100万次调用免费 | 免费额度 |
| **阿里云函数计算 FC** | 每月100万次调用免费 | 免费额度 |

以 Vercel 为例，创建 `api/alipay.js`：

```javascript
// api/alipay.js
const AlipaySdk = require('alipay-sdk').default;

const alipaySdk = new AlipaySdk({
  appId: '2016031801224737',
  privateKey: process.env.ALIPAY_PRIVATE_KEY,  // 在Vercel环境变量中设置
  alipayPublicKey: process.env.ALIPAY_PUBLIC_KEY,
  gateway: 'https://openapi.alipay.com/gateway.do',
  signType: 'RSA2'
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { orderId, amount, subject } = req.body;
  
  try {
    const result = await alipaySdk.exec('alipay.trade.page.pay', {
      returnUrl: 'https://vipchinaguide.com/payment-success.html',
      notifyUrl: 'https://vipchinaguide.com/api/alipay/notify',
      bizContent: {
        out_trade_no: orderId,
        product_code: 'FAST_INSTANT_TRADE_PAY',
        total_amount: amount.toString(),
        subject: subject
      }
    }, { formData: true });
    
    res.json({ success: true, form: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
```

---

## 第 3 步：更新前端代码调用后端

当用户选择支付宝后，前端调用后端API生成支付表单：

```javascript
// 在 booking.html 的 selectPayment('alipay') 中调用
async function payWithAlipay(){
  const orderId = generateOrderId();
  const response = await fetch('/api/alipay/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      orderId: orderId,
      amount: currentPrice,
      subject: 'VIPChinaGuide Tour Booking',
      returnUrl: 'https://vipchinaguide.com/payment-success.html'
    })
  });
  
  const data = await response.json();
  if (data.success) {
    // 后端返回的是一个HTML表单，直接提交到支付宝
    document.body.innerHTML += data.form;
    document.forms[document.forms.length - 1].submit();
  }
}
```

---

## 第 4 步：测试支付流程

### 使用沙箱环境测试

在正式上线前，先用支付宝沙箱测试：

1. 在支付宝开放平台 → 找到 **沙箱环境** → 获取沙箱 APPID
2. 将 `server.js` 中的 gateway 改为：
   ```javascript
   gateway: 'https://openapi.alipaydev.com/gateway.do',
   ```
3. 下载 **支付宝沙箱App**（支付宝开放平台提供下载链接）
4. 用沙箱买家账号登录沙箱App
5. 测试扫码/网页支付

---

## 快速检查清单

- [ ] 在支付宝开放平台下载密钥生成工具
- [ ] 生成 RSA2 密钥对（2048位）
- [ ] 上传应用公钥到支付宝，获取支付宝公钥
- [ ] 保存应用私钥到安全位置
- [ ] 搭建 Node.js 后端服务器（或云函数）
- [ ] 将 `app_private_key.pem` 和 `alipay_public_key.pem` 放到服务器上
- [ ] 用沙箱环境测试支付流程
- [ ] 将 gateway 切换到正式环境（openapi.alipay.com）
- [ ] 配置 returnUrl 和 notifyUrl 为你的正式域名
- [ ] 上线！

---

## 常见错误

| 错误 | 原因 | 解决 |
|------|------|------|
| 无效签名 | 私钥/公钥不匹配 | 重新生成密钥对 |
| 权限不足 | 未开通电脑网站支付 | 检查产品中心状态 |
| 应用未上线 | APPID 未提交审核 | 在开放平台提交应用审核 |
| 回调地址不合法 | returnUrl 域名未配置 | 在开放平台添加回调域名 |
| 订单已存在 | out_trade_no 重复 | 每次生成唯一订单号 |

---

## 需要帮助？

- 支付宝技术文档：[https://opendocs.alipay.com/](https://opendocs.alipay.com/)
- 电脑网站支付文档：[https://opendocs.alipay.com/open/028r53](https://opendocs.alipay.com/open/028r53)
- 密钥生成工具：[https://opendocs.alipay.com/common/02kipl](https://opendocs.alipay.com/common/02kipl)

---

*Updated: June 2025*
*APPID: 2016031801224737*