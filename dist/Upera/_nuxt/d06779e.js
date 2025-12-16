(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/header/HeaderLink.vue?vue&type=template&id=361b424a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(_vm.isExternal ? 'a' : 'nuxt-link', {
    tag: "component",
    staticClass: "header-link d-flex align-items-center",
    class: [_vm.flexColumn ? 'flex-column justify-content-center text-nowrap' : '', _vm.additionalClasses],
    attrs: {
      "to": _vm.to,
      "href": _vm.href
    }
  }, [_vm.icon ? _c('i', {
    class: _vm.icon
  }) : _vm._e(), _vm._v(" "), _vm.text ? _c('span', {
    staticClass: "ml-md-2",
    domProps: {
      "innerHTML": _vm._s(_vm.text)
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/HeaderLink.vue?vue&type=template&id=361b424a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/header/HeaderLink.vue?vue&type=script&lang=js
/* harmony default export */ var HeaderLinkvue_type_script_lang_js = ({
  name: 'HeaderLink',
  props: {
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    flexColumn: {
      type: Boolean,
      default: false
    },
    isExternal: {
      type: Boolean,
      default: false
    },
    additionalClasses: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/header/HeaderLink.vue?vue&type=script&lang=js
 /* harmony default export */ var header_HeaderLinkvue_type_script_lang_js = (HeaderLinkvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/header/HeaderLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_HeaderLinkvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HeaderLink = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);