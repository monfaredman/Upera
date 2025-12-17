import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

// Register vue-lazyload plugin to ensure v-lazy directive is available
Vue.use(VueLazyload, {
  preLoad: 1.3,
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
