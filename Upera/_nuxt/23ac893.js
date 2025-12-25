(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71,59,65],{

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaTab_vue_vue_type_style_index_0_id_705b23b4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(914);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaTab_vue_vue_type_style_index_0_id_705b23b4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaTab_vue_vue_type_style_index_0_id_705b23b4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/tabs/MediaTab.vue?vue&type=template&id=705b23b4&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-tab', {
    attrs: {
      "title": _vm.title
    }
  }, [_vm.hasContent ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6 mb-2"
  }, [_c('MediaPreview', {
    attrs: {
      "data": _vm.data,
      "media-type": _vm.mediaType
    },
    on: {
      "play-media": function playMedia($event) {
        return _vm.$emit('play-media');
      }
    }
  })], 1)]) : _c('div', {
    staticClass: "no-content-message"
  }, [_c('div', {
    staticClass: "text-center py-5"
  }, [_c('i', {
    staticClass: "fas fa-film fa-3x mb-3 text-muted"
  }), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v("محتوایی برای نمایش وجود ندارد")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/tabs/MediaTab.vue?vue&type=template&id=705b23b4&scoped=true

// EXTERNAL MODULE: ./components/item/content/MediaPreview.vue + 4 modules
var MediaPreview = __webpack_require__(933);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/tabs/MediaTab.vue?vue&type=script&lang=js

/* harmony default export */ var MediaTabvue_type_script_lang_js = ({
  name: 'MediaTab',
  components: {
    MediaPreview: MediaPreview["default"]
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Object,
      default: function _default() {
        return {
          item: {}
        };
      }
    },
    mediaType: {
      type: String,
      default: ''
    }
  },
  emits: ['play-media'],
  computed: {
    hasContent: function hasContent() {
      var _this$data, _this$data2;
      // Check if there's a backdrop image which indicates content exists
      return ((_this$data = this.data) === null || _this$data === void 0 || (_this$data = _this$data.item) === null || _this$data === void 0 ? void 0 : _this$data.backdrop) || ((_this$data2 = this.data) === null || _this$data2 === void 0 || (_this$data2 = _this$data2.item) === null || _this$data2 === void 0 ? void 0 : _this$data2.back_teaser);
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/tabs/MediaTab.vue?vue&type=script&lang=js
 /* harmony default export */ var tabs_MediaTabvue_type_script_lang_js = (MediaTabvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/tabs/MediaTab.vue?vue&type=style&index=0&id=705b23b4&prod&scoped=true&lang=css
var MediaTabvue_type_style_index_0_id_705b23b4_prod_scoped_true_lang_css = __webpack_require__(1051);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/tabs/MediaTab.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tabs_MediaTabvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "705b23b4",
  null
  
)

/* harmony default export */ var MediaTab = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_adb97cbe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_adb97cbe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_adb97cbe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/common/OptimizedImage.vue?vue&type=template&id=adb97cbe&scoped=true
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

// CONCATENATED MODULE: ./components/item/common/OptimizedImage.vue?vue&type=template&id=adb97cbe&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(47);

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
      var baseUrl = 'https://thumb.upera.tv/thumb?';
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
        params.set('src', "https://cdn.upera.tv/s3/".concat(this.type, "/").concat(this.imageSrc));
      }
      if (this.type === 'backstage' || this.type === 'next') {
        return "https://thumb.upera.tv/thumb?w=382&h=220&q=100&a=t&src=https://cdn.upera.tv/s3/".concat(this.imageSrc);
      }
      return baseUrl + params.toString();
    }
  }
};

var OptimizedImagevue_type_script_lang_js_injectCSSVars_ = function __injectCSSVars__() {
  Object(vue_runtime_esm["useCssVars"])(function (_vm, _setup) {
    return {
      "285dbf18": _vm.aspectRatio
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
// EXTERNAL MODULE: ./components/item/common/OptimizedImage.vue?vue&type=style&index=0&id=adb97cbe&prod&scoped=true&lang=css
var OptimizedImagevue_type_style_index_0_id_adb97cbe_prod_scoped_true_lang_css = __webpack_require__(740);

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
  "adb97cbe",
  null
  
)

/* harmony default export */ var OptimizedImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaPreview_vue_vue_type_style_index_0_id_7dfe7bae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(789);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaPreview_vue_vue_type_style_index_0_id_7dfe7bae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaPreview_vue_vue_type_style_index_0_id_7dfe7bae_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/MediaPreview.vue?vue&type=template&id=7dfe7bae&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "position-relative d-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('play-media');
      }
    }
  }, [_c('i', {
    staticClass: "far fa-2x fa-play-circle play-icon"
  }), _vm._v(" "), _c('OptimizedImage', {
    staticClass: "img-fluid",
    attrs: {
      "image-src": _vm.data.item.back_teaser || _vm.data.item.backdrop,
      "alt": "".concat(_vm.mediaTypeText, " ").concat(_vm.data.item.name_fa),
      "fluid-grow": "",
      "thumb-options": {
        w: 1920,
        h: 1200,
        q: 100,
        a: 'c'
      },
      "type": _vm.mediaType,
      "aspect-ratio": 1920 / 1200
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/MediaPreview.vue?vue&type=template&id=7dfe7bae&scoped=true

// EXTERNAL MODULE: ./components/item/common/OptimizedImage.vue + 4 modules
var OptimizedImage = __webpack_require__(743);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/MediaPreview.vue?vue&type=script&lang=js

/* harmony default export */ var MediaPreviewvue_type_script_lang_js = ({
  name: 'MediaPreview',
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
    mediaType: {
      type: String,
      default: ''
    }
  },
  emits: ['play-media'],
  computed: {
    mediaTypeText: function mediaTypeText() {
      var types = {
        backstage: 'پشت صحنه',
        musicvideo: 'موزیک ویدئو',
        next: 'پیش نمایش قسمت بعد'
      };
      return types[this.mediaType] || 'مدیا';
    },
    previewImageSrc: function previewImageSrc() {
      var imageUrl = this.data.item.back_teaser || this.data.item.backdrop;
      if (!imageUrl) return '';
      return "https://thumb.upera.tv/thumb?w=1920&h=1200&q=100&a=c&src=https://cdn.upera.tv/s3/backdrops/".concat(imageUrl);
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/MediaPreview.vue?vue&type=script&lang=js
 /* harmony default export */ var content_MediaPreviewvue_type_script_lang_js = (MediaPreviewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/MediaPreview.vue?vue&type=style&index=0&id=7dfe7bae&prod&scoped=true&lang=css
var MediaPreviewvue_type_style_index_0_id_7dfe7bae_prod_scoped_true_lang_css = __webpack_require__(841);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/MediaPreview.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_MediaPreviewvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7dfe7bae",
  null
  
)

/* harmony default export */ var MediaPreview = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);