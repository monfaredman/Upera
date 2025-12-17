(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/StoryContent.vue?vue&type=template&id=7ea9a08c

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid",
    staticStyle: {
      "margin-bottom": "3.5rem"
    }
  }, [_c('div', {
    staticClass: "title mt-4 mb-3"
  }, [_vm._v("\n    " + _vm._s(_vm.storyTitle) + "\n  ")]), _vm._v(" "), _c('p', [_vm._v("\n    " + _vm._s(_vm.overviewText) + "\n    "), _vm.type === 'episode' ? _c('span', [_vm._v("\n      (" + _vm._s(_vm.ChooseLang(_vm.data.item.name, _vm.data.item.name_fa)) + ")\n    ")]) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/StoryContent.vue?vue&type=template&id=7ea9a08c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/StoryContent.vue?vue&type=script&lang=js
/* harmony default export */ var StoryContentvue_type_script_lang_js = ({
  name: 'StoryContent',
  props: {
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    storyTitle: function storyTitle() {
      return this.type === 'movie' ? this.$t('new.story') : this.$t('new.story2');
    },
    overviewText: function overviewText() {
      return this.ChooseLang(this.data.item.overview, this.data.item.overview_fa);
    }
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en;
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/StoryContent.vue?vue&type=script&lang=js
 /* harmony default export */ var content_StoryContentvue_type_script_lang_js = (StoryContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/StoryContent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_StoryContentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StoryContent = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);