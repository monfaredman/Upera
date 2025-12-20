(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OfferSection_vue_vue_type_style_index_0_id_9a1aec08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OfferSection_vue_vue_type_style_index_0_id_9a1aec08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OfferSection_vue_vue_type_style_index_0_id_9a1aec08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/OfferSection.vue?vue&type=template&id=9a1aec08&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.offer && _vm.offer.data && _vm.offer.data.length ? _c('div', {
    staticClass: "offer-section"
  }, [_c('HorizontalList', {
    attrs: {
      "title-en": _vm.offer.list_en,
      "title-fa": _vm.offer.list_fa,
      "show-all-route": {
        name: 'lists-list',
        params: {
          list: _vm.offer.list.toLowerCase()
        }
      },
      "items": _vm.offer.data,
      "instance-name": "offerSwip",
      "options": _vm.SWIPER_OPTION_OFFER,
      "card-variant": "backdrop",
      "size": {
        w: 764,
        h: 400
      },
      "link-builder": _vm.buildIdRoute,
      "show-badges": true,
      "is-offer": true,
      "hoverable": true
    }
  })], 1) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OfferSection.vue?vue&type=template&id=9a1aec08&scoped=true

// EXTERNAL MODULE: ./components/HorizontalList.vue + 4 modules
var HorizontalList = __webpack_require__(744);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/OfferSection.vue?vue&type=script&lang=js

var SWIPER_OPTION_OFFER = {
  slidesPerView: 5.5,
  spaceBetween: 10,
  slidesPerGroup: 2,
  watchSlidesProgress: true,
  resistanceRatio: 0,
  freeMode: false,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 3.5
    },
    1200: {
      slidesPerView: 5.5
    },
    1600: {
      slidesPerView: 7.5
    }
  }
};
/* harmony default export */ var OfferSectionvue_type_script_lang_js = ({
  name: 'OfferSection',
  components: {
    HorizontalList: HorizontalList["default"]
  },
  props: {
    offer: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      SWIPER_OPTION_OFFER: SWIPER_OPTION_OFFER
    };
  },
  methods: {
    buildIdRoute: function buildIdRoute(item) {
      return {
        name: item.type + '-id',
        params: {
          id: item.id
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./components/OfferSection.vue?vue&type=script&lang=js
 /* harmony default export */ var components_OfferSectionvue_type_script_lang_js = (OfferSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/OfferSection.vue?vue&type=style&index=0&id=9a1aec08&prod&scoped=true&lang=css
var OfferSectionvue_type_style_index_0_id_9a1aec08_prod_scoped_true_lang_css = __webpack_require__(826);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/OfferSection.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OfferSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "9a1aec08",
  null
  
)

/* harmony default export */ var OfferSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HorizontalList: __webpack_require__(744).default})


/***/ })

}]);