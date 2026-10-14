import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('blog listing shows articles', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('h1')).toContainText('Blog');
    const cards = page.locator('a[href*="/blog/"]');
    await expect(cards).toHaveCount(4);
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
    const cards = page.locator('a[href*="/de/blog/"]');
    await expect(cards).toHaveCount(4);
  });

  test('German blog article renders', async ({ page }) => {
    await page.goto('/de/blog/getting-started-with-ai-models');
    await expect(page.locator('h1')).toContainText('Erste Schritte mit KI-Modellen');
  });
});
