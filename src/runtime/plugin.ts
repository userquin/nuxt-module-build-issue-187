import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      hey: {
        world: 'hey'
      }
    }
  }
})
