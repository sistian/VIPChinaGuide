// Supabase 服务端客户端（service_role：绕过 RLS，只允许在服务器环境使用）
// SUPABASE_SERVICE_ROLE_KEY 绝对不能出现在任何前端代码里！

import { createClient } from '@supabase/supabase-js';

let cached = null;

export function isDbConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function getDB() {
  if (cached) return cached;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    const e = new Error('Supabase not configured (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)');
    e.status = 503;
    throw e;
  }
  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
