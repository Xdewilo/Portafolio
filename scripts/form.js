import { I18N } from './i18n-strings.js';

const USE_MAILTO = false;
const MAIL_TO = 'jeremyposada2003@gmail.com';

export function initForm(getLang) {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('cf-status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (status) {
      status.textContent = '';
      status.className = 'form__status';
    }

    const lang = (typeof getLang === 'function' ? getLang() : 'es') || 'es';
    const t = (k) => I18N[lang]?.form?.[k] || I18N.es.form[k];

    const data = new FormData(form);
    if (data.get('_gotcha')) return;

    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();

    if (!name || !email || !message) {
      if (status) {
        status.textContent = t('required');
        status.classList.add('is-error');
      }
      return;
    }

    if (USE_MAILTO) {
      const subject = encodeURIComponent(`portfolio · ${name}`);
      const body = encodeURIComponent(`from: ${name} <${email}>\n\n${message}`);
      window.location.href = `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
      if (status) status.textContent = t('success');
      return;
    }

    if (status) {
      status.textContent = t('sending');
      status.className = 'form__status';
    }

    try {
      const action = form.getAttribute('action') || '';
      if (!action || action.includes('REPLACE_ME')) {
        throw new Error('Formspree endpoint not configured');
      }
      const res = await fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });
      if (!res.ok) throw new Error('bad status');
      if (status) {
        status.textContent = t('success');
        status.classList.add('is-success');
      }
      form.reset();
    } catch (err) {
      if (status) {
        status.textContent = t('error');
        status.classList.add('is-error');
      }
    }
  });
}
