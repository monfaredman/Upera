(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LightGallery_vue_vue_type_style_index_0_id_16589160_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(796);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LightGallery_vue_vue_type_style_index_0_id_16589160_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LightGallery_vue_vue_type_style_index_0_id_16589160_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LightGallery_vue_vue_type_style_index_1_id_16589160_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(797);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LightGallery_vue_vue_type_style_index_1_id_16589160_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LightGallery_vue_vue_type_style_index_1_id_16589160_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/gallery/LightGallery.vue?vue&type=template&id=16589160&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.index !== null ? _c('div', {
    staticClass: "light-gallery-modal"
  }, [_c('div', {
    staticClass: "gallery-overlay",
    on: {
      "click": _vm.closeGallery
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "gallery-container"
  }, [_c('button', {
    staticClass: "gallery-close",
    attrs: {
      "aria-label": "Close"
    },
    on: {
      "click": _vm.closeGallery
    }
  }, [_c('i', {
    staticClass: "fas fa-times"
  })]), _vm._v(" "), _vm.currentIndex > 0 ? _c('button', {
    staticClass: "gallery-nav gallery-prev",
    attrs: {
      "aria-label": "Previous"
    },
    on: {
      "click": _vm.prevImage
    }
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "gallery-content"
  }, [_c('div', {
    staticClass: "main-image-wrapper"
  }, [_c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    key: _vm.currentIndex,
    staticClass: "gallery-image",
    attrs: {
      "data-src": _vm.currentImage,
      "alt": "Image ".concat(_vm.currentIndex + 1)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "gallery-counter"
  }, [_c('span', {
    staticClass: "counter-text"
  }, [_vm._v("\n          " + _vm._s(_vm.currentIndex + 1) + " / " + _vm._s(_vm.images.length) + "\n        ")])])]), _vm._v(" "), _vm.currentIndex < _vm.images.length - 1 ? _c('button', {
    staticClass: "gallery-nav gallery-next",
    attrs: {
      "aria-label": "Next"
    },
    on: {
      "click": _vm.nextImage
    }
  }, [_c('i', {
    staticClass: "fas fa-chevron-right"
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "thumbnail-swiper-container"
  }, [_c('div', {
    staticClass: "swiper-wrapper-custom",
    style: _vm.swiperStyle
  }, _vm._l(_vm.images, function (image, idx) {
    return _c('div', {
      key: idx,
      staticClass: "thumbnail-item",
      class: {
        active: idx === _vm.currentIndex
      },
      on: {
        "click": function click($event) {
          return _vm.goToImage(idx);
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "thumbnail-image",
      attrs: {
        "data-src": _vm.getThumbnailUrl(image),
        "alt": "Thumbnail ".concat(idx + 1)
      }
    }), _vm._v(" "), idx === _vm.currentIndex ? _c('div', {
      staticClass: "active-indicator"
    }) : _vm._e()]);
  }), 0), _vm._v(" "), _vm.canScrollLeft ? _c('button', {
    staticClass: "thumb-nav thumb-nav-left",
    attrs: {
      "aria-label": "Scroll left"
    },
    on: {
      "click": function click($event) {
        return _vm.scrollThumbnails('left');
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-chevron-left"
  })]) : _vm._e(), _vm._v(" "), _vm.canScrollRight ? _c('button', {
    staticClass: "thumb-nav thumb-nav-right",
    attrs: {
      "aria-label": "Scroll right"
    },
    on: {
      "click": function click($event) {
        return _vm.scrollThumbnails('right');
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-chevron-right"
  })]) : _vm._e()])])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/gallery/LightGallery.vue?vue&type=template&id=16589160&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(175);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/gallery/LightGallery.vue?vue&type=script&lang=js






/* harmony default export */ var LightGalleryvue_type_script_lang_js = ({
  name: 'LightGallery',
  props: {
    index: {
      type: Number,
      default: null
    },
    images: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      }
    }
  },
  emits: ['close'],
  data: function data() {
    return {
      currentIndex: this.index,
      thumbnailScrollPosition: 0,
      thumbnailItemWidth: 120,
      // Width of each thumbnail + gap
      visibleThumbnails: 6 // Number of visible thumbnails
    };
  },
  computed: {
    currentImage: function currentImage() {
      return this.images[this.currentIndex] || '';
    },
    swiperStyle: function swiperStyle() {
      return {
        transform: "translateX(".concat(this.thumbnailScrollPosition, "px)")
      };
    },
    canScrollLeft: function canScrollLeft() {
      return this.thumbnailScrollPosition < 0;
    },
    canScrollRight: function canScrollRight() {
      var maxScroll = -((this.images.length - this.visibleThumbnails) * this.thumbnailItemWidth);
      return this.thumbnailScrollPosition > maxScroll && this.images.length > this.visibleThumbnails;
    }
  },
  watch: {
    index: function index(newVal) {
      this.currentIndex = newVal;
      this.centerThumbnail(newVal);
      // Manage body scroll and hash based on modal state
      if (newVal !== null) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('gallery-preview-mode');
        // Add hash to URL
        if (!window.location.hash.includes('preview')) {
          window.history.pushState(null, '', window.location.pathname + window.location.search + '#preview');
        }
      } else {
        document.body.style.overflow = '';
        document.body.classList.remove('gallery-preview-mode');
        // Remove hash from URL
        if (window.location.hash.includes('preview')) {
          window.history.pushState(null, '', window.location.pathname + window.location.search);
        }
      }
    },
    currentIndex: function currentIndex(newVal) {
      this.centerThumbnail(newVal);
    }
  },
  mounted: function mounted() {
    // Only hide scroll if modal is open on mount
    if (this.index !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('gallery-preview-mode');
      // Add hash to URL
      if (!window.location.hash.includes('preview')) {
        window.history.pushState(null, '', window.location.pathname + window.location.search + '#preview');
      }
    }
    document.addEventListener('keydown', this.handleKeydown);
    this.centerThumbnail(this.currentIndex);
    this.updateVisibleThumbnails();
    window.addEventListener('resize', this.updateVisibleThumbnails);
    // Listen to hash changes (browser back button)
    window.addEventListener('hashchange', this.handleHashChange);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = '';
    document.body.classList.remove('gallery-preview-mode');
    window.removeEventListener('resize', this.updateVisibleThumbnails);
    window.removeEventListener('hashchange', this.handleHashChange);
    // Remove hash when component is destroyed
    if (window.location.hash.includes('preview')) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
  },
  methods: {
    handleHashChange: function handleHashChange() {
      // Close gallery if hash is removed (e.g., back button)
      if (!window.location.hash.includes('preview') && this.index !== null) {
        this.closeGallery();
      }
    },
    closeGallery: function closeGallery() {
      this.$emit('close');
    },
    nextImage: function nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      }
    },
    prevImage: function prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    goToImage: function goToImage(index) {
      this.currentIndex = index;
    },
    getThumbnailUrl: function getThumbnailUrl(fullImageUrl) {
      return fullImageUrl.replace('w=1920&h=1200', 'w=200&h=150');
    },
    centerThumbnail: function centerThumbnail(index) {
      // Calculate the position to center the active thumbnail
      var containerWidth = this.visibleThumbnails * this.thumbnailItemWidth;
      var targetPosition = index * this.thumbnailItemWidth;
      var centerOffset = containerWidth / 2 - this.thumbnailItemWidth / 2;
      var newPosition = -targetPosition + centerOffset;

      // Limit scrolling
      var maxScroll = -((this.images.length - this.visibleThumbnails) * this.thumbnailItemWidth);
      newPosition = Math.min(0, Math.max(maxScroll, newPosition));
      this.thumbnailScrollPosition = newPosition;
    },
    scrollThumbnails: function scrollThumbnails(direction) {
      var scrollAmount = this.thumbnailItemWidth * 3;
      if (direction === 'left') {
        this.thumbnailScrollPosition = Math.min(0, this.thumbnailScrollPosition + scrollAmount);
      } else {
        var maxScroll = -((this.images.length - this.visibleThumbnails) * this.thumbnailItemWidth);
        this.thumbnailScrollPosition = Math.max(maxScroll, this.thumbnailScrollPosition - scrollAmount);
      }
    },
    updateVisibleThumbnails: function updateVisibleThumbnails() {
      var width = window.innerWidth;
      if (width < 480) {
        this.visibleThumbnails = 3;
        this.thumbnailItemWidth = 90;
      } else if (width < 768) {
        this.visibleThumbnails = 4;
        this.thumbnailItemWidth = 100;
      } else if (width < 1024) {
        this.visibleThumbnails = 5;
        this.thumbnailItemWidth = 110;
      } else {
        this.visibleThumbnails = 6;
        this.thumbnailItemWidth = 120;
      }
      this.centerThumbnail(this.currentIndex);
    },
    handleKeydown: function handleKeydown(event) {
      switch (event.key) {
        case 'Escape':
          this.closeGallery();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
        case 'ArrowLeft':
          this.prevImage();
          break;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/gallery/LightGallery.vue?vue&type=script&lang=js
 /* harmony default export */ var gallery_LightGalleryvue_type_script_lang_js = (LightGalleryvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/gallery/LightGallery.vue?vue&type=style&index=0&id=16589160&prod&scoped=true&lang=css
var LightGalleryvue_type_style_index_0_id_16589160_prod_scoped_true_lang_css = __webpack_require__(846);

// EXTERNAL MODULE: ./components/item/content/gallery/LightGallery.vue?vue&type=style&index=1&id=16589160&prod&lang=css
var LightGalleryvue_type_style_index_1_id_16589160_prod_lang_css = __webpack_require__(847);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/gallery/LightGallery.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  gallery_LightGalleryvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "16589160",
  null
  
)

/* harmony default export */ var LightGallery = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);