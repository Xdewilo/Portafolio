import { I18N } from './i18n-strings.js';

let hasRun = false;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function append(el, html) {
  el.insertAdjacentHTML('beforeend', html);
}

async function typeLine(el, text, klass, msPerChar) {
  const span = document.createElement('span');
  if (klass) span.className = klass;
  el.appendChild(span);
  for (const ch of text) {
    span.textContent += ch;
    await sleep(msPerChar);
  }
  el.appendChild(document.createTextNode('\n'));
}

function highlightJsonLine(line) {
  return line
    .replace(/(".*?"):/g, '<span class="json-key">$1</span>:')
    .replace(/: (".*?")/g, ': <span class="json-str">$1</span>');
}

export async function runHeroSequence({ lang = 'es', skip = false } = {}) {
  if (hasRun) return;
  hasRun = true;

  const term = document.getElementById('hero-terminal');
  const body = document.getElementById('boot-sequence');
  if (!term || !body) return;

  const dict = I18N[lang]?.hero?.boot || I18N.es.hero.boot;

  term.classList.add('is-in');

  if (skip) {
    body.innerHTML =
      `<span class="cmd">${dict.line1}</span>\n<span class="out">${dict.out1}</span>\n` +
      `<span class="cmd">${dict.line2}</span>\n` +
      dict.json.map((l) => `<span class="out">${highlightJsonLine(l)}</span>`).join('\n') + '\n' +
      `<span class="cmd">${dict.line3}</span>\n<span class="ready">${dict.out3}</span><span class="caret"></span>`;
    triggerHeroReveal({ skip: true });
    return;
  }

  await sleep(200);
  await typeLine(body, dict.line1, 'cmd', 35);
  await sleep(150);
  await typeLine(body, dict.out1,  'out', 25);
  await sleep(150);
  await typeLine(body, dict.line2, 'cmd', 35);

  for (const jsonLine of dict.json) {
    const span = document.createElement('span');
    span.className = 'out';
    span.style.opacity = '0';
    span.style.transition = 'opacity 250ms ease';
    span.innerHTML = highlightJsonLine(jsonLine);
    body.appendChild(span);
    body.appendChild(document.createTextNode('\n'));
    requestAnimationFrame(() => { span.style.opacity = '1'; });
    await sleep(80);
  }

  await sleep(120);
  await typeLine(body, dict.line3, 'cmd', 35);
  await sleep(120);

  const ready = document.createElement('span');
  ready.className = 'ready';
  ready.textContent = dict.out3;
  body.appendChild(ready);
  const caret = document.createElement('span');
  caret.className = 'caret';
  body.appendChild(caret);

  triggerHeroReveal({ skip: false });
}

function triggerHeroReveal({ skip }) {
  const lines = document.querySelectorAll('.hero__name-line');

  if (skip) {
    lines.forEach((line) => line.classList.add('is-revealed'));
    document.querySelector('.hero__role')?.classList.add('is-in');
    document.querySelector('.hero__lead')?.classList.add('is-in');
    document.querySelector('.hero__ctas')?.classList.add('is-in');
    document.querySelector('.hero__meta')?.classList.add('is-in');
    return;
  }

  setTimeout(() => {
    lines.forEach((line, i) => {
      line.style.setProperty('--base-delay', `${i * 350}ms`);
      line.classList.add('is-revealed');
    });
  }, 0);

  setTimeout(() => {
    document.querySelector('.hero__role')?.classList.add('is-in');
    document.querySelector('.hero__lead')?.classList.add('is-in');
    document.querySelector('.hero__ctas')?.classList.add('is-in');
    document.querySelector('.hero__meta')?.classList.add('is-in');
  }, 50);
}
