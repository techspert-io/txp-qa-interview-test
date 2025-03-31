import { expect, Page } from '@playwright/test';
import { NetworkPage } from '../pageObject/network.page';

export class NetworkAssertions {
  private networkPage: NetworkPage;

  constructor(page: Page) {
    this.networkPage = new NetworkPage(page);
  }

  async verifyDogFactsAPIResponseBody(body: string) {
    expect(typeof body).toBe('string');
  }

  async verifyRandomFactAlert() {
    await expect(this.networkPage.alert).toBeVisible({ timeout: 20000 }); //Note: I added this timeout because some times the alert takes a while to appear
    await expect(this.networkPage.alert).toHaveText(/Did you know\?.+/);

    const fact = await this.networkPage.alert.textContent();
    console.log('fact text:', fact);
  }
}
