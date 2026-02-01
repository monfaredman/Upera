(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99,29,30,31,32,33,34,93],{

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/app.vue?vue&type=template&id=72345086&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "app-page pb-4 pb-md-0 mb-md-0"
  }, [_c('Banner'), _vm._v(" "), _c('AppLinks'), _vm._v(" "), _c('NewMoviesSlider', {
    attrs: {
      "ugc-movies": _vm.ugcs ? _vm.ugcs : []
    }
  }), _vm._v(" "), _vm.offers && _vm.offers.length ? _c('div', {
    staticClass: "mt-5"
  }, [_c('HorizontalList', {
    attrs: {
      "title-en": "Top Rated",
      "title-fa": "پیشنهادی",
      "show-all-route": {
        name: 'lists-list',
        params: {
          list: 'offer'
        }
      },
      "items": _vm.offers,
      "instance-name": "topRatedSwiper",
      "options": _vm.swiperOptionPoster,
      "card-variant": "poster",
      "size": {
        w: 183,
        h: 273
      },
      "link-builder": _vm.buildIdRoute,
      "show-badges": true,
      "type": 'offer'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('ChildSection'), _vm._v(" "), _c('LogoSection'), _vm._v(" "), _c('Highlights')], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/app.vue?vue&type=template&id=72345086&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./components/app/Banner.vue + 2 modules
var Banner = __webpack_require__(950);

// EXTERNAL MODULE: ./components/app/AppLinks.vue + 4 modules
var AppLinks = __webpack_require__(855);

// EXTERNAL MODULE: ./components/app/NewMoviesSlider.vue + 4 modules
var NewMoviesSlider = __webpack_require__(922);

// EXTERNAL MODULE: ./components/HorizontalList.vue + 4 modules
var HorizontalList = __webpack_require__(750);

// EXTERNAL MODULE: ./components/app/ChildSection.vue + 2 modules
var ChildSection = __webpack_require__(951);

// EXTERNAL MODULE: ./components/app/LogoSection.vue + 2 modules
var LogoSection = __webpack_require__(952);

// EXTERNAL MODULE: ./components/app/Highlights.vue + 4 modules
var Highlights = __webpack_require__(923);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/app.vue?vue&type=script&lang=js





// import pwa from '@/components/pwa'







/* harmony default export */ var appvue_type_script_lang_js = ({
  components: {
    // pwa,
    Banner: Banner["default"],
    AppLinks: AppLinks["default"],
    NewMoviesSlider: NewMoviesSlider["default"],
    HorizontalList: HorizontalList["default"],
    ChildSection: ChildSection["default"],
    LogoSection: LogoSection["default"],
    Highlights: Highlights["default"]
  },
  data: function data() {
    return {
      showModal: false,
      apptype: 'android',
      ugcs: null,
      offers: null,
      swiperOption: {
        autoplay: {
          delay: 5800
        },
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        breakpoints: {
          768: {
            slidesPerView: 3.5
          },
          992: {
            slidesPerView: 3.5
          },
          1024: {
            slidesPerView: 4.5
          },
          1420: {
            slidesPerView: 7.5
          },
          1670: {
            slidesPerView: 8.5
          }
        }
      },
      swiperOptionPoster: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
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
      ghostApi: '/getV2/discover'
    };
  },
  head: function head() {
    return {
      title: this.ChooseLang('Install Movie and TV Series Application', 'نصب اپلیکیشن فیلم و سریال')
    };
  },
  mounted: function mounted() {
    var _this = this;
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _this$$store, _this$$auth;
      var checkuser, authUser, user;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // Fetch UGCs only if user.show_ugcs === 1
            checkuser = ((_this$$store = _this.$store) === null || _this$$store === void 0 || (_this$$store = _this$$store.getters) === null || _this$$store === void 0 ? void 0 : _this$$store.checkuser) || {};
            authUser = ((_this$$auth = _this.$auth) === null || _this$$auth === void 0 ? void 0 : _this$$auth.user) || {};
            user = checkuser || authUser;
            if (user.show_ugcs === 1) {
              _this.fetchDiscoverData();
            }
            _this.fetchOfferData();
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  methods: {
    buildIdRoute: function buildIdRoute(item) {
      return {
        name: item.type + '-id',
        params: {
          id: item.id
        }
      };
    },
    fetchDiscoverData: function fetchDiscoverData() {
      var _this2 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response, _response$data, _response$data2, listData, items, _t;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 1;
              return _this2.$axios.get('https://web.upera.tv/api/v1/ghost/get/get_listV3/new_titles');
            case 1:
              response = _context2.sent;
              if (response.status === 200) {
                // Extract data from new response structure
                // Response structure: { list: { data: [...] } }
                listData = []; // Try different response structures
                if ((_response$data = response.data) !== null && _response$data !== void 0 && (_response$data = _response$data.list) !== null && _response$data !== void 0 && _response$data.data) {
                  listData = response.data.list.data;
                } else if ((_response$data2 = response.data) !== null && _response$data2 !== void 0 && (_response$data2 = _response$data2.data) !== null && _response$data2 !== void 0 && (_response$data2 = _response$data2.list) !== null && _response$data2 !== void 0 && _response$data2.data) {
                  listData = response.data.data.list.data;
                }

                // Ensure it's an array and take only first 12 items for swiper
                // Convert to plain array to ensure it's recognized as an array
                if (listData && (Array.isArray(listData) || listData.length && typeof listData.length === 'number')) {
                  // Convert to plain array and take first 12 items
                  items = Array.from(listData).slice(0, 12);
                  _this2.ugcs = items;
                } else {
                  _this2.ugcs = [];
                }
              }
              _context2.next = 3;
              break;
            case 2:
              _context2.prev = 2;
              _t = _context2["catch"](0);
              console.error('Error fetching discover:', _t);
              _this2.ugcs = [];
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    fetchOfferData: function fetchOfferData() {
      var _this3 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var response, _t2;
        return regeneratorRuntime.wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 1;
              return _this3.$axios.get('https://web.upera.tv/api/v1/get/offer');
            case 1:
              response = _context3.sent;
              if (response.status === 200) {
                // handle offer data as needed, e.g.:
                _this3.offers = response.data.data;
              }
              _context3.next = 3;
              break;
            case 2:
              _context3.prev = 2;
              _t2 = _context3["catch"](0);
              console.error('Error fetching offer:', _t2);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    show: function show(index) {
      var collapse = document.getElementById('collapse-' + index).getElementsByClassName('fa');
      if (collapse.length) {
        collapse[0].classList.add('fa-angle-down');
        collapse[0].classList.remove('fa-angle-up');
      }
    },
    hide: function hide(index) {
      var collapse = document.getElementById('collapse-' + index).getElementsByClassName('fa');
      if (collapse.length) {
        collapse[0].classList.add('fa-angle-up');
        collapse[0].classList.remove('fa-angle-down');
      }
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa;else return en;
    },
    install: function install(url) {
      if (this.checkuser.show_app == 3) {
        window.location.href = url;
      } else if (this.$auth.loggedIn || !this.$cookiz.get('ref')) {
        window.location.href = url;
      } else {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false
        });
      }
    },
    HIDE_MODAL: function HIDE_MODAL() {
      this.showModal = false;
      if (document.getElementsByClassName('default').length) document.getElementsByClassName('default')[0].classList.remove('blure');
    },
    show_pwa: function show_pwa(type) {
      this.apptype = type;
      this.showModal = true;
    }
  }
});
// CONCATENATED MODULE: ./pages/app.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_appvue_type_script_lang_js = (appvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/app.vue?vue&type=style&index=0&id=72345086&prod&scoped=true&lang=css
var appvue_type_style_index_0_id_72345086_prod_scoped_true_lang_css = __webpack_require__(955);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/app.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "72345086",
  null
  
)

/* harmony default export */ var app = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppLinks: __webpack_require__(855).default,HorizontalList: __webpack_require__(750).default})


/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/pwa.vue?vue&type=template&id=25715a59
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-modal', {
    ref: "pwaModal",
    attrs: {
      "modal-class": "modal-fullscreen",
      "size": "xl",
      "centered": true,
      "hide-footer": "",
      "hide-header": "",
      "no-close-on-backdrop": false,
      "hide-backdrop": false,
      "no-close-on-esc": false,
      "static": false,
      "no-enforce-focus": ""
    }
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.hideModal
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c('div', [_c('h5', {
    staticClass: "mt-2 mb-4 font-weight-bold text-center h6"
  }), _vm._v(" "), _c('div', {
    staticClass: "tenor tenor-m"
  }, [_c('div', {
    staticClass: "text-center mt-4 mb-2"
  }, [_vm.$config.envname == 'upera' ? _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(467),
      "alt": _vm.$config.name_fa
    }
  }) : _vm._e(), _vm._v(" "), _vm.$config.envname == 'plus' && _vm.$colorMode.value == 'light' ? _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "width": "140px",
      "data-src": 'https://cdn.upera.tv/s3/vods/' + _vm.checkuser.logo,
      "alt": _vm.$config.name_fa
    }
  }) : _vm._e(), _vm._v(" "), _vm.$config.envname == 'plus' && _vm.$colorMode.value == 'dark' ? _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "width": "140px",
      "data-src": 'https://cdn.upera.tv/s3/vods/' + _vm.checkuser.logo_dark,
      "alt": _vm.$config.name_fa
    }
  }) : _vm._e()]), _vm._v(" "), _c('h3', {
    staticClass: "title2 text-center mb-6"
  }, [_vm._v("نصب وب‌اپلیکیشن")]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center mb-5"
  }, [_c('svg', {
    attrs: {
      "width": "17",
      "height": "21",
      "viewBox": "0 0 17 21",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M2.48486 20.4879C1.89076 20.4874 1.32116 20.2513 0.900879 19.8314C0.480594 19.4115 0.244223 18.842 0.243164 18.2479V9.71393C0.243694 9.11948 0.480049 8.54955 0.900391 8.12921C1.32073 7.70887 1.89041 7.47245 2.48486 7.47192H4.65576C4.77459 7.47245 4.88873 7.51995 4.97266 7.60406C5.05659 7.68818 5.10374 7.80213 5.104 7.92096C5.104 8.03987 5.05664 8.15392 4.97266 8.2381C4.88867 8.32227 4.77467 8.36967 4.65576 8.36993H2.48486C2.30833 8.3698 2.13382 8.40449 1.9707 8.47198C1.80758 8.53948 1.65901 8.63848 1.53418 8.76331C1.40935 8.88813 1.31066 9.03634 1.24316 9.19946C1.17567 9.36258 1.14098 9.53739 1.14111 9.71393V18.2479C1.14138 18.6043 1.28268 18.946 1.53467 19.198C1.78666 19.45 2.12849 19.5917 2.48486 19.5919H14.0947C14.4508 19.5914 14.7923 19.4496 15.0439 19.1976C15.2956 18.9456 15.437 18.604 15.437 18.2479V9.71393C15.4371 9.53756 15.4023 9.36294 15.335 9.19995C15.2676 9.03696 15.1691 8.88878 15.0444 8.76398C14.9198 8.63917 14.7718 8.54015 14.6089 8.47253C14.446 8.40492 14.2711 8.37007 14.0947 8.36993H11.9219C11.863 8.3698 11.8048 8.35808 11.7505 8.33545C11.6962 8.31281 11.647 8.27973 11.6055 8.23804C11.564 8.19634 11.5312 8.14687 11.5088 8.09247C11.4864 8.03806 11.475 7.97979 11.4751 7.92096C11.4751 7.80222 11.5222 7.68833 11.606 7.60419C11.6897 7.52004 11.8031 7.47245 11.9219 7.47192H14.0947C14.6888 7.47298 15.2583 7.7096 15.6782 8.12988C16.0981 8.55017 16.3344 9.11982 16.335 9.71393V18.2479C16.3342 18.8418 16.0981 19.4111 15.6782 19.831C15.2583 20.2509 14.6886 20.4871 14.0947 20.4879H2.48486ZM7.95117 12.9659V2.46594L5.50391 4.72693C5.44639 4.78104 5.37533 4.81885 5.29834 4.83643C5.22135 4.854 5.14122 4.85076 5.06592 4.82697C4.98998 4.80386 4.92147 4.76088 4.86768 4.70251C4.81388 4.64415 4.77662 4.5725 4.75977 4.49493C4.74215 4.4178 4.74562 4.33739 4.76953 4.26196C4.79344 4.18654 4.83716 4.11882 4.896 4.06592L8.09619 1.10797C8.17918 1.03194 8.28735 0.989746 8.3999 0.989746C8.51245 0.989746 8.62112 1.03194 8.7041 1.10797L11.9038 4.06592C11.9619 4.11936 12.0051 4.18711 12.0288 4.26239C12.0525 4.33767 12.0561 4.41787 12.0391 4.49493C12.0214 4.57192 11.9839 4.64295 11.9302 4.70087C11.8765 4.75878 11.8083 4.80155 11.7329 4.82495C11.6577 4.84845 11.5778 4.85155 11.501 4.83398C11.4242 4.81642 11.3534 4.77876 11.2959 4.72491L8.84717 2.46393V12.9639C8.8473 13.0228 8.83587 13.081 8.81348 13.1354C8.79108 13.1898 8.75782 13.2393 8.71631 13.281C8.6748 13.3227 8.62559 13.3558 8.57129 13.3785C8.51698 13.4011 8.45873 13.4128 8.3999 13.413C8.34107 13.4131 8.28292 13.4016 8.22852 13.3792C8.17411 13.3568 8.1247 13.3239 8.08301 13.2824C8.04131 13.2409 8.00799 13.1916 7.98535 13.1373C7.96272 13.083 7.9513 13.0248 7.95117 12.9659Z",
      "fill": "#4B4BF9"
    }
  })]), _vm._v(" "), _vm.type == 'android' ? _c('div', {
    staticClass: "mr-3 pt-2"
  }, [_vm._v("\n          در پایین صفحه بر روی "), _c('br'), _c('strong', [_vm._v("Add to Home Screen")]), _vm._v("\n          بزنید.\n        ")]) : _c('div', {
    staticClass: "mr-3 pt-2"
  }, [_vm._v("\n          در نوار پایین (یا بالا) روی دکمه "), _c('strong', [_vm._v("Share")]), _vm._v(" بزنید.\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center mb-5"
  }, [_c('svg', {
    attrs: {
      "width": "12",
      "height": "13",
      "viewBox": "0 0 12 13",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M6.31365 11.4759L4.99984 11.4745C4.94242 11.4746 4.88554 11.4634 4.83246 11.4415C4.77938 11.4196 4.73116 11.3874 4.69055 11.3468C4.64995 11.3062 4.61776 11.258 4.59585 11.2049C4.57393 11.1518 4.56272 11.0949 4.56285 11.0375L4.56214 7.753L1.27834 7.753C1.22075 7.75305 1.16372 7.74175 1.11051 7.71974C1.05729 7.69773 1.00894 7.66543 0.968221 7.62471C0.927501 7.58399 0.89521 7.53564 0.873197 7.48243C0.851184 7.42922 0.83988 7.37218 0.839934 7.3146L0.83852 6.00079C0.838467 5.9432 0.84977 5.88617 0.871783 5.83296C0.893796 5.77974 0.926086 5.73139 0.966807 5.69067C1.00753 5.64995 1.05588 5.61766 1.10909 5.59565C1.16231 5.57364 1.21934 5.56233 1.27693 5.56238L4.56144 5.56168L4.55861 2.27505C4.55929 2.15898 4.6057 2.04787 4.68777 1.9658C4.76984 1.88373 4.88095 1.83732 4.99701 1.83664L6.31223 1.83664C6.36982 1.83659 6.42685 1.84789 6.48007 1.8699C6.53328 1.89192 6.58163 1.92421 6.62235 1.96493C6.66307 2.00565 6.69536 2.054 6.71738 2.10721C6.73939 2.16043 6.75069 2.21746 6.75064 2.27505L6.75205 5.56309L10.0415 5.56026C10.0989 5.56013 10.1558 5.57135 10.2089 5.59326C10.262 5.61518 10.3102 5.64736 10.3508 5.68796C10.3914 5.72857 10.4236 5.77679 10.4455 5.82987C10.4674 5.88295 10.4786 5.93983 10.4785 5.99726L10.4799 7.31106C10.4793 7.42753 10.4328 7.53907 10.3505 7.62143C10.2681 7.70379 10.1566 7.75031 10.0401 7.75088L6.75276 7.753L6.75135 11.0382C6.75127 11.1543 6.70513 11.2656 6.62306 11.3476C6.54099 11.4297 6.42971 11.4758 6.31365 11.4759Z",
      "fill": "#4B4BF9"
    }
  })]), _vm._v(" "), _vm.type == 'ios' ? _c('div', {
    staticClass: "mr-3"
  }, [_vm._v("\n          سپس گزینه‌ی "), _c('strong', [_vm._v("Add to Home Screen")]), _vm._v(" را انتخاب کنید.\n        ")]) : _c('div', {
    staticClass: "mr-3"
  }, [_vm._v("\n          در مرحله بعد بر روی "), _c('strong', [_vm._v("Add")]), _vm._v(" بزنید.\n        ")])]), _vm._v(" "), _vm.type == 'ios' ? _c('div', {
    staticClass: "d-flex align-items-center mb-5"
  }, [_c('svg', {
    attrs: {
      "width": "23",
      "height": "10",
      "viewBox": "0 0 23 10",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M7.23109 9.24L6.54509 7.07H3.00309L2.33109 9.24H0.996094L3.97809 0H5.56009L8.56009 9.24H7.23109ZM3.29609 6.118H6.25009L4.76609 1.418L3.29609 6.118ZM13.9231 0H15.1691V9.24H13.9231V8.484C13.7214 8.77099 13.4494 9.00147 13.1332 9.15343C12.8171 9.30539 12.4672 9.37375 12.1171 9.352C11.4993 9.39279 10.8897 9.192 10.4171 8.792C10.2139 8.58998 10.0557 8.34726 9.95302 8.07978C9.8503 7.81229 9.80534 7.5261 9.82109 7.24V4.55C9.80606 4.26438 9.85177 3.97882 9.95519 3.71215C10.0586 3.44549 10.2174 3.20379 10.4211 3.003C10.8869 2.6032 11.4905 2.40118 12.1031 2.44C12.4556 2.4151 12.8085 2.48197 13.1275 2.63409C13.4465 2.78621 13.7206 3.0184 13.9231 3.308V0ZM13.8251 7.24V4.55C13.8348 4.38045 13.805 4.21096 13.7382 4.05481C13.6714 3.89867 13.5694 3.76011 13.4401 3.65C13.1451 3.42637 12.7808 3.31379 12.4111 3.332C12.0476 3.31655 11.6903 3.43066 11.4031 3.654C11.2725 3.76342 11.1692 3.90166 11.1011 4.05785C11.0331 4.21403 11.0023 4.38387 11.0111 4.554V7.24C11.004 7.4083 11.0357 7.57599 11.1036 7.73012C11.1716 7.88426 11.274 8.02073 11.4031 8.129C11.6934 8.35732 12.0562 8.47341 12.4251 8.456C12.7898 8.47133 13.1477 8.35451 13.4331 8.127C13.5619 8.01894 13.6642 7.88279 13.7321 7.72903C13.8001 7.57527 13.8319 7.40797 13.8251 7.24ZM21.1891 0H22.4351V9.24H21.1891V8.484C20.9874 8.77099 20.7154 9.00147 20.3992 9.15343C20.0831 9.30539 19.7332 9.37375 19.3831 9.352C18.7653 9.39279 18.1557 9.192 17.6831 8.792C17.4799 8.58998 17.3217 8.34726 17.219 8.07978C17.1163 7.81229 17.0713 7.5261 17.0871 7.24V4.55C17.0721 4.26438 17.1178 3.97882 17.2212 3.71215C17.3246 3.44549 17.4834 3.20379 17.6871 3.003C18.1529 2.6032 18.7565 2.40118 19.3691 2.44C19.7216 2.4151 20.0745 2.48197 20.3935 2.63409C20.7125 2.78621 20.9866 3.0184 21.1891 3.308V0ZM21.0911 7.24V4.55C21.1008 4.38045 21.071 4.21096 21.0042 4.05481C20.9374 3.89867 20.8354 3.76011 20.7061 3.65C20.4107 3.42744 20.0464 3.31593 19.6771 3.335C19.3136 3.31955 18.9563 3.43366 18.6691 3.657C18.5385 3.76642 18.4352 3.90466 18.3671 4.06085C18.2991 4.21703 18.2683 4.38687 18.2771 4.557V7.24C18.27 7.4083 18.3017 7.57599 18.3696 7.73012C18.4376 7.88426 18.54 8.02073 18.6691 8.129C18.9607 8.35847 19.3255 8.47463 19.6961 8.456C20.058 8.46939 20.4128 8.35268 20.6961 8.127C20.8254 8.01923 20.9283 7.88322 20.9968 7.72944C21.0652 7.57566 21.0975 7.40822 21.0911 7.24Z",
      "fill": "#4B4BF9"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mr-3"
  }, [_vm._v("\n          در نهایت در قسمت بالا، بر روی "), _c('strong', [_vm._v("Add")]), _vm._v(" بزنید.\n        ")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "toolbar toolbar-bottom"
  }, [_c('button', {
    staticClass: "btn btn-secondary btn-block",
    on: {
      "click": _vm.hideModal
    }
  }, [_vm._v("\n        متوجه شدم\n      ")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pwa.vue?vue&type=template&id=25715a59

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/pwa.vue?vue&type=script&lang=js
/* harmony default export */ var pwavue_type_script_lang_js = ({
  props: {
    show: Boolean,
    type: {
      type: String,
      default: 'ios'
    }
  },
  watch: {
    show: function show(val) {
      if (val !== null && this.show) {
        this.showModal();
      } else {
        this.hideModal();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    this.$refs['pwaModal'].$on('hide', function () {
      if (document.getElementsByClassName('default').length) document.getElementsByClassName('default')[0].classList.remove('blure');else window.history.length > 2 ? _this.$router.go(-1) : _this.$router.go();
      _this.$emit('hide-modal', null);
    });
  },
  methods: {
    showModal: function showModal() {
      this.$refs['pwaModal'].show();
      if (document.getElementsByClassName('default').length) document.getElementsByClassName('default')[0].classList.add('blure');
    },
    hideModal: function hideModal() {
      this.$refs['pwaModal'].hide();
      this.$emit('hide-modal', null);
      if (document.getElementsByClassName('default').length) document.getElementsByClassName('default')[0].classList.remove('blure');
    }
  }
});
// CONCATENATED MODULE: ./components/pwa.vue?vue&type=script&lang=js
 /* harmony default export */ var components_pwavue_type_script_lang_js = (pwavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/pwa.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_pwavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pwa = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 813:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Banner_vue_vue_type_style_index_0_id_766ed81a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(770);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Banner_vue_vue_type_style_index_0_id_766ed81a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Banner_vue_vue_type_style_index_0_id_766ed81a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/apk-download.673d8f8.png";

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sibapp-ios.0e4d290.png";

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/anar-ios.e7cdaeb.png";

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pwa-ios.6f23137.png";

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sibirani-ios.f927e07.svg";

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_AppLinks_vue_vue_type_style_index_0_id_48cac996_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(771);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_AppLinks_vue_vue_type_style_index_0_id_48cac996_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_AppLinks_vue_vue_type_style_index_0_id_48cac996_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_NewMoviesSlider_vue_vue_type_style_index_0_id_30479a56_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(772);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_NewMoviesSlider_vue_vue_type_style_index_0_id_30479a56_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_NewMoviesSlider_vue_vue_type_style_index_0_id_30479a56_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ChildSection_vue_vue_type_style_index_0_id_6ce88a4e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(773);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ChildSection_vue_vue_type_style_index_0_id_6ce88a4e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ChildSection_vue_vue_type_style_index_0_id_6ce88a4e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LogoSection_vue_vue_type_style_index_0_id_c96c1d0e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(774);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LogoSection_vue_vue_type_style_index_0_id_c96c1d0e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_LogoSection_vue_vue_type_style_index_0_id_c96c1d0e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Highlights_vue_vue_type_style_index_0_id_4a42398e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(775);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Highlights_vue_vue_type_style_index_0_id_4a42398e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Highlights_vue_vue_type_style_index_0_id_4a42398e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/AppLinks.vue?vue&type=template&id=48cac996&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', [_c('section', {
    staticClass: "app-links-section"
  }, [_c('div', {
    staticClass: "container custom-container"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-12 col-lg-4 text-center"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "apps-image",
    attrs: {
      "data-src": __webpack_require__(535),
      "alt": "Apps"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "col-12 col-lg-8 app-links-content"
  }, [_c('h2', {
    staticClass: "title text-left mb-4 mt-4 mt-lg-0 app-title"
  }, [_vm._v("\n            هر لحظه و هرجا با آپرا فیلم ببین!\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "buttons-wrapper"
  }, _vm._l(_setup.appSections, function (section) {
    return _c('div', {
      key: section.label,
      staticClass: "app-section-row"
    }, [_c('div', {
      staticClass: "section-header"
    }, [section.type !== 'web' ? _c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "section-icon",
      attrs: {
        "data-src": section.icon,
        "alt": section.label
      }
    }) : _c('i', {
      staticClass: "fa fa-tv fa-1x section-icon"
    }), _vm._v(" "), _c('span', {
      staticClass: "section-label"
    }, [_vm._v(_vm._s(section.label))])]), _vm._v(" "), _c('div', {
      staticClass: "section-links"
    }, [section.type !== 'web' ? _vm._l(_setup.getAppLinksByType(section.type), function (link) {
      return _c('div', {
        key: link.label,
        staticClass: "app-link-group"
      }, [_c('div', {
        staticClass: "app-link-images"
      }, [_vm._l(link.imagesSrc, function (img, idx) {
        return [typeof img !== 'string' && img.action ? _c('a', {
          key: "action-".concat(idx),
          staticClass: "app-link-btn",
          attrs: {
            "href": "#"
          },
          on: {
            "click": function click($event) {
              $event.preventDefault();
              return _setup.showPWA(img.action);
            }
          }
        }, [_c('img', {
          directives: [{
            name: "lazy-load",
            rawName: "v-lazy-load"
          }],
          attrs: {
            "data-src": img.src,
            "alt": link.label
          }
        })]) : _c('a', {
          key: "actions-".concat(idx),
          staticClass: "app-link-btn",
          attrs: {
            "href": typeof img === 'string' ? link.href : img.href || link.href
          }
        }, [_c('img', {
          directives: [{
            name: "lazy-load",
            rawName: "v-lazy-load"
          }],
          attrs: {
            "data-src": typeof img === 'string' ? img : img.src,
            "alt": link.label
          }
        })])];
      })], 2)]);
    }) : [_c('b-button', {
      staticClass: "web-link-btn",
      attrs: {
        "href": section.href
      }
    }, [_vm._v("\n                    ورود به WEBTV\n                  ")])]], 2)]);
  }), 0)])])])]), _vm._v(" "), _c(_setup.pwa, {
    attrs: {
      "show": _setup.showModal,
      "type": _setup.apptype
    },
    on: {
      "hide-modal": _setup.hideModal
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app/AppLinks.vue?vue&type=template&id=48cac996&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(14);

// EXTERNAL MODULE: ./components/pwa.vue + 4 modules
var pwa = __webpack_require__(768);

// EXTERNAL MODULE: ./assets/img/app/apk-download.png
var apk_download = __webpack_require__(814);
var apk_download_default = /*#__PURE__*/__webpack_require__.n(apk_download);

// EXTERNAL MODULE: ./assets/img/app/sibapp-ios.png
var sibapp_ios = __webpack_require__(815);
var sibapp_ios_default = /*#__PURE__*/__webpack_require__.n(sibapp_ios);

// EXTERNAL MODULE: ./assets/img/app/anar-ios.png
var anar_ios = __webpack_require__(816);
var anar_ios_default = /*#__PURE__*/__webpack_require__.n(anar_ios);

// EXTERNAL MODULE: ./assets/img/app/pwa-ios.png
var pwa_ios = __webpack_require__(817);
var pwa_ios_default = /*#__PURE__*/__webpack_require__.n(pwa_ios);

// EXTERNAL MODULE: ./assets/img/app/sibirani-ios.svg
var sibirani_ios = __webpack_require__(818);
var sibirani_ios_default = /*#__PURE__*/__webpack_require__.n(sibirani_ios);

// EXTERNAL MODULE: ./assets/images/app/ios.png
var ios = __webpack_require__(539);
var ios_default = /*#__PURE__*/__webpack_require__.n(ios);

// EXTERNAL MODULE: ./assets/images/app/android.png
var android = __webpack_require__(534);
var android_default = /*#__PURE__*/__webpack_require__.n(android);

// EXTERNAL MODULE: ./assets/images/app/desktop.png
var desktop = __webpack_require__(538);
var desktop_default = /*#__PURE__*/__webpack_require__.n(desktop);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/AppLinks.vue?vue&type=script&setup=true&lang=js













// PWA modal state/handlers

/* harmony default export */ var AppLinksvue_type_script_setup_true_lang_js = ({
  __name: 'AppLinks',
  setup: function setup(__props) {
    var showModal = Object(vue_runtime_esm["ref"])(false);
    var apptype = Object(vue_runtime_esm["ref"])('android');
    var showPWA = function showPWA(type) {
      apptype.value = type;
      showModal.value = true;
    };
    var hideModal = function hideModal() {
      showModal.value = false;
    };
    var appSections = [{
      label: 'اپلیکیشن اندروید',
      type: 'android',
      icon: android_default.a
    }, {
      label: 'اپلیکیشن iOS',
      type: 'ios',
      icon: ios_default.a
    }, {
      label: 'اپ تلویزیون',
      type: 'tv',
      icon: desktop_default.a
    }, {
      label: 'دسترسی با مرورگر تلویزیون و کنسول',
      type: 'web',
      icon: 'fa-solid fa-globe ml-2',
      href: 'https://upera.tv/tv' // WebTV href
    }];
    var appLinks = [{
      label: 'اندروید',
      type: 'android',
      href: 'https://app.upera.tv/get_app/apk',
      // Android APK
      imagesSrc: [{
        src: apk_download_default.a,
        href: 'https://app.upera.tv/get_app/apk'
      },
      // Optional PWA for Android
      {
        src: pwa_ios_default.a,
        action: 'android'
      }]
    }, {
      label: 'iOS',
      type: 'ios',
      href: '#',
      imagesSrc: [{
        src: sibirani_ios_default.a,
        href: 'https://sibirani.com/apps/Upera/'
      }, {
        src: anar_ios_default.a,
        href: 'https://anardoni.com/ios/app/gUFrGOKi'
      }, {
        src: sibapp_ios_default.a,
        href: 'https://sibapp.com/applications/%D8%A2%D9%BE%D8%B1%D8%A7'
      },
      // PWA modal for iOS
      {
        src: pwa_ios_default.a,
        action: 'ios'
      }]
    }, {
      label: 'تلویزیون',
      type: 'tv',
      href: 'https://app.upera.tv/get_app/android_tv',
      // TV APK
      imagesSrc: [{
        src: apk_download_default.a,
        href: 'https://app.upera.tv/get_app/android_tv'
      }]
    }];

    // Helper function to filter app links by type
    var getAppLinksByType = function getAppLinksByType(type) {
      return appLinks.filter(function (item) {
        return item.type === type;
      });
    };
    return {
      __sfc: true,
      showModal: showModal,
      apptype: apptype,
      showPWA: showPWA,
      hideModal: hideModal,
      appSections: appSections,
      appLinks: appLinks,
      getAppLinksByType: getAppLinksByType,
      pwa: pwa["default"]
    };
  }
});
// CONCATENATED MODULE: ./components/app/AppLinks.vue?vue&type=script&setup=true&lang=js
 /* harmony default export */ var app_AppLinksvue_type_script_setup_true_lang_js = (AppLinksvue_type_script_setup_true_lang_js); 
// EXTERNAL MODULE: ./components/app/AppLinks.vue?vue&type=style&index=0&id=48cac996&prod&scoped=true&lang=css
var AppLinksvue_type_style_index_0_id_48cac996_prod_scoped_true_lang_css = __webpack_require__(819);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/app/AppLinks.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_AppLinksvue_type_script_setup_true_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "48cac996",
  null
  
)

/* harmony default export */ var AppLinks = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Pwa: __webpack_require__(768).default})


/***/ }),

/***/ 864:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/NewMoviesSlider.vue?vue&type=template&id=30479a56&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "new-movies-slider"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c('h5', {
    staticClass: "mb-0"
  }, [_vm._v(_vm._s(_vm.header))]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mb-1 d-inline-flex align-items-center show-all-link",
    attrs: {
      "to": {
        name: 'lists-list',
        params: {
          list: 'new_titles'
        }
      }
    }
  }, [_c('span', {
    staticClass: "show-all-text ml-1"
  }, [_vm._v(_vm._s(_vm.$t('new.show_all')))]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-h show-all-icon",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "slider-wrapper"
  }, [_vm.isLoading ? _c('div', {
    staticClass: "loading-state d-flex align-items-center justify-content-center",
    style: {
      minHeight: (_vm.size && _vm.size.h ? _vm.size.h : 200) + 'px'
    }
  }, [_c('b-spinner', {
    staticClass: "ml-2",
    attrs: {
      "small": "",
      "type": "grow"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2 text-white"
  }, [_vm._v("در حال بارگذاری…")])], 1) : _c('swiper', {
    ref: "newMoviesSwiper",
    attrs: {
      "options": _vm.swiperOptions
    },
    on: {
      "slideChange": _vm.onSlideChange
    }
  }, _vm._l(_vm.displayedItems, function (item, index) {
    return _c('swiper-slide', {
      key: item.id || index
    }, [_c('MediaCard', {
      attrs: {
        "item": item,
        "variant": 'backdrop',
        "size": _vm.size,
        "link-builder": _vm.buildMediaLink(item),
        "showBadges": _vm.showBadges,
        "showTitle": _vm.showTitle,
        "addSeriesClass": _vm.addSeriesClass,
        "hoverable": true
      }
    })], 1);
  }), 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app/NewMoviesSlider.vue?vue&type=template&id=30479a56&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
var vue_awesome_swiper = __webpack_require__(384);

// EXTERNAL MODULE: ./components/MediaCard.vue + 4 modules
var MediaCard = __webpack_require__(753);

// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.css
var swiper = __webpack_require__(716);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/NewMoviesSlider.vue?vue&type=script&lang=js






 // keep consistent with TopRatedSlider

/* harmony default export */ var NewMoviesSlidervue_type_script_lang_js = ({
  components: {
    Swiper: vue_awesome_swiper["Swiper"],
    SwiperSlide: vue_awesome_swiper["SwiperSlide"],
    MediaCard: MediaCard["default"]
  },
  props: {
    ugcMovies: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // HorizontalList-like config
    cardVariant: {
      type: String,
      default: 'poster'
    },
    size: {
      type: Object,
      default: function _default() {
        return {
          w: 382,
          h: 220
        };
      }
    },
    // linkBuilder: { type: Function, required: true },
    showBadges: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    addSeriesClass: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      header: 'تازه های آپرا',
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          1200: {
            slidesPerView: 3.5
          },
          992: {
            slidesPerView: 2.5
          },
          768: {
            slidesPerView: 1.5
          },
          576: {
            slidesPerView: 1.5
          },
          0: {
            slidesPerView: 1.5
          }
        }
      },
      activeIndex: 0,
      isLoading: true
    };
  },
  computed: {
    displayedItems: function displayedItems() {
      // Directly use ugcMovies prop, no filtering needed
      if (!this.ugcMovies) {
        return [];
      }

      // Handle Vue reactive objects - Vue reactive arrays should still pass Array.isArray()
      // But if it doesn't, try to convert it
      var arr = [];
      if (Array.isArray(this.ugcMovies)) {
        arr = this.ugcMovies;
      } else if (this.ugcMovies && Object(esm_typeof["a" /* default */])(this.ugcMovies) === 'object') {
        // Check if it's array-like (has length and numeric indices)
        if (typeof this.ugcMovies.length === 'number' && this.ugcMovies.length >= 0) {
          // Convert array-like object to real array
          arr = Array.from(this.ugcMovies);
        } else {
          // Not an array or array-like, return empty
          return [];
        }
      } else {
        return [];
      }

      // Show only first 12 items
      return arr.slice(0, 12);
    }
  },
  watch: {
    displayedItems: {
      immediate: true,
      handler: function handler(newVal) {
        var _this = this;
        var ready = Array.isArray(newVal) && newVal.length > 0;
        this.isLoading = !ready;
        if (ready) {
          this.$nextTick(function () {
            var inst = _this.$refs.newMoviesSwiper && _this.$refs.newMoviesSwiper.$swiper;
            if (inst) inst.update();
          });
        }
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    this.$nextTick(function () {
      var inst = _this2.$refs.newMoviesSwiper && _this2.$refs.newMoviesSwiper.$swiper;
      if (inst) {
        inst.update();
        _this2.activeIndex = inst.activeIndex || 0;
      }
    });
  },
  methods: {
    buildMediaLink: function buildMediaLink(item) {
      if (item && item.type && item.id) {
        return {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        };
      }
      // Tries common fields first, then falls back safely
      if (item && item.route) return item.route;
      if (item && item.url) return item.url;
      if (item && item.slug) return "/content/".concat(item.slug);
      if (item && item.id) return "/content/".concat(item.id);
      return '#';
    },
    onSlideChange: function onSlideChange() {
      var inst = this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper;
      if (inst) {
        this.activeIndex = inst.activeIndex || 0;
      }
    },
    slideNext: function slideNext() {
      var inst = this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper;
      if (inst) {
        inst.slideNext();
      }
    },
    slidePrev: function slidePrev() {
      var inst = this.$refs.newMoviesSwiper && this.$refs.newMoviesSwiper.$swiper;
      if (inst) {
        inst.slidePrev();
      }
    }
  }
});
// CONCATENATED MODULE: ./components/app/NewMoviesSlider.vue?vue&type=script&lang=js
 /* harmony default export */ var app_NewMoviesSlidervue_type_script_lang_js = (NewMoviesSlidervue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/app/NewMoviesSlider.vue?vue&type=style&index=0&id=30479a56&prod&scoped=true&lang=css
var NewMoviesSlidervue_type_style_index_0_id_30479a56_prod_scoped_true_lang_css = __webpack_require__(820);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/app/NewMoviesSlider.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_NewMoviesSlidervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "30479a56",
  null
  
)

/* harmony default export */ var NewMoviesSlider = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MediaCard: __webpack_require__(753).default})


/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/Highlights.vue?vue&type=template&id=4a42398e&scoped=true


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-container', {
    staticClass: "p-0",
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', {
    staticClass: "app-footer-row",
    attrs: {
      "no-gutters": ""
    }
  }, _vm._l(_vm.footerItems, function (item, index) {
    return _c('b-col', {
      key: item.title,
      staticClass: "p-4 app-highlight-col d-flex flex-column align-items-start",
      staticStyle: {
        "border": "0.8px solid #525252",
        "border-bottom": "none"
      },
      style: {
        backgroundColor: index % 2 === 0 ? '#404040' : '#373737'
      },
      attrs: {
        "cols": "6",
        "md": "3"
      }
    }, [_c('div', {
      staticClass: "icon-title-wrapper"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": item.icon,
        "height": "40"
      }
    }), _vm._v(" "), _c('h6', {
      staticClass: "my-3",
      staticStyle: {
        "font-size": "large",
        "text-align": "right"
      }
    }, [_vm._v("\n          " + _vm._s(item.title) + "\n        ")])]), _vm._v(" "), _c('p', {
      staticClass: "!text-right"
    }, [_vm._v(_vm._s(item.description))])]);
  }), 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app/Highlights.vue?vue&type=template&id=4a42398e&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/Highlights.vue?vue&type=script&lang=js
