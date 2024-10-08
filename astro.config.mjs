import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), playformCompress(), robotsTxt({
    // host : 'https://gonzalo-carranza.vercel.app',
  }), sitemap(), compressor({
    gzip: true,
    brotli: false
  }),],
  output: 'server',
  adapter: vercel(),
  site: 'https://gonzalo-carranza.vercel.app',
  i18n:{
    defaultLocale:'es',
    locales:['es','en'],
    routing:{
      prefixDefaultLocale:false
    }
  },
  
});