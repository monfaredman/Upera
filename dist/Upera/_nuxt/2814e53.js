(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/header/SubscriptionButton.vue?vue&type=template&id=044711c4
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-button', {
    staticClass: "d-flex align-items-center ml-2",
    attrs: {
      "variant": "second"
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('i', {
    staticClass: "fa fa-credit-card ml-2 hide-mobile"
  }), _vm._v("\n  " + _vm._s(_vm.buttonText) + "\n")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/header/SubscriptionButton.vue?vue&type=template&id=044711c4

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/header/SubscriptionButton.vue?vue&type=script&lang=js

/* harmony default export */ var SubscriptionButtonvue_type_script_lang_js = ({
  name: 'SubscriptionButton',
  props: {
    type: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['directdebit', 'subscription', 'renewal'].includes(value);
      }
    },
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonText: function buttonText() {
      var texts = {
        directdebit: 'پرداخت خودکار',
        subscription: this.isLoggedIn ? 'خرید اشتراک' : 'خرید اشتراک',
        renewal: 'تمدید اشتراک'
      };
      return texts[this.type];
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.$emit('button-click', this.type);
    }
  }
});
// CONCATENATED MODULE: ./components/header/SubscriptionButton.vue?vue&type=script&lang=js
 /* harmony default export */ var header_SubscriptionButtonvue_type_script_lang_js = (SubscriptionButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/header/SubscriptionButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  header_SubscriptionButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SubscriptionButton = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);