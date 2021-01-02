const webpack = require("webpack")
//import fs from 'fs'

export default {
  // server: {
  //   https: {
  //     key: fs.readFileSync("ssl/sslprivate.key"),
  //     cert: fs.readFileSync("ssl/ssl.crt")
  //   }
  // },
  loading: {
    color: '#f63',
    height: '6px',
    rtl: true,
    continuous: true,
    duration: 10000
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
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
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }], 
    script: [
      {
        src: 'https://upera.tv/jwplayer?v1'
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
    "~/node_modules/bootstrap/dist/css/bootstrap.css",
    "../assets/styles/fa.css",
    "../assets/styles/new.css",
    "../assets/styles/rtl.css",
    "../assets/styles/Edited-Style-Dark.css",
    "vue-slick-carousel/dist/vue-slick-carousel.css"
  ],
    router: {
      linkActiveClass: 'active',
    middleware: ["clearValidationErrors"]
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~plugins/bootstrap","~plugins/slick","~plugins/swiper",'~/plugins/i18n','~/plugins/swal',
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
  buildModules: [],
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
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    "bootstrap-vue/nuxt",
    "nuxt-clipboard2",
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
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
    baseURL: "https://upera.tv/api/v1",
    browserBaseURL: "https://upera.tv/api/v1",
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
pwa: {
  manifest: {
    name: 'آپرا',
    lang: 'fa',
    description: 'سینمای آنلاین شما'
  }
},
colorMode: {
  classPrefix: 'theme-',
  classSuffix: ''
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
    vendor: ["jquery", "bootstrap"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
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
