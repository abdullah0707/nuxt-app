export default defineEventHandler(async() => {
   
   // // handle query params
   // const { name } = getQuery(e)

   // // handle post data
   // const { age } =  await readBody(e)

   // api call wit private key
   const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=RziDPa8H3krqcOXYZVowp5YLCYzjn5gE1cN3FcnR')

   return {
      message: data
   }
})