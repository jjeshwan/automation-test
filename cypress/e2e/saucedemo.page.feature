Feature: Saucedemo Website core functionalities

  Background:
    Given I go to the "saucedemo page"
    And I am on the "saucedemo page"

  @regression
  Scenario Outline: Standard User can login and view the inventory items
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    Then I see the "inventory list"

    Examples:
      |userName||passWord|
      |standard_user||secret_sauce|

  @regression
  Scenario Outline: Blocked User cannot login
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    Then I see the "locked out error message"

    Examples:
      |userName||passWord|
      |locked_out_user||secret_sauce|

  @regression
  Scenario Outline: Standard User can login and sort the inventory items by name
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    Then I see the "sort items dropdown"
    And I select "<dropdownValue>" from the "sort items dropdown"
    Then I see that the "item names" sorted according to the selected "<dropdownValue>"

    Examples:
      |userName||passWord||dropdownValue|
      |standard_user||secret_sauce||za|
      |standard_user||secret_sauce||az|

  @regression
  Scenario Outline: Standard User can login and sort the inventory items by price
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    Then I see the "sort items dropdown"
    And I select "<dropdownValue>" from the "sort items dropdown"
    Then I see that the "item prices" sorted according to the selected "<dropdownValue>"

    Examples:
      |userName||passWord||dropdownValue|
      |standard_user||secret_sauce||hilo|
      |standard_user||secret_sauce||lohi|
