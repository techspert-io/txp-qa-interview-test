import { test } from '@playwright/test';

test.fixme(
  'can retrieve a random question and reveal the answer',
  async ({ page }) => {
    await page.goto('/network-request');
  },
);
