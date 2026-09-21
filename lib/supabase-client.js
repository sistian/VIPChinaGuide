/**
 * 浏览器端 Supabase 客户端（P4 阶段接入 login.html / account.html 时使用）
 *
 * 用法：
 *   1. 在页面 <head> 引入 UMD 构建：
 *      <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
 *   2. 把 Supabase 项目 Settings → API 里的 Project URL 和 anon key 填到下面
 *      （anon key 是公开的，数据安全由 RLS 行级策略保证）
 *   3. 页面 CSP 需增加：
 *      script-src  追加 https://cdn.jsdelivr.net
 *      connect-src 追加 https://YOUR_PROJECT.supabase.co
 *
 * 之后即可使用 window.VCGSupabase.init() 拿到客户端实例。
 */
(function () {
  var SUPABASE_URL = window.SUPABASE_URL || 'https://YOUR_PROJECT.supabase.co';
  var SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'YOUR_ANON_KEY';

  function init() {
    if (window.vcgSupabase) return window.vcgSupabase;
    if (!window.supabase || !window.supabase.createClient) return null;
    window.VCGSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return window.VCGSupabase;
  }

  window.VCGSupabase = { init: init };
})();
