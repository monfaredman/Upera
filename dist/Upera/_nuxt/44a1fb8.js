(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_EpisodeInfo_vue_vue_type_style_index_0_id_408cb84c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_EpisodeInfo_vue_vue_type_style_index_0_id_408cb84c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_EpisodeInfo_vue_vue_type_style_index_0_id_408cb84c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/EpisodeInfo.vue?vue&type=template&id=408cb84c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isValidEpisode ? _c('div', {
    class: _vm.episodeInfoClasses
  }, [_vm._v("\n  " + _vm._s(_vm.$t('show.season')) + _vm._s(_vm.episode.season_number) + " -\n  " + _vm._s(_vm.$t('show.episode')) + " " + _vm._s(_vm.episode.episode_number) + "\n")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/EpisodeInfo.vue?vue&type=template&id=408cb84c&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/EpisodeInfo.vue?vue&type=script&lang=js

/* harmony default export */ var EpisodeInfovue_type_script_lang_js = ({
  name: 'EpisodeInfo',
  props: {
    episode: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    variant: {
      type: String,
      default: 'desktop',
      // 'desktop' or 'mobile'
      validator: function validator(value) {
        return ['desktop', 'mobile'].includes(value);
      }
    }
  },
  computed: {
    episodeInfoClasses: function episodeInfoClasses() {
      var baseClasses = 'text-invert mb-1 mb-md-3 font-weight-normal title-item-episode';
      return this.variant === 'mobile' ? "".concat(baseClasses, " p-fs-small title title2 d-lg-none") : "".concat(baseClasses, " p-fs-small d-none d-lg-block ");
    },
    isValidEpisode: function isValidEpisode() {
      return this.episode && this.episode.season_number !== undefined && this.episode.episode_number !== undefined;
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/EpisodeInfo.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_EpisodeInfovue_type_script_lang_js = (EpisodeInfovue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/EpisodeInfo.vue?vue&type=style&index=0&id=408cb84c&prod&scoped=true&lang=css
var EpisodeInfovue_type_style_index_0_id_408cb84c_prod_scoped_true_lang_css = __webpack_require__(790);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/EpisodeInfo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_EpisodeInfovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "408cb84c",
  null
  
)

/* harmony default export */ var EpisodeInfo = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);