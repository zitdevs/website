import { defineConfig } from "cypress";

const TEST_PORT = import.meta.env.PORT || 3000;

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${TEST_PORT}`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
