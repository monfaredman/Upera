import fs from 'fs'
import path from 'path'

require('dotenv').config({ path: __dirname + '/.env.' + process.env.ENV })

const isGhPages = process.env.DEPLOY_ENV === 'GH_PAGES'
const routerBase = isGhPages ? '/Upera/' : '/'
const nuxtPublicPath = isGhPages ? '/Upera/_nuxt/' : '/_nuxt/'

// Helper function to recursively copy files
const copyRecursive = async (src, dest) => {
  const entries = await fs.promises.readdir(src, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      await fs.promises.mkdir(destPath, { recursive: true })
      await copyRecursive(srcPath, destPath)
    } else {
      await fs.promises.copyFile(srcPath, destPath)
    }
  }
}

// Function to copy assets/img and assets/images to static folders
const copyAssetsToStatic = async () => {
  // Copy assets/img to static/img
  const assetsImgPath = path.join(__dirname, 'assets', 'img')
  const staticImgPath = path.join(__dirname, 'static', 'img')

  try {
    if (fs.existsSync(assetsImgPath)) {
      if (!fs.existsSync(staticImgPath)) {
        await fs.promises.mkdir(staticImgPath, { recursive: true })
      }
      await copyRecursive(assetsImgPath, staticImgPath)
      // eslint-disable-next-line no-console
      console.log('✓ Copied assets/img to static/img')
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Failed to copy assets/img to static/img:', err.message)
  }

  // Copy assets/images to static/images
  const assetsImagesPath = path.join(__dirname, 'assets', 'images')
  const staticImagesPath = path.join(__dirname, 'static', 'images')

  try {
    if (fs.existsSync(assetsImagesPath)) {
      if (!fs.existsSync(staticImagesPath)) {
        await fs.promises.mkdir(staticImagesPath, { recursive: true })
      }
      await copyRecursive(assetsImagesPath, staticImagesPath)
      // eslint-disable-next-line no-console
      console.log('✓ Copied assets/images to static/images')
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Failed to copy assets/images to static/images:', err.message)
  }
}

// Function to ensure all static files are copied to dist folder
const copyStaticToDist = async (distPath) => {
  const staticPath = path.join(__dirname, 'static')

  try {
    if (fs.existsSync(staticPath)) {
      // Skip README.md files
      const copyRecursiveSkipReadme = async (src, dest) => {
        const entries = await fs.promises.readdir(src, { withFileTypes: true })
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name)
          const destPath = path.join(dest, entry.name)

          // Skip README.md files
          if (entry.name === 'README.md') {
            continue
          }

          if (entry.isDirectory()) {
            await fs.promises.mkdir(destPath, { recursive: true })
            await copyRecursiveSkipReadme(srcPath, destPath)
          } else {
            // Copy file, overwriting if it exists
            await fs.promises.copyFile(srcPath, destPath)
          }
        }
      }

      // Always copy to root of dist (Nuxt should handle this, but we ensure it)
      await copyRecursiveSkipReadme(staticPath, distPath)

      // For GH_PAGES with routerBase, also copy static files to /Upera/ subdirectory
      // This ensures files are accessible both at root and under /Upera/
      if (isGhPages && routerBase !== '/') {
        const uperaPath = path.join(
          distPath,
          routerBase.replace(/^\//, '').replace(/\/$/, '')
        )

        // Ensure /Upera directory exists
        if (!fs.existsSync(uperaPath)) {
          await fs.promises.mkdir(uperaPath, { recursive: true })
        }

        // Copy static files to /Upera/ subdirectory as well
        await copyRecursiveSkipReadme(staticPath, uperaPath)
        // eslint-disable-next-line no-console
        console.log(`✓ Copied static files to ${routerBase} subdirectory`)
      }

      // For GH_PAGES, verify critical files are accessible at root
      if (isGhPages) {
        // Critical files that must be at root of dist
        const criticalFiles = [
          'message-icon.png',
          'images/satra.png',
          'images/sapra.png',
          'images/samandehi.png',
          'images/irannsr.png',
          'images/enamad.png',
        ]

        for (const file of criticalFiles) {
          const srcFile = path.join(staticPath, file)
          const destFile = path.join(distPath, file)

          if (fs.existsSync(srcFile)) {
            const destDir = path.dirname(destFile)
            await fs.promises.mkdir(destDir, { recursive: true })
            await fs.promises.copyFile(srcFile, destFile)

            // Verify the file was copied successfully
            if (fs.existsSync(destFile)) {
              // eslint-disable-next-line no-console
              console.log(
                `✓ Verified ${file} is in dist folder at: ${destFile}`
              )
            } else {
              // eslint-disable-next-line no-console
              console.error(`✗ Failed to copy ${file} to dist folder`)
            }
          } else {
            // eslint-disable-next-line no-console
            console.warn(`⚠ Source file not found: ${srcFile}`)
          }
        }
      }

      // eslint-disable-next-line no-console
      console.log('✓ Copied all static files to dist folder')
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Failed to copy static files to dist:', err.message)
  }
}

export default {
  publicRuntimeConfig: {
    envname: process.env.ENV,
    envmode: process.env.SSR,
    check_url: process.env.CHECKURL,
    name_fa: process.env.APP_NAME_FA,
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
    background: 'white',
  },
  loading: {
    color: process.env.COLOR2,
    height: '6px',
    rtl: true,
    continuous: true,
    duration: 10000,
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
  target: isGhPages ? 'static' : 'server',
  router: {
    base: routerBase,
    // Prefetch links on hover for faster navigation
    prefetchLinks: true,
    // Link prefetching strategy
    linkPrefetchedClass: 'nuxt-link-prefetched',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
  },
  build: {
    publicPath: nuxtPublicPath,
    /**ßßß
     * add external plugins
     */
    extractCSS: true,
    // Optimize bundle size with tree-shaking
    terser: {
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: true,
        },
      },
    },
    // Enable code splitting and optimization
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            reuseExistingChunk: true,
          },
          videojs: {
            test: /[\\/]node_modules[\\/](video\.js|videojs)[\\/]/,
            name: 'videojs',
            priority: 20,
            reuseExistingChunk: true,
          },
          swiper: {
            test: /[\\/]node_modules[\\/](swiper|vue-awesome-swiper)[\\/]/,
            name: 'swiper',
            priority: 20,
            reuseExistingChunk: true,
          },
          bootstrap: {
            test: /[\\/]node_modules[\\/](bootstrap-vue)[\\/]/,
            name: 'bootstrap',
            priority: 20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    // Analyze bundle size in production
    analyze: process.env.ANALYZE === 'true',
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  server: {
    host: '0.0.0.0',
  },
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.APP_NAME_FA,
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          'تماشای آنلاین فیلم ها و سریال ها در تلویزیون هوشمند , کنسول بازی , کامپیوتر , لپتاپ , تبلت و ...',
      },
      // Open Graph / Facebook
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: process.env.APP_NAME_FA,
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'fa_IR',
      },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@upera',
      },
      // Performance hints
      {
        'http-equiv': 'x-dns-prefetch-control',
        content: 'on',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: routerBase + 'favicon-' + process.env.ENV + '.ico',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://cdn.upera.shop',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://thumb.upera.shop',
      },
      {
        rel: 'preconnect',
        href: 'https://cdn.upera.shop',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preconnect',
        href: 'https://thumb.upera.shop',
        crossorigin: 'anonymous',
      },
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
    '../assets/styles/fa.css',
    '../assets/styles/new.css',
    '../assets/styles/rtl.css',
    ...(process.env.ENV == 'igapp' ? ['assets/styles/theme.css'] : []),
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    '../assets/styles/dark.css',
    'video.js/dist/video-js.css', // Video.js styles
    'videojs-contrib-ads/dist/videojs.ads.css', // Ads styles
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // Language detection must run first, before i18n initializes
    '~/plugins/i18n-detection.client',
    '~plugins/slick',
    '~plugins/swiper',
    '~/plugins/swal',
    './plugins/axios',
    './plugins/mixins/validation',
    '~/plugins/persianDigits.client',
    '~/plugins/awesomeCountdown.client',
    '~/plugins/seo.client',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    ['@nuxtjs/dotenv', { filename: '.env.' + process.env.ENV }],
    // Note: @nuxt/image v0.0.4 is for Nuxt 3, we'll use a custom image component instead
    // For Nuxt 2, we'll optimize images manually with lazy loading
  ],
  eslint: {
    fix: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    '@nuxtjs/color-mode',
    'bootstrap-vue/nuxt',
    'nuxt-clipboard2',
    // "@nuxtjs/device",
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    'vue-social-sharing/nuxt',
    [
      'nuxt-lazy-load',
      {
        images: true,
        videos: false,
        audios: false,
        iframes: false,
        native: false,
        polyfill: true,
        directiveOnly: false,
      },
    ],
  ],
  i18n: {
    locales: [
      { code: 'fa', iso: 'fa-IR', file: 'fa.json' },
      // { code: 'en', iso: 'en-US', file: 'en.json' }, // Temporarily disabled per single-locale requirement
    ],
    defaultLocale: 'fa',
    strategy: 'no_prefix',
    langDir: '~/locales/',
    vueI18n: {
      fallbackLocale: 'fa',
    },
    // Disable automatic browser language detection
    // We handle language detection manually in GET_LANG action to prefer Persian/Farsi
    detectBrowserLanguage: false,
  },
  auth: {
    redirect: {
      login: '/login',
      logout: false,
      callback: false,
      home: false,
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          user: {
            url: process.env.USERURL,
            method: 'get',
            propertyName: 'user',
          },
        },
        autoLogout: true,
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      },
    },
    plugins: ['~/plugins/auth.js'],
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
      fileName: 'icon-' + process.env.ENV + '.png',
    },
    manifest: {
      name: process.env.APP_NAME_FA,
      short_name: process.env.APP_NAME_EN,
      lang: 'fa',
      description: 'سینمای آنلاین شما',
      theme_color: process.env.COLOR2 || '#000000',
      background_color: '#000000',
      display: 'standalone',
      start_url: routerBase,
      scope: routerBase,
    },
    workbox: {
      // Enable workbox caching for production
      enabled: process.env.NODE_ENV === 'production',
      // Cache strategies
      runtimeCaching: [
        // Cache images with cache-first strategy
        {
          urlPattern: /^https:\/\/thumb\.upera\.shop\/.*/i,
          handler: 'CacheFirst',
          strategyOptions: {
            cacheName: 'thumb-images-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
            },
          },
        },
        // Cache CDN images
        {
          urlPattern: /^https:\/\/cdn\.upera\.shop\/.*/i,
          handler: 'CacheFirst',
          strategyOptions: {
            cacheName: 'cdn-images-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 200,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
        // Cache API responses with network-first strategy
        {
          urlPattern: /^https?:\/\/.*\/get\/.*/i,
          handler: 'NetworkFirst',
          strategyOptions: {
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
            networkTimeoutSeconds: 3,
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 5, // 5 minutes
            },
          },
        },
        // Cache static assets
        {
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/,
          handler: 'CacheFirst',
          strategyOptions: {
            cacheName: 'static-assets-cache',
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
            },
          },
        },
        // Cache fonts
        {
          urlPattern: /\.(?:woff|woff2|ttf|eot|otf)$/,
          handler: 'CacheFirst',
          strategyOptions: {
            cacheName: 'fonts-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
            },
          },
        },
      ],
      // Skip waiting and claim clients immediately
      skipWaiting: true,
      clientsClaim: true,
      // Clean up old caches
      cleanupOutdatedCaches: true,
    },
  },
  colorMode: {
    classPrefix: 'theme-',
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  pageTransition: {
    name: 'fade',
    mode: 'out-in',
  },
  // Performance optimizations
  render: {
    // Enable HTTP/2 Server Push
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => {
        return preloadFiles
          .filter((f) => f.asType === 'script' || f.asType === 'style')
          .map((f) => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
      },
    },
    // Resource hints for better performance
    resourceHints: true,
    // Compress responses
    compressor: { threshold: 0 },
    // Static file serving
    static: {
      maxAge: '1y',
    },
  },
  bootstrapVue: {
    components: [
      'BContainer',
      'BRow',
      'BCol',
      'BTooltip',
      'BTab',
      'BTabs',
      'BDropdownItem',
      'BDropdown',
      'BButton',
      'BTable',
      'BModal',
      'BLink',
      'BForm',
      'BFormSelect',
      'BFormInput',
      'BFormCheckbox',
      'BFormGroup',
      'BImg',
      'BCard',
      'BCollapse',
      'BPopover',
      'BSpinner',
      'BootstrapVueIcons',
      'BIcon',
      'BSkeleton',
      'BSkeletonImg',
    ],
    directives: ['VBTooltip', 'VBToggle'],
  },
  generate: {
    fallback: '404.html',
    subFolders: false,
  },
  hooks: {
    'build:before': async () => {
      // Copy assets/img and assets/images to static folders so images are available in dist folder
      await copyAssetsToStatic()
    },
    'generate:before': async () => {
      // Copy assets/img and assets/images to static folders so images are available in dist folder
      await copyAssetsToStatic()
    },
    'generate:distRemoved': async () => {
      // This hook runs after dist is cleaned but before generation starts
      // Ensure static files are ready in static folder so Nuxt can copy them
      await copyAssetsToStatic()
    },
    'generate:done': async (generator) => {
      // Ensure all static files are copied to dist after generation completes
      // This is critical - we copy ALL static files to ensure nothing is missing
      const distPath = generator.distPath || path.join(__dirname, 'dist')
      await copyStaticToDist(distPath)

      if (!isGhPages) return

      const noJekyllPath = path.join(generator.distPath, '.nojekyll')
      try {
        await fs.promises.writeFile(noJekyllPath, '')
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('Failed to create .nojekyll file:', err.message)
      }
    },
  },
}
