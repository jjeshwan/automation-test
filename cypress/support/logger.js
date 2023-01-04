/**
 * JS Class for log output handling.
 * This class will contain several functions in the future to log and debug certain information while the test is running
 *
 * @author Marco Bierbach
 * @date 09.02.2022
 */

cy.logger = {};

cy.logger.log = (level, message) => {
    if(Cypress.env('cyLogEnabled'))
        cy.log(`(${Date.now()})[${level}] => ${message}`);
    if(Cypress.env('consoleLogEnabled'))
        console.log(`(${Date.now()})[${level}] => ${message}`);
}