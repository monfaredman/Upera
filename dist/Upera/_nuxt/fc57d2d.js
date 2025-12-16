(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_TeaserPreview_vue_vue_type_style_index_0_id_3caa6146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(906);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_TeaserPreview_vue_vue_type_style_index_0_id_3caa6146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_TeaserPreview_vue_vue_type_style_index_0_id_3caa6146_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/TeaserPreview.vue?vue&type=template&id=3caa6146&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.mediaItems.length > 0 ? _c('div', {
    staticClass: "teaser-preview-wrapper"
  }, [_c('HorizontalList', {
    attrs: {
      "title-en": "Teasers & Trailers",
      "title-fa": " ",
      "items": _vm.mediaItems,
      "instance-name": "teaser-preview-".concat(_vm.data.item.id),
      "options": _vm.swiperOptions,
      "card-variant": "backdrop",
      "size": {
        w: 382,
        h: 220
      },
      "link-builder": _vm.buildTeaserLink,
      "show-badges": false,
      "show-title": true,
      "add-series-class": false,
      "hoverable": true
    }
  })], 1) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/content/TeaserPreview.vue?vue&type=template&id=3caa6146&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./components/HorizontalList.vue + 4 modules
var HorizontalList = __webpack_require__(744);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/content/TeaserPreview.vue?vue&type=script&lang=js








/* harmony default export */ var TeaserPreviewvue_type_script_lang_js = ({
  name: 'TeaserPreview',
  components: {
    HorizontalList: HorizontalList["default"]
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    medias: {
      type: Object,
      required: true
    }
  },
  emits: ['play-teaser'],
  data: function data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: false,
        watchOverflow: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          1200: {
            slidesPerView: 3.5
          },
          992: {
            slidesPerView: 2.5
          },
          768: {
            slidesPerView: 1.5
          },
          576: {
            slidesPerView: 1.5
          },
          0: {
            slidesPerView: 1.5
          }
        }
      }
    };
  },
  computed: {
    mediaItems: function mediaItems() {
      var items = [];

      // Check if medias has teaser/trailer data
      if (this.medias && Object(esm_typeof["a" /* default */])(this.medias) === 'object') {
        // Add main teaser if exists
        if (this.medias.teaser || this.data.item.back_teaser || this.data.item.backdrop) {
          var thumbnail = this.data.item.back_teaser || this.data.item.backdrop;
          items.push({
            id: 1,
            type: 'teaser',
            name: 'تیزر اصلی',
            name_fa: 'تیزر اصلی',
            backdrop: thumbnail,
            poster: thumbnail,
            cdnType: thumbnail !== null && thumbnail !== void 0 && thumbnail.startsWith('http') ? 2 : 1,
            mediaId: 1
          });
        }

        // Add other media items from medias object
        Object.entries(this.medias).forEach(function (_ref) {
          var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          if (value && Object(esm_typeof["a" /* default */])(value) === 'object' && value.thumbnail) {
            var _thumbnail = value.thumbnail;
            items.push({
              id: value.id || key,
              type: 'teaser',
              name: value.name || key,
              name_fa: value.name || key,
              backdrop: _thumbnail,
              poster: _thumbnail,
              cdnType: _thumbnail !== null && _thumbnail !== void 0 && _thumbnail.startsWith('http') ? 2 : 1,
              mediaId: value.id || key
            });
          }
        });
      }

      // Fallback: if no items, add at least the main backdrop
      if (items.length === 0 && (this.data.item.backdrop || this.data.item.back_teaser)) {
        var _thumbnail2 = this.data.item.back_teaser || this.data.item.backdrop;
        items.push({
          id: 1,
          type: 'teaser',
          name: 'تیزر',
          name_fa: 'تیزر',
          backdrop: _thumbnail2,
          poster: _thumbnail2,
          cdnType: _thumbnail2 !== null && _thumbnail2 !== void 0 && _thumbnail2.startsWith('http') ? 2 : 1,
          mediaId: 1
        });
      }
      return items;
    }
  },
  methods: {
    buildTeaserLink: function buildTeaserLink(item) {
      var _this = this;
      // Return a function that triggers the play event
      return {
        click: function click() {
          _this.$emit('play-teaser', item.mediaId || item.id || 1);
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./components/item/content/TeaserPreview.vue?vue&type=script&lang=js
 /* harmony default export */ var content_TeaserPreviewvue_type_script_lang_js = (TeaserPreviewvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/content/TeaserPreview.vue?vue&type=style&index=0&id=3caa6146&prod&scoped=true&lang=css
var TeaserPreviewvue_type_style_index_0_id_3caa6146_prod_scoped_true_lang_css = __webpack_require__(1043);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/content/TeaserPreview.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  content_TeaserPreviewvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "3caa6146",
  null
  
)

/* harmony default export */ var TeaserPreview = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HorizontalList: __webpack_require__(744).default})


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);