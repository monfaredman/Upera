(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103,38,39,40,41,42],{

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/callback.vue?vue&type=template&id=340bff02&scoped=true


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.testMode ? _c('div', {
    staticClass: "test-mode-banner"
  }, [_c('div', {
    staticClass: "test-mode-header"
  }, [_vm._v("\n      🧪 TEST MODE ACTIVE\n      "), _c('button', {
    staticClass: "test-mode-toggle-btn",
    on: {
      "click": _vm.toggleTestMode
    }
  }, [_vm._v("\n        Exit Test Mode\n      ")])]), _vm._v(" "), _c('div', {
    staticClass: "test-mode-controls"
  }, [_c('label', [_vm._v("Load Scenario:")]), _vm._v(" "), _c('select', {
    staticClass: "scenario-select",
    on: {
      "change": function change($event) {
        return _vm.loadMockScenario($event.target.value);
      }
    }
  }, _vm._l(_vm.mockScenarios, function (scenario, key) {
    return _c('option', {
      key: key,
      domProps: {
        "value": key
      }
    }, [_vm._v("\n          " + _vm._s(key) + " - " + _vm._s(scenario.purchaseType) + " (" + _vm._s(scenario.files ? scenario.files.length + ' files' : 'no files') + _vm._s(!scenario.success ? ' - ERROR' : '') + ")\n        ")]);
  }), 0), _vm._v(" "), _c('button', {
    staticClass: "test-mode-btn",
    on: {
      "click": _vm.listMockScenarios
    }
  }, [_vm._v("\n        List All Scenarios\n      ")]), _vm._v(" "), _c('label', {
    staticStyle: {
      "margin-left": "12px"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.testModeReactNative,
      expression: "testModeReactNative"
    }],
    staticStyle: {
      "margin-right": "6px"
    },
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.testModeReactNative) ? _vm._i(_vm.testModeReactNative, null) > -1 : _vm.testModeReactNative
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.testModeReactNative,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.testModeReactNative = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.testModeReactNative = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.testModeReactNative = $$c;
        }
      }, _vm.toggleReactNative]
    }
  }), _vm._v("\n        React Native (reactnative=1)\n      ")])])]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "download-page"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "callback-page-content"
  }, [_c('div', {
    staticClass: "download"
  }, [_c('div', {
    staticClass: "download-links"
  }, [_c('div', {
    staticClass: "download-links-body download-links-body-header",
    class: {
      'download-links-0': _vm.divcount == 0,
      'download-links-2': _vm.divcount == 2,
      'download-links-3': _vm.divcount == 3
    }
  }, [_c('div', {
    staticClass: "download-links-items"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_vm.loading || _vm.buyloading ? _c('svg', {
    staticClass: "svg-loader",
    attrs: {
      "id": "L9",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "viewBox": "0 0 100 100",
      "enable-background": "new 0 0 0 0",
      "xml:space": "preserve"
    }
  }, [_c('path', {
    attrs: {
      "data-v-28f0b4cb": "",
      "fill": "#373737",
      "d": "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
      "transform": "rotate(109.69 50 50)"
    }
  }, [_c('animateTransform', {
    attrs: {
      "data-v-28f0b4cb": "",
      "attributeName": "transform",
      "attributeType": "XML",
      "type": "rotate",
      "dur": "1s",
      "from": "0 50 50",
      "to": "360 50 50",
      "repeatCount": "indefinite"
    }
  })], 1)]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "download-links-body"
  }, [_c('div', {
    staticClass: "download-links-inner"
  }, [_vm.loading || _vm.buyloading ? _c('loading-spinner', {
    attrs: {
      "message": "در حال بررسی"
    }
  }) : _vm.success ? _c('div', [_c('PaymentSuccessContent', {
    attrs: {
      "files": _vm.files,
      "purchase-type": _vm.$route.query.purchase || 'download',
      "is-logged-in": _vm.$auth.loggedIn,
      "checkuser": _vm.checkuser,
      "ref-num": _vm.ref_num,
      "wallet-amount": _vm.walletDetail && _vm.walletDetail.added_amount ? _vm.walletDetail.added_amount : null,
      "wallet-balance": _vm.walletDetail && _vm.walletDetail.current_balance ? _vm.walletDetail.current_balance : _vm.my_credit,
      "subscription-days": _vm.subscription_days
    },
    on: {
      "watch": function watch($event) {
        return _vm.EKRAN($event);
      },
      "copy": function copy($event) {
        return _vm.COPY($event);
      },
      "show-direct-debit": function showDirectDebit($event) {
        return _vm.SHOW_MODAL_DIRECTDEBIT();
      },
      "check-payment": function checkPayment($event) {
        return _vm.CHECK(1);
      }
    }
  })], 1) : _c('div', [_vm.checkagain ? _c('PaymentErrorContent', {
    attrs: {
      "error-type": "checkagain",
      "ref-num": _vm.ref_num,
      "message": _vm.message,
      "show-refund-messages": _vm.showRefundMessage
    }
  }) : _vm.show_login == 1 ? _c('payment-error-content', {
    attrs: {
      "error-type": "show_login",
      "ref-num": _vm.ref_num,
      "message": _vm.message
    }
  }) : _vm.show_login == 0 ? _c('payment-error-content', {
    attrs: {
      "error-type": "default",
      "ref-num": _vm.ref_num,
      "message": _vm.message
    }
  }) : _vm._e(), _vm._v(" "), _c('support-contact-section')], 1)], 1)]), _vm._v(" "), !_vm.loading && !_vm.buyloading ? _c('CallbackFooter', {
    attrs: {
      "files": _vm.files,
      "success": _vm.success,
      "checkagain": _vm.checkagain,
      "show-login": _vm.show_login == 1,
      "backtoapp": _vm.backtoapp,
      "title": _vm.title,
      "divcount": _vm.divcount,
      "purchase-type": _vm.$route.query.purchase || 'download',
      "is-logged-in": _vm.$auth.loggedIn
    },
    on: {
      "check-payment": function checkPayment($event) {
        return _vm.CHECK(1);
      },
      "retry-payment": function retryPayment($event) {
        return _vm.BUY();
      },
      "login": function login($event) {
        return _vm.Login();
      },
      "copy": function copy($event) {
        return _vm.COPY($event);
      },
      "return-to-content": function returnToContent($event) {
        return _vm.Push2($event.id, $event.type);
      },
      "watch": function watch($event) {
        return _vm.EKRAN($event);
      },
      "show-direct-debit": function showDirectDebit($event) {
        return _vm.SHOW_MODAL_DIRECTDEBIT();
      }
    }
  }) : _vm._e()], 1)])])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/callback.vue?vue&type=template&id=340bff02&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(193);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.link.js
var es_string_link = __webpack_require__(317);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(39);

// EXTERNAL MODULE: ./components/callback/LoadingSpinner.vue + 4 modules
var LoadingSpinner = __webpack_require__(905);

// EXTERNAL MODULE: ./components/callback/PaymentSuccessContent.vue + 4 modules
var PaymentSuccessContent = __webpack_require__(906);

// EXTERNAL MODULE: ./components/callback/PaymentErrorContent.vue + 4 modules
var PaymentErrorContent = __webpack_require__(907);

// EXTERNAL MODULE: ./components/callback/SupportContactSection.vue + 4 modules
var SupportContactSection = __webpack_require__(908);

// EXTERNAL MODULE: ./components/callback/CallbackFooter.vue + 4 modules
var CallbackFooter = __webpack_require__(838);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/callback.vue?vue&type=script&lang=js

















function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






/* harmony default export */ var callbackvue_type_script_lang_js = ({
  components: {
    LoadingSpinner: LoadingSpinner["default"],
    PaymentSuccessContent: PaymentSuccessContent["default"],
    PaymentErrorContent: PaymentErrorContent["default"],
    SupportContactSection: SupportContactSection["default"],
    CallbackFooter: CallbackFooter["default"]
  },
  layout: 'nofooter',
  data: function data() {
    return {
      castShow: null,
      walletDetail: null,
      method: 'saman',
      login: 0,
      message: null,
      buyloading: false,
      loading: false,
      disable_button: false,
      backtoapp: false,
      checkagain: false,
      divcount: 0,
      success: false,
      files: null,
      ref_num: 0,
      showRefundMessage: false,
      show_login: 0,
      title: null,
      wallet_amount: null,
      wallet_balance: null,
      subscription_days: null,
      // TEST MODE: Set to true to use mock data for testing/redesign
      testMode: false,
      testModeReactNative: false,
      // Mock data for different scenarios
      mockScenarios: {
        // Scenario 1: Single file download (matching real API structure)
        singleFileDownload: {
          success: true,
          purchaseType: 'download',
          files: [{
            id: 3024942,
            m_id: '828193b0-f4f2-11ef-b260-6b4574883f9f',
            title: 'قیف',
            poster: 'https://thumb.upera.shop/s3/posters/eMUobcb7reFy8BBgveWt.jpg',
            type: 'movie',
            presale: false,
            presale_date: '11 دی',
            screening: {
              ekran: 0,
              ekran_period_end: null,
              ekran_hour: 0,
              ekran_owned: 0,
              owned_period_end: null,
              ekran_id: 0
            },
            stream_link: 'https://s800.upera.tv/hls.m3u8?id=828193b0-f4f2-11ef-b260-6b4574883f9f&resolution[360]=RCSiKxdLkMEr1f4yuarZ&resolution[480]=evSn3829HnBPWqlXm6oO&resolution[720]=0NQ3tUuVakEiev9VTOOm&resolution[1080]=K8EF1gurSoygIkpCRnv6&md5=K9BGq3YQejRC_6e1tfLIAw&expires=1762799529',
            qualities: [{
              quality: '480p',
              size: '',
              download_url: 'https://dl.upera.shop/3024942/wqjz6911e9597c3b5/Ghif-480.mp4'
            }]
          }]
        },
        // Scenario 2: Multiple files download (matching real API structure)
        multipleFilesDownload: {
          success: true,
          purchaseType: 'download',
          files: [{
            id: 3059192,
            m_id: '6dbe3540-b8d0-11f0-b284-8d7812ae3350',
            title: 'قسمت هفدهم از یاد رفته',
            poster: 'https://thumb.upera.shop/s3/posters/tVUt1SwMGEth138YeqbM.jpg',
            type: 'episode',
            presale: false,
            presale_date: '11 دی',
            screening: {
              ekran: 0,
              ekran_period_end: null,
              ekran_hour: 0,
              ekran_owned: 0,
              owned_period_end: null,
              ekran_id: 0
            },
            stream_link: null,
            qualities: [{
              quality: '480p',
              size: '',
              download_url: 'https://dl.upera.shop/3059192/426g6911ec287f891/TheForgotten_S1E17-480.mp4'
            }]
          }, {
            id: 3047391,
            m_id: '87de2750-72a8-11f0-9bba-91b158394961',
            title: 'هفت بهار نارنج',
            poster: 'https://thumb.upera.shop/s3/posters/4CbsTo4aNewrwYTARn6Q.jpg',
            type: 'movie',
            presale: false,
            presale_date: '11 دی',
            screening: {
              ekran: 0,
              ekran_period_end: null,
              ekran_hour: 0,
              ekran_owned: 0,
              owned_period_end: null,
              ekran_id: 0
            },
            stream_link: 'https://s13000.upera.tv/hls.m3u8?id=87de2750-72a8-11f0-9bba-91b158394961&resolution[360]=DNFGKp4mf40z20ndUC9B&resolution[480]=wRkLeYbIZvayZ7AvHTCP&resolution[720]=jjI7dEQT4vYIPmIBgPsX&resolution[1080]=7EKVVAMdg484Ukq3Hwdn&md5=DDGugp_1-Uaz36XT6cO22w&expires=1762800249',
            qualities: [{
              quality: '480p',
              size: '',
              download_url: 'https://dl.upera.shop/3047391/zenj6911ec28d0503/SevenCitrusAurantium-480.mp4'
            }]
          }]
        },
        // Scenario 3: Presale with ekran screening
        presaleEkran: {
          success: true,
          purchaseType: 'download',
          files: [{
            id: 9999991,
            m_id: 'presale-ekran-movie-id',
            title: 'فیلم پیش فروش - اکران آنلاین',
            poster: 'https://thumb.upera.shop/s3/posters/example.jpg',
            type: 'movie',
            presale: true,
            presale_date: '1404/08/15',
            screening: {
              ekran: 1,
              ekran_period_end: null,
              ekran_hour: 48,
              ekran_owned: 0,
              owned_period_end: null,
              ekran_id: 123
            },
            stream_link: 'https://example.com/stream.m3u8',
            qualities: [{
              quality: '1080p',
              size: '3 GB',
              download_url: 'https://example.com/presale-movie.mp4'
            }]
          }]
        },
        // Scenario 4: Ekran only (no presale)
        ekranOnly: {
          success: true,
          purchaseType: 'download',
          files: [{
            id: 9999992,
            m_id: 'ekran-only-movie-id',
            title: 'فیلم اکران آنلاین',
            poster: 'https://thumb.upera.shop/s3/posters/example2.jpg',
            type: 'movie',
            presale: false,
            presale_date: null,
            screening: {
              ekran: 1,
              ekran_period_end: null,
              ekran_hour: 72,
              ekran_owned: 0,
              owned_period_end: null,
              ekran_id: 456
            },
            stream_link: 'https://example.com/stream2.m3u8',
            qualities: [{
              quality: '1080p',
              size: '2.8 GB',
              download_url: 'https://example.com/ekran-movie.mp4'
            }]
          }]
        },
        // Scenario 5: Subscription success (logged in)
        subscriptionLoggedIn: {
          success: true,
          purchaseType: 'subscription',
          files: null
        },
        // Scenario 6: Subscription success (not logged in)
        subscriptionGuest: {
          success: true,
          purchaseType: 'subscription',
          files: null
        },
        // Scenario 7: Wallet charge success
        walletCharge: {
          success: true,
          purchaseType: 'wallet',
          files: null
        },
        // Scenario 8: Direct debit activation
        directDebit: {
          success: true,
          purchaseType: 'directdebit',
          files: null
        },
        // ========== ERROR SCENARIOS ==========
        // Scenario 9: Payment error - check again
        errorCheckAgain: {
          success: false,
          purchaseType: 'download',
          files: null,
          errorType: 'checkagain',
          message: 'پرداخت ناموفق بود',
          refNum: '987654321'
        },
        // Scenario 10: Payment error - show login
        errorShowLogin: {
          success: false,
          purchaseType: 'subscription',
          files: null,
          errorType: 'show_login',
          message: 'برای استفاده باید وارد شوید',
          refNum: '123789456'
        },
        // Scenario 11: Payment error - default
        errorDefault: {
          success: false,
          purchaseType: 'wallet',
          files: null,
          errorType: 'default',
          message: 'خطا در انجام تراکنش',
          refNum: '456123789'
        }
      }
    };
  },
  head: function head() {
    return {
      bodyAttrs: {
        class: 'callback'
      },
      title: 'پرداخت'
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex_esm["c" /* mapGetters */])({
    cart: 'download/cart',
    my_credit: 'my_credit'
  })), {}, {
    checkuser: function checkuser() {
      return this.$auth.loggedIn ? this.$auth.user : null;
    }
  }),
  watch: {
    success: function success(val) {
      var _this = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.$route.query.purchase == 'subscription' && _this.$auth.loggedIn && val === true)) {
                _context.next = 2;
                break;
              }
              _context.next = 1;
              return _this.$auth.fetchUser();
            case 1:
              _this.$store.dispatch('SPA_INIT');
            case 2:
              if (val && _this.purchaseType !== 'wallet' && _this.$route.query.purchase == 'download') {
                _this.toggleBasket();
              }
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    this.divcount = 0;
    if (window.location.host == 'app.upera.tv' || window.location.host == 'app.pofefilm.tv') {
      this.backtoapp = true;
      this.divcount = 1;
    }

    // ==================== TEST MODE SETUP ====================
    // Expose test functions to window for easy console access
    window.toggleTestMode = this.toggleTestMode.bind(this);
    window.loadMockScenario = this.loadMockScenario.bind(this);
    window.listMockScenarios = this.listMockScenarios.bind(this);

    // Auto-enable test mode if ?test=true or ?testMode=true in URL
    if (this.$route.query.test === 'true' || this.$route.query.testMode === 'true') {
      this.testMode = true;
      this.testModeReactNative = this.$route.query.reactnative === '1';
      var scenario = this.$route.query.scenario || 'singleFileDownload';
      this.loadMockScenario(scenario);
      console.log('🧪 Auto-enabled test mode from URL parameter');
      console.log('💡 Type window.listMockScenarios() to see all scenarios');
      console.log('💡 Type window.loadMockScenario("scenarioName") to switch');
      console.log('💡 Type window.toggleTestMode() to disable test mode');
    } else {
      // Normal production flow
      this.CHECK(0);
    }
    // ==================== END TEST MODE SETUP ====================

    this.$store.dispatch('download/GET_CART');
    window.addEventListener('resize', this.Resize);
    this.Resize('e');
    document.body.classList.add('loaded');
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.Resize);
  },
  methods: {
    toggleBasket: function toggleBasket() {
      if (true) {
        localStorage.removeItem('_cart');
      }
    },
    hideModal: function hideModal() {
      var _this$$refs$callbackM;
      (_this$$refs$callbackM = this.$refs['callbackModal']) === null || _this$$refs$callbackM === void 0 || _this$$refs$callbackM.hide();
      this.$emit('hide-modal', null);
      document.getElementsByClassName('default')[0].classList.remove('blure');
    },
    Push2: function Push2(id, type) {
      this.hideModal();
      console.log(type + '-id', id);
      this.$router.push({
        name: type + '-id',
        params: {
          id: id
        }
      });
    },
    CHECK: function CHECK(check) {
      var _this2 = this;
      this.loading = true;
      var ref = this.$cookiz.get('ref');
      if (!ref || isNaN(ref)) ref = 0;
      var api_url;
      var purchase = this.$route.query.purchase;
      if (purchase != 'download' && purchase != 'wallet' && purchase != 'subscription' && purchase != 'directdebit') {
        purchase = 'download';
      }
      if (this.$auth.loggedIn) {
        api_url = '/payments/' + purchase + '/callback';
      } else {
        api_url = '/ghost/payments/' + purchase + '/callback';
      }
      var check_it_again = 0;
      if (check) {
        check_it_again = 1;
      }
      this.$axios.get(api_url, {
        params: {
          payment_id: this.$route.query.payment_id,
          ref_num: this.$route.query.ref_num,
          method: this.$route.query.method,
          check_it_again: check_it_again,
          ref: ref
        }
      }).then(function (res) {
        _this2.loading = false;
        if (window.location.host == 'app.upera.tv' || window.location.host == 'app.pofefilm.tv') {
          _this2.divcount = 1;
        } else {
          _this2.divcount = 0;
        }
        if (res.status === 200) {
          var _res$data;
          _this2.success = true;
          _this2.ref_num = res.data.data.ref;
          _this2.walletDetail = (res === null || res === void 0 || (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.wallet) || null;
          // Transform the API response to match component expectations
          if (res.data.data.files && Array.isArray(res.data.data.files)) {
            _this2.files = res.data.data.files.map(function (file) {
              // Extract quality from name (e.g., "قسمت هفدهم از یاد رفته - 480p")
              var qualityMatch = file.name.match(/(\d+p)/);
              var quality = qualityMatch ? qualityMatch[1] : '1080p';

              // Remove quality from title
              var title = file.name.replace(/\s*-\s*\d+p\s*$/, '');
              return {
                id: file.id,
                m_id: file.m_id,
                title: title,
                poster: file.poster,
                type: file.type,
                presale: file.presale === 1 || file.presale === true,
                presale_date: file.presale_date,
                screening: file.screening || {
                  ekran: 0,
                  ekran_period_end: null,
                  ekran_hour: 0,
                  ekran_owned: 0,
                  owned_period_end: null,
                  ekran_id: 0
                },
                stream_link: file.stream_link,
                qualities: [{
                  quality: quality,
                  download_url: file.link1 || file.link2,
                  size: '' // Size not provided in API
                }]
              };
            });
          } else {
            _this2.files = res.data.data.files;
          }
          if (_this2.files != null) _this2.divcount = _this2.divcount + 1;
          if (_this2.$route.query.purchase == 'download') {
            localStorage.removeItem('_cart');
          }
        } else {
          _this2.divcount = _this2.divcount + 1;
          _this2.message = res.data.message;
          if ('show_login' in res.data) {
            _this2.show_login = res.data.show_login;
          }
        }
        if ('title' in res.data && res.data.title != null) {
          _this2.title = res.data.title;
          _this2.divcount = _this2.divcount + 1;
        }
      }, function (err) {
        _this2.loading = false;
        if (window.location.host == 'app.upera.tv' || window.location.host == 'app.pofefilm.tv') {
          _this2.divcount = 1;
        } else {
          _this2.divcount = 0;
        }
        _this2.divcount = _this2.divcount + 1;
        _this2.message = err.response.data.message;
        if ('show_login' in err.response.data) {
          _this2.show_login = err.response.data.show_login;
        }
        if ('title' in err.response.data && err.response.data.title != null) {
          _this2.title = err.response.data.title;
          _this2.divcount = _this2.divcount + 1;
        }
      });
      this.showRefundMessage = true;
      if (check) this.checkagain = true;
    },
    BUY: function BUY() {
      var _this3 = this;
      var ref = this.$cookiz.get('ref');
      if (!ref || isNaN(ref)) ref = 0;
      if (this.$route.query.method == 'vandar_subscriptions') {
        if (this.$auth.loggedIn) {
          this.buyloading = true;
          this.$axios.post('/directdebit/buy_subscription_bypaymentid', {
            payment_id: this.$route.query.payment_id,
            callback_url: location.origin + '/callback'
          }).then(function (res) {
            if (res.status === 200 && res.data.data.pay_url) {
              window.location.href = res.data.data.pay_url;
            } else if (res.data.message) {
              _this3.message = res.data.message;
            }
            _this3.message = false;
            _this3.buyloading = false;
          }, function (error) {
            _this3.buyloading = false;
            _this3.message = error.response.data.message;
          });
        } else {
          this.$store.dispatch('login/SHOW_MODAL', {
            premessage: null,
            premobile: null,
            preredirect: null,
            prerefresh: false
          });
        }
      } else if (this.$route.query.purchase == 'subscription') {
        if (this.$auth.loggedIn) {
          this.buyloading = true;
          var content_id = 0;
          var content_type = 0;
          if (this.title != null) {
            content_id = this.title.id;
            content_type = this.title.type;
          }

          //this.checkuser.domain
          this.$axios.post('/change_subscription', {
            method: this.$route.query.method,
            plan_id: this.$route.query.plan,
            host: window.location.hostname,
            content_id: content_id,
            content_type: content_type,
            ref: ref
          }).then(function (res) {
            if (res.status === 200) {
              _this3.data = res.data;
              if (_this3.data && _this3.data.status == 'success') {
                window.location.href = _this3.data.link;
              }
            } else {
              _this3.buyloading = false;
              _this3.message = res.data.message;
            }
          }, function (error) {
            _this3.buyloading = false;
            _this3.message = error.response.data.message;
            return error;
          });
        } else {
          this.$store.dispatch('login/SHOW_MODAL', {
            premessage: null,
            premobile: null,
            preredirect: null,
            prerefresh: false
          });
        }
      } else if (this.$route.query.purchase == 'wallet') {
        if (this.$auth.loggedIn) {
          this.SHOW_MODAL_CREDIT();
        } else {
          this.$store.dispatch('login/SHOW_MODAL', {
            premessage: null,
            premobile: null,
            preredirect: null,
            prerefresh: false
          });
        }
      } else if (this.$route.query.purchase == 'directdebit') {
        if (this.$auth.loggedIn) {
          this.SHOW_MODAL_DIRECTDEBIT();
        } else {
          this.$store.dispatch('login/SHOW_MODAL', {
            premessage: null,
            premobile: null,
            preredirect: null,
            prerefresh: false
          });
        }
      } else {
        var api_url;
        if (this.$auth.loggedIn) {
          api_url = '/get/buy';
        } else {
          api_url = '/ghost/get/buy';
        }
        this.buyloading = true;
        this.$axios.post(api_url, {
          cart: this.cart,
          mobile: this.$route.query.mobile,
          callback_url: location.origin + '/callback?mobile=' + this.$route.query.mobile,
          method: this.method,
          ref: ref
        }).then(function (res) {
          if (res.status === 200) {
            window.location.href = res.data.data.pay_url;
          } else {
            _this3.buyloading = false;
            _this3.message = res.data.message;
          }
        }, function (error) {
          _this3.buyloading = false;
          _this3.premessage = error.response.data.message;
          if (error.response.data.login) _this3.$store.dispatch('login/SHOW_MODAL', {
            premessage: _this3.premessage,
            premobile: _this3.$route.query.mobile,
            preredirect: null,
            prerefresh: false
          });
        });
      }
    },
    EKRAN: function EKRAN(ekranid) {
      this.$router.push({
        name: 'ekran-id',
        params: {
          id: ekranid
        }
      });
    },
    Resize: function Resize(e) {
      var vh = window.innerHeight * 0.01;
      var element = document.getElementsByClassName('download-links');
      if (element.length) element[0].style.setProperty('--vh', "".concat(vh, "px"));
      return e;
    },
    Login: function Login() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: false
      });
    },
    SHOW_MODAL_CREDIT: function SHOW_MODAL_CREDIT() {
      this.$store.dispatch('credit/SHOW_MODAL', {
        prewallet: this.wallet
      });
    },
    SHOW_MODAL_DIRECTDEBIT: function SHOW_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/SHOW_MODAL', {
        premobile: this.mobile,
        forsubscription: false,
        id: this.id,
        type: this.type,
        paymentid: 0
      });
    },
    HIDE_MODAL_DIRECTDEBIT: function HIDE_MODAL_DIRECTDEBIT() {
      this.$store.dispatch('directdebit/HIDE_MODAL');
    },
    COPY: function COPY(text) {
      var _this4 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _t;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 1;
              return _this4.$copyText(text);
            case 1:
              _this4.$swal('لینک کپی شد', {
                icon: 'success'
              });
              _context2.next = 3;
              break;
            case 2:
              _context2.prev = 2;
              _t = _context2["catch"](0);
              _this4.$swal('لینک در دیوایس شما قابل کپی نیست.');
              return _context2.abrupt("return", _t);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // ==================== TEST/MOCK DATA METHODS ====================
    // Toggle test mode on/off
    toggleTestMode: function toggleTestMode() {
      this.testMode = !this.testMode;
      if (this.testMode) {
        this.loadMockScenario('singleFileDownload');
        console.log('🧪 Test Mode ENABLED - Using mock data');
        console.log('Available scenarios:', Object.keys(this.mockScenarios));
        console.log('Use: window.loadMockScenario("scenarioName") to switch');
      } else {
        this.success = false;
        this.files = null;
        this.loading = false;
        console.log('✅ Test Mode DISABLED - Back to production');
      }
    },
    // Load a specific mock scenario
    loadMockScenario: function loadMockScenario(scenarioName) {
      if (!this.mockScenarios[scenarioName]) {
        console.error('❌ Unknown scenario:', scenarioName);
        console.log('Available scenarios:', Object.keys(this.mockScenarios));
        return;
      }
      var scenario = this.mockScenarios[scenarioName];
      this.success = scenario.success;
      this.files = scenario.files;
      this.loading = false;
      this.buyloading = false;
      this.checkagain = false;
      this.show_login = 0;
      this.ref_num = scenario.refNum || '123456789';
      this.message = scenario.message || null;

      // Handle error scenarios
      if (!scenario.success) {
        if (scenario.errorType === 'checkagain') {
          this.checkagain = true;
          this.show_login = 0;
        } else if (scenario.errorType === 'show_login') {
          this.checkagain = false;
          this.show_login = 1;
        } else if (scenario.errorType === 'default') {
          this.checkagain = false;
          this.show_login = 0;
        }
      } else {
        // Reset error states for success scenarios
        this.checkagain = false;
        this.show_login = 0;
        this.message = null;
      }

      // Set scenario-specific data
      if (scenarioName === 'walletCharge') {
        this.wallet_amount = '50000';
        this.wallet_balance = '125000';
      } else if (scenarioName === 'subscriptionLoggedIn' || scenarioName === 'subscriptionGuest') {
        this.subscription_days = 30;
      }

      // Update query param for purchase type testing
      var newQuery = _objectSpread(_objectSpread({}, this.$route.query), {}, {
        purchase: scenario.purchaseType
      });

      // Add or remove reactnative param based on checkbox
      if (this.testModeReactNative) {
        newQuery.reactnative = '1';
      } else {
        delete newQuery.reactnative;
      }
      this.$router.replace({
        query: newQuery
      });
      console.log('📦 Loaded mock scenario:', scenarioName);
      console.log('Purchase Type:', scenario.purchaseType);
      console.log('Success:', scenario.success);
      console.log('Files:', scenario.files);
      console.log('React Native:', this.testModeReactNative);
    },
    // Toggle React Native mode
    toggleReactNative: function toggleReactNative() {
      var newQuery = _objectSpread({}, this.$route.query);
      if (this.testModeReactNative) {
        newQuery.reactnative = '1';
      } else {
        delete newQuery.reactnative;
      }
      this.$router.replace({
        query: newQuery
      });
      console.log('📱 React Native mode:', this.testModeReactNative ? 'ENABLED' : 'DISABLED');
    },
    // List all available test scenarios
    listMockScenarios: function listMockScenarios() {
      var _this5 = this;
      console.log('📋 Available Mock Scenarios:');
      console.log('\n✅ SUCCESS SCENARIOS:');
      Object.keys(this.mockScenarios).forEach(function (key) {
        var scenario = _this5.mockScenarios[key];
        if (scenario.success) {
          console.log("  - ".concat(key, ": ").concat(scenario.purchaseType, " (").concat(scenario.files ? scenario.files.length + ' files' : 'no files', ")"));
        }
      });
      console.log('\n❌ ERROR SCENARIOS:');
      Object.keys(this.mockScenarios).forEach(function (key) {
        var scenario = _this5.mockScenarios[key];
        if (!scenario.success) {
          console.log("  - ".concat(key, ": ").concat(scenario.purchaseType, " - ").concat(scenario.errorType));
        }
      });
      console.log('\n📱 React Native Testing:');
      console.log('  Check the "React Native (reactnative=1)" checkbox');
      console.log('\nUsage: window.loadMockScenario("scenarioName")');
    }
  }
});
// CONCATENATED MODULE: ./pages/callback.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_callbackvue_type_script_lang_js = (callbackvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/callback.vue?vue&type=style&index=0&id=340bff02&prod&scoped=true&lang=css
var callbackvue_type_style_index_0_id_340bff02_prod_scoped_true_lang_css = __webpack_require__(937);

