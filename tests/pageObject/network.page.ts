import { Locator, Page } from '@playwright/test';

export class NetworkPage {
  readonly page: Page;
  readonly getFactBtn: Locator;
  readonly alert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getFactBtn = page.locator('button', { hasText: 'Get a fact' });
    this.alert = page.locator('div [role=alert]');
  }
}
