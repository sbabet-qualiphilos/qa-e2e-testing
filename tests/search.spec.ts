import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test('Verify that only "Pliers" are present in the search results page', { tag: '@search'}, async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  await homePage.goto();
  await searchResultsPage.searchForItem('Pliers');

  const results = await searchResultsPage.searchResults.allInnerTexts();

  results.forEach(result => {
      expect(result).toMatch(/Plier|Pliers/);
  });
});
