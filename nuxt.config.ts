// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }, 
  css: ['@/assets/css/fonts.css'],
  runtimeConfig: {
    FMP_API_KEY: process.env.FMP_API_KEY,
    public: {}
  },
  modules: ['@nuxtjs/tailwindcss']
})
