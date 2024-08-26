import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zitdevs.com',
  server: {
    host: '0.0.0.0'
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: "manual",
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
        },
      },
    }),
    tailwind({
      applyBaseStyles: false,
    })
  ],
});
