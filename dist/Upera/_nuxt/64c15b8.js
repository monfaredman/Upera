(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_3e4c56d6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(876);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_3e4c56d6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_3e4c56d6_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/episode/show/_id.vue?vue&type=template&id=3e4c56d6&scoped=true



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
    ref: "episodePlayer",
    staticClass: "full-screen-player vjs-fluid",
    attrs: {
      "playerid": "episode-player",
      "stream": _vm.videoUrl,
      "data-poster": _vm.posterUrl,
      "title": _vm.episodeTitle,
      "vast-url": _vm.vastUrl || '',
      "tracks": _vm.tracks,
      "player-auto-play": true,
      "has-playlist": !!(_vm.seasonList && _vm.seasonList.length || _vm.currentEpisodeList && _vm.currentEpisodeList.length),
      "credits-data": _vm.creditsData,
      "fullrate-data": _vm.fullrateData,
      "content-id": _vm.$route.params.id,
      "content-type": 'series'
    },
    on: {
      "ready": _vm.handlePlayerReady,
      "timeupdate": _vm.handleTimeUpdate,
      "ended": _vm.handleEnded,
      "playlistButtonClick": _vm.togglePlaylistMenu,
      "subscription-purchase": _vm.handleSubscriptionPurchase,
      "ad-started": _vm.handleAdStarted,
      "ad-ended": _vm.handleAdEnded
    }
  }) : _vm._e()], 1), _vm._v(" "), _vm.showPlaylistMenu ? _c('div', {
    staticClass: "playlist-modal",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.closePlaylistMenu.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "playlist-modal-content"
  }, [_c('div', {
    staticClass: "playlist-modal-header"
  }, [_c('button', {
    staticClass: "close-btn",
    on: {
      "click": _vm.togglePlaylistMenu
    }
  }, [_c('svg', {
    attrs: {
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M18 6L6 18M6 6L18 18",
      "stroke": "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "modal-title"
  }, [_vm._v("انتخاب فصل و قسمت")])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "season-selector"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seasonOpened,
      expression: "seasonOpened"
    }],
    staticClass: "season-dropdown",
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.seasonOpened = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }, _vm.onSeasonChange]
    }
  }, _vm._l(_vm.seasonList, function (seasonNum) {
    return _c('option', {
      key: seasonNum,
      domProps: {
        "value": seasonNum
      }
    }, [_vm._v("\n            فصل " + _vm._s(seasonNum) + "\n          ")]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "episode-list"
  }, _vm._l(_vm.currentEpisodeList, function (ep) {
    return _c('div', {
      key: ep.id,
      staticClass: "episode-card",
      on: {
        "click": function click($event) {
          return _vm.selectEpisode(ep.id);
        }
      }
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "episode-image",
      attrs: {
        "data-src": ep.still_path || _vm.posterUrl,
        "alt": "\u0642\u0633\u0645\u062A ".concat(ep.episode_number)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "episode-info"
    }, [_c('div', {
      staticClass: "episode-title"
    }, [_c('span', [_vm._v("فصل " + _vm._s(ep.season_number))]), _vm._v(" "), _c('span', {
      staticClass: "separator"
    }, [_vm._v("•")]), _vm._v(" "), _c('span', [_vm._v("قسمت " + _vm._s(ep.episode_number))])])])]);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.showNextEpisode && _vm.suggestion && !_vm.adActive ? _c('div', {
    staticClass: "next-episode-overlay",
    on: {
      "click": _vm.playNextEpisode
    }
  }, [_c('div', {
    staticClass: "next-episode-content"
  }, [_c('p', [_vm._v(_vm._s(_vm.$t('player.play_next_episode')) + ": " + _vm._s(_vm.suggestion.name_fa))]), _vm._v(" "), _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.suggestionBackdrop,
      "alt": "Next Episode Backdrop"
    }
  })])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/episode/show/_id.vue?vue&type=template&id=3e4c56d6&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./components/VideoPlayer.vue + 4 modules
var VideoPlayer = __webpack_require__(749);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/episode/show/_id.vue?vue&type=script&lang=js












/* harmony default export */ var _idvue_type_script_lang_js = ({
  components: {
    VideoPlayer: VideoPlayer["default"]
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
      episodeTitle: '',
      posterUrl: '',
      videoUrl: '',
      vastUrl: '',
      creditsData: {},
      tracks: [],
      loading: true,
      soon: false,
      guest: true,
      series_id: 0,
      // گزارش
      show_report: false,
      report_problem_type: null,
      report_details: '',
      report_button: false,
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
      // پیشنهاد و تغییر قسمت
      suggestion: null,
      suggestionBackdrop: '',
      showNextEpisode: false,
      recentlyTime: 200,
      showPlaylistMenu: false,
      // مدیریت لیست پخش
      season: null,
      // داده‌های فصل‌ها (object به شکل: { seasonNumber: [episode, ...] })
      seasonList: [],
      // آرایه‌ای از شماره فصل‌ها
      seasonOpened: null,
      // زمان شروع پخش در صورت وجود
      startTime: 0,
      // داده‌های نرخ کامل برای دکمه اشتراک
      fullrateData: null,
      // Track VAST ad state
      adActive: false
    };
  },
  head: function head() {
    var title = this.episodeTitle || 'در حال پخش';
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
        content: 'video.episode'
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
  computed: {
    currentEpisodeList: function currentEpisodeList() {
      // اگر داده‌های فصل وجود دارد و فصل باز شده معتبر است، لیست قسمت‌های آن را برگردانیم؛ در غیر این صورت آرایه خالی برگردانیم.
      return this.season && this.season[this.seasonOpened] ? this.season[this.seasonOpened] : [];
    }
  },
  watch: {
    showPlaylistMenu: function showPlaylistMenu(val) {
      document.body.style.overflow = val ? 'hidden' : '';
    }
  },
  mounted: function mounted() {
    // Prevent scrolling on mobile
    if ( true && window.innerWidth <= 767.98) {
      document.documentElement.classList.add('video-page-mobile');
      document.body.classList.add('video-page-mobile');
    }

    // document.body.classList.remove('loaded')
    if (this.$auth && this.$auth.loggedIn) {
      this.guest = false;
    }
    this.loadEpisode();

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
              name: 'episode-id',
              params: {
                id: _this.$route.params.id
              }
            });
            break;
          case 'subscribe':
            _this.$store.dispatch('subscription/SHOW_MODAL', {
              content_type: 'episode',
              content_id: _this.$route.params.id
            });
            break;
          case 'download':
            _this.$router.push({
              name: 'episode-payment-id',
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
              name: 'episode-id',
              params: {
                id: _this.$route.params.id
              }
            });
            break;
        }
      });
    },
    loadEpisode: function loadEpisode() {
      var _this2 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var episode_id, ref, apiUrl, response, data, ep, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              episode_id = _this2.$route.params.id;
              if (episode_id) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              ref = _this2.$cookiz.get('ref') || ''; // انتخاب API مناسب بر اساس وضعیت guest
              apiUrl = _this2.guest ? "/ghost/get/watch/series" : "/get/watch/series"; // ارسال درخواست (در اینجا از POST استفاده شده است مانند نسخه‌ی قبلی)
              _context.next = 2;
              return _this2.$axios.post(apiUrl, {
                episode_id: episode_id,
                type: 'sp',
                series_id: '',
                hls: 1,
                ref: ref
              });
            case 2:
              response = _context.sent;
              if (response.data.status === 'success') {
                data = response.data.data; // ذخیره داده‌های fullrate برای دکمه اشتراک
                if (data.fullrate_data) {
                  _this2.fullrateData = data.fullrate_data;
                }

                // تنظیم اطلاعات اصلی قسمت
                ep = data.episode[0];
                _this2.episodeTitle = _this2.$i18n.locale === 'fa' && ep.name_fa ? ep.name_fa : ep.name;
                _this2.posterUrl = data.cdn.lg_backdrop + ep.backdrop;
                // فرض بر این است که لینک ویدیو دارای پارامتر nosub است
                _this2.videoUrl = ep.video.includes('?') ? ep.video + '&nosub=1' : ep.video + '?nosub=1';
                _this2.vastUrl = data.vast;
                _this2.startTime = ep.current_time || 0;
                _this2.series_id = ep.series_id || 0;

                // تنظیم زیرنویس‌ها (در صورت موجود بودن)
                if (data.new_subtitle && Array.isArray(data.new_subtitle)) {
                  _this2.tracks = data.new_subtitle.map(function (track, index) {
                    return {
                      kind: 'captions',
                      label: track.language,
                      src: track.url,
                      default: index === 0,
                      language: track.language
                    };
                  });
                }
                _this2.creditsData = {
                  first_credits: data.first_credits || null,
                  after_credits: data.after_credits || null,
                  final_credits: data.final_credits || null
                };
                // تنظیم پیشنهاد (قسمت بعدی یا فصل بعدی)
                if (data.suggestion) {
                  _this2.suggestion = data.suggestion;
                  _this2.suggestionBackdrop = data.cdn.md_backdrop + data.suggestion.backdrop;
                }

                // تنظیم لیست فصل‌ها و قسمت‌های هر فصل
                if (data.season && Object.keys(data.season).length) {
                  _this2.season = data.season;
                  _this2.seasonList = Object.keys(data.season);
                  // باز کردن فصلی که این قسمت به آن تعلق دارد
                  _this2.seasonOpened = ep.season_number.toString();
                }

                // (در صورت نیاز می‌توانید وضعیت "soon" را هم مدیریت کنید)
                _this2.soon = false;
              } else {
                _this2.showErrorAlert(response.data.data);
              }
              _context.next = 4;
              break;
            case 3:
              _context.prev = 3;
              _t = _context["catch"](0);
              _this2.showErrorAlert(_t.response.data);
            case 4:
              _context.prev = 4;
              _this2.loading = false;
              // document.body.classList.add('loaded', 'playerback')
              return _context.finish(4);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 3, 4, 5]]);
      }))();
    },
    togglePlaylistMenu: function togglePlaylistMenu() {
      // منطق باز و بسته کردن منوی انتخاب فصل و قسمت
      this.showPlaylistMenu = !this.showPlaylistMenu;
    },
    handlePlayerReady: function handlePlayerReady(playerInstance) {
      if (this.startTime && playerInstance.currentTime) {
        playerInstance.currentTime(this.startTime);
      }
    },
    handleTimeUpdate: function handleTimeUpdate(_ref) {
      var currentTime = _ref.currentTime,
        duration = _ref.duration,
        player = _ref.player;
      // (در اینجا می‌توانید منطق ارسال recently مانند نسخه قبل اضافه کنید)
      // نمایش قسمت بعدی زمانی که زمان باقی‌مانده کمتر از 100 ثانیه باشد

      if (Math.floor(currentTime) >= this.recentlyTime) {
        this.recentlyTime = Math.floor(currentTime) + 200;
        // ارسال درخواست به سرور جهت ذخیره زمان دیده شده
        var payload = {
          current_time: Math.floor(currentTime),
          duration_time: Math.floor(duration),
          episode_id: this.$route.params.id,
          series_id: this.series_id
        };
        if (this.guest) {
          this.$axios.post('/ghost/create/watch/series/recently', payload);
        } else {
          this.$axios.post('/create/watch/series/recently', payload);
        }
      }
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
      // در پایان پخش، در صورت وجود پیشنهاد، به آن هدایت شود
      if (this.suggestion) {
        this.playNextEpisode();
      }
    },
    playNextEpisode: function playNextEpisode() {
      this.$router.push({
        name: 'episode-show-id',
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
    playEpisode: function playEpisode(episodeId) {
      this.$router.push({
        name: 'episode-show-id',
        params: {
          id: episodeId
        }
      });
    },
    setSeason: function setSeason(seasonNum) {
      this.seasonOpened = seasonNum;
    },
    onSeasonChange: function onSeasonChange() {
      // اختیاری: می‌توانید اینجا منطق اضافی برای تغییر فصل اضافه کنید
    },
    selectEpisode: function selectEpisode(episodeId) {
      // بسته شدن منو
      this.togglePlaylistMenu();
      // هدایت به صفحه قسمت انتخاب شده
      this.$router.push({
        name: 'episode-show-id',
        params: {
          id: episodeId
        }
      });
    },
    goBack: function goBack() {
      if (window.history.length > 2) {
        this.$router.go(-1);
      } else {
        this.$router.push({
          name: 'episode-id',
          params: {
            id: this.$route.params.id
          }
        });
      }
    },
    handleSubscriptionPurchase: function handleSubscriptionPurchase() {
      // پردازش خرید اشتراک
      console.log('Subscription purchase triggered from episode player');
    },
    reloadPage: function reloadPage() {
      location.reload();
    },
    openReport: function openReport() {
      var _this$$refs$episodePl;
      this.show_report = true;
      var player = (_this$$refs$episodePl = this.$refs.episodePlayer) === null || _this$$refs$episodePl === void 0 ? void 0 : _this$$refs$episodePl.player;
      if (player) player.pause();
    },
    closeReport: function closeReport() {
      var _this$$refs$episodePl2;
      this.show_report = false;
      var player = (_this$$refs$episodePl2 = this.$refs.episodePlayer) === null || _this$$refs$episodePl2 === void 0 ? void 0 : _this$$refs$episodePl2.player;
      if (player) player.play();
      this.$store.commit('player/CLOSE_REPORT');
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
              return _this3.$axios.post('/create/report/episode', payload);
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
    },
    closePlaylistMenu: function closePlaylistMenu() {
      this.showPlaylistMenu = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/episode/show/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var show_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/episode/show/_id.vue?vue&type=style&index=0&id=3e4c56d6&prod&scoped=true&lang=css
var _idvue_type_style_index_0_id_3e4c56d6_prod_scoped_true_lang_css = __webpack_require__(1013);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/episode/show/_id.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  show_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "3e4c56d6",
  null
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoPlayer: __webpack_require__(749).default})


/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);