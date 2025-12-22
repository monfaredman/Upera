(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22,59],{

/***/ 1037:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SeasonEpisodes_vue_vue_type_style_index_0_id_651f016c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(900);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SeasonEpisodes_vue_vue_type_style_index_0_id_651f016c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SeasonEpisodes_vue_vue_type_style_index_0_id_651f016c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/SeasonEpisodes.vue?vue&type=template&id=651f016c&scoped=true



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "horizontal-list-container item mt-lg-2 pt-3",
    attrs: {
      "id": "watching"
    }
  }, [_c('div', {
    staticClass: "container-fluid mb-3"
  }, [_c('div', {
    staticClass: "row align-items-center container-fluid-header"
  }, [_c('div', {
    staticClass: "col-6 col-md-auto"
  }, [_c('b-dropdown', {
    staticClass: "season-dropdown",
    attrs: {
      "text": _vm.seasontitle,
      "variant": "main",
      "size": "md"
    }
  }, _vm._l(_vm.season, function (item, index) {
    return _c('b-dropdown-item', {
      key: index,
      attrs: {
        "href": "#",
        "active": _vm.selectseriesid == index
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.$emit('select-season', index);
        }
      }
    }, [_vm._v("\n            فصل " + _vm._s(index) + "\n          ")]);
  }), 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "col-6 col-md-auto"
  }, [_c('b-dropdown', {
    staticClass: "sort-dropdown",
    attrs: {
      "variant": "text",
      "size": "md",
      "right": ""
    },
    scopedSlots: _vm._u([{
      key: "button-content",
      fn: function fn() {
        return [_c('i', {
          class: _vm.sortButtonIcon
        }), _vm._v("\n            " + _vm._s(_vm.sortButtonLabel) + "\n          ")];
      },
      proxy: true
    }])
  }, [_vm._v(" "), _vm._l(_vm.sortOptions, function (option) {
    return _c('b-dropdown-item', {
      key: option.value,
      attrs: {
        "active": _vm.sortOrder === option.value
      },
      on: {
        "click": function click($event) {
          return _vm.setSortOrder(option.value);
        }
      }
    }, [_c('i', {
      class: option.icon
    }), _vm._v("\n            " + _vm._s(option.label) + "\n          ")]);
  })], 2)], 1)])]), _vm._v(" "), _vm.description ? _c('div', {
    staticClass: "container-fluid mb-4"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('p', {
    staticClass: "series-description text-light"
  }, [_vm._v("\n          " + _vm._s(_vm.description) + "\n        ")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l(_vm.displayedEpisodes, function (episode, index) {
    return _c('div', {
      key: index,
      staticClass: "col-lg-3 col-md-6 col-6 mb-3"
    }, [_c('div', {
      staticClass: "episode-card"
    }, [_c('nuxt-link', {
      staticClass: "episode-image-link",
      attrs: {
        "to": {
          name: 'episode-id',
          params: {
            id: episode.id
          }
        }
      }
    }, [_c('div', {
      staticClass: "episode-image-wrapper"
    }, [_vm.getEpisodeBackdropSrc(episode) ? _c('OptimizedImage', {
      staticClass: "episode-image",
      attrs: {
        "image-src": _vm.getEpisodeBackdropSrc(episode),
        "alt": episode.name,
        "width": 364,
        "height": 170,
        "thumb-options": {
          w: 364,
          h: 170,
          q: 100,
          a: 't'
        },
        "type": "backdrops",
        "fluid-grow": "",
        "aspect-ratio": 364 / 170
      }
    }) : _c('div', {
      staticClass: "episode-image episode-image--placeholder",
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" "), _vm.$auth.loggedIn && episode.current_time > 0 ? _c('div', {
      staticClass: "progress"
    }, [_c('div', {
      staticClass: "progress-bar",
      style: 'width: ' + episode.current_time / episode.duration_time * 100 + '%',
      attrs: {
        "role": "progressbar",
        "aria-valuenow": "0",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    })]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
      staticClass: "episode-content"
    }, [_c('h6', {
      staticClass: "episode-title"
    }, [_vm._v("\n              " + _vm._s(_vm.ChooseLang(episode.name, episode.name_fa)) + "\n            ")]), _vm._v(" "), _vm.getMainButton(episode).exist && _vm.getMainButtonAction(episode) === 'buy' && _vm.isEpisodeInCart(episode.id) ? _c('button', {
      staticClass: "episode-remove-btn",
      on: {
        "click": function click($event) {
          return _vm.removeEpisodeFromCart(episode);
        }
      }
    }, [_vm._v("\n              حذف از سبد\n              "), _c('i', {
      staticClass: "fa fa-trash mr-2"
    })]) : _vm.getMainButton(episode).exist ? _c('button', {
      staticClass: "episode-play-btn",
      on: {
        "click": function click($event) {
          _vm.handleAction(episode, _vm.getMainButtonAction(episode));
        }
      }
    }, [_vm._v("\n              " + _vm._s(_vm.getMainButtonLabel(episode)) + "\n              "), _c('i', {
      class: _vm.getMainButtonIcon(episode)
    })]) : _c('nuxt-link', {
      staticClass: "episode-play-btn",
      attrs: {
        "to": {
          name: 'episode-id',
          params: {
            id: episode.id
          }
        }
      }
    }, [_vm._v("\n              تماشا\n              "), _c('i', {
      staticClass: "fa fa-play mr-2"
    })])], 1)], 1)]);
  }), 0), _vm._v(" "), _vm.hasMoreEpisodes ? _c('div', {
    staticClass: "row mt-3 mb-5 mb-sm-4"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "show-more-container"
  }, [_c('div', {
    staticClass: "show-more-divider"
  }), _vm._v(" "), _c('b-button', {
    staticClass: "show-more-btn",
    attrs: {
      "variant": "outline-light"
    },
    on: {
      "click": _vm.toggleShowMore
    }
  }, [_vm._v("\n            " + _vm._s(_vm.showAll ? 'مشاهده کمتر' : 'مشاهده بیشتر') + "\n            "), _c('i', {
    class: _vm.showAll ? 'fa fa-chevron-up' : 'fa fa-chevron-down'
  })]), _vm._v(" "), _c('div', {
    staticClass: "show-more-divider"
  })], 1)])]) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/SeasonEpisodes.vue?vue&type=template&id=651f016c&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// EXTERNAL MODULE: ./components/item/common/OptimizedImage.vue + 4 modules
var OptimizedImage = __webpack_require__(742);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/SeasonEpisodes.vue?vue&type=script&lang=js




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




















var SORT_OPTIONS = [{
  value: 'desc',
  label: 'جدیدترین',
  icon: 'fa fa-sort-numeric-desc ml-2'
}, {
  value: 'asc',
  label: 'قدیمی‌ترین',
  icon: 'fa fa-sort-numeric-asc ml-2'
}];
var SORT_PREFERENCE_KEY = 'seasonEpisodesSortOrder';
/* harmony default export */ var SeasonEpisodesvue_type_script_lang_js = ({
  name: 'SeasonEpisodes',
  components: {
    OptimizedImage: OptimizedImage["default"]
  },
  props: {
    season: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    selectseriesid: {
      type: [String, Number],
      default: null
    },
    seasontitle: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      showAll: false,
      itemsPerRow: 4,
      sortOrder: SORT_OPTIONS[0].value,
      cartItemIds: [],
      isUpdatingCart: false
    };
  },
  computed: {
    sortOptions: function sortOptions() {
      return SORT_OPTIONS;
    },
    currentSortOption: function currentSortOption() {
      var _this = this;
      return this.sortOptions.find(function (option) {
        return option.value === _this.sortOrder;
      }) || this.sortOptions[0];
    },
    sortButtonIcon: function sortButtonIcon() {
      var _this$currentSortOpti;
      return ((_this$currentSortOpti = this.currentSortOption) === null || _this$currentSortOpti === void 0 ? void 0 : _this$currentSortOpti.icon) || 'fa fa-sort-alpha-down ml-2';
    },
    sortButtonLabel: function sortButtonLabel() {
      var _this$currentSortOpti2;
      var label = (_this$currentSortOpti2 = this.currentSortOption) === null || _this$currentSortOpti2 === void 0 ? void 0 : _this$currentSortOpti2.label;
      return label ? "\u0645\u0631\u062A\u0628 \u0633\u0627\u0632\u06CC \xB7 ".concat(label) : 'مرتب سازی';
    },
    isBasketActive: function isBasketActive() {
      var _this$$store$state;
      if (!this.$store) return true;
      var state = (_this$$store$state = this.$store.state) === null || _this$$store$state === void 0 ? void 0 : _this$$store$state.basketActive;
      return state === undefined ? true : Boolean(state);
    },
    currentSeasonEpisodes: function currentSeasonEpisodes() {
      if (!this.season || !this.selectseriesid) return [];
      var episodes = this.season[this.selectseriesid] || [];
      var sortedEpisodes = Object(toConsumableArray["a" /* default */])(episodes);
      if (this.sortOrder === 'desc') {
        sortedEpisodes.reverse();
      }
      return sortedEpisodes;
    },
    displayedEpisodes: function displayedEpisodes() {
      if (this.showAll) {
        return this.currentSeasonEpisodes;
      }
      return this.currentSeasonEpisodes.slice(0, this.itemsPerRow);
    },
    hasMoreEpisodes: function hasMoreEpisodes() {
      return this.currentSeasonEpisodes.length > this.itemsPerRow;
    }
  },
  watch: {
    isBasketActive: {
      immediate: true,
      handler: function handler(val) {
        if (false) {}
        if (val) {
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
    this.loadSortPreference();
    if (this.isBasketActive) {
      this.syncCartItems();
      this.attachCartListener();
    } else {
      this.cartItemIds = [];
      this.detachCartListener();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (false) {}
    this.detachCartListener();
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en;
    },
    toggleShowMore: function toggleShowMore() {
      this.showAll = !this.showAll;
    },
    setSortOrder: function setSortOrder(order) {
      if (!this.isValidSortOrder(order) || this.sortOrder === order) {
        return;
      }
      this.sortOrder = order;
      this.persistSortPreference(order);
    },
    loadSortPreference: function loadSortPreference() {
      if (false) {}
      try {
        var stored = localStorage.getItem(SORT_PREFERENCE_KEY);
        if (this.isValidSortOrder(stored)) {
          this.sortOrder = stored;
        }
      } catch (error) {
        console.warn('Failed to load episode sort preference:', error);
      }
    },
    persistSortPreference: function persistSortPreference(order) {
      if (false) {}
      try {
        localStorage.setItem(SORT_PREFERENCE_KEY, order);
      } catch (error) {
        console.warn('Failed to save episode sort preference:', error);
      }
    },
    isValidSortOrder: function isValidSortOrder(order) {
      return this.sortOptions.some(function (option) {
        return option.value === order;
      });
    },
    getEpisodeSortTitle: function getEpisodeSortTitle(episode) {
      var _this$$i18n;
      if (!episode) return '';
      var locale = (_this$$i18n = this.$i18n) === null || _this$$i18n === void 0 ? void 0 : _this$$i18n.locale;
      if (locale === 'fa') {
        return episode.name_fa || episode.name || '';
      }
      return episode.name || episode.name_fa || '';
    },
    getMainButton: function getMainButton(episode) {
      var _episode$actions;
      return (episode === null || episode === void 0 || (_episode$actions = episode.actions) === null || _episode$actions === void 0 ? void 0 : _episode$actions.mainButton) || {
        exist: false
      };
    },
    getMainButtonLabel: function getMainButtonLabel(episode) {
      var mainButton = this.getMainButton(episode);
      if (!mainButton.exist) return '';
      var lbl = mainButton.label || {};
      return this.ChooseLang(lbl.en, lbl.fa);
    },
    getMainButtonAction: function getMainButtonAction(episode) {
      var mainButton = this.getMainButton(episode);
      return mainButton.exist ? mainButton.action : '';
    },
    getMainButtonIcon: function getMainButtonIcon(episode) {
      var action = this.getMainButtonAction(episode);
      if (action === 'buy') return 'fa fa-shopping-cart mr-2';
      if (action === 'subscription') return 'fa fa-id-card mr-2';
      return 'fa fa-play mr-2';
    },
    isEpisodeInCart: function isEpisodeInCart(episodeId) {
      if (!this.isBasketActive || !episodeId) return false;
      var targetId = String(episodeId);
      return this.cartItemIds.includes(targetId);
    },
    updateCartState: function updateCartState(cart) {
      if (!cart || !Array.isArray(cart.content)) {
        this.cartItemIds = [];
        return;
      }
      // Create new array to ensure Vue detects the change (new array reference)
      this.cartItemIds = cart.content.map(function (item) {
        var id = item && item.id != null ? String(item.id) : null;
        return id;
      }).filter(function (id) {
        return id !== null;
      });
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
    emitCartChange: function emitCartChange() {
      var _this2 = this;
      if (false) {}
      // Set flag to prevent storage listener from syncing (we just updated it)
      this.isUpdatingCart = true;
      try {
        // Only emit Vue event for same-window updates
        // Don't manually dispatch storage event - it causes duplicate updates
        // Storage events are automatically fired by browser for cross-tab communication
        this.$root.$emit('cart-updated');
      } finally {
        // Reset flag after a short delay to allow other components to sync
        setTimeout(function () {
          _this2.isUpdatingCart = false;
        }, 100);
      }
    },
    attachCartListener: function attachCartListener() {
      var _this3 = this;
      if ( false || !this.isBasketActive) return;
      if (this._cartStorageListener) return;
      this._cartStorageListener = function (event) {
        // Only sync if we're not the ones making the change
        // Storage events from other tabs/windows will have event.key === '_cart'
        // Ignore if we're currently updating the cart ourselves
        // Also check that event.key exists (real storage events have this)
        if (!_this3.isUpdatingCart && event && event.key === '_cart' && event.newValue !== undefined) {
          _this3.syncCartItems();
        }
      };
      window.addEventListener('storage', this._cartStorageListener);
      // Also listen to Vue cart-updated events for same-window updates
      this.$root.$on('cart-updated', this.syncCartItems);
    },
    detachCartListener: function detachCartListener() {
      if (false) {}
      if (this._cartStorageListener) {
        window.removeEventListener('storage', this._cartStorageListener);
        this._cartStorageListener = null;
      }
      // Remove Vue event listener
      this.$root.$off('cart-updated', this.syncCartItems);
    },
    persistCartItem: function persistCartItem(item) {
      var _this4 = this;
      if (false) {}
      try {
        var raw = localStorage.getItem('_cart');
        var cart = raw ? JSON.parse(raw) : {
          content: [],
          amount: 0
        };
        if (!Array.isArray(cart.content)) {
          cart.content = [];
        }
        var targetId = String(item.id);
        var index = cart.content.findIndex(function (existing) {
          return String(existing.id) === targetId;
        });
        var normalizedItem = _objectSpread(_objectSpread({}, item), {}, {
          id: targetId
        });

        // Only add if not already in cart
        if (index === -1) {
          cart.content.push(normalizedItem);
        } else {
          // Update existing item
          cart.content.splice(index, 1, normalizedItem);
        }
        cart.amount = cart.content.reduce(function (sum, current) {
          return sum + (current.tvod_price || 0);
        }, 0);
        localStorage.setItem('_cart', JSON.stringify(cart));
        // Update cart state immediately so button state updates
        this.updateCartState(cart);
        // Use Vue's nextTick to ensure DOM updates after state change
        this.$nextTick(function () {
          _this4.emitCartChange();
        });
      } catch (error) {
        console.error('Failed to persist cart item:', error);
      }
    },
    removeEpisodeFromCart: function removeEpisodeFromCart(episode) {
      var _this5 = this;
      if (!(episode !== null && episode !== void 0 && episode.id) || !true) return;
      try {
        var raw = localStorage.getItem('_cart');
        var cart = raw ? JSON.parse(raw) : {
          content: [],
          amount: 0
        };
        if (!Array.isArray(cart.content)) {
          cart.content = [];
        }
        var targetId = String(episode.id);
        cart.content = cart.content.filter(function (item) {
          return String(item === null || item === void 0 ? void 0 : item.id) !== targetId;
        });
        cart.amount = cart.content.reduce(function (sum, current) {
          return sum + (current.tvod_price || 0);
        }, 0);
        localStorage.setItem('_cart', JSON.stringify(cart));
        // Update cart state immediately so button state updates
        this.updateCartState(cart);
        // Use Vue's nextTick to ensure DOM updates after state change
        this.$nextTick(function () {
          _this5.emitCartChange();
        });
      } catch (error) {
        console.error('Failed to remove episode from cart:', error);
      }
    },
    addEpisodeToCart: function addEpisodeToCart(episode) {
      var _this6 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _api$data, _api$data2, endpoint, response, api, normalized, prepared, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!(episode !== null && episode !== void 0 && episode.id) || !true)) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              _context.prev = 1;
              endpoint = "/getV2/episode/".concat(episode.id);
              _context.next = 2;
              return _this6.$axios.get(endpoint);
            case 2:
              response = _context.sent;
              api = response === null || response === void 0 ? void 0 : response.data;
              normalized = null;
              if (api !== null && api !== void 0 && (_api$data = api.data) !== null && _api$data !== void 0 && _api$data.episode) {
                normalized = _objectSpread(_objectSpread({}, api.data.episode), {}, {
                  cdn: api.data.cdn
                });
              } else if (api !== null && api !== void 0 && (_api$data2 = api.data) !== null && _api$data2 !== void 0 && _api$data2.movie) {
                normalized = _objectSpread(_objectSpread({}, api.data.movie), {}, {
                  cdn: api.data.cdn
                });
              } else if (api !== null && api !== void 0 && api.data) {
                normalized = api.data;
              } else {
                normalized = api;
              }
              if (!(!normalized || !normalized.id)) {
                _context.next = 3;
                break;
              }
              return _context.abrupt("return");
            case 3:
              prepared = _objectSpread(_objectSpread({}, normalized), {}, {
                id: String(normalized.id),
                type: normalized.type || 'episode'
              });
              _this6.persistCartItem(prepared);

              // Show toast notification when basket is active and cart has items
              if (_this6.isBasketActive && _this6.cartItemIds.length > 1) {
                _this6.showAddedToBasketToast();
              }
              _context.next = 5;
              break;
            case 4:
              _context.prev = 4;
              _t = _context["catch"](1);
              console.error('Failed to add episode to cart:', _t);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 4]]);
      }))();
    },
    /**
     * Show toast notification when item is added to basket
     * Auto-dismisses after 4 seconds
     */
    showAddedToBasketToast: function showAddedToBasketToast() {
      var _this7 = this;
      this.$swal({
        title: 'به سبد خرید اضافه شد',
        icon: 'success',
        buttons: {
          basket: {
            text: 'مشاهده سبد خرید',
            value: 'basket',
            className: 'swal-button--confirm'
          },
          close: {
            text: 'بستن',
            value: 'close',
            className: 'swal-button--cancel'
          }
        },
        timer: 4000
      }).then(function (value) {
        if (value === 'basket') {
          if (window.innerWidth < 768) {
            _this7.$emit('buyItem');
          } else {
            // Emit event to show basket/navigate to basket
            _this7.$root.$emit('show-basket');

            // Also trigger the download modal to show basket
            _this7.$store.dispatch('DOWNLOAD_MODAL_LOAD');
          }
        }
      });
    },
    handleAction: function handleAction(episode, action) {
      var _this8 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this8$$store, isCartEmpty;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(action === 'play')) {
                _context2.next = 1;
                break;
              }
              _this8.$router.push({
                name: 'episode-show-id',
                params: {
                  id: episode.id
                }
              });
              _context2.next = 4;
              break;
            case 1:
              if (!(action === 'buy')) {
                _context2.next = 3;
                break;
              }
              if (((_this8$$store = _this8.$store) === null || _this8$$store === void 0 || (_this8$$store = _this8$$store.state) === null || _this8$$store === void 0 ? void 0 : _this8$$store.basketActive) === false) {
                _this8.$store.dispatch('SET_BASKET_ACTIVE', true);
              }

              // Check if this is the first episode in the season and cart is empty
              isCartEmpty = _this8.cartItemIds.length === 0;
              if (true) {
                try {
                  localStorage.setItem('_download_skip_main_item', '1');
                } catch (error) {
                  console.error('Failed to set skip flag:', error);
                }
              }
              _context2.next = 2;
              return _this8.addEpisodeToCart(episode);
            case 2:
              // If cart was empty and first episode clicked, show download modal/drawer
              if (isCartEmpty) {
                // Emit event to show download modal (desktop) or drawer (mobile)
                _this8.$emit('show-download-modal', episode);
              }
              _this8.$store.dispatch('DOWNLOAD_MODAL_LOAD');
              _this8.$emit('buy', episode);
              _context2.next = 4;
              break;
            case 3:
              if (action === 'subscription') {
                _this8.$emit('subscription', episode);
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getEpisodeBackdropSrc: function getEpisodeBackdropSrc(episode) {
      var src = episode ? episode.backdrop : null;
      var normalized = typeof src === 'string' ? src.trim() : src;
      // return null so OptimizedImage is not rendered on missing backdrop
      return normalized || null;
    },
    blackSvgDataUrl: function blackSvgDataUrl(w, h) {
      var svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(w, "\" height=\"").concat(h, "\" viewBox=\"0 0 ").concat(w, " ").concat(h, "\" preserveAspectRatio=\"none\"><rect width=\"100%\" height=\"100%\" fill=\"black\"/></svg>");
      return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    }
  }
});
// CONCATENATED MODULE: ./components/item/SeasonEpisodes.vue?vue&type=script&lang=js
 /* harmony default export */ var item_SeasonEpisodesvue_type_script_lang_js = (SeasonEpisodesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/SeasonEpisodes.vue?vue&type=style&index=0&id=651f016c&prod&scoped=true&lang=css
var SeasonEpisodesvue_type_style_index_0_id_651f016c_prod_scoped_true_lang_css = __webpack_require__(1037);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/SeasonEpisodes.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  item_SeasonEpisodesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "651f016c",
  null
  
)

/* harmony default export */ var SeasonEpisodes = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_1f318961_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(737);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_1f318961_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OptimizedImage_vue_vue_type_style_index_0_id_1f318961_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/common/OptimizedImage.vue?vue&type=template&id=1f318961&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-img', _vm._g(_vm._b({
    directives: [{
      name: "lazy",
      rawName: "v-lazy",
      value: _vm.computedSrc,
      expression: "computedSrc"
    }, {
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "img-grid-flow",
    class: _vm.height === 'full' ? 'h-full' : '' + ' ' + _vm.classNames,
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "show": "",
      "width": _vm.width,
      "height": _vm.height === 'full' ? '600px' : _vm.height,
      "data-src": _vm.computedSrc,
      "alt": _vm.alt,
      "rounded": "lg",
      "loading": "lazy"
    }
  }, 'b-img', _vm.computedProps, false), _vm.$listeners))], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/common/OptimizedImage.vue?vue&type=template&id=1f318961&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/common/OptimizedImage.vue?vue&type=script&lang=js











