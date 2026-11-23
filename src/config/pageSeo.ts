/**
 * Unique titles/descriptions per route, all Delta Force-focused, no duplicate SERP copy.
 * Titles ~50–60 chars; meta descriptions ≤170 chars with buy intent; H1s = game keywords only (no buy copy).
 */

import { BLOG_PAGE_SEO } from "./pageSeoBlog";
import { FORUM_PAGE_SEO } from "./forumSeo";
import type { PageSeoEntry } from "./pageSeoTypes";

export type { PageSeoEntry } from "./pageSeoTypes";

const CORE_PAGE_SEO: Record<string, PageSeoEntry> = {
  "/": {
    title: "Delta Force Cheats 2026 | Undetected Hacks, ESP & Aimbot",
    description:
      "Buy undetected Delta Force cheats—compare Lite, Pro & Elite, secure checkout, portal loader. ESP, aimbot, wallhack & 2D radar for Steam on Windows PC.",
    h1: "Undetected Delta Force Cheats & Hacks – ESP, Aimbot & Wallhack",
  },
  "/products/delta-force-hacks/": {
    title: "Buy Delta Force Cheats | Compare Lite vs Pro Delta Force Hacks",
    description:
      "Buy Delta Force cheats on one hub—compare Lite vs Pro vs Elite, 2026 pricing, undetected status. Player ESP, loot ESP, aimbot & secure checkout.",
    h1: "Delta Force Hacks 2026 – Lite, Pro & Elite Cheats",
  },
  "/products/delta-force-hacks/lite/": {
    title: "Delta Force ESP & Wallhack | Skeleton ESP & 2D Radar",
    description:
      "Buy Delta Force ESP & wallhack on Lite—player ESP, skeleton ESP, loot ESP, radar overlay, stream-proof options. Check status, then checkout on PC.",
    h1: "Delta Force ESP Cheat & Wallhack – Undetected Lite Tier",
  },
  "/products/delta-force-hacks/pro/": {
    title: "Delta Force Aimbot | Smoothing, FOV & Humanized Aim",
    description:
      "Buy Delta Force aimbot on Pro—soft aim, bone select, FOV smoothing, no recoil & no spread plus full Lite ESP for Warfare & Hazard Operations.",
    h1: "Delta Force Aimbot Hack – Soft Aim, FOV & No Recoil (Pro)",
  },
  "/products/delta-force-hacks/elite/": {
    title:
      "Best Delta Force Elite Cheats 2026 | Full Delta Force ESP & Aim Suite",
    description:
      "Buy Elite Delta Force cheats—full ESP, aimbot, route assist, Skin Changer & fast patches. Best all-in-one hack suite for Warfare & Hazard Operations.",
    h1: "Best Delta Force Elite Hacks 2026 – Full ESP, Aimbot & Radar",
  },
  "/products/delta-force-hacks/hwid-spoofer/": {
    title: "Delta Force HWID Spoofer | Delta Force HWID Ban Reset",
    description:
      "Buy Delta Force HWID spoofer after ACE bans—reset disk, MAC & GPU IDs, portal setup on Steam. Pair with undetected cheats on Windows 11.",
    h1: "Delta Force HWID Spoofer – Reset HWID Ban After ACE",
  },
  "/products/delta-force-hacks/ugc/": {
    title: "Delta Force UGC Recovery Tool | Steam & Ban Appeals",
    description:
      "Buy UGC recovery for Delta Force—document appeals, ACE holds & server bans, track status & rebuild access. Structured workflows after checkout.",
    h1: "Delta Force UGC Recovery & Ban Appeal Tool",
  },
  "/products/delta-force-hacks/unlock-all/": {
    title: "Delta Force Skin Changer & Unlock All Utility",
    description:
      "Buy Delta Force Skin Changer & Unlock All—local weapon & clothing previews on PC. Standalone utility or bundle with Elite at secure checkout.",
    h1: "Delta Force Skin Changer & Unlock All Utility",
  },
  "/products/delta-force-hacks/cloud-dma/": {
    title: "Delta Force DMA Cheat | Delta Force Cloud DMA vs Loader",
    description:
      "Buy Delta Force Cloud DMA vs software loader—compare hardware ESP, radar & aimbot paths for Lite/Pro users before checkout.",
    h1: "Delta Force Cloud DMA – Hardware Cheat Path",
  },
  "/products/delta-force-hacks/utilities/": {
    title: "Compare Hack Utilities | HWID Spoofer & UGC",
    description:
      "Compare & buy Delta Force utilities—HWID Spoofer vs UGC recovery, feature lists & checkout on cheatsdeltaforce.net.",
    h1: "Delta Force Hack Utilities – HWID Spoofer, UGC & Skin Changer",
  },
  "/blog/": {
    title: "Delta Force Cheats Setup Guide & Hacks Tips 2026",
    description:
      "Guides to buy Delta Force cheats—loader setup, ESP & aimbot tips, ACE patch notes & undetected status. Help before & after checkout.",
    h1: "Delta Force Cheats Guides – ESP, Aimbot, Setup & Updates",
  },
  "/forum/": {
    title: "Delta Force Player Discussions | Hacks, ESP & Gameplay Tips",
    description:
      "Delta Force community forum—ESP, radar, patches, loadouts & tool tips. Join discussions, then compare tiers when you are ready to buy.",
    h1: "Delta Force Cheats Forum – ESP, Aimbot & Gameplay Questions",
  },
  "/forum/choose-tier/": {
    title: "Choose Delta Force Hacks Tier | Lite, Pro or Elite",
    description:
      "Buy the right tier—Lite ESP & radar, Pro aimbot, Elite full suite. Feature lists & secure checkout on cheatsdeltaforce.net.",
    h1: "Delta Force Hack Tiers – Lite, Pro or Elite Compared",
  },
  "/reviews/": {
    title: "Delta Force Hacks Reviews | Buyer Ratings & Feedback",
    description:
      "Read buyer reviews before you buy—Elite ESP, aimbot, HWID Spoofer, UGC & Skin Changer ratings & checkout feedback for 2026.",
    h1: "Delta Force Hacks Reviews 2026 – ESP, Aimbot & Loader Ratings",
  },
  "/faq/": {
    title: "Delta Force Cheats FAQ | ACE & Undetected Status",
    description:
      "FAQ before you buy—ban risk, ACE anti-cheat, undetected status, Lite vs Pro prices, patch-day loaders & HWID spoofer answers.",
    h1: "Delta Force Cheats FAQ – Undetected Status, Prices & Ban Risk",
  },
  "/terms/": {
    title: "Delta Force Hacks Terms of Sale | License & Refunds",
    description:
      "Terms for buying Delta Force hack licenses—delivery, refunds, personal-use limits & ACE risk on cheatsdeltaforce.net.",
    h1: "Delta Force Hacks Terms of Sale",
  },
  "/about/": {
    title: "About Delta Force Hacks Store | Loader Updates & Help",
    description:
      "About cheatsdeltaforce.net—Lite, Pro & Elite tiers, utilities, patch-day loaders & Discord help after you buy on Steam PC.",
    h1: "About CheatsDeltaForce – Delta Force Hacks Store",
  },
  "/support/": {
    title: "Delta Force Hacks Discord Support | Loader Help Tickets",
    description:
      "Support after purchase—loader errors, HWID setup & checkout issues. Open a Discord ticket with order ID & screenshots.",
    h1: "Delta Force Support – Loader Errors, HWID & Checkout Help",
  },
  "/before-you-buy/": {
    title: "Before You Buy Hawk Ops Cheats | Tiers & ACE FAQ",
    description:
      "Buy only after you read this—Lite vs Pro vs Elite, undetected status, Steam on Windows 11, ban risk and what checkout delivers.",
    h1: "Delta Force Hawk Ops – Pre-Purchase Guide (Tiers & ACE)",
  },
  "/privacy/": {
    title: "Privacy Policy | Data, Cookies & Your Rights",
    description:
      "Privacy for cheatsdeltaforce.net—cookies, analytics, checkout partners & your rights when browsing or purchasing.",
    h1: "Privacy Policy – cheatsdeltaforce.net",
  },
  "/go/delta-force/": {
    title: "Buy Delta Force Cheats | Best Delta Force Hacks Checkout 2026",
    description:
      "Buy Delta Force cheats—undetected Lite & Pro checkout, secure payment, instant key & loader portal access after purchase.",
    h1: "Delta Force Cheats – Lite, Pro & Elite Access",
  },
  "/go/skin-changer/": {
    title: "Skin Changer Checkout | Delta Force Unlock All",
    description:
      "Buy Delta Force Skin Changer checkout—Unlock All utility, local cosmetic previews & instant portal access on PC.",
    h1: "Delta Force Skin Changer & Unlock All Access",
  },
  "/go/hwid-spoofer/": {
    title: "HWID Spoofer Checkout | Delta Force ACE Anti-Cheat",
    description:
      "Buy Delta Force HWID Spoofer—checkout after ACE hardware flags, portal setup & Discord help post-payment.",
    h1: "Delta Force HWID Spoofer – ACE Hardware Ban Tool",
  },
  "/go/ugc/": {
    title: "UGC Recovery Checkout | Delta Force Appeals",
    description:
      "Buy UGC recovery checkout—ban appeal tooling & structured workflows after payment on cheatsdeltaforce.net.",
    h1: "Delta Force UGC Recovery & Ban Appeals",
  },
  "/go/cloud-dma/": {
    title: "Cloud DMA Checkout | Delta Force Hardware Path",
    description:
      "Buy Cloud DMA checkout for Delta Force—hardware cheat path sold separately from Lite, Pro & Elite software tiers.",
    h1: "Delta Force Cloud DMA – Hardware Access",
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