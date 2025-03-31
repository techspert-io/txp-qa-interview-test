import { expect, Page } from '@playwright/test';
import { TablePage } from '../pageObject/table.page';


export class TableAssertions {
  private tablePage: TablePage;
  
  constructor(page: Page) {
        this.tablePage = new TablePage(page);
  }

  async verifyTableHeadersDisplayed(expectedHeaders: string[]) {
    const headers = this.tablePage.headers;
  
    const count = await headers.count();
    expect(count).toBe(expectedHeaders.length);
  
    for (let i = 0; i < expectedHeaders.length; i++) {
      const text = (await headers.nth(i).textContent())?.trim();
      expect(text).toBe(expectedHeaders[i]);
    }
  }

  async verifyIndividualsDetailsDisplayed() {
    const rowCount = await this.tablePage.rows.count();
  
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      const row = this.tablePage.getRow(rowIndex);
      const cellCount = await row.locator('td').count();
  
      for (let columnIndex = 0; columnIndex < cellCount - 1; columnIndex++) {
        const cellText = await this.tablePage.getCellText(rowIndex, columnIndex);
        expect(cellText).not.toBe(''); //Note: Here I check for the cell text to exists in all columns except the last one.
      }

      const actionCell = row.locator('td').nth(cellCount - 1);
      const viewDetailsBtn = actionCell.locator(this.tablePage.viewDetailsBtn);
      await expect(viewDetailsBtn).toBeVisible(); //Note: Here I check for the button visibility in the last column.
    }
  }

  async verifyIndividualDetailsAreCorrect() {
    await this.tablePage.detailList.waitFor({state: "visible"}); //Note: I added this line to wait for the details list to be visible
    const resultRows = this.tablePage.detailsRows;
    const actualLabels = await resultRows.count();

    const expectedLabels = [
      'Name',
      'Email address',
      'Country / timezone',
      'Currency',
      'Job title',
      'Company',
      'Skills'
    ];
  
    expect(actualLabels).toBe(expectedLabels.length);
  
    for (let i = 0; i < expectedLabels.length; i++) {
      const row = resultRows.nth(i);
      const label = (await row.locator('p').nth(0).textContent())?.trim();
      const valueElements = await row.locator('p').allTextContents();

      expect(label).toBe(expectedLabels[i]);
  
      const values = valueElements.slice(1).map(text => text.trim()).filter(Boolean);
  
      if (label === 'Skills') {
        expect(values.length).toBeGreaterThan(0);
      } else {
        expect(values[0]).toBeTruthy();
      }
    }
  }
}
