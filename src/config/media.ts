/** Canonical Arc Raiders hero & blog imagery (Supabase seo-media-library / arc-raiders). */
export const ARC_RAIDERS_SUPABASE_IMAGES = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794008121990-ksd4fl-arctic-cheats-how-to-setup-arc-raiders-cheats-full-tutorial-ajh5udvmfaa-873x491-.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794008037484-7fbixf-arctic-cheats-how-to-setup-arc-raiders-cheats-full-tutorial-ajh5udvmfaa-873x491-.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/a0f5bd09-1a27-4419-abd8-b568665f8a40/1794007894051-jedo40-jiiago-this-arc-raiders-cheat-lets-you-give-teammates-your-esp-uo0gu7hqeva-873x4.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866406963-t4fhr9-arcane-arc-s1.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866391955-mn4li4-arcane-arc-s2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866372473-d20cm3-arcane-arc-s3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/arc-raiders/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793866348754-97lv7p-arcane-arc-s4.webp',
] as const;

/** Pool for blog cards, article heroes, and OG fallbacks — hash-stable per slug. */
export const ARC_RAIDERS_MEDIA_URLS: readonly string[] = [...ARC_RAIDERS_SUPABASE_IMAGES];

export interface HeroCarouselSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

/** Homepage hero carousel — Arc Raiders Supabase shots. */
export const HERO_CAROUSEL_SLIDES: HeroCarouselSlide[] = [
  {
    src: ARC_RAIDERS_SUPABASE_IMAGES[0]!,
    alt: 'Arc Raiders cheat setup tutorial with loader and portal steps on PC',
    caption: 'Setup walkthrough',
    captionDesc: 'From checkout to your first Topside preset without skipping safety checks.',
  },
  {
    src: ARC_RAIDERS_SUPABASE_IMAGES[1]!,
    alt: 'Full Arc Raiders cheats setup guide showing overlay and menu layout',
    caption: 'Portal and loader',
    captionDesc: 'Where to download builds, load presets, and confirm status before you queue.',
  },
  {
    src: ARC_RAIDERS_SUPABASE_IMAGES[2]!,
    alt: 'Arc Raiders ESP shared with squadmates on a third-person extraction run',
    caption: 'Squad ESP sync',
    captionDesc: 'Keep your three-player squad aligned before a contested extract elevator.',
  },
  {
    src: ARC_RAIDERS_SUPABASE_IMAGES[3]!,
    alt: 'Arc Raiders player ESP and ARC machine highlights on Topside',
    caption: 'Player ESP',
    captionDesc: 'Distance tags and silhouettes for Raiders and patrol routes.',
  },
  {
    src: ARC_RAIDERS_SUPABASE_IMAGES[4]!,
    alt: 'Arc Raiders loot and container ESP on an urban extraction map',
    caption: 'Loot routing',
    captionDesc: 'Filter desk crates and field containers before the timer runs down.',
  },
  {
    src: ARC_RAIDERS_SUPABASE_IMAGES[5]!,
    alt: 'Arc Raiders combat overlay with radar and threat markers',
    caption: 'Radar stack',
    captionDesc: 'Mini-map style intel for third-party fights near extract zones.',
  },
  {
    src: ARC_RAIDERS_SUPABASE_IMAGES[6]!,
    alt: 'Arc Raiders loader-status HUD tuned for extraction PvP',
    caption: 'Full HUD preset',
    captionDesc: 'Balanced visibility for solo runs and squad matchmaking.',
  },
];

/** Product screenshot fallbacks (`npm run media:arc-raiders`). */
export const ARC_RAIDERS_LOCAL_IMAGES = [
  '/images/arc-raiders/arc-raiders-screenshot-1.png',
  '/images/arc-raiders/arc-raiders-screenshot-2.png',
  '/images/arc-raiders/arc-raiders-screenshot-3.png',
] as const;

/** Default social / JSON-LD preview. */
export const PRIMARY_HERO_IMAGE = ARC_RAIDERS_SUPABASE_IMAGES[0]!;

/** Stable cover per blog slug (cycles Supabase media library). */
export function arcRaidersBlogImageForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const index = hash % ARC_RAIDERS_MEDIA_URLS.length;
  return ARC_RAIDERS_MEDIA_URLS[index]!;
}