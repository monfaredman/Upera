(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaTabs_vue_vue_type_style_index_0_id_7b4ad5c4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(789);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaTabs_vue_vue_type_style_index_0_id_7b4ad5c4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaTabs_vue_vue_type_style_index_0_id_7b4ad5c4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/MediaTabs.vue?vue&type=template&id=7b4ad5c4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "media-tabs-section"
  }, [_vm.hasAnyMedia ? _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mediaTabsSwiper",
      value: _vm.swiperOptions,
      expression: "swiperOptions",
      arg: "mediaTabsSwiper"
    }],
    staticClass: "swiper-container media-tabs-swiper"
  }, [_c('div', {
    staticClass: "swiper-wrapper"
  }, [_c('div', {
    staticClass: "swiper-slide"
  }, [_c('MediaSwiper', {
    attrs: {
      "data": _vm.data,
      "medias": _vm.medias,
      "light-images": _vm.lightImages,
      "images-loading": _vm.imagesLoading
    },
    on: {
      "play-backstage": function playBackstage($event) {
        return _vm.GET_FILE(2);
      },
      "play-musicvideo": function playMusicvideo($event) {
        return _vm.GET_FILE(4);
      },
      "play-next": function playNext($event) {
        return _vm.GET_FILE(3);
      },
      "open-gallery": _vm.openGallery
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _vm.medias.image === 1 ? _c('LightGallery', {
    attrs: {
      "index": _vm.galleryIndex,
      "images": _vm.lightImages
    },
    on: {
      "close": function close($event) {
        _vm.galleryIndex = null;
      }
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/MediaTabs.vue?vue&type=template&id=7b4ad5c4&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/MediaTabs.vue?vue&type=script&lang=js




// Dynamic imports for code splitting - load components only when needed
var MediaSwiper = function MediaSwiper() {
  return __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, 1120));
};
var LightGallery = function LightGallery() {
  return __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, 941));
};
/* harmony default export */ var MediaTabsvue_type_script_lang_js = ({
  name: 'MediaTabs',
  components: {
    MediaSwiper: MediaSwiper,
    LightGallery: LightGallery
  },
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {
          item: {}
        };
      }
    },
    type: {
      type: String,
      default: ''
    },
    medias: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    writers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    investors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    commNum: {
      type: Number,
      default: 0
    },
    lightImages: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    imagesLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['get-file', 'load-images'],
  data: function data() {
    return {
      galleryIndex: null,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        watchOverflow: true,
        observer: true,
        observeParents: true
      }
    };
  },
  computed: {
    hasAnyMedia: function hasAnyMedia() {
      return this.medias.backstage === 1 || this.medias.image === 1 || this.medias.musicvideo === 1 || this.medias.next === 1;
    }
  },
  methods: {
    GET_FILE: function GET_FILE(content) {
      this.$emit('get-file', content);
    },
    openGallery: function openGallery(index) {
      // Load images if not already loaded
      if (this.lightImages.length === 0) {
        this.$emit('load-images');
      }
      this.galleryIndex = index;
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/MediaTabs.vue?vue&type=script&lang=js
 /* harmony default export */ var content_MediaTabsvue_type_script_lang_js = (MediaTabsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/MediaTabs.vue?vue&type=style&index=0&id=7b4ad5c4&prod&scoped=true&lang=css
var MediaTabsvue_type_style_index_0_id_7b4ad5c4_prod_scoped_true_lang_css = __webpack_require__(841);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/MediaTabs.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_MediaTabsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7b4ad5c4",
  null
  
)

/* harmony default export */ var MediaTabs = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);