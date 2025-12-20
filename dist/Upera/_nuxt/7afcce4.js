(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[137],{

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/ref/_id.vue?vue&type=template&id=7a7b8a52
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('section', {
    attrs: {
      "id": "movie"
    }
  }, [_c('div', {
    staticClass: "banner mt-5"
  }, [_c('div', {
    staticClass: "banner_container"
  }, [_vm._v("\n        لطفا منتظر بمانید\n      ")])])])]);
}];

// CONCATENATED MODULE: ./pages/ref/_id.vue?vue&type=template&id=7a7b8a52

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/ref/_id.vue?vue&type=script&lang=js




/* harmony default export */ var _idvue_type_script_lang_js = ({
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var num, limit, base, res, i, uri;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            num = context.params.id;
            limit = num.length;
            if (context.app.$cookiz.get('refb') != num && limit < 11) {
              context.app.$cookiz.set('refb', num);
              base = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
              res = (base + '').indexOf(num.charAt(0), 0);
              for (i = 1; i < limit; i++) {
                res = 62 * res + (base + '').indexOf(num.charAt(i), 0);
              }
              context.app.$cookiz.set('ref', res);
            }
            if (context.query.uri) {
              uri = decodeURIComponent(context.query.uri);
              uri = uri.replace('app/show', "movie/download");
              uri = uri.replace('app/series/show', "series/download");
              uri = uri.replace('app/episode/show', "episode/download");
              context.redirect('http://' + context.req.headers.host + '/' + uri);
            } else {
              context.redirect('http://' + context.req.headers.host);
            }
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./pages/ref/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var ref_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/ref/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ref_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);