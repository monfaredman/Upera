(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_b604cce6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(878);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_b604cce6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_b604cce6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/movie/show/_id.vue?vue&type=template&id=b604cce6&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "video-container"
  }, [_c('div', {
    staticClass: "hamshahri"
  }, [_c('div', {
    staticClass: "site-logo"
  }, [_c('img', {
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: __webpack_require__(470),
      expression: "require('@/assets/images/logo-mobile.svg')"
    }, {
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(470),
      "alt": "Logo",
      "loading": "lazy"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "back-button",
    on: {
      "click": _vm.goBack
    }
  }, [_c('p', {
    staticClass: "back-text"
  }, [_vm._v("بازگشت")]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-chevron-left",
    staticStyle: {
      "color": "white"
    }
  })]), _vm._v(" "), _vm.loading ? _c('div', {
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
    ref: "moviePlayer",
    staticClass: "full-screen-player vjs-fluid",
    attrs: {
      "playerid": "movie-player",
      "stream": _vm.videoUrl,
      "data-poster": _vm.posterUrl,
      "title": _vm.movieTitle,
      "vast-url": _vm.vastUrl || '',
      "tracks": _vm.tracks,
      "player-auto-play": true,
      "fullrate-data": _vm.fullrateData,
      "content-id": _vm.$route.params.id,
      "content-type": _vm.contentType,
      "credits-data": _vm.creditsData
    },
    on: {
      "credits-skipped": _vm.handleEnded,
      "ready": _vm.handlePlayerReady,
      "timeupdate": _vm.handleTimeUpdate,
      "ended": _vm.handleEnded,
      "ad-started": _vm.handleAdStarted,
      "ad-ended": _vm.handleAdEnded
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm.showNextMovie && _vm.suggestion && !_vm.adActive ? _c('div', {
    staticClass: "next-movie-overlay",
    on: {
      "click": _vm.playNextMovie
    }
  }, [_c('div', {
    staticClass: "next-movie-content"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('player.next')) + ": " + _vm._s(_vm.suggestion.name_fa))]), _vm._v(" "), _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.suggestionBackdrop,
      "alt": "Next Movie Backdrop"
    }
  })])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/movie/show/_id.vue?vue&type=template&id=b604cce6&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

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
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/movie/show/_id.vue?vue&type=script&lang=js











// Dynamic import for code splitting - VideoPlayer is heavy
var VideoPlayer = function VideoPlayer() {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 748));
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
      movieTitle: '',
      posterUrl: '',
      creditsData: {},
      videoUrl: '',
      vastUrl: '',
      tracks: [],
      loading: true,
      guest: true,
      show_report: false,
      report_problem_type: null,
      report_details: '',
      report_button: false,
      soon: false,
      // برای مدیریت گزارش، می‌توانید گزینه‌ها را از یک آرایه تعریف کنید
      reportOptions: [{
        value: 1,
        label: 'report.labeling_problem'
      }, {
        value: 2,
        label: 'report.video_problem'
      }, {
        value: 3,
        label: 'report.sound_problem'
      }, {
        value: 4,
        label: 'report.caption_problem'
      }],
      // برای زمان‌بندی بروزرسانی recently
      recentlyTime: 200,
      // برای نمایش فیلم بعدی
      showNextMovie: false,
      suggestion: null,
      suggestionBackdrop: '',
      // اگر زمان شروع پخش از قبل وجود داشته باشد
      startTime: 0,
      // Fullrate data for subscription button
      fullrateData: null,
      contentType: 'video',
      // Track VAST ad state
      adActive: false
    };
  },
  head: function head() {
    var title = this.movieTitle || 'در حال پخش';
    var appName = "آپرا" || false;
    return {
      title: "".concat(title, " | ").concat(appName),
      meta: [{
        hid: 'description',
        name: 'description',
        content: "\u062F\u0631 \u062D\u0627\u0644 \u067E\u062E\u0634 ".concat(title)
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: title
      }, {
        hid: 'og:type',
        property: 'og:type',
        content: 'video.movie'
      }].concat(Object(toConsumableArray["a" /* default */])(this.posterUrl ? [{
        hid: 'og:image',
        property: 'og:image',
        content: this.posterUrl
      }] : []), [{
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title
      }, {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'player'
      }])
    };
  },
  mounted: function mounted() {
    // Prevent scrolling on mobile
    if ( true && window.innerWidth <= 767.98) {
      document.documentElement.classList.add('video-page-mobile');
      document.body.classList.add('video-page-mobile');
    }

    // حذف کلاس‌های احتمالی قبلی
    if (this.$auth && this.$auth.loggedIn) {
      this.guest = false;
    }
    this.loadMovie();

    // Handle browser back button
    window.addEventListener('popstate', this.handlePopState);
  },
  beforeDestroy: function beforeDestroy() {
    // Restore scrolling when leaving page
    if (true) {
      document.documentElement.classList.remove('video-page-mobile');
      document.body.classList.remove('video-page-mobile');
    }

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
      if (data.show_download === 1) {
        dlsmbuttons.download = {
          text: this.$t('player.download'),
          value: 'download',
          closeModal: true
        };
      }
      if (data.show_ekran === 1) {
        dlsmbuttons.download = {
          text: this.$t('show.buy_ticket'),
          value: 'download',
          closeModal: true
        };
      }
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
              name: 'movie-id',
              params: {
                id: _this.$route.params.id
              }
            });
            break;
          case 'subscribe':
            _this.$store.dispatch('subscription/SHOW_MODAL', {
              content_type: 'movie',
              content_id: _this.$route.params.id
            });
            break;
          case 'download':
            _this.$router.push({
              name: 'movie-payment-id',
              params: {
                id: _this.$route.params.id
              },
              query: {
                force_to_buy: 1
              }
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
              name: 'movie-id',
              params: {
                id: _this.$route.params.id
              }
            });
            break;
        }
      });
    },
    loadMovie: function loadMovie() {
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
              apiUrl = _this2.guest ? "/ghost/get/watch/movie-hls/".concat(id, "/1").concat(ref ? "?ref=".concat(ref) : '') : "/get/watch/movie-hls/".concat(id, "/1").concat(ref ? "?ref=".concat(ref) : '');
              _context.next = 2;
              return _this2.$axios.get(apiUrl);
            case 2:
              response = _context.sent;
              if (!(response.status === 200)) {
                _context.next = 4;
                break;
              }
              data = response.data.data; // تنظیم اطلاعات اصلی فیلم
              _this2.movieTitle = _this2.$i18n.locale === 'fa' && data.video[0].name_fa ? data.video[0].name_fa : data.video[0].name;
              _this2.posterUrl = data.cdn.lg_backdrop + data.video[0].backdrop;
              // فرض بر این است که آدرس ویدیو حاوی پارامتر nosub است
              streamUrl = data.video[0].video.includes('?') ? data.video[0].video + '&nosub=1' : data.video[0].video + '?nosub=1'; // ذخیره زمان شروع (در صورت وجود)
              _this2.startTime = data.video[0].current_time || 0;
              _this2.creditsData = {
                first_credits: data.first_credits || null,
                after_credits: data.after_credits || null,
                final_credits: data.final_credits || null
              };
              // Store fullrate_data for subscription button
              if (data.fullrate_data) {
                _this2.fullrateData = data.fullrate_data;
              }
              _context.next = 3;
              return fetch(streamUrl, {
                method: 'HEAD'
              });
            case 3:
              streamResponse = _context.sent;
              if (streamResponse.ok) {
                _this2.videoUrl = streamUrl;
                _this2.vastUrl = data.vast;
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
          movie_id: this.$route.params.id
        };
        if (this.guest) {
          this.$axios.post('/ghost/create/watch/movie/recently', payload);
        } else {
          this.$axios.post('/create/watch/movie/recently', payload);
        }
      }
      // Show next movie overlay when in final credits or near end
      if (this.suggestion) {
        var _ref2 = this.creditsData || {},
          final_credits = _ref2.final_credits;
        var creditsStart = final_credits > 0 ? final_credits : duration * 0.97;
        if (duration > 0 && currentTime >= creditsStart) {
          this.showNextMovie = true;
        } else {
          this.showNextMovie = false;
        }
      } else {
        this.showNextMovie = false;
      }
      return player;
    },
    handleEnded: function handleEnded() {
      // در پایان پخش فیلم، در صورت وجود پیشنهاد فیلم بعدی، به آن هدایت می‌شویم
      if (this.suggestion) {
        this.playNextMovie();
      }
    },
    playNextMovie: function playNextMovie() {
      // در صورت وجود پلیر، می‌توان آن را پاک کرد یا متوقف نمود
      // سپس به صفحه فیلم بعدی هدایت می‌شویم
      this.$router.push({
        name: 'movie-show-id',
        params: {
          id: this.suggestion.id
        }
      });
    },
    handleAdStarted: function handleAdStarted() {
      this.adActive = true;
    },
    handleAdEnded: function handleAdEnded() {
      this.adActive = false;
    },
    goBack: function goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push({
          name: 'movie-id',
          params: {
            id: this.$route.params.id
          }
        });
      }
    },
    openReport: function openReport() {
      var _this$$refs$moviePlay;
      // نمایش مدال گزارش و متوقف کردن پخش
      this.show_report = true;
      var player = (_this$$refs$moviePlay = this.$refs.moviePlayer) === null || _this$$refs$moviePlay === void 0 ? void 0 : _this$$refs$moviePlay.player;
      if (player) {
        player.pause();
      }
    },
    closeReport: function closeReport() {
      var _this$$refs$moviePlay2;
      // بستن مدال گزارش و ادامه پخش
      this.show_report = false;
      var player = (_this$$refs$moviePlay2 = this.$refs.moviePlayer) === null || _this$$refs$moviePlay2 === void 0 ? void 0 : _this$$refs$moviePlay2.player;
      if (player) {
        player.play();
      }
    },
    sendReport: function sendReport() {
      var _this3 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var payload, res, _t2;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.report_button = true;
              _context2.prev = 1;
              payload = {
                type: _this3.report_problem_type,
                details: _this3.report_details,
                id: _this3.$route.params.id
              };
              _context2.next = 2;
              return _this3.$axios.post('/create/report/movie', payload);
            case 2:
              res = _context2.sent;
              if (res.data.status === 'success') {
                _this3.report_button = false;
                _this3.closeReport();
                _this3.$alertify.logPosition('top right');
                _this3.$alertify.success('Successful Send, our team will check it soon');
              }
              _context2.next = 4;
              break;
            case 3:
              _context2.prev = 3;
              _t2 = _context2["catch"](1);
              _this3.report_button = false;
              console.error('Report Error:', _t2);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 3]]);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./pages/movie/show/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var show_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/movie/show/_id.vue?vue&type=style&index=0&id=b604cce6&prod&scoped=true&lang=css
var _idvue_type_style_index_0_id_b604cce6_prod_scoped_true_lang_css = __webpack_require__(1015);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/movie/show/_id.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  show_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "b604cce6",
  null
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoPlayer: __webpack_require__(748).default})


/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);