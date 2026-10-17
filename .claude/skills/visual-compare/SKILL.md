---
name: visual-compare
description: Compare the local build of a page against the live production site (www.hustlrr.ai) to catch unintended visual changes. Use after refactors or style changes that should not change how the site looks.
---

# Visual Comparison Against Production

Production at https://www.hustlrr.ai is the reference: it is the last merged `main`. Use this to confirm that a change only alters what it was meant to.

## Steps

1. Pick the page from $ARGUMENTS (default `/`). Also compare its `/de` twin if the change touches shared components.
2. Start `npm run dev` (port 4321) unless a server is already running for this checkout.
3. With your browser tool, open both `http://localhost:4321<page>` and `https://www.hustlrr.ai<page>`. Screenshot each at 1280x800, then at 375x812.
4. List every difference in:
   - Section order and layout
   - Colors (tokens in `src/styles/global.css`: bg `#0a0c16`/`#111327`, accent `#5e6cff`)
   - Typography (Inter for body and display text; sizes from the `--text-*` tokens)
   - Spacing, radius, shadows
   - Copy
5. Sort each difference as **intended** (part of the requested change) or **unintended**. Fix unintended ones in source and re-screenshot.
6. Report what you compared, what you fixed, and any differences you left on purpose.

Expect differences when the branch intentionally changes copy or design. Don't "fix" those back to production.
