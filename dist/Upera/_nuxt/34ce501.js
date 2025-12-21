(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/casts/directors.vue?vue&type=template&id=4addf935

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "actor"
    }
  }, [_c('div', {
    staticClass: "container-fluid pl-md-4 pr-md-5"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.data.casts, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4"
    }, [_c('nuxt-link', {
      staticClass: "actor",
      attrs: {
        "to": {
          name: 'cast-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.shop/thumb?w=141&h=214&q=100&a=c&src=https://cdn.upera.shop/s3/casts/' + item.image,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 141,
      height: 214,
      show: true
    }, false)), _vm._v(" "), _c('span', {
      staticClass: "block"
    }, [_vm._v(_vm._s(_vm.ChooseLang(item.name, item.name_fa)))])], 1)], 1);
  }), 0)]), _vm._v(" "), _vm.distance < 0 && _vm.data.last_page > 1 ? _c('div', {
    staticClass: "text-center p-2"
  }, [_c('button', {
    staticClass: "btn-load-more btn btn-main",
    on: {
      "click": _vm.manualLoad
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t('home.load_more')) + "\n    ")])]) : _vm.data.last_page > 1 ? _c('infinite-loading', {
    ref: "infiniteLoading",
    on: {
      "infinite": _vm.infiniteHandler
    }
  }, [_c('span', {
    attrs: {
      "slot": "no-more"
    },
    slot: "no-more"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "no-results"
    },
    slot: "no-results"
  })]) : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/casts/directors.vue?vue&type=template&id=4addf935

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js
var vue_infinite_loading = __webpack_require__(752);
var vue_infinite_loading_default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/casts/directors.vue?vue&type=script&lang=js




/* harmony default export */ var directorsvue_type_script_lang_js = ({
  components: {
    InfiniteLoading: vue_infinite_loading_default.a
  },
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!context.app.$auth.loggedIn) {
              _context.next = 2;
              break;
            }
            _context.next = 1;
            return context.app.$axios.get('new_casts/2/all/0');
          case 1:
            res = _context.sent;
            _context.next = 4;
            break;
          case 2:
            _context.next = 3;
            return context.app.$axios.get('new_casts/2/all/0');
          case 3:
            res = _context.sent;
          case 4:
            return _context.abrupt("return", {
              data: res.data.data
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      data: {},
      page: 1,
      distance: -Infinity,
      userApi: 'new_casts/2/all/0',
      ghostApi: 'new_casts/2/all/0'
    };
  },
  head: function head() {
    return {
      title: this.$t('new.directors')
    };
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == "fa") return fa;else return en;
    },
    infiniteHandler: function infiniteHandler($state) {
      var _this = this;
      var apiurl;
      if (this.$auth.loggedIn) {
        apiurl = this.userApi;
      } else {
        apiurl = this.ghostApi;
      }
      this.$axios.get(apiurl, {
        params: {
          page: this.page + 1
        }
      }).then(function (response) {
        if (response.status === 200) {
          if (response.data.data.casts.length) {
            _this.data.casts = _this.data.casts.concat(response.data.data.casts);
            if (response.data.data.last_page == _this.page) $state.complete();else $state.loaded();
          } else {
            $state.complete();
          }
        }
      });
      this.page = this.page + 1;
    },
    manualLoad: function manualLoad() {
      var _this2 = this;
      this.distance = 100;
      this.$nextTick(function () {
        _this2.$refs.infiniteLoading.attemptLoad();
      });
    },
    hasHistory: function hasHistory() {
      return window.history.length > 2;
    }
  }
});
// CONCATENATED MODULE: ./pages/casts/directors.vue?vue&type=script&lang=js
 /* harmony default export */ var casts_directorsvue_type_script_lang_js = (directorsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/casts/directors.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  casts_directorsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var directors = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);