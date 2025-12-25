(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82,35,36,74,81],{

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ShowcaseMobileHeader.vue?vue&type=template&id=bd5ad50e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "d-flex header-mobile d-md-none"
  }, [_c('div', {
    staticClass: "show-mobile header-home w-full"
  }, [_c('div', {
    staticClass: "px-3 h-full"
  }, [_c('div', {
    staticClass: "row h-full align-items-center"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('ActionButtons', {
    attrs: {
      "has-main-button": _vm.hasMainButton,
      "has-download-button": _vm.hasDownloadButton,
      "main-button-label": _vm.mainButtonLabel,
      "main-button-action": _vm.mainButtonAction,
      "episode": _vm.episode,
      "download-button-label": _vm.downloadButtonLabel
    },
    on: {
      "play": _vm.handlePlay,
      "buy": _vm.handleBuy,
      "subscription": _vm.handleSubscription,
      "download": _vm.handleDownloadClick
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6 h-full"
  }, [_c('div', {
    staticClass: "row h-full"
  }, [_c('IconActions', {
    attrs: {
      "variant": "mobile",
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
      "toggle-watchlist": function toggleWatchlist($event) {
        return _vm.$emit('toggle-watchlist', _vm.data.item.id, _vm.type);
      }
    }
  })], 1)])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/ShowcaseMobileHeader.vue?vue&type=template&id=bd5ad50e

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./components/item/showcase/ActionButtons.vue + 4 modules
var ActionButtons = __webpack_require__(935);

// EXTERNAL MODULE: ./components/item/showcase/IconActions.vue + 4 modules
var IconActions = __webpack_require__(756);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ShowcaseMobileHeader.vue?vue&type=script&lang=js



/* harmony default export */ var ShowcaseMobileHeadervue_type_script_lang_js = ({
  name: 'ShowcaseMobileHeader',
  components: {
    ActionButtons: ActionButtons["default"],
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
    episode: {
      type: Object,
      default: function _default() {
        return {};
      }
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
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    type: {
      type: String,
      default: ''
    }
  },
  emits: ['play', 'buy', 'subscription', 'download', 'toggle-watchlist', 'clap-start', 'clap-stop', 'share'],
  methods: {
    handlePlay: function handlePlay() {
      this.$emit('play');
    },
    handleBuy: function handleBuy() {
      this.$emit('buy');
    },
    handleSubscription: function handleSubscription() {
      this.$emit('subscription');
    },
    handleDownloadClick: function handleDownloadClick() {
      this.$emit('download');
    }
  }
});
// CONCATENATED MODULE: ./components/item/showcase/ShowcaseMobileHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_ShowcaseMobileHeadervue_type_script_lang_js = (ShowcaseMobileHeadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/ShowcaseMobileHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_ShowcaseMobileHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ShowcaseMobileHeader = __webpack_exports__["default"] = (component.exports);

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

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/buttons/DownloadButton.vue?vue&type=template&id=46f632be
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.exist ? _c('button', {
    class: ['btn', 'btn-main', {
      'btn-block': _vm.block
    }],
    on: {
      "click": function click($event) {
        return _vm.$emit('download');
      }
    }
  }, [_c('span', [_c('i', {
    staticClass: "fa fa-download pr-2"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.label))])])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/buttons/DownloadButton.vue?vue&type=template&id=46f632be

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/buttons/DownloadButton.vue?vue&type=script&lang=js
/* harmony default export */ var DownloadButtonvue_type_script_lang_js = ({
  name: 'DownloadButton',
  props: {
    exist: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    block: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./components/buttons/DownloadButton.vue?vue&type=script&lang=js
 /* harmony default export */ var buttons_DownloadButtonvue_type_script_lang_js = (DownloadButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/buttons/DownloadButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  buttons_DownloadButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DownloadButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/buttons/PrimaryActionButton.vue?vue&type=template&id=72537380
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.exist ? _c('button', {
    class: ['btn', 'btn-main', {
      'btn-block': _vm.block
    }],
    on: {
      "click": _vm.onClick
    }
  }, [_c('span', {
    staticClass: "smallsrm"
  }, [_c('i', {
    staticClass: "fa fa-play pr-2"
  }), _vm._v(" "), _c('span', [_vm._v("\n      " + _vm._s(_vm.label) + "\n      "), _vm.action === 'play' && _vm.episodeId ? _c('span', [_vm._v("\n        " + _vm._s(' ' + _vm.$t('show.episode') + ' ' + _vm.episodeNumber) + "\n      ")]) : _vm._e()])])]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/buttons/PrimaryActionButton.vue?vue&type=template&id=72537380

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/buttons/PrimaryActionButton.vue?vue&type=script&lang=js

/* harmony default export */ var PrimaryActionButtonvue_type_script_lang_js = ({
  name: 'PrimaryActionButton',
  props: {
    exist: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    // 'play' | 'buy' | 'subscription'
    episodeId: {
      type: [Number, String],
      default: null
    },
    episodeNumber: {
      type: [Number, String],
      default: null
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.action === 'play') this.$emit('play');else if (this.action === 'buy') this.$emit('buy');else if (this.action === 'subscription') this.$emit('subscription');
    }
  }
});
// CONCATENATED MODULE: ./components/buttons/PrimaryActionButton.vue?vue&type=script&lang=js
 /* harmony default export */ var buttons_PrimaryActionButtonvue_type_script_lang_js = (PrimaryActionButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/buttons/PrimaryActionButton.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  buttons_PrimaryActionButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PrimaryActionButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ActionButtons.vue?vue&type=template&id=7c304b71
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [!_vm.hasMainButton && _vm.hasDownloadButton ? _c('DownloadButton', {
    attrs: {
      "exist": _vm.hasDownloadButton,
      "label": _vm.downloadButtonLabel,
      "block": true
    },
    on: {
      "download": function download($event) {
        return _vm.$emit('download');
      }
    }
  }) : _vm.hasMainButton ? _c('PrimaryActionButton', {
    attrs: {
      "exist": _vm.hasMainButton,
      "label": _vm.mainButtonLabel,
      "action": _vm.mainButtonAction,
      "episode-id": _vm.episode.id,
      "episode-number": _vm.episode.episode_number,
      "block": true
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
      }
    }
  }) : _c('button', {
    staticClass: "btn btn-main"
  }, [_c('b-spinner', {
    attrs: {
      "small": ""
    }
  })], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/showcase/ActionButtons.vue?vue&type=template&id=7c304b71

// EXTERNAL MODULE: ./components/buttons/PrimaryActionButton.vue + 4 modules
var PrimaryActionButton = __webpack_require__(803);

// EXTERNAL MODULE: ./components/buttons/DownloadButton.vue + 4 modules
var DownloadButton = __webpack_require__(802);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/showcase/ActionButtons.vue?vue&type=script&lang=js


/* harmony default export */ var ActionButtonsvue_type_script_lang_js = ({
  name: 'ActionButtons',
  components: {
    PrimaryActionButton: PrimaryActionButton["default"],
    DownloadButton: DownloadButton["default"]
  },
  props: {
    hasMainButton: Boolean,
    hasDownloadButton: Boolean,
    mainButtonLabel: {
      type: String,
      default: ''
    },
    mainButtonAction: {
      type: String,
      default: ''
    },
    episode: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    downloadButtonLabel: {
      type: String,
      default: ''
    }
  },
  emits: ['play', 'buy', 'subscription', 'download']
});
// CONCATENATED MODULE: ./components/item/showcase/ActionButtons.vue?vue&type=script&lang=js
 /* harmony default export */ var showcase_ActionButtonsvue_type_script_lang_js = (ActionButtonsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/showcase/ActionButtons.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  showcase_ActionButtonsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ActionButtons = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);