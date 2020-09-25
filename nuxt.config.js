
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Юридичское бюро "СОВЕТ"',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'yandex-verification', content: 'a63d0ecd18d0bc5a' },
      { hid: 'description', name: 'description', content: 'Юридическое бюро Совет. Квалифицированная юридическая помощь' },
      { name: "viewport", content: 'width=1200' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'white',
    height: '5px'
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/ui.js',
    '~plugins/vuelidate.js',
    '~plugins/vMask.js',
    { src: '~plugins/ymapPlugin.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '62219872',
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ],
    'nuxt-compress',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Disallow: '/components',
      Disallow: '/plugins',
      Disallow: '/layouts',
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "http://admin.detective.moscow/sovet/"
  },
  // Чтобы глобально подключать файлы стилей
  styleResources: {
    scss: [
      'assets/scss/_variables.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