// EXTERNAL MODULE: ./pages/callback.vue?vue&type=style&index=1&id=340bff02&prod&lang=css
var callbackvue_type_style_index_1_id_340bff02_prod_lang_css = __webpack_require__(938);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/callback.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_callbackvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "340bff02",
  null
  
)

/* harmony default export */ var callback = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CallbackFooter: __webpack_require__(838).default})


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LoadingSpinner_vue_vue_type_style_index_0_id_9186471a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(759);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LoadingSpinner_vue_vue_type_style_index_0_id_9186471a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LoadingSpinner_vue_vue_type_style_index_0_id_9186471a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentSuccessContent_vue_vue_type_style_index_0_id_50d4e228_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(760);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentSuccessContent_vue_vue_type_style_index_0_id_50d4e228_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentSuccessContent_vue_vue_type_style_index_0_id_50d4e228_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentErrorContent_vue_vue_type_style_index_0_id_5de9b498_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(761);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentErrorContent_vue_vue_type_style_index_0_id_5de9b498_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_PaymentErrorContent_vue_vue_type_style_index_0_id_5de9b498_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SupportContactSection_vue_vue_type_style_index_0_id_53db388c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(762);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SupportContactSection_vue_vue_type_style_index_0_id_53db388c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SupportContactSection_vue_vue_type_style_index_0_id_53db388c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CallbackFooter_vue_vue_type_style_index_0_id_1d630e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(763);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CallbackFooter_vue_vue_type_style_index_0_id_1d630e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CallbackFooter_vue_vue_type_style_index_0_id_1d630e44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/CallbackFooter.vue?vue&type=template&id=1d630e44&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "download-links-footer",
    class: _vm.footerClass
  }, [_vm.success ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm.mainButton ? _c('div', {
    class: _vm.buttonColClass
  }, [_c('button', {
    staticClass: "btn btn-main btn-block",
    on: {
      "click": _vm.handleMainAction
    }
  }, [_c('i', {
    staticClass: "fa pl-2",
    class: _vm.mainButton.iconClass
  }), _vm._v("\n          " + _vm._s(_vm.mainButton.text) + "\n        ")])]) : _vm._e(), _vm._v(" "), _vm.secondaryButton ? _c('div', {
    class: _vm.buttonColClass
  }, [_c('button', {
    staticClass: "btn btn-light btn-block",
    on: {
      "click": _vm.handleSecondaryAction
    }
  }, [_c('i', {
    staticClass: "fa pl-2",
    class: _vm.secondaryButton.iconClass
  }), _vm._v("\n          " + _vm._s(_vm.secondaryButton.text) + "\n        ")])]) : _vm._e(), _vm._v(" "), _vm.isReactNative && _vm.shouldShowReactNativeInSameRow ? _c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": "uperaapp://callback?".concat(_vm.queryString)
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])]) : _vm._e()]), _vm._v(" "), _vm.isReactNative && !_vm.shouldShowReactNativeInSameRow ? _c('div', {
    staticClass: "row mt-2"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": "uperaapp://callback?".concat(_vm.queryString)
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])])]) : _vm._e()]) : !_vm.success ? _c('div', {
    staticClass: "download-links-item"
  }, [_vm.checkagain ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    class: 'col-6'
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('retry-payment');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-money-bill pl-2"
  }), _vm._v("\n          پرداخت مجدد\n        ")])]), _vm._v(" "), _c('div', {
    class: 'col-6'
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('check-payment');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check-double pl-2"
  }), _vm._v("\n          بررسی پرداخت\n        ")])]), _vm._v(" "), _vm.isReactNative ? _c('div', {
    staticClass: "col-12 mt-2"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": "uperaapp://callback?".concat(_vm.queryString)
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])]) : _vm._e()]) : _vm.showLogin ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    class: _vm.isReactNative ? 'col-6' : 'col-12'
  }, [_c('button', {
    staticClass: "btn btn-main btn-block",
    on: {
      "click": function click($event) {
        return _vm.$emit('login');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-sign-in-alt pl-2"
  }), _vm._v("\n          ورود به سایت\n        ")])]), _vm._v(" "), _vm.isReactNative ? _c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": "uperaapp://callback?".concat(_vm.queryString)
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])]) : _vm._e()]) : _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('check-payment');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-check-double pl-2"
  }), _vm._v("\n          بررسی پرداخت\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-light btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('retry-payment');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-money-bill pl-2"
  }), _vm._v("\n          پرداخت مجدد\n        ")])])]), _vm._v(" "), _vm.isReactNative && !_vm.checkagain && !_vm.showLogin ? _c('div', {
    staticClass: "row mt-2"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('button', {
    staticClass: "btn btn-light btn-block",
    on: {
      "click": _vm.handleReactNativeAction
    }
  }, [_c('i', {
    staticClass: "fa pl-2 fa-mobile-alt"
  }), _vm._v("\n          بازگشت به اپلیکیشن\n        ")])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.backtoapp ? _c('div', {
    staticClass: "download-links-item"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _vm.title ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_vm.title.type === 'movie' ? _c('a', {
    staticClass: "btn btn-second btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('return-to-content', _vm.title);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-alt-circle-left"
  }), _vm._v("\n          بازگشت به صفحه فیلم\n        ")]) : _vm.title.type === 'series' ? _c('a', {
    staticClass: "btn btn-second btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('return-to-content', _vm.title);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-alt-circle-left"
  }), _vm._v("\n          بازگشت به صفحه سریال\n        ")]) : _c('a', {
    staticClass: "btn btn-second btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('return-to-content', _vm.title);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-arrow-alt-circle-left"
  }), _vm._v("\n          بازگشت به صفحه این قسمت سریال\n        ")])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": "uperaapp://upera?type=download&success=false"
    }
  }, [_c('i', {
    staticClass: "fa fa-back pl-2"
  }), _vm._v("\n          نمایش فیلم\n        ")])])]);
}];

