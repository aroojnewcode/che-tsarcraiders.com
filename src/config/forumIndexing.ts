/** Forum threads with sourcePath stay in the UI but are noindex — except these URLs. */
export const FORUM_INDEX_ALLOWLIST = new Set(['/forum/choose-tier/']);

export function isForumBlogMirror(sourcePath: string | undefined, pathname: string): boolean {
  return Boolean(sourcePath) && !FORUM_INDEX_ALLOWLIST.has(pathname);
}