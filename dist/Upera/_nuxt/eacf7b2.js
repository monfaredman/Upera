(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/cast/CrewRole.vue?vue&type=template&id=83f76ae4

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.members && _vm.members.length ? _c('p', {
    staticClass: "font-weight-normal"
  }, [_vm._v("\n  " + _vm._s(_vm.role) + ":\n  "), _vm._l(_vm.members, function (member, index) {
    return _c('span', {
      key: member.id
    }, [member && member.id ? _c('nuxt-link', {
      attrs: {
        "to": {
          name: 'cast-id',
          params: {
            id: member.id
          }
        }
      }
    }, [_vm._v("\n      " + _vm._s(_vm.ChooseLang(member.name, member.name_fa)) + "\n    ")]) : _vm._e(), _vm._v(" "), index < _vm.members.length - 1 ? _c('span', [_vm._v(", ")]) : _vm._e()], 1);
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/cast/CrewRole.vue?vue&type=template&id=83f76ae4

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/cast/CrewRole.vue?vue&type=script&lang=js
/* harmony default export */ var CrewRolevue_type_script_lang_js = ({
  name: 'CrewRole',
  props: {
    role: {
      type: String,
      required: true
    },
    members: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en || '';
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/cast/CrewRole.vue?vue&type=script&lang=js
 /* harmony default export */ var cast_CrewRolevue_type_script_lang_js = (CrewRolevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/cast/CrewRole.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cast_CrewRolevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CrewRole = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);