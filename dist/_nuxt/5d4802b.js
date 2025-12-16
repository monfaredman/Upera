(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadListSection.vue?vue&type=template&id=f804cf1a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', _vm._l(_vm.downloadsList, function (item) {
    return _c('div', {
      key: item.id,
      staticClass: "download-links-item"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-6"
    }, [_c('div', {
      staticClass: "row"
    }, [_vm.screening.ekran ? _c('div', {
      staticClass: "col-9"
    }, [_c('div', {
      staticClass: "download-quality font-weight-bold"
    }, [_vm._v("بلیط اکران")]), _vm._v(" "), _c('div', {
      staticClass: "download-suitable"
    }, [_vm._v("تماشای آنلاین")])]) : item.isfolder && _vm.contentInfo.type != 'series' ? _c('div', {
      staticClass: "col-9"
    }, [_c('div', {
      staticClass: "download-quality font-weight-bold"
    }, [_vm._v("\n              " + _vm._s(_vm.$t('download.all_qualities')) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "download-suitable"
    }, [_vm._v("\n              " + _vm._s(item.info) + "\n            ")])]) : _c('div', {
      staticClass: "col-9"
    }, [_c('div', {
      staticClass: "download-quality font-weight-bold"
    }, [_vm._v("\n              " + _vm._s(item.quality) + "\n            ")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showInfo,
        expression: "showInfo"
      }],
      staticClass: "download-suitable"
    }, [_vm._v("\n              " + _vm._s(item.info) + "\n            ")])]), _vm._v(" "), _c('div', {
      staticClass: "col-3 d-flex justify-end align-items-end text-right"
    }, [item.isfolder == 0 ? _c('div', {
      staticClass: "download-size"
    }, [_vm._v("\n              " + _vm._s(item.size) + "\n            ")]) : _vm._e()])])]), _vm._v(" "), _c('div', {
      staticClass: "col-sm-6"
    }, [_c('div', {
      staticClass: "d-flex h-100 align-items-end"
    }, [item.owned == 1 && item.isfolder == 1 && !_vm.screening.ekran ? _c('div', {
      staticClass: "download-full-link"
    }, [_vm._m(0, true)]) : item.owned == 1 && item.isfolder == 1 ? _c('div', {
      staticClass: "download-full-link"
    }, [_c('button', {
      staticClass: "btn btn-secondary btn-block",
      on: {
        "click": function click($event) {
          return _vm.$emit('play', item);
        }
      }
    }, [_vm._v("\n              تماشا\n              "), _c('i', {
      staticClass: "icon-play"
    })])]) : item.owned == 1 ? _c('div', {
      staticClass: "d-flex h-100 align-items-end"
    }, [_c('div', {
      staticClass: "download-link"
    }, [_c('button', {
      staticClass: "btn btn-secondary btn-block",
      on: {
        "click": function click($event) {
          return _vm.$emit('download', item);
        }
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t('show.download')) + "\n                "), _c('i', {
      staticClass: "icon-download"
    })])]), _vm._v(" "), _c('div', {
      staticClass: "copy-link"
    }, [_c('button', {
      staticClass: "btn btn-copy btn-block",
      on: {
        "click": function click($event) {
          return _vm.$emit('copy-download', item);
        }
      }
    }, [_vm._v("\n                کپی لینک\n              ")])])]) : _vm.isInCart(item) ? _c('div', {
      staticClass: "download-full-link"
    }, [_c('button', {
      staticClass: "btn btn-secondary btn-block",
      on: {
        "click": function click($event) {
          return _vm.$emit('remove-from-cart', item);
        }
      }
    }, [_vm._v("\n              " + _vm._s(_vm.$t('download.cancel')) + "\n              "), _c('i', {
      staticClass: "icon-download"
    })])]) : _c('div', {
      staticClass: "d-flex h-100 align-items-end"
    }, [_c('div', {
      staticClass: "download-link"
    }, [_c('button', {
      staticClass: "btn btn-danger btn-block",
      on: {
        "click": function click($event) {
          return _vm.$emit('add-to-cart', item);
        }
      }
    }, [_vm.presale ? _c('span', [_vm._v(_vm._s(_vm.$t('download.presale')))]) : _c('span', [_vm._v(_vm._s(_vm.$t('download.buy')))]), _vm._v(" "), _vm.screening.ekran ? _c('span', [_vm._v(" بلیط")]) : _c('span', [_vm._v(" و دانلود")]), _vm._v(" "), _vm.screening.ekran ? _c('i', {
      staticClass: "fa fa-ticket-alt pr-2"
    }) : _c('i', {
      staticClass: "icon-download"
    })])]), _vm._v(" "), _c('div', {
      staticClass: "copy-link",
      class: _vm.priceAlignment
    }, [_c('span', {
      staticClass: "overlay_price font-weight-light"
    }, [_vm._m(1, true), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formatPrice(item.amount)))])])])])])])])]);
  }), 0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "btn btn-info btn-block"
  }, [_vm._v("\n              خریداری شده\n              "), _c('i', {
    staticClass: "icon-download"
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

// CONCATENATED MODULE: ./components/download/DownloadListSection.vue?vue&type=template&id=f804cf1a

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadListSection.vue?vue&type=script&lang=js

/* harmony default export */ var DownloadListSectionvue_type_script_lang_js = ({
  name: 'DownloadListSection',
  props: {
    downloadsList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    cart: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    contentInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    screening: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    presale: {
      type: Boolean,
      default: false
    },
    priceAlignment: {
      type: String,
      default: 'text-left'
    },
    showInfo: {
      type: Boolean,
      default: true
    }
  },
  emits: ['add-to-cart', 'remove-from-cart', 'download', 'copy-download', 'play'],
  methods: {
    isInCart: function isInCart(item) {
      return this.cart.some(function (cartItem) {
        return cartItem.itemid === item.id;
      });
    },
    formatPrice: function formatPrice(amount) {
      if (!amount) return '';
      var amountStr = String(amount);
      var length = amountStr.length;
      if (length === 4) return amountStr.substring(0, 1) + '.' + amountStr.substring(1);else if (length === 5) return amountStr.substring(0, 2) + '.' + amountStr.substring(2);else if (length === 3) return amountStr;else return amountStr.substring(0, 3) + '.' + amountStr.substring(3);
    }
  }
});
// CONCATENATED MODULE: ./components/download/DownloadListSection.vue?vue&type=script&lang=js
 /* harmony default export */ var download_DownloadListSectionvue_type_script_lang_js = (DownloadListSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/DownloadListSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_DownloadListSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DownloadListSection = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);