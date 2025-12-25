(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_HorizontalListSkeleton_vue_vue_type_style_index_0_id_155cb76e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(900);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_HorizontalListSkeleton_vue_vue_type_style_index_0_id_155cb76e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_HorizontalListSkeleton_vue_vue_type_style_index_0_id_155cb76e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/home/HorizontalListSkeleton.vue?vue&type=template&id=155cb76e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "horizontal-list-skeleton mt-4"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "skeleton-title mb-3"
  }), _vm._v(" "), _c('div', {
    staticClass: "d-flex gap-2 overflow-hidden"
  }, _vm._l(_vm.itemCount, function (i) {
    return _c('div', {
      key: i,
      staticClass: "skeleton-item",
      class: _vm.itemClass
    });
  }), 0)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/home/HorizontalListSkeleton.vue?vue&type=template&id=155cb76e&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/home/HorizontalListSkeleton.vue?vue&type=script&lang=js

/* harmony default export */ var HorizontalListSkeletonvue_type_script_lang_js = ({
  name: 'HorizontalListSkeleton',
  props: {
    variant: {
      type: String,
      default: 'poster' // 'poster' or 'backdrop'
    },
    itemCount: {
      type: Number,
      default: 8
    }
  },
  computed: {
    itemClass: function itemClass() {
      return this.variant === 'backdrop' ? 'skeleton-item-backdrop' : 'skeleton-item-poster';
    }
  }
});
// CONCATENATED MODULE: ./components/home/HorizontalListSkeleton.vue?vue&type=script&lang=js
 /* harmony default export */ var home_HorizontalListSkeletonvue_type_script_lang_js = (HorizontalListSkeletonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/home/HorizontalListSkeleton.vue?vue&type=style&index=0&id=155cb76e&prod&scoped=true&lang=css
var HorizontalListSkeletonvue_type_style_index_0_id_155cb76e_prod_scoped_true_lang_css = __webpack_require__(1037);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/home/HorizontalListSkeleton.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_HorizontalListSkeletonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "155cb76e",
  null
  
)

/* harmony default export */ var HorizontalListSkeleton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);