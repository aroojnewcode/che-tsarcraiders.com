# SEO intent clusters (cheatsarcraiders.com)

Use this when adding titles, internal links, or new pages so one URL owns each intent.

| Cluster | Primary URL | Supporting URLs | Notes |
|---------|-------------|-----------------|-------|
| Buy / compare tiers | `/products/arc-raiders-hacks/` | `/blog/buy-guide/`, `/blog/compare-arc-raiders-cheats/`, `/blog/lite-vs-pro/` | Money page; blog links back to hub for checkout. |
| Pre-purchase Q&A | `/before-you-buy/` | `/faq/` | Support card → before-you-buy; footer “Full FAQ” → `/faq/`. |
| Undetected / patch day | `/blog/patch-day/` | Product pages, FAQ safety items | No `/status/` shortcuts—link patch-day directly. |
| Home / brand | `/` | Hub, before-you-buy | Home has FAQ UI only (no FAQPage schema). |
| Loader setup after pay | `/blog/use-codes/` | `/support/` | No `/setup/` shortcuts. |
| Forum | `/forum/` | Unique threads; `/forum/choose-tier/` | Threads with `sourcePath` are **noindex** + omitted from sitemap except **`/forum/choose-tier/`** (allowlisted). |

## Maintenance

- Bump `PRODUCT_HUB_LASTMOD` in `src/config/contentLastmod.ts` when tier/pricing copy changes.
- Run `npm run build` then `node scripts/seo-audit.mjs` and `node scripts/seo-onpage-scan.mjs` before deploy.