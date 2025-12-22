(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_live_vue_vue_type_style_index_0_id_e5828a00_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(887);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_live_vue_vue_type_style_index_0_id_e5828a00_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_live_vue_vue_type_style_index_0_id_e5828a00_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/lives/_live.vue?vue&type=template&id=e5828a00&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "video-container"
  }, [_c('div', {
    staticClass: "hamshahri"
  }, [_c('a', {
    staticClass: "srmjs",
    on: {
      "click": _vm.goBack
    }
  }, [_vm._m(0)]), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "video-loading-spinner"
  }) : _vm._e(), _vm._v(" "), _vm.soon ? _c('p', {
    staticClass: "soon"
  }, [_vm._v("به زودی...")]) : _vm._e(), _vm._v(" "), _vm.soon ? _c('button', {
    staticClass: "btn btn-primary btn-lg fw-bold refresh-btn",
    on: {
      "click": _vm.reloadPage
    }
  }, [_vm._v("\n      بارگذاری مجدد\n    ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "player-wrapper"
  }, [_vm.videoUrl && !_vm.soon ? _c('VideoPlayer', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    ref: "live",
    staticClass: "full-screen-player vjs-fluid",
    attrs: {
      "playerid": "live",
      "stream": _vm.videoUrl,
      "title": _vm.movieTitle,
      "data-poster": _vm.posterUrl,
      "player-auto-play": true,
      "show-auto-play-toggle": false
    }
  }) : _vm._e()], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "flowplayer-back-button"
    }
  }, [_c('div', {
    staticClass: "icon-back"
  })]);
}];

// CONCATENATED MODULE: ./pages/lives/_live.vue?vue&type=template&id=e5828a00&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./components/VideoPlayer.vue + 4 modules
var VideoPlayer = __webpack_require__(748);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/lives/_live.vue?vue&type=script&lang=js





/* harmony default export */ var _livevue_type_script_lang_js = ({
  components: {
    VideoPlayer: VideoPlayer["default"]
  },
  layout: 'empty',
  data: function data() {
    return {
      movieTitle: '',
      posterUrl: '',
      videoUrl: '',
      loading: true,
      // نشانگر لودینگ
      soon: false,
      // نشانگر حالت "به زودی"
      intervalId: null // نشانگر حالت "به زودی"
    };
  },
  watch: {
    '$route.params.live': {
      immediate: true,
      handler: function handler() {
        this.loadVideo();
      }
    }
    // مانیتور تغییر وضعیت متغیر soon
    // soon(newVal) {
    //   if (newVal) {
    //     // اگر soon برابر true شد، تایمر هر 30 ثانیه اجرا شود
    //     this.startReloadInterval()
    //   } else {
    //     // در غیر این صورت تایمر را متوقف می‌کنیم
    //     this.stopReloadInterval()
    //   }
    // }
  },
  // mounted() {
  //   // اگر از قبل وضعیت soon true بود، تایمر شروع شود
  //   if (this.soon) {
  //     this.startReloadInterval()
  //   }
  // },
  // beforeDestroy() {
  //   // قبل از از بین رفتن کامپوننت، تایمر را پاک می‌کنیم
  //   this.stopReloadInterval()
  // },
  methods: {
    loadVideo: function loadVideo() {
      var _this = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, ref, apiUrl, apiResponse, data, streamUrl, streamResponse, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = _this.$route.params.live;
              if (id) {
                _context.next = 1;
                break;
              }
              console.log('No ID found in route params');
              return _context.abrupt("return");
            case 1:
              ref = _this.$cookiz.get('ref') || '';
              apiUrl = "/ghost/get/watch/live/".concat(id).concat(ref ? "?ref=".concat(ref) : ''); // **دریافت اطلاعات ویدیو از API**
              _context.next = 2;
              return _this.$axios.get(apiUrl);
            case 2:
              apiResponse = _context.sent;
              if (!(apiResponse.status === 200)) {
                _context.next = 4;
                break;
              }
              data = apiResponse.data.data;
              _this.movieTitle = data.title || 'پخش زنده';
              _this.posterUrl = data.poster || '';
              streamUrl = data.video.video; // دریافت آدرس استریم از API
              // **بررسی استریم با `HEAD` request**
              _context.next = 3;
              return fetch(streamUrl, {
                method: 'HEAD'
              });
            case 3:
              streamResponse = _context.sent;
              if (streamResponse.ok) {
                _this.videoUrl = streamUrl;
                _this.soon = false;
              } else {
                _this.soon = true;
              }
              _context.next = 5;
              break;
            case 4:
              _this.soon = true;
            case 5:
              _this.loading = false;
              _context.next = 7;
              break;
            case 6:
              _context.prev = 6;
              _t = _context["catch"](0);
              console.error('API Error:', _t);
              _this.loading = false;
              _this.soon = true;
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 6]]);
      }))();
    },
    reloadPage: function reloadPage() {
      location.reload();
    },
    goBack: function goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push({
          name: 'index'
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/lives/_live.vue?vue&type=script&lang=js
 /* harmony default export */ var lives_livevue_type_script_lang_js = (_livevue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/lives/_live.vue?vue&type=style&index=0&id=e5828a00&prod&scoped=true&lang=css
var _livevue_type_style_index_0_id_e5828a00_prod_scoped_true_lang_css = __webpack_require__(1024);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/lives/_live.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  lives_livevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "e5828a00",
  null
  
)

/* harmony default export */ var _live = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoPlayer: __webpack_require__(748).default})


/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);