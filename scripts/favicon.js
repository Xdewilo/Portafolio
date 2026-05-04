const ICONS = {
  default: 'assets/img/favicons/favicon.svg',
  spring:  svgIcon('#6db33f', 'S'),
  angular: svgIcon('#dd0031', 'A'),
  projects: svgIcon('#79c0ff', '/'),
  contact:  svgIcon('#ffb454', '@'),
  about:    svgIcon('#4ade80', '#')
};

function svgIcon(color, glyph) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#0b0d10" rx="6"/><text x="16" y="22" font-family="ui-monospace,monospace" font-size="18" font-weight="700" fill="${color}" text-anchor="middle">${glyph}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

const SECTION_TO_ICON = {
  hero: 'default',
  about: 'about',
  'java-spring': 'spring',
  angular: 'angular',
  stack: 'default',
  experience: 'default',
  projects: 'projects',
  contact: 'contact'
};

export function initFavicon() {
  const link = document.getElementById('favicon-link');
  if (!link) return;

  let last = null;
  let lastUpdate = 0;
  const THROTTLE = 500;

  document.addEventListener('section:active', (e) => {
    const id = e.detail?.id;
    const key = SECTION_TO_ICON[id] || 'default';
    if (key === last) return;
    const now = Date.now();
    if (now - lastUpdate < THROTTLE) return;
    last = key;
    lastUpdate = now;
    link.href = ICONS[key];
  });
}
