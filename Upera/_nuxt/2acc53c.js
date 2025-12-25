(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52,54],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentMethods_vue_vue_type_style_index_0_id_1034f436_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(894);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentMethods_vue_vue_type_style_index_0_id_1034f436_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentMethods_vue_vue_type_style_index_0_id_1034f436_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/PaymentMethods.vue?vue&type=template&id=1034f436&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12"
  }, [_vm._m(0), _vm._v(" "), _vm.errors ? _c('div', {
    staticClass: "text-danger"
  }, [_vm._v("\n    " + _vm._s(_vm.errors) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row position-relative payment_methods"
  }, [_c('div', {
    staticClass: "container"
  }, _vm._l(_vm.paymentOptions, function (option) {
    return _c('PaymentOption', {
      key: option.value,
      attrs: {
        "option": option,
        "selected-method": _vm.selectedMethod
      },
      on: {
        "change": _vm.onPaymentMethodChange
      }
    });
  }), 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "headline"
  }, [_c('h5', {
    staticClass: "title font-weight-bold pt-1"
  }, [_vm._v("انتخاب روش پرداخت")])]);
}];

// CONCATENATED MODULE: ./components/download/PaymentMethods.vue?vue&type=template&id=1034f436&scoped=true

// EXTERNAL MODULE: ./components/download/PaymentOption.vue + 4 modules
var PaymentOption = __webpack_require__(932);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/PaymentMethods.vue?vue&type=script&lang=js

/* harmony default export */ var PaymentMethodsvue_type_script_lang_js = ({
  name: 'PaymentMethods',
  components: {
    PaymentOption: PaymentOption["default"]
  },
  props: {
    selectedMethod: {
      type: String,
      default: 'saman3'
    },
    errors: {
      type: [String, Object],
      default: null
    }
  },
  data: function data() {
    return {
      paymentOptions: [{
        value: 'saman3',
        label: 'درگاه بانکی',
        tooltip: 'پرداخت با کلیه کارت های بانکی',
        cardClass: 'card--white'
      }, {
        value: 'directdebit',
        label: 'پرداخت خودکار',
        tooltip: 'خرید خودکار در آپرا بدون وارد کردن اطلاعات بانکی',
        cardClass: 'card--blue'
      }, {
        value: 'credit',
        label: 'موجودی آپرا',
        tooltip: 'خرید با اعتبار آپرا',
        cardClass: 'card--white',
        logo: true
      }, {
        value: 'tally',
        label: 'اعتبار تالی',
        tooltip: 'پرداخت با اعتبار تالی',
        cardClass: 'card--white',
        customLogo: 'tally'
      }]
    };
  },
  methods: {
    onPaymentMethodChange: function onPaymentMethodChange(method) {
      this.$emit('update:selectedMethod', method);
    }
  }
});
// CONCATENATED MODULE: ./components/download/PaymentMethods.vue?vue&type=script&lang=js
 /* harmony default export */ var download_PaymentMethodsvue_type_script_lang_js = (PaymentMethodsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/download/PaymentMethods.vue?vue&type=style&index=0&id=1034f436&prod&scoped=true&lang=css
var PaymentMethodsvue_type_style_index_0_id_1034f436_prod_scoped_true_lang_css = __webpack_require__(1031);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/PaymentMethods.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_PaymentMethodsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1034f436",
  null
  
)

/* harmony default export */ var PaymentMethods = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(124).default})


/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tally.f729b8b.png";

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/PaymentOption.vue?vue&type=template&id=1c418f81
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "option",
    attrs: {
      "id": "payment-".concat(_vm.option.id)
    }
  }, [_c('input', {
    attrs: {
      "id": "payment".concat(_vm.option.id),
      "type": "radio",
      "name": "card"
    },
    domProps: {
      "checked": _vm.selectedMethod === _vm.option.value,
      "value": _vm.option.value
    },
    on: {
      "change": function change($event) {
        return _vm.$emit('change', _vm.option.value);
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "payment".concat(_vm.option.id),
      "aria-label": _vm.option.label
    }
  }, [_c('span'), _vm._v("\n    " + _vm._s(_vm.option.label) + "\n\n    "), _vm._v(" "), _vm.option.value === 'saman3' ? _c('div', {
    staticClass: "card card--white card--sm"
  }, [_c('div', {
    staticClass: "card__chip"
  }), _vm._v(" "), _vm._m(0)]) : _vm.option.value === 'directdebit' ? _c('div', {
    staticClass: "card card--blue card--sm"
  }, [_c('div', {
    staticClass: "card__chip"
  }), _vm._v(" "), _vm._m(1)]) : _vm.option.value === 'credit' ? _c('div', {
    staticClass: "card card--white card--sm"
  }, [_c('div', {
    staticClass: "card__chip"
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(467)
    }
  })]) : _vm.option.value === 'tally' ? _c('div', {
    staticClass: "card card--white card--sm"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(746)
    }
  })]) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card__content"
  }, [_c('div', {
    staticClass: "card__text"
  }, [_c('div', {
    staticClass: "text__row"
  }, [_c('div', {
    staticClass: "text__loader"
  }), _vm._v(" "), _c('div', {
    staticClass: "text__loader"
  })]), _vm._v(" "), _c('div', {
    staticClass: "text__row"
  }, [_c('div', {
    staticClass: "text__loader"
  }), _vm._v(" "), _c('div', {
    staticClass: "text__loader"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card__symbol"
  }, [_c('span'), _vm._v(" "), _c('span')])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card__content"
  }, [_c('div', {
    staticClass: "card__text"
  }, [_c('div', {
    staticClass: "text__row"
  }, [_c('div', {
    staticClass: "text__loader"
  }), _vm._v(" "), _c('div', {
    staticClass: "text__loader"
  })]), _vm._v(" "), _c('div', {
    staticClass: "text__row"
  }, [_c('div', {
    staticClass: "text__loader"
  }), _vm._v(" "), _c('div', {
    staticClass: "text__loader"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "card__symbol"
  }, [_c('span'), _vm._v(" "), _c('span')])]);
}];

// CONCATENATED MODULE: ./components/download/PaymentOption.vue?vue&type=template&id=1c418f81

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/PaymentOption.vue?vue&type=script&lang=js
/* harmony default export */ var PaymentOptionvue_type_script_lang_js = ({
  name: 'PaymentOption',
  props: {
    option: {
      type: Object,
      required: true,
      validator: function validator(value) {
        return value.id && value.value && value.label;
      }
    },
    selectedMethod: {
      type: String,
      default: 'saman3'
    }
  },
  emits: ['change']
});
// CONCATENATED MODULE: ./components/download/PaymentOption.vue?vue&type=script&lang=js
 /* harmony default export */ var download_PaymentOptionvue_type_script_lang_js = (PaymentOptionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/PaymentOption.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_PaymentOptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PaymentOption = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);