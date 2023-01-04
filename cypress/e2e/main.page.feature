Feature: Google Website

  Background:
    Given I goto the main page
    And I am on the main page

  @regression
  Scenario Outline: User can search for a search term
    When I see the cookie popup title
    And I click the cookie accept button
    When I type "<searchTerm>" into the search input field and hit enter
    Then I see the result stats text
    And I see a search result

    Examples:
      | searchTerm |
      | Katzen     |
      | Hunde      |
