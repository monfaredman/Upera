(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_NewMoviesSlider_vue_vue_type_style_index_0_id_30479a56_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(767);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_NewMoviesSlider_vue_vue_type_style_index_0_id_30479a56_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_NewMoviesSlider_vue_vue_type_style_index_0_id_30479a56_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/NewMoviesSlider.vue?vue&type=template&id=30479a56&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-movies-slider"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c('h5', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mb-1 d-inline-flex align-items-center show-all-link",
    attrs: {
      "to": {
        name: 'lists-list',
        params: {
          list: 'new_titles'
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
  }, [_vm._v("در حال بارگذاری…")])], 1) : _c('swiper', {
    ref: "newMoviesSwiper",
    attrs: {
      "options": _vm.swiperOptions
    },
    on: {
      "slideChange": _vm.onSlideChange
    }
  }, _vm._l(_vm.displayedItems, function (item, index) {
    return _c('swiper-slide', {
      key: item.id || index
    }, [_c('MediaCard', {
      attrs: {
        "item": item,
        "variant": 'backdrop',
        "size": _vm.size,
        "link-builder": _vm.buildMediaLink(item),
        "showBadges": _vm.showBadges,
        "showTitle": _vm.showTitle,
        "addSeriesClass": _vm.addSeriesClass,
        "hoverable": true
      }
    })], 1);
  }), 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app/NewMoviesSlider.vue?vue&type=template&id=30479a56&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
var vue_awesome_swiper = __webpack_require__(384);

// EXTERNAL MODULE: ./components/MediaCard.vue + 4 modules
var MediaCard = __webpack_require__(748);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(711);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/NewMoviesSlider.vue?vue&type=script&lang=js






 // keep consistent with TopRatedSlider

/* harmony default export */ var NewMoviesSlidervue_type_script_lang_js = ({
  components: {
    Swiper: vue_awesome_swiper["Swiper"],
    SwiperSlide: vue_awesome_swiper["SwiperSlide"],
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
          w: 382,
          h: 220
        };
      }
    },
    // linkBuilder: { type: Function, required: true },
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
      header: 'تازه های آپرا',
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          1200: {
            slidesPerView: 3.5
          },
          992: {
            slidesPerView: 2.5
          },
          768: {
            slidesPerView: 1.5
          },
          576: {
            slidesPerView: 1.5
          },
          0: {
            slidesPerView: 1.5
          }
        }
      },
      activeIndex: 0,
      isLoading: true
    };
  },
  computed: {
    displayedItems: function displayedItems() {
      // Directly use ugcMovies prop, no filtering needed
      if (!this.ugcMovies) {
        return [];
      }

      // Handle Vue reactive objects - Vue reactive arrays should still pass Array.isArray()
      // But if it doesn't, try to convert it
      var arr = [];
      if (Array.isArray(this.ugcMovies)) {
        arr = this.ugcMovies;
      } else if (this.ugcMovies && Object(esm_typeof["a" /* default */])(this.ugcMovies) === 'object') {
        // Check if it's array-like (has length and numeric indices)
        if (typeof this.ugcMovies.length === 'number' && this.ugcMovies.length >= 0) {
          // Convert array-like object to real array
          arr = Array.from(this.ugcMovies);
        } else {
          // Not an array or array-like, return empty
          return [];
        }
      } else {
        return [];
      }

      // Show only first 12 items
      return arr.slice(0, 12);
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
            var inst = _this.$refs.newMoviesSwiper && _this.$refs.newMoviesSwiper.$swiper;
            if (inst) inst.update();
          });
        }
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      var inst = _this2.$refs.newMoviesSwiper && _this2.$refs.newMoviesSwiper.$swiper;
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
    onSlideChange: function onSlideChange() {
      var inst = this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper;
      if (inst) {
        this.activeIndex = inst.activeIndex || 0;
      }
    },
    slideNext: function slideNext() {
      var inst = this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper;
      if (inst) {
        inst.slideNext();
      }
    },
    slidePrev: function slidePrev() {
      var inst = this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper;
      if (inst) {
        inst.slidePrev();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/app/NewMoviesSlider.vue?vue&type=script&lang=js
 /* harmony default export */ var app_NewMoviesSlidervue_type_script_lang_js = (NewMoviesSlidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/app/NewMoviesSlider.vue?vue&type=style&index=0&id=30479a56&prod&scoped=true&lang=css
var NewMoviesSlidervue_type_style_index_0_id_30479a56_prod_scoped_true_lang_css = __webpack_require__(814);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/app/NewMoviesSlider.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_NewMoviesSlidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "30479a56",
  null
  
)

/* harmony default export */ var NewMoviesSlider = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MediaCard: __webpack_require__(748).default})


/***/ })

}]);