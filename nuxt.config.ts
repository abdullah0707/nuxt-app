// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [ '@nuxtjs/tailwindcss' ],
   app: {
      head: {
         charset: 'utf-16',
         viewport: 'width=500, initial-scale=1',
         title: 'My App',
         meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
         ],
      }
   },
   runtimeConfig: {
      currencyKey: process.env.CURRENCY_API_KEY
   }
})
