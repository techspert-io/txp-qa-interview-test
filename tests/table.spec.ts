import { expect, test } from '@playwright/test';

test('details of all individuals are displayed', async ({ page }) => {
  await page.goto('/table');

  expect(1).toEqual(2);
});

test('can view the full details of an individual', async ({ page }) => {
  await page.goto('/table');

  expect(1).toEqual(2);
});