// CONCATENATED MODULE: ./components/callback/CallbackFooter.vue?vue&type=template&id=1d630e44&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(173);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(122);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/CallbackFooter.vue?vue&type=script&lang=js









/* harmony default export */ var CallbackFootervue_type_script_lang_js = ({
  name: 'CallbackFooter',
  props: {
    files: {
      type: Array,
      default: null
    },
    success: {
      type: Boolean,
      default: false
    },
    checkagain: {
      type: Boolean,
      default: false
    },
    showLogin: {
      type: Boolean,
      default: false
    },
    backtoapp: {
      type: Boolean,
      default: false
    },
    title: {
      type: Object,
      default: null
    },
    divcount: {
      type: Number,
      default: 0
    },
    purchaseType: {
      type: String,
      default: 'download'
    },
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    queryString: function queryString() {
      var params = new URLSearchParams();
      Object.entries(this.$route.query).forEach(function (_ref) {
        var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (value) params.append(key, value);
      });
      return params.toString();
    },
    isReactNative: function isReactNative() {
      var _this$$route;
      return ((_this$$route = this.$route) === null || _this$$route === void 0 || (_this$$route = _this$$route.query) === null || _this$$route === void 0 ? void 0 : _this$$route.reactnative) === '1';
    },
    isSingleFile: function isSingleFile() {
      return this.files && this.files.length === 1;
    },
    isMultipleFiles: function isMultipleFiles() {
      return this.files && this.files.length > 1;
    },
    hasEkranScreening: function hasEkranScreening() {
      if (!this.files || this.files.length === 0) return false;
      return this.files.some(function (file) {
        var _file$screening;
        return ((_file$screening = file.screening) === null || _file$screening === void 0 ? void 0 : _file$screening.ekran) && file.screening.ekran_id;
      });
    },
    hasPresale: function hasPresale() {
      if (!this.files || this.files.length === 0) return false;
      return this.files.some(function (file) {
        return file.presale;
      });
    },
    footerClass: function footerClass() {
      return {
        'footer-0': this.divcount === 0,
        'footer-1': this.divcount === 1
      };
    },
    shouldShowReactNativeInSameRow: function shouldShowReactNativeInSameRow() {
      // Show React Native button in the same row for subscription, wallet, and directdebit
      return this.purchaseType === 'subscription' || this.purchaseType === 'wallet' || this.purchaseType === 'directdebit';
    },
    mainButton: function mainButton() {
      if (!this.success) return null;
      if (this.purchaseType === 'download') {
        if (this.isSingleFile) {
          if (this.hasPresale || this.hasEkranScreening) {
            if (this.isLoggedIn) {
              return {
                text: 'مشاهده محتوا',
                iconClass: 'fa-play',
                action: 'watch'
              };
            } else {
              return {
                text: 'ورود به سایت برای مشاهده محتوا',
                iconClass: 'fa-sign-in-alt',
                action: 'login'
              };
            }
          }
          if (this.isLoggedIn) {
            return {
              text: 'تماشا',
              iconClass: 'fa-play',
              action: 'watch'
            };
          }
          return {
            text: 'تماشا',
            iconClass: 'fa-play',
            action: 'showContent'
          };
        }
        if (this.isMultipleFiles) {
          return {
            text: 'مشاهده محتواها',
            iconClass: 'fa-play',
            action: 'goProfile'
          };
        }
      }
      if (this.purchaseType === 'subscription') {
        return {
          text: 'آپرا پلاس',
          iconClass: 'fa-star',
          action: 'operaPlus'
        };
      }
      if (this.purchaseType === 'wallet') {
        return {
          text: 'بازگشت به آپرا',
          iconClass: 'fa-home',
          action: 'backToOpera'
        };
      }
      if (this.purchaseType === 'directdebit') {
        return {
          text: 'تنظیمات پرداخت خودکار',
          iconClass: 'fa-cog',
          action: 'directDebitSettings'
        };
      }
      return null;
    },
    secondaryButton: function secondaryButton() {
      if (!this.success) return null;
      if (this.purchaseType === 'download') {
        return {
          text: 'بازگشت به صفحه اصلی',
          iconClass: 'fa-home',
          action: 'backToOpera'
        };
      }
      if (this.purchaseType === 'subscription') {
        // No secondary button for subscription (back to app handled separately)
        return null;
      }
      if (this.purchaseType === 'wallet') {
        if (this.isReactNative) {
          return null; // Back to app handled separately
        }
        return null;
      }
      if (this.purchaseType === 'directdebit') {
        if (this.isReactNative) {
          return null; // Back to app handled separately
        }
        return {
          text: 'بازگشت به آپرا',
          iconClass: 'fa-home',
          action: 'backToOpera'
        };
      }
      return null;
    },
    buttonColClass: function buttonColClass() {
      // If React Native and should be in same row, main button gets col-6
      if (this.isReactNative && this.shouldShowReactNativeInSameRow) {
        return 'col-6';
      }
      // If there are two buttons (main and secondary), they share the row
      var hasTwoButtons = this.mainButton && this.secondaryButton;
      return hasTwoButtons ? 'col-6' : 'col-12';
    }
  },
  methods: {
    handleMainAction: function handleMainAction() {
      var _this$mainButton, _this$files$, _this$files$2;
      var action = (_this$mainButton = this.mainButton) === null || _this$mainButton === void 0 ? void 0 : _this$mainButton.action;
      switch (action) {
        case 'watch':
          if (this.files && this.files.length > 0) {
            this.$emit('watch', this.files[0].id);
          }
          break;
        case 'goHome':
          this.$router.push('/');
          break;
        case 'backToApp':
          window.location.href = 'upera://callback/success';
          break;
        case 'operaPlus':
          this.$router.push('/plan');
          break;
        case 'backToOpera':
          this.$router.push('/');
          break;
        case 'directDebitSettings':
          this.$emit('show-direct-debit');
          break;
        case 'showContent':
          this.$emit('return-to-content', {
            id: (_this$files$ = this.files[0]) === null || _this$files$ === void 0 ? void 0 : _this$files$.m_id,
            type: (_this$files$2 = this.files[0]) === null || _this$files$2 === void 0 ? void 0 : _this$files$2.type
          });
          break;
        case 'goProfile':
          this.$router.push('/profile/list/downloads');
          break;
      }
    },
    handleSecondaryAction: function handleSecondaryAction() {
      var _this$secondaryButton;
      var action = (_this$secondaryButton = this.secondaryButton) === null || _this$secondaryButton === void 0 ? void 0 : _this$secondaryButton.action;
      switch (action) {
        case 'checkPayment':
          this.$emit('check-payment');
          break;
        case 'operaPlus':
          this.$router.push('/plan');
          break;
        case 'backToApp':
          window.location.href = 'upera://callback/success';
          break;
        case 'backToOpera':
          this.$router.push('/');
          break;
      }
    },
    handleReactNativeAction: function handleReactNativeAction() {
      window.location.href = 'upera://callback/success';
    }
  }
});
// CONCATENATED MODULE: ./components/callback/CallbackFooter.vue?vue&type=script&lang=js
 /* harmony default export */ var callback_CallbackFootervue_type_script_lang_js = (CallbackFootervue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/callback/CallbackFooter.vue?vue&type=style&index=0&id=1d630e44&prod&scoped=true&lang=css
var CallbackFootervue_type_style_index_0_id_1d630e44_prod_scoped_true_lang_css = __webpack_require__(810);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/callback/CallbackFooter.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  callback_CallbackFootervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1d630e44",
  null
  
)

