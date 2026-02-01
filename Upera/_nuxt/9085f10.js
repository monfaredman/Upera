(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[126],{

/***/ 1022:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_85d38dfe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(885);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_85d38dfe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_85d38dfe_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/movie/show/_id.vue?vue&type=template&id=85d38dfe&scoped=true
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
      value: __webpack_require__(471),
      expression: "require('@/assets/images/logo-mobile.svg')"
    }, {
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(471),
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
    key: _vm.videoUrl,
    ref: "moviePlayer",
    staticClass: "full-screen-player vjs-fluid",
    attrs: {
      "playerid": "movie-player",
      "stream": _vm.videoUrl,
      "data-poster": _vm.posterUrl,
      "title": _vm.movieTitle,
      "vast-url": _vm.vastUrl || '',
      "midroll-url": _vm.midrollUrl || '',
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
      "duration-ready": _vm.handleDurationReady,
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

// CONCATENATED MODULE: ./pages/movie/show/_id.vue?vue&type=template&id=85d38dfe&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-finite.js
var es_number_is_finite = __webpack_require__(805);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/movie/show/_id.vue?vue&type=script&lang=js














var VideoPlayer = function VideoPlayer() {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 754));
};
/* harmony default export */ var _idvue_type_script_lang_js = ({
  components: {
    VideoPlayer: VideoPlayer
  },
  layout: 'empty',
  data: function data() {
    return {
      movieTitle: '',
      posterUrl: '',
      creditsData: {},
      videoUrl: '',
      vastUrl: '',
      // Pre-roll VAST URL from API
      vastPlacementToken: '',
      // VAST placement token for midroll schedule
      midrollUrl: [],
      // Midroll schedule URLs from API
      offsetSeconds: null,
      // Midroll trigger time from API
      tracks: [],
      loading: true,
      guest: true,
      durationTime: 0,
      recentlyTime: 200,
      showNextMovie: false,
      suggestion: null,
      suggestionBackdrop: '',
      startTime: 0,
      fullrateData: null,
      soon: null,
      contentType: 'video',
      adActive: false,
      // resume internals
      // eslint-disable-next-line vue/no-reserved-keys
      _resumeApplied: false,
      // eslint-disable-next-line vue/no-reserved-keys
      _resumeTimer: null,
      // eslint-disable-next-line vue/no-reserved-keys
      _resumeStartedAt: 0
    };
  },
  watch: {
    startTime: function startTime() {
      this._resumeApplied = false;
      this.scheduleResume();
    },
    videoUrl: function videoUrl() {
      this._resumeApplied = false;
      this.scheduleResume();
    }
  },
  mounted: function mounted() {
    // Prevent scrolling on mobile
    if ( true && window.innerWidth <= 767.98) {
      document.documentElement.classList.add('video-page-mobile');
      document.body.classList.add('video-page-mobile');
    }
    if (this.$auth && this.$auth.loggedIn) this.guest = false;
    this.loadMovie();
    window.addEventListener('popstate', this.handlePopState);
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this._resumeTimer);
    if (true) {
      document.documentElement.classList.remove('video-page-mobile');
      document.body.classList.remove('video-page-mobile');
    }
    if (this.$swal && this.$swal.close) {
      try {
        this.$swal.close();
      } catch (e) {
        console.log(e);
      }
    }
    window.removeEventListener('popstate', this.handlePopState);
  },
  methods: {
    handlePopState: function handlePopState() {
      if (this.$swal && this.$swal.close) {
        try {
          this.$swal.close();
        } catch (e) {
          console.log(e);
        }
      }
    },
    loadMovie: function loadMovie() {
      var _this = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var id, ref, apiUrl, response, data, v, streamUrl, head, _error$response, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = _this.$route.params.id;
              if (id) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              ref = _this.$cookiz.get('ref') || '';
              apiUrl = _this.guest ? "/ghost/get/watch/movie-hls/".concat(id, "/1").concat(ref ? "?ref=".concat(ref) : '') : "/get/watch/movie-hls/".concat(id, "/1").concat(ref ? "?ref=".concat(ref) : '');
              _context.next = 2;
              return _this.$axios.get(apiUrl);
            case 2:
              response = _context.sent;
              if (!(response.status !== 200)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return", _this.showErrorAlert(response.data.data));
            case 3:
              data = response.data.data;
              v = data.video[0];
              _this.movieTitle = _this.$i18n.locale === 'fa' && v.name_fa ? v.name_fa : v.name;
              _this.posterUrl = data.cdn.lg_backdrop + v.backdrop;
              streamUrl = v.video.includes('?') ? "".concat(v.video, "&nosub=1") : "".concat(v.video, "?nosub=1");
              _this.startTime = v.current_time || 0;
              _this.durationTime = v.duration_time || 0;
              _this.creditsData = {
                first_credits: data.first_credits || null,
                after_credits: data.after_credits || null,
                final_credits: data.final_credits || null
              };
              if (data.fullrate_data) _this.fullrateData = data.fullrate_data;
              _context.next = 4;
              return fetch(streamUrl, {
                method: 'HEAD'
              });
            case 4:
              head = _context.sent;
              if (head.ok) {
                _this.videoUrl = streamUrl;
                _this.vastUrl = data.vast;
                _this.soon = false;
              } else {
                _this.soon = true;
              }
              if (data.new_subtitle && Array.isArray(data.new_subtitle)) {
                _this.tracks = data.new_subtitle.map(function (track, index) {
                  return {
                    kind: 'captions',
                    label: track.language,
                    src: track.url,
                    default: index === 0
                  };
                });
              }
              if (data.suggestion) {
                _this.suggestion = data.suggestion;
                _this.suggestionBackdrop = data.cdn.md_backdrop + data.suggestion.backdrop;
              }
              _context.next = 6;
              break;
            case 5:
              _context.prev = 5;
              _t = _context["catch"](0);
              _this.showErrorAlert((_error$response = _t.response) === null || _error$response === void 0 ? void 0 : _error$response.data);
            case 6:
              _context.prev = 6;
              _this.loading = false;
              return _context.finish(6);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 5, 6, 7]]);
      }))();
    },
    handlePlayerReady: function handlePlayerReady() {
      // important: resume after player exists
      this.scheduleResume();
    },
    handleAdStarted: function handleAdStarted() {
      this.adActive = true;
    },
    handleAdEnded: function handleAdEnded() {
      this.adActive = false;
      // if you ever have preroll in future
      this.scheduleResume(true);
    },
    scheduleResume: function scheduleResume() {
      var _this2 = this;
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      clearTimeout(this._resumeTimer);
      this._resumeStartedAt = Date.now();

      // small delay lets VideoPlayer assign ref.player
      this._resumeTimer = setTimeout(function () {
        return _this2.resumeOnce(force);
      }, 0);
    },
    resumeOnce: function resumeOnce() {
      var _this$$refs$moviePlay,
        _this3 = this;
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this._resumeApplied) return;
      if (this.adActive && !force) return;
      var t0 = Number(this.startTime || 0);
      if (!Number.isFinite(t0) || t0 <= 0) return;
      var player = (_this$$refs$moviePlay = this.$refs.moviePlayer) === null || _this$$refs$moviePlay === void 0 ? void 0 : _this$$refs$moviePlay.player;
      if (!player) {
        // wait up to 15s for player to be ready
        if (Date.now() - this._resumeStartedAt < 15000) {
          this._resumeTimer = setTimeout(function () {
            return _this3.resumeOnce(force);
          }, 250);
        }
        return;
      }

      // if backend sometimes sends ms (rare)
      var t = t0;
      if (this.durationTime > 0 && t > this.durationTime * 3) t = Math.floor(t / 1000);
      var range = this._getSeekableRange(player);
      var dur = this._getDuration(player);
      var canSeek = range && range.end > t + 1 || Number.isFinite(dur) && dur > 0 && dur !== Infinity;
      if (!canSeek) {
        if (Date.now() - this._resumeStartedAt < 15000) {
          this._resumeTimer = setTimeout(function () {
            return _this3.resumeOnce(force);
          }, 250);
        }
        return;
      }

      // clamp to seekable
      var safe = t;
      if (range) safe = Math.min(Math.max(t, range.start), range.end - 0.25);else safe = Math.min(t, Math.max(dur - 0.25, 0));
      this._setCurrentTime(player, safe);

      // verify (async seek)
      clearTimeout(this._resumeTimer);
      this._resumeTimer = setTimeout(function () {
        var now = _this3._getCurrentTime(player);
        if (Number.isFinite(now) && Math.abs(now - safe) < 2) {
          _this3._resumeApplied = true;
        } else if (Date.now() - _this3._resumeStartedAt < 15000) {
          _this3._resumeTimer = setTimeout(function () {
            return _this3.resumeOnce(force);
          }, 250);
        }
      }, 400);
    },
    _getVideoEl: function _getVideoEl(player) {
      if (player && player.tagName === 'VIDEO') return player;
      if (player && typeof player.el === 'function') {
        var root = player.el();
        return root ? root.querySelector('video') : null;
      }
      return null;
    },
    _getDuration: function _getDuration(player) {
      if (player && typeof player.duration === 'function') return player.duration();
      var el = this._getVideoEl(player);
      return el ? el.duration : NaN;
    },
    _getSeekableRange: function _getSeekableRange(player) {
      if (player && typeof player.seekable === 'function') {
        var r = player.seekable();
        if (r && r.length) return {
          start: r.start(0),
          end: r.end(r.length - 1)
        };
      }
      var el = this._getVideoEl(player);
      if (el && el.seekable && el.seekable.length) {
        return {
          start: el.seekable.start(0),
          end: el.seekable.end(el.seekable.length - 1)
        };
      }
      return null;
    },
    _setCurrentTime: function _setCurrentTime(player, t) {
      if (player && typeof player.currentTime === 'function') return player.currentTime(t);
      var el = this._getVideoEl(player) || player;
      if (el && typeof el.currentTime === 'number') el.currentTime = t;
    },
    _getCurrentTime: function _getCurrentTime(player) {
      if (player && typeof player.currentTime === 'function') return player.currentTime();
      var el = this._getVideoEl(player) || player;
      return el && typeof el.currentTime === 'number' ? el.currentTime : NaN;
    },
    showErrorAlert: function showErrorAlert(data) {
      var _this4 = this;
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
            window.history.length > 2 ? _this4.$router.go(-1) : _this4.$router.push({
              name: 'movie-id',
              params: {
                id: _this4.$route.params.id
              }
            });
            break;
          case 'subscribe':
            _this4.$store.dispatch('subscription/SHOW_MODAL', {
              content_type: 'movie',
              content_id: _this4.$route.params.id
            });
            break;
          case 'download':
            _this4.$router.push({
              name: 'movie-payment-id',
              params: {
                id: _this4.$route.params.id
              },
              query: {
                force_to_buy: 1
              }
            });
            break;
          case 'login':
            _this4.$store.dispatch('login/SHOW_MODAL', {
              premessage: null,
              premobile: null,
              preredirect: null,
              prerefresh: false
            });
            break;
          default:
            window.history.length > 2 ? _this4.$router.go(-1) : _this4.$router.push({
              name: 'movie-id',
              params: {
                id: _this4.$route.params.id
              }
            });
            break;
        }
      });
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
      var _this$$refs$moviePlay2;
      // نمایش مدال گزارش و متوقف کردن پخش
      this.show_report = true;
      var player = (_this$$refs$moviePlay2 = this.$refs.moviePlayer) === null || _this$$refs$moviePlay2 === void 0 ? void 0 : _this$$refs$moviePlay2.player;
      if (player) {
        player.pause();
      }
    },
    closeReport: function closeReport() {
      var _this$$refs$moviePlay3;
      // بستن مدال گزارش و ادامه پخش
      this.show_report = false;
      var player = (_this$$refs$moviePlay3 = this.$refs.moviePlayer) === null || _this$$refs$moviePlay3 === void 0 ? void 0 : _this$$refs$moviePlay3.player;
      if (player) {
        player.play();
      }
    },
    sendReport: function sendReport() {
      var _this5 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var payload, res, _t2;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this5.report_button = true;
              _context2.prev = 1;
              payload = {
                type: _this5.report_problem_type,
                details: _this5.report_details,
                id: _this5.$route.params.id
              };
              _context2.next = 2;
              return _this5.$axios.post('/create/report/movie', payload);
            case 2:
              res = _context2.sent;
              if (res.data.status === 'success') {
                _this5.report_button = false;
                _this5.closeReport();
                _this5.$alertify.logPosition('top right');
                _this5.$alertify.success('Successful Send, our team will check it soon');
              }
              _context2.next = 4;
              break;
            case 3:
              _context2.prev = 3;
              _t2 = _context2["catch"](1);
              _this5.report_button = false;
              console.error('Report Error:', _t2);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 3]]);
      }))();
    },
    _getHtmlVideoEl: function _getHtmlVideoEl(player) {
      // if player is already a <video>
      if (player && player.tagName === 'VIDEO') return player;

      // video.js player: player.el().querySelector('video')
      if (player && typeof player.el === 'function') {
        var root = player.el();
        return root ? root.querySelector('video') : null;
      }
      return null;
    },
    _getReadyState: function _getReadyState(player) {
      // video.js: readyState()
      if (player && typeof player.readyState === 'function') return player.readyState();
      // html video: readyState number
      if (player && typeof player.readyState === 'number') return player.readyState;
      var el = this._getHtmlVideoEl(player);
      return el && typeof el.readyState === 'number' ? el.readyState : 0;
    },
    _bindResumeEvents: function _bindResumeEvents(player) {
      var _this6 = this;
      var tick = function tick() {
        return _this6.trySeekToStartTime(true);
      };

      // video.js
      if (player && typeof player.on === 'function') {
        player.on('loadedmetadata', tick);
        player.on('durationchange', tick);
        player.on('canplay', tick);
        player.on('play', tick);
        player.on('playing', tick);
        player.on('timeupdate', tick);
        // VHS sometimes updates seekable later
        player.on('seekablechanged', tick);
      }

      // html5 video element
      var el = this._getVideoEl(player);
      if (el) {
        el.addEventListener('loadedmetadata', tick);
        el.addEventListener('durationchange', tick);
        el.addEventListener('canplay', tick);
        el.addEventListener('play', tick);
        el.addEventListener('playing', tick);
        el.addEventListener('timeupdate', tick);
      }
    },
    trySeekToStartTime: function trySeekToStartTime() {
      var _this$$refs$moviePlay4,
        _this$$refs$moviePlay5,
        _this7 = this;
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.dlog('trySeekToStartTime()', {
        startTime: this.startTime,
        adActive: this.adActive,
        seekApplied: this._seekApplied,
        snap: this.snapshotPlayer(this._player || ((_this$$refs$moviePlay4 = this.$refs.moviePlayer) === null || _this$$refs$moviePlay4 === void 0 ? void 0 : _this$$refs$moviePlay4.player))
      });
      var player = this._player || ((_this$$refs$moviePlay5 = this.$refs.moviePlayer) === null || _this$$refs$moviePlay5 === void 0 ? void 0 : _this$$refs$moviePlay5.player);
      if (!player || this._seekApplied) return;
      if (this.adActive && !force) return;

      // stop after 60s so we don't loop forever
      if (Date.now() - this._seekStartedAt > 60000) return;
      var t = Number(this.startTime || 0);
      if (!Number.isFinite(t) || t <= 0) return;

      // if backend sometimes sends ms (rare), auto-fix using durationTime
      if (this.durationTime > 0 && t > this.durationTime * 3) t = Math.floor(t / 1000);
      var range = this._getSeekableRange(player);
      var dur = this._getDuration(player);

      // ✅ KEY: wait until seekable end is beyond desired time (best for HLS)
      var canSeekToT = range && range.end >= t + 1 || Number.isFinite(dur) && dur > 0 && dur !== Infinity;
      if (!canSeekToT) {
        this._scheduleRetry();
        return;
      }

      // clamp to seekable range if we have it
      var safe = t;
      if (range) safe = Math.min(Math.max(t, range.start), range.end - 0.25);else safe = Math.min(t, Math.max(dur - 0.25, 0));

      // apply seek (video.js or html5)
      this._setCurrentTime(player, safe);

      // verify after a moment (seeking is async)
      clearTimeout(this._seekTimer);
      this._seekTimer = setTimeout(function () {
        var now = _this7._getCurrentTime(player);
        if (Number.isFinite(now) && Math.abs(now - safe) < 2) {
          _this7._seekApplied = true;
        } else {
          _this7._scheduleRetry();
        }
      }, 400);
      this.dlog('after seek attempt', {
        target: safe,
        snap: this.snapshotPlayer(player)
      });
    },
    _scheduleRetry: function _scheduleRetry() {
      var _this8 = this;
      clearTimeout(this._seekTimer);
      this._seekTimer = setTimeout(function () {
        return _this8.trySeekToStartTime(true);
      }, 500);
    },
    getVideoEl: function getVideoEl(player) {
      if (!player) return null;
      if (player.tagName === 'VIDEO') return player;
      if (typeof player.el === 'function') {
        var root = player.el();
        return root ? root.querySelector('video') : null;
      }
      return null;
    },
    snapshotPlayer: function snapshotPlayer(player) {
      var el = this.getVideoEl(player);

      // video.js methods are functions; HTML video uses properties
      var snap = {
        // payload shape
        payloadType: Object(esm_typeof["a" /* default */])(player),
        isVideoEl: !!(player && player.tagName === 'VIDEO'),
        hasOn: !!(player && typeof player.on === 'function'),
        hasOne: !!(player && typeof player.one === 'function'),
        hasElFn: !!(player && typeof player.el === 'function'),
        // currentTime signature
        player_currentTime_type: player ? Object(esm_typeof["a" /* default */])(player.currentTime) : 'n/a',
        el_currentTime_type: el ? Object(esm_typeof["a" /* default */])(el.currentTime) : 'n/a',
        // duration signature/value
        player_duration_type: player ? Object(esm_typeof["a" /* default */])(player.duration) : 'n/a',
        el_duration_type: el ? Object(esm_typeof["a" /* default */])(el.duration) : 'n/a',
        // readyState signature/value
        player_readyState_type: player ? Object(esm_typeof["a" /* default */])(player.readyState) : 'n/a',
        el_readyState: el ? el.readyState : null,
        // src
        player_currentSrc: player && typeof player.currentSrc === 'function' ? player.currentSrc() : null,
        el_currentSrc: el ? el.currentSrc : null,
        // errors
        vjs_error: player && typeof player.error === 'function' ? player.error() : null,
        el_error: el ? el.error : null
      };

      // seekable range
      try {
        var r = player && typeof player.seekable === 'function' ? player.seekable() : el ? el.seekable : null;
        if (r && r.length) {
          snap.seekable_len = r.length;
          snap.seekable_start = r.start(0);
          snap.seekable_end = r.end(r.length - 1);
        } else {
          snap.seekable_len = 0;
          snap.seekable_start = null;
          snap.seekable_end = null;
        }
      } catch (e) {
        snap.seekable_err = String((e === null || e === void 0 ? void 0 : e.message) || e);
      }

      // duration value
      try {
        snap.duration_val = player && typeof player.duration === 'function' ? player.duration() : el ? el.duration : null;
      } catch (e) {
        snap.duration_err = String((e === null || e === void 0 ? void 0 : e.message) || e);
      }

      // current time value
      try {
        snap.currentTime_val = player && typeof player.currentTime === 'function' ? player.currentTime() : el ? el.currentTime : null;
      } catch (e) {
        snap.currentTime_err = String((e === null || e === void 0 ? void 0 : e.message) || e);
      }
      return snap;
    },
    bindDebugEvents: function bindDebugEvents(player) {
      var _this9 = this;
      if (!this.debugPlayer || !player) return;
      var tick = function tick(label) {
        // throttle spam
        var now = Date.now();
        if (now - _this9._debugLastTick < 700) return;
        _this9._debugLastTick = now;
        _this9.dlog(label, _this9.snapshotPlayer(player));
      };

      // video.js events
      if (typeof player.on === 'function') {
        ;
        ['loadedmetadata', 'durationchange', 'canplay', 'loadeddata', 'play', 'playing', 'timeupdate', 'seeking', 'seeked', 'waiting', 'stalled', 'error'].forEach(function (evt) {
          return player.on(evt, function () {
            return tick("vjs:".concat(evt));
          });
        });
      }

      // html video events
      var el = this.getVideoEl(player);
      if (el) {
        ;
        ['loadedmetadata', 'durationchange', 'canplay', 'loadeddata', 'play', 'playing', 'timeupdate', 'seeking', 'seeked', 'waiting', 'stalled', 'error'].forEach(function (evt) {
          return el.addEventListener(evt, function () {
            return tick("html:".concat(evt));
          });
        });
      }

      // initial snapshot
      this.dlog('bindDebugEvents:init', this.snapshotPlayer(player));
    },
    dlog: function dlog() {
      var _console;
      if (!this.debugPlayer) return;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_console = console).log.apply(_console, ['[MOVIE-RESUME]'].concat(args));
    },
    getVjsOrEl: function getVjsOrEl() {
      var _this$$refs$moviePlay6;
      // Prefer ref player because your logs show payload can be undefined
      var p = ((_this$$refs$moviePlay6 = this.$refs.moviePlayer) === null || _this$$refs$moviePlay6 === void 0 ? void 0 : _this$$refs$moviePlay6.player) || this._player;
      if (!p) return {
        player: null,
        el: null
      };

      // If it's video.js player, it has el()
      var el = p && typeof p.el === 'function' && p.el() && p.el().querySelector('video') || (p && p.tagName === 'VIDEO' ? p : null);
      return {
        player: p,
        el: el
      };
    },
    snapshot: function snapshot() {
      var _this$getVjsOrEl = this.getVjsOrEl(),
        player = _this$getVjsOrEl.player,
        el = _this$getVjsOrEl.el;
      var seekStart = null,
        seekEnd = null,
        seekLen = 0;
      try {
        var r = player && typeof player.seekable === 'function' ? player.seekable() : el && el.seekable ? el.seekable : null;
        if (r && r.length) {
          seekLen = r.length;
          seekStart = r.start(0);
          seekEnd = r.end(r.length - 1);
        }
      } catch (e) {
        console.log(e);
      }
      var dur = null;
      try {
        dur = player && typeof player.duration === 'function' ? player.duration() : el ? el.duration : null;
      } catch (e) {
        console.log(e);
      }
      var ct = null;
      try {
        ct = player && typeof player.currentTime === 'function' ? player.currentTime() : el ? el.currentTime : null;
      } catch (e) {
        console.log(e);
      }
      return {
        hasPlayer: !!player,
        hasEl: !!el,
        player_currentTime_type: player ? Object(esm_typeof["a" /* default */])(player.currentTime) : 'n/a',
        el_currentTime_type: el ? Object(esm_typeof["a" /* default */])(el.currentTime) : 'n/a',
        currentTime: ct,
        duration: dur,
        seekLen: seekLen,
        seekStart: seekStart,
        seekEnd: seekEnd,
        currentSrc: player && typeof player.currentSrc === 'function' ? player.currentSrc() : el ? el.currentSrc : null
      };
    },
    ensurePlayerThenResume: function ensurePlayerThenResume(reason) {
      var _this0 = this;
      // start polling until ref.player exists + has video element
      clearInterval(this._pollTimer);
      this._pollStartedAt = Date.now();
      this.dlog('ensurePlayerThenResume start:', reason, 'startTime=', this.startTime);
      this._pollTimer = setInterval(function () {
        var snap = _this0.snapshot();
        _this0.dlog('POLL', reason, snap);

        // stop after 15 seconds
        if (Date.now() - _this0._pollStartedAt > 15000) {
          _this0.dlog('POLL STOP (timeout)');
          clearInterval(_this0._pollTimer);
          return;
        }
        if (!snap.hasPlayer) return;

        // If autoplay is blocked, resume must happen after play starts.
        // We still try, but also bind play events once.
        _this0.bindPlayResumeOnce();

        // If we already resumed, stop polling
        if (_this0._seekApplied) {
          clearInterval(_this0._pollTimer);
          return;
        }

        // Try resume periodically
        _this0.tryResume('poll');
      }, 500);
    },
    bindPlayResumeOnce: function bindPlayResumeOnce() {
      var _this1 = this;
      if (this._playResumeBound) return;
      var _this$getVjsOrEl2 = this.getVjsOrEl(),
        player = _this$getVjsOrEl2.player,
        el = _this$getVjsOrEl2.el;
      if (!player && !el) return;
      this._playResumeBound = true;
      var handler = function handler() {
        _this1.dlog('PLAY/PLAYING detected -> tryResume');
        _this1.tryResume('play');
      };

      // video.js
      if (player && typeof player.on === 'function') {
        player.on('play', handler);
        player.on('playing', handler);
        player.on('canplay', handler);
      }

      // html5
      if (el) {
        el.addEventListener('play', handler);
        el.addEventListener('playing', handler);
        el.addEventListener('canplay', handler);
      }
    },
    tryResume: function tryResume(from) {
      var _this10 = this;
      var snapBefore = this.snapshot();
      this.dlog('tryResume from=', from, 'before=', snapBefore);
      if (this._seekApplied) return;
      var t = Number(this.startTime || 0);
      if (!Number.isFinite(t) || t <= 0) return;
      var _this$getVjsOrEl3 = this.getVjsOrEl(),
        player = _this$getVjsOrEl3.player,
        el = _this$getVjsOrEl3.el;
      if (!player && !el) return;

      // Need seekable range for HLS VOD; duration might be null/Infinity early.
      var seekEnd = snapBefore.seekEnd;
      var canSeek = Number.isFinite(seekEnd) && seekEnd > t + 1;
      if (!canSeek) {
        this.dlog('Not seekable yet for t=', t, 'seekEnd=', seekEnd);
        return;
      }

      // clamp
      var safe = Math.max(snapBefore.seekStart || 0, Math.min(t, seekEnd - 0.25));

      // set time (video.js vs html5)
      try {
        if (player && typeof player.currentTime === 'function') player.currentTime(safe);else if (el) el.currentTime = safe;
      } catch (e) {
        this.dlog('seek error:', e);
        return;
      }
      setTimeout(function () {
        var snapAfter = _this10.snapshot();
        _this10.dlog('after seek attempt target=', safe, 'after=', snapAfter);
        if (Number.isFinite(snapAfter.currentTime) && Math.abs(snapAfter.currentTime - safe) < 2) {
          _this10._seekApplied = true;
          _this10.dlog('✅ RESUME APPLIED');
          clearInterval(_this10._pollTimer);
        }
      }, 500);
    }
  }
});
// CONCATENATED MODULE: ./pages/movie/show/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var show_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/movie/show/_id.vue?vue&type=style&index=0&id=85d38dfe&prod&scoped=true&lang=css
var _idvue_type_style_index_0_id_85d38dfe_prod_scoped_true_lang_css = __webpack_require__(1022);

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
  "85d38dfe",
  null
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoPlayer: __webpack_require__(754).default})


/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);