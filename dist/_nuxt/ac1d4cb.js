(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadHeader.vue?vue&type=template&id=9e9119e2
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "d-flex justify-content-between align-items-center download-header p-3"
  }, [_c('div', {
    staticClass: "d-flex justify-content-start align-items-center download-header ح-۴"
  }, [_c('h6', {
    staticClass: "ml-1"
  }, [_vm._v("خرید")]), _vm._v(" "), _vm.itemType == 'episode' ? _c('h6', [_vm._v("قسمت")]) : _c('h6', [_vm._v("فیلم")])]), _vm._v(" "), !_vm.isStaticModal ? _c('button', {
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.onClose
    }
  }, [_c('i', {
    staticClass: "fas fa-times"
  })]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/download/DownloadHeader.vue?vue&type=template&id=9e9119e2

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadHeader.vue?vue&type=script&lang=js
/* harmony default export */ var DownloadHeadervue_type_script_lang_js = ({
  name: 'DownloadHeader',
  components: {},
  props: {
    backdrop: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    },
    content: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemType: {
      type: String,
      default: ''
    },
    contentId: {
      type: String,
      default: ''
    },
    isStaticModal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    posterStyle: function posterStyle() {
      return {
        backgroundImage: "url('https://thumb.upera.shop/thumb?w=800&h=412&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/".concat(this.backdrop, "')")
      };
    },
    thumbnailUrl: function thumbnailUrl() {
      return "https://thumb.upera.shop/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.shop/s3/posters/".concat(this.poster);
    }
  },
  methods: {
    onClose: function onClose() {
      this.$emit('close');
    },
    onTitleClick: function onTitleClick() {
      this.$emit('title-click', {
        id: this.contentId,
        type: this.itemType
      });
    }
  }
});
// CONCATENATED MODULE: ./components/download/DownloadHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var download_DownloadHeadervue_type_script_lang_js = (DownloadHeadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/DownloadHeader.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_DownloadHeadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DownloadHeader = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);