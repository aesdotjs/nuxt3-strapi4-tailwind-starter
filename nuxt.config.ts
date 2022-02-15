import { defineNuxtConfig } from 'nuxt3';
import svgLoader from "vite-svg-loader";
const strapiBaseUri = process.env.API_URL || "http://localhost:1337";
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [ 
    ["@nuxtjs/markdownit",
    {
      preset: "default",
      linkify: true,
      breaks: true,
      injected: true,
      html: true,
    }],
    ['@nuxtjs/strapi',
    {
      url: strapiBaseUri,
    //   entities: [
    //     {
    //       name: "homepage",
    //       type: "single",
    //     },
    //     {
    //       name: "global",
    //       type: "single",
    //     },
    //   ],
    }],
    '@nuxtjs/tailwindcss',
    ["@nuxtjs/pwa",
    {
      meta: {
        title: "Sitename",
        author: "Aes",
      },
      manifest: {
        name: "Sitename",
        short_name: "Sitename",
        lang: "en",
        theme_color: "#721626",
      },
    }],
    ["@nuxtjs/sitemap",
    {
      hostname: baseUrl,
      gzip: true,
      defaults: {
        changefreq: "daily",
        priority: 1,
        lastmod: new Date(),
      },
    }],
    ["@nuxtjs/robots", 
    {
      Sitemap: `${baseUrl}/sitemap.xml`,
    }], //not working yet
    ["nuxt-canonical", { baseUrl}],
    "@aceforth/nuxt-netlify",
    "@nuxtjs/device",
  ],
  publicRuntimeConfig: {
    strapiBaseUri,
    baseUrl,
  },
  vite: {
    plugins: [svgLoader()],
  },
});
