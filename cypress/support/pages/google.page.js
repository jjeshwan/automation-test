const Page = require('./Page');
import {Locator} from '../objects/locator.js';
import { LOCATOR_TYPES } from '../constants';


class GooglePage extends Page {

    get path () { return `https://www.google.de/?hl=en-GB` };

    //page selectors
    selectors = {
        'login button': new Locator(LOCATOR_TYPES.XPATH, '//a[text()="Sign In"]'),
        'search input field': new Locator(LOCATOR_TYPES.XPATH, '//*[@name="q"]'),
        'result stats text': new Locator(LOCATOR_TYPES.XPATH, '//div[@id="result-stats"]'),
        'search result': new Locator(LOCATOR_TYPES.XPATH, '//div[@data-content-feature]'),
        'cookie popup title': new Locator(LOCATOR_TYPES.XPATH, '//h1[text()="Before you continue to Google"]'),
        'cookie accept button': new Locator(LOCATOR_TYPES.XPATH, '//div[text()="Accept all"]')
    }
}

module.exports = new GooglePage();