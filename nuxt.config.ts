import { defineNuxtConfig } from 'nuxt3'
const strapiBaseUri = process.env.API_URL || "http://localhost:1337";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi','@nuxtjs/tailwindcss'],
  strapi: {
    url: strapiBaseUri,
  },
  publicRuntimeConfig: {
    strapiBaseUri,
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
})
