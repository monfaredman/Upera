(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tally.f729b8b.png";

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