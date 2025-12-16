(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(729);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/IconActions.vue?vue&type=template&id=55380c8e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "icon-actions",
    class: {
      'row h-full': _vm.isMobile
    }
  }, [_c('a', {
    staticClass: "icon-btn-style",
    class: _vm.watchlistClasses,
    style: _vm.customStyle,
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('toggle-watchlist');
      }
    }
  }, [_c('i', {
    class: {
      'icon-bookmark-empty fa-xs': !_vm.isWatchlist,
      'icon-bookmark fa-xs': _vm.isWatchlist == 1
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "icon-btn-style",
    class: _vm.shareClasses,
    style: _vm.customStyle,
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('share');
      }
    }
  }, [_c('i', {
    staticClass: "icon-share-android fa-xs"
  })]), _vm._v(" "), _c('a', {
    staticClass: "icon-btn-style",
    class: _vm.clapClasses,
    style: _vm.customStyle,
    on: {
      "mousedown": function mousedown($event) {
        return _vm.$emit('clap-start');
      },
      "mouseleave": function mouseleave($event) {
        return _vm.$emit('clap-stop');
      },
      "mouseup": function mouseup($event) {
        return _vm.$emit('clap-stop');
      },
      "touchstart": function touchstart($event) {
        return _vm.$emit('clap-start');
      },
      "touchend": function touchend($event) {
        return _vm.$emit('clap-stop');
      },
      "touchcancel": function touchcancel($event) {
        return _vm.$emit('clap-stop');
      }
    }
  }, [_c('div', {
    staticClass: "likes"
  }, [_vm.userClaps ? _c('span', {
    staticClass: "badge badge-secondary"
  }, [_vm._v(_vm._s(_vm.userClaps))]) : _vm._e(), _vm._v(" "), _c('i', {
    staticClass: "fa fa-thumbs-up fa-xs"
  })])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/IconActions.vue?vue&type=template&id=55380c8e&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(140);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/IconActions.vue?vue&type=script&lang=js

/* harmony default export */ var IconActionsvue_type_script_lang_js = ({
  name: 'IconActions',
  props: {
    variant: {
      type: String,
      default: 'desktop' // 'mobile' | 'desktop'
    },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0
    },
    userClaps: {
      type: [Number, String],
      default: 0
    },
    clapActive: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    isMobile: function isMobile() {
      return this.variant === 'mobile';
    },
    clapClasses: function clapClasses() {
      return this.isMobile ? [{
        active: this.clapActive
      }, 'col-4 d-flex align-items-center justify-content-center text-darker'] : [' btn-dark btn-icon ml-1 '];
    },
    shareClasses: function shareClasses() {
      return this.isMobile ? 'col-4 d-flex align-items-center justify-content-center text-darker' : ' btn-dark btn-icon ml-1 ';
    },
    watchlistClasses: function watchlistClasses() {
      return this.isMobile ? 'col-4 d-flex align-items-center justify-content-center text-darker' : ' btn-dark btn-icon ml-1 ';
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/IconActions.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_IconActionsvue_type_script_lang_js = (IconActionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/IconActions.vue?vue&type=style&index=0&id=55380c8e&prod&scoped=true&lang=css
var IconActionsvue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css = __webpack_require__(738);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/IconActions.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_IconActionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "55380c8e",
  null
  
)

/* harmony default export */ var IconActions = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);