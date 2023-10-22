Feature: Saucedemo Website core functionalities

  Background:
    Given I go to the "saucedemo page"
    And I am on the "saucedemo page"

  @practiceTests
  Scenario Outline: Standard User can login and view the inventory items
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    Then I see the "inventory list"

    Examples:
      |userName||passWord|
      |standard_user||secret_sauce|

  @practiceTests
  Scenario Outline: Blocked User cannot login
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    Then I see the "locked out error message"

    Examples:
      |userName||passWord|
      |locked_out_user||secret_sauce|

  @TestCase1.1
  Scenario Outline: Standard user can sort the inventory items by name
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    Then I see the "sort items dropdown"
    And I select a "<dropdownValue>" from the "sort items dropdown"
    Then I see that the "item names" sorted according to the selected "<dropdownValue>"

    Examples:
      |userName||passWord||dropdownValue|
      |standard_user||secret_sauce||za|
      |standard_user||secret_sauce||az|

  @TestCase1.2
  Scenario Outline: Standard user can sort the inventory items by price
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    Then I see the "sort items dropdown"
    And I select a "<dropdownValue>" from the "sort items dropdown"
    Then I see that the "item prices" sorted according to the selected "<dropdownValue>"

    Examples:
      |userName||passWord||dropdownValue|
      |standard_user||secret_sauce||hilo|
      |standard_user||secret_sauce||lohi|

  @TestCase2
  Scenario Outline: Standard user can add and remove shopping cart items
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    And I click the "add to cart button" for the specific "<itemNumber>" item
    Then I see the "remove button" according to the "<itemNumber>" item added
    Then I see the "shopping cart badge" to show "<itemNumber>" number of items added to the basket
    And I click the "remove button" for the specific "<itemNumber>" item
    Then I see the "add to cart button" according to the "<itemNumber>" item removed
    Then I see the "shopping cart link"


    Examples:
      |userName||passWord||itemNumber|
      |standard_user||secret_sauce||1|
      |standard_user||secret_sauce||2|
      |standard_user||secret_sauce||All|

  @TestCase3
  Scenario Outline: Standard user can place an order
    When I type "<userName>" into the "usename input field"
    And I type "<passWord>" into the "password input field"
    And I click the "login button"
    And I click the "add to cart button" for the specific "<itemNumber>" item
    And I click the "shopping cart link"
    And I click the "checkout button"
    And I type "<firstName>" into the "first name input field"
    And I type "<lastName>" into the "last name input field"
    And I type "<postCode>" into the "post code input field"
    And I click the "continue button"
    And I click the "finish button"
    Then I see the "order complete message"
        
    Examples:
      |userName||passWord||itemNumber||firstName||lastName||postCode|
      |standard_user||secret_sauce||1||Joe||Bell||15307|
