import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('header blog link works', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Blog' })
      .click();
    await expect(page).toHaveURL(/\/blog/);
  });

  test('language switcher switches to German', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Auf Deutsch wechseln' }).click();
    await expect(page).toHaveURL(/\/de\/?$/);
  });

  test('language switcher switches back to English', async ({ page }) => {
    await page.goto('/de');
    await page.getByRole('link', { name: 'Switch to English' }).click();
    await expect(page).toHaveURL('/');
  });

  test('footer legal links point to the right places', async ({ page }) => {
    await page.goto('/');
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'Privacy Policies' })).toHaveAttribute(
      'href',
      /iubenda\.com\/privacy-policy/,
    );
    await expect(footer.getByRole('link', { name: 'Terms of Service' })).toHaveAttribute(
      'href',
      /iubenda\.com\/terms-and-conditions/,
    );
    await footer.getByRole('link', { name: 'Imprint' }).click();
    await expect(page).toHaveURL(/\/imprint/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Imprint');
  });

  test('blog back link works', async ({ page }) => {
    await page.goto('/blog/multi-model-workflows');
    await page.click('text=Back to Blog');
    await expect(page).toHaveURL(/\/blog/);
  });
});
