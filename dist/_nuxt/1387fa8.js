(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CallbackFooter_vue_vue_type_style_index_0_id_1d630e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(763);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CallbackFooter_vue_vue_type_style_index_0_id_1d630e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CallbackFooter_vue_vue_type_style_index_0_id_1d630e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/CallbackFooter.vue?vue&type=template&id=1d630e44&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "download-links-footer",
    class: _vm.footerClass
  }, [_vm.success ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm.mainButton ? _c('div', {
    class: _vm.buttonColClass
  }, [_c('button', {
    staticClass: "btn btn-main btn-block",
    on: {
      "click": _vm.handleMainAction
    }
  }, [_c('i', {
    staticClass: "fa pl-2",
    class: _vm.mainButton.iconClass
  }), _vm._v("\n          " + _vm._s(_vm.mainButton.text) + "\n        ")])]) : _vm._e(), _vm._v(" "), _vm.secondaryButton ? _c('div', {
    class: _vm.buttonColClass
  }, [_c('button', {
    staticClass: "btn btn-light btn-block",
    on: {
      "click": _vm.handleSecondaryAction
    }
  }, [_c('i', {
    staticClass: "fa pl-2",
    class: _vm.secondaryButton.iconClass
  }), _vm._v("\n          " + _vm._s(_vm.secondaryButton.text) + "\n        ")])]) : _vm._e(), _vm._v(" "), _vm.isReactNative && _vm.shouldShowReactNativeInSameRow ? _c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": "uperaapp://callback?".concat(_vm.queryString)
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])]) : _vm._e()]), _vm._v(" "), _vm.isReactNative && !_vm.shouldShowReactNativeInSameRow ? _c('div', {
    staticClass: "row mt-2"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": "uperaapp://callback?".concat(_vm.queryString)
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])])]) : _vm._e()]) : !_vm.success ? _c('div', {
    staticClass: "download-links-item"
  }, [_vm.checkagain ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    class: 'col-6'
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('retry-payment');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-money-bill pl-2"
  }), _vm._v("\n          پرداخت مجدد\n        ")])]), _vm._v(" "), _c('div', {
    class: 'col-6'
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('check-payment');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check-double pl-2"
  }), _vm._v("\n          بررسی پرداخت\n        ")])]), _vm._v(" "), _vm.isReactNative ? _c('div', {
    staticClass: "col-12 mt-2"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": "uperaapp://callback?".concat(_vm.queryString)
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])]) : _vm._e()]) : _vm.showLogin ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    class: _vm.isReactNative ? 'col-6' : 'col-12'
  }, [_c('button', {
    staticClass: "btn btn-main btn-block",
    on: {
      "click": function click($event) {
        return _vm.$emit('login');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-sign-in-alt pl-2"
  }), _vm._v("\n          ورود به سایت\n        ")])]), _vm._v(" "), _vm.isReactNative ? _c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": "uperaapp://callback?".concat(_vm.queryString)
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])]) : _vm._e()]) : _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('check-payment');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check-double pl-2"
  }), _vm._v("\n          بررسی پرداخت\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('retry-payment');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-money-bill pl-2"
  }), _vm._v("\n          پرداخت مجدد\n        ")])])]), _vm._v(" "), _vm.isReactNative && !_vm.checkagain && !_vm.showLogin ? _c('div', {
    staticClass: "row mt-2"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('button', {
    staticClass: "btn btn-light btn-block",
    on: {
      "click": _vm.handleReactNativeAction
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.backtoapp ? _c('div', {
    staticClass: "download-links-item"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _vm.title ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_vm.title.type === 'movie' ? _c('a', {
    staticClass: "btn btn-second btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('return-to-content', _vm.title);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-alt-circle-left"
  }), _vm._v("\n          بازگشت به صفحه فیلم\n        ")]) : _vm.title.type === 'series' ? _c('a', {
    staticClass: "btn btn-second btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('return-to-content', _vm.title);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-alt-circle-left"
  }), _vm._v("\n          بازگشت به صفحه سریال\n        ")]) : _c('a', {
    staticClass: "btn btn-second btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('return-to-content', _vm.title);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-alt-circle-left"
  }), _vm._v("\n          بازگشت به صفحه این قسمت سریال\n        ")])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": "uperaapp://upera?type=download&success=false"
    }
  }, [_c('i', {
    staticClass: "fa fa-back pl-2"
  }), _vm._v("\n          نمایش فیلم\n        ")])])]);
}];

