import {DEFAULT_TIMEOUT, LOCATOR_TYPES} from './constants.js';

cy.helper = {};
cy.helper.goto = (pageDescription) => {
    const pageUrl = cy.pageMap.getPageUrl(pageDescription);
    cy.visit(pageUrl);
    cy.scope.currentPageObject = cy.pageMap.getPage(pageDescription);
    cy.scope.currentPage = pageDescription;
    cy.scope.currentuuid = null;
}

cy.helper.typeText = (text, selectorIdentifier,hitEnter) => {
    cy.helper.getElement(selectorIdentifier).type(text, {delay: 50});
    if(hitEnter)
        cy.helper.getElement(selectorIdentifier).type("{enter}");
}

cy.helper.clickElement = (selectorIdentifier) => {
    cy.helper.getElement(selectorIdentifier).click();
}

cy.helper.clickElementWithWildCards = (selectorIdentifier, wildCards ) => {
    cy.helper.getElementWithWildCards(selectorIdentifier, wildCards).click();
}

cy.helper.hoverElement = (selectorIdentifier) => {
    cy.helper.getElement(selectorIdentifier).realHover({pointer: "mouse"});
}

/**
 * Internal function to receive the correct selector object from the currentPageObject selectors map and pass it to the function
 * @param selectorIdentifier
 * @returns {undefined|*}
 */
function getSelectorObject (selectorIdentifier) {
    const selectorObject = cy.scope.currentPageObject.selectors[selectorIdentifier];
    if(selectorObject === undefined) {
        cy.logger.log("Error", `No element found for selectorIdentifier [${selectorIdentifier}]. returning undefined`);
        return undefined;
    }
    return selectorObject;
}

cy.helper.getElement = (selectorIdentifier) => {
    const selectorObject = getSelectorObject(selectorIdentifier);
    return findElement(selectorObject.type, selectorObject.value);
}

cy.helper.getElementWithWildCards = (selectorIdentifier, wildCardObjects) => {
    //single replacement
    const selectorObject = getSelectorObject(selectorIdentifier);

    let selectorValue = selectorObject.value;
    wildCardObjects.forEach(wildCardObject => {
        selectorValue = cy.helper.replaceWildCard(selectorValue, wildCardObject);
    });

    return findElement(selectorObject.type, selectorValue);
}

cy.helper.getNestedElement = (parentIdentifier, selectorIdentifier) => {
    const parentSelectorObject = getSelectorObject(parentIdentifier);
    const selectorObject = getSelectorObject(selectorIdentifier);

    return findNestedElement(parentSelectorObject.value, selectorObject.type, selectorObject.value);
}

cy.helper.getNestedElementWithWildCards = (parentElement, selectorIdentifier, wildCardObjects) => {
    //single replacement
    const selectorObject = getSelectorObject(selectorIdentifier);
    let selectorValue = selectorObject.value;
    wildCardObjects.forEach(wildCardObject => {
        selectorValue = cy.helper.replaceWildCard(selectorValue, wildCardObject);
    });

    return findNestedElement(parentElement, selectorObject.type, selectorValue);
}

cy.helper.getAttributeValueFromElement = (element, attribute) => {
    //use prop instead of attr, as attr sometimes returns the default value
    const attributeValue = element.invoke('prop',attribute).debug();
    debugger;
    cy.logger.log("Info", `Attribute Value = [${attributeValue}]`);
    return attributeValue;
}

function findElement(selectorType, selectorValue) {
    switch(selectorType) {
        case LOCATOR_TYPES.XPATH:
            return cy.xpath(selectorValue, { timeout: DEFAULT_TIMEOUT });
            break;
        case LOCATOR_TYPES.DATA_CY:
            return cy.get(`[data-cy="${selectorValue}"]`, { timeout: DEFAULT_TIMEOUT});
            break;
        case LOCATOR_TYPES.ID:
            return cy.get(`[id="${selectorValue}"]`, {timeout: DEFAULT_TIMEOUT});
            break;
        case LOCATOR_TYPES.CSS:
        default:
            return cy.get(selectorValue, { timeout: DEFAULT_TIMEOUT });
            break;
    }
}

/**
 * WIP: For now the types must be xpath to make it work
 * @param parentSelectorType
 * @param parentSelectorValue
 * @param selectorType
 * @param selectorValue
 * @returns {*}
 */
function findNestedElement(parentSelectorValue, selectorType, selectorValue) {
    switch(selectorType) {
        case LOCATOR_TYPES.XPATH:
            return cy.xpath(parentSelectorValue+selectorValue, {timeout: DEFAULT_TIMEOUT});
            break;
    }
}

/**
 * Function to replace a wildcard in a string with the propper object provided
 * @param text
 * @param wildCardObject
 * @returns {*}
 */
cy.helper.replaceWildCard = (text, wildCardObject) => {
    if(wildCardObject.value === undefined) {
        cy.logger.log("Error", `Value is undefined, so we can not replace anything in the text [${text}] with wildcard [${wildCardObject.wildCard}]`)
    }
    return text.replace(wildCardObject.wildCard, wildCardObject.value);
}

/**
 * This function needs to be finetuned in the future
 * @param text
 * @returns {*}
 */
cy.helper.stringIncludesRegularExpression = (text) => {
    return text.includes(".*");
}

