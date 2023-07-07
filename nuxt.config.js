//import fs from 'fs'
require('dotenv').config({ path: __dirname + '/.env.' + process.env.ENV })

export default {
  publicRuntimeConfig: {
    envname: process.env.ENV,
    envmode: process.env.SSR,
    check_url: process.env.CHECKURL,
    name_fa: process.env.APP_NAME_FA
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync("ssl/sslprivate.key"),
  //     cert: fs.readFileSync("ssl/ssl.crt")
  //   }
  // },
  loadingIndicator: {
    name: 'circle',
    color: process.env.COLOR2,
    background: 'white'
  },
  loading: {
    color: process.env.COLOR2,
    height: '6px',
    rtl: true,
    continuous: true,
    duration: 10000
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  server: {
    host: '0.0.0.0'
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.APP_NAME_FA,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-"+process.env.ENV+".ico"}],
    script: [
      {
        src: 'https://'+process.env.jwplayer+'/jwplayer?v2', body: true
      }
    ],
  },
  /*
   ** Global CSS
   */
  // css: [
  //   "~/node_modules/bootstrap/dist/css/bootstrap.css",
  //   "../assets/styles/fontiran.css",
  //   "../assets/styles/main.css",
  //   "../assets/styles/Edited-Style.css",
  //   "../assets/styles/component-custom-switch.css",
  //   "../assets/styles/rtl.css",
  //   "../assets/fonts/icomoon/style.css",
  //   "../assets/styles/fa.css",
  //   "../assets/styles/swiper.css",
  //   "vue-slick-carousel/dist/vue-slick-carousel.css",
  //   "../assets/styles/Edited-Style-Dark.css",
  // ],
  css: [
    "../assets/styles/fa.css",
    "../assets/styles/new.css",
    "../assets/styles/rtl.css",
    ...process.env.ENV=='igapp'?["assets/styles/theme.css"]:[],
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "../assets/styles/dark.css"
  ],
  router: {
      linkActiveClass: 'active',
    middleware: ["clearValidationErrors"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~plugins/slick","~plugins/swiper",'~/plugins/swal',
    "./plugins/axios",
    "./plugins/mixins/validation","~/plugins/lightGallery.client","~/plugins/awesomeCountdown.client"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
   buildModules: [ ['@nuxtjs/dotenv', { filename: '.env.' + process.env.ENV }], ],
    eslint: {
    fix: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/i18n',
    "@nuxtjs/axios",
    '@nuxtjs/auth',
    "@nuxtjs/pwa",
    '@nuxtjs/color-mode',
    "bootstrap-vue/nuxt",
    "nuxt-clipboard2",
    "@nuxtjs/device",
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    'vue-social-sharing/nuxt',
    ['nuxt-lazy-load', {
      images: true,
      videos: false,
      audios: false,
      iframes: false,
      native: false,
      polyfill: true,
      directiveOnly: false
    }]
  ],
  i18n: {
    locales: [{ code: 'fa', iso: 'fa-IR', file: 'fa.json' },
  { code: 'en', iso: 'en-US', file: 'en.json' }],
    defaultLocale: 'fa',
    strategy: 'no_prefix',
    langDir: '~/locales/',
    vueI18n: {
      fallbackLocale: 'fa'
    }
  },
  auth: {
  redirect: {
    login: '/login',
    logout: false,
    callback: false,
    home: false
  },
  strategies: {
    local: {
      endpoints: {
        login: { url: '/login', method: 'post', propertyName: 'token' },
        logout: { url: '/logout', method: 'post' },
        user: { url: process.env.USERURL, method: 'get', propertyName: 'user' }
      },
      autoLogout: true,
      // tokenRequired: true,
      // tokenType: 'bearer',
      // globalToken: true,
      // autoFetchUser: true
    }
  },
  plugins: [ '~/plugins/auth.js' ]
},
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.URL,
    browserBaseURL: process.env.BURL,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
pwa: {
  icon: {
    fileName:'icon-'+process.env.ENV+'.png'
  },
  manifest: {
    name: process.env.APP_NAME_FA,
    short_name: process.env.APP_NAME_EN,
    lang: 'fa',
    description: 'سینمای آنلاین شما'
  },
  // workbox: {
  //  runtimeCaching: [
  //    {
  //      strategyPlugins: [{
  //         use: 'Expiration',
  //         config: {
  //           maxEntries: 1000,
  //           maxAgeSeconds: 1000
  //         }
  //       }]
  //    }
  //  ]
  // }
},
colorMode: {
  classPrefix: 'theme-',
  classSuffix: '',
  preference: 'system',
  fallback: 'light'
},

  pageTransition: {
    name: "fade",
    mode: "out-in",
  },
  build: {
    /**
     * add external plugins
     */
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    vendor: ['jwplayer'],
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  }
}