const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin =
    require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
require('dotenv').config({path:'../../.env'});

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
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
          launchOptions.args.push('--disable-gpu');
        }
        return launchOptions;
      });

      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", browserify.default(config));
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    specPattern: [
      "cypress/e2e/**/*.feature"
    ],

  },
  defaultCommandTimeout: 25000,
  animationDistanceThreshold: 1,
  waitForAnimations: true,
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  downloadsFolder: 'cypress/downloads',
  numTestsKeptInMemory: 1,
  video: false,
  chromeWebSecurity: false,
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  }
});
