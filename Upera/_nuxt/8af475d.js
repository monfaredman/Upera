(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6,81],{

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 745:
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

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/HorizontalList.vue?vue&type=template&id=755a1f76



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "horizontal-list-container reach-begin"
  }, [!_vm.isSingleItem ? _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-2 container-fluid"
  }, [_c('div', {
    staticClass: "d-flex align-items-center justify-content-start"
  }, [_vm.items[0].type === 'video' ? _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "ml-2",
    attrs: {
      "data-src": __webpack_require__(640),
      "alt": "UGC",
      "height": "30"
    }
  }) : _vm._e(), _vm._v(" "), _c('h4', {
    staticClass: "font-weight-bold horizontal-list-title",
    class: _vm.isOffer ? 'text-handle-offer-title' : ''
  }, [_vm._v("\n        " + _vm._s(_vm.localizedTitle) + "\n      ")])]), _vm._v(" "), _vm.showAllRoute ? _c('nuxt-link', {
    staticClass: "mb-1 d-flex justify-content-center align-items-center horizontal-list-link show-all-link",
    staticStyle: {
      "z-index": "4"
    },
    attrs: {
      "to": _vm.showAllRoute
    }
  }, [_c('span', {
    staticClass: "watch-more-text ml-1 show-all-text",
    class: _vm.isOffer && 'text-white'
  }, [_vm._v("\n        " + _vm._s(_vm.$t('new.show_all')) + "\n      ")]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-h show-all-icon",
    class: _vm.isOffer && 'text-white',
    attrs: {
      "aria-hidden": "true"
    }
  })]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), !_vm.isSingleItem ? _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:[instanceName]",
      value: _vm.mergedOptions,
      expression: "mergedOptions",
      arg: _vm.instanceName
    }],
    ref: "swiperContainer",
    staticClass: "swiper-container newset-slider2",
    class: {
      'offer-slider': _vm.isOffer
    }
  }, [_c('div', {
    staticClass: "swiper-wrapper py-1"
  }, _vm._l(_vm.items, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide",
      class: _vm.isOffer ? _vm.offerSlideClass(index) : ''
    }, [_c('MediaCard', {
      attrs: {
        "item": item,
        "index": index,
        "variant": _vm.cardVariant,
        "size": _vm.size,
        "linkBuilder": _vm.linkBuilder,
        "showBadges": _vm.showBadges,
        "showTitle": _vm.showTitle,
        "addSeriesClass": _vm.addSeriesClass,
        "hoverable": _vm.hoverable,
        "is-offer": _vm.isOffer
      }
    })], 1);
  }), 0)]) : _vm.isSingleItem && _vm.singleItemType === 'simple' ? _c('div', {
    staticClass: "single-item-simple-card container-fluid"
  }, [_c('nuxt-link', {
    staticClass: "single-simple-link",
    attrs: {
      "to": _vm.resolvedSingleItemLink
    }
  }, [_c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "single-simple-image",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "show": "",
      "data-src": _vm.singleItemImageSrc,
      "alt": _vm.singleItem.name || _vm.singleItem.title,
      "fluid": "",
      "rounded": ""
    }
  })], 1)], 1) : _vm.isSingleItem && _vm.singleItemType === 'detailed' ? _c('div', {
    staticClass: "single-item-detailed-card container-fluid"
  }, [_c('div', {
    staticClass: "single-detailed-content",
    style: {
      backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 24.75%, #000000 100%), url('".concat(_vm.singleItemImageSrc, "')"),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }, [_c('div', {
    staticClass: "single-detailed-info"
  }, [_c('h3', {
    staticClass: "item-title"
  }, [_vm._v("\n          " + _vm._s(_vm.singleItem.name_fa || _vm.singleItem.name) + "\n        ")]), _vm._v(" "), _vm.singleItem.overview_fa || _vm.singleItem.description ? _c('p', {
    staticClass: "item-description"
  }, [_vm._v("\n          " + _vm._s(_vm.truncateDescription(_vm.singleItem.overview_fa || _vm.singleItem.description)) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "item-all-actions"
  }, [_vm.actionsButtons && _vm.actionsButtons.length > 0 ? [_vm._l(_vm.actionsButtons, function (buttonGroup, index) {
    return [buttonGroup.mainButton && buttonGroup.mainButton.exist ? _c('button', {
      key: "main-".concat(index),
      staticClass: "btn btn-main",
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.handleAction(buttonGroup.mainButton.action);
        }
      }
    }, [_c('span', [_vm._v("\n                  " + _vm._s(_vm.getButtonLabel(buttonGroup.mainButton.label)) + "\n                  "), buttonGroup.mainButton.action === 'play' ? _c('i', {
      staticClass: "fa fa-play pl-2"
    }) : buttonGroup.mainButton.action === 'buy' ? _c('i', {
      staticClass: "fa fa-shopping-cart pl-2"
    }) : _vm._e()])]) : _vm._e(), _vm._v(" "), buttonGroup.downloadButton && buttonGroup.downloadButton.exist ? _c('button', {
      key: "download-".concat(index),
      staticClass: "btn btn-download",
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.handleAction(buttonGroup.downloadButton.action);
        }
      }
    }, [_c('span', [_vm._v("\n                  " + _vm._s(_vm.getButtonLabel(buttonGroup.downloadButton.label)) + "\n                  "), _c('i', {
      staticClass: "fa fa-download pl-2"
    })])]) : _vm._e()];
  })] : _vm._e(), _vm._v(" "), _vm.showIconActions ? _c('IconActions', {
    attrs: {
      "variant": 'desktop',
      "is-watchlist": _vm.singleItem.isWatchlist || 0,
      "user-claps": _vm.singleItem.userClaps || 0,
      "clap-active": _vm.clapActive,
      "custom-style": {
        width: '32px',
        height: '32px',
        borderRadius: '4px',
        backgroundColor: '#00000073',
        color: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px !important',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      }
    },
    on: {
      "toggle-watchlist": function toggleWatchlist($event) {
        return _vm.$emit('toggle-watchlist', _vm.singleItem);
      },
      "share": function share($event) {
        return _vm.$emit('share', _vm.singleItem);
      },
      "clap-start": function clapStart($event) {
        return _vm.$emit('clap-start', _vm.singleItem);
      },
      "clap-stop": function clapStop($event) {
        return _vm.$emit('clap-stop', _vm.singleItem);
      }
    }
  }) : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    staticClass: "single-detailed-poster"
  }, [_c('nuxt-link', {
    attrs: {
      "to": _vm.resolvedSingleItemLink
    }
  }, [_c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "poster-image",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "show": "",
      "data-src": _vm.singleItemPosterSrc,
      "alt": _vm.singleItem.name || _vm.singleItem.title,
      "fluid": "",
      "rounded": ""
    }
  })], 1)], 1)])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HorizontalList.vue?vue&type=template&id=755a1f76

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// EXTERNAL MODULE: ./components/MediaCard.vue + 4 modules
var MediaCard = __webpack_require__(748);

