const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/parket/'
  }
} : {}


module.exports = {
  // mode: 'universal',
  // ...routerBase,
  // router: {
  //   base: '/parket/'
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'parket',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Parket project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['storyblok-nuxt', {accessToken: 'kKJbPhZdUb65JjY4rZqoHwtt', cacheProvider: 'memory'}]
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/static/style/reset.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
  
    /*
    ** You can extend webpack config here
    */
   extend (config, { isDev, isClient }) {
    if (isDev && isClient) {
      // config.output.publicPath = './_nuxt/'
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        // loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  },
  }
}
