import { test } from '@playwright/test';
import { TableAssertions } from './assertions/table.assertions';
import { TableOperations } from './operations/table.operations';

let tableAssertions: TableAssertions;
let tableOperations: TableOperations;

test.beforeEach(async ({ page }) => {
  tableAssertions = new TableAssertions(page);
  tableOperations = new TableOperations(page);
  await page.goto('/table');
});


test('[Table] details of all individuals are displayed', async () => {
  const tableHeaders = ['Name', 'Company', 'Job title', '']; // Note: The last column is empty because it is a button for access to 'more details'
  await tableAssertions.verifyTableHeadersDisplayed(tableHeaders);
  await tableAssertions.verifyIndividualsDetailsDisplayed();
});

test('[Table] can view the full details of an individual', async () => {
  await tableOperations.getRandomIndividualDetails();
  await tableAssertions.verifyIndividualDetailsAreCorrect();
});
