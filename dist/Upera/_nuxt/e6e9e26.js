(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_StatisticsItem_vue_vue_type_style_index_0_id_4769f138_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(909);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_StatisticsItem_vue_vue_type_style_index_0_id_4769f138_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_StatisticsItem_vue_vue_type_style_index_0_id_4769f138_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/StatisticsItem.vue?vue&type=template&id=4769f138&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "statistics-item statistics-item-row text-muted"
  }, [_c('i', {
    class: _vm.iconClass
  }), _vm._v(" "), _c('span', {
    staticClass: "statistics-item-caption"
  }, [_vm.label ? _c('span', {
    staticClass: "hide-mobile"
  }, [_vm._v(_vm._s(_vm.label) + " ")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.displayValue))]), _vm._v(" "), _vm.suffix ? _c('span', {
    staticClass: "hide-mobile"
  }, [_vm._v(" " + _vm._s(_vm.suffix))]) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/StatisticsItem.vue?vue&type=template&id=4769f138&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(141);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__(475);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/StatisticsItem.vue?vue&type=script&lang=js





/* harmony default export */ var StatisticsItemvue_type_script_lang_js = ({
  name: 'StatisticsItem',
  props: {
    icon: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['icon-calendar', 'icon-imdb', 'icon-clap', 'icon-episodes', 'icon-profile'].includes(value);
      }
    },
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    formatValue: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconClass: function iconClass() {
      return this.icon;
    },
    displayValue: function displayValue() {
      if (this.value === null || this.value === undefined) return '0';
      if (this.formatValue && typeof this.value === 'number') {
        return this.formatNumber(this.value);
      }
      return this.value.toString();
    }
  },
  methods: {
    formatNumber: function formatNumber(num) {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
      }
      return num.toString();
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/StatisticsItem.vue?vue&type=script&lang=js
 /* harmony default export */ var content_StatisticsItemvue_type_script_lang_js = (StatisticsItemvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/StatisticsItem.vue?vue&type=style&index=0&id=4769f138&prod&scoped=true&lang=css
var StatisticsItemvue_type_style_index_0_id_4769f138_prod_scoped_true_lang_css = __webpack_require__(1046);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/StatisticsItem.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_StatisticsItemvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4769f138",
  null
  
)

/* harmony default export */ var StatisticsItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);