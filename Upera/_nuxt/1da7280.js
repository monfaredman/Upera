(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadItem.vue?vue&type=template&id=73b880a8
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-9"
  }, [_c('div', {
    staticClass: "download-quality font-weight-bold"
  }, [_vm.itemLink ? _c('a', {
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.onItemClick.apply(null, arguments);
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.itemName) + "\n            ")]) : _c('span', [_vm._v(_vm._s(_vm.itemName))])]), _vm._v(" "), _vm.showInfo ? _c('div', {
    staticClass: "download-suitable"
  }, [_vm._v("\n            " + _vm._s(_vm.itemInfo) + "\n          ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-3 d-flex justify-end align-items-end text-right"
  }, [_vm.itemSize ? _c('div', {
    staticClass: "download-size"
  }, [_vm._v("\n            " + _vm._s(_vm.itemSize) + "\n          ")]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "d-flex h-100 align-items-end"
  }, [_vm._t("actions", function () {
    return [_c('div', {
      staticClass: "download-link"
    }, [_c('button', {
      staticClass: "btn btn-danger btn-block",
      on: {
        "click": _vm.onAction
      }
    }, [_vm._t("action-text", function () {
      return [_vm._v("خرید و دانلود")];
    }), _vm._v(" "), _c('i', {
      class: _vm.actionIcon
    })], 2)])];
  }), _vm._v(" "), _c('div', {
    staticClass: "copy-link",
    class: _vm.priceAlignment
  }, [_vm.showPrice ? _c('span', {
    staticClass: "overlay_price font-weight-light"
  }, [_vm._m(0), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.formattedPrice))])]) : _vm._e()])], 2)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "overlay_price_label position-relative"
  }, [_c('i', {
    staticClass: "icon-toman"
  })]);
}];

// CONCATENATED MODULE: ./components/download/DownloadItem.vue?vue&type=template&id=73b880a8

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadItem.vue?vue&type=script&lang=js

/* harmony default export */ var DownloadItemvue_type_script_lang_js = ({
  name: 'DownloadItem',
  props: {
    item: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemLink: {
      type: Boolean,
      default: false
    },
    itemName: {
      type: String,
      default: ''
    },
    itemInfo: {
      type: String,
      default: ''
    },
    itemSize: {
      type: String,
      default: ''
    },
    showInfo: {
      type: Boolean,
      default: true
    },
    showPrice: {
      type: Boolean,
      default: true
    },
    priceAlignment: {
      type: String,
      default: 'text-left',
      validator: function validator(value) {
        return ['text-left', 'text-right'].includes(value);
      }
    },
    actionIcon: {
      type: String,
      default: 'icon-download'
    }
  },
  computed: {
    formattedPrice: function formattedPrice() {
      if (!this.item.amount) return '';
      var amount = String(this.item.amount);
      var length = amount.length;
      if (length === 4) return amount.substring(0, 1) + '.' + amount.substring(1);else if (length === 5) return amount.substring(0, 2) + '.' + amount.substring(2);else return amount.substring(0, 3) + '.' + amount.substring(3);
    }
  },
  methods: {
    onItemClick: function onItemClick() {
      this.$emit('item-click', this.item);
    },
    onAction: function onAction() {
      this.$emit('action', this.item);
    }
  }
});
// CONCATENATED MODULE: ./components/download/DownloadItem.vue?vue&type=script&lang=js
 /* harmony default export */ var download_DownloadItemvue_type_script_lang_js = (DownloadItemvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/DownloadItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_DownloadItemvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DownloadItem = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);