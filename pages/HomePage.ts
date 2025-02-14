import { Page } from '@playwright/test';
import { config } from '../config';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(config.baseURL);
  }
}
