# AGENTS.md

Marketing site for **Hustlrr**, an iOS/macOS app for chatting with multiple AI models. Static Astro 5 site, Tailwind CSS v4, English + German. Deployed to GitHub Pages at https://www.hustlrr.ai.

**Merging to `main` deploys to production immediately** (`.github/workflows/deploy.yml`). Never push to `main` directly; open a PR.

## Commands

| Command | What it does |
| --- | --- |
| `npm ci` | Install deps (each git worktree needs its own install) |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run check` | Type-check `.astro` and `.ts` files (`astro check`) |
| `npm test` | Vitest unit tests (`tests/unit`) — under 1s |
| `npm run build` | Static build to `dist/` |
| `npm run verify` | **check + unit tests + build.** Run before every commit |
| `npm run test:e2e` | Playwright against a fresh build (`tests/e2e`, 3 viewports), about 10s locally |
| `npm run verify:full` | `verify` then E2E. Run before opening a PR that touches UI |

Run one E2E file or viewport: `npx playwright test tests/e2e/blog.spec.ts --project="Desktop Chrome"`.

E2E always builds and serves this checkout on port 4321. If that port is busy (for example a dev server in another worktree), run with `PORT=4400 npm run test:e2e`.

## Definition of done

1. `npm run verify` passes.
2. If you changed markup, styles, routing, or copy: `npm run test:e2e` passes too.
3. If you changed visible UI: look at it at 375px, 768px and 1280px (see the `check-responsive` skill).
4. The PR check (`.github/workflows/pr-check.yml`) runs the same steps: typecheck, unit, build, E2E.

When you change behaviour a test asserts on, update the test in the same change. Don't delete a failing test to make it pass unless the feature it covers was removed on purpose.

## Layout

```
src/
  pages/           Routes. EN at the root, DE mirrored under pages/de/ (same relative paths)
  layouts/         BaseLayout (head, fonts, reveal script) → PageLayout (header/footer), plus Blog/Legal/FeaturePage/Landing
  components/      Astro components; all take a `lang` prop
  i18n/            translations.ts (all UI strings, EN + DE) and utils.ts (useTranslations, getLocalizedPath, ...)
  data/blog/{en,de}/  Markdown posts; schema in src/content.config.ts
  lib/urls.ts      APP_STORE_URL (the only place the App Store link may be defined)
  lib/jsonLd.ts    Structured-data helpers
  styles/          global.css (design tokens via Tailwind @theme), animations.css, prose.css, fonts.css
public/            Static files served as-is (images, fonts, robots.txt, CNAME)
assets/            Raw design exports. Not used by the build
tests/unit/        Vitest: i18n helpers, EN/DE parity guard
tests/e2e/         Playwright: homepage, navigation, blog, SEO
```

Path aliases (tsconfig): `@components/*`, `@layouts/*`, `@i18n/*`, `@lib/*`, `@/*` → `src/*`.

## Rules that aren't obvious from the code

**EN and DE always ship together.** `tests/unit/parity.test.ts` enforces that:
- every file under `src/pages/` (outside `de/`) has a twin at the same path under `src/pages/de/`
- `translations.en` and `translations.de` have identical keys and no empty values
- every post in `src/data/blog/en/` has a same-named post in `src/data/blog/de/`, with `lang` set and a matching `translationSlug`

German copy should read as natural German, not a word-for-word translation. Match the existing register: UI strings and pages use informal "du"; blog posts use formal "Sie".

**UI strings go in `src/i18n/translations.ts`.** Don't hardcode user-facing text in components. Page-specific long-form copy may live in the page file, but then both language versions must be updated.

**App Store links** must use `APP_STORE_URL` from `@lib/urls`. It carries campaign attribution (`pt`/`ct`). Never inline an `apps.apple.com` URL.

**Removed or renamed URLs need a redirect** in `astro.config.mjs` (`redirects`) for both languages, so indexed links don't 404.

**Design tokens**: use the CSS variables and Tailwind theme in `src/styles/global.css` (`bg-bg-card`, `text-text-secondary`, `var(--radius-card)`, ...) rather than new hex values or magic numbers.

**Scroll reveal**: add `animate-reveal` (or `animate-stagger` on a parent). The script in `BaseLayout.astro` uses IntersectionObserver; content stays visible without JS and under `prefers-reduced-motion`.

**AI model names** (GPT-6, Claude Opus 5.5, Gemini 4, Grok 4.7, ...) are repeated across components, translations, compare pages, the service pages and blog posts. To update them, `grep -rn` the old name across `src/` and `tests/` and change every hit in both languages.

**Product scope**: the app is about multi-model chat. Web-browsing features were deliberately removed from the site. Don't reintroduce browsing claims or "chat with any webpage" copy.

**SEO**: every page renders `SEOHead` via its layout (title, description, canonical, hreflang EN/DE/x-default, OG/Twitter). New pages must go through a layout that includes it. Blog posts get BlogPosting JSON-LD from `BlogLayout`.

## Adding things

- **Page**: create `src/pages/foo.astro` and `src/pages/de/foo.astro` using `PageLayout` with `lang` set. Add footer/header links through `getLocalizedPath()`. Run `npm run verify`.
- **Blog post**: add `src/data/blog/en/<slug>.md` and `src/data/blog/de/<slug>.md` with frontmatter `title`, `description`, `pubDate`, `lang`, `translationSlug: <slug>`. Listing pages, RSS, sitemap, and E2E counts pick it up automatically.
- **Translation key**: add it to both `en` and `de` in `translations.ts`. The `TranslationKey` type is derived from `en`.

## Agent tooling

Project skills live in `.claude/skills/`:
- `run-tests`: run the suites and triage failures
- `check-responsive`: screenshot and inspect at mobile/tablet/desktop
- `check-animations`: verify reveal and hover motion plus reduced-motion
- `check-seo`: meta/hreflang/JSON-LD/sitemap audit of the built site
- `visual-compare`: diff local changes against production
- `quality-gate`: all of the above before a risky merge

For browser checks, use whichever browser tool your harness provides (Playwright MCP, Chrome DevTools MCP, or a preview tool) against `npm run dev` or `npm run preview`. Shared permissions for routine commands are in `.claude/settings.json`; personal overrides go in `.claude/settings.local.json` (gitignored).
