import { expect, test } from '@playwright/test';
import axios from 'axios';

import FormData from 'form-data';
import { key } from '../playwright.config';

const testUrlObj = {
  url: 'https://example.com/',
  slug: 'p39en4ru',
  key: key,
};

test('redirect to existing url', async ({ page, baseURL }) => {
  const testFormData = new FormData();

  testFormData.append('url', testUrlObj.url);
  testFormData.append('key', testUrlObj.key);
  testFormData.append('slug', testUrlObj.slug);

  // this can error if url already exists so we still can proceed to redirect
  // if error is caused by something else, test will fail anyway
  try {
    const c = await axios.post(
      `${baseURL}/?index=&_data=routes%2Findex`,
      testFormData,
    );
  } catch (error) {}

  await page.goto(`${baseURL}/${testUrlObj.slug}`);

  expect(page.url()).toBe(testUrlObj.url);
});

test('redirect to home page if url doesnt exist', async ({ page, baseURL }) => {
  await page.goto(`${baseURL}/non-existing-slug`);

  expect(page.url()).toBe(baseURL + '/');
});
