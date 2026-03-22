import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";

export default defineConfig({
  site: 'https://gonzalo-carranza.pages.dev',
  integrations: [
    tailwind(),
    icon(),
    playformCompress(),
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
