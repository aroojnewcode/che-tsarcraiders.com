/**
 * Unique titles/descriptions per route, all Arc Raiders-focused, no duplicate SERP copy.
 * Titles ~50–60 chars; meta descriptions ≤170 chars with buy intent; H1s = game keywords only (no buy copy).
 */

import { BLOG_PAGE_SEO } from "./pageSeoBlog";
import { FORUM_PAGE_SEO } from "./forumSeo";
import type { PageSeoEntry } from "./pageSeoTypes";

export type { PageSeoEntry } from "./pageSeoTypes";

const CORE_PAGE_SEO: Record<string, PageSeoEntry> = {
  "/": {
    title: "Arc Raiders Cheats 2026 | ESP, Aimbot & Extraction Hacks",
    description:
      "Buy Arc Raiders cheats. Compare Lite and Pro tiers, secure checkout, and a portal loader. Player ESP, container loot ESP, aimbot and 2D radar on Windows PC.",
    h1: "Arc Raiders Cheats & Hacks: ESP, Aimbot & Radar",
  },
  "/products/arc-raiders-hacks/": {
    title: "Buy Arc Raiders Cheats | Compare Lite vs Pro Hacks",
    description:
      "Buy Arc Raiders cheats on one hub. Compare Lite vs Pro vs Elite, live loader status, monthly pricing, ARC and container ESP, private external vs Cloud DMA, and checkout.",
    h1: "Arc Raiders Hacks 2026: Lite, Pro & Elite Cheats",
  },
  "/products/arc-raiders-hacks/lite/": {
    title: "Arc Raiders ESP & Wallhack | Skeleton ESP & 2D Radar",
    description:
      "Buy Arc Raiders ESP on Lite: player ESP, skeleton ESP, loot ESP, radar overlay, and stream-proof options. Check status, then checkout on PC.",
    h1: "Arc Raiders ESP Cheat & Wallhack (Lite Tier)",
  },
  "/products/arc-raiders-hacks/pro/": {
    title: "Arc Raiders Aimbot | Smoothing, FOV & Humanized Aim",
    description:
      "Buy Arc Raiders aimbot on Pro: soft aim, bone select, FOV smoothing, recoil control, and full Lite ESP for Topside extraction runs.",
    h1: "Arc Raiders Aimbot Hack: Soft Aim, FOV & Recoil Control (Pro)",
  },
  "/products/arc-raiders-hacks/elite/": {
    title: "Best Arc Raiders Elite Cheats 2026 | Full ESP Suite",
    description:
      "Buy Elite Arc Raiders cheats: full ESP, aimbot, route assist, Skin Changer, and fast patches for extraction PvP on Topside.",
    h1: "Best Arc Raiders Elite Hacks 2026: Full ESP, Aimbot & Radar",
  },
  "/products/arc-raiders-hacks/hwid-spoofer/": {
    title: "Arc Raiders HWID Spoofer | Reset Hardware Bans",
    description:
      "Buy Arc Raiders HWID spoofer after hardware flags. Reset disk, MAC and GPU IDs, portal setup on Steam, then pair with conservative cheat profiles.",
    h1: "Arc Raiders HWID Spoofer: Reset Hardware Flags",
  },
  "/products/arc-raiders-hacks/ugc/": {
    title: "Arc Raiders UGC Recovery Tool | Steam & Ban Appeals",
    description:
      "Buy UGC recovery for Arc Raiders. Document appeals, account holds, track status, and rebuild access after checkout.",
    h1: "Arc Raiders UGC Recovery & Ban Appeal Tool",
  },
  "/products/arc-raiders-hacks/unlock-all/": {
    title: "Arc Raiders Skin Changer & Unlock All Utility",
    description:
      "Buy Arc Raiders Skin Changer and Unlock All. Local cosmetic previews on PC, standalone utility or bundle with Elite at checkout.",
    h1: "Arc Raiders Skin Changer & Unlock All Utility",
  },
  "/products/arc-raiders-hacks/cloud-dma/": {
    title: "Arc Raiders DMA Cheat | Cloud DMA vs Loader",
    description:
      "Buy Arc Raiders Cloud DMA vs software loader. Compare hardware ESP, radar, and aimbot paths for Lite and Pro before checkout.",
    h1: "Arc Raiders Cloud DMA: Hardware Cheat Path",
  },
  "/products/arc-raiders-hacks/utilities/": {
    title: "Compare Hack Utilities | HWID Spoofer & UGC",
    description:
      "Compare and buy Arc Raiders utilities. HWID Spoofer vs UGC recovery, feature lists, and checkout on cheatsarcraiders.com.",
    h1: "Arc Raiders Hack Utilities: HWID Spoofer, UGC & Skin Changer",
  },
  "/blog/": {
    title: "Arc Raiders Cheats Setup Guide & Hacks Tips 2026",
    description:
      "Guides to buy Arc Raiders cheats: loader setup, ESP and aimbot tips, patch notes, and live loader status before and after checkout.",
    h1: "Arc Raiders Cheats Guides: ESP, Aimbot, Setup & Updates",
  },
  "/forum/": {
    title: "Arc Raiders Player Discussions | Hacks, ESP & Tips",
    description:
      "Arc Raiders community forum: ESP, radar, patches, loadouts, and tool tips. Join discussions, then compare tiers when you are ready to buy.",
    h1: "Arc Raiders Cheats Forum: ESP, Aimbot & Extraction Questions",
  },
  "/forum/choose-tier/": {
    title: "Choose Arc Raiders Hacks Tier | Lite, Pro or Elite",
    description:
      "Buy the right tier: Lite ESP and radar, Pro aimbot, Elite full suite. Feature lists and secure checkout on cheatsarcraiders.com.",
    h1: "Arc Raiders Hack Tiers: Lite, Pro or Elite Compared",
  },
  "/reviews/": {
    title: "Arc Raiders Hacks Reviews | Buyer Ratings & Feedback",
    description:
      "Read buyer reviews before you buy. Elite ESP, aimbot, HWID Spoofer, UGC and Skin Changer ratings for 2026.",
    h1: "Arc Raiders Hacks Reviews 2026: ESP, Aimbot & Loader Ratings",
  },
  "/faq/": {
    title: "Arc Raiders Cheats FAQ | EAC, Status & Ban Risk",
    description:
      "FAQ before you buy: Easy Anti-Cheat (EAC), Embark anti-cheat, loader status, Lite vs Pro prices, patch-day builds, and HWID spoofer answers.",
    h1: "Arc Raiders Cheats FAQ: Loader Status, Prices & Ban Risk",
  },
  "/terms/": {
    title: "Arc Raiders Hacks Terms of Sale | License & Refunds",
    description:
      "Terms for buying Arc Raiders hack licenses: delivery, refunds, personal-use limits, and ban risk on cheatsarcraiders.com.",
    h1: "Arc Raiders Hacks Terms of Sale",
  },
  "/about/": {
    title: "About Arc Raiders Hacks Store | Loader Updates & Help",
    description:
      "About cheatsarcraiders.com: Lite, Pro and Elite tiers, utilities, patch-day loaders, and Discord help after you buy on Steam PC.",
    h1: "About CheatsArcRaiders: Arc Raiders Hacks Store",
  },
  "/support/": {
    title: "Arc Raiders Hacks Discord Support | Loader Help",
    description:
      "Support after purchase: loader errors, HWID setup, and checkout issues. Open a Discord ticket with order ID and screenshots.",
    h1: "Arc Raiders Support: Loader Errors, HWID & Checkout Help",
  },
  "/before-you-buy/": {
    title: "Before You Buy Arc Raiders Cheats | Tiers FAQ",
    description:
      "Read before checkout: Lite vs Pro vs Elite, loader status, Steam on Windows 11, EAC ban risk, and what delivery includes.",
    h1: "Arc Raiders Extraction Cheats: Pre-Purchase Guide (Tiers & Risk)",
  },
  "/privacy/": {
    title: "Privacy Policy | Data, Cookies & Your Rights",
    description:
      "Privacy for cheatsarcraiders.com: cookies, analytics, checkout partners, and your rights when browsing or purchasing.",
    h1: "Privacy Policy: cheatsarcraiders.com",
  },
  "/go/arc-raiders/": {
    title: "Buy Arc Raiders Cheats | Secure Checkout 2026",
    description:
      "Buy Arc Raiders cheats: Lite and Pro checkout, secure payment, instant key, and loader portal access after purchase.",
    h1: "Arc Raiders Cheats: Lite, Pro & Elite Access",
  },
  "/go/skin-changer/": {
    title: "Skin Changer Checkout | Arc Raiders Unlock All",
    description:
      "Buy Arc Raiders Skin Changer checkout. Unlock All utility, local cosmetic previews, and instant portal access on PC.",
    h1: "Arc Raiders Skin Changer & Unlock All Access",
  },
  "/go/hwid-spoofer/": {
    title: "HWID Spoofer Checkout | Arc Raiders Hardware Bans",
    description:
      "Buy Arc Raiders HWID Spoofer. Checkout after hardware flags, portal setup, and Discord help after payment.",
    h1: "Arc Raiders HWID Spoofer: Hardware Ban Recovery",
  },
  "/go/ugc/": {
    title: "UGC Recovery Checkout | Arc Raiders Appeals",
    description:
      "Buy UGC recovery checkout. Ban appeal tooling and structured workflows after payment on cheatsarcraiders.com.",
    h1: "Arc Raiders UGC Recovery & Ban Appeals",
  },
  "/go/cloud-dma/": {
    title: "Cloud DMA Checkout | Arc Raiders Hardware Path",
    description:
      "Buy Cloud DMA checkout for Arc Raiders. Hardware cheat path sold separately from Lite, Pro, and Elite software tiers.",
    h1: "Arc Raiders Cloud DMA: Hardware Access",
  },
};

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  ...CORE_PAGE_SEO,
  ...BLOG_PAGE_SEO,
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || "/";
  if (!path.startsWith("/")) path = `/${path}`;
  if (path !== "/" && !path.endsWith("/")) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  const path = normalizeSeoPath(pathname);
  return PAGE_SEO[path] ?? FORUM_PAGE_SEO[path];
}