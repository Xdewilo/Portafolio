import { I18N } from './i18n-strings.js';

const STORAGE_KEY = 'lang';

function detectInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && I18N[stored]) return stored;
  const nav = (navigator.language || 'es').toLowerCase();
  return nav.startsWith('es') ? 'es' : 'en';
}

function resolve(path, lang) {
  return path.split('.').reduce((acc, k) => (acc != null ? acc[k] : undefined), I18N[lang]);
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.getAttribute('data-i18n');
    const value = resolve(path, lang);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const spec = el.getAttribute('data-i18n-attr') || '';
    spec.split(',').forEach((pair) => {
      const [attr, path] = pair.split(':').map((s) => s && s.trim());
      if (!attr || !path) return;
      const value = resolve(path, lang);
      if (typeof value === 'string') el.setAttribute(attr, value);
    });
  });

  document.querySelectorAll('[data-text-i18n]').forEach((el) => {
    const path = el.getAttribute('data-text-i18n');
    const value = resolve(path, lang);
    if (typeof value === 'string') {
      const stagger = el.hasAttribute('data-stagger');
      if (stagger) {
        el.innerHTML = '';
        Array.from(value).forEach((ch, i) => {
          const span = document.createElement('span');
          span.className = ch === ' ' ? 'char space' : 'char';
          span.style.setProperty('--i', i);
          span.textContent = ch === ' ' ? ' ' : ch;
          el.appendChild(span);
        });
      } else {
        el.textContent = value;
      }
    }
  });
}

function updatePill(toggle, lang) {
  const pill = toggle.querySelector('.lang-toggle__pill');
  const buttons = toggle.querySelectorAll('button[data-lang]');
  let activeBtn = null;
  buttons.forEach((b) => {
    const isActive = b.dataset.lang === lang;
    b.setAttribute('aria-pressed', String(isActive));
    if (isActive) activeBtn = b;
  });
  if (pill && activeBtn) {
    const tRect = toggle.getBoundingClientRect();
    const bRect = activeBtn.getBoundingClientRect();
    pill.style.width = `${bRect.width}px`;
    pill.style.transform = `translateX(${bRect.left - tRect.left - 2}px)`;
  }
}

export function initI18n() {
  let currentLang = detectInitialLang();

  applyTranslations(currentLang);

  const toggle = document.querySelector('.lang-toggle');
  if (toggle) {
    requestAnimationFrame(() => updatePill(toggle, currentLang));

    toggle.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-lang]');
      if (!btn) return;
      const newLang = btn.dataset.lang;
      if (newLang === currentLang || !I18N[newLang]) return;
      currentLang = newLang;
      localStorage.setItem(STORAGE_KEY, currentLang);
      applyTranslations(currentLang);
      updatePill(toggle, currentLang);
      window.dispatchEvent(new CustomEvent('lang:changed', { detail: { lang: currentLang } }));
    });

    window.addEventListener('resize', () => updatePill(toggle, currentLang));
  }

  return {
    get lang() { return currentLang; },
    t: (path) => resolve(path, currentLang)
  };
}
