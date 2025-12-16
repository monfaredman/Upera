(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[136],{

/***/ 1064:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/terms.vue?vue&type=template&id=c3f7e7f0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid",
    attrs: {
      "id": "checkcontainer"
    }
  }, [_c('div', {
    staticClass: "container pt-5 pt-lg-5 pt-md-5 mb-5 pt-1 faq-page"
  }, [_c('section', {
    attrs: {
      "id": "banner"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('header', {
    staticClass: "headline mt-5"
  }, [_c('h5', {
    staticClass: "title font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('footer.terms')) + "\n          ")])])])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), !_vm.checkuser.terms ? _c('div', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: _vm.data.terms,
      expression: "data.terms"
    }],
    staticClass: "body text-justify"
  }) : _c('div', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: _vm.checkuser.terms,
      expression: "checkuser.terms"
    }],
    staticClass: "body text-justify"
  }), _vm._v(" "), _c('section', {
    attrs: {
      "id": "banner"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('header', {
    staticClass: "headline mt-5"
  }, [_c('h5', {
    staticClass: "title font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('footer.privacy')) + "\n          ")])])])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), !_vm.checkuser.privacy ? _c('div', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: _vm.data.privacy,
      expression: "data.privacy"
    }],
    staticClass: "body text-justify"
  }) : _c('div', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: _vm.checkuser.privacy,
      expression: "checkuser.privacy"
    }],
    staticClass: "body text-justify"
  })])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/profile/terms.vue?vue&type=template&id=c3f7e7f0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/terms.vue?vue&type=script&lang=js


/* harmony default export */ var termsvue_type_script_lang_js = ({
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return context.app.$axios.get('/get/app/details');
          case 1:
            res = _context.sent;
            return _context.abrupt("return", {
              data: {
                terms: res.data.data.terms,
                privacy: res.data.data.privacy
              }
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      data: {}
    };
  },
  head: function head() {
    return {
      title: this.$t('footer.terms')
    };
  }
});
// CONCATENATED MODULE: ./pages/profile/terms.vue?vue&type=script&lang=js
 /* harmony default export */ var profile_termsvue_type_script_lang_js = (termsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/profile/terms.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_termsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var terms = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(123).default})


/***/ })

}]);