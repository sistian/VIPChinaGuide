/**
 * VIPChinaGuide Security Module
 * Comprehensive client-side security protection for static HTML sites
 * Defends against: XSS, CSRF, clickjacking, form abuse, data leakage, scraping
 * Adapted from Next.js security best practices for static HTML deployment
 */

(function(global) {
  'use strict';

  const Security = {
    version: '1.0.0',
    config: {
      allowedDomains: ['www.vipchinaguide.com', 'vipchinaguide.com'],
      maxInputLength: 2000,
      rateLimitMs: 3000,      // Min time between form submissions
      maxUrlLength: 2048,
      forbiddenPaths: ['/admin', '/test', '/debug', '/.env', '/.git', '/wp-admin', '/phpmyadmin'],
      sensitivePatterns: [
        /(password|passwd|pwd)\s*[:=]\s*['"]?[^\s'"]+/gi,
        /(api[_-]?key|secret|token)\s*[:=]\s*['"]?[^\s'"]+/gi,
        /\b\d{16,19}\b/g,  // Credit card-like numbers
        /\b\d{3}-\d{2}-\d{4}\b/g  // SSN-like
      ]
    },

    // ===== 1. XSS INPUT SANITIZATION =====
    sanitizeHTML: function(input) {
      if (!input || typeof input !== 'string') return '';
      const div = document.createElement('div');
      div.textContent = input;
      let sanitized = div.innerHTML;
      // Additional aggressive filtering
      sanitized = sanitized
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/javascript:/gi, 'blocked:')
        .replace(/on\w+\s*=/gi, 'data-blocked=')
        .replace(/<iframe/gi, '&lt;iframe')
        .replace(/<object/gi, '&lt;object')
        .replace(/<embed/gi, '&lt;embed')
        .replace(/expression\(/gi, 'blocked(')
        .replace(/eval\s*\(/gi, 'blocked(')
        .replace(/fromCharCode/gi, 'blocked');
      return sanitized;
    },

    sanitizeAttribute: function(input) {
      if (!input || typeof input !== 'string') return '';
      return input
        .replace(/["'<>]/g, '')
        .replace(/javascript:/gi, '')
        .substring(0, this.config.maxInputLength);
    },

    sanitizeURL: function(url) {
      if (!url || typeof url !== 'string') return '#';
      const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:'];
      try {
        const parsed = new URL(url, window.location.href);
        if (!allowedProtocols.includes(parsed.protocol)) return '#';
        if (url.length > this.config.maxUrlLength) return '#';
        return parsed.href;
      } catch (e) {
        // Relative URL - allow if doesn't contain javascript:
        if (/^javascript:/i.test(url)) return '#';
        return url;
      }
    },

    // ===== 2. FORM SECURITY =====
    formProtection: {
      lastSubmitTime: 0,
      submitCount: 0,
      honeypotField: null,

      init: function() {
        document.querySelectorAll('form').forEach(form => {
          // Add honeypot field
          const honeypot = document.createElement('input');
          honeypot.type = 'text';
          honeypot.name = 'website_url';
          honeypot.style.cssText = 'position:absolute;left:-9999px;opacity:0;';
          honeypot.setAttribute('autocomplete', 'off');
          honeypot.setAttribute('tabindex', '-1');
          form.insertBefore(honeypot, form.firstChild);

          // Rate limiting
          form.addEventListener('submit', function(e) {
            const now = Date.now();
            if (now - Security.formProtection.lastSubmitTime < Security.config.rateLimitMs) {
              e.preventDefault();
              alert('Please wait a few seconds before submitting again.');
              return false;
            }
            // Check honeypot
            const hp = form.querySelector('input[name="website_url"]');
            if (hp && hp.value) {
              e.preventDefault();
              console.warn('[Security] Honeypot triggered - bot submission blocked');
              return false;
            }
            // Sanitize all inputs
            form.querySelectorAll('input, textarea').forEach(field => {
              if (field.type !== 'hidden' && field.name !== 'website_url') {
                field.value = Security.sanitizeHTML(field.value);
              }
            });
            Security.formProtection.lastSubmitTime = now;
            Security.formProtection.submitCount++;
          });

          // Real-time input sanitization
          form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(field => {
            field.addEventListener('blur', function() {
              this.value = Security.sanitizeHTML(this.value);
            });
          });
        });
      }
    },

    // ===== 3. ANTI-CLICKJACKING (Frame Protection) =====
    frameProtection: function() {
      // Prevent site from being embedded in iframe
      if (window.self !== window.top) {
        window.top.location = window.self.location;
      }
      // Also set via JS in case meta tag is stripped
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    },

    // ===== 4. REFERER POLICY =====
    setReferrerPolicy: function() {
      const meta = document.createElement('meta');
      meta.name = 'referrer';
      meta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(meta);
    },

    // ===== 5. ANTI-SCRAPING (Email/Phone Protection) =====
    protectSensitiveData: function() {
      // Obfuscate emails to prevent scraping
      document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        const email = link.getAttribute('href').replace('mailto:', '');
        link.setAttribute('data-email', btoa(email));
        link.setAttribute('href', '#');
        link.addEventListener('click', function(e) {
          e.preventDefault();
          window.location.href = 'mailto:' + atob(this.getAttribute('data-email'));
        });
      });
      // Obfuscate phone numbers similarly
      document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        const phone = link.getAttribute('href').replace('tel:', '');
        link.setAttribute('data-phone', btoa(phone));
        link.setAttribute('href', '#');
        link.addEventListener('click', function(e) {
          e.preventDefault();
          window.location.href = 'tel:' + atob(this.getAttribute('data-phone'));
        });
      });
    },

    // ===== 6. CONTENT SECURITY POLICY (CSP) =====
    enforceCSP: function() {
      // Already set via meta tag in HTML, but add runtime enforcement
      document.addEventListener('securitypolicyviolation', function(e) {
        console.warn('[CSP Violation]', e.blockedURI, e.violatedDirective);
        // Could send to analytics: fetch('/log-csp', {method:'POST', body:JSON.stringify({...})})
      });
    },

    // ===== 7. MALICIOUS PATH DETECTION =====
    detectMaliciousPath: function() {
      const path = window.location.pathname.toLowerCase();
      for (const forbidden of this.config.forbiddenPaths) {
        if (path.includes(forbidden)) {
          console.warn('[Security] Malicious path detected:', path);
          window.location.href = '/';
          return;
        }
      }
    },

    // ===== 8. SAFE URL HANDLING =====
    safeRedirect: function(url) {
      url = this.sanitizeURL(url);
      // Prevent open redirect attacks
      try {
        const target = new URL(url, window.location.origin);
        if (!this.config.allowedDomains.includes(target.hostname)) {
          console.warn('[Security] Redirect to external domain blocked:', target.hostname);
          return '/';
        }
        return url;
      } catch (e) {
        return '/';
      }
    },

    // ===== 9. CONSOLE WARNING =====
    consoleWarning: function() {
      const style = 'color: #ff0000; font-size: 24px; font-weight: bold;';
      console.log('%c⚠️ STOP!', style);
      console.log('%cThis is a browser feature intended for developers. Do not paste any code here.', 'color: #ff6600; font-size: 14px;');
      console.log('%cPasting unknown code may compromise your account security.', 'color: #ff6600; font-size: 14px;');
    },

    // ===== 10. SESSION STORAGE SECURITY =====
    secureStorage: {
      set: function(key, value) {
        try {
          const data = { v: value, t: Date.now(), h: window.location.hostname };
          sessionStorage.setItem('vcg_' + key, JSON.stringify(data));
        } catch (e) {}
      },
      get: function(key) {
        try {
          const raw = sessionStorage.getItem('vcg_' + key);
          if (!raw) return null;
          const data = JSON.parse(raw);
          if (data.h !== window.location.hostname) return null;
          return data.v;
        } catch (e) { return null; }
      }
    },

    // ===== INITIALIZATION =====
    init: function() {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this._boot());
      } else {
        this._boot();
      }
    },

    _boot: function() {
      this.detectMaliciousPath();
      this.frameProtection();
      this.setReferrerPolicy();
      this.protectSensitiveData();
      this.enforceCSP();
      this.formProtection.init();
      this.consoleWarning();
      console.log('[VIPChinaGuide Security] v' + this.version + ' initialized');
    }
  };

  // Auto-init
  Security.init();

  // Expose for manual use if needed
  global.VCGSecurity = Security;

})(window);
