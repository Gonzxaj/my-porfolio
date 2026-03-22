import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const site = SITE_URL || 'https://gonzalo-carranza.pages.dev';

export default defineConfig({
  site,
  integrations: [
    tailwind(),
    icon(),
    playformCompress(),
    sitemap(),
    robotsTxt(),
  ],
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