/* harmony default export */ var CallbackFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 848:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/LoadingSpinner.vue?vue&type=template&id=9186471a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "d-flex align-items-center justify-content-center pt-5 pb-5"
  }, [_c('svg', {
    attrs: {
      "id": "loading",
      "width": "120",
      "height": "120",
      "viewBox": "0 0 120 120",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('circle', {
    attrs: {
      "id": "loading_circle",
      "fill": "none",
      "stroke": "#ff6f00",
      "stroke-width": "4",
      "stroke-linecap": "round",
      "cx": "60",
      "cy": "60",
      "r": "55"
    }
  })]), _vm._v(" "), _c('br')]), _vm._v(" "), _c('h5', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.message))])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/callback/LoadingSpinner.vue?vue&type=template&id=9186471a&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/LoadingSpinner.vue?vue&type=script&lang=js
/* harmony default export */ var LoadingSpinnervue_type_script_lang_js = ({
  name: 'LoadingSpinner',
  props: {
    message: {
      type: String,
      default: 'در حال بررسی'
    }
  }
});
// CONCATENATED MODULE: ./components/callback/LoadingSpinner.vue?vue&type=script&lang=js
 /* harmony default export */ var callback_LoadingSpinnervue_type_script_lang_js = (LoadingSpinnervue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/callback/LoadingSpinner.vue?vue&type=style&index=0&id=9186471a&prod&scoped=true&lang=css
var LoadingSpinnervue_type_style_index_0_id_9186471a_prod_scoped_true_lang_css = __webpack_require__(806);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/callback/LoadingSpinner.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  callback_LoadingSpinnervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "9186471a",
  null
  
)

