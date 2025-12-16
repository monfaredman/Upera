(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ContentStatistics_vue_vue_type_style_index_0_id_5d647bcd_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(904);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ContentStatistics_vue_vue_type_style_index_0_id_5d647bcd_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ContentStatistics_vue_vue_type_style_index_0_id_5d647bcd_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/ContentStatistics.vue?vue&type=template&id=5d647bcd&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "content-statistics-container"
  }, [_c('div', {
    staticClass: "content-statistics"
  }, [_c('div', {
    staticClass: "backdrop-container"
  }, [_vm.data.item.backdrop ? _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.getBackdropUrl(),
      "alt": _vm.data.item.name_fa || _vm.data.item.name
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "content-info"
  }, [_c('h2', {
    staticClass: "content-title"
  }, [_vm._v(_vm._s(_vm.data.item.name_fa || _vm.data.item.name))]), _vm._v(" "), _c('div', {
    staticClass: "chips-container"
  }, [_vm._l(_vm.data.item.new_genres, function (genreFa, genreKey) {
    return _c('span', {
      key: genreKey,
      staticClass: "chip genre-chip"
    }, [_vm._v("\n          " + _vm._s(genreFa) + "\n        ")]);
  }), _vm._v(" "), _vm.data.item.age ? _c('span', {
    staticClass: "chip age-chip"
  }, [_vm._v("\n          رده سنی " + _vm._s(_vm.data.item.age) + "\n        ")]) : _vm._e(), _vm._v(" "), _vm.showSubtitle ? _c('span', {
    staticClass: "chip subtitle-chip"
  }, [_vm._v(" زیرنویس ")]) : _vm._e(), _vm._v(" "), _vm.showDubbed ? _c('span', {
    staticClass: "chip dubbed-chip"
  }, [_vm._v(" دوبله ")]) : _vm._e()], 2), _vm._v(" "), _c('p', {
    staticClass: "content-description"
  }, [_vm._v("\n        " + _vm._s(_vm.data.item.overview_fa || _vm.data.item.overview) + "\n      ")]), _vm._v(" "), _vm.hasAnyCrew ? _c('div', {
    staticClass: "crew-info"
  }, [_vm.directors && _vm.directors.length > 0 ? _c('span', {
    staticClass: "crew-item"
  }, [_c('span', {
    staticClass: "crew-label"
  }, [_vm._v("کارگردان:")]), _vm._v(" "), _c('span', {
    staticClass: "crew-names"
  }, [_vm._l(_vm.directors, function (director, index) {
    return [director && director.id ? _c('nuxt-link', {
      key: "director-".concat(director.id),
      staticClass: "crew-link",
      attrs: {
        "to": {
          name: 'cast-id',
          params: {
            id: director.id
          }
        }
      }
    }, [_vm._v("\n                " + _vm._s(director.name_fa || director.name) + "\n              ")]) : _c('span', {
      key: "director-".concat(index)
    }, [_vm._v(_vm._s(director.name_fa || director.name))]), _vm._v(" "), index < _vm.directors.length - 1 ? _c('span', {
      key: "director-sep-".concat(index)
    }, [_vm._v("،\n              ")]) : _vm._e()];
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.producers && _vm.producers.length > 0 ? _c('span', {
    staticClass: "crew-item"
  }, [_c('span', {
    staticClass: "crew-label"
  }, [_vm._v("تهیه کننده:")]), _vm._v(" "), _c('span', {
    staticClass: "crew-names"
  }, [_vm._l(_vm.producers, function (producer, index) {
    return [producer && producer.id ? _c('nuxt-link', {
      key: "producer-".concat(producer.id),
      staticClass: "crew-link",
      attrs: {
        "to": {
          name: 'cast-id',
          params: {
            id: producer.id
          }
        }
      }
    }, [_vm._v("\n                " + _vm._s(producer.name_fa || producer.name) + "\n              ")]) : _c('span', {
      key: "producer-".concat(index)
    }, [_vm._v(_vm._s(producer.name_fa || producer.name))]), _vm._v(" "), index < _vm.producers.length - 1 ? _c('span', {
      key: "producer-sep-".concat(index)
    }, [_vm._v("،\n              ")]) : _vm._e()];
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.writers && _vm.writers.length > 0 ? _c('span', {
    staticClass: "crew-item"
  }, [_c('span', {
    staticClass: "crew-label"
  }, [_vm._v("نویسنده:")]), _vm._v(" "), _c('span', {
    staticClass: "crew-names"
  }, [_vm._l(_vm.writers, function (writer, index) {
    return [writer && writer.id ? _c('nuxt-link', {
      key: "writer-".concat(writer.id),
      staticClass: "crew-link",
      attrs: {
        "to": {
          name: 'cast-id',
          params: {
            id: writer.id
          }
        }
      }
    }, [_vm._v("\n                " + _vm._s(writer.name_fa || writer.name) + "\n              ")]) : _c('span', {
      key: "writer-".concat(index)
    }, [_vm._v(_vm._s(writer.name_fa || writer.name))]), _vm._v(" "), index < _vm.writers.length - 1 ? _c('span', {
      key: "writer-sep-".concat(index)
    }, [_vm._v("،\n              ")]) : _vm._e()];
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.investors && _vm.investors.length > 0 ? _c('span', {
    staticClass: "crew-item"
  }, [_c('span', {
    staticClass: "crew-label"
  }, [_vm._v("سرمایه گذار:")]), _vm._v(" "), _c('span', {
    staticClass: "crew-names"
  }, [_vm._l(_vm.investors, function (investor, index) {
    return [investor && investor.id ? _c('nuxt-link', {
      key: "investor-".concat(investor.id),
      staticClass: "crew-link",
      attrs: {
        "to": {
          name: 'cast-id',
          params: {
            id: investor.id
          }
        }
      }
    }, [_vm._v("\n                " + _vm._s(investor.name_fa || investor.name) + "\n              ")]) : _c('span', {
      key: "investor-".concat(index)
    }, [_vm._v(_vm._s(investor.name_fa || investor.name))]), _vm._v(" "), index < _vm.investors.length - 1 ? _c('span', {
      key: "investor-sep-".concat(index)
    }, [_vm._v("،\n              ")]) : _vm._e()];
  })], 2)]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.hasTeaser ? _c('div', {
    staticClass: "teaser-button-row"
  }, [_c('button', {
    staticClass: "teaser-button",
    on: {
      "click": function click($event) {
        return _vm.$emit('play-teaser');
      }
    }
  }, [_c('i', {
    staticClass: "far fa-play-circle"
  }), _vm._v(" "), _c('span', [_vm._v("تماشای تیزر و تریلر")])])]) : _vm._e()])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/ContentStatistics.vue?vue&type=template&id=5d647bcd&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/ContentStatistics.vue?vue&type=script&lang=js

/* harmony default export */ var ContentStatisticsvue_type_script_lang_js = ({
  name: 'ContentStatistics',
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {
          item: {}
        };
      }
    },
    type: {
      type: String,
      default: ''
    },
    totalClaps: {
      type: [Number, String],
      default: 0
    },
    episodeNum: {
      type: Number,
      default: 0
    },
    seasonNum: {
      type: Number,
      default: 0
    },
    directors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    producers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    writers: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    investors: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    medias: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['play-teaser'],
  computed: {
    contentTypeText: function contentTypeText() {
      var types = {
        movie: 'فیلم',
        episode: 'قسمت',
        series: 'سریال'
      };
      return types[this.type] || 'محصول';
    },
    showRuntime: function showRuntime() {
      return this.type === 'series' || this.data.item.runtime;
    },
    showSubtitle: function showSubtitle() {
      var _this$data$item, _this$data$item2;
      return !((_this$data$item = this.data.item) !== null && _this$data$item !== void 0 && _this$data$item.ir) && !((_this$data$item2 = this.data.item) !== null && _this$data$item2 !== void 0 && _this$data$item2.persian);
    },
    showDubbed: function showDubbed() {
      var _this$data$item3;
      return (_this$data$item3 = this.data.item) === null || _this$data$item3 === void 0 ? void 0 : _this$data$item3.dubbed;
    },
    hasTeaser: function hasTeaser() {
      return this.medias && this.medias.teaser === 1;
    },
    hasAnyCrew: function hasAnyCrew() {
      return this.directors && this.directors.length > 0 || this.producers && this.producers.length > 0 || this.writers && this.writers.length > 0 || this.investors && this.investors.length > 0;
    }
  },
  methods: {
    getBackdropUrl: function getBackdropUrl() {
      // Check if viewport is mobile (max-width: 767.98px)
      var isMobile = window.innerWidth <= 767.98;
      if (isMobile) {
        // Use backdrop for mobile
        var backdrop = this.data.item.backdrop;
        if (!backdrop) return '';
        return "https://thumb.upera.shop/thumb?w=375&h=300&q=100&a=c&zc=1&src=https://cdn.upera.shop/s3/backdrops/".concat(backdrop);
      } else {
        // Use poster for desktop
        var poster = this.data.item.poster;
        if (!poster) return '';
        return "https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/".concat(poster);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/ContentStatistics.vue?vue&type=script&lang=js
 /* harmony default export */ var content_ContentStatisticsvue_type_script_lang_js = (ContentStatisticsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/ContentStatistics.vue?vue&type=style&index=0&id=5d647bcd&prod&scoped=true&lang=css
var ContentStatisticsvue_type_style_index_0_id_5d647bcd_prod_scoped_true_lang_css = __webpack_require__(1041);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/ContentStatistics.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_ContentStatisticsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5d647bcd",
  null
  
)

/* harmony default export */ var ContentStatistics = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);