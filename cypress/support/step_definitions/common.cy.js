import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WildCard from "../objects/wildcard";
import {WILD_CARDS} from "../constants";

When(/^I go to the "(.* page)"$/, function(pageDescription) {
    cy.helper.goto(pageDescription);
});

Then(/^The "(tab title)" is in "(.*)"$/, function (element, language) {
    const expectedValue = cy.localization.getLocalizationStringWithWildCards(cy.scope.currentPage, language, element, [new WildCard(WILD_CARDS.ELEMENT_TEXT, Cypress.env('envName'))]);
    cy.logger.log("Info", `tab title should be [${expectedValue}]`);
    cy.title().should('eq', expectedValue );
});

When(/^I click the "(.* button|.* input field|.* mask|.* link)"$/, function(selectorIdentifier) {
    cy.helper.clickElement(selectorIdentifier);
});

When(/^I click the "(.* button|.* input field|.* mask)" for the specific "(.*)" item$/, function(selectorIdentifier, value) {
    cy.helper.clickSpecificElement(selectorIdentifier, value);
});

When(/^I select a "(.*)" from the "(.* dropdown)"$/, function(value, selectorIdentifier) {
    cy.helper.selectElement(value, selectorIdentifier);
});

When(/^I hover the element "(.*)"$/, function(selectorIdentifier) {
   cy.helper.hoverElement(selectorIdentifier);
});

When(/^I type "(.*)" into the "(.* input field|.* mask|.* dropdown)"( and hit enter)?$/, function (text, selectorIdentifier, hitEnter) {
    cy.helper.typeText(text,selectorIdentifier,hitEnter);
});

When(/^I am on the "(.* page)"$/, function (pageDescription) {
    const url = cy.pageMap.getPageUrl(pageDescription);
    cy.url().should('contain', url);
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPage(pageDescription);
});

Given(/^The website language is "(.*)"$/, function (language) {
    cy.scope.websiteLanguage = language;
});

Then(/^I see(?: the| a) "(.*)"( by scrolling)?$/, function (pageElement, scrollTo) {
    console.log(`searching for element with identifier ${pageElement}`);
    if(scrollTo)
        cy.helper.getElement(pageElement).scrollIntoView().should('be.visible');
    else
        cy.helper.getElement(pageElement).should('be.visible');
});

Then(/^I see the "(.*)" according to the "(.*)" item(?: added| removed)$/, function (pageElement, value) {
    if(value == "All")
        cy.helper.getElement(pageElement).eq(5).should('be.visible');
    else
        cy.helper.getElement(pageElement).eq(0).should('be.visible');
});

Then(/^I see the "(.*)" to show "(.*)" number of items added to the basket$/, function (pageElement, value) {
    if(value == "All")
        cy.helper.getElement(pageElement).contains('6');
    else
        cy.helper.getElement(pageElement).contains('1');
});

Then(/^I see that the url matches the "(.*)" url$/, function(pageDescription) {
    cy.url().should('match', cy.pageMap.getPageRegExp(pageDescription));
    cy.scope.currentPage = pageDescription;
    cy.scope.currentPageObject = cy.pageMap.getPage(pageDescription);
});

Then(/^I see that the "(.*)" sorted according to the selected "(.*)"$/, function(itemsElement, value) {
    cy.helper.checkSorting(itemsElement, value);
});
