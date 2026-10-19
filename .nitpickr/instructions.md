# Review instructions for ai-guru-website

Static Astro marketing site for the Hustlrr app, EN + DE, deployed to GitHub Pages from `main`. Flag these, in priority order:

1. **Untrue product claims.** Web browsing and "chat with any webpage" were removed on purpose; copy that brings them back is a bug. Ask about any new feature, model, platform or price claim the PR description doesn't source; don't assume it's false.
2. **EN/DE drift.** A page under `src/pages/` without its twin under `src/pages/de/`, a key added to only one of `translations.en` / `translations.de` in `src/i18n/translations.ts`, or a post in `src/data/blog/en/` without its `de` twin, `lang` and matching `translationSlug`. Also flag a change made to one language's copy only.
3. **Hardcoded App Store links.** Any `apps.apple.com` URL outside `src/lib/urls.ts`. Links must use `APP_STORE_URL`, which carries the campaign attribution.
4. **Broken URLs.** A removed or renamed page without a `redirects` entry in `astro.config.mjs` for both languages.
5. **SEO regressions.** A new page that doesn't render through a layout using `SEOHead` (title, description, canonical, hreflang EN/DE/x-default), or broken JSON-LD in `src/lib/jsonLd.ts` / `BlogLayout.astro`.
6. **Hardcoded UI text.** User-facing strings in components instead of `src/i18n/translations.ts`.
7. **Weakened checks.** Edits to `tests/unit/parity.test.ts` or `tests/e2e/` that loosen an assertion or skip a case so the change passes.
8. **Acceptance criteria.** If the PR description lists acceptance criteria, flag a changed line that contradicts one. Don't flag a missing description.

Don't comment on formatting, naming, Tailwind class order, copy tone, or anything `npm run verify` or the lint workflow already catches.
