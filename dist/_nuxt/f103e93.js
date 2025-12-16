(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[142],{

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_609d523f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(870);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_609d523f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_609d523f_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/video/show/_id.vue?vue&type=template&id=609d523f&scoped=true
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
  }, [_vm.videoUrl && !_vm.loading ? _c('VideoPlayer', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    ref: "videoPlayer",
    staticClass: "full-screen-player vjs-fluid",
    attrs: {
      "playerid": "video-player",
      "stream": _vm.videoUrl,
      "data-poster": _vm.posterUrl,
      "title": _vm.videoTitle,
      "tracks": _vm.tracks,
      "player-auto-play": true,
      "credits-data": _vm.creditsData,
      "fullrate-data": _vm.fullrateData,
      "content-id": _vm.$route.params.id,
      "content-type": 'video'
    },
    on: {
      "ready": _vm.handlePlayerReady,
      "timeupdate": _vm.handleTimeUpdate,
      "ended": _vm.handleEnded,
      "subscription-purchase": _vm.handleSubscriptionPurchase,
      "ad-started": _vm.handleAdStarted,
      "ad-ended": _vm.handleAdEnded
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm.showNextVideo && _vm.suggestion && !_vm.adActive ? _c('div', {
    staticClass: "next-video-overlay",
    on: {
      "click": _vm.playNextVideo
    }
  }, [_c('div', {
    staticClass: "next-video-content"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('player.next')) + ": " + _vm._s(_vm.suggestion.name_fa))]), _vm._v(" "), _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.suggestionBackdrop,
      "alt": "Next Video Backdrop"
    }
  })])]) : _vm._e()]);
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

// CONCATENATED MODULE: ./pages/video/show/_id.vue?vue&type=template&id=609d523f&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/video/show/_id.vue?vue&type=script&lang=js










