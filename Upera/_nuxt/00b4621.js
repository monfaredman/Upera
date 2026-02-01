(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/FileDownloadItem.vue?vue&type=template&id=b55715fc

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
    staticClass: "font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.item.name) + "\n          ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.item.presale,
      expression: "item.presale"
    }],
    staticClass: "download-suitable"
  }, [_vm._v("\n            تاریخ پخش: " + _vm._s(_vm.item.presale_date) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-3 d-flex justify-end align-items-end text-right"
  }, [!_vm.item.screening.ekran && _vm.item.link2 ? _c('div', {
    staticClass: "download-size"
  }, [_c('a', {
    attrs: {
      "href": _vm.item.link2
    }
  }, [_vm._v(" لینک کمکی ")])]) : _vm._e()])])]), _vm._v(" "), _vm.item.screening.ekran ? _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "d-flex h-100 align-items-end"
  }, [_c('div', {
    staticClass: "download-full-link"
  }, [_c('button', {
    staticClass: "btn btn-secondary btn-block",
    on: {
      "click": function click($event) {
        return _vm.$emit('watch', _vm.item.screening.ekran_id);
      }
    }
  }, [_vm._v("\n            تماشا\n            "), _c('i', {
    staticClass: "icon-play"
  })])])])]) : _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "d-flex h-100 align-items-end"
  }, [_c('div', {
    staticClass: "download-link"
  }, [_c('a', {
    staticClass: "btn btn-secondary btn-block",
    attrs: {
      "href": _vm.item.link1
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('show.download')) + "\n            "), _c('i', {
    staticClass: "icon-download"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "copy-link"
  }, [_c('button', {
    staticClass: "btn btn-copy btn-block",
    on: {
      "click": function click($event) {
        return _vm.$emit('copy', _vm.item.link1);
      }
    }
  }, [_vm._v("\n            کپی لینک\n          ")])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/callback/FileDownloadItem.vue?vue&type=template&id=b55715fc

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/FileDownloadItem.vue?vue&type=script&lang=js

/* harmony default export */ var FileDownloadItemvue_type_script_lang_js = ({
  name: 'FileDownloadItem',
  props: {
    item: {
      type: Object,
      required: true,
      validator: function validator(value) {
        return value.name && value.link1 && value.screening && typeof value.screening.ekran !== 'undefined';
      }
    }
  }
});
// CONCATENATED MODULE: ./components/callback/FileDownloadItem.vue?vue&type=script&lang=js
 /* harmony default export */ var callback_FileDownloadItemvue_type_script_lang_js = (FileDownloadItemvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/callback/FileDownloadItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  callback_FileDownloadItemvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FileDownloadItem = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);