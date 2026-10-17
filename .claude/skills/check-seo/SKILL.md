---
name: check-seo
description: Audit SEO for all pages. Checks meta tags, structured data, Core Web Vitals optimization, hreflang, and crawlability. Use after modifying pages or before deployment.
---

# SEO Audit

Comprehensive SEO verification for all pages following 2026 best practices.

## Steps

1. **Build the site**: run `npm run build`. Most checks below can be done by parsing `dist/**/*.html` directly (a Node script, or `grep`), which covers every page without a browser.
2. **List the pages**: `find dist -name index.html | sort`. Skip redirect stubs (pages that contain only a meta refresh). Every remaining page, EN and DE, is in scope.

`tests/e2e/seo.spec.ts` already asserts a baseline on a few pages. This audit goes wider. If you find a regression that could recur, add an assertion there.

### For EVERY page:

3. **Check meta tags**:
   - `<title>` exists, under 60 characters, primary keyword near the beginning
   - `<meta name="description">` exists, 150-160 characters, includes a CTA
   - `<meta name="viewport" content="width=device-width, initial-scale=1">`
   - `<link rel="canonical" href="...">` — correct self-referencing URL
   - No duplicate meta tags

4. **Check hreflang tags**:
   - `<link rel="alternate" hreflang="en" href="...">` — correct EN URL
   - `<link rel="alternate" hreflang="de" href="...">` — correct DE URL
   - `<link rel="alternate" hreflang="x-default" href="...">` — points to EN version
   - Hreflang URLs are absolute (include full domain)
   - EN and DE pages reference each other bidirectionally

5. **Check Open Graph tags**:
   - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`
   - `og:image` is an absolute URL and exists
   - `og:locale` is `en_US` or `de_DE` as appropriate

6. **Check Twitter Card tags**:
   - `twitter:card` = `summary_large_image`
   - `twitter:title`, `twitter:description`, `twitter:image`

### Blog articles only:

7. **Check JSON-LD structured data**:
   - `@type: BlogPosting` schema present
   - Fields: `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `description`, `image`
   - `author.@type` = `Organization` or `Person`
   - `publisher` includes `logo`
   - Dates are in ISO 8601 format

8. **Check BreadcrumbList schema**:
   - Present on blog articles
   - Correct hierarchy: Home → Blog → Article

### Site-wide checks:

9. **Check sitemap**:
   - `/sitemap-index.xml` exists and is valid XML
   - Contains all pages (EN + DE)
   - No draft or hidden pages included

10. **Check robots.txt**:
    - `/robots.txt` exists
    - `Sitemap:` directive points to sitemap URL
    - `User-agent: *` allows crawling

11. **Check RSS feed**:
    - `/rss.xml` exists and is valid XML
    - Contains blog articles with correct links
    - `/de/rss.xml` exists for German feed

12. **Check images**:
    - All `<img>` tags have `alt` attributes
    - Images have explicit `width` and `height` attributes (prevents CLS)
    - Images use modern formats (WebP or AVIF preferred)
    - Hero/above-the-fold images are not lazy-loaded

13. **Check semantic HTML**:
    - One `<h1>` per page
    - Heading hierarchy is sequential (no h1 → h3 skipping h2)
    - Proper landmarks: `<nav>`, `<main>`, `<article>`, `<footer>`

14. **Check Core Web Vitals optimization**:
    - Fonts use `font-display: swap`
    - Critical fonts are preloaded via `<link rel="preload">`
    - No render-blocking JavaScript
    - CSS is minimal (Tailwind purges unused styles)

15. **Report findings** with specific pages and issues
