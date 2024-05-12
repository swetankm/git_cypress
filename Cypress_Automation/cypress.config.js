const { defineConfig } = require('cypress');
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
// const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
   
    },
  projectId: "eo9qrv",
  scripts: {
    "cypress:open": "cypress open"
  },

  e2e: {

    baseUrl: "https://rahulshettyacademy.com/angularpractice/",
   
    // setupNodeEvents(on, config) {
    //   ,
    //   // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);
    // },
    specPattern: '**/*.js',
    setupNodeEvents
  },
});
