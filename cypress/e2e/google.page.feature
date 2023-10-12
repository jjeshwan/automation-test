Feature: Google Website

  Background:
    Given I go to the "google page"
    And I am on the "google page"

  @regression
  Scenario Outline: User can search for a search term
    When I see the "cookie popup title"
    And I click the "cookie accept button"
    And I type "<searchTerm>" into the "search input field" and hit enter
    Then I see the "result stats text"

    Examples:
      | searchTerm |
      | Katzen     |
      | Hunde      |
