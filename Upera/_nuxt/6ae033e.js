(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadInfoSection.vue?vue&type=template&id=fc27e494

var render = function render() {
  var _vm$fullrateData$fa, _vm$fullrateData$fa2;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-12"
  }, [!_vm.cartLoading && _vm.screening.ekran ? _c('span', {
    staticClass: "text-info h6 text-justify"
  }, [_vm._v("\n    مصرف اینترنت جهت تماشای آنلاین " + _vm._s((_vm$fullrateData$fa = _vm.fullrateData.fa) === null || _vm$fullrateData$fa === void 0 ? void 0 : _vm$fullrateData$fa.title) + " می باشد"), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), !_vm.cartLoading && _vm.screening.ekran && _vm.presale ? _c('span', {
    staticClass: "text-danger h6 text-justify"
  }, [_vm._v("\n    برای تماشا از خانه، سانس سینمای آنلاین\n    " + _vm._s(_vm.screening.ekran_hour) + " ساعته است، طوری تنظیم کنید که تماشای کامل فیلم\n    را در سانس خود از دست ندهید."), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), !_vm.cartLoading && !_vm.presale && _vm.pass ? _c('span', {
    staticClass: "text-danger h6 text-justify"
  }, [_vm._v("\n    رمز پیش خرید:\n    "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.pass))]), _vm._v(" (مخصوص کسانی که قبلا خرید\n    کرده اند)"), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), !_vm.screening.ekran && !_vm.cartLoading ? _c('span', {
    staticClass: "text-info h6 text-justify"
  }, [_vm._v("\n    حجم مصرفی: " + _vm._s((_vm$fullrateData$fa2 = _vm.fullrateData.fa) === null || _vm$fullrateData$fa2 === void 0 ? void 0 : _vm$fullrateData$fa2.title)), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), !_vm.ftb2 && !_vm.cartLoading && _vm.traffic && !_vm.downloadsList.some(function (el) {
    return el.owned === 1;
  }) ? _c('span', {
    staticClass: "text-justify"
  }, [_vm._v("\n    دسترسی بدون خرید، با اینترنت " + _vm._s(_vm.operatorFullrate)), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary text-right",
    on: {
      "click": function click($event) {
        return _vm.$emit('check-connection');
      }
    }
  }, [_vm._v("\n      بررسی اتصال اینترنت\n      "), _c('i', {
    staticClass: "fas fa-sync-alt"
  })]), _c('br'), _vm._v("\n    و یا خرید با اینترنت فعلی شما:"), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), !_vm.cartLoading && _vm.notes ? _c('span', {
    staticClass: "text-info h6 text-justify"
  }, [_c('br'), _vm._v(_vm._s(_vm.notes)), _c('br'), _c('br')]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/download/DownloadInfoSection.vue?vue&type=template&id=fc27e494

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/DownloadInfoSection.vue?vue&type=script&lang=js

/* harmony default export */ var DownloadInfoSectionvue_type_script_lang_js = ({
  name: 'DownloadInfoSection',
  props: {
    contentInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    screening: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    presale: {
      type: Boolean,
      default: false
    },
    pass: {
      type: String,
      default: ''
    },
    fullrateData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    traffic: {
      type: Number,
      default: 0
    },
    ftb2: {
      type: Number,
      default: 0
    },
    downloadsList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    cart: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    cartLoading: {
      type: Boolean,
      default: false
    },
    notes: {
      type: String,
      default: ''
    }
  },
  emits: ['check-connection'],
  data: function data() {
    return {
      operatorFullrate: 'همراه اول یا ایرانسل'
    };
  }
});
// CONCATENATED MODULE: ./components/download/DownloadInfoSection.vue?vue&type=script&lang=js
 /* harmony default export */ var download_DownloadInfoSectionvue_type_script_lang_js = (DownloadInfoSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/DownloadInfoSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_DownloadInfoSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DownloadInfoSection = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);