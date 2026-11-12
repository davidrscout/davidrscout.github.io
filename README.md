# natu

Single-page public profile. Static site: plain HTML, CSS and JS, no build step, no external requests.

- `index.html` — content, in English.
- `app.js` — Spanish strings and the language switch (`?lang=es`), plus the lab step tracker.
- `styles.css` — all styling.
- `fonts/` — self-hosted fonts, each under the SIL Open Font License 1.1 (licence texts alongside):
  Fraunces, IBM Plex Sans, IBM Plex Mono.

Served by GitHub Pages from the repository root (`.nojekyll` present). To preview locally:

    python -m http.server 8000
