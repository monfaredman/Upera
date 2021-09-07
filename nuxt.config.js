//import fs from 'fs'
require('dotenv').config({ path: __dirname + '/.env.' + process.env.ENV })

export default {
  publicRuntimeConfig: {
    envname: process.env.ENV,
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
    color: process.env.COLOR,
    background: 'white'
  },
  loading: {
    color: process.env.COLOR,
    height: '6px',
    rtl: true,
    continuous: true,
    duration: 10000
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: process.env.SSR,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  server: {
    host: '127.0.0.1'
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
        src: 'https://web.upera.tv/jwplayer?v1', body: true
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
  plugins: ["~plugins/slick","~plugins/swiper",'~/plugins/i18n','~/plugins/swal',
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
    "@nuxtjs/axios",
    '@nuxtjs/auth',
    "@nuxtjs/pwa",
    '@nuxtjs/color-mode',
    "bootstrap-vue/nuxt",
    "nuxt-clipboard2",
    "@nuxtjs/device",
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    'vue-social-sharing/nuxt',
    // 'nuxt-sweetalert2',
    // [
    //   'vue-sweetalert2/nuxt',
    //   {
    //     confirmButtonColor: '#41b882',
    //     cancelButtonColor: '#ff7674'
    //   }
    // ],
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
        user: { url: '/get/user', method: 'get', propertyName: 'user' }
      },
      // tokenRequired: true,
      // tokenType: 'bearer',
      // globalToken: true,
      // autoFetchUser: true
    }
  }
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
    lang: 'fa',
    description: 'سینمای آنلاین شما'
  }
},
colorMode: {
  classPrefix: 'theme-',
  classSuffix: '',
  preference: 'system',
  fallback: 'light'
},

  transition: {
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
