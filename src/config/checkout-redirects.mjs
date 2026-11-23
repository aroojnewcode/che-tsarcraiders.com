/** Primary Zadeyo affiliate checkout — all combat tiers & default “Get access” CTAs (Lite / Pro / Elite). */
export const DELTA_FORCE_CHECKOUT_URL =
  'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fdelta-force';

/** @deprecated Use DELTA_FORCE_CHECKOUT_URL */
export const DEFAULT_COMBAT_CHECKOUT_URL = DELTA_FORCE_CHECKOUT_URL;

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  deltaForce: DELTA_FORCE_CHECKOUT_URL,
  skinChanger: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fskin-changer',
  hwidSpoofer: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fugc',
  cloudDma: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fcloud-dma',
};
