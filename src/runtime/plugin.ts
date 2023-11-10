import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module!')
  return {
    provide: {
      hey: {
        world: 'hey'
      }
    }
  }
})