var __default__ = {
  name: 'OptimizedImage',
  props: {
    imageSrc: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    },
    thumbOptions: {
      type: Object,
      default: function _default() {
        return {
          w: null,
          h: null,
          q: 100,
          a: 'c',
          zc: null,
          src: ''
        };
      }
    },
    type: {
      type: String,
      default: 'posters',
      // 'posters', 'backdrops', 'casts', 'files'
      validator: function validator(value) {
        return ['posters', 'backdrops', 'casts', 'files', 'backstage', 'next'].includes(value);
      }
    },
    fluidGrow: {
      type: Boolean,
      default: false
    },
    blank: {
      type: Boolean,
      default: true
    },
    blankColor: {
      type: String,
      default: '#bbb'
    },
    show: {
      type: Boolean,
      default: true
    },
    classNames: {
      type: String,
      default: ''
    },
    aspectRatio: {
      // Accept both String and Number to avoid Vue type warnings
      type: [String, Number],
      default: null
    }
  },
  computed: {
    computedProps: function computedProps() {
      var baseProps = {
        blank: this.blank,
        blankColor: this.blankColor,
        show: this.show
      };
      if (this.fluidGrow) {
        baseProps.fluidGrow = true;
      } else if (this.width && this.height) {
        baseProps.width = this.width;
        baseProps.height = this.height === 'full' ? '100%' : this.height;
      }
      return baseProps;
    },
    computedSrc: function computedSrc() {
      var baseUrl = 'https://thumb.upera.shop/thumb?';
      var params = new URLSearchParams();

      // Add thumbnail options
      Object.entries(this.thumbOptions).forEach(function (_ref) {
        var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        if (value !== null && value !== '') {
          params.set(key, value);
        }
      });

      // Ensure base CDN URL or return undefined if no src available
      if (!params.get('src')) {
        if (!this.imageSrc) {
          return undefined;
        }
        params.set('src', "https://cdn.upera.shop/s3/".concat(this.type, "/").concat(this.imageSrc));
      }
      if (this.type === 'backstage' || this.type === 'next') {
        return "https://thumb.upera.shop/thumb?w=382&h=220&q=100&a=t&src=https://cdn.upera.shop/s3/".concat(this.imageSrc);
      }
      return baseUrl + params.toString();
    }
  }
};

var OptimizedImagevue_type_script_lang_js_injectCSSVars_ = function __injectCSSVars__() {
  Object(vue_runtime_esm["useCssVars"])(function (_vm, _setup) {
    return {
      "73bcffe4": _vm.aspectRatio
    };
  });
};
var __setup__ = __default__.setup;
__default__.setup = __setup__ ? function (props, ctx) {
  OptimizedImagevue_type_script_lang_js_injectCSSVars_();
  return __setup__(props, ctx);
} : OptimizedImagevue_type_script_lang_js_injectCSSVars_;
/* harmony default export */ var OptimizedImagevue_type_script_lang_js = (__default__);
// CONCATENATED MODULE: ./components/item/common/OptimizedImage.vue?vue&type=script&lang=js
 /* harmony default export */ var common_OptimizedImagevue_type_script_lang_js = (OptimizedImagevue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/common/OptimizedImage.vue?vue&type=style&index=0&id=1f318961&prod&scoped=true&lang=css
var OptimizedImagevue_type_style_index_0_id_1f318961_prod_scoped_true_lang_css = __webpack_require__(739);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/common/OptimizedImage.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_OptimizedImagevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1f318961",
  null
  
)

/* harmony default export */ var OptimizedImage = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);