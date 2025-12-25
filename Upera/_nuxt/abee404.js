(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_TopRatedSlider_vue_vue_type_style_index_0_id_a61fdf18_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(892);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_TopRatedSlider_vue_vue_type_style_index_0_id_a61fdf18_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_TopRatedSlider_vue_vue_type_style_index_0_id_a61fdf18_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/TopRatedSlider.vue?vue&type=template&id=a61fdf18&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "top-rated-slider"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c('h5', {
    staticClass: "mb-0"
  }, [_vm._v("پیشنهادی")]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mb-1 d-inline-flex align-items-center show-all-link",
    attrs: {
      "to": {
        name: 'lists-list',
        params: {
          list: 'offer'
        }
      }
    }
  }, [_c('span', {
    staticClass: "show-all-text ml-1"
  }, [_vm._v(_vm._s(_vm.$t('new.show_all')))]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-h show-all-icon",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "slider-wrapper"
  }, [_vm.isLoading ? _c('div', {
    staticClass: "loading-state d-flex align-items-center justify-content-center",
    style: {
      minHeight: (_vm.size && _vm.size.h ? _vm.size.h : 200) + 'px'
    }
  }, [_c('b-spinner', {
    staticClass: "ml-2",
    attrs: {
      "small": "",
      "type": "grow"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2 text-white"
  }, [_vm._v("در حال بارگذاری…")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:[1]",
      value: _vm.swiperOptions,
      expression: "swiperOptions",
      arg: 1
    }],
    staticClass: "swiper-container newset-slider2"
  }, [_c('div', {
    staticClass: "swiper-wrapper py-1"
  }, _vm._l(_vm.displayedItems, function (item, index) {
    return _c('div', {
      key: item.id || index,
      staticClass: "swiper-slide"
    }, [_c('MediaCard', {
      attrs: {
        "item": item,
        "variant": _vm.cardVariant,
        "size": _vm.size,
        "link-builder": _vm.buildMediaLink(item),
        "showBadges": _vm.showBadges,
        "showTitle": _vm.showTitle,
        "addSeriesClass": _vm.addSeriesClass
      }
    })], 1);
  }), 0)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app/TopRatedSlider.vue?vue&type=template&id=a61fdf18&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(711);

// EXTERNAL MODULE: ./components/MediaCard.vue + 4 modules
var MediaCard = __webpack_require__(748);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/TopRatedSlider.vue?vue&type=script&lang=js




// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

/* harmony default export */ var TopRatedSlidervue_type_script_lang_js = ({
  components: {
    // Swiper,
    // SwiperSlide,
    MediaCard: MediaCard["default"]
  },
  props: {
    ugcMovies: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // HorizontalList-like config
    cardVariant: {
      type: String,
      default: 'poster'
    },
    size: {
      type: Object,
      default: function _default() {
        return {
          w: 142,
          h: 212
        };
      }
    },
    showBadges: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    addSeriesClass: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      itemsToShow: 20,
      activeIndex: 0,
      isLoading: true,
      swiperOptions: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        countdown: {},
        breakpoints: {
          200: {
            slidesPerView: 2.5
          },
          420: {
            slidesPerView: 3.5
          },
          768: {
            slidesPerView: 4.5
          },
          992: {
            slidesPerView: 5.5
          },
          1024: {
            slidesPerView: 6.5
          },
          1200: {
            slidesPerView: 7
          },
          1420: {
            slidesPerView: 8
          },
          1670: {
            slidesPerView: 9
          }
        }
      }
    };
  },
  computed: {
    items: function items() {
      return this.ugcMovies || [];
    },
    displayedItems: function displayedItems() {
      var arr = this.items;
      var n = Math.min(this.itemsToShow, arr.length || this.itemsToShow);
      return arr.slice(0, n);
    }
  },
  watch: {
    displayedItems: {
      immediate: true,
      handler: function handler(newVal) {
        var _this = this;
        var ready = Array.isArray(newVal) && newVal.length > 0;
        this.isLoading = !ready;
        if (ready) {
          this.$nextTick(function () {
            var inst = _this.$refs.topRatedSwiper && _this.$refs.topRatedSwiper.$swiper;
            if (inst) inst.update();
          });
        }
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      var inst = _this2.$refs.topRatedSwiper && _this2.$refs.topRatedSwiper.$swiper;
      if (inst) {
        inst.update();
        _this2.activeIndex = inst.activeIndex || 0;
      }
    });
  },
  methods: {
    buildMediaLink: function buildMediaLink(item) {
      if (item && item.type && item.id) {
        return {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        };
      }
      // Tries common fields first, then falls back safely
      if (item && item.route) return item.route;
      if (item && item.url) return item.url;
      if (item && item.slug) return "/content/".concat(item.slug);
      if (item && item.id) return "/content/".concat(item.id);
      return '#';
    },
    setItemsToShow: function setItemsToShow(count) {
      var _this3 = this;
      this.itemsToShow = count;
      this.$nextTick(function () {
        var inst = _this3.$refs.topRatedSwiper && _this3.$refs.topRatedSwiper.$swiper;
        if (inst) {
          inst.update();
        }
      });
    },
    onSlideChange: function onSlideChange() {
      var inst = this.$refs.topRatedSwiper && this.$refs.topRatedSwiper.$swiper;
      if (inst) {
        this.activeIndex = inst.activeIndex || 0;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/app/TopRatedSlider.vue?vue&type=script&lang=js
 /* harmony default export */ var app_TopRatedSlidervue_type_script_lang_js = (TopRatedSlidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/app/TopRatedSlider.vue?vue&type=style&index=0&id=a61fdf18&prod&scoped=true&lang=css
var TopRatedSlidervue_type_style_index_0_id_a61fdf18_prod_scoped_true_lang_css = __webpack_require__(1029);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/app/TopRatedSlider.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_TopRatedSlidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "a61fdf18",
  null
  
)

/* harmony default export */ var TopRatedSlider = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MediaCard: __webpack_require__(748).default})


/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);