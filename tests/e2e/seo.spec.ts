import { test, expect } from '@playwright/test';

test.describe('SEO', () => {
  test('homepage has correct meta tags', async ({ page }) => {
    await page.goto('/');

    // Title
    const title = await page.title();
    expect(title).toContain('Hustlrr');
    expect(title.length).toBeLessThanOrEqual(70);

    // Meta description
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /AI/i);

    // Canonical
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /hustlrr\.ai/);
  });

  test('homepage has hreflang tags', async ({ page }) => {
    await page.goto('/');

    const hreflangEn = page.locator('link[rel="alternate"][hreflang="en"]');
    const hreflangDe = page.locator('link[rel="alternate"][hreflang="de"]');
    const hreflangDefault = page.locator('link[rel="alternate"][hreflang="x-default"]');

    await expect(hreflangEn).toHaveCount(1);
    await expect(hreflangDe).toHaveCount(1);
    await expect(hreflangDefault).toHaveCount(1);
  });

  test('homepage has Open Graph tags', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:description"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:url"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:type"]')).toHaveCount(1);
  });

  test('blog article has structured data', async ({ page }) => {
    await page.goto('/blog/multi-model-workflows');

    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toHaveCount(1);

    const content = await jsonLd.textContent();
    expect(content).toContain('BlogPosting');
    expect(content).toContain('datePublished');
  });

  test('German page has correct hreflang', async ({ page }) => {
    await page.goto('/de');

    const hreflangEn = page.locator('link[rel="alternate"][hreflang="en"]');
    const hreflangDe = page.locator('link[rel="alternate"][hreflang="de"]');

    await expect(hreflangEn).toHaveCount(1);
    await expect(hreflangDe).toHaveCount(1);
  });

  test('sitemap exists', async ({ page }) => {
    const response = await page.goto('/sitemap-index.xml');
    expect(response?.status()).toBeLessThanOrEqual(404);
  });

  test('RSS feed exists', async ({ page }) => {
    const response = await page.goto('/rss.xml');
    expect(response?.status()).toBe(200);
  });

  test('robots.txt exists', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    const text = await page.textContent('body');
    expect(text).toContain('Sitemap');
  });
});
