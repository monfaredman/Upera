(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/lives/index.vue?vue&type=template&id=30b38460

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "checkcontainer"
    }
  }, [_c('div', {
    staticClass: "container-fluid mt-lg-5 mt-md-5 pt-lg-5 pt-md-5"
  }, [_c('div', {
    staticClass: "row genre-link align-items-center mt-lg-3 mt-md-3 pt-lg-3 pt-md-3"
  }, _vm._l(_vm.data.lives, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-1"
    }, [_c('nuxt-link', {
      attrs: {
        "to": {
          name: 'lives-live',
          params: {
            live: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "rounded",
      attrs: {
        "data-src": item.image,
        "alt": item.name_fa
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      show: true
    }, false)), _vm._v(" "), _c('div', {
      staticClass: "mt-2"
    }, [_c('h6', {
      staticClass: "mt-2 font-weight-normal"
    }, [_c('div', {
      staticClass: "pt-2 float-left"
    }, [_vm._v("\n                " + _vm._s(item.name_fa) + " - " + _vm._s(item.name) + "\n              ")]), _c('b-button', {
      staticClass: "py-1 px-lg-4 float-right",
      attrs: {
        "variant": "primary"
      }
    }, [_vm._v("\n                " + _vm._s(_vm.$t('new.show')) + "\n              ")])], 1)])], 1)], 1);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "row align-items-center mt-2"
  }, [_c('div', {
    staticClass: "col-lg-6 col-md-6"
  }), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6 col-md-6"
  }, [_c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "rounded",
    attrs: {
      "data-src": _vm.data.program
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: '20%',
    show: true
  }, false))], 1)])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/lives/index.vue?vue&type=template&id=30b38460

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/lives/index.vue?vue&type=script&lang=js


/* harmony default export */ var livesvue_type_script_lang_js = ({
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return context.app.$axios.get('/lives');
          case 1:
            res = _context.sent;
            return _context.abrupt("return", {
              data: res.data.data
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
      data: {},
      id: ""
    };
  },
  head: function head() {
    return {
      title: this.$t('new.lives')
    };
  }
});
// CONCATENATED MODULE: ./pages/lives/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_livesvue_type_script_lang_js = (livesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/lives/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_livesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lives = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);