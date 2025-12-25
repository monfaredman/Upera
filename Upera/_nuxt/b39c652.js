(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10,75,78,79,80,81],{

/***/ 1047:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseContent_vue_vue_type_style_index_0_id_fcb076ee_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(910);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseContent_vue_vue_type_style_index_0_id_fcb076ee_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseContent_vue_vue_type_style_index_0_id_fcb076ee_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1052:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ShowcaseContent.vue?vue&type=template&id=fcb076ee&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between",
    attrs: {
      "id": "showcase-thumbnail-wrapper-outter"
    }
  }, [_c('div', {
    staticClass: "showcase-thumbnail-wrapper w-full container-fluid"
  }, [_c('div', {
    staticClass: "d-flex h-full align-items-end d-flex align-items-center justify-content-start"
  }, [_c('div', {
    staticClass: "showcase-desc-wrapper h-full",
    class: [_vm.type === 'series' && _vm.data.item.logo ? 'mb-4' : 'mb-2 mb-md-0']
  }, [_vm.data && _vm.data.item && _vm.data.item.logo ? _c('div', {
    staticClass: "showcase-logo mb-2 mb-md-4"
  }, [_c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.logoSrc,
      "alt": _vm.data.item.name
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    show: true
  }, false))], 1) : _vm._e(), _vm._v(" "), _c('ShowcaseDescription', {
    attrs: {
      "data": _vm.data,
      "type": _vm.type,
      "episode": _vm.episode
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "showcase-stats-wrapper d-flex align-items-center my-2"
  }, [_vm.isLoadingStats ? _c('div', {
    staticClass: "skeleton-stats-loading"
  }) : _c('div', {
    staticClass: "showcase-stats",
    attrs: {
      "role": "group",
      "aria-label": "episode-stats"
    }
  }, [_c('div', {
    staticClass: "stat-item"
  }, [_c('div', {
    staticClass: "stat-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "img-imdb",
    attrs: {
      "data-src": __webpack_require__(630)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "stat-body"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.imdbRate))])])]), _vm._v(" "), _c('div', {
    staticClass: "stat-item"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "stat-body"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.watchTime))])])]), _vm._v(" "), _c('div', {
    staticClass: "stat-item"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "stat-body"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.likes))])])]), _vm._v(" "), _c('div', {
    staticClass: "stat-item"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "stat-body"
  }, [_c('div', {
    staticClass: "stat-value"
  }, [_vm._v(_vm._s(_vm.createdDate))])])])])]), _vm._v(" "), _c('ShowcaseActions', {
    attrs: {
      "id": _vm.data.item.id,
      "has-main-button": _vm.hasMainButton,
      "has-download-button": _vm.hasDownloadButton,
      "main-button-label": _vm.mainButtonLabel,
      "main-button-action": _vm.mainButtonAction,
      "download-button-label": _vm.downloadButtonLabel,
      "clapinterval": _vm.clapinterval,
      "user-claps": _vm.userClaps,
      "is-watchlist": _vm.isWatchlist,
      "episode": _vm.episode,
      "actions": _vm.actions,
      "type": _vm.type
    },
    on: {
      "play": function play($event) {
        return _vm.$emit('play');
      },
      "buy": function buy($event) {
        return _vm.$emit('buy');
      },
      "subscription": function subscription($event) {
        return _vm.$emit('subscription');
      },
      "download": function download($event) {
        return _vm.$emit('download');
      },
      "toggle-watchlist": function toggleWatchlist($event) {
        return _vm.$emit('toggle-watchlist', $event);
      },
      "clap-start": function clapStart($event) {
        return _vm.$emit('clap-start');
      },
      "clap-stop": function clapStop($event) {
        return _vm.$emit('clap-stop');
      },
      "share": function share($event) {
        return _vm.$emit('share');
      }
    }
  })], 1)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stat-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('i', {
    staticClass: "fas fa-clock",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stat-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('i', {
    staticClass: "icon-clap",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stat-icon",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_c('i', {
    staticClass: "fas fa-calendar-alt",
    attrs: {
      "aria-hidden": "true"
    }
  })]);
}];

// CONCATENATED MODULE: ./components/item/showcase/ShowcaseContent.vue?vue&type=template&id=fcb076ee&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(109);