// CONCATENATED MODULE: ./components/callback/CallbackFooter.vue?vue&type=template&id=1d630e44&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/CallbackFooter.vue?vue&type=script&lang=js









/* harmony default export */ var CallbackFootervue_type_script_lang_js = ({
  name: 'CallbackFooter',
  props: {
    files: {
      type: Array,
      default: null
    },
    success: {
      type: Boolean,
      default: false
    },
    checkagain: {
      type: Boolean,
      default: false
    },
    showLogin: {
      type: Boolean,
      default: false
    },
    backtoapp: {
      type: Boolean,
      default: false
    },
    title: {
      type: Object,
      default: null
    },
    divcount: {
      type: Number,
      default: 0
    },
    purchaseType: {
      type: String,
      default: 'download'
    },
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    queryString: function queryString() {
      var params = new URLSearchParams();
      Object.entries(this.$route.query).forEach(function (_ref) {
        var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (value) params.append(key, value);
      });
      return params.toString();
    },
    isReactNative: function isReactNative() {
      var _this$$route;
      return ((_this$$route = this.$route) === null || _this$$route === void 0 || (_this$$route = _this$$route.query) === null || _this$$route === void 0 ? void 0 : _this$$route.reactnative) === '1';
    },
    isSingleFile: function isSingleFile() {
      return this.files && this.files.length === 1;
    },
    isMultipleFiles: function isMultipleFiles() {
      return this.files && this.files.length > 1;
    },
    hasEkranScreening: function hasEkranScreening() {
      if (!this.files || this.files.length === 0) return false;
      return this.files.some(function (file) {
        var _file$screening;
        return ((_file$screening = file.screening) === null || _file$screening === void 0 ? void 0 : _file$screening.ekran) && file.screening.ekran_id;
      });
    },
    hasPresale: function hasPresale() {
      if (!this.files || this.files.length === 0) return false;
      return this.files.some(function (file) {
        return file.presale;
      });
    },
    footerClass: function footerClass() {
      return {
        'footer-0': this.divcount === 0,
        'footer-1': this.divcount === 1
      };
    },
    shouldShowReactNativeInSameRow: function shouldShowReactNativeInSameRow() {
      // Show React Native button in the same row for subscription, wallet, and directdebit
      return this.purchaseType === 'subscription' || this.purchaseType === 'wallet' || this.purchaseType === 'directdebit';
    },
    mainButton: function mainButton() {
      if (!this.success) return null;
      if (this.purchaseType === 'download') {
        if (this.isSingleFile) {
          if (this.hasPresale || this.hasEkranScreening) {
            if (this.isLoggedIn) {
              return {
                text: 'مشاهده محتوا',
                iconClass: 'fa-play',
                action: 'watch'
              };
            } else {
              return {
                text: 'ورود به سایت برای مشاهده محتوا',
                iconClass: 'fa-sign-in-alt',
                action: 'login'
              };
            }
          }
          if (this.isLoggedIn) {
            return {
              text: 'تماشا',
              iconClass: 'fa-play',
              action: 'watch'
            };
          }
          return {
            text: 'تماشا',
            iconClass: 'fa-play',
            action: 'showContent'
          };
        }
        if (this.isMultipleFiles) {
          return {
            text: 'مشاهده محتواها',
            iconClass: 'fa-play',
            action: 'goProfile'
          };
        }
      }
      if (this.purchaseType === 'subscription') {
        return {
          text: 'آپرا پلاس',
          iconClass: 'fa-star',
          action: 'operaPlus'
        };
      }
      if (this.purchaseType === 'wallet') {
        return {
          text: 'بازگشت به آپرا',
          iconClass: 'fa-home',
          action: 'backToOpera'
        };
      }
      if (this.purchaseType === 'directdebit') {
        return {
          text: 'تنظیمات پرداخت خودکار',
          iconClass: 'fa-cog',
          action: 'directDebitSettings'
        };
      }
      return null;
    },
    secondaryButton: function secondaryButton() {
      if (!this.success) return null;
      if (this.purchaseType === 'download') {
        return {
          text: 'بازگشت به صفحه اصلی',
          iconClass: 'fa-home',
          action: 'backToOpera'
        };
      }
      if (this.purchaseType === 'subscription') {
        // No secondary button for subscription (back to app handled separately)
        return null;
      }
      if (this.purchaseType === 'wallet') {
        if (this.isReactNative) {
          return null; // Back to app handled separately
        }
        return null;
      }
      if (this.purchaseType === 'directdebit') {
        if (this.isReactNative) {
          return null; // Back to app handled separately
        }
        return {
          text: 'بازگشت به آپرا',
          iconClass: 'fa-home',
          action: 'backToOpera'
        };
      }
      return null;
    },
    buttonColClass: function buttonColClass() {
      // If React Native and should be in same row, main button gets col-6
      if (this.isReactNative && this.shouldShowReactNativeInSameRow) {
        return 'col-6';
      }
      // If there are two buttons (main and secondary), they share the row
      var hasTwoButtons = this.mainButton && this.secondaryButton;
      return hasTwoButtons ? 'col-6' : 'col-12';
    }
  },
  methods: {
    handleMainAction: function handleMainAction() {
      var _this$mainButton, _this$files$, _this$files$2;
      var action = (_this$mainButton = this.mainButton) === null || _this$mainButton === void 0 ? void 0 : _this$mainButton.action;
      switch (action) {
        case 'watch':
          if (this.files && this.files.length > 0) {
            this.$emit('watch', this.files[0].id);
          }
          break;
        case 'goHome':
          this.$router.push('/');
          break;
        case 'backToApp':
          window.location.href = 'upera://callback/success';
          break;
        case 'operaPlus':
          this.$router.push('/plan');
          break;
        case 'backToOpera':
          this.$router.push('/');
          break;
        case 'directDebitSettings':
          this.$emit('show-direct-debit');
          break;
        case 'showContent':
          this.$emit('return-to-content', {
            id: (_this$files$ = this.files[0]) === null || _this$files$ === void 0 ? void 0 : _this$files$.m_id,
            type: (_this$files$2 = this.files[0]) === null || _this$files$2 === void 0 ? void 0 : _this$files$2.type
          });
          break;
        case 'goProfile':
          this.$router.push('/profile/list/downloads');
          break;
      }
    },
    handleSecondaryAction: function handleSecondaryAction() {
      var _this$secondaryButton;
      var action = (_this$secondaryButton = this.secondaryButton) === null || _this$secondaryButton === void 0 ? void 0 : _this$secondaryButton.action;
      switch (action) {
        case 'checkPayment':
          this.$emit('check-payment');
          break;
        case 'operaPlus':
          this.$router.push('/plan');
          break;
        case 'backToApp':
          window.location.href = 'upera://callback/success';
          break;
        case 'backToOpera':
          this.$router.push('/');
          break;
      }
    },
    handleReactNativeAction: function handleReactNativeAction() {
      window.location.href = 'upera://callback/success';
    }
  }
});
// CONCATENATED MODULE: ./components/callback/CallbackFooter.vue?vue&type=script&lang=js
 /* harmony default export */ var callback_CallbackFootervue_type_script_lang_js = (CallbackFootervue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/callback/CallbackFooter.vue?vue&type=style&index=0&id=1d630e44&prod&scoped=true&lang=css
var CallbackFootervue_type_style_index_0_id_1d630e44_prod_scoped_true_lang_css = __webpack_require__(810);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/callback/CallbackFooter.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  callback_CallbackFootervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1d630e44",
  null
  
)

/* harmony default export */ var CallbackFooter = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);