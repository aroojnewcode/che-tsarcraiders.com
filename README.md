# cheatsarcraiders.com (Arc Raiders Hacks)

Static marketing site for **Arc Raiders** PC hacks — built with [Astro](https://astro.build).

**Canonical domain:** `https://cheatsarcraiders.com`

**Canonical repo folder:** `che-tsarcraiders.com-main` (Arc Raiders only; legacy Delta Force URLs remain as 301 redirects in `scripts/redirects.mjs`).

## Develop

```bash
npm install
npm run dev
```

## Build / deploy

```bash
npm run env:init   # once — INDEXNOW_KEY in .env
npm run build
npm run deploy
```

Set `PUBLIC_GA_MEASUREMENT_ID` in `.env` and Cloudflare build variables for GA4.

See `docs/SEO-DEPLOY.md` for IndexNow, HTTPS, and legacy URL redirects to the Arc Raiders product hub.

See `docs/SUBMISSION.md` if you need a zip under 100 MB (exclude `node_modules/` and `dist/`).