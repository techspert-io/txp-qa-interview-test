import { expect, test } from '@playwright/test';

test('can submit the form with minimal data', async ({ page }) => {
  await page.goto('/form');

  expect(1).toEqual(2);
});

test('cannot submit the form with an invalid email address', async ({
  page,
}) => {
  await page.goto('/form');

  expect(1).toEqual(2);
});
