import { expect, test } from '@playwright/test';

test('Home page should have initial text', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('text=Hello world')).toBeVisible();
});
