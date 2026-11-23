import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const posts = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/blog/posts.ts');
let text = fs.readFileSync(posts, 'utf8');
text = text.replace(/\n\s*image:\s*['"][^'"]*['"],/g, '');
fs.writeFileSync(posts, text);
console.log('Stripped local blog image fields from posts.ts');