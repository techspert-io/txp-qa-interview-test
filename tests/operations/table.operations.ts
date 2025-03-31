import { Page } from '@playwright/test';
import { TablePage } from '../pageObject/table.page';

export class TableOperations {
  private tablePage: TablePage;

  constructor(page: Page) {
    this.tablePage = new TablePage(page);
  }

  async getRandomIndividualDetails() {
    const rowCount = await this.tablePage.rows.count();
  
    const randomIndex = Math.floor(Math.random() * rowCount);
    const row = this.tablePage.getRow(randomIndex);
  
    const cellCount = await row.locator('td').count();
    const actionCell = row.locator('td').nth(cellCount - 1);
    const viewDetailsBtn = actionCell.locator(this.tablePage.viewDetailsBtn);
  
    await viewDetailsBtn.click();
  }
}