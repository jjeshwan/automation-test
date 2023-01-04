/**
 * JS Class for handling localization mapping
 * This class loads all available localization files and maps them to a certain language value
 *
 * @author Marco Bierbach
 * @date 09.02.2022
 */

const locaGerman = require('./localization/german.json');
const locaEnglish = require('./localization/english.json');

cy.localization = {};

const loca = {
    'german': locaGerman,
    'english': locaEnglish,
}

const langCode = {
    'german': 'de',
    'english': 'en'
}

cy.localization.getLangCode = (language = cy.scope.websiteLanguage) => {
    if(language === undefined) {
        cy.logger.log("Error",`missing parameters language=>${language}`);
        return langCode[0]; //we return langCode 0 by default
    }

    if(loca[language] === undefined) {
        cy.logger.log("Error",`unknown language [${language}]`);
        return langCode[0]; // same as above, return index 0 by default
    }
    return langCode[language];
}

cy.localization.getLocalizationString = (pageDescription, language, label) => {
    if(language === undefined || label === undefined || pageDescription === undefined) {
        cy.logger.log("Error",`missing parameters pageDescription=>${language} label=>${label} page=>${pageDescription}`);
        return undefined;
    }

    if(loca[language] === undefined || loca[language][pageDescription] === undefined || loca[language][pageDescription][label] === undefined) {
        cy.logger.log("Error",`no localization string found for this combination [${language}][${pageDescription}][${label}]`);
        return undefined;
    }
    return loca[language][pageDescription][label];
}

cy.localization.getLocalizationStringWithWildCards = (pageDescription, language, label, wildCardObjects) => {
    //first we need to get the localization entry
    let localizedSting = cy.localization.getLocalizationString(pageDescription, language, label);

    if(localizedSting === undefined) {
        cy.logger.log("Error",`undefined string for [${label}]`);
    }

    //now we can replace the wildcards
    wildCardObjects.forEach(wildCardObject => {
        localizedSting = cy.helper.replaceWildCard(localizedSting, wildCardObject);
    });
    return localizedSting;
}