(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_search_vue_vue_type_style_index_0_id_405eb6b0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(877);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_search_vue_vue_type_style_index_0_id_405eb6b0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_search_vue_vue_type_style_index_0_id_405eb6b0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/search/_search.vue?vue&type=template&id=405eb6b0&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "search-page-container"
  }, [_c('div', {
    staticClass: "search-page-header"
  }, [_c('div', {
    staticClass: "search-input-container"
  }, [_c('b-form-input', {
    ref: "searchInput",
    staticClass: "search-input",
    attrs: {
      "autofocus": "",
      "placeholder": _vm.$t('new.search'),
      "type": "text"
    },
    on: {
      "input": _vm.onInput,
      "keydown": [function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) return null;
        $event.preventDefault();
        return _vm.moveSelection(1);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) return null;
        $event.preventDefault();
        return _vm.moveSelection(-1);
      }, function ($event) {
        if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        $event.preventDefault();
        return _vm.handleEnter.apply(null, arguments);
      }],
      "focus": _vm.onFocus,
      "blur": _vm.onBlur
    },
    model: {
      value: _vm.query,
      callback: function callback($$v) {
        _vm.query = $$v;
      },
      expression: "query"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn btn-search",
    on: {
      "click": _vm.IN_SEARCH
    }
  }, [_c('i', {
    staticClass: "icon-search"
  })]), _vm._v(" "), _vm.showAutocomplete ? _c('div', {
    staticClass: "autocomplete-dropdown"
  }, [_vm.autocompleteLoading ? _c('div', {
    staticClass: "autocomplete-item loading"
  }, [_vm._v("\n          ...\n        ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.suggestions, function (item, idx) {
    return _c('div', {
      key: item.id + '-' + idx,
      class: ['autocomplete-item', {
        active: idx === _vm.selectedSuggestion
      }],
      on: {
        "mousedown": function mousedown($event) {
          $event.preventDefault();
          return _vm.selectSuggestion(item);
        }
      }
    }, [_c('div', {
      staticClass: "autocomplete-title"
    }, [_vm._v("\n            " + _vm._s(_vm.ChooseLang(item.title_en || item.title, item.title_fa)) + "\n          ")]), _vm._v(" "), item.type ? _c('div', {
      staticClass: "autocomplete-meta"
    }, [_vm._v("\n            " + _vm._s(item.type) + "\n          ")]) : _vm._e()]);
  }), _vm._v(" "), !_vm.autocompleteLoading && _vm.suggestions.length === 0 ? _c('div', {
    staticClass: "autocomplete-item empty"
  }, [_vm._v("\n          هیچ موردی یافت نشد\n        ")]) : _vm._e()], 2) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "search-page-content"
  }, [_c('FilterContents', {
    attrs: {
      "show": true,
      "savedata": false,
      "no-top": false,
      "is-search": true
    },
    on: {
      "execute_content_filtering": _vm.execute_content_filtering
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "search-main-content"
  }, [_c('div', {
    staticClass: "search_badge"
  }, [_c('a', {
    staticClass: "badge badge-pill small font-weight-normal py-2 px-3 mt-2 mb-2",
    class: {
      'badge-secondary': !_vm.imdb,
      'badge-info': _vm.imdb
    },
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        _vm.imdb = !_vm.imdb;
        _vm.IN_SEARCH();
      }
    }
  }, [_vm._v("امتیاز +۸")])]), _vm._v(" "), !_vm.query && _vm.lastsearchs && _vm.data.data == null && _vm.data.cast == null ? _c('div', {
    staticClass: "search-tags",
    attrs: {
      "id": "search-tags"
    }
  }, _vm._l(_vm.lastsearchs, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "tag mt-2"
    }, [_c('i', {
      staticClass: "icon-close",
      on: {
        "click": function click($event) {
          return _vm.removeSearch(item);
        }
      }
    }), _vm._v(" "), _c('span', {
      on: {
        "click": function click($event) {
          _vm.query = item;
          _vm.IN_SEARCH();
        }
      }
    }, [_vm._v(_vm._s(item))])]);
  }), 0) : _vm._e(), _vm._v(" "), !_vm.query && _vm.topsearch && _vm.data.data == null && _vm.data.cast == null ? _c('header', {
    staticClass: "headline py-4"
  }, [_c('h6', {
    staticClass: "title"
  }, [_vm._v("محبوبترین جستجوها")])]) : _vm._e(), _vm._v(" "), !_vm.query && _vm.topsearch && _vm.data.data == null && _vm.data.cast == null ? _c('div', {
    staticClass: "d-flex flex-column align-start popular_search",
    attrs: {
      "id": "popular_search"
    }
  }, _vm._l(_vm.topsearch, function (item, index) {
    return _c('a', {
      key: index,
      staticClass: "clearfix",
      class: {
        'pt-4': index > 0
      },
      attrs: {
        "href": ""
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          _vm.query = item;
          _vm.IN_SEARCH();
        }
      }
    }, [_vm._v(_vm._s(item))]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.noresult && _vm.query ? _c('div', {
    staticClass: "movie_notFound",
    attrs: {
      "id": "notFound"
    }
  }, [_c('p', [_vm._v("\n          متاسفانه چیزی پیدا نکردیم. میتوانید به قسمت\n          "), _c('nuxt-link', {
    attrs: {
      "to": "/genres"
    }
  }, [_c('span', [_vm._v("دسته بندی")])]), _vm._v("\n          سری بزنین یا\n          "), _c('nuxt-link', {
    attrs: {
      "to": "/genres"
    }
  }, [_c('span', [_vm._v("درخواست اضافه کردن فیلم یا سریال")])]), _vm._v("\n          مورد نظرتون رو بدین.\n        ")], 1)]) : _vm._e(), _vm._v(" "), _vm.isLoading ? _c('div', {
    staticClass: "search_skeleton mt-5 container-fluid"
  }, _vm._l(10, function (n) {
    return _c('div', {
      key: n,
      staticClass: "actor"
    }, [_c('b-skeleton-img', {
      staticClass: "mb-2 rounded",
      attrs: {
        "no-aspect": "",
        "width": "142px",
        "height": "212px",
        "animation": "wave"
      }
    }), _vm._v(" "), _c('b-skeleton', {
      attrs: {
        "width": "70%",
        "animation": "wave"
      }
    })], 1);
  }), 0) : _vm.data.data != null || _vm.data.cast != null ? _c('div', {
    staticClass: "search_collection",
    attrs: {
      "id": "actor"
    }
  }, [_c('div', {
    staticClass: "mt-5"
  }, [_vm.data.data != null ? _c('div', {
    staticClass: "container-fluid"
  }, _vm._l(_vm.data.data, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "mt-2 actor"
    }, [_c('nuxt-link', {
      staticClass: "link-wrapper",
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [!item.ir && item.persian ? _c('span', {
      staticClass: "label label-rounded label-red label-1"
    }, [_vm._v("دوبله")]) : _vm._e(), _vm._v(" "), !item.ir && !item.persian ? _c('span', {
      staticClass: "label label-rounded label-warning label-1"
    }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), item.free && _vm.$config.envname == 'upera' ? _c('span', {
      staticClass: "label label-blue label-2"
    }, [_vm._v("رایگان")]) : _vm._e(), _vm._v(" "), _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
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
    }, false))], 1), _vm._v(" "), _c('h6', {
      staticClass: "mt-2 small font-weight-normal"
    }, [_vm._v("\n                " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n              ")])], 1);
  }), 0) : _vm._e(), _vm._v(" "), _vm.data.cast != null ? _c('div', {
    staticClass: "container-fluid mt-4"
  }, _vm._l(_vm.data.cast, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "actor2"
    }, [_c('nuxt-link', {
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
      staticClass: "rounded-circle",
      attrs: {
        "data-src": 'https://thumb.upera.shop/thumb?w=140&h=140&q=100&a=t&src=https://cdn.upera.shop/s3/casts/' + item.image,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 140,
      height: 140,
      show: true
    }, false)), _vm._v(" "), _c('span', {
      staticClass: "block",
      class: _vm.$colorMode.value === 'dark' ? 'text-white' : 'text-dark'
    }, [_vm._v(_vm._s(_vm.ChooseLang(item.name, item.name_fa)))])], 1)], 1);
  }), 0) : _vm._e()])]) : _vm._e()])], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/search/_search.vue?vue&type=template&id=405eb6b0&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(39);

