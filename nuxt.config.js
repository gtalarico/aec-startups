import pkg from './package'

export default {
  mode: 'universal',
  ssr: false,

  /*
   ** Headers of the page
   */
  head: {
    title: 'AEC Startups',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,400i,600,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=ABeeZee'
      }
    ],
    script: [
      {
        src: 'https://polyfill.io/v3/polyfill.min.js?features=WeakMap',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/bootstrap-vue.js',
    '~~/node_modules/vue-rellax/lib/nuxt-plugin'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-3836052-14'
      }
    ]
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt'
  ],

  build: {
    transpile: ['vue-magic-grid'],
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // Yaml loader
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: 'js-yaml-loader'
      })
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: { fix: true }
        })
      }
    }
  }
}
