/** Canonical Delta Force hero & blog imagery (Supabase seo-media-library / delta-force). */
export const DELTA_FORCE_SUPABASE_IMAGES = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/delta-force/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794261715303-153xml-dj-vikash-lakhisarai-delta-force-cheats-the-most-powerful-hack-you-will-ever-use.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/delta-force/b15955c0-41e9-482d-a072-e4e797bccc2c/1793642384017-7e6kyx-dj-vikash-lakhisarai-delta-force-cheats-the-best-delta-force-hack-you-ve-ever-se.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/delta-force/b15955c0-41e9-482d-a072-e4e797bccc2c/1793642355754-jeg31l-dj-vikash-lakhisarai-delta-force-cheats-the-best-delta-force-hack-you-ve-ever-se.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/delta-force/b15955c0-41e9-482d-a072-e4e797bccc2c/1793642240214-6q965x-dj-vikash-lakhisarai-delta-force-cheats-the-best-delta-force-hack-you-ve-ever-se.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/delta-force/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194019127-iubf8a-phoenix-df-chams-s2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/delta-force/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793194018385-gbjigg-phoenix-df-chams-s1.webp',
] as const;

/** Pool for blog cards, article heroes, and OG fallbacks — hash-stable per slug. */
export const DELTA_FORCE_MEDIA_URLS: readonly string[] = [...DELTA_FORCE_SUPABASE_IMAGES];

export interface HeroCarouselSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

/** Homepage hero carousel — Delta Force Supabase shots. */
export const HERO_CAROUSEL_SLIDES: HeroCarouselSlide[] = [
  {
    src: DELTA_FORCE_SUPABASE_IMAGES[0]!,
    alt: 'Delta Force cheat overlay with ESP HUD on live gameplay',
    caption: 'ESP HUD overview',
    captionDesc: 'Full combat overlay with readable threat markers and HUD framing.',
  },
  {
    src: DELTA_FORCE_SUPABASE_IMAGES[1]!,
    alt: 'Delta Force cheats in action — player awareness and combat assist overlay',
    caption: 'Combat awareness',
    captionDesc: 'High-visibility ESP stack tuned for fast Warfare rotations.',
  },
  {
    src: DELTA_FORCE_SUPABASE_IMAGES[2]!,
    alt: 'Delta Force hack gameplay screenshot with enemy and loot ESP enabled',
    caption: 'Elite tier preview',
    captionDesc: 'Combined player ESP and loot routing on a contested objective.',
  },
  {
    src: DELTA_FORCE_SUPABASE_IMAGES[3]!,
    alt: 'Delta Force undetected cheats showing squad and enemy tags through smoke',
    caption: 'Squad lane intel',
    captionDesc: 'Team filters and distance readouts before you wide-swing.',
  },
  {
    src: DELTA_FORCE_SUPABASE_IMAGES[4]!,
    alt: 'Delta Force Phoenix chams season 2 — character highlight through cover',
    caption: 'Phoenix chams S2',
    captionDesc: 'Chams profile for spotting operators through light cover.',
  },
  {
    src: DELTA_FORCE_SUPABASE_IMAGES[5]!,
    alt: 'Delta Force Phoenix chams season 1 — operator glow and silhouette ESP',
    caption: 'Phoenix chams S1',
    captionDesc: 'Silhouette ESP preset for Hazard Operations and Warfare.',
  },
];

/** Product screenshot fallbacks (`npm run media:delta-force`). */
export const DELTA_FORCE_LOCAL_IMAGES = [
  '/images/delta-force/delta-force-screenshot-1.png',
  '/images/delta-force/delta-force-screenshot-2.png',
  '/images/delta-force/delta-force-screenshot-3.png',
] as const;

/** Default social / JSON-LD preview. */
export const PRIMARY_HERO_IMAGE = DELTA_FORCE_SUPABASE_IMAGES[0]!;

/** Stable cover per blog slug (cycles Supabase media library). */
export function deltaForceBlogImageForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const index = hash % DELTA_FORCE_MEDIA_URLS.length;
  return DELTA_FORCE_MEDIA_URLS[index]!;
}