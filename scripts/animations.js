export function initAnimations() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const cinematicObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
        el.classList.add('is-active');
      } else if (!el.dataset.once) {
        if (entry.intersectionRatio < 0.05) el.classList.remove('is-active');
      }
    });
  }, {
    threshold: [0.05, 0.25, 0.35, 0.5],
    rootMargin: '0px 0px -10% 0px'
  });

  document.querySelectorAll('[data-trigger="cinematic"]').forEach((el) => {
    cinematicObserver.observe(el);
  });

  const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const i = Number(el.dataset.idx || 0);
        const delay = i * (el.dataset.anim === 'commit' ? 120 : 80);
        setTimeout(() => el.classList.add('is-in'), reduce ? 0 : delay);
        itemObserver.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('[data-anim="commit"]').forEach((el, i) => {
    el.dataset.idx = i;
    itemObserver.observe(el);
  });

  document.querySelectorAll('[data-anim="card"]').forEach((el, i) => {
    el.dataset.idx = i;
    itemObserver.observe(el);
  });
}
