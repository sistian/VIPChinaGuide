/**
 * VCG Captcha — Cloudflare Turnstile helper (for Supabase Auth).
 *
 * 启用流程（顺序不能颠倒，否则会把所有用户锁在门外）：
 *   1. Cloudflare Dashboard → Turnstile → Add site（域名填 vipchinaguide.com，模式建议 Managed）
 *      → 拿到 Sitekey（公开）和 Secret Key（保密）
 *   2. 把 Sitekey 填到下面 VCG_TURNSTILE_SITE，重新部署前端
 *   3. Supabase Dashboard → Authentication → Sign In / Providers → Captcha
 *      → 选 Cloudflare Turnstile → 粘贴 Secret Key → Save
 *
 * 未配置（VCG_TURNSTILE_SITE 留空）时本模块为无操作：
 * 不加载外部脚本、不传 captchaToken，登录/注册行为与现在完全一致。
 */
window.VCG_TURNSTILE_SITE = ''; // ← Cloudflare Turnstile Sitekey（公开值，可出现在前端）

window.VCGTurnstile = (function () {
  var widgets = {}; // containerId -> widgetId

  function enabled() {
    return typeof window.VCG_TURNSTILE_SITE === 'string' && window.VCG_TURNSTILE_SITE.length > 10;
  }

  function loadApi(cb) {
    if (window.turnstile) { cb(true); return; }
    if (document.getElementById('vcg-turnstile-api')) {
      var tries = 0;
      var timer = setInterval(function () {
        if (window.turnstile) { clearInterval(timer); cb(true); }
        else if (++tries > 100) { clearInterval(timer); cb(false); }
      }, 100);
      return;
    }
    var s = document.createElement('script');
    s.id = 'vcg-turnstile-api';
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    s.async = true;
    s.onload = function () { cb(true); };
    s.onerror = function () { cb(false); };
    document.head.appendChild(s);
  }

  /** 在指定容器渲染人机验证组件；未启用时静默跳过 */
  function mount(containerId) {
    var el = document.getElementById(containerId);
    if (!el || !enabled()) return;
    if (widgets[containerId] !== undefined && el.children.length) return; // 已渲染
    el.innerHTML = '';
    loadApi(function (ok) {
      if (!ok || !window.turnstile || !document.getElementById(containerId)) return;
      widgets[containerId] = window.turnstile.render(el, {
        sitekey: window.VCG_TURNSTILE_SITE,
        callback: function () {},
        'expired-callback': function () {},
        'error-callback': function () {}
      });
    });
  }

  /** 读取当前 token；未启用或未完成时返回 null */
  function token(containerId) {
    if (!enabled() || !window.turnstile) return null;
    try { return window.turnstile.getResponse(widgets[containerId]) || null; } catch (e) { return null; }
  }

  /** 校验：未启用直接放行（Supabase 侧也没开）；已启用则要求组件已通过 */
  function ready(containerId) {
    if (!enabled()) return true;
    return !!token(containerId);
  }

  /** 提交失败后重置组件，允许用户重试 */
  function reset(containerId) {
    if (!enabled() || !window.turnstile) return;
    try { window.turnstile.reset(widgets[containerId]); } catch (e) {}
  }

  return { enabled: enabled, mount: mount, token: token, ready: ready, reset: reset };
})();
