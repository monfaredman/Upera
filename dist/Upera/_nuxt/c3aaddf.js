(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseCarousel_vue_vue_type_style_index_0_id_fb1e2ac4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseCarousel_vue_vue_type_style_index_0_id_fb1e2ac4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseCarousel_vue_vue_type_style_index_0_id_fb1e2ac4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/ShowcaseCarousel.vue?vue&type=template&id=fb1e2ac4&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('VueSlickCarousel', _vm._b({
    key: _vm.swiperKey,
    ref: "innerCarousel",
    staticClass: "swiper-wrapper",
    class: {
      'dir-ltr': _vm.sliders.length === 1
    },
    attrs: {
      "rtl": true,
      "arrows": true,
      "dots": true
    },
    scopedSlots: _vm._u([{
      key: "prevArrow",
      fn: function fn() {
        return [_c('button', {
          staticClass: "custom-arrow custom-prev",
          attrs: {
            "type": "button",
            "aria-label": "Previous"
          }
        }, [_c('i', {
          staticClass: "fa fa-chevron-left"
        })])];
      },
      proxy: true
    }, {
      key: "nextArrow",
      fn: function fn() {
        return [_c('button', {
          staticClass: "custom-arrow custom-next",
          attrs: {
            "type": "button",
            "aria-label": "Next"
          }
        }, [_c('i', {
          staticClass: "fa fa-chevron-right"
        })])];
      },
      proxy: true
    }])
  }, 'VueSlickCarousel', _vm.options, false), [_vm._v(" "), _vm._v(" "), _vm._l(_vm.reorderedSliders, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "row no-gutters"
    }, [_c('div', {
      staticClass: "col-12 showcase-pic showcase-pic-main"
    }, [item.media_type === 'video2' ? [_c('video', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }, {
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "showcase-img d-none d-lg-block",
      staticStyle: {
        "width": "1120px",
        "height": "576px",
        "object-fit": "cover"
      },
      attrs: {
        "autoplay": "",
        "loop": "",
        "playsinline": "",
        "data-src": item.video_src,
        "data-poster": item.image_src
      },
      domProps: {
        "muted": item.muted
      },
      on: {
        "loadeddata": function loadeddata($event) {
          item.is_loading = false;
        }
      }
    }), _vm._v(" "), _c('video', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }, {
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "showcase-img d-lg-none",
      staticStyle: {
        "width": "375px",
        "height": "300px",
        "object-fit": "cover"
      },
      attrs: {
        "autoplay": "",
        "loop": "",
        "playsinline": "",
        "data-src": item.video_src,
        "data-poster": item.image_mobile_src
      },
      domProps: {
        "muted": item.muted
      },
      on: {
        "loadeddata": function loadeddata($event) {
          item.is_loading = false;
        }
      }
    }), _vm._v(" "), item.is_loading ? _c('div', {
      staticClass: "video-loading-spinner",
      staticStyle: {
        "position": "absolute",
        "inset": "0",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "z-index": "10"
      }
    }, [_vm._v("\n            Loading…\n          ")]) : _vm._e()] : [_c('b-img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "showcase-img d-none d-lg-block",
      attrs: {
        "blank": "",
        "blank-color": "#bbb",
        "width": "1120",
        "height": "576",
        "show": "",
        "data-src": _vm.transformThumbUrl(item.image_src),
        "alt": item.name
      }
    }), _vm._v(" "), _c('b-img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "showcase-img d-lg-none",
      attrs: {
        "blank": "",
        "blank-color": "#bbb",
        "width": "375",
        "height": "300",
        "show": "",
        "data-src": _vm.transformMobileUrl(item.image_mobile_src),
        "alt": item.name
      }
    })]], 2), _vm._v(" "), _c('div', {
      staticClass: "col-md-6 col-lg-5"
    })]), _vm._v(" "), _c('div', {
      staticClass: "showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-md-3 showcases-desc-wrapper"
    }, [_c('div', {
      staticClass: "showcase-thumbnail-wrapper w-full"
    }, [_c('div', {
      staticClass: "d-flex h-full align-items-end d-flex align-items-center justify-content-start"
    }, [_c('div', {
      staticClass: "showcase-desc-wrapper"
    }, [_c('div', {
      staticClass: "showcase-desc"
    }, [item.logo ? _c('div', {
      staticClass: "showcase-logo mb-2 mb-md-4"
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": item.logo,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      show: true
    }, false))], 1) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "showcase-details"
    }, [item.type != 'episode' ? _c('div', [!item.logo ? _c('div', {
      staticClass: "detail-title text-invert mb-1 mb-md-2"
    }, [_c('nuxt-link', {
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n                    ")])], 1) : _vm._e()]) : _c('div', [!item.logo ? _c('div', {
      staticClass: "detail-title text-invert mb-1 mb-md-2"
    }, [_c('nuxt-link', {
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n                      "), item.season_number > 1 ? _c('span', {
      staticClass: "show-mobile"
    }, [_vm._v("\n                        " + _vm._s(item.season_number) + "\n                      ")]) : _vm._e()])], 1) : _vm._e()]), _vm._v(" "), item.type == 'episode' ? _c('div', {
      staticClass: "detail-paragraph text-invert mb-1 mb-md-3 font-weight-normal"
    }, [item.slogan ? _c('div', {
      staticClass: "tag slogan-episode"
    }, [_vm._v("\n                    " + _vm._s(item.slogan) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('span', {
      class: {
        'slogan-episode-show': item.slogan
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t('show.season')) + _vm._s(item.season_number) + " -\n                    " + _vm._s(_vm.$t('show.episode')) + " " + _vm._s(item.episode_number))])]) : _c('div', {
      staticClass: "detail-paragraph text-invert mb-2 mb-md-3"
    }, [item.slogan ? _c('div', {
      staticClass: "tag"
    }, [_vm._v("\n                    " + _vm._s(item.slogan) + "\n                  ")]) : _vm._l(item.genre, function (persianName, englishName) {
      return _c('nuxt-link', {
        key: englishName,
        staticClass: "tag",
        attrs: {
          "to": {
            name: 'lists-list',
            params: {
              list: englishName
            }
          }
        }
      }, [_vm._v("\n                      " + _vm._s(persianName) + "\n                    ")]);
    })], 2)])]), _vm._v(" "), _c('div', {
      staticClass: "showcase-button-wrapper"
    }, [item.presale ? _c('nuxt-link', {
      staticClass: "btn btn-main",
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_vm._v("\n                به زودی\n              ")]) : item.type != 'series' ? _c('nuxt-link', {
      staticClass: "btn btn-main d-flex justify-content-center align-items-center watch-btn",
      attrs: {
        "to": {
          name: item.type + '-show-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-play fa-xs"
    }), _vm._v(" "), _c('span', {
      staticClass: "mr-2"
    }, [_vm._v("تماشا")])]) : _c('nuxt-link', {
      staticClass: "btn btn-main watch-btn",
      attrs: {
        "to": {
          name: 'series-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('span', [_vm._v(" قسمت ها ")])]), _vm._v(" "), _c('nuxt-link', {
      staticClass: "btn btn-download ml-md-2 text-white showcase-about-btn",
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-info-circle fa-xs mr-2 ml-0"
    }), _vm._v(" "), _c('span', [_vm._v(" درباره ")]), _vm._v(" "), _c('span', [item.type == 'movie' ? _c('span', [_vm._v("فیلم")]) : _c('span', [_vm._v(" سریال")])])])], 1)])])])])]);
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ShowcaseCarousel.vue?vue&type=template&id=fb1e2ac4&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toArray.js
var toArray = __webpack_require__(286);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js
var vue_slick_carousel_umd = __webpack_require__(385);
var vue_slick_carousel_umd_default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_umd);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/ShowcaseCarousel.vue?vue&type=script&lang=js


