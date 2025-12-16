(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 1030:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaSwiper_vue_vue_type_style_index_0_id_5acc8adf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaSwiper_vue_vue_type_style_index_0_id_5acc8adf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaSwiper_vue_vue_type_style_index_0_id_5acc8adf_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/MediaSwiper.vue?vue&type=template&id=5acc8adf&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "media-swiper-section"
  }, [_vm.mediaItems.length > 0 ? _c('div', {
    staticClass: "media-swiper-wrapper"
  }, [_c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:mediaSwiper",
      value: _vm.swiperOptions,
      expression: "swiperOptions",
      arg: "mediaSwiper"
    }],
    staticClass: "swiper-container media-swiper"
  }, [_c('p', {
    staticClass: "content-header"
  }, [_vm._v("محتوا")]), _vm._v(" "), _c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.mediaItems, function (item, index) {
    return _c('div', {
      key: "media-".concat(item.type, "-").concat(index),
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "media-card",
      on: {
        "click": function click($event) {
          return _vm.handleMediaClick(item);
        }
      }
    }, [_c('div', {
      staticClass: "media-card-image"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "media-thumbnail",
      attrs: {
        "data-src": _vm.getImageUrl(item),
        "alt": item.title
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "media-type-chip"
    }, [_vm._v("\n                " + _vm._s(item.typeLabel) + "\n              ")]), _vm._v(" "), item.playable ? _c('div', {
      staticClass: "play-overlay"
    }, [_c('i', {
      staticClass: "far fa-play-circle"
    })]) : _vm._e()])])]);
  }), 0)])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/MediaSwiper.vue?vue&type=template&id=5acc8adf&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/MediaSwiper.vue?vue&type=script&lang=js








/* harmony default export */ var MediaSwipervue_type_script_lang_js = ({
  name: 'MediaSwiper',
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {
          item: {}
        };
      }
    },
    medias: {
      type: Object,
      default: function _default() {
        return {};
      }
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
  emits: ['play-teaser', 'play-backstage', 'play-musicvideo', 'play-next', 'open-gallery'],
  data: function data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 16,
        loop: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          1400: {
            slidesPerView: 7,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 16
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 12
          },
          0: {
            slidesPerView: 2,
            spaceBetween: 12
          }
        }
      }
    };
  },
  computed: {
    mediaItems: function mediaItems() {
      var items = [];

      // Add backstage items
      if (this.medias.backstage === 1) {
        var thumbnail = this.data.item.back_teaser || this.data.item.backdrop;
        if (thumbnail) {
          items.push({
            type: 'backstage',
            typeLabel: 'پشت صحنه',
            title: 'پشت صحنه',
            thumbnail: thumbnail,
            playable: true,
            action: 'play-backstage'
          });
        }
      }

      // Add gallery items (show first 5 images)
      if (this.medias.image === 1 && this.lightImages.length > 0) {
        this.lightImages.slice(0, 5).forEach(function (image, idx) {
          items.push({
            type: 'gallery',
            typeLabel: 'گالری',
            title: "\u062A\u0635\u0648\u06CC\u0631 ".concat(idx + 1),
            thumbnail: image,
            playable: false,
            action: 'open-gallery',
            index: idx
          });
        });
      } else if (this.medias.image === 1) {
        // Show placeholder for gallery
        var _thumbnail = this.data.item.backdrop || this.data.item.poster;
        if (_thumbnail) {
          items.push({
            type: 'gallery',
            typeLabel: 'گالری',
            title: 'گالری تصاویر',
            thumbnail: _thumbnail,
            playable: false,
            action: 'open-gallery',
            index: 0
          });
        }
      }

      // Add music video
      if (this.medias.musicvideo === 1) {
        var _thumbnail2 = this.data.item.back_teaser || this.data.item.backdrop;
        if (_thumbnail2) {
          items.push({
            type: 'musicvideo',
            typeLabel: 'موزیک ویدئو',
            title: 'موزیک ویدئو',
            thumbnail: _thumbnail2,
            playable: true,
            action: 'play-musicvideo'
          });
        }
      }

      // Add next episode preview
      if (this.medias.next === 1) {
        var _thumbnail3 = this.data.item.back_teaser || this.data.item.backdrop;
        if (_thumbnail3) {
          items.push({
            type: 'next',
            typeLabel: 'قسمت بعد',
            title: 'آنچه در قسمت بعد خواهید دید',
            thumbnail: _thumbnail3,
            playable: true,
            action: 'play-next'
          });
        }
      }
      return items;
    }
  },
  methods: {
    getImageUrl: function getImageUrl(item) {
      var imageUrl = item.thumbnail;

      // For gallery items that already have full URLs
      if (item.type === 'gallery' && imageUrl.includes('thumb.upera.shop')) {
        return imageUrl.replace('w=1920&h=1200', 'w=273&h=273&zc=1');
      }
      if (item.type === 'backstage' || item.type === 'musicvideo' || item.type === 'next') {
        return "   https://thumb.upera.shop/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.shop/s3/".concat(imageUrl);
      }

      // For other items, construct the CDN URL
      if (!imageUrl) return '';
      var cdnBase = imageUrl.startsWith('http') ? imageUrl : "https://cdn.upera.shop/s3/backdrops/".concat(imageUrl);
      return "https://thumb.upera.shop/thumb?w=273&h=273&q=90&a=c&zc=1&src=".concat(cdnBase);
    },
    handleMediaClick: function handleMediaClick(item) {
      if (item.action === 'play-teaser') {
        this.$emit('play-teaser', 1);
      } else if (item.action === 'play-backstage') {
        this.$emit('play-backstage', 2);
      } else if (item.action === 'play-musicvideo') {
        this.$emit('play-musicvideo', 4);
      } else if (item.action === 'play-next') {
        this.$emit('play-next', 3);
      } else if (item.action === 'open-gallery') {
        this.$emit('open-gallery', item.index || 0);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/MediaSwiper.vue?vue&type=script&lang=js
 /* harmony default export */ var content_MediaSwipervue_type_script_lang_js = (MediaSwipervue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/MediaSwiper.vue?vue&type=style&index=0&id=5acc8adf&prod&scoped=true&lang=css
var MediaSwipervue_type_style_index_0_id_5acc8adf_prod_scoped_true_lang_css = __webpack_require__(1030);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/MediaSwiper.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_MediaSwipervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5acc8adf",
  null
  
)

/* harmony default export */ var MediaSwiper = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);