import { expect, test } from '@playwright/test';

test('can retrieve a random fact', async ({ page }) => {
  await page.goto('/network-request');

  expect(1).toEqual(2);
});
