import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

const dist = join(process.cwd(), 'dist');
const issues = { multiH1: [], longTitle: [], longDesc: [], shortDesc: [] };
const titles = new Map();

for (const file of walk(dist)) {
  const h = readFileSync(file, 'utf8');
  const rel = file.replace(/\\/g, '/').split('dist/')[1];
  const h1s = [...h.matchAll(/<h1\b/gi)];
  if (h1s.length !== 1) issues.multiH1.push({ rel, count: h1s.length });
  const t = h.match(/<title>([^<]+)<\/title>/)?.[1] ?? '';
  const d = h.match(/<meta name="description" content="([^"]+)"/)?.[1] ?? '';
  if (t.length > 60) issues.longTitle.push({ rel, len: t.length, t });
  if (d.length > 170) issues.longDesc.push({ rel, len: d.length, d });
  if (d.length < 70 && rel !== '404.html') issues.shortDesc.push({ rel, len: d.length });
  const list = titles.get(t) ?? [];
  list.push(rel);
  titles.set(t, list);
}

const dupTitles = [...titles.entries()].filter(([, v]) => v.length > 1);

console.log(
  JSON.stringify(
    {
      multiH1Count: issues.multiH1.length,
      multiH1: issues.multiH1,
      longTitleCount: issues.longTitle.length,
      longTitles: issues.longTitle.slice(0, 20),
      longDescCount: issues.longDesc.length,
      shortDescCount: issues.shortDesc.length,
      dupTitleCount: dupTitles.length,
      dupTitles,
    },
    null,
    2,
  ),
);