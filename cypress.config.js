const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    }),
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  env: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    api: process.env.CYPRESS_API,
    apiKey: process.env.CYPRESS_API_KEY
   },
  e2e: {
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    setupNodeEvents
  },
  failOnStatusCode: false,
  responseTimeout: 120e3,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 15000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: "[status]_[datetime]-[name]",
    reportTitle: "Cypress Automated Suite",
    reportDir: "results",
    screenshotsFolder: "screenshots",
    overwrite: true,
    timestamp: "mm-dd-yyyy HH:MM",
    charts: true,
    screenshots: true,
    html: false
  },
});