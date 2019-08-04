class SearchPage {
  constructor() {
    this.keyWords = {
      url: 'https://www.google.com/',
    };
    this.selectors = {
      searchInput: 'input[type="search"]',
      submitButton: 'button[aria-label="Google Search"]',
      searchResult: '#errorId'
    };
  }

  open() {
    browser.url(this.keyWords.url);
  }

  search(value) {
    $(this.selectors.searchInput).addValue(value);
    $(this.selectors.submitButton).click();
  }
}

module.exports = SearchPage;
