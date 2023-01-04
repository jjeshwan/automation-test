## Test Automation Project (A.k.A TAP)

this project is supposed to be a basis to run automation tests with cypress


## Project Overview

this section will explain the used technologies inside this repo, its folder structure 
and also explains how to prepare and execute the project

### Setup the Project

#### Project initialization
```bash
npm install
```

### Used Technologies

in order to keep up with the steady growth of test automation possibilities the project will 
use some of the most modern technologies available on the market.

dependencies
* "navigator": "^1.0.1"
* "start-server-and-test": "^1.14.0"

dev dependencies
* "@badeball/cypress-cucumber-preprocessor": "14.0.0",
* "@bahmutov/cypress-esbuild-preprocessor": "2.1.5",
* "@shelex/cypress-allure-plugin": "2.34.0",
* "allure-commandline": "2.20.1",
* "cypress": "11.2.0",
* "cypress-ag-grid": "2.0.1",
* "cypress-parallel": "0.9.1",
* "cypress-real-events": "1.7.4",
* "@cypress/xpath": "2.0.3",
* "esbuild": "0.15.16",
* "fs-extra": "11.0.0",
* "typescript": "4.9.3",
* "playwright-webkit": "1.28.1"

for the feature files who describe the test scenarios Gherkin is used to ease up the process of writing 
new test cases fast and consistent

### Project Structure
```text
.
├── README.md
├── cucumber-html-report.js
├── cypress
│ ├── config
│ │ └── prod.config.js
│ ├── cucumber-json
│ ├── e2e
│ │ ├── login.page.feature
│ │ ├── product.search.page.feature
│ │ └── step_definitions
│ │     ├── common.cy.js
│ │     ├── login.page.cy.js
│ │     ├── product.details.page.cy.js
│ │     └── product.search.page.cy.js
│ ├── fixtures
│ │ └── example.json
│ ├── plugins
│ │ └── index.js
│ └── support
│     ├── commands.js
│     ├── constants.js
│     ├── e2e.js
│     ├── helper.js
│     ├── localization
│     │ ├── english.json
│     │ └── german.json
│     ├── localization.js
│     ├── logger.js
│     ├── maps
│     │ ├── page.map.js
│     │ └── search.parameter.map.js
│     ├── objects
│     │ ├── locator.js
│     │ ├── searchparameter.js
│     │ └── wildcard.js
│     ├── pages
│     │ ├── Page.js
│     │ ├── main.page.js
│     │ ├── main.page.js
│     │ ├── product.details.page.js
│     │ └── product.search.page.js
│     └── scope.js
├── cypress.config.js
├── package.json
└── tagium.js


```

package.json
cypress.json - configuration for cypress and its libraries
README.md
base-data.json - base data for the automation project

inside the cypress folder, 4 base folders can be found

- fixture
  - folder for any mock related content
- e2e
  - folder for the feature files containing the Gherkin based scenarios and the step definition spec files in a sub folder called step_definitions
- plugins
  - index.js file preparing the plugins and several function overwrites
- support
  - classes containing help functions to generalize and ease up the handling of cypress across the project

### How to Use the automation

#### Run the test automation

run in headles mode
```bash
npm cy:silent-dev
npm cy:silent-qa
```

run in cypress browser mode
````bash
npm run cy:editor-dev
npm run cy:editor-qa
````

__more commands will follow__
