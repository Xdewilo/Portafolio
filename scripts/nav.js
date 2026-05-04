export function initNav() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-nav');
  const breadcrumb = document.getElementById('breadcrumb-active');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const sectionToCrumb = {
    hero: 'index.html',
    about: 'about_me.md',
    'java-spring': 'spring_boot.java',
    angular: 'angular.ts',
    stack: 'stack.yml',
    experience: 'experience.log',
    projects: 'projects/',
    contact: 'contact.sh'
  };

  const sectionEls = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('#primary-nav a'));

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((a) => {
          a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`);
        });
        if (breadcrumb && sectionToCrumb[id]) {
          breadcrumb.textContent = sectionToCrumb[id];
        }
        document.dispatchEvent(new CustomEvent('section:active', { detail: { id } }));
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  sectionEls.forEach((s) => spy.observe(s));

  buildLineNumberRail();
}

function buildLineNumberRail() {
  const rail = document.getElementById('ln-rail-numbers');
  if (!rail) return;
  if (window.matchMedia('(max-width: 1023px)').matches) return;

  const total = 80;
  const frag = document.createDocumentFragment();
  for (let i = 1; i <= total; i++) {
    const li = document.createElement('li');
    li.textContent = String(i).padStart(2, '0');
    frag.appendChild(li);
  }
  rail.appendChild(frag);

  const items = Array.from(rail.children);
  let ticking = false;

  function update() {
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const ratio = window.scrollY / max;
    const active = Math.min(total - 1, Math.floor(ratio * total));
    items.forEach((li, i) => {
      li.classList.toggle('is-active', i === active);
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}
