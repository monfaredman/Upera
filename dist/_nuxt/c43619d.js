(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/common/BackNavigation.vue?vue&type=template&id=b55b5212
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "back",
    class: _vm.backClass,
    attrs: {
      "href": "#"
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.handleBackClick.apply(null, arguments);
      }
    }
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.arrowIcon,
      "width": "30",
      "height": "30",
      "alt": _vm.variant === 'mobile' ? 'Back' : 'Back Desktop'
    }
  })]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/common/BackNavigation.vue?vue&type=template&id=b55b5212

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/common/BackNavigation.vue?vue&type=script&lang=js

/* harmony default export */ var BackNavigationvue_type_script_lang_js = ({
  name: 'BackNavigation',
  props: {
    variant: {
      type: String,
      default: 'desktop',
      validator: function validator(value) {
        return ['desktop', 'mobile'].includes(value);
      }
    }
  },
  computed: {
    backClass: function backClass() {
      return {
        'd-md-none': this.variant === 'mobile',
        'd-none d-md-block': this.variant === 'desktop',
        back: this.variant === 'mobile',
        back2: this.variant === 'desktop'
      };
    },
    arrowIcon: function arrowIcon() {
      // Use require for webpack to handle the asset
      return this.variant === 'mobile' ? __webpack_require__(739) : __webpack_require__(740);
    }
  },
  methods: {
    handleBackClick: function handleBackClick() {
      if (this.hasHistory()) {
        this.$router.go(-1);
      } else {
        this.$router.push('/');
      }
    },
    hasHistory: function hasHistory() {
      return window.history.length > 2;
    }
  }
});
// CONCATENATED MODULE: ./components/item/common/BackNavigation.vue?vue&type=script&lang=js
 /* harmony default export */ var common_BackNavigationvue_type_script_lang_js = (BackNavigationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/common/BackNavigation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_BackNavigationvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BackNavigation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 739:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGlkPSJwcmVmaXhfX2Fycm93LWJhY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uNDg2IC4wMTEpIj4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19SZWN0YW5nbGVfMTQ1IiBkPSJNMCAwSDI0VjI0SDB6IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDEyLjI0OCAxMi4yMzgpIiBzdHlsZT0ib3BhY2l0eTowO2ZpbGw6I0ZGRkZGRiIvPgogICAgICAgIDxwYXRoIGlkPSJwcmVmaXhfX1BhdGhfMjQiIGQ9Ik0xNy43NjQgMTAuMjkxSDYuODgxbDMuMzMxLTMuODQ1YS44Ni44NiAwIDAgMC0uMTE5LTEuMjQ2Ljk0NC45NDQgMCAwIDAtMS4yOTMuMTE3bC00LjU4OSA1LjI5MmExLjA0MiAxLjA0MiAwIDAgMC0uMDgzLjEzMmMwIC4wNDQgMCAuMDcxLS4wNjQuMTE1YS44MTcuODE3IDAgMCAwIDAgLjYzNWMwIC4wNDQgMCAuMDcxLjA2NC4xMTVhMS4wNDIgMS4wNDIgMCAwIDAgLjA4My4xMzJMOC44IDE3LjAyOWEuOTQ4Ljk0OCAwIDAgMCAxLjI5NC4xMTUuODcyLjg3MiAwIDAgMCAuMzI4LS42Ljg1OS44NTkgMCAwIDAtLjIwOS0uNjQ2bC0zLjMzMi0zLjg0M2gxMC44ODNhLjg4My44ODMgMCAxIDAgMC0xLjc2NHoiIGRhdGEtbmFtZT0iUGF0aCAyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjY3IC45ODkpIiBzdHlsZT0iZmlsbDojRkZGIi8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ 740:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGlkPSJwcmVmaXhfX2Fycm93LWJhY2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0uNDg2IC4wMTEpIj4KICAgICAgICA8cGF0aCBpZD0icHJlZml4X19SZWN0YW5nbGVfMTQ1IiBkPSJNMCAwSDI0VjI0SDB6IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDEyLjI0OCAxMi4yMzgpIiBzdHlsZT0ib3BhY2l0eTowO2ZpbGw6I2Y2MyIvPgogICAgICAgIDxwYXRoIGlkPSJwcmVmaXhfX1BhdGhfMjQiIGQ9Ik0xNy43NjQgMTAuMjkxSDYuODgxbDMuMzMxLTMuODQ1YS44Ni44NiAwIDAgMC0uMTE5LTEuMjQ2Ljk0NC45NDQgMCAwIDAtMS4yOTMuMTE3bC00LjU4OSA1LjI5MmExLjA0MiAxLjA0MiAwIDAgMC0uMDgzLjEzMmMwIC4wNDQgMCAuMDcxLS4wNjQuMTE1YS44MTcuODE3IDAgMCAwIDAgLjYzNWMwIC4wNDQgMCAuMDcxLjA2NC4xMTVhMS4wNDIgMS4wNDIgMCAwIDAgLjA4My4xMzJMOC44IDE3LjAyOWEuOTQ4Ljk0OCAwIDAgMCAxLjI5NC4xMTUuODcyLjg3MiAwIDAgMCAuMzI4LS42Ljg1OS44NTkgMCAwIDAtLjIwOS0uNjQ2bC0zLjMzMi0zLjg0M2gxMC44ODNhLjg4My44ODMgMCAxIDAgMC0xLjc2NHoiIGRhdGEtbmFtZT0iUGF0aCAyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLjY3IC45ODkpIiBzdHlsZT0iZmlsbDojZjYzIi8+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ })

}]);