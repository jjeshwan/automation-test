/**
 * @type {Cypress.PluginConfig}
 */
const cucumber = require('cypress-cucumber-preprocessor').default

// plugins file
module.exports = (on, config) => {
    //cucumber load
    on('file:preprocessor', cucumber())

    //clear the project from @focus if --execution-tags is set
    //search for all notations mentioned in the parameters under --execution-tags and add @focus to those

    //browser launch
    on('before:browser:launch', (browser = {}, launchOptions) => {
        //nothing todo yet, let's finetune this later
    })
}