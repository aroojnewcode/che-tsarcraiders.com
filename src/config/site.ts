export const SITE_DOMAIN = 'cheatsdeltaforce.net';
/** Canonical HTTPS origin for sitemaps, IndexNow, and Search Console — must match the live Worker custom domain. */
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const CANONICAL_SITE_ORIGIN = SITE_URL;
/** Site mark (favicon + footer). Regenerate: npm run brand:icons */
export const SITE_LOGO = '/logo.svg';
/** Navbar corner mark (BrandGun). Regenerate: npm run brand:gun */
export const SITE_GUN_IMAGE = '/images/brand/delta-force-gun.webp';
/** Forum header / sidebar wordmark (transparent). Regenerate: npm run brand:icons */
export const FORUM_LOGO = '/brand/forum-mark.png';
export const PRODUCT_BASE = '/products/delta-force-hacks/';
export const TITLE_PREFIX = 'Delta Force Hacks';
export const SUPPORT_EMAIL = `support@${SITE_DOMAIN}`;
/** Discord invite for support tickets. Override with PUBLIC_DISCORD_URL. */
export const DISCORD_URL =
  (typeof import.meta !== 'undefined' && (import.meta.env.PUBLIC_DISCORD_URL as string | undefined)?.trim()) ||
  'https://discord.gg/Vu85F8auQS';
