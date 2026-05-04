/* ========================
   MAIN.JS – Portfolio Logic
   ======================== */

/* ---- Trigger entrance animations (progressive enhancement) ---- */
(function initAnimations() {
  // Add class immediately so CSS entrance animations kick in.
  // Content is visible without this class, so no-JS / slow-JS users still see content.
  document.body.classList.add("animated");
})();

/* ---- Typing animation ---- */
(function initTyping() {
  const phrases = [
    "Desarrollador Web Full Stack",
    "Creador de experiencias digitales",
    "Apasionado por el código limpio",
    "Siempre aprendiendo algo nuevo",
  ];

  const el = document.getElementById("typing");
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPING_SPEED = 70;
  const DELETING_SPEED = 40;
  const PAUSE_END = 2000;
  const PAUSE_START = 400;

  function tick() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
      setTimeout(tick, DELETING_SPEED);
    } else {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
      setTimeout(tick, TYPING_SPEED);
    }
  }

  tick();
})();

/* ---- Sticky header ---- */
(function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---- Mobile navigation toggle ---- */
(function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const list = document.getElementById("nav-list");
  if (!toggle || !list) return;

  toggle.addEventListener("click", function () {
    const isOpen = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.innerHTML = isOpen
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  });

  // Close menu when a link is clicked
  var BARS_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  list.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", function () {
      list.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = BARS_SVG;
    });
  });
})();

/* ---- Active nav link on scroll ---- */
(function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav__link");

  function updateActive() {
    const scrollY = window.scrollY;

    sections.forEach(function (section) {
      const top = section.offsetTop - 90;
      const bottom = top + section.offsetHeight;

      if (scrollY >= top && scrollY < bottom) {
        links.forEach(function (link) {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === "#" + section.id) {
            link.classList.add("active-link");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();
})();

/* ---- Intersection Observer – reveal & skill bars ---- */
(function initReveal() {
  var options = { threshold: 0.15 };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll(".reveal, .skill-card").forEach(function (el) {
    observer.observe(el);
  });
})();

/* ---- Back-to-top button ---- */
(function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    },
    { passive: true }
  );

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

/* ---- Contact form ---- */
(function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  const btnText = document.getElementById("btn-text");
  const btnIcon = document.getElementById("btn-icon");
  const submitBtn = document.getElementById("submit-btn");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Simple validation
    if (!name || !email || !message) {
      showFeedback("Por favor, completa todos los campos.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showFeedback("Por favor, ingresa un email válido.", "error");
      return;
    }

    // Simulate sending (replace with real endpoint / emailjs / formspree)
    submitBtn.disabled = true;
    btnText.textContent = "Enviando...";
    if (btnIcon) btnIcon.style.animation = "spin 0.8s linear infinite";

    setTimeout(function () {
      submitBtn.disabled = false;
      btnText.textContent = "Enviar mensaje";
      if (btnIcon) btnIcon.style.animation = "";
      form.reset();
      showFeedback("¡Mensaje enviado con éxito! Te responderé pronto 🚀", "success");
    }, 1800);
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.className = "form-feedback " + type;
    setTimeout(function () {
      feedback.textContent = "";
      feedback.className = "form-feedback";
    }, 5000);
  }
})();

/* ---- Footer year ---- */
(function initYear() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();
