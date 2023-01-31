const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
    require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  env: {
    frontendUrl: "https://www.google.com/?&hl=en",
    envName: "-",
    cyLogEnabled: true,
    consoleLogEnabled: true
  },

  e2e: {
    async setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args) // print all current args
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          console.log('Adding Chrome flag: --disable-dev-shm-usage');
          launchOptions.args.push('--disable-dev-shm-usage');
        }
        return launchOptions;
      });

      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      allureWriter(on, config);

      return config;
    },
    specPattern: "cypress/e2e/*.feature"
  },
  defaultCommandTimeout: 5000,
  experimentalWebKitSupport: true,
  video: false,
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  }
});