// EXTERNAL MODULE: ./components/item/showcase/IconActions.vue + 4 modules
var IconActions = __webpack_require__(756);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/HorizontalList.vue?vue&type=script&lang=js








function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






/* harmony default export */ var HorizontalListvue_type_script_lang_js = ({
  name: 'HorizontalList',
  components: {
    MediaCard: MediaCard["default"],
    IconActions: IconActions["default"]
  },
  props: {
    // Titles
    titleEn: {
      type: String,
      default: ''
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    titleFa: {
      type: String,
      default: ''
    },
    isOffer: {
      type: Boolean,
      default: false
    },
    // "Show all" link object or null
    showAllRoute: {
      type: Object,
      default: null
    },
    // Items to render
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // v-swiper instance name (must be unique per list)
    instanceName: {
      type: [String, Number],
      default: 'listSwip'
    },
    // Swiper options
    options: {
      type: Object,
      required: true
    },
    // Card configuration
    cardVariant: {
      type: String,
      default: 'poster'
    },
    // 'poster' | 'backdrop'
    size: {
      type: Object,
      default: function _default() {
        return {
          w: 142,
          h: 212
        };
      }
    },
    // Route builder: (item) => { name, params }
    linkBuilder: {
      type: [Function, String, Object],
      required: true
    },
    // UI toggles
    showBadges: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    addSeriesClass: {
      type: Boolean,
      default: true
    },
    // Single item type: 'simple' | 'detailed' | null (auto-detect)
    singleItemType: {
      type: String,
      default: null
    },
    // Action buttons for single item detailed view
    actionsButtons: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // Show icon actions (watchlist, share, clap) for Type 3
    showIconActions: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'discover'
    }
  },
  data: function data() {
    return {
      clapActive: false
    };
  },
  computed: {
    localizedTitle: function localizedTitle() {
      // Check if items contain live content and use live item title
      if (this.items && this.items.length > 0 && this.items[0].type === 'live') {
        var _isFa = this.$i18n && this.$i18n.locale === 'fa';
        return _isFa ? 'پخش زنده' : 'Live ';
      }
      if (this.items && this.items.length > 0 && this.items[0].type === 'video') {
        var _isFa2 = this.$i18n && this.$i18n.locale === 'fa';
        return _isFa2 ? 'ویدیو کست' : 'Video Cast';
      }

      // Default behavior for other content types
      var isFa = this.$i18n && this.$i18n.locale === 'fa';
      var en = this.titleEn || '';
      var fa = this.titleFa || '';
      return isFa ? fa || en : this.capitalize(en || fa);
    },
    mergedOptions: function mergedOptions() {
      // Merge default options that help swiper recalculate on DOM changes
      var defaults = {
        observer: true,
        observeParents: true,
        watchOverflow: true
      };

      // For offer sections, add additional constraints to prevent over-scrolling
      if (this.isOffer) {
        return _objectSpread(_objectSpread(_objectSpread({}, defaults), this.options || {}), {}, {
          resistanceRatio: 0,
          watchSlidesProgress: true,
          freeMode: false
        });
      }
      return _objectSpread(_objectSpread({}, defaults), this.options || {});
    },
    // Check if we have exactly one item
    isSingleItem: function isSingleItem() {
      return this.items && this.items.length === 1 && this.type === 'slider';
    },
    // Get the single item
    singleItem: function singleItem() {
      return this.isSingleItem ? this.items[0] : null;
    },
    // Build link for single item
    resolvedSingleItemLink: function resolvedSingleItemLink() {
      if (!this.singleItem) return '#';
      if (typeof this.linkBuilder === 'function') {
        return this.linkBuilder(this.singleItem);
      }
      if (typeof this.linkBuilder === 'string') {
        return this.linkBuilder;
      }
      return this.linkBuilder || '#';
    },
    // Get image source for simple single item (backdrop)
    singleItemImageSrc: function singleItemImageSrc() {
      if (!this.singleItem) return '';
      var backdrop = this.singleItem.backdrop || this.singleItem.poster || '';
      return this.backdropSrc(backdrop);
    },
    // Get poster source for detailed single item
    singleItemPosterSrc: function singleItemPosterSrc() {
      if (!this.singleItem) return '';
      var poster = this.singleItem.poster || '';
      return this.posterSrc(poster);
    }
  },
  watch: {
    items: {
      handler: function handler() {
        var _this = this;
        // Force swiper update when items change
        this.$nextTick(function () {
          _this.updateSwiper();
        });
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this2 = this;
    // Force swiper update after mount to fix sizing issues
    this.$nextTick(function () {
      setTimeout(function () {
        _this2.updateSwiper();

        // For offer sliders, add boundary check
        if (_this2.isOffer) {
          _this2.setupOfferSwiperBoundary();
        }
      }, 100);
    });
  },
  methods: {
    capitalize: function capitalize(text) {
      if (!text) return '';
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    slideClass: function slideClass(item) {
      // preserve previous class behavior for movie cards
      return {
        movielabel: this.cardVariant === 'poster' && item.type === 'movie'
      };
    },
    offerSlideClass: function offerSlideClass(index) {
      return index === 0 ? 'offer-slide-large' : 'offer-slide-small';
    },
    updateSwiper: function updateSwiper() {
      // Access swiper instance via the directive binding
      var container = this.$refs.swiperContainer;
      if (container && container.swiper) {
        container.swiper.update();
      }
    },
    setupOfferSwiperBoundary: function setupOfferSwiperBoundary() {
      if (window.innerWidth < 640) return;
      var container = this.$refs.swiperContainer;
      if (!container || !container.swiper) return;
      var swiper = container.swiper;

      // Calculate offset based on viewport width
      var getOffsetForViewport = function getOffsetForViewport() {
        var width = window.innerWidth;
        if (width < 640) return 0; // xs
        if (width < 768) return 6; // sm
        if (width < 1024) return 8; // md
        if (width < 1280) return 9; // lg
        if (width < 1400) return 6; // xl
        if (width < 1580) return 6; // xl
        if (width < 1690) return 3; // xl
        return 5; // 2xl and above
      };

      // Set max translate to prevent scrolling past last item
      swiper.on('slideChange', function () {
        var slides = swiper.slides.length;
        var slidesPerView = swiper.params.slidesPerView;
        var maxIndex = Math.max(0, slides - Math.ceil(slidesPerView));
        if (swiper.activeIndex > maxIndex) {
          swiper.slideTo(maxIndex);
        }
      });

      // Prevent momentum scrolling past the last slide
      swiper.on('touchEnd', function () {
        var slides = swiper.slides.length;
        var slidesPerView = swiper.params.slidesPerView;
        var offset = getOffsetForViewport();
        var maxIndex = Math.max(0, slides - Math.ceil(slidesPerView) - offset);
        if (swiper.activeIndex > maxIndex) {
          swiper.slideTo(maxIndex);
        }
      });
    },
    // Poster image helper
    posterSrc: function posterSrc(poster) {
      if (!poster) return '';
      var prefix = 'https://thumb.upera.tv/thumb?w=400&q=90&fmt=webp&src=https://thumb.upera.tv/s3/posters/';
      return poster.startsWith(prefix) ? poster : prefix + poster;
    },
    // Backdrop image helper
    backdropSrc: function backdropSrc(backdrop) {
      if (!backdrop) return '';
      var prefix = 'https://thumb.upera.tv/thumb?w=700&h=300&q=100&a=t&src=https://cdn.upera.tv/s3/backdrops/';
      return backdrop.startsWith('https://') ? backdrop : prefix + backdrop;
    },
    // Truncate description to a reasonable length
    truncateDescription: function truncateDescription(desc) {
      var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
      if (!desc) return '';
      if (desc.length <= maxLength) return desc;
      return desc.substring(0, maxLength) + '...';
    },
    // Get localized button label
    getButtonLabel: function getButtonLabel(label) {
      if (!label) return '';
      if (typeof label === 'string') return label;
      var isFa = this.$i18n && this.$i18n.locale === 'fa';
      return isFa ? label.fa || label.en : label.en || label.fa;
    },
    // Handle action button clicks
    handleAction: function handleAction(action) {
      if (!action || !this.singleItem) return;
      if (action === 'play') {
        // Navigate to the item's page or emit play event
        this.$router.push(this.resolvedSingleItemLink);
      } else if (action === 'buy') {
        // Emit buy event or navigate
        this.$emit('buy', this.singleItem);
      } else if (action === 'subscription') {
        this.$emit('subscription', this.singleItem);
      } else if (action === 'openDownloadModal') {
        // Emit download modal event
        this.$emit('openDownloadModal', this.singleItem);
      } else {
        // Generic action emit
        this.$emit(action, this.singleItem);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/HorizontalList.vue?vue&type=script&lang=js
 /* harmony default export */ var components_HorizontalListvue_type_script_lang_js = (HorizontalListvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/HorizontalList.vue?vue&type=style&index=0&id=755a1f76&prod&lang=css
var HorizontalListvue_type_style_index_0_id_755a1f76_prod_lang_css = __webpack_require__(947);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/HorizontalList.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HorizontalListvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var HorizontalList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MediaCard: __webpack_require__(748).default})


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

/***/ 857:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_HorizontalList_vue_vue_type_style_index_0_id_755a1f76_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(857);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_HorizontalList_vue_vue_type_style_index_0_id_755a1f76_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_HorizontalList_vue_vue_type_style_index_0_id_755a1f76_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);