import { expect, test } from '@playwright/test';

test('Home page should have initial text', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('h1 >> visible=true >> text=Frontend mentor')).toBeVisible();
});

test('Can add feedback', async ({ page }) => {
  await page.goto('./');
  await page.locator('button', { hasText: 'Add feedback' }).first().click();

  await expect(page).toHaveURL('/feedback/add/');
});
