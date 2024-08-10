const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "cq7262",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
