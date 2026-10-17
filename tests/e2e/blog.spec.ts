import { test, expect } from '@playwright/test';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

// Derive expected card counts from the content folder so adding a post doesn't break the suite.
const postCount = (lang: 'en' | 'de') =>
  readdirSync(join(import.meta.dirname, '../../src/data/blog', lang)).filter((f) => f.endsWith('.md')).length;

test.describe('Blog', () => {
  test('blog listing shows articles', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('h1')).toContainText('Blog');
    const cards = page.locator('main a[href*="/blog/"]');
    await expect(cards).toHaveCount(postCount('en'));
  });

  test('blog article renders content', async ({ page }) => {
    await page.goto('/blog/getting-started-with-ai-models');
    await expect(page.locator('h1')).toContainText('Getting Started with AI Models');
    await expect(page.locator('.prose')).toBeVisible();
    await expect(page.locator('text=Back to Blog')).toBeVisible();
  });

  test('blog article has published date', async ({ page }) => {
    await page.goto('/blog/multi-model-workflows');
    await expect(page.locator('time')).toBeVisible();
  });

  test('German blog listing works', async ({ page }) => {
    await page.goto('/de/blog');
    await expect(page.locator('h1')).toContainText('Blog');
    const cards = page.locator('main a[href*="/de/blog/"]');
    await expect(cards).toHaveCount(postCount('de'));
  });

  test('German blog article renders', async ({ page }) => {
    await page.goto('/de/blog/getting-started-with-ai-models');
    await expect(page.locator('h1')).toContainText('Erste Schritte mit KI-Modellen');
  });
});
