import { expect, test } from '@playwright/test';

test.describe('Table functional requirements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/table');
  });

  test('details of all individuals are displayed', async ({ page }) => {
    // Verify that the columns are displayed
    await expect(page.getByRole('columnheader', { name: 'Name' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Company' })).toBeVisible();
    await expect(page.getByRole('columnheader', { name: 'Job title' })).toBeVisible();

    // Verify that the 5 individuals from the data.ts file are listed
    // We can check by key names from the test data
    const individuals = [
      'Brenda Praill',
      'Elias Riggulsford',
      'Florentia Halbeard',
      'Darryl Gayther',
      'Karrie Cridland',
    ];

    for (const name of individuals) {
      await expect(page.getByRole('cell', { name: name })).toBeVisible();
    }
  });

  test('can view the full details of an individual', async ({ page }) => {
    // Search Brenda Praill's row and click on her detail button
    // The icon is inside a Link with tooltip "View details"
    const brendaRow = page.getByRole('row', { name: /Brenda Praill/ });
    const viewButton = brendaRow.getByRole('button');
    
    await viewButton.click();

    // Verify navigation using regex for uuid
    await expect(page).toHaveURL(/\/table\/[a-z0-9-]+/);

    // Verify the full name is displayed
    await expect(page.getByRole('heading', { level: 4, name: 'Brenda Praill' })).toBeVisible();

    // Verify some details in the summary KeyValueList
    await expect(page.getByText('Email address', { exact: true })).toBeVisible();
    await expect(page.getByText('bpraill0@adobe.com')).toBeVisible();
    await expect(page.getByText('Professor', { exact: true })).toBeVisible();
    await expect(page.getByText('Sawayn-Cruickshank')).toBeVisible();
    
    // Verify that the skills are displayed
    await expect(page.getByText('Crisis Intervention')).toBeVisible();
  });
});
