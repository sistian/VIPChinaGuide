# VIPChinaGuide 后端部署手册（P0 + P1）

> 本仓库已包含 `/api` 服务端代码，前后端**同一个 Vercel 项目**部署，天然同源（无 CORS 问题，CSP 更安全）。
> 部署完成后，所有接口地址形如 `https://www.vipchinaguide.com/api/xxx`。

---

## 第一步：Supabase 建项目（免费，约 10 分钟）

1. 打开 https://supabase.com → 注册（GitHub 账号直接登录）
2. **New Project**：
   - Name: `vipchinaguide`
   - Database Password: 设一个强密码并记下来（后续很少用到）
   - Region: 选 **Singapore** 或 **Tokyo**（离中国和欧美都近）
3. 等待 1-2 分钟项目初始化

## 第二步：建表（SQL Editor 执行）

1. 左侧菜单 → **SQL Editor** → New query
2. 把本仓库 `sql/001-init.sql` 的**全部内容**粘贴进去 → Run
3. 应显示 `Success. No rows returned`；左侧 Table Editor 里能看到
   `profiles / orders / order_events / email_log` 四张表即成功

## 第三步：配置登录（Authentication）

1. 左侧 → **Authentication → Providers**：确认 **Email** 已 Enable
2. **Authentication → URL Configuration**：
   - Site URL: `https://www.vipchinaguide.com`
   - Redirect URLs 添加：`https://www.vipchinaguide.com/**`
3. （可选）Authentication → Emails：把验证邮件模板里的 `{{ .ConfirmationURL }}` 链接文案改成品牌语气

## 第四步：拿三把钥匙

**Settings → API** 页面：

| 名称 | 用途 | 去向 |
|---|---|---|
| Project URL | 数据库地址 | Vercel 环境变量 `SUPABASE_URL` |
| anon key | 浏览器端（公开） | Vercel 环境变量 `SUPABASE_ANON_KEY` |
| service_role key | 服务端专用（绝密） | Vercel 环境变量 `SUPABASE_SERVICE_ROLE_KEY` |

## 第五步：Vercel 部署（含 /api）

1. 本仓库推到 GitHub（如果还没有远端：`git remote add origin ...`）
2. Vercel → **Add New → Project** → 导入该仓库
   - Framework Preset: **Other**（纯静态 + 函数，不需要构建命令）
   - Root Directory: 仓库根目录
3. 部署前先配环境变量（**Settings → Environment Variables**）：

   | 变量 | 值 |
   |---|---|
   | `SUPABASE_URL` | 第四步的 Project URL |
   | `SUPABASE_SERVICE_ROLE_KEY` | 第四步的 service_role key |
   | `SUPABASE_ANON_KEY` | 第四步的 anon key |
   | `QQ_SMTP_USER` | `82839626@qq.com` |
   | `QQ_SMTP_PASS` | QQ 邮箱授权码（QQ邮箱网页版 → 设置 → 账户 → 开启 SMTP 服务时生成） |
   | `ADMIN_EMAIL` | `82839626@qq.com` |
   | `FRONTEND_URL` | `https://www.vipchinaguide.com` |

4. Deploy → 绑定自定义域名（Settings → Domains → `vipchinaguide.com` / `www`，按提示改 DNS）

## 第六步：验证

### P2 订单接口（/api/orders）

```bash
# 1. 接口活着（GET 无参数应返回 400）
curl -i 'https://www.vipchinaguide.com/api/orders'

# 2. 下单一单（Supabase 配好后：返回 order_no，管理员收到通知，客户收到含管理链接的确认邮件）
curl -X POST https://www.vipchinaguide.com/api/orders \
  -H 'Content-Type: application/json' \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","city":"Beijing","serviceType":"day-tour","numDays":"1","travelers":"2","travelMonth":"Oct 2026","price":1200,"paymentMethod":"alipay","transactionId":"QR-TEST-1"}'

# 3. 凭邮件链接查单（把上一步返回的 order_no 和邮件里的 token 填进来）
curl 'https://www.vipchinaguide.com/api/orders?order_no=VCG-XXXXXXXX-XXXXXXXX&token=邮件里的token'
```

Supabase 未配置时：下单自动降级为只发管理员邮件（与旧 /api/send-email 行为一致），查单接口返回 503。

### 兼容旧接口（/api/send-email）

```bash
curl -i https://www.vipchinaguide.com/api/send-email   # 应返回 405 Method not allowed
```

前端验证：打开 `booking.html` 提交一单 → QQ 邮箱收到新订单通知 → 客户邮箱收到确认邮件（含 72 小时有效的查单链接 manage-order.html）。

## 第七步：把自己设为管理员（P5 后台启用时用）

1. 先在网站注册一个账号（P4 上线后），或 Supabase → Authentication → Add user 手动建
2. SQL Editor 执行：
   ```sql
   select public.set_admin('82839626@qq.com');
   ```

## 第八步：Supabase 免费项目保活（防止 7 天不活跃被暂停）

GitHub 仓库 → Actions → 新建 `.github/workflows/keepalive.yml`：

```yaml
name: Supabase Keepalive
on:
  schedule:
    - cron: '0 3 */5 * *'   # 每 5 天 UTC 3 点
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - run: curl -s -o /dev/null -w "%{http_code}" https://YOUR_PROJECT.supabase.co/auth/v1/health
```

---

## 目录说明

```
api/
├── send-email.js        # 旧版下单通知（现役，P2 后转为兼容入口）
└── _lib/
    ├── db.js            # Supabase 服务端客户端（service_role）
    ├── auth.js          # JWT 校验 / 管理员校验 / manage_token / 订单号生成
    ├── mailer.js        # QQ SMTP 邮件 + 模板
    ├── validate.js      # 输入校验与清洗
    ├── rate-limit.js    # 内存限流
    └── respond.js       # CORS / JSON 响应 / 客户端 IP
sql/001-init.sql         # 数据库建表脚本（幂等，可重复执行）
lib/supabase-client.js   # 浏览器端客户端（P4 接入登录页时用）
```

## 接下来（P2 及之后）

- **P2**：`POST /api/orders` 下单落库 + 客户确认邮件（含管理链接）
- **P3**：改期申请（需管理员批准）/ 取消（7 天规则）API + 页面
- **P4**：login / account 页接入 Supabase Auth（真注册登录）
- **P5**：admin.html 真实后台（订单列表 / 批准改期 / 改状态）
