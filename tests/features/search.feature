Feature: A Sample to do search

@Search
Scenario: Search the UI_H5_Test in Google
  Given I open the Search website
  Then I should see the Search page
  When I input "UI_H5_Test" in search input
  Then I should see the search result