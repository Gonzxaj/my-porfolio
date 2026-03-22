import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import playformCompress from "@playform/compress";

export default defineConfig({
  site: 'https://gonzalo-carranza.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
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
