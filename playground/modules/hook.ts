import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'my-module-hook',
  },
  setup(options, nuxt) {
    nuxt.hook('my-module:module-hook', (data) => {
      console.log('my-module:module-hook', data)
    })
  }
})
