# Submitting this project (size limit)

This site is **Arc Raiders only** (`cheatsarcraiders.com`). Submit from **`che-tsarcraiders.com-main`**. Upload caps: **100 MB per file** and total zip budget.

1. **Do not zip** `node_modules/` or `dist/` — they are recreated with `npm install` and `npm run build`.
2. Expected source zip size: **~25 MB** (images in `public/images`, `src/`, `scripts/`, `public/brand`).
3. **Every single file** must be under 100 MB (no exceptions). Run a size check before zipping (see below). Largest dev binaries live only inside `node_modules` after install.

**Pre-zip size check (PowerShell, from repo root):**

```powershell
Get-ChildItem -Recurse -File src,public,scripts,docs | Where-Object { $_.Length -gt 95MB }
(Get-ChildItem -Recurse -File src,public,scripts,docs | Measure-Object -Property Length -Sum).Sum / 1MB
```

```bash
npm install
npm run build
```