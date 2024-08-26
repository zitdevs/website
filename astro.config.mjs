import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    fallback: {
      es: "en",
    },
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
