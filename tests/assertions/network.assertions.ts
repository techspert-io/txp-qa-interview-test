import { expect, Page } from '@playwright/test';
import { NetworkPage } from '../pageObject/network.page';


export class NetworkAssertions {
  private networkPagePage: NetworkPage;
  
  constructor(page: Page) {
        this.networkPagePage = new NetworkPage(page);
  }


  async verifyDogFactsAPIResponseBody(body: string){
    await expect(typeof body).toBe('string');
  }

  async verifyRandomFactAlert(){
    await expect(this.networkPagePage.alert).toBeVisible({timeout: 20000});
    await expect(this.networkPagePage.alert).toHaveText(/Did you know\?.+/);

    const fact = await this.networkPagePage.alert.textContent();
    console.log('fact text:', fact);
  }
}
