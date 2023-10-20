const Page = require('./Page.js');
import {Locator} from '../objects/locator.js';
import { LOCATOR_TYPES } from '../constants.js';


class SaucedemoPage extends Page {

    get path () { return `https://www.saucedemo.com/` };

    //page selectors
    selectors = {
        'usename input field': new Locator(LOCATOR_TYPES.XPATH, '//input[@id="user-name"]'),
        'password input field': new Locator(LOCATOR_TYPES.XPATH, '//input[@id="password"]'),
        'login button': new Locator(LOCATOR_TYPES.XPATH, '//input[@id="login-button"]'),
        'inventory list': new Locator(LOCATOR_TYPES.XPATH, '//div[@class="inventory_list"]'),
        'locked out error message': new Locator(LOCATOR_TYPES.XPATH, '//h3[contains(text(),"Epic sadface: Sorry, this user has been locked out")]'),
        'sort items dropdown': new Locator(LOCATOR_TYPES.XPATH, '//select[@class="product_sort_container"]'),
        'item names': new Locator(LOCATOR_TYPES.XPATH, '//div[@class="inventory_item_name "]'),
        'item prices': new Locator(LOCATOR_TYPES.XPATH, '//div[@class="inventory_item_price"]')
    }
}

module.exports = new SaucedemoPage();
