/**
 * Content dates for sitemap lastmod , bump PRODUCT_HUB_LASTMOD when tiers/pricing copy changes.
 */
export const PRODUCT_HUB_LASTMOD = '2026-11-01';

/** Rarely edited pages , bump when legal/support copy changes. */
export const STATIC_PAGE_LASTMOD: Record<string, string> = {
  '/about/': '2026-10-01',
  '/support/': '2026-11-01',
  '/privacy/': '2026-10-01',
  '/terms/': '2026-10-01',
  '/faq/': '2026-11-01',
  '/before-you-buy/': '2026-11-23',
  '/reviews/': '2026-10-15',
};

export function lastmodForPath(pathname: string, fallback: string): string {
  if (STATIC_PAGE_LASTMOD[pathname]) return STATIC_PAGE_LASTMOD[pathname]!;
  if (pathname.startsWith('/products/')) return PRODUCT_HUB_LASTMOD;
  return fallback;
}