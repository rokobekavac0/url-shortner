import { expect, test } from '@playwright/test';

test.describe('Create new url', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL!);
  });

  test('Invalid URL', async ({ page, baseURL }) => {
    await expect(page).toHaveURL('http://localhost:8787/?index');
  });
});
