(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/episode/download/_id.vue?vue&type=template&id=0bc33089

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
      "id": _vm.data.episode.id,
      "show": true,
      "ftb": false,
      "staticmodal": true,
      "owned": _vm.data.episode.owned,
      "traffic": _vm.data.episode.traffic,
      "ir": _vm.data.episode.ir,
      "hour": _vm.data.episode.hour,
      "trafficoo": _vm.data.episode.traffic_oo,
      "vod": _vm.data.episode.vod,
      "free": _vm.data.episode.free,
      "name": _vm.data.episode.name,
      "namefa": _vm.data.episode.name_fa,
      "posterf": _vm.data.episode.poster,
      "backdrop": _vm.data.episode.backdrop,
      "season": _vm.data.season,
      "itemdata": _vm.data.episode,
      "type": "episode"
    },
    on: {
      "hide-modal": _vm.HIDE_MODAL
    }
  })], 1)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/episode/download/_id.vue?vue&type=template&id=0bc33089

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./components/Download.vue + 4 modules
var Download = __webpack_require__(756);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/episode/download/_id.vue?vue&type=script&lang=js







/* harmony default export */ var _idvue_type_script_lang_js = ({
  components: {
    Download: Download["default"]
  },
  layout: 'nofooter',
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var episodeRes, seasonRes, _yield$Promise$all, _yield$Promise$all2, _t;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            ;
            _context.next = 1;
            return Promise.all([context.app.$axios.get('/getV2/episode/' + context.params.id), context.app.$axios.get('/ghost/get/season/episode/' + context.params.id)]);
          case 1:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = Object(slicedToArray["a" /* default */])(_yield$Promise$all, 2);
            episodeRes = _yield$Promise$all2[0];
            seasonRes = _yield$Promise$all2[1];
            _context.next = 3;
            break;
          case 2:
            _context.prev = 2;
            _t = _context["catch"](0);
            context.redirect('/');
            return _context.abrupt("return", _t);
          case 3:
            return _context.abrupt("return", {
              data: {
                episode: episodeRes.data.data.episode,
                season: seasonRes.data.data.season
              }
            });
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 2]]);
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
      title: 'دانلود ' + (this.data.episode.season_number == 1 ? this.ChooseLang(this.data.episode.series_name, this.data.episode.series_name_fa) + ',قسمت ' + this.data.episode.episode_number : this.ChooseLang(this.data.episode.series_name, this.data.episode.series_name_fa) + ',قسمت ' + this.data.episode.episode_number + ' فصل ' + this.data.episode.season_number)
    };
  },
  mounted: function mounted() {
    var _this = this;
    ;
    Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var accessibilityPromise, accessibilityRes, accessibilityData;
      return regeneratorRuntime.wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            // دریافت داده‌های accessibility با استفاده از /get/accessibility/episode/{id}
            accessibilityPromise = _this.$auth.loggedIn ? _this.$axios.get('/get/accessibility/episode/' + _this.data.episode.id) : Promise.resolve({
              data: {
                data: {
                  owned: 0,
                  owned_period_end: null
                }
              }
            });
            _context2.next = 1;
            return accessibilityPromise;
          case 1:
            accessibilityRes = _context2.sent;
            accessibilityData = accessibilityRes.data.data; // به‌روزرسانی اطلاعات accessibility در data.episode
            _this.$set(_this.data.episode, 'owned', accessibilityData.owned);
            _this.$set(_this.data.episode, 'owned_period_end', accessibilityData.owned_period_end);
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))().catch(function (error) {
      console.error('Error fetching accessibility data:', error);
    });
  },
  methods: {
    HIDE_MODAL: function HIDE_MODAL() {
      // پیاده‌سازی تابع hide-modal در صورت نیاز
    },
    ChooseLang: function ChooseLang(en, fa) {
      return fa && this.$i18n.locale === 'fa' ? fa : en;
    }
  }
});
// CONCATENATED MODULE: ./pages/episode/download/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var download_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/episode/download/_id.vue?vue&type=style&index=0&id=0bc33089&prod&lang=css
var _idvue_type_style_index_0_id_0bc33089_prod_lang_css = __webpack_require__(986);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/episode/download/_id.vue






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

/***/ 869:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_0bc33089_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(869);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_0bc33089_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_0bc33089_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);