(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62,61],{

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/cast/CrewSection.vue?vue&type=template&id=0cbab044
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.showDivider && _vm.hasVisibleCrew ? _c('hr') : _vm._e(), _vm._v(" "), _vm.hasVisibleCrew ? _c('div', {
    staticClass: "mt-md-2 small font-weight-bold"
  }, [_vm.showTitle ? _c('h6', [_vm._v("\n      " + _vm._s(_vm.$t('new.other_casts')) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.directors && _vm.directors.length ? _c('CrewRole', {
    attrs: {
      "role": _vm.$t('show.director'),
      "members": _vm.directors
    }
  }) : _vm._e(), _vm._v(" "), _vm.producers && _vm.producers.length ? _c('CrewRole', {
    attrs: {
      "role": _vm.$t('show.producer'),
      "members": _vm.producers
    }
  }) : _vm._e(), _vm._v(" "), _vm.writers && _vm.writers.length ? _c('CrewRole', {
    attrs: {
      "role": _vm.$t('show.writer'),
      "members": _vm.writers
    }
  }) : _vm._e(), _vm._v(" "), _vm.investors && _vm.investors.length ? _c('CrewRole', {
    attrs: {
      "role": _vm.$t('show.investor'),
      "members": _vm.investors
    }
  }) : _vm._e()], 1) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/cast/CrewSection.vue?vue&type=template&id=0cbab044

// EXTERNAL MODULE: ./components/item/content/cast/CrewRole.vue + 4 modules
var CrewRole = __webpack_require__(928);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/cast/CrewSection.vue?vue&type=script&lang=js

/* harmony default export */ var CrewSectionvue_type_script_lang_js = ({
  name: 'CrewSection',
  components: {
    CrewRole: CrewRole["default"]
  },
  props: {
    directors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    producers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    writers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    investors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showTitle: {
      type: Boolean,
      default: false
    },
    showDivider: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    hasVisibleCrew: function hasVisibleCrew() {
      return this.directors && this.directors.length > 0 || this.producers && this.producers.length > 0 || this.writers && this.writers.length > 0 || this.investors && this.investors.length > 0;
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/cast/CrewSection.vue?vue&type=script&lang=js
 /* harmony default export */ var cast_CrewSectionvue_type_script_lang_js = (CrewSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/cast/CrewSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cast_CrewSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CrewSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 928:
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