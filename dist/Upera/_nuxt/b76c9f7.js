(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ContentLanguageInfo_vue_vue_type_style_index_0_id_7172abad_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(908);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ContentLanguageInfo_vue_vue_type_style_index_0_id_7172abad_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ContentLanguageInfo_vue_vue_type_style_index_0_id_7172abad_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ContentLanguageInfo.vue?vue&type=template&id=7172abad&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-language-info"
  }, [!_vm.isIranianBool && _vm.hasPersianDubBool ? _c('div', {
    staticClass: "text-invert mb-1 mb-md-3 persian-dub-badge"
  }, [_vm._v("\n    دوبله فارسی\n  ")]) : !_vm.isIranianBool && !_vm.hasPersianDubBool ? _c('div', {
    staticClass: "text-invert mb-1 mb-md-3 persian-sub-badge"
  }, [_vm._v("\n    زیرنویس فارسی\n  ")]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/ContentLanguageInfo.vue?vue&type=template&id=7172abad&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(84);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ContentLanguageInfo.vue?vue&type=script&lang=js


/* harmony default export */ var ContentLanguageInfovue_type_script_lang_js = ({
  name: 'ContentLanguageInfo',
  props: {
    isIranian: {
      type: [Boolean, Number, String],
      default: false
    },
    hasPersianDub: {
      type: [Boolean, Number, String],
      default: false
    }
  },
  computed: {
    isIranianBool: function isIranianBool() {
      return this.normalizeBool(this.isIranian);
    },
    hasPersianDubBool: function hasPersianDubBool() {
      return this.normalizeBool(this.hasPersianDub);
    }
  },
  methods: {
    normalizeBool: function normalizeBool(v) {
      if (typeof v === 'string') v = v.trim();
      return v === true || v === 1 || v === '1';
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/ContentLanguageInfo.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_ContentLanguageInfovue_type_script_lang_js = (ContentLanguageInfovue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/ContentLanguageInfo.vue?vue&type=style&index=0&id=7172abad&prod&scoped=true&lang=css
var ContentLanguageInfovue_type_style_index_0_id_7172abad_prod_scoped_true_lang_css = __webpack_require__(1045);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/ContentLanguageInfo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_ContentLanguageInfovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7172abad",
  null
  
)

/* harmony default export */ var ContentLanguageInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);