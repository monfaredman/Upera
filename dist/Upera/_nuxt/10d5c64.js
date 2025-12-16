(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/RuntimeItem.vue?vue&type=template&id=57b0c6e3
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "statistics-item statistics-item-row text-muted"
  }, [_c('i', {
    staticClass: "icon-episodes"
  }), _vm._v(" "), _c('span', {
    staticClass: "statistics-item-caption"
  }, [_vm.type === 'series' ? [_c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.episodeNum))]), _vm._v(" "), _c('span', {
    staticClass: "hide-mobile"
  }, [_vm._v(" قسمت در ")]), _vm._v(" "), _c('span', {
    staticClass: "show-mobile"
  }, [_vm._v(" - ")]), _vm._v(" "), _c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.seasonNum))]), _vm._v(" "), _c('span', {
    staticClass: "hide-mobile"
  }, [_vm._v(" فصل")])] : [_c('span', {
    staticClass: "font-weight-bold"
  }, [_vm._v(_vm._s(_vm.runtime) + " ")]), _vm._v(" "), _c('span', {
    staticClass: "hide-mobile"
  }, [_vm._v(_vm._s(_vm.$t('new.minutes')))])]], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/RuntimeItem.vue?vue&type=template&id=57b0c6e3

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/RuntimeItem.vue?vue&type=script&lang=js




/* harmony default export */ var RuntimeItemvue_type_script_lang_js = ({
  name: 'RuntimeItem',
  props: {
    type: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['movie', 'series', 'episode'].includes(value);
      }
    },
    runtime: {
      type: [String, Number],
      default: null
    },
    episodeNum: {
      type: [String, Number],
      default: 0
    },
    seasonNum: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    displayRuntime: function displayRuntime() {
      if (!this.runtime) return '0';
      return typeof this.runtime === 'number' ? this.runtime.toString() : this.runtime;
    },
    displayEpisodeNum: function displayEpisodeNum() {
      var _this$episodeNum;
      return ((_this$episodeNum = this.episodeNum) === null || _this$episodeNum === void 0 ? void 0 : _this$episodeNum.toString()) || '0';
    },
    displaySeasonNum: function displaySeasonNum() {
      var _this$seasonNum;
      return ((_this$seasonNum = this.seasonNum) === null || _this$seasonNum === void 0 ? void 0 : _this$seasonNum.toString()) || '0';
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/RuntimeItem.vue?vue&type=script&lang=js
 /* harmony default export */ var content_RuntimeItemvue_type_script_lang_js = (RuntimeItemvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/RuntimeItem.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_RuntimeItemvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RuntimeItem = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);