// EXTERNAL MODULE: ./components/item/showcase/ShowcaseDescription.vue + 4 modules
var ShowcaseDescription = __webpack_require__(936);

// EXTERNAL MODULE: ./components/item/showcase/ShowcaseActions.vue + 4 modules
var ShowcaseActions = __webpack_require__(937);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ShowcaseContent.vue?vue&type=script&lang=js




/* harmony default export */ var ShowcaseContentvue_type_script_lang_js = ({
  name: 'ShowcaseContent',
  components: {
    ShowcaseDescription: ShowcaseDescription["default"],
    ShowcaseActions: ShowcaseActions["default"]
  },
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    type: {
      type: String,
      default: ''
    },
    episode: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    hasDownloadButton: {
      type: Boolean,
      default: false
    },
    hasMainButton: {
      type: Boolean,
      default: false
    },
    mainButtonLabel: {
      type: String,
      default: ''
    },
    mainButtonAction: {
      type: String,
      default: ''
    },
    downloadButtonLabel: {
      type: String,
      default: ''
    },
    clapinterval: {
      type: [Boolean, Number],
      default: 0
    },
    userClaps: {
      type: [Number, String],
      default: 0
    },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0
    },
    totalClaps: {
      type: [Number, String],
      default: 0
    },
    actions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    isLoadingStats: {
      type: Boolean,
      default: false
    }
  },
  emits: ['play', 'buy', 'subscription', 'download', 'toggle-watchlist', 'clap-start', 'clap-stop', 'share'],
  computed: {
    logoSrc: function logoSrc() {
      var prefix = 'https://thumb.upera.tv/thumb?w=400&q=90&fmt=webp&src=https://thumb.upera.tv/s3/files/';
      var logo = this.data && this.data.item && this.data.item.logo ? String(this.data.item.logo) : '';
      if (!logo) return logo;
      return logo.startsWith(prefix) ? logo : prefix + logo;
    },
    // NEW computed values for the stats row
    imdbRate: function imdbRate() {
      var src = this.episode && this.episode.rate !== undefined ? this.episode.rate : this.data && this.data.item && this.data.item.rate || '-';
      return src === null || src === '' ? '-' : String(src);
    },
    watchTime: function watchTime() {
      // using 'hour' from provided object as watch time fallback
      var src = this.data && this.data.item && this.data.item.exact_runtime ? this.data.item.exact_runtime : this.data && this.data.item && this.data.item.runtime ? this.data.item.runtime : '';
      var hour = this.episode && this.episode.exact_runtime !== undefined ? this.episode.exact_runtime : this.data && this.data.item && this.data.item.exact_runtime || '';
      return src && this.type == 'movie' ? "".concat(src, " \u062F\u0642\u06CC\u0642\u0647") : hour && this.type !== 'movie' ? "".concat(hour, " \u062F\u0642\u06CC\u0642\u0647") : '-';
    },
    likes: function likes() {
      // prefer totalClaps prop, fallback to traffic or 0
      var fromProp = this.totalClaps || this.userClaps;
      if (fromProp) return String(fromProp);
      var traffic = this.episode && this.episode.traffic !== undefined ? this.episode.traffic : this.data && this.data.item && this.data.item.traffic || 0;
      return String(traffic || 0);
    },
    createdDate: function createdDate() {
      var year = this.episode && this.episode.year || this.data && this.data.item && this.data.item.year || '';
      return year ? String(year) : '-';
    }
  },
  methods: {
    itemsize: function itemsize(e) {
      // Implementation from original code
      var w = window.innerWidth;
      var offset = 25;
      if (w <= 357) offset = 10;else if (w <= 375) offset = 12;
      var outerWrapper = document.getElementById('showcase-thumbnail-wrapper-outter');
      var buttonWrapper = document.getElementById('showcase-button-wrapper');
      var bottomEl = document.querySelector('.showcase-bottom');
      if (!bottomEl || !outerWrapper || !buttonWrapper) {
        return e;
      }
      bottomEl.style.removeProperty('height');
      bottomEl.style.removeProperty('padding-top');
      if (w <= 767.98) {
        var vh = outerWrapper.offsetHeight - buttonWrapper.offsetHeight - offset;
        bottomEl.style.height = "".concat(vh, "px");
        if (!this.hasDownloadButton) {
          var factor = this.data.item.ir ? 0.5 : 1 / 3;
          bottomEl.style.paddingTop = "".concat(vh * factor, "px");
        }
      }
      return e;
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/ShowcaseContent.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_ShowcaseContentvue_type_script_lang_js = (ShowcaseContentvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/ShowcaseContent.vue?vue&type=style&index=0&id=fcb076ee&prod&scoped=true&lang=css
var ShowcaseContentvue_type_style_index_0_id_fcb076ee_prod_scoped_true_lang_css = __webpack_require__(1047);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/ShowcaseContent.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_ShowcaseContentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "fcb076ee",
  null
  
)

/* harmony default export */ var ShowcaseContent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(741);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/IconActions.vue?vue&type=template&id=55380c8e&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "icon-actions",
    class: {
      'row h-full': _vm.isMobile
    }
  }, [_c('a', {
    staticClass: "icon-btn-style",
    class: _vm.watchlistClasses,
    style: _vm.customStyle,
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('toggle-watchlist');
      }
    }
  }, [_c('i', {
    class: {
      'icon-bookmark-empty fa-xs': !_vm.isWatchlist,
      'icon-bookmark fa-xs': _vm.isWatchlist == 1
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "icon-btn-style",
    class: _vm.shareClasses,
    style: _vm.customStyle,
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('share');
      }
    }
  }, [_c('i', {
    staticClass: "icon-share-android fa-xs"
  })]), _vm._v(" "), _c('a', {
    staticClass: "icon-btn-style",
    class: _vm.clapClasses,
    style: _vm.customStyle,
    on: {
      "mousedown": function mousedown($event) {
        return _vm.$emit('clap-start');
      },
      "mouseleave": function mouseleave($event) {
        return _vm.$emit('clap-stop');
      },
      "mouseup": function mouseup($event) {
        return _vm.$emit('clap-stop');
      },
      "touchstart": function touchstart($event) {
        return _vm.$emit('clap-start');
      },
      "touchend": function touchend($event) {
        return _vm.$emit('clap-stop');
      },
      "touchcancel": function touchcancel($event) {
        return _vm.$emit('clap-stop');
      }
    }
  }, [_c('div', {
    staticClass: "likes"
  }, [_vm.userClaps ? _c('span', {
    staticClass: "badge badge-secondary"
  }, [_vm._v(_vm._s(_vm.userClaps))]) : _vm._e(), _vm._v(" "), _c('i', {
    staticClass: "fa fa-thumbs-up fa-xs"
  })])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/IconActions.vue?vue&type=template&id=55380c8e&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/IconActions.vue?vue&type=script&lang=js

/* harmony default export */ var IconActionsvue_type_script_lang_js = ({
  name: 'IconActions',
  props: {
    variant: {
      type: String,
      default: 'desktop' // 'mobile' | 'desktop'
    },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0
    },
    userClaps: {
      type: [Number, String],
      default: 0
    },
    clapActive: {
      type: Boolean,
      default: false
    },
    customStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  computed: {
    isMobile: function isMobile() {
      return this.variant === 'mobile';
    },
    clapClasses: function clapClasses() {
      return this.isMobile ? [{
        active: this.clapActive
      }, 'col-4 d-flex align-items-center justify-content-center text-darker'] : [' btn-dark btn-icon ml-1 '];
    },
    shareClasses: function shareClasses() {
      return this.isMobile ? 'col-4 d-flex align-items-center justify-content-center text-darker' : ' btn-dark btn-icon ml-1 ';
    },
    watchlistClasses: function watchlistClasses() {
      return this.isMobile ? 'col-4 d-flex align-items-center justify-content-center text-darker' : ' btn-dark btn-icon ml-1 ';
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/IconActions.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_IconActionsvue_type_script_lang_js = (IconActionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/IconActions.vue?vue&type=style&index=0&id=55380c8e&prod&scoped=true&lang=css
var IconActionsvue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css = __webpack_require__(750);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/IconActions.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_IconActionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "55380c8e",
  null
  
)

/* harmony default export */ var IconActions = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_EpisodeInfo_vue_vue_type_style_index_0_id_408cb84c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_EpisodeInfo_vue_vue_type_style_index_0_id_408cb84c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_EpisodeInfo_vue_vue_type_style_index_0_id_408cb84c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_GenreTags_vue_vue_type_style_index_0_id_1640509d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(755);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_GenreTags_vue_vue_type_style_index_0_id_1640509d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_GenreTags_vue_vue_type_style_index_0_id_1640509d_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/EpisodeInfo.vue?vue&type=template&id=408cb84c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isValidEpisode ? _c('div', {
    class: _vm.episodeInfoClasses
  }, [_vm._v("\n  " + _vm._s(_vm.$t('show.season')) + _vm._s(_vm.episode.season_number) + " -\n  " + _vm._s(_vm.$t('show.episode')) + " " + _vm._s(_vm.episode.episode_number) + "\n")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/EpisodeInfo.vue?vue&type=template&id=408cb84c&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/EpisodeInfo.vue?vue&type=script&lang=js

/* harmony default export */ var EpisodeInfovue_type_script_lang_js = ({
  name: 'EpisodeInfo',
  props: {
    episode: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    variant: {
      type: String,
      default: 'desktop',
      // 'desktop' or 'mobile'
      validator: function validator(value) {
        return ['desktop', 'mobile'].includes(value);
      }
    }
  },
  computed: {
    episodeInfoClasses: function episodeInfoClasses() {
      var baseClasses = 'text-invert mb-1 mb-md-3 font-weight-normal title-item-episode';
      return this.variant === 'mobile' ? "".concat(baseClasses, " p-fs-small title title2 d-lg-none") : "".concat(baseClasses, " p-fs-small d-none d-lg-block ");
    },
    isValidEpisode: function isValidEpisode() {
      return this.episode && this.episode.season_number !== undefined && this.episode.episode_number !== undefined;
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/EpisodeInfo.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_EpisodeInfovue_type_script_lang_js = (EpisodeInfovue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/EpisodeInfo.vue?vue&type=style&index=0&id=408cb84c&prod&scoped=true&lang=css
var EpisodeInfovue_type_style_index_0_id_408cb84c_prod_scoped_true_lang_css = __webpack_require__(791);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/EpisodeInfo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_EpisodeInfovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "408cb84c",
  null
  
)

/* harmony default export */ var EpisodeInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/GenreTags.vue?vue&type=template&id=1640509d&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "genre-tags"
  }, _vm._l(_vm.genres, function (persianName, englishName) {
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
    }, [_vm._v("\n    " + _vm._s(persianName) + "\n  ")]);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/GenreTags.vue?vue&type=template&id=1640509d&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/GenreTags.vue?vue&type=script&lang=js
/* harmony default export */ var GenreTagsvue_type_script_lang_js = ({
  name: 'GenreTags',
  props: {
    genres: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/GenreTags.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_GenreTagsvue_type_script_lang_js = (GenreTagsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/GenreTags.vue?vue&type=style&index=0&id=1640509d&prod&scoped=true&lang=css
var GenreTagsvue_type_style_index_0_id_1640509d_prod_scoped_true_lang_css = __webpack_require__(792);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/GenreTags.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_GenreTagsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1640509d",
  null
  
)

/* harmony default export */ var GenreTags = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseDescription_vue_vue_type_style_index_0_id_3bcf3fb4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(793);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseDescription_vue_vue_type_style_index_0_id_3bcf3fb4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseDescription_vue_vue_type_style_index_0_id_3bcf3fb4_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseActions_vue_vue_type_style_index_0_id_d2f1642a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(794);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseActions_vue_vue_type_style_index_0_id_d2f1642a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseActions_vue_vue_type_style_index_0_id_d2f1642a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ShowcaseDescription.vue?vue&type=template&id=3bcf3fb4&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "showcase-desc"
  }, [_c('div', {
    staticClass: "showcase-top"
  }, [_vm.data && _vm.data.item && !_vm.data.item.logo ? [_vm.type !== 'episode' ? _c('div', {
    staticClass: "title text-invert mb-5 mb-md-3 title-item"
  }, [_c('nuxt-link', {
    attrs: {
      "to": {
        name: _vm.type + '-id',
        params: {
          id: _vm.data.item.id
        }
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.ChooseLang(_vm.data.item.name, _vm.data.item.name_fa)) + "\n        ")])], 1) : _c('div', {
    staticClass: "title text-invert mb-5 mb-md-3 title-item"
  }, [_c('nuxt-link', {
    attrs: {
      "to": {
        name: _vm.type + '-id',
        params: {
          id: _vm.data.item.id
        }
      }
    }
  }, [_vm._v("\n          " + _vm._s(_vm.ChooseLang(_vm.data.item.series_name, _vm.data.item.series_name_fa)) + "\n        ")])], 1)] : _vm._e(), _vm._v(" "), _vm.type === 'episode' ? _c('EpisodeInfo', {
    attrs: {
      "episode": _vm.episode,
      "variant": "mobile"
    }
  }) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "showcase-bottom"
  }, [_vm.type === 'episode' ? _c('EpisodeInfo', {
    attrs: {
      "episode": _vm.episode,
      "variant": "desktop"
    }
  }) : _vm._e(), _vm._v(" "), _vm.type !== 'episode' ? _c('div', {
    staticClass: "text-invert mb-1 mb-md-3"
  }, [_c('GenreTags', {
    attrs: {
      "genres": _vm.data.item.new_genres
    }
  })], 1) : _vm._e()], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/ShowcaseDescription.vue?vue&type=template&id=3bcf3fb4&scoped=true

// EXTERNAL MODULE: ./components/item/showcase/EpisodeInfo.vue + 4 modules
var EpisodeInfo = __webpack_require__(805);

// EXTERNAL MODULE: ./components/item/showcase/GenreTags.vue + 4 modules
var GenreTags = __webpack_require__(806);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ShowcaseDescription.vue?vue&type=script&lang=js


// import ContentLanguageInfo from '@/components/item/showcase/ContentLanguageInfo'

/* harmony default export */ var ShowcaseDescriptionvue_type_script_lang_js = ({
  name: 'ShowcaseDescription',
  components: {
    EpisodeInfo: EpisodeInfo["default"],
    GenreTags: GenreTags["default"]
    // ContentLanguageInfo,
  },
  props: {
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    type: {
      type: String,
      default: ''
    },
    episode: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en;
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/ShowcaseDescription.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_ShowcaseDescriptionvue_type_script_lang_js = (ShowcaseDescriptionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/ShowcaseDescription.vue?vue&type=style&index=0&id=3bcf3fb4&prod&scoped=true&lang=css
var ShowcaseDescriptionvue_type_style_index_0_id_3bcf3fb4_prod_scoped_true_lang_css = __webpack_require__(843);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/ShowcaseDescription.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_ShowcaseDescriptionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "3bcf3fb4",
  null
  
)

/* harmony default export */ var ShowcaseDescription = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ShowcaseActions.vue?vue&type=template&id=d2f1642a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "showcase-button-wrapper",
    attrs: {
      "id": "showcase-button-wrapper"
    }
  }, [_vm.shouldShowRemoveButton ? _c('button', {
    staticClass: "btn btn-danger mr-1 ml-0 btn-main-section btn-remove",
    on: {
      "click": _vm.removeFromCart
    }
  }, [_c('span', {
    staticClass: "smallsrm"
  }, [_c('i', {
    staticClass: "fa fa-trash pr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.removeButtonLabel))])])]) : _vm.actions && _vm.actions.mainButton.exist ? _c('button', {
    staticClass: "btn btn-main mr-1 ml-0 btn-main-section",
    on: {
      "click": _vm.handleMainAction
    }
  }, [_c('span', {
    staticClass: "smallsrm"
  }, [_c('i', {
    class: _vm.mainButtonIcon
  }), _vm._v(" "), _c('span', [_vm._v("\n        " + _vm._s(_vm.mainButtonDisplayLabel) + "\n        "), _vm.showEpisodeNumber ? _c('span', [_c('span', {
    staticClass: "ml-1"
  }, [_vm._v(_vm._s(_vm.$t('show.episode')))]), _vm._v("\n          " + _vm._s(_vm.episode.episode_number) + "\n        ")]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), !_vm.shouldShowRemoveButton && _vm.actions && _vm.actions.downloadButton.exist ? _c('button', {
    staticClass: "btn btn-dark btn-download mr-1 ml-0 btn-main-section",
    on: {
      "click": _vm.handleDownload
    }
  }, [_c('span', {
    staticClass: "smallsrm"
  }, [_c('i', {
    staticClass: "fa fa-download pr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.downloadButtonLabel))])])]) : _vm._e(), _vm._v(" "), !_vm.actions || !_vm.hasMainButton && !_vm.hasDownloadButton ? _c('button', {
    staticClass: "btn btn-main mr-1 ml-0"
  }, [_c('span', {
    staticClass: "smallsrm"
  }, [_c('b-spinner', {
    attrs: {
      "small": ""
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _c('IconActions', {
    staticClass: "ml-1",
    attrs: {
      "variant": "desktop",
      "clap-active": Boolean(_vm.clapinterval),
      "user-claps": _vm.userClaps,
      "is-watchlist": _vm.isWatchlist
    },
    on: {
      "clap-start": function clapStart($event) {
        return _vm.$emit('clap-start');
      },
      "clap-stop": function clapStop($event) {
        return _vm.$emit('clap-stop');
      },
      "share": function share($event) {
        return _vm.$emit('share');
      },
      "toggle-watchlist": _vm.onToggleWatchlist
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/ShowcaseActions.vue?vue&type=template&id=d2f1642a&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./components/item/showcase/IconActions.vue + 4 modules
var IconActions = __webpack_require__(756);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ShowcaseActions.vue?vue&type=script&lang=js








/* harmony default export */ var ShowcaseActionsvue_type_script_lang_js = ({
  name: 'ShowcaseActions',
  components: {
    IconActions: IconActions["default"]
  },
  props: {
    hasMainButton: {
      type: Boolean,
      default: false
    },
    hasDownloadButton: {
      type: Boolean,
      default: false
    },
    mainButtonLabel: {
      type: String,
      default: ''
    },
    mainButtonAction: {
      type: String,
      default: ''
    },
    downloadButtonLabel: {
      type: String,
      default: ''
    },
    clapinterval: {
      type: [Boolean, Number],
      default: 0
    },
    userClaps: {
      type: [Number, String],
      default: 0
    },
    isWatchlist: {
      type: [Number, Boolean],
      default: 0
    },
    episode: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    actions: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    id: {
      type: [Number, String],
      default: null
    },
    type: {
      type: String,
      default: ''
    }
  },
  emits: ['play', 'buy', 'subscription', 'download', 'toggle-watchlist', 'clap-start', 'clap-stop', 'share'],
  data: function data() {
    return {
      cartItemIds: [],
      cartStorageListener: null
    };
  },
  computed: {
    isBasketActive: function isBasketActive() {
      var _this$$store$state;
      if (!this.$store) return true;
      var state = (_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.basketActive;
      return state === undefined ? true : Boolean(state);
    },
    mainButtonDisplayLabel: function mainButtonDisplayLabel() {
      var _this$actions;
      if (!((_this$actions = this.actions) !== null && _this$actions !== void 0 && (_this$actions = _this$actions.mainButton) !== null && _this$actions !== void 0 && _this$actions.label)) return this.mainButtonLabel;
      var lbl = this.actions.mainButton.label;
      return this.ChooseLang(lbl.en, lbl.fa);
    },
    showEpisodeNumber: function showEpisodeNumber() {
      var _this$episode;
      return this.mainButtonAction === 'play' && ((_this$episode = this.episode) === null || _this$episode === void 0 ? void 0 : _this$episode.id);
    },
    cartTargetId: function cartTargetId() {
      var _ref;
      if (!this.isBasketActive) return null;
      if (this.mainButtonAction !== 'buy') return null;
      var target = (_ref = this.episode && this.episode.id != null ? this.episode.id : null) !== null && _ref !== void 0 ? _ref : this.id;
      return target != null ? String(target) : null;
    },
    shouldShowRemoveButton: function shouldShowRemoveButton() {
      if (!this.cartTargetId) return false;
      return this.cartItemIds.includes(this.cartTargetId);
    },
    mainButtonIcon: function mainButtonIcon() {
      if (this.mainButtonAction === 'play') return 'fa fa-play pr-2';
      if (this.mainButtonAction === 'subscription') return 'fa fa-id-card pr-2';
      if (this.mainButtonAction === 'buy') return 'fa fa-shopping-cart pr-2';
      return 'fa fa-play pr-2';
    },
    removeButtonLabel: function removeButtonLabel() {
      if (typeof this.$te === 'function' && this.$te('cart.remove')) {
        return this.$t('cart.remove');
      }
      return 'حذف از سبد';
    }
  },
  watch: {
    isBasketActive: {
      immediate: true,
      handler: function handler(active) {
        if (false) {}
        if (active) {
          this.syncCartItems();
          this.attachCartListener();
        } else {
          this.cartItemIds = [];
          this.detachCartListener();
        }
      }
    }
  },
  mounted: function mounted() {
    if (false) {}
    if (this.isBasketActive) {
      this.syncCartItems();
      this.attachCartListener();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (false) {}
    this.detachCartListener();
  },
  methods: {
    handleMainAction: function handleMainAction() {
      var action = this.mainButtonAction;
      if (action === 'play') this.$emit('play');else if (action === 'buy') this.$emit('buy');else if (action === 'subscription') this.$emit('subscription');
    },
    handleDownload: function handleDownload() {
      this.$emit('download');
    },
    syncCartItems: function syncCartItems() {
      if (false) {}
      if (!this.isBasketActive) {
        this.cartItemIds = [];
        return;
      }
      try {
        var raw = localStorage.getItem('_cart');
        if (!raw) {
          this.cartItemIds = [];
          return;
        }
        var cart = JSON.parse(raw);
        this.updateCartState(cart);
      } catch (error) {
        console.error('Failed to sync cart items:', error);
      }
    },
    updateCartState: function updateCartState(cart) {
      if (!cart || !Array.isArray(cart.content)) {
        this.cartItemIds = [];
        return;
      }
      this.cartItemIds = cart.content.map(function (item) {
        return item && item.id != null ? String(item.id) : null;
      }).filter(function (id) {
        return id !== null;
      });
    },
    removeFromCart: function removeFromCart() {
      var _this = this;
      if ( false || !this.cartTargetId) return;
      try {
        var raw = localStorage.getItem('_cart');
        var cart = raw ? JSON.parse(raw) : {
          content: [],
          amount: 0
        };
        if (!Array.isArray(cart.content)) {
          cart.content = [];
        }
        cart.content = cart.content.filter(function (item) {
          return String(item === null || item === void 0 ? void 0 : item.id) !== _this.cartTargetId;
        });
        cart.amount = cart.content.reduce(function (sum, current) {
          return sum + (current.tvod_price || 0);
        }, 0);
        localStorage.setItem('_cart', JSON.stringify(cart));
        this.updateCartState(cart);
        this.emitCartChange();
      } catch (error) {
        console.error('Failed to remove item from cart:', error);
      }
    },
    emitCartChange: function emitCartChange() {
      if (false) {}
      // Only emit Vue event for same-window updates
      // Don't manually dispatch storage event - it causes duplicate updates
      // Storage events are automatically fired by browser for cross-tab communication
      this.$root.$emit('cart-updated');
    },
    attachCartListener: function attachCartListener() {
      var _this2 = this;
      if (false) {}
      if (this.cartStorageListener) return;
      // Listen to both storage events (cross-tab) and Vue events (same-tab)
      this.cartStorageListener = function (event) {
        // Only sync if it's a real storage event from another tab
        if (event && event.key === '_cart' && event.newValue !== undefined) {
          _this2.syncCartItems();
        }
      };
      window.addEventListener('storage', this.cartStorageListener);
      // Also listen to Vue cart-updated events for same-window updates
      this.$root.$on('cart-updated', this.syncCartItems);
    },
    detachCartListener: function detachCartListener() {
      if (false) {}
      if (this.cartStorageListener) {
        window.removeEventListener('storage', this.cartStorageListener);
        this.cartStorageListener = null;
      }
      // Remove Vue event listener
      this.$root.$off('cart-updated', this.syncCartItems);
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en;
    },
    onToggleWatchlist: function onToggleWatchlist() {
      this.$emit('toggle-watchlist', {
        id: this.id,
        type: this.type
      });
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/ShowcaseActions.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_ShowcaseActionsvue_type_script_lang_js = (ShowcaseActionsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/showcase/ShowcaseActions.vue?vue&type=style&index=0&id=d2f1642a&prod&scoped=true&lang=css
var ShowcaseActionsvue_type_style_index_0_id_d2f1642a_prod_scoped_true_lang_css = __webpack_require__(844);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/ShowcaseActions.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_ShowcaseActionsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "d2f1642a",
  null
  
)

/* harmony default export */ var ShowcaseActions = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);