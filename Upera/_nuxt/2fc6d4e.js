(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ 1056:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/app/episode/show/_id.vue?vue&type=template&id=7bd794c0
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

// CONCATENATED MODULE: ./pages/app/episode/show/_id.vue?vue&type=template&id=7bd794c0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/app/episode/show/_id.vue?vue&type=script&lang=js


/* harmony default export */ var _idvue_type_script_lang_js = ({
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            context.redirect({
              name: 'episode-id',
              params: {
                id: context.params.id
              }
            });

            //context.redirect('http://'+context.req.headers.host+'/episode/'+context.params.id)
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  }
});
// CONCATENATED MODULE: ./pages/app/episode/show/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var show_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/app/episode/show/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  show_idvue_type_script_lang_js,
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