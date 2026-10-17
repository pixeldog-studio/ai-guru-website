---
name: check-animations
description: Verify scroll-reveal, hover, and hero-load animations work and respect prefers-reduced-motion. Use after adding or modifying animations on any page or component.
---

# Micro-Animation Verification

Check the motion system as it is actually implemented. Don't add new animation mechanisms (CSS scroll timelines, View Transitions, ...) unless the user asked for them.

## How motion works here

- **Scroll reveal**: elements with `.animate-reveal` (or children of `.animate-stagger`) are visible by default. The inline script in `src/layouts/BaseLayout.astro` adds `.will-animate` to hide them, then an IntersectionObserver adds `.revealed`. CSS is in `src/styles/animations.css`, wrapped in `@media (prefers-reduced-motion: no-preference)`.
- **Hover/press**: transitions on buttons, cards (`.hover-card`) and links, defined in `animations.css` and component classes.
- **Hero load**: staggered entrance on hero children; `animate-nav` on the header.
- **Tokens** (`src/styles/global.css`): `--ease-smooth`, `--ease-bounce`, `--duration-fast` 100ms, `--duration-base` 200ms, `--duration-slow` 400ms, `--duration-reveal`.

## Steps

1. Start `npm run dev` (port 4321) unless a server is already running for this checkout.
2. Open the page in your browser tool (Playwright MCP, Chrome DevTools MCP, or the harness preview).
3. **Scroll reveal**: before scrolling, below-the-fold `.animate-reveal` elements should have `will-animate`. After scrolling them into view they should gain `revealed` and end at `opacity: 1`. Check with an evaluate call, e.g. `[...document.querySelectorAll('.animate-reveal')].map(e => [e.className, getComputedStyle(e).opacity])`.
4. **No-JS safety**: content must not stay hidden if the script fails. Nothing should be `opacity: 0` without `.will-animate`.
5. **Hover**: hover a primary button and a card; confirm `transition` uses the duration/easing tokens and the transform/shadow changes.
6. **Reduced motion**: emulate `prefers-reduced-motion: reduce` and reload. Every `.animate-reveal` element should be fully visible immediately, with no transforms.
7. Report findings with file and selector. Only fix real regressions (hidden content, missing reduced-motion handling, broken tokens), then re-run the check.
