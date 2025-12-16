(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_4a54c37d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(883);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_4a54c37d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_4a54c37d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/cast/_id.vue?vue&type=template&id=4a54c37d&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "checkcontainer"
    }
  }, [_c('section', {
    staticClass: "banner",
    attrs: {
      "id": "slideshow"
    }
  }, [_c('div', {
    staticClass: "swiper-container showcase main-slideshow"
  }, [_c('div', {
    staticClass: "swiper-wrapper"
  }, [_c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-md-6 col-lg-9"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-6 col-lg-3 showcase-pic"
  }, [_c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "showcase-img d-none d-lg-block",
    attrs: {
      "data-src": 'https://thumb.upera.shop/thumb?w=800&h=600&q=90&fmt=webp&a=t&src=https://cdn.upera.shop/s3/casts/' + _vm.data.cast.image,
      "alt": _vm.data.cast.name_fa
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: 800,
    height: 400,
    show: true
  }, false)), _vm._v(" "), _c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "showcase-img d-lg-none",
    attrs: {
      "data-src": 'https://thumb.upera.shop/thumb?w=400&h=300&q=90&fmt=webp&a=c&src=https://cdn.upera.shop/s3/casts/' + _vm.data.cast.image,
      "alt": _vm.data.cast.name_fa
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: 400,
    height: 300,
    show: true
  }, false))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-gutter pr-md-3"
  }, [_c('div', {
    staticClass: "showcase-thumbnail-wrapper w-full"
  }, [_c('div', {
    staticClass: "d-flex h-full align-items-end"
  }, [_c('div', {
    staticClass: "pr-md-4 pr-md-2 showcase-desc-wrapper"
  }, [_c('div', {
    staticClass: "showcase-desc"
  }, [_c('div', {
    staticClass: "h2 text-invert mb-1 mb-md-3"
  }, [_vm._v("\n                      " + _vm._s(_vm.ChooseLang(_vm.data.cast.name, _vm.data.cast.name_fa)) + "\n                    ")])])])])])])]), _vm._v(" "), _c('a', {
    staticClass: "back d-md-none",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        _vm.hasHistory() ? _vm.$router.go(-1) : _vm.$router.push('/');
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(751),
      "width": "30",
      "alt": ""
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "back2 d-none d-md-block",
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        _vm.hasHistory() ? _vm.$router.go(-1) : _vm.$router.push('/');
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": __webpack_require__(752),
      "width": "30",
      "alt": ""
    }
  })])])])]), _vm._v(" "), _c('FilterContents', {
    attrs: {
      "show": true,
      "savedata": false
    },
    on: {
      "execute_content_filtering": _vm.execute_content_filtering
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "episode"
    }
  }, [_vm.data.filmography !== null ? _c('div', {
    staticClass: "episodes_collection",
    attrs: {
      "id": "actor"
    }
  }, [_c('div', {
    staticClass: "container-fluid pl-md-4 pr-md-5 mt-3"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.data.filmography, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-4 col-xl-1 col-md-2 col-sm-3 mt-2 mt-lg-4"
    }, [_c('nuxt-link', {
      staticClass: "actor",
      class: {
        'is-series': item.type != 'movie'
      },
      attrs: {
        "to": {
          name: item.type + '-id',
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
      staticClass: "img-grid-flow",
      attrs: {
        "data-src": 'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "img-grid-flow",
      attrs: {
        "data-src": 'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "img-grid-flow",
      attrs: {
        "data-src": 'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), !item.ir && item.persian ? _c('span', {
      staticClass: "label label-rounded label-red label-1"
    }, [_vm._v("دوبله")]) : _vm._e(), _vm._v(" "), !item.ir && !item.persian ? _c('span', {
      staticClass: "label label-rounded label-warning label-1"
    }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), item.free && _vm.$config.envname == 'upera' ? _c('span', {
      staticClass: "label label-blue label-2"
    }, [_vm._v("رایگان")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "mt-2"
    }, [_c('h6', {
      staticClass: "mt-2 small font-weight-normal"
    }, [_vm._v("\n                " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n              ")])])], 1);
  }), 0)])]) : _c('div', {
    staticClass: "container-fluid"
  }, [_vm._m(0)]), _vm._v(" "), _vm.distance < 0 && _vm.data.last_page > 1 ? _c('div', {
    staticClass: "text-center p-2"
  }, [_c('button', {
    staticClass: "btn-load-more btn btn-main",
    on: {
      "click": _vm.manualLoad
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t('home.load_more')) + "\n      ")])]) : _vm.data.last_page > 1 ? _c('client-only', [_c('infinite-loading', {
    ref: "infiniteLoading",
    attrs: {
      "identifier": _vm.infiniteId
    },
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
  })])], 1) : _vm._e()], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center py-5"
  }, [_c('h2', [_vm._v("محتوایی جهت نمایش وجود ندارد")])]);
}];

// CONCATENATED MODULE: ./pages/cast/_id.vue?vue&type=template&id=4a54c37d&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js
var vue_infinite_loading = __webpack_require__(753);
var vue_infinite_loading_default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading);

// EXTERNAL MODULE: ./components/FilterContents.vue + 4 modules
var FilterContents = __webpack_require__(253);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/cast/_id.vue?vue&type=script&lang=js






