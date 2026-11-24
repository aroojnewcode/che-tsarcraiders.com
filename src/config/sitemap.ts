import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { forumPosts } from '../data/forum';
import { parseBlogDate } from '../utils/schema';
import { lastmodForPath, STATIC_PAGE_LASTMOD } from './contentLastmod';
import { FORUM_INDEX_ALLOWLIST, isForumThinThread } from './forumIndexing';

const buildDate = new Date().toISOString().slice(0, 10);

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

const forumLastmod = new Map(
  forumPosts.map((post) => {
    const sourceSlug = post.sourcePath?.split('/').filter(Boolean).at(-1);
    const sourceArticle = sourceSlug ? blogPosts.find((item) => item.slug === sourceSlug): undefined;
    const lastmod = sourceArticle ? parseBlogDate(sourceArticle.date): buildDate;
    return [`/forum/${post.slug}/`, lastmod] as const;
  }),
);

const forumMirrorPaths = new Set(
  forumPosts
    .filter((post) => {
      const path = `/forum/${post.slug}/`;
      return post.sourcePath && !FORUM_INDEX_ALLOWLIST.has(path);
    })
    .map((post) => `/forum/${post.slug}/`),
);

const forumThinPaths = new Set(
  forumPosts.filter((post) => isForumThinThread(post.body)).map((post) => `/forum/${post.slug}/`),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path: `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.includes('/rss.xml') || path.startsWith('/go/')) {
    return undefined;
  }

  if (forumMirrorPaths.has(path) || forumThinPaths.has(path)) {
    return undefined;
  }

  const canonical = new URL(item.url);
  if (canonical.pathname !== '/' && !canonical.pathname.endsWith('/')) {
    canonical.pathname = `${canonical.pathname}/`;
  }
  item.url = canonical.href;

  if (path === '/') {
    item.lastmod = PRODUCT_OR_HOME_LASTMOD();
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    const dates = [...blogLastmod.values()].filter(Boolean).sort();
    item.lastmod = dates.at(-1) ?? buildDate;
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    const forumDates = [...forumLastmod.values()].filter(Boolean).sort();
    item.lastmod = forumDates.at(-1) ?? buildDate;
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = 'monthly';
    item.lastmod = forumLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = blogLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    item.lastmod = lastmodForPath(path, buildDate);
    return item;
  }

  if (path in STATIC_PAGE_LASTMOD || path === '/before-you-buy/' || path === '/reviews/') {
    item.priority = path === '/before-you-buy/' || path === '/reviews/' ? 0.6: 0.5;
    item.changefreq = path === '/before-you-buy/' || path === '/reviews/' ? 'monthly': 'yearly';
    item.lastmod = STATIC_PAGE_LASTMOD[path] ?? lastmodForPath(path, buildDate);
    return item;
  }

  item.lastmod = lastmodForPath(path, buildDate);
  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}

function PRODUCT_OR_HOME_LASTMOD(): string {
  return lastmodForPath('/products/arc-raiders-hacks/', buildDate);
}