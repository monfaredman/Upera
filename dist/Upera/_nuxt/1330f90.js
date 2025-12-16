(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/genres/index.vue?vue&type=template&id=10bf9d67&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "checkcontainer"
    }
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('h1', {
    staticClass: "page-title mb-2"
  }, [_vm._v("دسته بندی")]), _vm._v(" "), _vm.loading ? _c('div', {
    staticClass: "row genre-link align-items-center mt-lg-3 mt-md-3 pt-lg-3 pt-md-3"
  }, _vm._l(12, function (n) {
    return _c('div', {
      key: n,
      staticClass: "col-6 col-md-4 col-lg-3"
    }, [_vm._m(0, true)]);
  }), 0) : _c('div', {
    staticClass: "row genre-link align-items-center mt-lg-3 mt-md-3 pt-lg-3 pt-md-3"
  }, _vm._l(_vm.filtercontents, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-6 col-md-4 col-lg-3"
    }, [_c('nuxt-link', {
      staticClass: "category-box",
      attrs: {
        "to": item.type === 'genre' ? {
          path: item.href
        } : {
          path: item.href
        }
      }
    }, [_c('div', {
      staticClass: "category-image"
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "rounded category-img",
      attrs: {
        "data-src": item.type === 'genre' ? __webpack_require__(862)("./".concat(item.en, ".png")) : __webpack_require__(862)("./".concat(item.cover, ".png")),
        "alt": item.fa
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      show: true
    }, false))], 1), _vm._v(" "), _c('div', {
      staticClass: "category-content"
    }, [item.fa ? _c('span', {
      staticClass: "category-title"
    }, [_vm._v("\n              " + _vm._s(item.fa) + "\n              "), _c('i', {
      staticClass: "fa fa-chevron-left"
    })]) : _vm._e()])])], 1);
  }), 0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "category-box skeleton"
  }, [_c('div', {
    staticClass: "skeleton-image"
  }), _vm._v(" "), _c('div', {
    staticClass: "skeleton-content"
  }, [_c('div', {
    staticClass: "skeleton-title"
  }), _vm._v(" "), _c('div', {
    staticClass: "skeleton-icon"
  })])]);
}];

// CONCATENATED MODULE: ./pages/genres/index.vue?vue&type=template&id=10bf9d67&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/genres/index.vue?vue&type=script&lang=js







/* harmony default export */ var genresvue_type_script_lang_js = ({
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return context.app.$axios.get('/new_genres' + context.store.getters.filtercontents);
          case 1:
            res = _context.sent;
            return _context.abrupt("return", {
              data: res.data.genres
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
      id: '',
      loading: true,
      categories: [{
        fa: 'بازیگر ایرانی',
        en: 'iranian-actors',
        href: '/casts/iranian-actors',
        cover: 'cast-ir-category'
      }, {
        fa: 'بازیگر خارجی',
        en: 'foreign-actors',
        href: '/casts/foreign-actors',
        cover: 'cast-foreign-category'
      }, {
        fa: 'کارگردان',
        en: 'directors',
        href: '/casts/directors',
        cover: 'director-category'
      }, {
        fa: 'دوبله آپرا',
        en: 'opera-dubbing',
        href: '/lists/internal_studio',
        cover: 'dubbing-category'
      }, {
        fa: 'انیمه',
        en: 'anime',
        href: '/lists/animation',
        cover: 'anime-category'
      }, {
        fa: '۲۵۰ فیلم و سریال برتر',
        en: 'top-250-movies-series',
        href: '/lists/hot',
        cover: '250-category'
      }, {
        fa: 'ویديو کست',
        en: 'videocast',
        href: '/lists/videocast',
        cover: 'cast-category'
      }, {
        fa: 'اسکار',
        en: 'oscar',
        href: '/lists/oscar',
        cover: 'oscar-category'
      }]
    };
  },
  head: function head() {
    return {
      title: 'دسته بندی'
    };
  },
  computed: {
    filtercontents: function filtercontents() {
      var _this = this;
      return [].concat(Object(toConsumableArray["a" /* default */])(this.categories), Object(toConsumableArray["a" /* default */])(this.data.map(function (genre) {
        return {
          fa: genre.fa,
          en: genre.en,
          cover: genre.cover || 'top_250_movies_series',
          type: 'genre',
          href: "/lists/".concat(_this.toLowerCase(genre.en))
        };
      })));
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    // Simulate loading completion
    setTimeout(function () {
      _this2.loading = false;
    }, 1000);
  },
  methods: {
    toLowerCase: function toLowerCase(str) {
      return str.toLowerCase();
    }
  }
});
// CONCATENATED MODULE: ./pages/genres/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_genresvue_type_script_lang_js = (genresvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/genres/index.vue?vue&type=style&index=0&id=10bf9d67&prod&scoped=true&lang=css
var genresvue_type_style_index_0_id_10bf9d67_prod_scoped_true_lang_css = __webpack_require__(951);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/genres/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_genresvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "10bf9d67",
  null
  
)

/* harmony default export */ var genres = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./250-category.png": 594,
	"./Action.png": 595,
	"./Adventure.png": 596,
	"./Animation.png": 597,
	"./Biography.png": 598,
	"./Comedy.png": 599,
	"./Crime.png": 600,
	"./Documentary.png": 601,
	"./Drama.png": 602,
	"./Family.png": 603,
	"./Fantasy.png": 604,
	"./Frame 1000003885-7.png": 605,
	"./Frame 1000003885.png": 606,
	"./History.png": 607,
	"./Horror.png": 608,
	"./Learning.png": 609,
	"./Musical.png": 610,
	"./Mystery.png": 611,
	"./Reality_Show.png": 612,
	"./Romance.png": 613,
	"./Sci_Fi.png": 614,
	"./Short.png": 615,
	"./Sport.png": 616,
	"./Superhero.png": 617,
	"./Talk_Show.png": 618,
	"./Thriller.png": 619,
	"./War.png": 620,
	"./Western.png": 621,
	"./anime-category.png": 622,
	"./cast-category.png": 623,
	"./cast-foreign-category.png": 624,
	"./cast-ir-category.png": 625,
	"./director-category.png": 626,
	"./dubbing-category.png": 627,
	"./oscar-category.png": 628
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 862;

/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_10bf9d67_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(863);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_10bf9d67_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_10bf9d67_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);