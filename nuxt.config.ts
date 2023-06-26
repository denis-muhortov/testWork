// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          title: 'Тестовое задание',
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
          ],
          htmlAttrs: {
            lang: "ru",
          },
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
          ],
        },
    },

    modules: [
      '@pinia/nuxt',
      '@nuxt/image',
      '@nuxt/devtools',
      '@nuxtjs/html-validator',
    ],


    css: [
    // CSS file in the project
    '@/assets/css/main.css',
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },

    devtools: {
      enabled: true,
      vscode: {},
    },

    htmlValidator: {
      usePrettier: false,
      logLevel: 'verbose',
      failOnError: false,
      options: {
        extends: [
          'html-validate:document',
          'html-validate:recommended',
          'html-validate:standard'
        ],
        rules: {
          'svg-focusable': 'off',
          'no-unknown-elements': 'error',
          // Conflicts or not needed as we use prettier formatting
          'void-style': 'off',
          'no-trailing-whitespace': 'off',
          // Conflict with Nuxt defaults
          'require-sri': 'off',
          'attribute-boolean-style': 'off',
          'doctype-style': 'off',
          // Unreasonable rule
          'no-inline-style': 'off',
        }
      }
    },

    devServer:{
      port: 1234
    },
    imports: {
      dirs: ['./stores'],
    },
    
    pinia: {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore',],
      ],
    },
})