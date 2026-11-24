import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const source = path.join(dist, 'sitemap-0.xml');
const siteOrigin = (process.env.SITEMAP_ORIGIN || 'https://cheatsarcraiders.com').replace(/\/$/, '');
const siteHostname = new URL(siteOrigin).hostname;
const URLSET_NS = 'http://www.sitemaps.org/schemas/sitemap/0.9';

if (!fs.existsSync(source)) {
  console.error('finalize-sitemap: dist/sitemap-0.xml not found — run astro build first.');
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');
const urlBlocks = raw.match(/<url>[\s\S]*?<\/url>/g) ?? [];

if (urlBlocks.length === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeLastmod(value) {
  if (!value?.trim()) return undefined;
  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  const parsed = Date.parse(trimmed);
  if (Number.isNaN(parsed)) return undefined;
  return new Date(parsed).toISOString().slice(0, 10);
}

function parseUrlBlock(block) {
  const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
  if (!loc) return null;
  const lastmod = normalizeLastmod(block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]);
  const changefreq = block.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1]?.trim();
  const priority = block.match(/<priority>([^<]+)<\/priority>/)?.[1]?.trim();
  return { loc, lastmod, changefreq, priority };
}

/** One canonical URL per page (https host, trailing slash). */
function canonicalLoc(loc) {
  const url = new URL(loc);
  url.protocol = 'https:';
  url.hostname = siteHostname;
  url.search = '';
  url.hash = '';
  let pathname = url.pathname;
  if (pathname !== '/' && !pathname.endsWith('/')) pathname = `${pathname}/`;
  return `${url.origin}${pathname}`;
}

function pathnameFromLoc(loc) {
  try {
    return new URL(loc).pathname;
  } catch {
    return '';
  }
}

function matchesSection(pathname, section) {
  return pathname === `/${section}/` || pathname.startsWith(`/${section}/`);
}

function writeUrlset(filePath, entries) {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<urlset xmlns="${URLSET_NS}">`,
  ];

  for (const entry of entries) {
    lines.push('  <url>');
    lines.push(`    <loc>${escapeXml(entry.loc)}</loc>`);
    if (entry.lastmod) lines.push(`    <lastmod>${entry.lastmod}</lastmod>`);
    if (entry.changefreq) lines.push(`    <changefreq>${entry.changefreq}</changefreq>`);
    if (entry.priority) lines.push(`    <priority>${entry.priority}</priority>`);
    lines.push('  </url>');
  }

  lines.push('</urlset>', '');
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
}

function dedupeEntries(rawEntries) {
  const byLoc = new Map();
  for (const entry of rawEntries) {
    if (!entry) continue;
    const loc = canonicalLoc(entry.loc);
    const normalized = { ...entry, loc };
    const existing = byLoc.get(loc);
    if (!existing) {
      byLoc.set(loc, normalized);
      continue;
    }
    if (normalized.lastmod && (!existing.lastmod || normalized.lastmod > existing.lastmod)) {
      byLoc.set(loc, normalized);
    }
  }
  return [...byLoc.values()].sort((a, b) => a.loc.localeCompare(b.loc));
}

const FORUM_INDEX_ALLOWLIST = new Set(['/forum/choose-tier/']);
const FORUM_THIN_BODY_MAX_CHARS = 220;

/** Forum threads mirrored from blog are noindex; keep them out of sitemap-forum.xml if an old build included them. */
function loadForumMirrorPathnames() {
  const forumFile = path.join(root, 'src', 'data', 'forum.ts');
  if (!fs.existsSync(forumFile)) return new Set();
  const text = fs.readFileSync(forumFile, 'utf8');
  const mirrorPaths = new Set();
  const re = /slug:\s*"([^"]+)"[\s\S]*?sourcePath:\s*"([^"]+)"/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    const pathname = `/forum/${match[1]}/`;
    if (!FORUM_INDEX_ALLOWLIST.has(pathname)) mirrorPaths.add(pathname);
  }
  return mirrorPaths;
}

const forumMirrorPathnames = loadForumMirrorPathnames();

function loadForumThinPathnames() {
  const forumFile = path.join(root, 'src', 'data', 'forum.ts');
  if (!fs.existsSync(forumFile)) return new Set();
  const text = fs.readFileSync(forumFile, 'utf8');
  const thinPaths = new Set();
  const blockRe = /slug:\s*"([^"]+)"[\s\S]*?body:\s*\[([\s\S]*?)\],\s*\n\s*comments:/g;
  let match;
  while ((match = blockRe.exec(text)) !== null) {
    const bodyChunk = match[2].replace(/^\s*\/\/.*$/gm, '');
    const bodyText = bodyChunk.replace(/["`\n]/g, ' ').replace(/\s+/g, ' ').trim();
    if (bodyText.length < FORUM_THIN_BODY_MAX_CHARS) {
      thinPaths.add(`/forum/${match[1]}/`);
    }
  }
  return thinPaths;
}

const forumThinPathnames = loadForumThinPathnames();

const parsed = urlBlocks.map(parseUrlBlock).filter(Boolean);
const entries = dedupeEntries(parsed).filter((entry) => {
  const pathname = pathnameFromLoc(entry.loc);
  return !forumMirrorPathnames.has(pathname) && !forumThinPathnames.has(pathname);
});

const blogEntries = entries.filter((e) => matchesSection(pathnameFromLoc(e.loc), 'blog'));
const forumEntries = entries.filter((e) => matchesSection(pathnameFromLoc(e.loc), 'forum'));
const pageEntries = entries.filter((e) => {
  const pathname = pathnameFromLoc(e.loc);
  return !matchesSection(pathname, 'blog') && !matchesSection(pathname, 'forum');
});

const indexLastmod = entries
  .map((e) => e.lastmod)
  .filter(Boolean)
  .sort()
  .at(-1) ?? new Date().toISOString().slice(0, 10);

writeUrlset(path.join(dist, 'sitemap-pages.xml'), pageEntries);
writeUrlset(path.join(dist, 'sitemap-blog.xml'), blogEntries);
writeUrlset(path.join(dist, 'sitemap-forum.xml'), forumEntries);

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="${URLSET_NS}">
  <sitemap>
    <loc>${siteOrigin}/sitemap-pages.xml</loc>
    <lastmod>${indexLastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteOrigin}/sitemap-blog.xml</loc>
    <lastmod>${indexLastmod}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteOrigin}/sitemap-forum.xml</loc>
    <lastmod>${indexLastmod}</lastmod>
  </sitemap>
</sitemapindex>
`;

fs.writeFileSync(path.join(dist, 'sitemap-index.xml'), indexXml, 'utf8');
/** Canonical sitemap URL for robots and GSC (avoid duplicating urlsets). */
fs.writeFileSync(path.join(dist, 'sitemap.xml'), indexXml, 'utf8');

const legacySitemap0 = path.join(root, 'public', 'sitemap-0.xml');
if (fs.existsSync(legacySitemap0)) fs.unlinkSync(legacySitemap0);
const distLegacy = path.join(dist, 'sitemap-0.xml');
if (fs.existsSync(distLegacy)) fs.unlinkSync(distLegacy);

const publicDir = path.join(root, 'public');
for (const name of [
  'sitemap-index.xml',
  'sitemap.xml',
  'sitemap-pages.xml',
  'sitemap-blog.xml',
  'sitemap-forum.xml',
]) {
  fs.copyFileSync(path.join(dist, name), path.join(publicDir, name));
}

console.log(
  `Sitemap finalized: ${entries.length} unique URLs (${pageEntries.length} pages, ${blogEntries.length} blog, ${forumEntries.length} forum)`,
);
