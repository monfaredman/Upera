(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadFooter.vue?vue&type=template&id=59be25ad
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "download-links-footer",
    class: _vm.footerClass
  }, [_c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('download.amount_payable')) + ":\n          "), _vm.user.tax ? _c('span', [_c('span', {
    staticClass: "overlay_price font-weight-light"
  }, [_vm._m(0), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatPrice(_vm.totalAmount + _vm.totalAmount * 0.1)))])])]) : _c('span', [_c('span', {
    staticClass: "overlay_price font-weight-light"
  }, [_vm._m(1), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatPrice(_vm.totalAmount)))])])]), _vm._v(" "), _vm.isLoading ? _c('svg', {
    staticClass: "svg-loader",
    attrs: {
      "id": "L9",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "viewBox": "0 0 100 100",
      "enable-background": "new 0 0 0 0",
      "xml:space": "preserve"
    }
  }, [_c('path', {
    attrs: {
      "fill": "#373737",
      "d": "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
      "transform": "rotate(109.69 50 50)"
    }
  }, [_c('animateTransform', {
    attrs: {
      "attributeName": "transform",
      "attributeType": "XML",
      "type": "rotate",
      "dur": "1s",
      "from": "0 50 50",
      "to": "360 50 50",
      "repeatCount": "indefinite"
    }
  })], 1)]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_vm.isLoading ? _c('button', {
    staticClass: "btn btn-secondary btn-block",
    attrs: {
      "type": "button",
      "disabled": ""
    }
  }, [_c('span', {
    staticClass: "spinner-border spinner-border-sm",
    attrs: {
      "role": "status",
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]) : _vm.isDisabled || !_vm.totalAmount ? _c('button', {
    staticClass: "btn btn-secondary btn-block",
    attrs: {
      "disabled": ""
    }
  }, [!_vm.hasScreening ? _c('span', [_vm._v(_vm._s(_vm.$t('download.pay_download')))]) : _c('span', [_vm._v("پرداخت و تماشا")]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-money-bill pr-2"
  })]) : _c('button', {
    staticClass: "btn btn-secondary btn-block",
    on: {
      "click": function click($event) {
        return _vm.$emit('payment');
      }
    }
  }, [!_vm.hasScreening ? _c('span', [_vm._v(_vm._s(_vm.$t('download.pay_download')))]) : _c('span', [_vm._v("پرداخت و تماشا")]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-money-bill pr-2"
  })])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "overlay_price_label position-relative"
  }, [_c('i', {
    staticClass: "icon-toman"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "overlay_price_label position-relative"
  }, [_c('i', {
    staticClass: "icon-toman"
  })]);
}];

// CONCATENATED MODULE: ./components/download/DownloadFooter.vue?vue&type=template&id=59be25ad

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadFooter.vue?vue&type=script&lang=js

/* harmony default export */ var DownloadFootervue_type_script_lang_js = ({
  name: 'DownloadFooter',
  props: {
    totalAmount: {
      type: Number,
      default: 0
    },
    user: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    hasScreening: {
      type: [Boolean, Number],
      default: false
    },
    divCount: {
      type: Number,
      default: 1
    }
  },
  computed: {
    footerClass: function footerClass() {
      var count = this.divCount || 1;
      return {
        'footer-0': count === 0,
        'footer-1': count === 1
      };
    }
  },
  methods: {
    formatPrice: function formatPrice(amount) {
      if (!amount) return '';
      var amountStr = String(amount);
      var length = amountStr.length;
      if (length === 4) {
        return amountStr.substring(0, 1) + '.' + amountStr.substring(1);
      } else if (length === 5) {
        return amountStr.substring(0, 2) + '.' + amountStr.substring(2);
      } else if (length === 3) {
        return amountStr;
      } else {
        return amountStr.substring(0, 3) + '.' + amountStr.substring(3);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/download/DownloadFooter.vue?vue&type=script&lang=js
 /* harmony default export */ var download_DownloadFootervue_type_script_lang_js = (DownloadFootervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/DownloadFooter.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_DownloadFootervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DownloadFooter = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);