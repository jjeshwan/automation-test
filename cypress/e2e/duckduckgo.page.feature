Feature: Duckduckgo Website

  Background:
    Given I go to the "duckduckgo page"
    And I am on the "duckduckgo page"

  @regression
  Scenario Outline: User can search for a search term
    When I type "<searchTerm>" into the "search input field" and hit enter
    Then I see the "result stats text"

    Examples:
      | searchTerm |
      | Katzen     |
      | Hunde      |
