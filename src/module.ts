import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import type { HookResult } from "@nuxt/schema"

// Module options TypeScript interface definition
export interface ModuleOptions {
  prop1?: string
}

export interface ModuleHooks {
  'my-module:module-hook': (data: { surname: string, deep: number }) => HookResult
}

export interface RuntimeModuleHooks {
  'my-module:runtime-hook': (data: { name: string, delta: number }) => HookResult
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
