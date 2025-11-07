import { defineConfig } from "cypress";

const TEST_PORT = import.meta.env.PORT || 4321;

export default defineConfig({
  e2e: {
    baseUrl: `http://localhost:${TEST_PORT}`,
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  },
});