/* harmony default export */ var _idvue_type_script_lang_js = ({
  components: {
    InfiniteLoading: vue_infinite_loading_default.a,
    FilterContents: FilterContents["default"]
  },
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return context.app.$axios.get('/ghost/get/cast/' + context.params.id + context.store.getters.filtercontents);
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
      data: {},
      page: 1,
      infiniteId: +new Date(),
      distance: -Infinity,
      // userApi:'/get/cast/'+this.$route.params.id,
      ghostApi: '/ghost/get/cast/' + this.$route.params.id
    };
  },
  head: function head() {
    return {
      title: this.ChooseLang(this.data.cast.name, this.data.cast.name_fa)
    };
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa;else return en;
    },
    infiniteHandler: function infiniteHandler($state) {
      var _this = this;
      var apiurl;
      // if (this.$auth.loggedIn) {
      //         apiurl=this.userApi
      // } else {
      apiurl = this.ghostApi;
      // }
      this.$axios.get(apiurl + this.filtercontents, {
        params: {
          page: this.page + 1
        }
      }).then(function (response) {
        if (response.status === 200) {
          if (response.data.data.filmography.length) {
            _this.data.filmography = _this.data.filmography.concat(response.data.data.filmography);
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
    },
    execute_content_filtering: function execute_content_filtering() {
      var _this3 = this;
      this.$nuxt.$loading.start();
      this.$store.dispatch('filter/FILTER_LOADING');
      var apiurl;
      // if (this.$auth.loggedIn) {
      //         apiurl=this.userApi
      // } else {
      apiurl = this.ghostApi;
      // }
      this.$axios.get(apiurl + this.filtercontents).then(function (response) {
        if (response.status === 200) {
          //if (response.data.data.filmography.length) {
          _this3.data.filmography = response.data.data.filmography;
          _this3.page = 1;
          _this3.infiniteId += 1;
          //}
        }
        _this3.$store.dispatch('filter/CLEAN_FILTER_LOADING');
        _this3.$nuxt.$loading.finish();
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/cast/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var cast_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/cast/_id.vue?vue&type=style&index=0&id=4a54c37d&prod&scoped=true&lang=css
var _idvue_type_style_index_0_id_4a54c37d_prod_scoped_true_lang_css = __webpack_require__(1020);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/cast/_id.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cast_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "4a54c37d",
  null
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FilterContents: __webpack_require__(253).default})


/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGlkPSJwcmVmaXhfX2Fycm93LWJhY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uNDg2IC4wMTEpIj4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19SZWN0YW5nbGVfMTQ1IiBkPSJNMCAwSDI0VjI0SDB6IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDEyLjI0OCAxMi4yMzgpIiBzdHlsZT0ib3BhY2l0eTowO2ZpbGw6I0ZGRkZGRiIvPgogICAgICAgIDxwYXRoIGlkPSJwcmVmaXhfX1BhdGhfMjQiIGQ9Ik0xNy43NjQgMTAuMjkxSDYuODgxbDMuMzMxLTMuODQ1YS44Ni44NiAwIDAgMC0uMTE5LTEuMjQ2Ljk0NC45NDQgMCAwIDAtMS4yOTMuMTE3bC00LjU4OSA1LjI5MmExLjA0MiAxLjA0MiAwIDAgMC0uMDgzLjEzMmMwIC4wNDQgMCAuMDcxLS4wNjQuMTE1YS44MTcuODE3IDAgMCAwIDAgLjYzNWMwIC4wNDQgMCAuMDcxLjA2NC4xMTVhMS4wNDIgMS4wNDIgMCAwIDAgLjA4My4xMzJMOC44IDE3LjAyOWEuOTQ4Ljk0OCAwIDAgMCAxLjI5NC4xMTUuODcyLjg3MiAwIDAgMCAuMzI4LS42Ljg1OS44NTkgMCAwIDAtLjIwOS0uNjQ2bC0zLjMzMi0zLjg0M2gxMC44ODNhLjg4My44ODMgMCAxIDAgMC0xLjc2NHoiIGRhdGEtbmFtZT0iUGF0aCAyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjY3IC45ODkpIiBzdHlsZT0iZmlsbDojRkZGIi8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGlkPSJwcmVmaXhfX2Fycm93LWJhY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uNDg2IC4wMTEpIj4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19SZWN0YW5nbGVfMTQ1IiBkPSJNMCAwSDI0VjI0SDB6IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDEyLjI0OCAxMi4yMzgpIiBzdHlsZT0ib3BhY2l0eTowO2ZpbGw6I2Y2MyIvPgogICAgICAgIDxwYXRoIGlkPSJwcmVmaXhfX1BhdGhfMjQiIGQ9Ik0xNy43NjQgMTAuMjkxSDYuODgxbDMuMzMxLTMuODQ1YS44Ni44NiAwIDAgMC0uMTE5LTEuMjQ2Ljk0NC45NDQgMCAwIDAtMS4yOTMuMTE3bC00LjU4OSA1LjI5MmExLjA0MiAxLjA0MiAwIDAgMC0uMDgzLjEzMmMwIC4wNDQgMCAuMDcxLS4wNjQuMTE1YS44MTcuODE3IDAgMCAwIDAgLjYzNWMwIC4wNDQgMCAuMDcxLjA2NC4xMTVhMS4wNDIgMS4wNDIgMCAwIDAgLjA4My4xMzJMOC44IDE3LjAyOWEuOTQ4Ljk0OCAwIDAgMCAxLjI5NC4xMTUuODcyLjg3MiAwIDAgMCAuMzI4LS42Ljg1OS44NTkgMCAwIDAtLjIwOS0uNjQ2bC0zLjMzMi0zLjg0M2gxMC44ODNhLjg4My44ODMgMCAxIDAgMC0xLjc2NHoiIGRhdGEtbmFtZT0iUGF0aCAyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjY3IC45ODkpIiBzdHlsZT0iZmlsbDojZjYzIi8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);