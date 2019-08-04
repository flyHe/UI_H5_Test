import { Given, When, Then } from 'cucumber';
import { isVisible } from '../utils/index';
import SearchPage from '../pages/SearchPage';

const searchPage = new SearchPage();
const { selectors: { searchInput, searchResult } } = searchPage;

Given(/^I open the Search website$/, () => {
  searchPage.open();
});

Then(/^I should see the Search page$/, () => {
  isVisible(searchInput);
});

When(/^I input "([^"]*)" in search input$/, (value) => {
  searchPage.search(value);
});

Then(/^I should see the search result$/, () => {
  isVisible(searchResult);
});
