(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SimilarContent_vue_vue_type_style_index_0_id_53d3e41a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(890);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SimilarContent_vue_vue_type_style_index_0_id_53d3e41a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SimilarContent_vue_vue_type_style_index_0_id_53d3e41a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/SimilarContent.vue?vue&type=template&id=53d3e41a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "mt-4"
  }, [_vm.similar && _vm.similar.length ? _c('HorizontalList', {
    attrs: {
      "items": _vm.similar,
      "options": _vm.swiperOption,
      "instance-name": _vm.instanceName,
      "title-fa": _vm.$t('show.similar'),
      "link-builder": _vm.linkBuilder,
      "card-variant": 'poster',
      "size": {
        w: 183,
        h: 273
      },
      "show-badges": true,
      "show-title": true
    }
  }) : _c('div', {
    staticClass: "text-center py-4"
  }, [_c('p', {
    staticClass: "text-muted"
  }, [_vm._v("محتوای مشابهی یافت نشد")])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/SimilarContent.vue?vue&type=template&id=53d3e41a&scoped=true

// EXTERNAL MODULE: ./components/HorizontalList.vue + 4 modules
var HorizontalList = __webpack_require__(733);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/SimilarContent.vue?vue&type=script&lang=js

/* harmony default export */ var SimilarContentvue_type_script_lang_js = ({
  name: 'SimilarContent',
  components: {
    HorizontalList: HorizontalList["default"]
  },
  props: {
    similar: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      swiperOption: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        countdown: {},
        breakpoints: {
          200: {
            slidesPerView: 2.5
          },
          420: {
            slidesPerView: 3.5
          },
          768: {
            slidesPerView: 4.5
          },
          992: {
            slidesPerView: 5.5
          },
          1024: {
            slidesPerView: 6.5
          },
          1200: {
            slidesPerView: 7
          },
          1420: {
            slidesPerView: 8
          },
          1670: {
            slidesPerView: 9
          }
        }
      },
      // instanceName allows multiple swipers to coexist
      instanceName: 'similarSwiper'
    };
  },
  methods: {
    linkBuilder: function linkBuilder(item) {
      return {
        name: (item.type || 'movie') + '-id',
        params: {
          id: item.id
        }
      };
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en;
    }
  }
});
// CONCATENATED MODULE: ./components/item/SimilarContent.vue?vue&type=script&lang=js
 /* harmony default export */ var item_SimilarContentvue_type_script_lang_js = (SimilarContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/SimilarContent.vue?vue&type=style&index=0&id=53d3e41a&prod&scoped=true&lang=css
var SimilarContentvue_type_style_index_0_id_53d3e41a_prod_scoped_true_lang_css = __webpack_require__(1027);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/SimilarContent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  item_SimilarContentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "53d3e41a",
  null
  
)

/* harmony default export */ var SimilarContent = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HorizontalList: __webpack_require__(733).default})


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);