(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/buttons/DownloadButton.vue?vue&type=template&id=46f632be
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.exist ? _c('button', {
    class: ['btn', 'btn-main', {
      'btn-block': _vm.block
    }],
    on: {
      "click": function click($event) {
        return _vm.$emit('download');
      }
    }
  }, [_c('span', [_c('i', {
    staticClass: "fa fa-download pr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.label))])])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/buttons/DownloadButton.vue?vue&type=template&id=46f632be

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/buttons/DownloadButton.vue?vue&type=script&lang=js
/* harmony default export */ var DownloadButtonvue_type_script_lang_js = ({
  name: 'DownloadButton',
  props: {
    exist: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    block: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/buttons/DownloadButton.vue?vue&type=script&lang=js
 /* harmony default export */ var buttons_DownloadButtonvue_type_script_lang_js = (DownloadButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/buttons/DownloadButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  buttons_DownloadButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DownloadButton = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);