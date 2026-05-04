export function initCursor() {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  if (reduce || coarse) return;

  const ring = document.querySelector('.ide-cursor');
  const dot = document.querySelector('.ide-cursor__dot');
  if (!ring || !dot) return;

  ring.classList.add('is-active');
  dot.classList.add('is-active');

  let cx = 0, cy = 0;
  let rx = -100, ry = -100;
  let dx = -100, dy = -100;

  function onMove(e) {
    cx = e.clientX;
    cy = e.clientY;
  }

  function loop() {
    rx += (cx - rx) * 0.18;
    ry += (cy - ry) * 0.18;
    dx += (cx - dx) * 0.55;
    dy += (cy - dy) * 0.55;
    ring.style.transform = `translate(${rx - 12}px, ${ry - 12}px)`;
    dot.style.transform  = `translate(${dx - 2}px, ${dy - 2}px)`;
    requestAnimationFrame(loop);
  }

  window.addEventListener('mousemove', onMove, { passive: true });
  window.addEventListener('mouseleave', () => {
    ring.style.opacity = '0';
    dot.style.opacity = '0';
  });
  window.addEventListener('mouseenter', () => {
    ring.style.opacity = '';
    dot.style.opacity = '';
  });

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, [data-cursor], input, textarea')) {
      ring.classList.add('is-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, [data-cursor], input, textarea')) {
      ring.classList.remove('is-hover');
    }
  });

  document.body.style.cursor = 'none';
  requestAnimationFrame(loop);
}
