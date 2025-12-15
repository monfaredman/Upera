import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Register vue-lazyload plugin to ensure v-lazy directive is available
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // Use an existing image that is copied to static/images by our build hooks
  error: '/images/featured-image.png',
  loading: '/images/featured-image.png',
  attempt: 1,
  listenEvents: [
    'scroll',
    'wheel',
    'mousewheel',
    'resize',
    'animationend',
    'transitionend',
    'touchmove',
  ],
})
