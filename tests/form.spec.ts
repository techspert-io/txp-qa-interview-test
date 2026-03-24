import { expect, test } from '@playwright/test';

test('can submit the form with minimal data', async ({ page }) => {
  await page.goto('/form');

  await page.getByLabel('First name').fill('Jorge');
  await page.getByLabel('Last name').fill('Lopez');
  await page.getByLabel('Email address').fill('jorge.lopez@example.com');

  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify that the summary is displayed
  await expect(page.getByText('Name', { exact: true })).toBeVisible();
  await expect(page.getByText('Jorge Lopez')).toBeVisible();
  await expect(page.getByText('Email address', { exact: true })).toBeVisible();
  await expect(page.getByText('jorge.lopez@example.com')).toBeVisible();
});

test(
  'cannot submit the form with an invalid email address',
  async ({ page }) => {
    await page.goto('/form');

    await page.getByLabel('First name').fill('Jorge');
    await page.getByLabel('Last name').fill('Lopez');
    await page.getByLabel('Email address').fill('email-invalido');

    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify error message for invalid email
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
    
    // Verify the form is still present (it wasn't replaced by summary)
    await expect(page.getByLabel('Email address')).toBeVisible();
  },
);
