# Mangobot Frontend (Vite + Vue)

Frontend for the official Mangobot website. Built with **Vue 3 + Vite + Vue Router + Vue I18n + Ant Design Vue**, with **English (en)** and **Arabic (ar)** support.

> Chinese documentation: [README.md](./README.md)

**Who is this for?**

- First-time setup: see [Quick Start](#quick-start-3-steps) and [Local Development & Project Guide](#local-development--project-guide).
- Blog / events list data and Markdown content only: see [Blog / Events Content Configuration](#blog--events-content-configuration).
- UI copy or adding a new locale: see [Internationalization (i18n)](#internationalization-i18n).

---

## Quick Start (3 Steps)

```bash
# 1. Install dependencies (first time, or after package.json changes)
npm install

# 2. Start the dev server
npm run dev
```

Open the URL shown in the terminal, usually: **http://localhost:5173**

```bash
# 3. Build and preview the production bundle locally
npm run build
npm run preview
```

---

## Blog / Events Content Configuration

How to maintain blog and events list data locally, and where to place Markdown article bodies.

---

### 1. Where to Edit: Source vs Build Output

| Environment | Config path | Notes |
|-------------|---------------|-------|
| **Dev / source** | `public/config/blog.js` | Blog data (`en` / `ar` locale branches); copied as-is to `dist` on build |
| **Dev / source** | `public/config/event.js` | Events page data (same multi-locale structure) |
| **Dev / source** | `public/config/filters.js` | Site search / filter navigation labels (`en` / `ar` keys); copied with `public/` |
| **After build** | `dist/config/*.js` | Generated from `public/config/` via `npm run build`; you may edit `dist/config` directly for hotfixes on deployed bundles |

Static assets (e.g. event images) can live under `public/config/images/`. Reference them with **root-relative paths** starting with `/` (e.g. `/config/images/xxx.png`). After deploy, the site root maps to `dist` (or your CDN root).

**Locales & config:** Blog and events scripts store **`en` / `ar` (and future locale keys)** under `data`. At runtime, `localStorage.getItem('language') || 'en'` selects the branch assigned to `window.Blog` and `window.MangobotEvents`. The value written to `language` when switching locales must match these keys (default: `en`). Other locale-split config (e.g. products) is in `filters.js` above.

---

### 2. Blog: `public/config/blog.js` (`window.Blog`)

#### 2.1 Steps

1. Open `public/config/blog.js`.
2. Under **`data.en`, `data.ar`** (and any new locale keys), maintain `filters` and `events` per language.
3. In `filters`, maintain categories (`label` + numeric `value`). **`value` should stay consistent across locales** so tags and filtering stay aligned.
4. Add or edit entries in each locale’s `events` array.
5. Place matching `.md` files under **`public/markdown/{locale}/`** (see section 4).
6. Run `npm run dev` to preview; run `npm run build` before release.

#### 2.2 `filters` (categories)

- **`label`**: Category name shown in the UI.
- **`value`**: Numeric ID; `1` is usually “All”; other values drive filtering.

#### 2.3 `events` (article list) fields

| Field | Description |
|-------|-------------|
| `title` | Title |
| `subtitle` | Subtitle |
| `description` | List / summary text |
| `image` | Cover image URL (may be empty string) |
| `date` | Date, preferably `YYYY-MM-DD`; detail page formats as e.g. `Oct 06 2025` |
| `fileName` | **Without** `.md`; one file per locale directory; **unique per locale** (e.g. `test` → `public/markdown/en/test.md`, `public/markdown/ar/test.md`) |
| `isPinned` | Pinned to top (`true` / `false`) |
| `tags` | Array of numbers matching a `filters` **`value`** |
| `keysword` | Keyword array (optional; used for search) |

> If `window.Blog` is frozen read-only, edit `public/config/blog.js` before build, or adjust the pipeline to inject data after copy.

---

### 3. Events: `public/config/event.js` (`window.MangobotEvents`)

#### 3.1 Steps

1. Open `public/config/event.js`.
2. Under **`data.en`, `data.ar`**, etc., maintain `filters` (`label` + `value`) and `events`.
3. For Markdown-based event details, use the same path rules as Blog (section 4).

#### 3.2 `events` fields (current script)

| Field | Description |
|-------|-------------|
| `category` | Category label |
| `season` | Season / time label |
| `location` | Location |
| `name` | Event name |
| `description` | Description |
| `role` | Role / type label (e.g. Brand Showcase) |
| `image` | Image path (prefer `/config/images/...`) |
| `date` | Date (if used) |
| `isPinned` | Pinned |
| `tags` | **Field name is `tags` (with s)**; numbers matching `filters` **`value`** |
| `keysword` | Keyword array |
| `fileName` | If detail uses Markdown: no `.md` suffix; maps to `public/markdown/{locale}/{fileName}.md` |

---

### 4. Markdown Body (per locale)

1. Create files under **`public/markdown/{locale}/`**, e.g. `public/markdown/en/test.md`, `public/markdown/ar/test.md`. `{locale}` must match **`language`** in `localStorage` (default **`en`**).
2. Set `fileName` in blog/events config to the same slug, e.g. **`test`** (no `.md`). Titles/summaries may differ per locale; **`fileName` is usually shared** so the detail route stays the same.
3. Detail page fetches: **`/markdown/{language}/{fileName}.md`** (site root in dev and prod → `dist/markdown/{locale}/...`).

**Links in Markdown:**

- **External**: full URL, e.g. `https://example.com`.
- **Internal static assets**: root-relative path, e.g. `/config/images/photo.png`. Locale-specific assets can live under `public/markdown/en/imgs/` and be referenced as `/markdown/en/imgs/...`.

Standard Markdown is supported; rendering uses `marked` with `DOMPurify` sanitization.

---

### 5. Tags & Filtering (Blog / Events)

- “All” categories usually use **`value: 1`**. Filtering checks whether `tag` / `tags` **includes** the selected `value`.
- To add a category: add a `filters` entry with a new **`value`**, then reference that number in entry `tag` / `tags`.

---

### 6. Pre-release Checklist

- [ ] `fileName` is unique per locale; for every live locale, **`public/markdown/{locale}/{fileName}.md`** exists when a detail page is required.
- [ ] `blog.js` / `event.js` **`data`** includes all supported locale keys (`en`, `ar`, …) matching `localStorage.language`.
- [ ] Blog uses **`tag`**; Events uses **`tags`** — do not mix them.
- [ ] Image paths work in the deployment environment (correct `/` root).
- [ ] Changes are in **`public/config/`** and **`public/markdown/`**, and you ran **`npm run build`** if shipping `dist`.

---

## Local Development & Project Guide

### Prerequisites

| Tool | Notes |
|------|-------|
| **Node.js** | **18+** recommended ([nodejs.org](https://nodejs.org) LTS) |
| **npm** | Bundled with Node |
| **Git** | Optional, for clone / pull |

Verify installation:

```bash
node -v    # should show v18.x or higher
npm -v
```

### First Run (Step by Step)

1. Open a terminal in the project root (folder containing `package.json`).
2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Visit **http://localhost:5173** (port may differ; see terminal output).
5. Save file changes — hot reload applies; manual refresh is usually unnecessary.

> Dev server listens on `0.0.0.0:5173`; other devices on the LAN can use your machine IP (see terminal).

### Common Commands

| Command | Purpose | When to use |
|---------|---------|-------------|
| `npm install` | Install dependencies | First clone; after `package.json` updates |
| `npm run dev` | Dev server + HMR | Daily UI / style work |
| `npm run build` | Output to `dist/` | Before deploy |
| `npm run preview` | Preview `dist` locally | After `build` |

### Project Layout

```
mangobot-fd/
├── public/                 # Copied as-is to dist (not bundled)
│   ├── config/             # Blog, events, search config (see Blog/Events section)
│   ├── markdown/           # Blog/event Markdown bodies (en, ar, …)
│   └── Website_icon.svg    # Favicon and other static files
├── src/
│   ├── views/              # Pages (one folder ≈ one route)
│   ├── components/         # Shared components (header, footer, layout, …)
│   ├── route/index.js      # Route table
│   ├── i18n/               # UI translations (en / ar)
│   ├── assets/             # Images, fonts (bundled)
│   ├── main.js             # App entry
│   └── App.vue
├── index.html              # Loads public/config scripts
├── vite.config.js          # Vite (port, proxy, PostCSS, …)
├── package.json
└── dist/                   # Build output — do not treat as source of truth
```

### Pages & Routes

| Page | URL | Source (approx.) |
|------|-----|------------------|
| Home | `/` | `src/views/home/` |
| Products | `/products` | `src/views/products/` |
| Product detail | `/product/:id` | `src/views/product/` |
| Blog | `/blog` | `src/views/Blog/` |
| Events | `/robotics` | `src/views/Events/` |
| Partnerships | `/partnerships` | `src/views/Partnerships/` |
| About | `/aboutus` | `src/views/About/` |
| Contact | `/contactus` | `src/views/ContactUs/` |
| Privacy | `/privacyPolicy` | `src/views/privacyPolicy/` |
| Terms | `/termsConditions` | `src/views/termsConditions/` |
| Article / event detail | `/blobExample/:id` | `src/views/blobExample/` |

**Product `:id` → URL:**

| Product | URL |
|---------|-----|
| A2 Ultra | `/product/a2` |
| X2 Ultra | `/product/x2` |
| D1 Ultra | `/product/d1` |
| D1 Max | `/product/d1max` |
| D1 Max Pro | `/product/d1promax` |
| G1 Ultra | `/product/g1` |

Product copy and section config: `src/views/product/config.js` and `src/i18n/lang/{en,ar}/products/`.

### “I Want to Change X — Which File?”

| Goal | Edit here |
|------|-----------|
| Blog list, categories, summaries | `public/config/blog.js` |
| Events list, categories | `public/config/event.js` |
| Site search / filter labels | `public/config/filters.js` |
| Blog/event Markdown body | `public/markdown/en/`, `public/markdown/ar/` |
| Nav, footer, fixed UI copy | `src/i18n/lang/en.js`, `ar.js`, and subfolders |
| Supported locales / RTL | `src/i18n/index.js` (`SUPPORTED_LOCALES`, `RTL_LOCALES`) |
| Product copy, specs, images | `src/i18n/lang/.../products/*.js` + `src/views/product/` |
| Add or change routes | `src/route/index.js` |
| Top navigation | `src/components/header/` |
| Footer links | `src/components/footer/` |

**Two kinds of “config” — don’t mix them up:**

- **`public/config/*.js`**: Blog/events **list data**; visible after save in `dev`; redeploy requires `build`.
- **`src/i18n/`**: **UI strings** used in Vue via `$t()`.

Locale is stored in `localStorage` under `language` (`en` / `ar`), aligned with `data.en` / `data.ar` in `public/config`. Full behavior: [Internationalization (i18n)](#internationalization-i18n).

### Internationalization (i18n)

UI copy is managed by **Vue I18n**; blog/events **list data** still comes from `public/config/*.js`. Both use the same `localStorage.language`.

#### Core files

| File | Role |
|------|------|
| `src/i18n/index.js` | i18n instance, supported locales, RTL list, `getTextDirection()` |
| `src/i18n/lang/en.js`, `ar.js` | Main message bundles (`lang/{locale}/products/` submodules) |
| `src/App.vue` | Syncs `<html lang>` and `<html dir>` on locale change |
| `src/components/header/index.vue` | Language toggle; writes `localStorage` then **full page reload** |

#### Shared constants in `src/i18n/index.js`

```js
// Registered locales (ISO 639-1)
export const SUPPORTED_LOCALES = ["en", "ar"];

// Right-to-left locales
export const RTL_LOCALES = ["ar"];

// Used by App.vue for document.documentElement.dir
export function getTextDirection(locale) {
  return RTL_LOCALES.includes(String(locale)) ? "rtl" : "ltr";
}
```

- **`SUPPORTED_LOCALES`**: Allowed locales; invalid `localStorage.language` falls back to `en`.
- **`RTL_LOCALES`**: RTL languages; others default to LTR. Add `he`, `fa`, etc. here when needed — no change required in `App.vue`.
- **`getTextDirection()`**: Single place for `html[dir]`; avoids `locale === 'ar'` scattered in components.

#### Locale switch flow

1. User clicks language control in Header → toggles `en` / `ar` (extend Header for more locales).
2. `localStorage.setItem('language', locale)`.
3. **`window.location.reload()`**.
4. After reload:
   - `src/i18n/index.js` restores `locale` from `localStorage`;
   - `public/config/*.js` in `index.html` mounts `window.Blog` / `MangobotEvents` / `Filters` for that locale;
   - `App.vue` sets `lang` and `dir` on `document.documentElement`.

> Reload is required because `public/config/*.js` runs once on load and does not hot-update with Vue `locale`.

#### Using translations in components

```vue
<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>

<template>
  <h1>{{ t("homeFrameTitleLine1") }}</h1>
</template>
```

Keys live in `src/i18n/lang/{locale}.js` and subfiles. Large product blocks: `src/i18n/lang/{locale}/products/`.

#### Adding a new locale (checklist)

Example: French, code **`fr`**:

1. **Register locale**
   - `src/i18n/index.js`: add `"fr"` to `SUPPORTED_LOCALES`.
   - If RTL, add to `RTL_LOCALES` (French is LTR).

2. **Message bundle**
   - Create `src/i18n/lang/fr.js` (copy from `en.js`, translate).
   - Copy `src/i18n/lang/en/products/` → `fr/products/` as needed.
   - Register in `messages`: `fr: frModule`.

3. **Static config** (every locale needs a branch)
   - `public/config/blog.js` → `data.fr`
   - `public/config/event.js` → `data.fr`
   - `public/config/filters.js` → `data.fr`

4. **Markdown**
   - `public/markdown/fr/` with `{fileName}.md` files.

5. **Header**
   - Current toggle is `en` ↔ `ar` only; for 3+ locales, update `src/components/header/index.vue` (e.g. dropdown over `SUPPORTED_LOCALES`).

6. **Styles (optional)**
   - Audit hardcoded `locale === 'ar'` (e.g. `src/views/home/components/frame.vue`); use classes or `getTextDirection(locale)`.

7. **Verify**
   - `localStorage.setItem('language', 'fr')` + reload, or use Header.
   - Check UI copy, `window.Blog` / `MangobotEvents`, Markdown detail, and `html[dir]`.

#### i18n FAQ

**Q: Added `src/i18n/lang/fr.js` but blog stays English?**  
Also add `fr` branches in `public/config/blog.js`, `event.js`, `filters.js`, then reload.

**Q: Arabic layout direction wrong?**  
Ensure `ar` is in `RTL_LOCALES` and `App.vue` uses `getTextDirection()`.

**Q: Switch locale without reload?**  
Would require refactoring `public/config` to re-assign globals and notify pages; reload is the current simple approach.

### Dev API Proxy

`vite.config.js` proxies `/api` to `https://email.mangobot.org` (contact form, etc.). Local `/api/...` requests are forwarded — no extra CORS setup.

### Build & Deploy

```bash
npm run build    # output → dist/
npm run preview  # optional local static preview of dist
```

`wrangler.toml` targets Cloudflare Pages with output dir **`./dist`**. Typical flow:

1. `npm run build` locally with no errors.
2. Deploy `dist` to static hosting (Cloudflare Pages, Nginx, OSS, …).
3. After edits to `public/config` or `public/markdown`, rebuild and redeploy (or update matching files under live `dist` per your ops process).

`index.html` loads:

- `/config/blog.js` → `window.Blog`
- `/config/event.js` → `window.MangobotEvents`
- `/config/filters.js` → filter config

Ensure these URLs resolve at the site root after deploy.

### FAQ

**Q: `npm install` slow or failing?**  
Try a mirror, e.g. `npm config set registry https://registry.npmmirror.com` (local only).

**Q: Changed `public/config/blog.js` but UI unchanged?**  
Edit `public/config/`, not only `dist/config/`; refresh in dev. For production, rebuild and redeploy.

**Q: Blog detail fails to load?**  
Check `public/markdown/{locale}/{fileName}.md` exists and `fileName` matches config (no `.md` in config).

**Q: Port 5173 in use?**  
Free the port or change `server.port` in `vite.config.js`.

**Q: Styles don’t match design?**  
Desktop: PostCSS converts px → vw at **1920** design width. Product mobile blocks use hand-written **440**-based vw; watch `@media (max-width: 767px)`.

---

## Tech Stack

| Category | Choice |
|----------|--------|
| Framework | Vue 3 |
| Build | Vite 7 |
| Routing | Vue Router 4 |
| i18n | Vue I18n; see [Internationalization](#internationalization-i18n) for `SUPPORTED_LOCALES` / `RTL_LOCALES` / `getTextDirection()` |
| UI | Ant Design Vue 4 |
| Styles | Less / Sass + PostCSS (px → vw) |
| Markdown | marked + DOMPurify |
| Carousel, etc. | Swiper |
