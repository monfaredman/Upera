(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73,59],{

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/SeriesLastEpisode.vue?vue&type=template&id=02fc6cfe

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "slideshow",
      "dir": "ltr"
    }
  }, [_c('div', {
    staticClass: "swiper-container showcase main-slideshow showcase-season"
  }, [_c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-md-6 col-lg-7 showcase-pic"
  }, [_c('OptimizedImage', {
    staticClass: "showcase-img d-none d-lg-block",
    attrs: {
      "image-src": _vm.lastEpisode.backdrop,
      "alt": _vm.lastEpisode.name,
      "width": 1120,
      "height": 400,
      "thumb-options": {
        w: 1120,
        h: 400,
        q: 95,
        a: 'c',
        zc: 1
      },
      "type": "backdrops",
      "fluid-grow": "",
      "aspect-ratio": 1120 / 400
    }
  }), _vm._v(" "), _c('OptimizedImage', {
    staticClass: "showcase-img d-lg-none",
    attrs: {
      "image-src": _vm.lastEpisode.backdrop,
      "alt": _vm.lastEpisode.name,
      "width": 375,
      "height": 300,
      "thumb-options": {
        w: 375,
        h: 300,
        q: 100,
        a: 'c',
        zc: 1
      },
      "type": "backdrops",
      "fluid-grow": "",
      "aspect-ratio": 375 / 300
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-lg-5"
  })]), _vm._v(" "), _c('div', {
    staticClass: "showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter pr-md-3"
  }, [_c('div', {
    staticClass: "showcase-thumbnail-wrapper w-full"
  }, [_c('div', {
    staticClass: "d-flex h-full align-items-end"
  }, [_c('div', {
    staticClass: "pr-md-4 pr-md-2 showcase-desc-wrapper"
  }, [_c('div', {
    staticClass: "showcase-desc"
  }, [_c('div', {
    staticClass: "title text-invert mb-5 mb-md-3"
  }, [_c('nuxt-link', {
    attrs: {
      "to": {
        name: 'episode-id',
        params: {
          id: _vm.lastEpisode.id
        }
      }
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.ChooseLang(_vm.data.item.name, _vm.data.item.name_fa)) + " - قسمت\n                    " + _vm._s(_vm.lastEpisode.episode_number) + "\n                  ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "p-fs-small text-invert mb-1 mb-md-3 hide-mobile font-weight-normal"
  }, [_vm._v("\n                  جدیدترین قسمت\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "showcase-button-wrapper"
  }, [_c('nuxt-link', {
    staticClass: "text-invert show-mobile",
    attrs: {
      "to": {
        name: 'episode-id',
        params: {
          id: _vm.lastEpisode.id
        }
      }
    }
  }, [_c('i', {
    staticClass: "icon-info"
  }), _vm._v(" "), _c('div', [_vm._v("توضیحات این قسمت")])]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "btn btn-main",
    attrs: {
      "to": {
        name: 'episode-show-id',
        params: {
          id: _vm.lastEpisode.id
        }
      }
    }
  }, [_vm._v("\n                  نمایش\n                ")]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "btn btn-dark btn-download ml-md-2 hide-mobile",
    attrs: {
      "to": {
        name: 'episode-id',
        params: {
          id: _vm.lastEpisode.id
        }
      }
    }
  }, [_vm._v("\n                  توضیحات این قسمت "), _c('i', {
    staticClass: "icon-info"
  })])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "thumbnail hide-mobile"
  }, [_c('nuxt-link', {
    attrs: {
      "to": {
        name: 'episode-id',
        params: {
          id: _vm.lastEpisode.id
        }
      }
    }
  }, [_c('OptimizedImage', {
    staticClass: "thumbnail",
    attrs: {
      "image-src": _vm.lastEpisode.poster,
      "alt": _vm.lastEpisode.name,
      "width": 207,
      "height": 307,
      "thumb-options": {
        w: 207,
        h: 307,
        q: 100,
        a: 'c'
      },
      "type": "posters",
      "fluid-grow": "",
      "aspect-ratio": 207 / 307
    }
  })], 1)], 1)])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/SeriesLastEpisode.vue?vue&type=template&id=02fc6cfe

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./components/item/common/OptimizedImage.vue + 4 modules
var OptimizedImage = __webpack_require__(742);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/SeriesLastEpisode.vue?vue&type=script&lang=js


/* harmony default export */ var SeriesLastEpisodevue_type_script_lang_js = ({
  name: 'SeriesLastEpisode',
  components: {
    OptimizedImage: OptimizedImage["default"]
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
    lastEpisode: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0
    }
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en;
    }
  }
});
// CONCATENATED MODULE: ./components/item/SeriesLastEpisode.vue?vue&type=script&lang=js
 /* harmony default export */ var item_SeriesLastEpisodevue_type_script_lang_js = (SeriesLastEpisodevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/SeriesLastEpisode.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  item_SeriesLastEpisodevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SeriesLastEpisode = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_1f318961_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(737);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_1f318961_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_1f318961_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/common/OptimizedImage.vue?vue&type=template&id=1f318961&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-img', _vm._g(_vm._b({
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.computedSrc,
      expression: "computedSrc"
    }, {
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "img-grid-flow",
    class: _vm.height === 'full' ? 'h-full' : '' + ' ' + _vm.classNames,
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "show": "",
      "width": _vm.width,
      "height": _vm.height === 'full' ? '600px' : _vm.height,
      "data-src": _vm.computedSrc,
      "alt": _vm.alt,
      "rounded": "lg",
      "loading": "lazy"
    }
  }, 'b-img', _vm.computedProps, false), _vm.$listeners))], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/common/OptimizedImage.vue?vue&type=template&id=1f318961&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/common/OptimizedImage.vue?vue&type=script&lang=js











var __default__ = {
  name: 'OptimizedImage',
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    },
    thumbOptions: {
      type: Object,
      default: function _default() {
        return {
          w: null,
          h: null,
          q: 100,
          a: 'c',
          zc: null,
          src: ''
        };
      }
    },
    type: {
      type: String,
      default: 'posters',
      // 'posters', 'backdrops', 'casts', 'files'
      validator: function validator(value) {
        return ['posters', 'backdrops', 'casts', 'files', 'backstage', 'next'].includes(value);
      }
    },
    fluidGrow: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: true
    },
    blankColor: {
      type: String,
      default: '#bbb'
    },
    show: {
      type: Boolean,
      default: true
    },
    classNames: {
      type: String,
      default: ''
    },
    aspectRatio: {
      // Accept both String and Number to avoid Vue type warnings
      type: [String, Number],
      default: null
    }
  },
  computed: {
    computedProps: function computedProps() {
      var baseProps = {
        blank: this.blank,
        blankColor: this.blankColor,
        show: this.show
      };
      if (this.fluidGrow) {
        baseProps.fluidGrow = true;
      } else if (this.width && this.height) {
        baseProps.width = this.width;
        baseProps.height = this.height === 'full' ? '100%' : this.height;
      }
      return baseProps;
    },
    computedSrc: function computedSrc() {
      var baseUrl = 'https://thumb.upera.shop/thumb?';
      var params = new URLSearchParams();

      // Add thumbnail options
      Object.entries(this.thumbOptions).forEach(function (_ref) {
        var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (value !== null && value !== '') {
          params.set(key, value);
        }
      });

      // Ensure base CDN URL or return undefined if no src available
      if (!params.get('src')) {
        if (!this.imageSrc) {
          return undefined;
        }
        params.set('src', "https://cdn.upera.shop/s3/".concat(this.type, "/").concat(this.imageSrc));
      }
      if (this.type === 'backstage' || this.type === 'next') {
        return "https://thumb.upera.shop/thumb?w=382&h=220&q=100&a=t&src=https://cdn.upera.shop/s3/".concat(this.imageSrc);
      }
      return baseUrl + params.toString();
    }
  }
};

var OptimizedImagevue_type_script_lang_js_injectCSSVars_ = function __injectCSSVars__() {
  Object(vue_runtime_esm["useCssVars"])(function (_vm, _setup) {
    return {
      "73bcffe4": _vm.aspectRatio
    };
  });
};
var __setup__ = __default__.setup;
__default__.setup = __setup__ ? function (props, ctx) {
  OptimizedImagevue_type_script_lang_js_injectCSSVars_();
  return __setup__(props, ctx);
} : OptimizedImagevue_type_script_lang_js_injectCSSVars_;
/* harmony default export */ var OptimizedImagevue_type_script_lang_js = (__default__);
// CONCATENATED MODULE: ./components/item/common/OptimizedImage.vue?vue&type=script&lang=js
 /* harmony default export */ var common_OptimizedImagevue_type_script_lang_js = (OptimizedImagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/common/OptimizedImage.vue?vue&type=style&index=0&id=1f318961&prod&scoped=true&lang=css
var OptimizedImagevue_type_style_index_0_id_1f318961_prod_scoped_true_lang_css = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/common/OptimizedImage.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_OptimizedImagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1f318961",
  null
  
)

/* harmony default export */ var OptimizedImage = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);