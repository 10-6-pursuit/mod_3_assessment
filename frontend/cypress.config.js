const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000", // Adjust this to your app's base URL
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Pattern to locate your spec files
    supportFile: "cypress/support/e2e.js", // Path to your support file
  },
});
