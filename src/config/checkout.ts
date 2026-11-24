import { CHECKOUT_URLS, ARC_RAIDERS_CHECKOUT_URL } from './checkout-redirects.mjs';

/** Zadeyo affiliate checkout destinations. */
export const CHECKOUT = CHECKOUT_URLS;

/** All Get access / Buy CTAs use this URL. */
export const ZADEYO_CHECKOUT_URL = ARC_RAIDERS_CHECKOUT_URL;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for /go/[slug]/ checkout redirect pages. */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  arcRaiders: 'arc-raiders',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
  cloudDma: 'cloud-dma',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

/** Zadeyo affiliate URL for visible “Get access” / buy CTAs (same tab , no target=_blank). */
export function checkoutPath(product: CheckoutProduct = 'arcRaiders'): string {
  return CHECKOUT[product];
}

/** Internal /go/* path (blog links, bookmarks); 302 to Zadeyo via public/_redirects. */
export function checkoutRedirectPath(product: CheckoutProduct = 'arcRaiders'): string {
  return `/go/${CHECKOUT_SLUGS[product]}/`;
}

/** Alias used by /go/[slug] static redirect pages. */
export function checkoutExternalUrl(product: CheckoutProduct = 'arcRaiders'): string {
  return CHECKOUT[product];
}

/** Default product checkout redirect (replaces legacy Discord CTAs). */
export const PRIMARY_CHECKOUT_PATH = checkoutPath('arcRaiders');

/** Map internal product slugs to checkout redirect paths. */
export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'cloud-dma':
      return checkoutPath('cloudDma');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('arcRaiders');
  }
}

/** Resolve blog CTA or legacy href values to internal checkout paths. */
export function resolveCheckoutHref(href: string): string {
  const normalized = href.startsWith('/') ? href: `/${href}`;
  const goMatch = normalized.match(/^\/go\/([^/]+)\/?$/);
  if (goMatch) {
    const product = CHECKOUT_SLUG_TO_PRODUCT[goMatch[1]];
    if (product) return checkoutPath(product);
  }

  if (!href.startsWith('http')) {
    return normalized;
  }

  for (const [product, url] of Object.entries(CHECKOUT) as [CheckoutProduct, string][]) {
    if (href === url || href.startsWith(`${url}&`) || href.startsWith(`${url}?`)) {
      return checkoutPath(product);
    }
  }

  return href;
}