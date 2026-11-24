/** Primary Zadeyo affiliate checkout — all combat tiers & default “Get access” CTAs (Lite / Pro / Elite). */
export const ARC_RAIDERS_CHECKOUT_URL =
  'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Farc-raiders';

/** @deprecated Use ARC_RAIDERS_CHECKOUT_URL */
export const DEFAULT_COMBAT_CHECKOUT_URL = ARC_RAIDERS_CHECKOUT_URL;

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  arcRaiders: ARC_RAIDERS_CHECKOUT_URL,
  skinChanger: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fskin-changer',
  hwidSpoofer: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fugc',
  cloudDma: 'https://zadeyo.com/go/UROOJ?to=%2Fproducts%2Fcloud-dma',
};