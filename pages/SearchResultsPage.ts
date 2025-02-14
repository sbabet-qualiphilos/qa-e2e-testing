import { Page, Locator, expect } from '@playwright/test';

export class SearchResultsPage {
  private page: Page;
  readonly searchResults: Locator;
  private searchInput: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchResults = page.locator('[data-test=product-name]');
    this.searchInput = page.locator('input[placeholder="Search"]');
    this.searchButton = page.locator('button[type="submit"]');
  }

  async searchForItem(item: string) {
   const [response] = await Promise.all([
        this.page.waitForResponse(response => 
            response.url().includes(`/products/search?q=${item}`) && response.status() === 200
        ),
        this.searchInput.fill(item),
        this.searchButton.click(),
    ]);
  }
}
