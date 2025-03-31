import { Page } from '@playwright/test';
import { NetworkPage } from '../pageObject/network.page';

export class NetworkOperations {
  private networkPage: NetworkPage;

  constructor(page: Page) {
    this.networkPage = new NetworkPage(page);
  }

  async getRandomFact() {
    await this.networkPage.getFactBtn.click();
  }
}
