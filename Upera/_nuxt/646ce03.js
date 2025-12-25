(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/buttons/PrimaryActionButton.vue?vue&type=template&id=72537380
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.exist ? _c('button', {
    class: ['btn', 'btn-main', {
      'btn-block': _vm.block
    }],
    on: {
      "click": _vm.onClick
    }
  }, [_c('span', {
    staticClass: "smallsrm"
  }, [_c('i', {
    staticClass: "fa fa-play pr-2"
  }), _vm._v(" "), _c('span', [_vm._v("\n      " + _vm._s(_vm.label) + "\n      "), _vm.action === 'play' && _vm.episodeId ? _c('span', [_vm._v("\n        " + _vm._s(' ' + _vm.$t('show.episode') + ' ' + _vm.episodeNumber) + "\n      ")]) : _vm._e()])])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/buttons/PrimaryActionButton.vue?vue&type=template&id=72537380

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/buttons/PrimaryActionButton.vue?vue&type=script&lang=js

/* harmony default export */ var PrimaryActionButtonvue_type_script_lang_js = ({
  name: 'PrimaryActionButton',
  props: {
    exist: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    // 'play' | 'buy' | 'subscription'
    episodeId: {
      type: [Number, String],
      default: null
    },
    episodeNumber: {
      type: [Number, String],
      default: null
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.action === 'play') this.$emit('play');else if (this.action === 'buy') this.$emit('buy');else if (this.action === 'subscription') this.$emit('subscription');
    }
  }
});
// CONCATENATED MODULE: ./components/buttons/PrimaryActionButton.vue?vue&type=script&lang=js
 /* harmony default export */ var buttons_PrimaryActionButtonvue_type_script_lang_js = (PrimaryActionButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/buttons/PrimaryActionButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  buttons_PrimaryActionButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PrimaryActionButton = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);