const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
   reporter: 'cypress-mochawesome-reporter',
   projectId: "hnjv9q",
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
       setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    viewportHeight: 600,
    viewportWidth: 800,
    chromeWebSecurity: false,
    watchForFileChanges:false,
    video: false,
  },
});
