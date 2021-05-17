import Sass from "sass";
import Fiber from "fibers";
import i18n from "./nuxt-i18n.config"

export default {
  // Source Directory: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir
  srcDir: 'src',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | ' + process.env.APP_NAME,
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION || '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/vee-validate',
    '@/plugins/common',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // https://i18n.nuxtjs.org/
    ['nuxt-i18n', i18n],
  ],

  // RuntimeConfig: https://ja.nuxtjs.org/docs/2.x/configuration-glossary/configuration-runtime-config/
  publicRuntimeConfig: {
    appUrl: process.env.APP_URL || 'http://localhost:3000',
    apiUrl: process.env.API_URL || 'http://localhost:8000',
    apiKey: process.env.API_KEY_CHATWORK,
  },

  // Router: https://ja.nuxtjs.org/docs/2.x/configuration-glossary/configuration-router/
  router: {
    middleware: ['route'],
  },

  // Proxy: https://github.com/nuxt-community/proxy-module
  proxy: {
    "/chatwork": {
      target: "https://api.chatwork.com/v2",
      pathRewrite: {
        '^/chatwork/': '/'
      }
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      /^element-ui/,
      'vee-validate',
    ],
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber
        }
      }
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
  },
}
