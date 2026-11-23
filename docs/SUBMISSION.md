# Submitting this project (size limit)

This site is **Delta Force only** (`cheatsdeltaforce.net`). For uploads capped at **100 MB**:

1. **Do not zip** `node_modules/` or `dist/` — they are recreated with `npm install` and `npm run build`.
2. Expected source zip size: **~25 MB** (images in `public/images`, `src/`, `scripts/`, `public/brand`).
3. No single project file should exceed 100 MB; largest dev binaries live only inside `node_modules` after install.

```bash
npm install
npm run build
```