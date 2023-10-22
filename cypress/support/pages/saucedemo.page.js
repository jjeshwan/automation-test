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
        'item prices': new Locator(LOCATOR_TYPES.XPATH, '//div[@class="inventory_item_price"]'),
        'add to cart button' : new Locator(LOCATOR_TYPES.XPATH, '//button[text()="Add to cart"]'),
        'remove button' : new Locator(LOCATOR_TYPES.XPATH, '//button[text()="Remove"]'),
        'shopping cart badge' : new Locator(LOCATOR_TYPES.XPATH, '//span[@class="shopping_cart_badge"]'),
        'shopping cart link' : new Locator(LOCATOR_TYPES.XPATH, '//a[@class="shopping_cart_link"]'),
        'checkout button' : new Locator(LOCATOR_TYPES.XPATH, '//button[@id="checkout"]'),
        'first name input field' : new Locator(LOCATOR_TYPES.XPATH, '//input[@id="first-name"]'),
        'last name input field' : new Locator(LOCATOR_TYPES.XPATH, '//input[@id="last-name"]'),
        'post code input field' : new Locator(LOCATOR_TYPES.XPATH, '//input[@id="postal-code"]'),
        'continue button' : new Locator(LOCATOR_TYPES.XPATH, '//input[@id="continue"]'),
        'finish button' : new Locator(LOCATOR_TYPES.XPATH, '//button[@id="finish"]'),
        'order complete message' : new Locator(LOCATOR_TYPES.XPATH, '//h2[normalize-space()="Thank you for your order!"]')

    }
}

module.exports = new SaucedemoPage();
