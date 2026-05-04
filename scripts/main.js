import { initI18n }     from './i18n.js';
import { runHeroSequence } from './terminal.js';
import { initAnimations } from './animations.js';
import { initNav }        from './nav.js';
import { initCursor }     from './cursor.js';
import { initFavicon }    from './favicon.js';
import { initForm }       from './form.js';

function ready(fn) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  const i18n = initI18n();
  initAnimations();
  initNav();
  initCursor();
  initFavicon();
  initForm(() => i18n.lang);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  runHeroSequence({ lang: i18n.lang, skip: reduce });

  window.addEventListener('lang:changed', (e) => {
    document.querySelectorAll('[data-text-i18n][data-stagger]').forEach((el) => {
      const lines = el.closest('.hero__name-line');
      if (lines && lines.classList.contains('is-revealed')) {
        lines.classList.add('is-revealed');
      }
    });
  });
});
