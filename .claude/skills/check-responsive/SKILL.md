---
name: check-responsive
description: Verify responsive layout at mobile, tablet, and desktop breakpoints. Use after building or modifying any page or component.
---

# Responsive Layout Verification

Check the changed page(s) at all three breakpoints and report layout issues. Default to `/` and `/de` if no page was given in $ARGUMENTS.

## Steps

1. Start `npm run dev` (port 4321) unless a server is already running for this checkout.
2. With your browser tool (Playwright MCP, Chrome DevTools MCP, or the harness preview), screenshot each page at:
   - Mobile: 375x812
   - Tablet: 768x1024
   - Desktop: 1280x800
3. At each size, check:
   - No horizontal scroll: `document.documentElement.scrollWidth <= window.innerWidth`
   - No text clipped or overflowing, no overlapping elements
   - Header (logo + Features/Blog links) fits on one row at 375px
   - Images stay inside their containers
   - Body text is at least 14px on mobile; tap targets at least 44x44px
4. Check the German version of the same page too. German strings run longer and are the usual cause of overflow.
5. Report issues with viewport, page, and element. Fix them in source, then re-screenshot to confirm.

## Breakpoints (Tailwind defaults)

- Mobile: < 640px
- Tablet: 640px to 1023px (`sm:`/`md:`)
- Desktop: 1024px+ (`lg:`)

Content width is capped by `--max-w-content` (960px) and `--max-w-article` (768px) in `src/styles/global.css`.

## Usual suspects

- Blog grid: 1 column on mobile, 2 from `md:`
- Footer columns stacking on mobile
- Comparison tables on `/compare/*` overflowing on mobile
- Long German headlines in the hero and feature cards
