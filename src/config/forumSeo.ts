import type { PageSeoEntry } from './pageSeoTypes';
import { forumPosts } from '../data/forum';

const TITLE_SUFFIX = ' | Arc Raiders Forum';
const TITLE_MAX = 60;
const DESC_MIN = 70;
const DESC_MAX = 155;
const DESC_PAD =
  ' Arc Raiders buyers discuss tiers, anti-cheat status, and loader setup on cheatsarcraiders.com.';

function truncate(text: string, max: number): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  return `${trimmed.slice(0, max - 1).trimEnd()}…`;
}

function forumTitle(question: string): string {
  const maxQuestion = TITLE_MAX - TITLE_SUFFIX.length;
  return `${truncate(question, maxQuestion)}${TITLE_SUFFIX}`;
}

function forumDescription(excerpt: string): string {
  let text = truncate(excerpt.trim(), DESC_MAX);
  if (text.length < DESC_MIN) {
    const room = DESC_MAX - text.length;
    const pad = room > 0 ? truncate(DESC_PAD.trim(), room): '';
    text = `${text}${pad}`.trim();
  }
  return truncate(text, DESC_MAX);
}

/** Unique meta for each forum thread (manual PAGE_SEO entries override on `/forum/choose-tier/` etc.). */
export const FORUM_PAGE_SEO: Record<string, PageSeoEntry> = Object.fromEntries(
  forumPosts.map((post) => [
    `/forum/${post.slug}/`,
    {
      title: forumTitle(post.title),
      description: forumDescription(post.excerpt),
      h1: post.title,
    },
  ]),
);