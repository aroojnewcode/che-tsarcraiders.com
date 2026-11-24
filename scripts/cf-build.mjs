import { spawnSync } from 'node:child_process';
import { loadDotEnv } from './load-dotenv.mjs';

loadDotEnv();

/** Cloudflare Builds: bake canonical URLs for cheatsarcraiders.com (override with SITE_ORIGIN / SITEMAP_ORIGIN in CI if needed). */
const productionOrigin = 'https://cheatsarcraiders.com';
process.env.SITE_ORIGIN ||= productionOrigin;
process.env.SITEMAP_ORIGIN ||= productionOrigin;

/** Lean build: skips full image re-encode + IndexNow (more reliable on Cloudflare Builders). */
const result = spawnSync('npm', ['run', 'build:lean'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