// EXTERNAL MODULE: ./components/FilterContents.vue + 4 modules
var FilterContents = __webpack_require__(253);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/search/_search.vue?vue&type=script&lang=js


function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }













/* harmony default export */ var _searchvue_type_script_lang_js = ({
  components: {
    FilterContents: FilterContents["default"]
  },
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var queries, res, noresult2, res2, _res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!context.params.search) {
              _context.next = 3;
              break;
            }
            queries = {
              query: context.params.search
            };
            if (context.query.dubbed) {
              queries.dubbed = 1;
            }
            if (context.query.subtitle) {
              queries.subtitle = 1;
            }
            if (context.query.imdb) {
              queries.imdb = 1;
            }
            if (context.query.kids) {
              queries.kids = 1;
            }
            _context.next = 1;
            return context.app.$axios.post('/ghost/get/search' + context.store.getters.filtercontents, queries);
          case 1:
            res = _context.sent;
            if (res.data.data.data == null && res.data.data.cast == null) noresult2 = true;else {
              noresult2 = false;
            }
            _context.next = 2;
            return context.app.$axios.get('/ghost/topsearch');
          case 2:
            res2 = _context.sent;
            if (context.app.i18n.locale !== 'fa') res2.data.data.topsearch = res2.data.data.topsearch_en;
            return _context.abrupt("return", {
              data: res.data.data,
              topsearch: res2.data.data.topsearch,
              noresult: noresult2
            });
          case 3:
            _context.next = 4;
            return context.app.$axios.get('/ghost/topsearch');
          case 4:
            _res = _context.sent;
            if (context.app.i18n.locale !== 'fa') _res.data.data.topsearch = _res.data.data.topsearch_en;
            return _context.abrupt("return", {
              data: {
                data: null,
                cast: null
              },
              topsearch: _res.data.data.topsearch
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
      query: null,
      dubbed: 0,
      subtitle: 0,
      imdb: 0,
      kids: 0,
      showCast: null,
      data: {},
      topsearch: {},
      noresult: false,
      isLoading: false,
      // Autocomplete state
      suggestions: [],
      showAutocomplete: false,
      autocompleteTimer: null,
      autocompleteLoading: false,
      autocompleteLimit: 8,
      selectedSuggestion: -1
    };
  },
  head: function head() {
    return {
      title: this.$route.params.search ? this.$route.params.search + ' | جستجو' : 'جستجو'
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex_esm["c" /* mapGetters */])({
    lastsearchs: 'search/lastsearchs'
  })), {}, {
    filtercontents: function filtercontents() {
      return this.$store.getters.filtercontents;
    }
  }),
  mounted: function mounted() {
    var _this = this;
    this.$store.dispatch('search/GetLastSearchs', this.$route.params.search);
    if (this.$route.params.search) {
      this.query = this.$route.params.search;
      this.dubbed = this.$route.query.dubbed;
      this.subtitle = this.$route.query.subtitle;
      this.imdb = this.$route.query.imdb;
      this.kids = this.$route.query.kids;
      this.$store.dispatch('search/addSearch', this.$route.params.search);
    }
    // Focus input on mount
    this.$nextTick(function () {
      if (_this.$refs.searchInput) {
        _this.$refs.searchInput.focus();
      }
    });
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en;
    },
    // Autocomplete methods
    onInput: function onInput() {
      var _this2 = this;
      // Debounce autocomplete
      if (this.autocompleteTimer) clearTimeout(this.autocompleteTimer);
      if (this.query && this.query.length > 1) {
        this.autocompleteTimer = setTimeout(function () {
          _this2.fetchAutocomplete();
        }, 300);
      } else {
        this.suggestions = [];
        this.showAutocomplete = false;
        this.selectedSuggestion = -1;
      }
    },
    fetchAutocomplete: function fetchAutocomplete() {
      var _this3 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var response, payload, _t;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this3.autocompleteLoading = true;
              _context2.prev = 1;
              _context2.next = 2;
              return _this3.$axios.post('/ghost/get/search/autocomplete', null, {
                params: {
                  q: _this3.query,
                  limit: _this3.autocompleteLimit
                },
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                }
              });
            case 2:
              response = _context2.sent;
              payload = response && response.data ? response.data.data || response.data : [];
              _this3.suggestions = payload || [];
              _this3.showAutocomplete = _this3.suggestions.length > 0;
              _this3.selectedSuggestion = -1;
              _context2.next = 4;
              break;
            case 3:
              _context2.prev = 3;
              _t = _context2["catch"](1);
              console.error('Autocomplete error:', _t);
              _this3.suggestions = [];
              _this3.showAutocomplete = false;
            case 4:
              _context2.prev = 4;
              _this3.autocompleteLoading = false;
              return _context2.finish(4);
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 3, 4, 5]]);
      }))();
    },
    moveSelection: function moveSelection(delta) {
      if (!this.showAutocomplete || this.suggestions.length === 0) return;
      var max = this.suggestions.length - 1;
      var next = this.selectedSuggestion + delta;
      if (next < 0) next = 0;
      if (next > max) next = max;
      this.selectedSuggestion = next;
    },
    handleEnter: function handleEnter() {
      if (this.showAutocomplete && this.selectedSuggestion >= 0) {
        var item = this.suggestions[this.selectedSuggestion];
        if (item) this.selectSuggestion(item);
      } else {
        this.IN_SEARCH();
      }
    },
    selectSuggestion: function selectSuggestion(item) {
      var title = this.ChooseLang(item.title_en || item.title, item.title_fa);
      this.query = title;
      this.showAutocomplete = false;
      this.suggestions = [];
      this.selectedSuggestion = -1;
      this.IN_SEARCH();
    },
    onBlur: function onBlur() {
      var _this4 = this;
      setTimeout(function () {
        _this4.showAutocomplete = false;
      }, 150);
    },
    onFocus: function onFocus() {
      if (this.suggestions && this.suggestions.length > 0 && this.query && this.query.length > 1) {
        this.showAutocomplete = true;
      }
    },
    SEARCH: function SEARCH() {
      if (this.query && this.query.length > 1) {
        var queries = {};
        if (this.dubbed) queries.dubbed = 1;
        if (this.subtitle) queries.subtitle = 1;
        if (this.imdb) queries.imdb = 1;
        if (this.kids) queries.kids = 1;
        this.$router.push({
          name: 'search-search',
          params: {
            search: this.query
          },
          query: queries
        });
      }
    },
    removeSearch: function removeSearch(x) {
      this.$store.dispatch('search/removeSearch', x);
    },
    IN_SEARCH: function IN_SEARCH() {
      var _this5 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var queries, apiurl, response, _t2;
        return regeneratorRuntime.wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(_this5.query && _this5.query.length > 1)) {
                _context3.next = 5;
                break;
              }
              _this5.isLoading = true;
              queries = {
                query: _this5.query
              };
              if (_this5.dubbed) queries.dubbed = 1;
              if (_this5.subtitle) queries.subtitle = 1;
              if (_this5.imdb) queries.imdb = 1;
              if (_this5.kids) queries.kids = 1;
              _context3.prev = 1;
              apiurl = '/ghost/get/search';
              _context3.next = 2;
              return _this5.$axios.post(apiurl + _this5.filtercontents, queries);
            case 2:
              response = _context3.sent;
              if (response.status === 200) {
                _this5.data = response.data.data;
                if (response.data.data.data == null && response.data.data.cast == null) {
                  _this5.noresult = true;
                } else {
                  _this5.$store.dispatch('search/addSearch', _this5.query);
                  _this5.noresult = false;
                }
              }
              _context3.next = 4;
              break;
            case 3:
              _context3.prev = 3;
              _t2 = _context3["catch"](1);
              _this5.data = {
                data: null,
                cast: null
              };
              _this5.noresult = true;
              console.error('Search error:', _t2);
            case 4:
              _context3.prev = 4;
              _this5.isLoading = false;
              return _context3.finish(4);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    execute_content_filtering: function execute_content_filtering() {
      var _this6 = this;
      this.$nuxt.$loading.start();
      this.$store.dispatch('filter/FILTER_LOADING');
      if (this.query && this.query.length > 1) {
        var queries = {
          query: this.query
        };
        if (this.imdb) queries.imdb = 1;
        var apiurl = '/ghost/get/search';
        this.$axios.post(apiurl + this.filtercontents, queries).then(function (response) {
          if (response.status === 200) {
            _this6.data = response.data.data;
            if (response.data.data.data == null && response.data.data.cast == null) {
              _this6.noresult = true;
            } else {
              _this6.$store.dispatch('search/addSearch', _this6.query);
              _this6.noresult = false;
            }
          }
          _this6.$store.dispatch('filter/CLEAN_FILTER_LOADING');
          _this6.$nuxt.$loading.finish();
        }).catch(function (error) {
          _this6.$store.dispatch('filter/CLEAN_FILTER_LOADING');
          _this6.$nuxt.$loading.finish();
          _this6.data = {
            data: null,
            cast: null
          };
          _this6.noresult = true;
          console.error('Filter search error:', error);
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/search/_search.vue?vue&type=script&lang=js
 /* harmony default export */ var search_searchvue_type_script_lang_js = (_searchvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/search/_search.vue?vue&type=style&index=0&id=405eb6b0&prod&scoped=true&lang=css
var _searchvue_type_style_index_0_id_405eb6b0_prod_scoped_true_lang_css = __webpack_require__(1014);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/search/_search.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  search_searchvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "405eb6b0",
  null
  
)

/* harmony default export */ var _search = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FilterContents: __webpack_require__(253).default,Header: __webpack_require__(123).default})


/***/ }),

/***/ 877:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);