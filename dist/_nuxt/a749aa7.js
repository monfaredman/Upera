(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74,35,36],{

/***/ 790:
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

/***/ 791:
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
var es_number_constructor = __webpack_require__(140);

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

/***/ 923:
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
var PrimaryActionButton = __webpack_require__(791);

// EXTERNAL MODULE: ./components/buttons/DownloadButton.vue + 4 modules
var DownloadButton = __webpack_require__(790);

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