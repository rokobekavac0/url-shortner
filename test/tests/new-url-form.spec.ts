import { expect, test } from '@playwright/test';

test.describe('Create new url', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL!);
  });

  test('Invalid URL', async ({ page, baseURL }) => {
    // Click [placeholder="example\.com"]
    await page.locator('[placeholder="example\\.com"]').click();

    // Fill [placeholder="example\.com"]
    await page.locator('[placeholder="example\\.com"]').fill('not url');

    // Press Tab
    await page.locator('[placeholder="example\\.com"]').press('Tab');

    // Fill [data-test-id="slug-input"]
    await page.locator('[data-test-id="slug-input"]').fill('slug');

    // Press Tab
    await page.locator('[data-test-id="slug-input"]').press('Tab');

    // Fill [placeholder="Password"]
    await page.locator('[placeholder="Password"]').fill('testing');

    // Press Enter
    await page.locator('[placeholder="Password"]').press('Enter');
    await expect(page).toHaveURL('http://localhost:8787/?index');
  });
});