/* harmony default export */ var Highlightsvue_type_script_lang_js = ({
  data: function data() {
    return {
      footerItems: [{
        title: 'پشتیبانی از تمامی دستگاه‌ها',
        icon: __webpack_require__(530),
        description: 'سازگاری با انواع دستگاه‌ها از جمله تلفن‌های هوشمند، تبلت‌ها، رایانه‌ها و تلویزیون امکان تماشای محتوا را در هر زمان و مکانی فراهم می‌کند.'
      }, {
        title: 'صرفه جویی در هزینه',
        icon: __webpack_require__(531),
        description: 'بجای هزینه‌ی ماهانه برای کل محتوا، در آپرا میتوانید فقط برای فیلمی که دوست دارید هزینه پرداخت کنید.'
      }, {
        title: 'محتوای متنوع و کامل',
        icon: __webpack_require__(532),
        description: 'کامل ترین مجموعه فیلم و سریال های ایرانی و خارجی، دسترسی به محتوای متنوع و تجربه ای جدید در تماشای آنلاین'
      }, {
        title: 'کیفیت پخش بالا',
        icon: __webpack_require__(533),
        description: 'پلتفرم آپرا با ارائه کیفیت‌های متنوع پخش، به کاربران امکان می‌دهد تا بر اساس سرعت اینترنت خود، بهترین کیفیت را انتخاب کنند.'
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/app/Highlights.vue?vue&type=script&lang=js
 /* harmony default export */ var app_Highlightsvue_type_script_lang_js = (Highlightsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/app/Highlights.vue?vue&type=style&index=0&id=4a42398e&prod&scoped=true&lang=css
var Highlightsvue_type_style_index_0_id_4a42398e_prod_scoped_true_lang_css = __webpack_require__(823);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/app/Highlights.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  app_Highlightsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4a42398e",
  null
  
)

/* harmony default export */ var Highlights = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 950:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/Banner.vue?vue&type=template&id=766ed81a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "banner text-center text-white d-flex align-items-center justify-content-center",
    attrs: {
      "role": "img",
      "aria-label": "تو تصمیم می‌گیری چقدر پرداخت کنی!\nدنیایی از فیلم‌های متنوع ایرانی و خارجی\nآماده تماشا هستید؟"
    }
  }, [_c('h3', {
    staticClass: "display-4"
  }, [_vm._t("default", function () {
    return [_vm._v("\n\"تو تصمیم می‌گیری چقدر پرداخت کنی!\"\n        "), _c('br'), _vm._v("\n        دنیایی از فیلم‌های متنوع ایرانی و خارجی\n        "), _c('br'), _vm._v("\n        آماده تماشا هستید؟\n      ")];
  })], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app/Banner.vue?vue&type=template&id=766ed81a&scoped=true

// EXTERNAL MODULE: ./components/app/Banner.vue?vue&type=style&index=0&id=766ed81a&prod&scoped=true&lang=css
var Bannervue_type_style_index_0_id_766ed81a_prod_scoped_true_lang_css = __webpack_require__(813);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/app/Banner.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "766ed81a",
  null
  
)

/* harmony default export */ var Banner = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/ChildSection.vue?vue&type=template&id=6ce88a4e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "child-section-container"
  }, [_c('b-col', {
    staticClass: "d-flex flex-column align-items-start justify-content-start",
    attrs: {
      "md": "3"
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center justify-content-start mb-4"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "img-fluid",
    attrs: {
      "data-src": __webpack_require__(536),
      "alt": "Bob Image"
    }
  }), _vm._v(" "), _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "mr-2",
    attrs: {
      "data-src": __webpack_require__(537),
      "alt": "آپرا کودک"
    }
  })]), _vm._v(" "), _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "me-2 d-none d-md-block hero-icon",
    staticStyle: {
      "width": "340px",
      "height": "240px"
    },
    attrs: {
      "data-src": __webpack_require__(470),
      "alt": "Icon"
    }
  })]), _vm._v(" "), _c('b-col', {
    staticClass: "text-right mid-col",
    attrs: {
      "md": "6"
    }
  }, [_c('div', {
    staticClass: "mb-4 feature-box first-section kids-section-box"
  }, [_c('h4', [_vm._v("🎈 بخش اختصاصی کودکان")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-align": "right",
      "margin-bottom": "0"
    }
  }, [_vm._v("\n          آپرا یک بخش ویژه برای کودکان دارد که محیطی امن، سرگرم‌کننده و\n          آموزنده را برای فرزندان شما فراهم می‌کند.\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "mb-4 feature-box profile-box kids-profile-box"
  }, [_c('h4', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("👶 پروفایل مخصوص کودک شما")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-align": "right",
      "margin-bottom": "0"
    }
  }, [_vm._v("\n          🔒 امنیت و کنترل والدین\n        ")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "text-align": "right",
      "margin-bottom": "0"
    }
  }, [_vm._v("\n          💡 یادگیری در کنار سرگرمی\n        ")])])]), _vm._v(" "), _c('b-col', {
    staticClass: "text-center d-flex flex-row align-items-center justify-content-end mb-4 cta-col",
    attrs: {
      "md": "3"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "me-2 d-md-none mobile-icon",
    staticStyle: {
      "width": "80px",
      "height": "40px"
    },
    attrs: {
      "data-src": __webpack_require__(470),
      "alt": "Icon"
    }
  }), _vm._v(" "), _c('b-button', {
    staticClass: "child-cta-btn",
    staticStyle: {
      "border-radius": "0.8rem"
    },
    attrs: {
      "variant": "primary",
      "size": "lg",
      "href": "/kids"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "ml-1 d-none d-md-inline",
    attrs: {
      "data-src": __webpack_require__(540),
      "alt": "Icon"
    }
  }), _vm._v("\n        ورود به آپرا کودک\n      ")])], 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app/ChildSection.vue?vue&type=template&id=6ce88a4e&scoped=true

// EXTERNAL MODULE: ./components/app/ChildSection.vue?vue&type=style&index=0&id=6ce88a4e&prod&scoped=true&lang=css
var ChildSectionvue_type_style_index_0_id_6ce88a4e_prod_scoped_true_lang_css = __webpack_require__(821);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/app/ChildSection.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "6ce88a4e",
  null
  
)

/* harmony default export */ var ChildSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/app/LogoSection.vue?vue&type=template&id=c96c1d0e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "logo-section"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(541),
      "alt": "Logo",
      "height": "80"
    }
  })]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/app/LogoSection.vue?vue&type=template&id=c96c1d0e&scoped=true

// EXTERNAL MODULE: ./components/app/LogoSection.vue?vue&type=style&index=0&id=c96c1d0e&prod&scoped=true&lang=css
var LogoSectionvue_type_style_index_0_id_c96c1d0e_prod_scoped_true_lang_css = __webpack_require__(822);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/app/LogoSection.vue

var script = {}



/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  "c96c1d0e",
  null
  
)

/* harmony default export */ var LogoSection = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 955:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_app_vue_vue_type_style_index_0_id_72345086_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(864);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_app_vue_vue_type_style_index_0_id_72345086_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_app_vue_vue_type_style_index_0_id_72345086_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);