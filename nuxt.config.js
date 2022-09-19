export default {
  ssr: false,

  server: {
    port: 3000,
    host: "0.0.0.0"
  },

  head: {
    titleTemplate: 'Turkmen-Senagat',
    title: 'Turkmen-Senagat',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: '“Türkmen Senagat”, Türkmenistanda plastik turbalary öndürýän iň uly kärhanalaryň biri'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    },
    { name: 'keywords', content: 'Трубы ашхабад, Turkmen senagat, Туркмен сенагат, Трубы Туркменистан' },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  css: [{
    src: '~/assets/scss/index.scss',
    lang: 'scss'
  },
  {
    src: '~/assets/scss/variables.scss',
    lang: 'scss'
  }
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  plugins: [
    '~/plugins/aos',
    '~/plugins/device-screen-width',
    '~/plugins/modal'
  ],

  components: true,

  buildModules: [

  ],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      {
        name: "English",
        code: "en-EN",
        iso: "en",
        file: "en-EN.js"
      },
      // {
      //   name: "Русский",
      //   code: "ru-RU",
      //   iso: "ru",
      //   file: "ru-RU.js"
      // },
      {
        name: "Türkmen",
        code: "tk-TK",
        iso: "tk",
        file: "tk-TK.js"
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      alwaysRedirect: true,
      fallbackLocale: "en-EN"
    },
    strategy: "no_prefix",
    lazy: true,
    langDir: "lang/",
    defaultLocale: "tk-TK"
  },

  build: {}
}
