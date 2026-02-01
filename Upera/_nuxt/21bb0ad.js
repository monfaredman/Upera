(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentSuccessContent_vue_vue_type_style_index_0_id_50d4e228_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentSuccessContent_vue_vue_type_style_index_0_id_50d4e228_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentSuccessContent_vue_vue_type_style_index_0_id_50d4e228_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/PaymentSuccessContent.vue?vue&type=template&id=50d4e228&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "payment-success-container"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm.refNum ? _c('div', {
    staticClass: "tracking-number"
  }, [_c('span', [_vm._v("شماره پیگیری")]), _vm._v(" : " + _vm._s(_vm.refNum) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "special-state-text",
    domProps: {
      "innerHTML": _vm._s(_vm.stateSpecialText)
    }
  }), _vm._v(" "), _vm.stateSpecialText ? _c('div', {
    staticClass: "divider"
  }) : _vm._e(), _vm._v(" "), _vm.showAccordion ? _c('div', {
    staticClass: "accordion-wrapper"
  }, [_c('div', {
    staticClass: "accordion",
    attrs: {
      "id": "downloadAccordion"
    }
  }, _vm._l(_vm.files, function (item, index) {
    return _c('div', {
      key: 'accordion-' + index,
      staticClass: "accordion-item"
    }, [_c('h2', {
      staticClass: "accordion-header",
      attrs: {
        "id": 'heading' + index
      }
    }, [_c('button', {
      class: ['accordion-button', {
        collapsed: _vm.activeAccordion !== index
      }],
      attrs: {
        "type": "button",
        "aria-expanded": _vm.activeAccordion === index,
        "aria-controls": 'collapse' + index
      },
      on: {
        "click": function click($event) {
          return _vm.toggleAccordion(index);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.title || 'فایل دانلود ' + (index + 1)) + "\n            "), _c('i', {
      class: ['fa', 'accordion-icon', _vm.activeAccordion === index ? 'fa-chevron-up' : 'fa-chevron-down']
    })])]), _vm._v(" "), _c('div', {
      class: ['accordion-collapse', 'collapse', {
        show: _vm.activeAccordion === index
      }],
      attrs: {
        "id": 'collapse' + index,
        "aria-labelledby": 'heading' + index
      }
    }, [_c('div', {
      staticClass: "accordion-body"
    }, _vm._l(item.qualities || [item], function (quality, qIndex) {
      return _c('div', {
        key: 'quality-' + qIndex,
        staticClass: "quality-item"
      }, [_c('div', {
        staticClass: "quality-info"
      }, [_c('a', {
        attrs: {
          "href": quality.download_url,
          "title": "دانلود"
        }
      }, [_c('i', {
        staticClass: "icon-download"
      }), _vm._v(" "), _c('span', {
        staticClass: "quality-label"
      }, [_vm._v("\n                    نسخه " + _vm._s(quality.quality || '1080p'))])]), _vm._v(" "), quality && quality.size ? _c('span', {
        staticClass: "quality-size"
      }, [_vm._v("حجم " + _vm._s(quality.size || ''))]) : _vm._e()]), _vm._v(" "), _c('div', {
        staticClass: "quality-actions"
      }, [_c('button', {
        staticClass: "btn copy-btn icon-btn",
        attrs: {
          "title": "کپی لینک"
        },
        on: {
          "click": function click($event) {
            return _vm.$emit('copy', quality.download_url);
          }
        }
      }, [_c('i', {
        staticClass: "fa fa-copy"
      })])])]);
    }), 0)])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.showAccordion ? _c('div', {
    staticClass: "divider"
  }) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "success-icon-wrapper"
  }, [_c('div', {
    staticClass: "success-icon"
  }, [_c('i', {
    staticClass: "fa fa-check",
    staticStyle: {
      "font-size": "50px",
      "color": "green"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("پرداخت موفق")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "success-alert"
  }, [_c('i', {
    staticClass: "fa fa-check-circle",
    staticStyle: {
      "color": "green"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "success-alert-text"
  }, [_vm._v("پرداخت شما با موفقیت انجام شد.")])]);
}];

// CONCATENATED MODULE: ./components/callback/PaymentSuccessContent.vue?vue&type=template&id=50d4e228&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/PaymentSuccessContent.vue?vue&type=script&lang=js




/* harmony default export */ var PaymentSuccessContentvue_type_script_lang_js = ({
  name: 'PaymentSuccessContent',
  props: {
    files: {
      type: Array,
      default: null
    },
    purchaseType: {
      type: String,
      default: 'download',
      validator: function validator(value) {
        return ['download', 'subscription', 'wallet', 'directdebit'].includes(value);
      }
    },
    isLoggedIn: {
      type: Boolean,
      default: false
    },
    refNum: {
      type: [String, Number],
      default: null
    },
    walletAmount: {
      type: [String, Number],
      default: null
    },
    walletBalance: {
      type: [String, Number],
      default: null
    },
    subscriptionDays: {
      type: [String, Number],
      default: null
    }
  },
  data: function data() {
    return {
      activeAccordion: null
    };
  },
  computed: {
    isSingleFile: function isSingleFile() {
      return this.files && this.files.length === 1;
    },
    isMultipleFiles: function isMultipleFiles() {
      return this.files && this.files.length > 1;
    },
    hasEkranScreening: function hasEkranScreening() {
      if (!this.files || this.files.length === 0) return false;
      return this.files.some(function (file) {
        var _file$screening, _file$screening2;
        return ((_file$screening = file.screening) === null || _file$screening === void 0 ? void 0 : _file$screening.ekran) === 1 || ((_file$screening2 = file.screening) === null || _file$screening2 === void 0 ? void 0 : _file$screening2.ekran) === true;
      });
    },
    hasPresale: function hasPresale() {
      if (!this.files || this.files.length === 0) return false;
      return this.files.some(function (file) {
        return file.presale === 1 || file.presale === true;
      });
    },
    showAccordion: function showAccordion() {
      return this.purchaseType === 'download' && this.files && this.files.length > 0;
    },
    stateSpecialText: function stateSpecialText() {
      if (this.purchaseType === 'download') {
        if (this.isSingleFile) {
          var _file$screening3, _file$screening4, _file$screening5, _file$screening6;
          var text = 'قسمت انتخابی شما به لیست تماشای شما اضافه شد.';
          var file = this.files[0];
          if ((file.presale === 1 || file.presale === true) && (((_file$screening3 = file.screening) === null || _file$screening3 === void 0 ? void 0 : _file$screening3.ekran) === 1 || ((_file$screening4 = file.screening) === null || _file$screening4 === void 0 ? void 0 : _file$screening4.ekran) === true)) {
            return "".concat(text, "<br><br>\u0627\u06A9\u0631\u0627\u0646 \u0633\u0631\u0627\u0633\u0631\u06CC \u0641\u06CC\u0644\u0645 \u0627\u0632 \u0631\u0648\u0632 ").concat(file.presale_date, " \u0622\u063A\u0627\u0632 \u062E\u0648\u0627\u0647\u062F \u0634\u062F\u060C \u0644\u0637\u0641\u0627 \u0642\u0628\u0644 \u0627\u0632 \u0627\u06CC\u0646 \u062A\u0627\u0631\u06CC\u062E \u0628\u0647 \u0647\u06CC\u0686 \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u0627\u06CC \u062C\u0644\u0648\u06AF\u06CC\u0631\u06CC \u0627\u0632 \u0627\u0634\u06A9\u0627\u0644 \u0641\u0646\u06CC \u0627\u062D\u062A\u0645\u0627\u0644\u06CC \u0646\u0633\u0628\u062A \u0628\u0647 \u062A\u0633\u062A \u0627\u062A\u0635\u0627\u0644 \u0648 \u06A9\u06CC\u0641\u06CC\u062A \u067E\u062E\u0634 \u0627\u0642\u062F\u0627\u0645 \u0646\u0646\u0645\u0627\u06CC\u06CC\u062F \u0648 \u0641\u0642\u0637 \u0628\u0627 \u0627\u06A9\u0631\u0627\u0646 \u0633\u0631\u0627\u0633\u0631\u06CC \u0641\u06CC\u0644\u0645 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u0645\u0627\u06CC\u06CC\u062F.<br><br>\u0628\u0631\u0627\u06CC \u062A\u0645\u0627\u0634\u0627 \u0627\u0632 \u062E\u0627\u0646\u0647\u060C \u0633\u0627\u0646\u0633 \u0633\u06CC\u0646\u0645\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646 ").concat(file.screening.ekran_hour, " \u0633\u0627\u0639\u062A\u0647 \u0627\u0633\u062A\u060C \u0637\u0648\u0631\u06CC \u062A\u0646\u0638\u06CC\u0645 \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u062A\u0645\u0627\u0634\u0627\u06CC \u06A9\u0627\u0645\u0644 \u0641\u06CC\u0644\u0645 \u0631\u0627 \u062F\u0631 \u0633\u0627\u0646\u0633 \u062E\u0648\u062F \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F.");
          }
          if (((_file$screening5 = file.screening) === null || _file$screening5 === void 0 ? void 0 : _file$screening5.ekran) === 1 || ((_file$screening6 = file.screening) === null || _file$screening6 === void 0 ? void 0 : _file$screening6.ekran) === true) {
            return "".concat(text, "<br><br>\u0628\u0631\u0627\u06CC \u062A\u0645\u0627\u0634\u0627 \u0627\u0632 \u062E\u0627\u0646\u0647\u060C \u0633\u0627\u0646\u0633 \u0633\u06CC\u0646\u0645\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646 ").concat(file.screening.ekran_hour, " \u0633\u0627\u0639\u062A\u0647 \u0627\u0633\u062A\u060C \u062F\u0642\u06CC\u0642\u0627 \u0627\u0632 \u0632\u0645\u0627\u0646\u06CC \u06A9\u0647 \u0641\u06CC\u0644\u0645 \u0631\u0627 \u0634\u0631\u0648\u0639 \u0628\u0647 \u062A\u0645\u0627\u0634\u0627 \u06A9\u0646\u06CC\u062F\u060C \u0633\u0627\u0646\u0633 \u0634\u0645\u0627 \u0622\u063A\u0627\u0632 \u0648 \u062A\u0627 ").concat(file.screening.ekran_hour, " \u0633\u0627\u0639\u062A \u0628\u0639\u062F \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0645\u06CC\u200C\u0631\u0633\u062F\u060C \u0637\u0648\u0631\u06CC \u062A\u0646\u0638\u06CC\u0645 \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u062A\u0645\u0627\u0634\u0627\u06CC \u06A9\u0627\u0645\u0644 \u0641\u06CC\u0644\u0645 \u0631\u0627 \u062F\u0631 \u0633\u0627\u0646\u0633 \u062E\u0648\u062F \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F.");
          }
          return "".concat(text, "<br><br>\u062A\u0648\u062C\u0647 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F \u06A9\u0647 \u0628\u0631\u0627\u06CC \u062C\u0644\u0648\u06AF\u06CC\u0631\u06CC \u0627\u0632 \u062F\u0627\u0646\u0644\u0648\u062F \u0646\u0627\u0642\u0635 \u06CC\u0627 \u0622\u0633\u06CC\u0628 \u062F\u06CC\u062F\u0646 \u0628\u0647 \u0641\u0627\u06CC\u0644 \u0647\u0627\u06CC \u062E\u0631\u06CC\u062F\u0627\u0631\u06CC \u0634\u062F\u0647\u060C \u062D\u062A\u0645\u0627 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627\u06CC \u062F\u0627\u0646\u0644\u0648\u062F \u0645\u0646\u06CC\u062C\u0631 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u0648\u062F. \u0628\u062F\u06CC\u0646 \u0635\u0648\u0631\u062A \u062D\u062A\u06CC \u0627\u06AF\u0631 \u062F\u0627\u0646\u0644\u0648\u062F \u0634\u0645\u0627 \u062F\u0631 \u0647\u0631 \u0632\u0645\u0627\u0646\u06CC \u0648 \u0628\u0647 \u0647\u0631 \u062F\u0644\u06CC\u0644\u06CC \u0646\u06CC\u0645\u0647 \u06A9\u0627\u0631\u0647 \u0645\u062A\u0648\u0642\u0641 \u0634\u062F\u060C \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0632\u0645\u0627\u0646 \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0628\u0647 \u0627\u062F\u0627\u0645\u0647 \u062F\u0627\u0646\u0644\u0648\u062F \u0628\u067E\u0631\u062F\u0627\u0632\u06CC\u062F.");
        }
        if (this.isMultipleFiles) {
          return 'قسمت های انتخابی شما به لیست تماشای شما اضافه شد.';
        }
      }
      if (this.purchaseType === 'subscription') {
        var _this$checkuser;
        var days = this.subscriptionDays || ((_this$checkuser = this.checkuser) === null || _this$checkuser === void 0 ? void 0 : _this$checkuser.days_period_to_end) || 30;
        return "\u0627\u0634\u062A\u0631\u0627\u06A9 \u0634\u0645\u0627 \u0628\u0647 \u0645\u062F\u062A ".concat(days, " \u0631\u0648\u0632 \u0641\u0639\u0627\u0644 \u0634\u062F.").concat(this.isLoggedIn && this.checkuser ? '<br>' + days + ' روز از اشتراک شما باقیمانده است.' : '');
      }

      // if (this.purchaseType === 'wallet') {
      //   // const amount = this.walletAmount || '0'
      //   const balance = this.walletBalance || '0'
      //   return `مبلغ  به کیف پول شما اضافه شد.<br>موجودی فعلی: ${balance}`
      // }
      if (this.purchaseType === 'wallet') {
        var amount = "".concat(this.walletAmount || '0', " \u062A\u0648\u0645\u0627\u0646") || false;
        var balance = "".concat(this.walletBalance || '0', " \u062A\u0648\u0645\u0627\u0646") || false;
        return "\u0645\u0628\u0644\u063A ".concat(amount, "  \u0628\u0647 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0634\u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u062F.<br>\u0645\u0648\u062C\u0648\u062F\u06CC \u0641\u0639\u0644\u06CC: ").concat(balance);
      }
      if (this.purchaseType === 'directdebit') {
        return 'از شما جهت فعال کردن پرداخت خودکار متشکریم.';
      }
      return '';
    }
  },
  methods: {
    toggleAccordion: function toggleAccordion(index) {
      // Toggle accordion: if clicking the active one, close it; otherwise, open the clicked one
      this.activeAccordion = this.activeAccordion === index ? null : index;
    }
  }
});
// CONCATENATED MODULE: ./components/callback/PaymentSuccessContent.vue?vue&type=script&lang=js
 /* harmony default export */ var callback_PaymentSuccessContentvue_type_script_lang_js = (PaymentSuccessContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/callback/PaymentSuccessContent.vue?vue&type=style&index=0&id=50d4e228&prod&scoped=true&lang=css
var PaymentSuccessContentvue_type_style_index_0_id_50d4e228_prod_scoped_true_lang_css = __webpack_require__(825);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/callback/PaymentSuccessContent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  callback_PaymentSuccessContentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "50d4e228",
  null
  
)

/* harmony default export */ var PaymentSuccessContent = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);