function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }










/* harmony default export */ var ShowcaseCarouselvue_type_script_lang_js = ({
  name: 'ShowcaseCarousel',
  components: {
    VueSlickCarousel: vue_slick_carousel_umd_default.a
  },
  props: {
    sliders: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    swiperKey: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    reorderedSliders: function reorderedSliders() {
      if (this.sliders.length === 0) return [];
      var _this$sliders = Object(toArray["a" /* default */])(this.sliders),
        first = _this$sliders[0],
        rest = _arrayLikeToArray(_this$sliders).slice(1);
      return [].concat(Object(toConsumableArray["a" /* default */])(rest), [first]);
    }
  },
  methods: {
    next: function next() {
      if (this.$refs.innerCarousel && this.$refs.innerCarousel.next) {
        this.$refs.innerCarousel.next();
      }
    },
    prev: function prev() {
      if (this.$refs.innerCarousel && this.$refs.innerCarousel.prev) {
        this.$refs.innerCarousel.prev();
      }
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n && this.$i18n.locale === 'fa') return fa;
      if (!en) return fa || '';
      return en.charAt(0).toUpperCase() + en.slice(1);
    },
    transformThumbUrl: function transformThumbUrl(url) {
      if (!url) return url;
      var urlObj = new URL(url);

      // Keep the same `src` param
      var src = urlObj.searchParams.get('src');

      // Build the new URL
      return "https://thumb.upera.shop/thumb?w=1920&h=1070&src=".concat(encodeURIComponent(src));
    },
    transformMobileUrl: function transformMobileUrl(url) {
      if (!url) return url;
      var urlObj = new URL(url);

      // Keep the same `src` param
      var src = urlObj.searchParams.get('src');

      // Build the new URL
      return "https://thumb.upera.shop/thumb?w=960&h=1000&a=c&src=".concat(encodeURIComponent(src));
    }
  }
});
// CONCATENATED MODULE: ./components/ShowcaseCarousel.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ShowcaseCarouselvue_type_script_lang_js = (ShowcaseCarouselvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/ShowcaseCarousel.vue?vue&type=style&index=0&id=fb1e2ac4&prod&scoped=true&lang=css
var ShowcaseCarouselvue_type_style_index_0_id_fb1e2ac4_prod_scoped_true_lang_css = __webpack_require__(826);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/ShowcaseCarousel.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShowcaseCarouselvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "fb1e2ac4",
  null
  
)

/* harmony default export */ var ShowcaseCarousel = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);