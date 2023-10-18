const Page = require('./Page.js');
import {Locator} from '../objects/locator.js';
import { LOCATOR_TYPES } from '../constants.js';


class DuckduckgoPage extends Page {

    get path () { return `https://duckduckgo.com/` };

    //page selectors
    selectors = {
        'search input field': new Locator(LOCATOR_TYPES.XPATH, '//*[@name="q"]'),
        'result stats text': new Locator(LOCATOR_TYPES.XPATH, '//ol[@class="react-results--main"]'),
    }
}

module.exports = new DuckduckgoPage();
