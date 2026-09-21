-- ============================================================
-- VIPChinaGuide 数据库初始化脚本（P1）
-- 在 Supabase Dashboard → SQL Editor 中整体粘贴执行
-- 可重复执行（幂等）
--
-- 业务规则（已确认）：
--   1. 客户改期：提交申请 → 管理员后台批准（change_request + 状态 change_pending）
--   2. 免费取消：行程开始前 ≥ 7 天；7 天内取消转人工（邮件联系）
--   3. 游客可下单（user_id 可空）；注册用户订单中心可查自己的单
--   4. 支付：线下转账 + 客户自报交易号（二期再考虑在线支付）
--
-- 状态机：pending → confirmed → completed
--         pending/confirmed → cancelled
--         confirmed → change_pending（等管理员批准改期）→ confirmed
-- ============================================================

create extension if not exists pgcrypto;

-- ---------- 用户资料（扩展 Supabase auth.users） ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  nationality text,
  role text not null default 'customer' check (role in ('customer','admin')),
  created_at timestamptz not null default now()
);

-- 新用户注册时自动建 profile
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- 订单主表 ----------
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  order_no text unique not null,                    -- VCG-YYYYMMDD-XXXXXXXX（服务端生成）

  user_id uuid references auth.users(id) on delete set null,  -- 游客下单为空

  -- 客户信息快照（无论是否注册都填）
  first_name text not null,
  last_name text,
  email text not null,
  phone text,
  nationality text,
  passport_no text,
  dob date,
  emergency_contact text,

  -- 行程
  city text,
  service_type text,
  guide_level text,
  num_days int default 1,
  travelers int default 1,
  travel_date date,                                 -- 具体出行日期（改期改的就是它）
  travel_month text,                                -- 兼容现有表单的"旅行月份"
  hotel text,
  requests text,

  -- 金额与支付（线下转账模式）
  price_cny numeric,
  payment_method text,
  transaction_id text,

  -- 状态机（见文件头注释）
  status text not null default 'pending'
    check (status in ('pending','confirmed','completed','cancelled','change_pending')),
  cancel_reason text,
  change_request jsonb,                             -- {new_date, requested_at, note} 待管理员批准
  version int not null default 1,                   -- 乐观锁：防并发改期/取消冲突

  -- 邮件管理链接（存 SHA-256 摘要，不存原文）
  manage_token_hash text,
  manage_token_expires_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_orders_email on public.orders(email);
create index if not exists idx_orders_user on public.orders(user_id);
create index if not exists idx_orders_status on public.orders(status);
create index if not exists idx_orders_created on public.orders(created_at desc);

-- updated_at 自动维护
create or replace function public.touch_updated_at()
returns trigger language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists orders_touch on public.orders;
create trigger orders_touch
  before update on public.orders
  for each row execute function public.touch_updated_at();

-- ---------- 操作流水（审计：谁在什么时候改了什么） ----------
create table if not exists public.order_events (
  id bigserial primary key,
  order_id uuid not null references public.orders(id) on delete cascade,
  actor text not null check (actor in ('customer','admin','system')),
  event_type text not null,   -- created / date_change_requested / date_change_approved / date_change_rejected / cancelled / confirmed / completed / email_sent
  detail jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_events_order on public.order_events(order_id);

-- ---------- 邮件发送记录 ----------
create table if not exists public.email_log (
  id bigserial primary key,
  order_id uuid references public.orders(id) on delete set null,
  to_email text,
  subject text,
  status text check (status in ('sent','failed')),
  error text,
  created_at timestamptz not null default now()
);

-- ============================================================
-- RLS 行级安全：所有写操作都走服务端（service_role 绕过 RLS）
-- 浏览器端（anon/authenticated）只放开两条只读策略
-- ============================================================

alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.order_events enable row level security;
alter table public.email_log enable row level security;

-- 用户可读自己的 profile
drop policy if exists "select own profile" on public.profiles;
create policy "select own profile"
  on public.profiles for select to authenticated
  using (auth.uid() = id);

-- 登录用户可查自己的订单（游客走邮件链接 / API）
drop policy if exists "select own orders" on public.orders;
create policy "select own orders"
  on public.orders for select to authenticated
  using (auth.uid() = user_id);

-- 其余表：不建任何 policy = 浏览器完全不可访问，仅服务端 service_role 可操作

-- ============================================================
-- 运维辅助
-- ============================================================

-- 把某邮箱用户提升为管理员（注册后在 SQL Editor 里执行一次）
-- 用法：select public.set_admin('82839626@qq.com');
create or replace function public.set_admin(p_email text)
returns void language sql security definer set search_path = public
as $$
  update public.profiles set role = 'admin'
  where id = (select id from auth.users where lower(email) = lower(p_email));
$$;

-- ⚠️ 安全：只允许 service_role（服务端）执行，阻断匿名/登录用户自助提权
revoke execute on function public.set_admin(text) from public, anon, authenticated;
grant execute on function public.set_admin(text) to service_role;

-- 免费取消检查：行程前 ≥ 7 天（供 API 调用前的参考实现）
-- 用法：select public.can_free_cancel('订单uuid');
create or replace function public.can_free_cancel(p_order_id uuid)
returns boolean language sql stable
as $$
  select coalesce(
    (select travel_date - current_date >= 7
     from public.orders where id = p_order_id and status in ('pending','confirmed')),
    false
  );
$$;