/* harmony default export */ var LoadingSpinner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/PaymentSuccessContent.vue?vue&type=template&id=50d4e228&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "payment-success-container"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm.refNum ? _c('div', {
    staticClass: "tracking-number"
  }, [_c('span', [_vm._v("شماره پیگیری")]), _vm._v(" : " + _vm._s(_vm.refNum) + "\n  ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "special-state-text",
    domProps: {
      "innerHTML": _vm._s(_vm.stateSpecialText)
    }
  }), _vm._v(" "), _vm.stateSpecialText ? _c('div', {
    staticClass: "divider"
  }) : _vm._e(), _vm._v(" "), _vm.showAccordion ? _c('div', {
    staticClass: "accordion-wrapper"
  }, [_c('div', {
    staticClass: "accordion",
    attrs: {
      "id": "downloadAccordion"
    }
  }, _vm._l(_vm.files, function (item, index) {
    return _c('div', {
      key: 'accordion-' + index,
      staticClass: "accordion-item"
    }, [_c('h2', {
      staticClass: "accordion-header",
      attrs: {
        "id": 'heading' + index
      }
    }, [_c('button', {
      class: ['accordion-button', {
        collapsed: _vm.activeAccordion !== index
      }],
      attrs: {
        "type": "button",
        "aria-expanded": _vm.activeAccordion === index,
        "aria-controls": 'collapse' + index
      },
      on: {
        "click": function click($event) {
          return _vm.toggleAccordion(index);
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.title || 'فایل دانلود ' + (index + 1)) + "\n            "), _c('i', {
      class: ['fa', 'accordion-icon', _vm.activeAccordion === index ? 'fa-chevron-up' : 'fa-chevron-down']
    })])]), _vm._v(" "), _c('div', {
      class: ['accordion-collapse', 'collapse', {
        show: _vm.activeAccordion === index
      }],
      attrs: {
        "id": 'collapse' + index,
        "aria-labelledby": 'heading' + index
      }
    }, [_c('div', {
      staticClass: "accordion-body"
    }, _vm._l(item.qualities || [item], function (quality, qIndex) {
      return _c('div', {
        key: 'quality-' + qIndex,
        staticClass: "quality-item"
      }, [_c('div', {
        staticClass: "quality-info"
      }, [_c('a', {
        attrs: {
          "href": quality.download_url,
          "title": "دانلود"
        }
      }, [_c('i', {
        staticClass: "icon-download"
      }), _vm._v(" "), _c('span', {
        staticClass: "quality-label"
      }, [_vm._v("\n                    نسخه " + _vm._s(quality.quality || '1080p'))])]), _vm._v(" "), quality && quality.size ? _c('span', {
        staticClass: "quality-size"
      }, [_vm._v("حجم " + _vm._s(quality.size || ''))]) : _vm._e()]), _vm._v(" "), _c('div', {
        staticClass: "quality-actions"
      }, [_c('button', {
        staticClass: "btn copy-btn icon-btn",
        attrs: {
          "title": "کپی لینک"
        },
        on: {
          "click": function click($event) {
            return _vm.$emit('copy', quality.download_url);
          }
        }
      }, [_c('i', {
        staticClass: "fa fa-copy"
      })])])]);
    }), 0)])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.showAccordion ? _c('div', {
    staticClass: "divider"
  }) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "success-icon-wrapper"
  }, [_c('div', {
    staticClass: "success-icon"
  }, [_c('i', {
    staticClass: "fa fa-check",
    staticStyle: {
      "font-size": "50px",
      "color": "green"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("پرداخت موفق")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "success-alert"
  }, [_c('i', {
    staticClass: "fa fa-check-circle",
    staticStyle: {
      "color": "green"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "success-alert-text"
  }, [_vm._v("پرداخت شما با موفقیت انجام شد.")])]);
}];

// CONCATENATED MODULE: ./components/callback/PaymentSuccessContent.vue?vue&type=template&id=50d4e228&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/PaymentSuccessContent.vue?vue&type=script&lang=js




/* harmony default export */ var PaymentSuccessContentvue_type_script_lang_js = ({
  name: 'PaymentSuccessContent',
  props: {
    files: {
      type: Array,
      default: null
    },
    purchaseType: {
      type: String,
      default: 'download',
      validator: function validator(value) {
        return ['download', 'subscription', 'wallet', 'directdebit'].includes(value);
      }
    },
    isLoggedIn: {
      type: Boolean,
      default: false
    },
    refNum: {
      type: [String, Number],
      default: null
    },
    walletAmount: {
      type: [String, Number],
      default: null
    },
    walletBalance: {
      type: [String, Number],
      default: null
    },
    subscriptionDays: {
      type: [String, Number],
      default: null
    }
  },
  data: function data() {
    return {
      activeAccordion: null
    };
  },
  computed: {
    isSingleFile: function isSingleFile() {
      return this.files && this.files.length === 1;
    },
    isMultipleFiles: function isMultipleFiles() {
      return this.files && this.files.length > 1;
    },
    hasEkranScreening: function hasEkranScreening() {
      if (!this.files || this.files.length === 0) return false;
      return this.files.some(function (file) {
        var _file$screening, _file$screening2;
        return ((_file$screening = file.screening) === null || _file$screening === void 0 ? void 0 : _file$screening.ekran) === 1 || ((_file$screening2 = file.screening) === null || _file$screening2 === void 0 ? void 0 : _file$screening2.ekran) === true;
      });
    },
    hasPresale: function hasPresale() {
      if (!this.files || this.files.length === 0) return false;
      return this.files.some(function (file) {
        return file.presale === 1 || file.presale === true;
      });
    },
    showAccordion: function showAccordion() {
      return this.purchaseType === 'download' && this.files && this.files.length > 0;
    },
    stateSpecialText: function stateSpecialText() {
      if (this.purchaseType === 'download') {
        if (this.isSingleFile) {
          var _file$screening3, _file$screening4, _file$screening5, _file$screening6;
          var text = 'قسمت انتخابی شما به لیست تماشای شما اضافه شد.';
          var file = this.files[0];
          if ((file.presale === 1 || file.presale === true) && (((_file$screening3 = file.screening) === null || _file$screening3 === void 0 ? void 0 : _file$screening3.ekran) === 1 || ((_file$screening4 = file.screening) === null || _file$screening4 === void 0 ? void 0 : _file$screening4.ekran) === true)) {
            return "".concat(text, "<br><br>\u0627\u06A9\u0631\u0627\u0646 \u0633\u0631\u0627\u0633\u0631\u06CC \u0641\u06CC\u0644\u0645 \u0627\u0632 \u0631\u0648\u0632 ").concat(file.presale_date, " \u0622\u063A\u0627\u0632 \u062E\u0648\u0627\u0647\u062F \u0634\u062F\u060C \u0644\u0637\u0641\u0627 \u0642\u0628\u0644 \u0627\u0632 \u0627\u06CC\u0646 \u062A\u0627\u0631\u06CC\u062E \u0628\u0647 \u0647\u06CC\u0686 \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u0627\u06CC \u062C\u0644\u0648\u06AF\u06CC\u0631\u06CC \u0627\u0632 \u0627\u0634\u06A9\u0627\u0644 \u0641\u0646\u06CC \u0627\u062D\u062A\u0645\u0627\u0644\u06CC \u0646\u0633\u0628\u062A \u0628\u0647 \u062A\u0633\u062A \u0627\u062A\u0635\u0627\u0644 \u0648 \u06A9\u06CC\u0641\u06CC\u062A \u067E\u062E\u0634 \u0627\u0642\u062F\u0627\u0645 \u0646\u0646\u0645\u0627\u06CC\u06CC\u062F \u0648 \u0641\u0642\u0637 \u0628\u0627 \u0627\u06A9\u0631\u0627\u0646 \u0633\u0631\u0627\u0633\u0631\u06CC \u0641\u06CC\u0644\u0645 \u0631\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u0645\u0627\u06CC\u06CC\u062F.<br><br>\u0628\u0631\u0627\u06CC \u062A\u0645\u0627\u0634\u0627 \u0627\u0632 \u062E\u0627\u0646\u0647\u060C \u0633\u0627\u0646\u0633 \u0633\u06CC\u0646\u0645\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646 ").concat(file.screening.ekran_hour, " \u0633\u0627\u0639\u062A\u0647 \u0627\u0633\u062A\u060C \u0637\u0648\u0631\u06CC \u062A\u0646\u0638\u06CC\u0645 \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u062A\u0645\u0627\u0634\u0627\u06CC \u06A9\u0627\u0645\u0644 \u0641\u06CC\u0644\u0645 \u0631\u0627 \u062F\u0631 \u0633\u0627\u0646\u0633 \u062E\u0648\u062F \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F.");
          }
          if (((_file$screening5 = file.screening) === null || _file$screening5 === void 0 ? void 0 : _file$screening5.ekran) === 1 || ((_file$screening6 = file.screening) === null || _file$screening6 === void 0 ? void 0 : _file$screening6.ekran) === true) {
            return "".concat(text, "<br><br>\u0628\u0631\u0627\u06CC \u062A\u0645\u0627\u0634\u0627 \u0627\u0632 \u062E\u0627\u0646\u0647\u060C \u0633\u0627\u0646\u0633 \u0633\u06CC\u0646\u0645\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646 ").concat(file.screening.ekran_hour, " \u0633\u0627\u0639\u062A\u0647 \u0627\u0633\u062A\u060C \u062F\u0642\u06CC\u0642\u0627 \u0627\u0632 \u0632\u0645\u0627\u0646\u06CC \u06A9\u0647 \u0641\u06CC\u0644\u0645 \u0631\u0627 \u0634\u0631\u0648\u0639 \u0628\u0647 \u062A\u0645\u0627\u0634\u0627 \u06A9\u0646\u06CC\u062F\u060C \u0633\u0627\u0646\u0633 \u0634\u0645\u0627 \u0622\u063A\u0627\u0632 \u0648 \u062A\u0627 ").concat(file.screening.ekran_hour, " \u0633\u0627\u0639\u062A \u0628\u0639\u062F \u0628\u0647 \u067E\u0627\u06CC\u0627\u0646 \u0645\u06CC\u200C\u0631\u0633\u062F\u060C \u0637\u0648\u0631\u06CC \u062A\u0646\u0638\u06CC\u0645 \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u062A\u0645\u0627\u0634\u0627\u06CC \u06A9\u0627\u0645\u0644 \u0641\u06CC\u0644\u0645 \u0631\u0627 \u062F\u0631 \u0633\u0627\u0646\u0633 \u062E\u0648\u062F \u0627\u0632 \u062F\u0633\u062A \u0646\u062F\u0647\u06CC\u062F.");
          }
          return "".concat(text, "<br><br>\u062A\u0648\u062C\u0647 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F \u06A9\u0647 \u0628\u0631\u0627\u06CC \u062C\u0644\u0648\u06AF\u06CC\u0631\u06CC \u0627\u0632 \u062F\u0627\u0646\u0644\u0648\u062F \u0646\u0627\u0642\u0635 \u06CC\u0627 \u0622\u0633\u06CC\u0628 \u062F\u06CC\u062F\u0646 \u0628\u0647 \u0641\u0627\u06CC\u0644 \u0647\u0627\u06CC \u062E\u0631\u06CC\u062F\u0627\u0631\u06CC \u0634\u062F\u0647\u060C \u062D\u062A\u0645\u0627 \u0628\u0627\u06CC\u062F \u0627\u0632 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631\u0647\u0627\u06CC \u062F\u0627\u0646\u0644\u0648\u062F \u0645\u0646\u06CC\u062C\u0631 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u0648\u062F. \u0628\u062F\u06CC\u0646 \u0635\u0648\u0631\u062A \u062D\u062A\u06CC \u0627\u06AF\u0631 \u062F\u0627\u0646\u0644\u0648\u062F \u0634\u0645\u0627 \u062F\u0631 \u0647\u0631 \u0632\u0645\u0627\u0646\u06CC \u0648 \u0628\u0647 \u0647\u0631 \u062F\u0644\u06CC\u0644\u06CC \u0646\u06CC\u0645\u0647 \u06A9\u0627\u0631\u0647 \u0645\u062A\u0648\u0642\u0641 \u0634\u062F\u060C \u0645\u06CC\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u0632\u0645\u0627\u0646 \u062F\u0644\u062E\u0648\u0627\u0647 \u062E\u0648\u062F \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0628\u0647 \u0627\u062F\u0627\u0645\u0647 \u062F\u0627\u0646\u0644\u0648\u062F \u0628\u067E\u0631\u062F\u0627\u0632\u06CC\u062F.");
        }
        if (this.isMultipleFiles) {
          return 'قسمت های انتخابی شما به لیست تماشای شما اضافه شد.';
        }
      }
      if (this.purchaseType === 'subscription') {
        var _this$checkuser;
        var days = this.subscriptionDays || ((_this$checkuser = this.checkuser) === null || _this$checkuser === void 0 ? void 0 : _this$checkuser.days_period_to_end) || 30;
        return "\u0627\u0634\u062A\u0631\u0627\u06A9 \u0634\u0645\u0627 \u0628\u0647 \u0645\u062F\u062A ".concat(days, " \u0631\u0648\u0632 \u0641\u0639\u0627\u0644 \u0634\u062F.").concat(this.isLoggedIn && this.checkuser ? '<br>' + days + ' روز از اشتراک شما باقیمانده است.' : '');
      }

      // if (this.purchaseType === 'wallet') {
      //   // const amount = this.walletAmount || '0'
      //   const balance = this.walletBalance || '0'
      //   return `مبلغ  به کیف پول شما اضافه شد.<br>موجودی فعلی: ${balance}`
      // }
      if (this.purchaseType === 'wallet') {
        var amount = "".concat(this.walletAmount || '0', " \u062A\u0648\u0645\u0627\u0646") || false;
        var balance = "".concat(this.walletBalance || '0', " \u062A\u0648\u0645\u0627\u0646") || false;
        return "\u0645\u0628\u0644\u063A ".concat(amount, "  \u0628\u0647 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0634\u0645\u0627 \u0627\u0636\u0627\u0641\u0647 \u0634\u062F.<br>\u0645\u0648\u062C\u0648\u062F\u06CC \u0641\u0639\u0644\u06CC: ").concat(balance);
      }
      if (this.purchaseType === 'directdebit') {
        return 'از شما جهت فعال کردن پرداخت خودکار متشکریم.';
      }
      return '';
    }
  },
  methods: {
    toggleAccordion: function toggleAccordion(index) {
      // Toggle accordion: if clicking the active one, close it; otherwise, open the clicked one
      this.activeAccordion = this.activeAccordion === index ? null : index;
    }
  }
});
// CONCATENATED MODULE: ./components/callback/PaymentSuccessContent.vue?vue&type=script&lang=js
 /* harmony default export */ var callback_PaymentSuccessContentvue_type_script_lang_js = (PaymentSuccessContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/callback/PaymentSuccessContent.vue?vue&type=style&index=0&id=50d4e228&prod&scoped=true&lang=css
var PaymentSuccessContentvue_type_style_index_0_id_50d4e228_prod_scoped_true_lang_css = __webpack_require__(807);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/callback/PaymentSuccessContent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  callback_PaymentSuccessContentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "50d4e228",
  null
  
)

/* harmony default export */ var PaymentSuccessContent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/PaymentErrorContent.vue?vue&type=template&id=5de9b498&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "payment-error-container"
  }, [_c('div', {
    staticClass: "error-icon-wrapper"
  }, [_vm.isFailureState ? _c('div', {
    staticClass: "error-icon"
  }, [_c('i', {
    staticClass: "fa fa-times",
    staticStyle: {
      "font-size": "50px",
      "color": "red"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("پرداخت ناموفق")])]) : _c('div', {
    staticClass: "success-icon"
  }, [_c('i', {
    staticClass: "fa fa-check",
    staticStyle: {
      "font-size": "50px",
      "color": "green"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("پرداخت موفق")])])]), _vm._v(" "), _vm.errorTitle ? _c('div', {
    staticClass: "error-alert"
  }, [_c('div', {
    staticClass: "alert-icon"
  }, [_vm.isFailureState ? _c('i', {
    staticClass: "fa fa-exclamation-triangle",
    staticStyle: {
      "font-size": "18px",
      "color": "#ea2a33"
    },
    attrs: {
      "aria-hidden": "true"
    }
  }) : _c('i', {
    staticClass: "fa fa-info-circle",
    staticStyle: {
      "font-size": "18px",
      "color": "orange"
    },
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "alert-content"
  }, [_c('div', {
    staticClass: "alert-title"
  }, [_vm._v(_vm._s(_vm.errorTitle))]), _vm._v(" "), _vm.errorSubtitle ? _c('div', {
    staticClass: "alert-subtitle"
  }, [_vm._v("\n        " + _vm._s(_vm.errorSubtitle) + "\n      ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.showRefundMessage ? _c('div', {
    staticClass: "info-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "info-text"
  }, [_vm._v("\n      اگر مبلغی از حساب شما کسر شده است، نهایتا ظرف ۷۲ ساعت آینده به حساب شما\n      برگشت داده خواهد شد\n    ")])]) : _vm.showRetryMessage ? _c('div', {
    staticClass: "info-box"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "info-text"
  }, [_vm._v("\n      می توانید پرداخت خود را بررسی کنید و یا نسبت به پرداخت مجدد اقدام کنید\n    ")])]) : _vm._e(), _vm._v(" "), _vm.refNum || _vm.message ? _c('div', {
    staticClass: "order-details"
  }, [_vm.refNum ? _c('div', {
    staticClass: "order-item"
  }, [_c('span', {
    staticClass: "order-label"
  }, [_vm._v("شماره پیگیری :")]), _vm._v(" :\n      "), _c('span', {
    staticClass: "order-value"
  }, [_vm._v(_vm._s(_vm.refNum))])]) : _vm._e(), _vm._v(" "), _vm.message ? _c('div', {
    staticClass: "order-item"
  }, [_c('span', {
    staticClass: "order-value"
  }, [_vm._v(_vm._s(_vm.message))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "divider"
  })]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "info-icon"
  }, [_c('i', {
    staticClass: "fa fa-exclamation-circle",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "info-icon"
  }, [_c('i', {
    staticClass: "fa fa-exclamation-circle",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}];

// CONCATENATED MODULE: ./components/callback/PaymentErrorContent.vue?vue&type=template&id=5de9b498&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(140);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/PaymentErrorContent.vue?vue&type=script&lang=js


/* harmony default export */ var PaymentErrorContentvue_type_script_lang_js = ({
  name: 'PaymentErrorContent',
  props: {
    errorType: {
      type: String,
      required: true,
      validator: function validator(value) {
        return ['checkagain', 'show_login', 'default'].includes(value);
      }
    },
    refNum: {
      type: [String, Number],
      default: null
    },
    message: {
      type: String,
      default: null
    },
    showRefundMessages: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isFailureState: function isFailureState() {
      return this.errorType === 'checkagain' || this.errorType === 'default';
    },
    errorTitle: function errorTitle() {
      if (this.errorType === 'show_login') {
        return 'پرداخت شما موفقیت آمیز بوده است';
      }
      return 'متاسفانه خرید شما موفقیت آمیز نبود';
    },
    errorSubtitle: function errorSubtitle() {
      if (this.errorType === 'show_login') {
        return 'اما برای استفاده از آن باید وارد سایت شوید';
      }
      if (this.errorType === 'default') {
        return 'و یا در حین انجام تراکنش مشکلی رخ داده است';
      }
      return null;
    },
    showRefundMessage: function showRefundMessage() {
      return this.errorType === 'checkagain' && this.showRefundMessages;
    },
    showRetryMessage: function showRetryMessage() {
      return this.errorType === 'default';
    }
  }
});
// CONCATENATED MODULE: ./components/callback/PaymentErrorContent.vue?vue&type=script&lang=js
 /* harmony default export */ var callback_PaymentErrorContentvue_type_script_lang_js = (PaymentErrorContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/callback/PaymentErrorContent.vue?vue&type=style&index=0&id=5de9b498&prod&scoped=true&lang=css
var PaymentErrorContentvue_type_style_index_0_id_5de9b498_prod_scoped_true_lang_css = __webpack_require__(808);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/callback/PaymentErrorContent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  callback_PaymentErrorContentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5de9b498",
  null
  
)

/* harmony default export */ var PaymentErrorContent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/SupportContactSection.vue?vue&type=template&id=53db388c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('div', {
    staticClass: "support-contact"
  }, [_c('a', {
    staticClass: "support-link",
    attrs: {
      "href": "https://telegram.me/srmweb",
      "target": "_blank"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "telegram-icon",
    attrs: {
      "data-src": __webpack_require__(520),
      "alt": "Telegram Icon"
    }
  }), _vm._v("\n      پشتیبانی تلگرام\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "support-link"
  }, [_vm._v("تلفن پشتیبانی (ساعات اداری) : 02191690309")]), _vm._v(" "), _c('div', {
    staticClass: "support-link"
  }, [_vm._v("\n      تلفن پشتیبانی (ساعات غیراداری) : 02191690309\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  })]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/callback/SupportContactSection.vue?vue&type=template&id=53db388c&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/callback/SupportContactSection.vue?vue&type=script&lang=js
/* harmony default export */ var SupportContactSectionvue_type_script_lang_js = ({
  name: 'SupportContactSection'
});
// CONCATENATED MODULE: ./components/callback/SupportContactSection.vue?vue&type=script&lang=js
 /* harmony default export */ var callback_SupportContactSectionvue_type_script_lang_js = (SupportContactSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/callback/SupportContactSection.vue?vue&type=style&index=0&id=53db388c&prod&scoped=true&lang=css
var SupportContactSectionvue_type_style_index_0_id_53db388c_prod_scoped_true_lang_css = __webpack_require__(809);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/callback/SupportContactSection.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  callback_SupportContactSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "53db388c",
  null
  
)

/* harmony default export */ var SupportContactSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_callback_vue_vue_type_style_index_0_id_340bff02_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(847);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_callback_vue_vue_type_style_index_0_id_340bff02_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_callback_vue_vue_type_style_index_0_id_340bff02_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_callback_vue_vue_type_style_index_1_id_340bff02_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(848);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_callback_vue_vue_type_style_index_1_id_340bff02_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_callback_vue_vue_type_style_index_1_id_340bff02_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);