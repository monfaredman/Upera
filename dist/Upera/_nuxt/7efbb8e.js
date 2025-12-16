(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18,59,63],{

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CastsTab_vue_vue_type_style_index_0_id_5e97ada6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(911);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CastsTab_vue_vue_type_style_index_0_id_5e97ada6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CastsTab_vue_vue_type_style_index_0_id_5e97ada6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/tabs/CastsTab.vue?vue&type=template&id=5e97ada6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "casts-tab-container",
    attrs: {
      "id": "actor"
    }
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_vm.casts && _vm.casts.length ? _c('div', {
    staticClass: "cast-section"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_vm._v(_vm._s(_vm.$t('show.cast')))]), _vm._v(" "), _c('CastGrid', {
    attrs: {
      "casts": _vm.casts,
      "directors": _vm.directors,
      "producers": _vm.producers,
      "writers": _vm.writers,
      "investors": _vm.investors,
      "characters": _vm.characters,
      "is-animation": _vm.isAnimation,
      "title": ""
    }
  })], 1) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/tabs/CastsTab.vue?vue&type=template&id=5e97ada6&scoped=true

// EXTERNAL MODULE: ./components/item/content/cast/CastGrid.vue + 4 modules
var CastGrid = __webpack_require__(939);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/tabs/CastsTab.vue?vue&type=script&lang=js

