import { Locator, Page } from '@playwright/test';

export class TablePage {
  readonly page: Page;
  readonly table: Locator;
  readonly rows: Locator;
  readonly headers: Locator;
  readonly viewDetailsBtn: Locator;
  readonly detailsRows: Locator;
  readonly detailList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.table = page.locator('table');
    this.rows = page.locator('tbody tr');
    this.headers = page.locator('thead th');
    this.viewDetailsBtn = page.locator('button[aria-label="View details"]');
    this.detailList = page.locator('div > ul');
    this.detailsRows = this.detailList.locator('div > li');
  }

  getRow(rowIndex: number): Locator {
    return this.rows.nth(rowIndex);
  }

  async getCellText(rowIndex: number, columnIndex: number): Promise<string> {
    const row = this.getRow(rowIndex);
    const cell = row.locator('td').nth(columnIndex);
    return (await cell.textContent())?.trim() || '';
  }
}
