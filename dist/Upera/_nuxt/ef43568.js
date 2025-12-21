(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_196cdf3b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(876);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_196cdf3b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_196cdf3b_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/movie/download/_id.vue?vue&type=template&id=196cdf3b

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid",
    attrs: {
      "id": "checkcontainer"
    }
  }, [_c('section', {
    staticClass: "mt-5 pt-lg-5 pt-md-5",
    attrs: {
      "id": "banner"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', [_c('Download', {
    attrs: {
      "id": _vm.data.movie.id,
      "show": true,
      "ftb": false,
      "staticmodal": true,
      "owned": _vm.data.movie.owned,
      "traffic": _vm.data.movie.traffic,
      "ir": _vm.data.movie.ir,
      "hour": _vm.data.movie.hour,
      "trafficoo": _vm.data.movie.traffic_oo,
      "vod": _vm.data.movie.vod,
      "free": _vm.data.movie.free,
      "name": _vm.data.movie.name,
      "namefa": _vm.data.movie.name_fa,
      "posterf": _vm.data.movie.poster,
      "backdrop": _vm.data.movie.backdrop,
      "type": "movie"
    },
    on: {
      "hide-modal": _vm.HIDE_MODAL
    }
  })], 1)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/movie/download/_id.vue?vue&type=template&id=196cdf3b

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./components/Download.vue + 4 modules
var Download = __webpack_require__(756);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/movie/download/_id.vue?vue&type=script&lang=js





/* harmony default export */ var _idvue_type_script_lang_js = ({
  components: {
    Download: Download["default"]
  },
  layout: "nofooter",
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return context.app.$axios.get('/getV2/movie/' + context.params.id);
          case 1:
            res = _context.sent;
            return _context.abrupt("return", {
              data: res.data.data
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      data: {}
    };
  },
  head: function head() {
    return {
      bodyAttrs: {
        class: 'download'
      },
      title: (this.data.movie.ekran == 1 ? 'اکران ' : 'دانلود ') + this.ChooseLang(this.data.movie.name, this.data.movie.name_fa)
    };
  },
  mounted: function mounted() {
    var _this = this;
    // دریافت داده‌های accessibility با استفاده از /get/accessibility/ و data.movie.id
    var accessibilityPromise = this.$auth.loggedIn ? this.$axios.get('/get/accessibility/movie/' + this.data.movie.id) : Promise.resolve({
      data: {
        data: {
          owned: 0,
          owned_period_end: null
        }
      }
    });
    accessibilityPromise.then(function (response) {
      var accessibilityData = response.data.data;
      // به‌روزرسانی اطلاعات accessibility در data.movie
      _this.$set(_this.data.movie, 'owned', accessibilityData.owned);
      _this.$set(_this.data.movie, 'owned_period_end', accessibilityData.owned_period_end);
    }).catch(function (error) {
      console.error('Error fetching accessibility data:', error);
    });
  },
  methods: {
    HIDE_MODAL: function HIDE_MODAL() {
      // پیاده‌سازی تابع hide modal در صورت نیاز
    },
    ChooseLang: function ChooseLang(en, fa) {
      return fa && this.$i18n.locale === "fa" ? fa : en;
    }
  }
});
// CONCATENATED MODULE: ./pages/movie/download/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var download_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/movie/download/_id.vue?vue&type=style&index=0&id=196cdf3b&prod&lang=css
var _idvue_type_style_index_0_id_196cdf3b_prod_lang_css = __webpack_require__(1013);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/movie/download/_id.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Download: __webpack_require__(756).default})


/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);