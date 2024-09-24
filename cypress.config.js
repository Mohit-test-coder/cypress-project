const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


async function setupNodeEvents(on, config) {

  on('file:preprocessor', cucumber())
  return config;
  // implement node event listeners here
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // specPattern: "cypress/Integration/*/*.js"
    // specPattern: "cypress/Integration/*/*.js"
    specPattern: "cypress/UAT/features/*.feature"
  },
});
