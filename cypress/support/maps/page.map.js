/**
 *
 * this class is forwarding the correct page object model or representive variables of it
 * based on the page description provided over the gherkin bdd definition
 * @author Marco Bierbach
 */

import {WILD_CARDS} from '../constants.js';
import WildCard from '../objects/wildcard.js';

const MainPage = require("../pages/main.page")

cy.pageMap = {};

const PAGEMAP = {
    'main page': MainPage
}

cy.pageMap.getPageUrl = (pageDescription) => {
    if(PAGEMAP[pageDescription] === undefined)
        cy.logger.log("Error",`no url mapping found for page description [${pageDescription}]`);

    return Cypress.env('frontendUrl').concat(
            cy.helper.replaceWildCard(
                PAGEMAP[pageDescription].path,
                new WildCard(
                    WILD_CARDS.LANG_CODE,
                    cy.localization.getLangCode()
                )
            )
    );
}

cy.pageMap.getPageRegExp = (pageDescription) => {
    if(PAGEMAP[pageDescription] === undefined)
        cy.logger.log("Error", `no url mapping found for page description [${pageDescription}]`);
    return PAGEMAP[pageDescription].regexp;
}

cy.pageMap.getPage = (pageDescription) => {
    if(PAGEMAP[pageDescription] == null)
        cy.logger.log("Error",`no page mapping found for page description [${pageDescription}]`);
    return PAGEMAP[pageDescription];
}