import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('my-module:runtime-hook', (data) => {
    console.log(data)
  })
})
