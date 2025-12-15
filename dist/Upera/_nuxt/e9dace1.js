(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 845:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ImageGrid_vue_vue_type_style_index_0_id_71209253_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(795);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ImageGrid_vue_vue_type_style_index_0_id_71209253_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ImageGrid_vue_vue_type_style_index_0_id_71209253_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/gallery/ImageGrid.vue?vue&type=template&id=71209253&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "gallery-grid"
  }, _vm._l(_vm.images, function (image, index) {
    return _c('div', {
      key: index,
      staticClass: "gallery-grid-item",
      on: {
        "click": function click($event) {
          return _vm.$emit('image-click', index);
        }
      }
    }, [_c('div', {
      staticClass: "image-wrapper"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "gallery-thumbnail",
      attrs: {
        "data-src": _vm.getThumbnailUrl(image),
        "alt": "\u062A\u0635\u0648\u06CC\u0631 ".concat(index + 1, " ").concat(_vm.itemName),
        "loading": "lazy"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "image-overlay"
    }, [_c('div', {
      staticClass: "overlay-content"
    }, [_c('i', {
      staticClass: "fas fa-search-plus"
    }), _vm._v(" "), _c('span', {
      staticClass: "image-number"
    }, [_vm._v(_vm._s(index + 1))])])])])]);
  }), 0);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/gallery/ImageGrid.vue?vue&type=template&id=71209253&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/gallery/ImageGrid.vue?vue&type=script&lang=js


/* harmony default export */ var ImageGridvue_type_script_lang_js = ({
  name: 'ImageGrid',
  components: {},
  props: {
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    itemName: {
      type: String,
      default: ''
    }
  },
  emits: ['image-click'],
  methods: {
    getThumbnailUrl: function getThumbnailUrl(fullImageUrl) {
      // Convert the full-size URL to a smaller thumbnail for the grid
      // Replace the large dimensions with smaller ones for grid display
      return fullImageUrl.replace('w=1920&h=1200', 'w=400&h=300');
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/gallery/ImageGrid.vue?vue&type=script&lang=js
 /* harmony default export */ var gallery_ImageGridvue_type_script_lang_js = (ImageGridvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/gallery/ImageGrid.vue?vue&type=style&index=0&id=71209253&prod&scoped=true&lang=css
var ImageGridvue_type_style_index_0_id_71209253_prod_scoped_true_lang_css = __webpack_require__(845);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/gallery/ImageGrid.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  gallery_ImageGridvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "71209253",
  null
  
)

/* harmony default export */ var ImageGrid = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);