// Dynamic import for code splitting - VideoPlayer is heavy
var VideoPlayer = function VideoPlayer() {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 737));
};
/* harmony default export */ var _idvue_type_script_lang_js = ({
  components: {
    VideoPlayer: VideoPlayer
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    // Close any open SweetAlert modal when route changes
    if (this.$swal && this.$swal.close) {
      try {
        this.$swal.close();
      } catch (e) {
        // Ignore errors when closing swal
      }
    }
    next();
  },
  layout: 'empty',
  data: function data() {
    return {
      videoTitle: '',
      posterUrl: '',
      videoUrl: '',
      creditsData: {},
      tracks: [],
      loading: true,
      guest: true,
      soon: false,
      // برای زمان‌بندی بروزرسانی recently
      recentlyTime: 200,
      // برای نمایش فیلم بعدی
      showNextVideo: false,
      suggestion: null,
      suggestionBackdrop: '',
      // اگر زمان شروع پخش از قبل وجود داشته باشد
      startTime: 0,
      // داده‌های نرخ کامل برای دکمه اشتراک
      fullrateData: null,
      // Track VAST ad state
      adActive: false
    };
  },
  mounted: function mounted() {
    // حذف کلاس‌های احتمالی قبلی
    if (this.$auth && this.$auth.loggedIn) {
      this.guest = false;
    }
    this.loadVideo();

    // Handle browser back button
    window.addEventListener('popstate', this.handlePopState);
  },
  beforeDestroy: function beforeDestroy() {
    // Close any open SweetAlert modal
    if (this.$swal && this.$swal.close) {
      try {
        this.$swal.close();
      } catch (e) {
        // Ignore errors when closing swal
      }
    }

    // Remove event listener
    window.removeEventListener('popstate', this.handlePopState);
  },
  methods: {
    handlePopState: function handlePopState() {
      // Close any open SweetAlert modal when back button is pressed
      if (this.$swal && this.$swal.close) {
        try {
          this.$swal.close();
        } catch (e) {
          // Ignore errors when closing swal
        }
      }
    },
    showErrorAlert: function showErrorAlert(data) {
      var _this = this;
      var dlsmtitle = this.$i18n.locale === 'fa' ? data.message_fa : data.message;
      // let backtohome=false
      if (!dlsmtitle) {
        dlsmtitle = this.$t('player.error1');
        // backtohome=true
      }
      var dlsmbuttons = {
        back: {
          text: this.$t('player.back'),
          value: 'back',
          closeModal: true,
          className: 'swal-back'
        }
      };
      if (data.show_subscription === 1) {
        dlsmbuttons.subscribe = {
          text: this.$t('player.subscribe'),
          value: 'subscribe',
          closeModal: true
        };
      }
      if (!this.$auth.loggedIn && data.show_login === 1) {
        Object.assign(dlsmbuttons, {
          login: {
            text: this.$t('nav.login'),
            value: 'login',
            closeModal: true
          }
        });
      }
      this.$swal({
        title: dlsmtitle,
        icon: 'error',
        dangerMode: true,
        buttons: dlsmbuttons
      }).then(function (value) {
        switch (value) {
          case 'back':
            window.history.length > 2 ? _this.$router.go(-1) : _this.$router.push({
              name: 'video-id',
              params: {
                id: _this.$route.params.id
              }
            });
            break;
          case 'subscribe':
            _this.$store.dispatch('subscription/SHOW_MODAL', {
              content_type: 'video',
              content_id: _this.$route.params.id
            });
            break;
          case 'login':
            _this.$store.dispatch('login/SHOW_MODAL', {
              premessage: null,
              premobile: null,
              preredirect: null,
              prerefresh: false
            });
            break;
          default:
            window.history.length > 2 ? _this.$router.go(-1) : _this.$router.push({
              name: 'video-id',
              params: {
                id: _this.$route.params.id
              }
            });
            break;
        }
      });
    },
    loadVideo: function loadVideo() {
      var _this2 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, ref, apiUrl, response, data, streamUrl, streamResponse, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = _this2.$route.params.id;
              if (id) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              ref = _this2.$cookiz.get('ref') || ''; // انتخاب API مناسب بر اساس وضعیت guest
              apiUrl = _this2.guest ? "/ghost/get/watch/video/".concat(id).concat(ref ? "?ref=".concat(ref) : '') : "/get/watch/video/".concat(id).concat(ref ? "?ref=".concat(ref) : '');
              _context.next = 2;
              return _this2.$axios.get(apiUrl);
            case 2:
              response = _context.sent;
              if (!(response.status === 200)) {
                _context.next = 4;
                break;
              }
              data = response.data.data; // ذخیره داده‌های fullrate برای دکمه اشتراک
              if (data.fullrate_data) {
                _this2.fullrateData = data.fullrate_data;
              }
              _this2.creditsData = {
                first_credits: data.first_credits || null,
                after_credits: data.after_credits || null,
                final_credits: data.final_credits || null
              };
              // تنظیم اطلاعات اصلی فیلم
              _this2.videoTitle = _this2.$i18n.locale === 'fa' && data.video[0].name_fa ? data.video[0].name_fa : data.video[0].name;
              _this2.posterUrl = data.cdn.lg_backdrop + data.video[0].backdrop;
              // فرض بر این است که آدرس ویدیو حاوی پارامتر nosub است
              streamUrl = data.video[0].video.includes('?') ? data.video[0].video + '&nosub=1' : data.video[0].video + '?nosub=1'; // ذخیره زمان شروع (در صورت وجود)
              _this2.startTime = data.video[0].current_time || 0;
              _context.next = 3;
              return fetch(streamUrl, {
                method: 'HEAD'
              });
            case 3:
              streamResponse = _context.sent;
              if (streamResponse.ok) {
                _this2.videoUrl = streamUrl;
                _this2.soon = false;
              } else {
                _this2.soon = true;
              }

              // تنظیم زیرنویس‌ها (در صورت موجود بودن)
              if (data.new_subtitle && Array.isArray(data.new_subtitle)) {
                _this2.tracks = data.new_subtitle.map(function (track, index) {
                  return {
                    kind: 'captions',
                    label: track.language,
                    src: track.url,
                    default: index === 0
                  };
                });
              }
              // ذخیره پیشنهاد فیلم بعدی در صورت موجود بودن
              if (data.suggestion) {
                _this2.suggestion = data.suggestion;
                _this2.suggestionBackdrop = data.cdn.md_backdrop + data.suggestion.backdrop;
              }
              _context.next = 5;
              break;
            case 4:
              _this2.showErrorAlert(response.data.data);
            case 5:
              _context.next = 7;
              break;
            case 6:
              _context.prev = 6;
              _t = _context["catch"](0);
              _this2.showErrorAlert(_t.response.data);
            case 7:
              _context.prev = 7;
              _this2.loading = false;
              return _context.finish(7);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 6, 7, 8]]);
      }))();
    },
    handlePlayerReady: function handlePlayerReady(playerInstance) {
      // اگر زمان پخش ذخیره شده باشد، پلیر را از آن نقطه آغاز می‌کنیم
      if (this.startTime && playerInstance.currentTime) {
        playerInstance.currentTime(this.startTime);
      }
      // در صورت نیاز می‌توان رویدادهای دیگری را نیز در اینجا اضافه کرد
    },
    handleTimeUpdate: function handleTimeUpdate(_ref) {
      var currentTime = _ref.currentTime,
        duration = _ref.duration,
        player = _ref.player;
      // ارسال زمان اخیر (recently) هر ۲۰۰ ثانیه
      if (Math.floor(currentTime) >= this.recentlyTime) {
        this.recentlyTime = Math.floor(currentTime) + 200;
        // ارسال درخواست به سرور جهت ذخیره زمان دیده شده
        var payload = {
          current_time: Math.floor(currentTime),
          duration_time: Math.floor(duration),
          video_id: this.$route.params.id
        };
        if (this.guest) {
          this.$axios.post('/ghost/create/watch/video/recently', payload);
        } else {
          this.$axios.post('/create/watch/video/recently', payload);
        }
      }
      // نمایش دکمه/اوورلی فیلم بعدی زمانی که زمان باقی‌مانده کمتر از 100 ثانیه است
      if (this.creditsData.final_credits && currentTime >= this.creditsData.final_credits && this.suggestion) {
        this.showNextMovie = true;
      } else if (!this.creditsData.final_credits && duration - currentTime <= 100 && this.suggestion) {
        this.showNextMovie = true;
      } else {
        this.showNextMovie = false;
      }
      return player;
    },
    handleEnded: function handleEnded() {
      // در پایان پخش فیلم، در صورت وجود پیشنهاد فیلم بعدی، به آن هدایت می‌شویم
      if (this.suggestion) {
        this.playNextVideo();
      }
    },
    playNextVideo: function playNextVideo() {
      // در صورت وجود پلیر، می‌توان آن را پاک کرد یا متوقف نمود
      // سپس به صفحه فیلم بعدی هدایت می‌شویم
      this.$router.push({
        name: 'video-show-id',
        params: {
          id: this.suggestion.id
        }
      });
    },
    goBack: function goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push({
          name: 'video-id',
          params: {
            id: this.$route.params.id
          }
        });
      }
    },
    handleSubscriptionPurchase: function handleSubscriptionPurchase() {
      // پردازش خرید اشتراک
      console.log('Subscription purchase triggered from video player');
    },
    handleAdStarted: function handleAdStarted() {
      this.adActive = true;
    },
    handleAdEnded: function handleAdEnded() {
      this.adActive = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/video/show/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var show_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/video/show/_id.vue?vue&type=style&index=0&id=609d523f&prod&scoped=true&lang=css
var _idvue_type_style_index_0_id_609d523f_prod_scoped_true_lang_css = __webpack_require__(1007);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/video/show/_id.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  show_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "609d523f",
  null
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoPlayer: __webpack_require__(737).default})


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);