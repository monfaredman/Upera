(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/ActionButtonsSection.vue?vue&type=template&id=5610d892
var render = function render() {
  var _vm$fullrateData$fa;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "download-links-footer",
    class: _vm.footerClass
  }, [_vm.showPlay ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_vm.contentInfo.type == 'movie' ? _c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('play');
      }
    }
  }, [_vm._v("\n          نمایش فیلم\n          "), _c('i', {
    staticClass: "icon-play"
  })]) : _vm.contentInfo.type == 'series' && _vm.seasonFirstEpisode ? _c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('play', _vm.seasonFirstEpisode);
      }
    }
  }, [_vm._v("\n          نمایش قسمت اول سریال\n          "), _c('i', {
    staticClass: "icon-play"
  })]) : _c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('play');
      }
    }
  }, [_vm._v("\n          نمایش این قسمت\n          "), _c('i', {
    staticClass: "icon-play"
  })])])])]) : _vm._e(), _vm._v(" "), _vm.showSub ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('subscribe');
      }
    }
  }, [_vm._v("\n          خرید اشتراک"), _vm.fullrateData.rate == 1 ? _c('span', [_vm._v("\n            (حجم مصرفی: نیم بها)")]) : _vm._e(), _vm._v(" "), _c('i', {
    staticClass: "fa fa-money-bill pr-2"
  })])])])]) : _vm._e(), _vm._v(" "), _vm.showFree ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-secondary btn-block",
    on: {
      "click": function click($event) {
        return _vm.$emit('free-download');
      }
    }
  }, [_vm._v("\n          دانلود رایگان\n          "), _c('i', {
    staticClass: "icon-download"
  })])])])]) : _vm._e(), _vm._v(" "), _vm.showBuy ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-danger btn-block",
    on: {
      "click": function click($event) {
        return _vm.$emit('buy-download');
      }
    }
  }, [_vm._v("\n          خرید و دانلود با حجم " + _vm._s(((_vm$fullrateData$fa = _vm.fullrateData.fa) === null || _vm$fullrateData$fa === void 0 ? void 0 : _vm$fullrateData$fa.alternative) || '') + "\n          "), _c('i', {
    staticClass: "fa fa-money-bill pr-2"
  })])])])]) : _vm._e(), _vm._v(" "), _vm.ussd ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('a', {
    staticClass: "btn btn-danger btn-block",
    attrs: {
      "href": 'tel:' + _vm.ussd
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.$emit('ussd-call');
      }
    }
  }, [_vm._v("\n          خرید تکی از طریق هف هشتاد\n          "), _c('i', {
    staticClass: "fa fa-money-bill pr-2"
  })])])])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("\n          کیفیت متناسب با سرعت اینترنت\n        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("\n          دسترسی همزمان به ۳۰۰۰۰ عنوان فیلم و اپیزود\n        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("همه کیفیت ها")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("خرید و دانلود")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("خرید با USSD")])]);
}];

// CONCATENATED MODULE: ./components/download/ActionButtonsSection.vue?vue&type=template&id=5610d892

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/ActionButtonsSection.vue?vue&type=script&lang=js

/* harmony default export */ var ActionButtonsSectionvue_type_script_lang_js = ({
  name: 'ActionButtonsSection',
  props: {
    showPlay: {
      type: Boolean,
      default: false
    },
    showSub: {
      type: Boolean,
      default: false
    },
    showFree: {
      type: Boolean,
      default: false
    },
    showBuy: {
      type: Boolean,
      default: false
    },
    ussd: {
      type: String,
      default: ''
    },
    contentInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    fullrateData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    seasons: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['play', 'subscribe', 'free-download', 'buy-download', 'ussd-call'],
  computed: {
    footerClass: function footerClass() {
      var count = 0;
      if (this.showPlay) count++;
      if (this.showSub) count++;
      if (this.showFree) count++;
      if (this.showBuy) count++;
      if (this.ussd) count++;
      return {
        'footer-0': count === 0,
        'footer-1': count === 1
      };
    },
    seasonFirstEpisode: function seasonFirstEpisode() {
      if (this.seasons && Object.keys(this.seasons).length > 0) {
        var firstSeason = this.seasons[Object.keys(this.seasons)[0]];
        return firstSeason && firstSeason[0] ? firstSeason[0].id : null;
      }
      return null;
    }
  }
});
// CONCATENATED MODULE: ./components/download/ActionButtonsSection.vue?vue&type=script&lang=js
 /* harmony default export */ var download_ActionButtonsSectionvue_type_script_lang_js = (ActionButtonsSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/ActionButtonsSection.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_ActionButtonsSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ActionButtonsSection = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);