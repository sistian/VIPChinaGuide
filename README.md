# VIPChinaGuide 后端 — 订单邮件通知

## 技术栈
- Vercel Serverless Functions (免费)
- Nodemailer (SMTP 发送邮件)
- QQ 邮箱 SMTP (82839626@qq.com)

## 部署步骤

### 1. 获取 QQ 邮箱授权码
1. 用浏览器登录 [mail.qq.com](https://mail.qq.com)
2. 点击顶部 **设置** → **账户**
3. 找到 **IMAP/SMTP服务**，点击 **开启**
4. 按提示发送短信验证，获得 **16位授权码**（类似 `abcdefghijklmnop`）
5. **复制保存好，只显示一次！**

### 2. 创建 GitHub 仓库

```bash
# 进入本文件夹
cd "VIPChinaGuide houduan 7.15"

# 初始化 git
git init
git add .
git commit -m "init: order notification backend"
```

然后去 [github.com](https://github.com) 新建一个空仓库（例如 `vcg-backend`），按提示把代码 push 上去：

```bash
git remote add origin https://github.com/你的用户名/vcg-backend.git
git branch -M main
git push -u origin main
```

### 3. Vercel 部署

1. 打开 [vercel.com](https://vercel.com)，用 GitHub 账号登录
2. 点击 **Add New Project**
3. 选择刚才 push 的 `vcg-backend` 仓库
4. 点击 **Import**，然后 **Deploy**

### 4. 配置环境变量

部署完成后：
1. 进入 Vercel Dashboard → 你的项目 → **Settings**
2. 点击左侧 **Environment Variables**
3. 添加变量：
   - **Name**: `QQ_AUTH_CODE`
   - **Value**: 你刚才复制的 16 位 QQ 授权码
4. 点击 **Save**
5. 回到 **Deployments** 标签，点击最新部署右侧的三个点 → **Redeploy**（重新部署以应用环境变量）

### 5. 获取 API 地址

部署完成后，Vercel 会给你一个地址，类似：
```
https://vcg-backend-xxx.vercel.app
```

你的 API 完整地址是：
```
https://vcg-backend-xxx.vercel.app/api/send-email
```

### 6. 修改前端 booking.html

打开桌面文件夹 `VIPChinaGuide SEO and Safe 7.14 up` 里的 `booking.html`，做两处修改：

**① 替换 API 地址**（搜索 `YOUR_VERCEL_API_URL`）
```javascript
const API_URL = 'YOUR_VERCEL_API_URL';  // ← 改成你的实际地址
```
例如：
```javascript
const API_URL = 'https://vcg-backend-xxx.vercel.app/api/send-email';
```

**② 更新 CSP 白名单**（第 4 行，搜索 `connect-src`）
把 `https://*.vercel.app` 替换成你的具体域名，或保留 `https://*.vercel.app` 通配符（所有 vercel.app 子域名都允许）。

如果 Vercel 分配的是 `https://vcg-backend-abc123.vercel.app`，则：
```
connect-src 'self' https://api.stripe.com https://www.google-analytics.com https://vcg-backend-abc123.vercel.app;
```

### 7. 测试

1. 打开 `booking.html`（本地或上传到服务器）
2. 按 F12 打开 Console
3. 完成一次完整预订流程
4. 检查 Console 是否有 `✅ Email API response:` 成功日志
5. 检查 `82839626@qq.com` 是否收到邮件

---

## 常见问题

**Q: 邮件发不出去？**
- 检查 QQ 授权码是否正确（16位，不含空格）
- 检查 Vercel 环境变量 `QQ_AUTH_CODE` 是否已保存并重新部署
- 查看 Vercel Functions Log（Dashboard → 项目 → Logs）

**Q: 前端提示 "Backend not configured yet"？**
- 说明 `API_URL` 还没改成实际地址，检查 booking.html 中是否替换成功

**Q: 浏览器控制台显示 CSP 报错？**
- 检查 booking.html 第 4 行的 `connect-src` 是否包含你的 Vercel 域名

**Q: 超过 100 GB-hours 免费额度？**
- 你目前每天就算 100 单，一个月只用 0.3% 额度，基本不可能超
- 如果量极大，Vercel Pro $20/月，额度翻 10 倍

---

## 文件结构

```
VIPChinaGuide houduan 7.15/
├── api/
│   └── send-email.js      ← 主 API，接收订单 JSON 发送邮件
├── package.json           ← 依赖声明 (nodemailer)
├── vercel.json            ← Vercel 函数配置
├── .gitignore             ← git 忽略文件
└── README.md              ← 本文件
```
