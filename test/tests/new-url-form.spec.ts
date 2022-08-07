import { expect, Page, test } from '@playwright/test';

interface URLForm {
  url: string;
  slug?: string;
  key: string;
}

const fillFrom = async (page: Page, form: URLForm) => {
  for (const key in form) {
    await page.fill(`input[name="${key}"]`, form[key as keyof URLForm] ?? '');
  }
};

test.describe('New url form', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL!);
  });

  test('error if url is invalid', async ({ page, baseURL }) => {
    await fillFrom(page, {
      url: 'invalid-url',
      slug: 'test',
      key: process.env.KEY!,
    });

    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid URL')).not.toHaveCount(0);
  });

  test('error if url domain is disallowed', async ({ page, baseURL }) => {
    await fillFrom(page, {
      url: 'localhost:8787',
      key: process.env.KEY!,
    });

    await page.click('button[type="submit"]');

    await expect(page.locator('text=Domain is not allowed')).not.toHaveCount(0);
  });

  test('error if key is invalid', async ({ page, baseURL }) => {
    await fillFrom(page, {
      url: 'https://random-url.com',
      slug: 'test',
      key: 'invalid-key',
    });

    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid Key')).not.toHaveCount(0);
  });

  test('receive slug if not submitted', async ({ page, baseURL }) => {
    await fillFrom(page, {
      url: 'https://random-url.com',
      key: process.env.KEY!,
    });

    await page.click('button[type="submit"]');

    const url = await page.getAttribute('[data-url]', 'data-url');

    await expect(url).not.toBeNull();
  });
});
