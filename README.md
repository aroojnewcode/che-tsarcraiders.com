# cheatsdeltaforce.net (Delta Force Hacks)

Static marketing site for **Delta Force** PC hacks — built with [Astro](https://astro.build).

**Canonical domain:** `https://cheatsdeltaforce.net`

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

See `docs/SEO-DEPLOY.md` for IndexNow, HTTPS, and legacy URL redirects to the Delta Force product hub.

See `docs/SUBMISSION.md` if you need a zip under 100 MB (exclude `node_modules/` and `dist/`).