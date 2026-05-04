# Jeremy Posada — Portfolio

Backend Engineer / Microservices Architect — Barranquilla, CO.

Live: https://xdewilo.github.io/Portafolio/

## Stack

Pure HTML / CSS / JS. No build step. No npm. Single `index.html`, modular CSS via `@import`, ES modules for JS.

## Local dev

```bash
# Python (preferred)
py -m http.server 5173
# then open http://localhost:5173/
```

Or VS Code "Live Server" extension. Opening `index.html` via `file://` works for most things but ES modules can be blocked.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml` which uploads the entire repo as a Pages artifact. No build.

GitHub repo settings required (one-time):

1. Settings → Pages → Source: **GitHub Actions**
2. Settings → Actions → General → Workflow permissions: **Read and write**

## Structure

```
index.html, 404.html
assets/  cv, img, svg
styles/  tokens, base, layout, animations, utilities, main + components/ + sections/
scripts/ main, i18n, animations, terminal, cursor, nav, favicon, form
.github/workflows/deploy.yml
```

## Languages

ES default. EN toggle in header. Strings live in `scripts/i18n-strings.js`. Persisted to `localStorage`.

## Contact form

Currently uses Formspree placeholder endpoint. To activate:

- Sign up at https://formspree.io, create a form, paste endpoint into `<form action>` in `index.html`.
- Or flip `USE_MAILTO = true` in `scripts/form.js` to fall back to a `mailto:` link.

## Credits

Built from scratch. No frameworks. No bundlers.