/* harmony default export */ var CastsTabvue_type_script_lang_js = ({
  name: 'CastsTab',
  components: {
    CastGrid: CastGrid["default"]
  },
  props: {
    casts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    directors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    producers: {
      type: Array,
      default: function _default() {
        return [];
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
    characters: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    isAnimation: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/tabs/CastsTab.vue?vue&type=script&lang=js
 /* harmony default export */ var tabs_CastsTabvue_type_script_lang_js = (CastsTabvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/tabs/CastsTab.vue?vue&type=style&index=0&id=5e97ada6&prod&scoped=true&lang=css
var CastsTabvue_type_style_index_0_id_5e97ada6_prod_scoped_true_lang_css = __webpack_require__(1048);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/tabs/CastsTab.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tabs_CastsTabvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5e97ada6",
  null
  
)

/* harmony default export */ var CastsTab = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_2c1de6e6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_2c1de6e6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_2c1de6e6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/common/OptimizedImage.vue?vue&type=template&id=2c1de6e6&scoped=true
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

// CONCATENATED MODULE: ./components/item/common/OptimizedImage.vue?vue&type=template&id=2c1de6e6&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(62);

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
      "a95f2012": _vm.aspectRatio
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
// EXTERNAL MODULE: ./components/item/common/OptimizedImage.vue?vue&type=style&index=0&id=2c1de6e6&prod&scoped=true&lang=css
var OptimizedImagevue_type_style_index_0_id_2c1de6e6_prod_scoped_true_lang_css = __webpack_require__(740);

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
  "2c1de6e6",
  null
  
)

/* harmony default export */ var OptimizedImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CastGrid_vue_vue_type_style_index_0_id_50f03d8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(795);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CastGrid_vue_vue_type_style_index_0_id_50f03d8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CastGrid_vue_vue_type_style_index_0_id_50f03d8f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/cast/CastGrid.vue?vue&type=template&id=50f03d8f&scoped=true


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.mergedList && _vm.mergedList.length ? _c('div', {
    staticClass: "cast-carousel"
  }, [_vm.showArrows && !_vm.isAtStart ? _c('button', {
    staticClass: "carousel-arrow carousel-arrow-prev",
    attrs: {
      "disabled": _vm.isAtStart,
      "aria-label": "Previous"
    },
    on: {
      "click": _vm.slidePrev
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-right"
  })]) : _vm._e(), _vm._v(" "), _vm.showArrows && !_vm.isAtEnd ? _c('button', {
    staticClass: "carousel-arrow carousel-arrow-next",
    attrs: {
      "disabled": _vm.isAtEnd,
      "aria-label": "Next"
    },
    on: {
      "click": _vm.slideNext
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  })]) : _vm._e(), _vm._v(" "), _vm.showArrows && !_vm.isAtStart ? _c('div', {
    staticClass: "carousel-shadow carousel-shadow-start"
  }) : _vm._e(), _vm._v(" "), _vm.showArrows && !_vm.isAtEnd ? _c('div', {
    staticClass: "carousel-shadow carousel-shadow-end"
  }) : _vm._e(), _vm._v(" "), _c('swiper', {
    ref: "castsSwiper",
    staticClass: "cast-swiper",
    attrs: {
      "options": _vm.swiperOptions
    }
  }, _vm._l(_vm.mergedList, function (person, index) {
    return _c('swiper-slide', {
      key: "".concat(person._role, "-").concat(person.id || index),
      staticClass: "cast-slide"
    }, [person && person.id ? _c('nuxt-link', {
      staticClass: "cast-card-link",
      attrs: {
        "to": {
          name: 'cast-id',
          params: {
            id: person.id
          }
        }
      }
    }, [_c('div', {
      staticClass: "cast-image-wrapper"
    }, [_c('OptimizedImage', {
      staticClass: "cast-image",
      attrs: {
        "image-src": person.image,
        "alt": person.name,
        "width": 200,
        "height": 200,
        "thumb-options": {
          w: 200,
          h: 200,
          q: 100,
          a: 't'
        },
        "type": "casts",
        "aspect-ratio": 200 / 200
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "cast-info"
    }, [_c('span', {
      staticClass: "actor-name"
    }, [_vm._v("\n            " + _vm._s(_vm.ChooseLang(person.name, person.name_fa)) + "\n          ")]), _vm._v(" "), person._role === 'casts' && _vm.showCharacters && person.character ? _c('span', {
      staticClass: "character-name"
    }, [_vm._v("\n            " + _vm._s(_vm.ChooseLang(person.character, person.character_fa)) + "\n          ")]) : _vm._e(), _vm._v(" "), person._role === 'casts' && _vm.isAnimation ? _c('span', {
      staticClass: "person-role"
    }, [_vm._v("صداپیشه")]) : _c('span', {
      staticClass: "person-role"
    }, [_vm._v(_vm._s(_vm.roleLabel(person._role)))])])]) : _c('div', {
      staticClass: "cast-card-link cast-card-static"
    }, [_c('div', {
      staticClass: "cast-image-wrapper"
    }, [_c('OptimizedImage', {
      staticClass: "cast-image",
      attrs: {
        "image-src": person.image,
        "alt": person.name,
        "width": 200,
        "height": 200,
        "thumb-options": {
          w: 200,
          h: 200,
          q: 100,
          a: 't'
        },
        "type": "casts"
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "cast-info"
    }, [_c('span', {
      staticClass: "actor-name"
    }, [_vm._v("\n            " + _vm._s(_vm.ChooseLang(person.name, person.name_fa)) + "\n          ")]), _vm._v(" "), person._role === 'casts' && _vm.showCharacters && person.character ? _c('span', {
      staticClass: "character-name"
    }, [_vm._v("\n            " + _vm._s(_vm.ChooseLang(person.character, person.character_fa)) + "\n          ")]) : _vm._e(), _vm._v(" "), person._role === 'casts' && _vm.isAnimation ? _c('span', {
      staticClass: "person-role"
    }, [_vm._v("صداپیشه")]) : _c('span', {
      staticClass: "person-role"
    }, [_vm._v(_vm._s(_vm.roleLabel(person._role)))])])])], 1);
  }), 1)], 1) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/cast/CastGrid.vue?vue&type=template&id=50f03d8f&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
var vue_awesome_swiper = __webpack_require__(384);

// EXTERNAL MODULE: ./components/item/common/OptimizedImage.vue + 4 modules
var OptimizedImage = __webpack_require__(743);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(711);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/cast/CastGrid.vue?vue&type=script&lang=js


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }












/* harmony default export */ var CastGridvue_type_script_lang_js = ({
  name: 'CastGrid',
  components: {
    Swiper: vue_awesome_swiper["Swiper"],
    SwiperSlide: vue_awesome_swiper["SwiperSlide"],
    OptimizedImage: OptimizedImage["default"]
  },
  props: {
    casts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    directors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    producers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    characters: {
      type: Array,
      default: function _default() {
        return [];
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
    title: {
      type: String,
      default: ''
    },
    showCharacters: {
      type: Boolean,
      default: true
    },
    isAnimation: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      swiperOptions: {
        slidesPerView: 5.5,
        slidesPerGroup: 2,
        spaceBetween: 28,
        speed: 500,
        observer: true,
        observeParents: true,
        watchOverflow: true,
        freeMode: false,
        breakpoints: {
          1600: {
            slidesPerView: 12.5
          },
          1400: {
            slidesPerView: 9.5
          },
          1200: {
            slidesPerView: 7.5
          },
          1024: {
            slidesPerView: 8.5
          },
          768: {
            slidesPerView: 6.5
          },
          576: {
            slidesPerView: 5.5
          },
          376: {
            slidesPerView: 3.6
          },
          0: {
            slidesPerView: 2.6
          }
        }
      },
      isAtStart: true,
      isAtEnd: false,
      showArrows: false
    };
  },
  computed: {
    // priority: directors, producers, writers, investors, casts, characters
    mergedList: function mergedList() {
      var mapWithRole = function mapWithRole(arr, role) {
        return (arr || []).map(function (p) {
          return _objectSpread(_objectSpread({}, p), {}, {
            _role: role
          });
        });
      };
      return [].concat(Object(toConsumableArray["a" /* default */])(mapWithRole(this.directors, 'directors')), Object(toConsumableArray["a" /* default */])(mapWithRole(this.producers, 'producers')), Object(toConsumableArray["a" /* default */])(mapWithRole(this.writers, 'writers')), Object(toConsumableArray["a" /* default */])(mapWithRole(this.investors, 'investors')), Object(toConsumableArray["a" /* default */])(mapWithRole(this.casts, 'casts')), Object(toConsumableArray["a" /* default */])(mapWithRole(this.characters, 'characters')));
    }
  },
  watch: {
    mergedList: {
      immediate: true,
      handler: function handler() {
        this.updateSwiper();
      }
    }
  },
  mounted: function mounted() {
    this.updateSwiper();
    this.initSwiperEvents();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeSwiperEvents();
  },
  methods: {
    updateSwiper: function updateSwiper() {
      var _this = this;
      this.$nextTick(function () {
        var _this$$refs$castsSwip;
        var instance = (_this$$refs$castsSwip = _this.$refs.castsSwiper) === null || _this$$refs$castsSwip === void 0 ? void 0 : _this$$refs$castsSwip.$swiper;
        if (instance && instance.update) {
          instance.update();
          _this.checkArrowsVisibility();
        }
      });
    },
    initSwiperEvents: function initSwiperEvents() {
      var _this2 = this;
      this.$nextTick(function () {
        var _this2$$refs$castsSwi;
        var swiper = (_this2$$refs$castsSwi = _this2.$refs.castsSwiper) === null || _this2$$refs$castsSwi === void 0 ? void 0 : _this2$$refs$castsSwi.$swiper;
        if (swiper) {
          swiper.on('slideChange', _this2.onSlideChange);
          swiper.on('init', _this2.checkArrowsVisibility);
          swiper.on('resize', _this2.checkArrowsVisibility);
          _this2.checkArrowsVisibility();
        }
      });
    },
    removeSwiperEvents: function removeSwiperEvents() {
      var _this$$refs$castsSwip2;
      var swiper = (_this$$refs$castsSwip2 = this.$refs.castsSwiper) === null || _this$$refs$castsSwip2 === void 0 ? void 0 : _this$$refs$castsSwip2.$swiper;
      if (swiper) {
        swiper.off('slideChange', this.onSlideChange);
        swiper.off('init', this.checkArrowsVisibility);
        swiper.off('resize', this.checkArrowsVisibility);
      }
    },
    onSlideChange: function onSlideChange() {
      this.updateArrowStates();
    },
    updateArrowStates: function updateArrowStates() {
      var _this$$refs$castsSwip3;
      var swiper = (_this$$refs$castsSwip3 = this.$refs.castsSwiper) === null || _this$$refs$castsSwip3 === void 0 ? void 0 : _this$$refs$castsSwip3.$swiper;
      if (swiper) {
        this.isAtStart = swiper.isBeginning;
        this.isAtEnd = swiper.isEnd;
      }
    },
    checkArrowsVisibility: function checkArrowsVisibility() {
      var _this3 = this;
      this.$nextTick(function () {
        var _this3$$refs$castsSwi;
        var swiper = (_this3$$refs$castsSwi = _this3.$refs.castsSwiper) === null || _this3$$refs$castsSwi === void 0 ? void 0 : _this3$$refs$castsSwi.$swiper;
        if (swiper) {
          var _swiper$slides;
          // Show arrows if there are more slides than visible slides
          var totalSlides = ((_swiper$slides = swiper.slides) === null || _swiper$slides === void 0 ? void 0 : _swiper$slides.length) || 0;
          var visibleSlides = Math.floor(swiper.params.slidesPerView || 1);
          _this3.showArrows = totalSlides > visibleSlides;
          _this3.updateArrowStates();
        }
      });
    },
    slideNext: function slideNext() {
      var _this$$refs$castsSwip4;
      var swiper = (_this$$refs$castsSwip4 = this.$refs.castsSwiper) === null || _this$$refs$castsSwip4 === void 0 ? void 0 : _this$$refs$castsSwip4.$swiper;
      if (swiper && !this.isAtEnd) {
        swiper.slideNext();
      }
    },
    slidePrev: function slidePrev() {
      var _this$$refs$castsSwip5;
      var swiper = (_this$$refs$castsSwip5 = this.$refs.castsSwiper) === null || _this$$refs$castsSwip5 === void 0 ? void 0 : _this$$refs$castsSwip5.$swiper;
      if (swiper && !this.isAtStart) {
        swiper.slidePrev();
      }
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en || '';
    },
    // return localized role label
    roleLabel: function roleLabel(role) {
      var isFa = this.$i18n && this.$i18n.locale === 'fa';
      var labelsEn = {
        directors: 'Director',
        producers: 'Producer',
        writers: 'Writer',
        investors: 'Investor',
        casts: 'Cast',
        characters: 'Character'
      };
      var labelsFa = {
        directors: 'کارگردان',
        producers: 'تهیه‌کننده',
        writers: 'نویسنده',
        investors: 'سرمایه‌گذار',
        casts: 'بازیگر',
        characters: 'شخصیت'
      };
      var base = isFa ? labelsFa[role] || '' : labelsEn[role] || '';
      // Optionally show character role for casts in same locale (e.g. "بازیگر" or "Cast")
      return base;
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/cast/CastGrid.vue?vue&type=script&lang=js
 /* harmony default export */ var cast_CastGridvue_type_script_lang_js = (CastGridvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/cast/CastGrid.vue?vue&type=style&index=0&id=50f03d8f&prod&scoped=true&lang=css
var CastGridvue_type_style_index_0_id_50f03d8f_prod_scoped_true_lang_css = __webpack_require__(845);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/cast/CastGrid.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cast_CastGridvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "50f03d8f",
  null
  
)

/* harmony default export */ var CastGrid = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);