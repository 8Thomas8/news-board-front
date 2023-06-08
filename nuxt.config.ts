import environmentSettings from './environmentSettings'

const appEnv = process.env.ENV || 'development'

export default defineNuxtConfig({
  modules: ['@nuxt/devtools', '@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: ['~/assets/scss/main.scss'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore' // import { defineStore } from 'pinia'
    ]
  },
  runtimeConfig: {
    public: {
      // @ts-ignore-next-line
      apiUrl: environmentSettings[appEnv].apiUrl,
      appEnv
    }
  }
})
