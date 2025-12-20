(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SubscriptionButton_vue_vue_type_style_index_0_id_5e5fcf10_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(778);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SubscriptionButton_vue_vue_type_style_index_0_id_5e5fcf10_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SubscriptionButton_vue_vue_type_style_index_0_id_5e5fcf10_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/player/SubscriptionButton.vue?vue&type=template&id=5e5fcf10&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.isVisible && _vm.shouldShow ? _c('button', {
    staticClass: "subscription-floating-button",
    on: {
      "click": _vm.handleSubscriptionClick
    }
  }, [_c('i', {
    staticClass: "fa fa-money-bill"
  }), _vm._v(" "), _c('span', {
    staticClass: "button-text"
  }, [_vm._v("\n      " + _vm._s(_vm.buttonText) + "\n      "), _vm.showHalfPriceLabel ? _c('span', {
    staticClass: "half-price-label"
  }, [_vm._v("\n        (" + _vm._s(_vm.usageVolumeText) + ")\n      ")]) : _vm._e()])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/player/SubscriptionButton.vue?vue&type=template&id=5e5fcf10&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/player/SubscriptionButton.vue?vue&type=script&lang=js


/* harmony default export */ var SubscriptionButtonvue_type_script_lang_js = ({
  name: 'SubscriptionButton',
  props: {
    fullrateData: {
      type: Object,
      default: function _default() {
        return {
          rate: 0.5,
          show_subscription: 0,
          fa: {
            title: 'نیم بها',
            alternative: 'نیم بها'
          },
          en: {
            title: 'Half-priced',
            alternative: 'Half-priced'
          }
        };
      }
    },
    contentId: {
      type: [String, Number],
      required: true
    },
    contentType: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      isVisible: true,
      hideTimer: null
    };
  },
  computed: {
    shouldShow: function shouldShow() {
      return this.fullrateData && this.fullrateData.show_subscription === 1;
    },
    showHalfPriceLabel: function showHalfPriceLabel() {
      return this.fullrateData.rate === 1;
    },
    buttonText: function buttonText() {
      return this.$i18n.locale === 'fa' ? 'خرید اشتراک' : 'Buy Subscription';
    },
    usageVolumeText: function usageVolumeText() {
      var _this$fullrateData$en;
      if (this.$i18n.locale === 'fa') {
        var _this$fullrateData$fa;
        return "\u062D\u062C\u0645 \u0645\u0635\u0631\u0641\u06CC: ".concat(((_this$fullrateData$fa = this.fullrateData.fa) === null || _this$fullrateData$fa === void 0 ? void 0 : _this$fullrateData$fa.title) || 'نیم بها');
      }
      return "Usage Volume: ".concat(((_this$fullrateData$en = this.fullrateData.en) === null || _this$fullrateData$en === void 0 ? void 0 : _this$fullrateData$en.title) || 'Half-priced');
    }
  },
  mounted: function mounted() {
    var _this = this;
    // Hide button after 10 seconds
    this.hideTimer = setTimeout(function () {
      _this.isVisible = false;
    }, 10000);
  },
  beforeDestroy: function beforeDestroy() {
    // Clear timer when component is destroyed
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }
  },
  methods: {
    handleSubscriptionClick: function handleSubscriptionClick() {
      this.$emit('subscription-click', {
        id: this.contentId,
        type: this.contentType
      });
    }
  }
});
// CONCATENATED MODULE: ./components/player/SubscriptionButton.vue?vue&type=script&lang=js
 /* harmony default export */ var player_SubscriptionButtonvue_type_script_lang_js = (SubscriptionButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/player/SubscriptionButton.vue?vue&type=style&index=0&id=5e5fcf10&prod&scoped=true&lang=css
var SubscriptionButtonvue_type_style_index_0_id_5e5fcf10_prod_scoped_true_lang_css = __webpack_require__(827);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/player/SubscriptionButton.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_SubscriptionButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5e5fcf10",
  null
  
)

/* harmony default export */ var SubscriptionButton = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);