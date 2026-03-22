import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
// import robotsTxt from "astro-robots-txt";   // requiere `site`
// import sitemap from "@astrojs/sitemap";      // requiere `site`
// import compressor from "astro-compressor";

// TODO: cuando tengas la URL final de Cloudflare Pages, descomentar:
//   - sitemap()
//   - robotsTxt()
//   - compressor()
//   - site: 'https://tu-dominio.pages.dev'

export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    playformCompress(),
  ],
  output: 'static',
  // site: 'https://tu-dominio.pages.dev',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
