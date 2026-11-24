/** Forum threads with sourcePath stay in the UI but are noindex , except these URLs. */
export const FORUM_INDEX_ALLOWLIST = new Set(['/forum/choose-tier/']);

export function isForumBlogMirror(sourcePath: string | undefined, pathname: string): boolean {
  return Boolean(sourcePath) && !FORUM_INDEX_ALLOWLIST.has(pathname);
}

/** Short UGC stubs add crawl noise without unique answers — keep in UI, noindex. */
export const FORUM_THIN_BODY_MAX_CHARS = 220;

export function isForumThinThread(body: string[]): boolean {
  return body.join(' ').replace(/\s+/g, ' ').trim().length < FORUM_THIN_BODY_MAX_CHARS;
}