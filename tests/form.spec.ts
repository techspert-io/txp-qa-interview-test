import { test } from '@playwright/test';

test.fixme('can submit the form with minimal data', async ({ page }) => {
  await page.goto('/form');
});

test.fixme(
  'cannot submit the form with an invalid email address',
  async ({ page }) => {
    await page.goto('/form');
  },
);
