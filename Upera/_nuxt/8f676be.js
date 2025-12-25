(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tally.f729b8b.png";

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/PaymentMethodsSection.vue?vue&type=template&id=1a79d561
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._m(0), _vm._v(" "), _vm.paymentErrors ? _c('div', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.paymentErrors))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row position-relative payment_methods"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "option",
    attrs: {
      "id": "payment-1"
    }
  }, [_c('input', {
    attrs: {
      "id": "payment1",
      "type": "radio",
      "name": "card",
      "value": "saman3"
    },
    domProps: {
      "checked": _vm.selectedMethod === 'saman3'
    },
    on: {
      "change": function change($event) {
        return _vm.$emit('update:selectedMethod', 'saman3');
      }
    }
  }), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('div', {
    staticClass: "option",
    attrs: {
      "id": "payment-2"
    }
  }, [_c('input', {
    attrs: {
      "id": "payment2",
      "type": "radio",
      "name": "card",
      "value": "directdebit"
    },
    domProps: {
      "checked": _vm.selectedMethod === 'directdebit'
    },
    on: {
      "change": function change($event) {
        return _vm.$emit('update:selectedMethod', 'directdebit');
      }
    }
  }), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c('div', {
    staticClass: "option",
    attrs: {
      "id": "payment-5"
    }
  }, [_c('input', {
    attrs: {
      "id": "payment5",
      "type": "radio",
      "name": "card",
      "value": "credit"
    },
    domProps: {
      "checked": _vm.selectedMethod === 'credit'
    },
    on: {
      "change": function change($event) {
        return _vm.$emit('update:selectedMethod', 'credit');
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "payment5",
      "aria-label": "اعتبار آپرا"
    }
  }, [_c('span'), _vm._v("\n          موجودی آپرا\n          "), _c('div', {
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
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "option",
    attrs: {
      "id": "payment-4"
    }
  }, [_c('input', {
    attrs: {
      "id": "payment4",
      "type": "radio",
      "name": "card",
      "value": "tally"
    },
    domProps: {
      "checked": _vm.selectedMethod === 'tally'
    },
    on: {
      "change": function change($event) {
        return _vm.$emit('update:selectedMethod', 'tally');
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "payment4",
      "aria-label": "اعتبار تالی"
    }
  }, [_c('span'), _vm._v("\n          اعتبار تالی\n          "), _c('div', {
    staticClass: "card card--white card--sm"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(746)
    }
  })])])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('header', {
    staticClass: "headline"
  }, [_c('h5', {
    staticClass: "title font-weight-bold pt-1"
  }, [_vm._v("انتخاب روش پرداخت")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    attrs: {
      "for": "payment1",
      "aria-label": "درگاه بانکی"
    }
  }, [_c('span'), _vm._v("\n          درگاه بانکی\n          "), _c('div', {
    staticClass: "card card--white card--sm"
  }, [_c('div', {
    staticClass: "card__chip"
  }), _vm._v(" "), _c('div', {
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
  }, [_c('span'), _vm._v(" "), _c('span')])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('label', {
    attrs: {
      "for": "payment2",
      "aria-label": "پرداخت خودکار"
    }
  }, [_c('span'), _vm._v("\n          پرداخت خودکار\n          "), _c('div', {
    staticClass: "card card--blue card--sm"
  }, [_c('div', {
    staticClass: "card__chip"
  }), _vm._v(" "), _c('div', {
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
  }, [_c('span'), _vm._v(" "), _c('span')])])])]);
}];

// CONCATENATED MODULE: ./components/download/PaymentMethodsSection.vue?vue&type=template&id=1a79d561

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/PaymentMethodsSection.vue?vue&type=script&lang=js
/* harmony default export */ var PaymentMethodsSectionvue_type_script_lang_js = ({
  name: 'PaymentMethodsSection',
  props: {
    selectedMethod: {
      type: String,
      default: 'saman3'
    },
    // Fixed: Renamed prop to avoid conflict
    paymentErrors: {
      type: [String, Object],
      default: null
    }
  },
  // REMOVED: All computed properties
  emits: ['update:selectedMethod']
});
// CONCATENATED MODULE: ./components/download/PaymentMethodsSection.vue?vue&type=script&lang=js
 /* harmony default export */ var download_PaymentMethodsSectionvue_type_script_lang_js = (PaymentMethodsSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/PaymentMethodsSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_PaymentMethodsSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PaymentMethodsSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(124).default})


/***/ })

}]);