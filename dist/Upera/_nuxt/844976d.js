(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75,81],{

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(740);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IconActions_vue_vue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 755:
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
var IconActionsvue_type_style_index_0_id_55380c8e_prod_scoped_true_lang_css = __webpack_require__(749);

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

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseActions_vue_vue_type_style_index_0_id_d2f1642a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(793);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseActions_vue_vue_type_style_index_0_id_d2f1642a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseActions_vue_vue_type_style_index_0_id_d2f1642a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 936:
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
var IconActions = __webpack_require__(755);

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
var ShowcaseActionsvue_type_style_index_0_id_d2f1642a_prod_scoped_true_lang_css = __webpack_require__(843);

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