(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[129],{

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/about-contact.vue?vue&type=template&id=0a821b4d
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
  }, [_vm._v("\n            " + _vm._s(_vm.$t('footer.aboutus')) + "\n          ")])])])]), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _vm.checkuser.about && _vm.checkuser.about.length > 5 ? _c('div', [_c('div', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: _vm.checkuser.about,
      expression: "checkuser.about"
    }],
    staticClass: "body text-justify"
  })]) : _c('div', [_c('div', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load",
      value: _vm.data,
      expression: "data"
    }],
    staticClass: "body text-justify"
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('br'), _c('br'), _vm._v(" "), _c('div', [_c('b-table', {
    attrs: {
      "dark": "",
      "items": _vm.items
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    attrs: {
      "id": "banner"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('header', {
    staticClass: "headline mt-5"
  }, [_c('h5', {
    staticClass: "title font-weight-bold"
  }, [_vm._v("سیستم درجه‌بندی سنی")])])])]);
}];

// CONCATENATED MODULE: ./pages/profile/about-contact.vue?vue&type=template&id=0a821b4d

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/about-contact.vue?vue&type=script&lang=js


/* harmony default export */ var about_contactvue_type_script_lang_js = ({
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
            if (!(context.app.i18n.locale == 'fa')) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", {
              data: res.data.data.about
            });
          case 2:
            return _context.abrupt("return", {
              data: res.data.data.about_en
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      data: '',
      items: [{
        'درجه‌بندی/نشان': 'G',
        معنی: 'جی – تماشاگران عمومی',
        توضیحات: 'مناسب تمامی سنین. هیچ چیزی باعث آزار والدین برای تماشای کودکان نمی‌شود.'
      }, {
        'درجه‌بندی/نشان': 'PG',
        معنی: 'پی‌جی – سرپرستی والدین پیشنهاد می‌شود',
        توضیحات: 'برخی از مواد ممکن است برای کودکان مناسب نباشد. راهنمایی و سرپرستی از سوی والدین تقاضا می‌شود. ممکن است حاوی مطالبی باشد که والدین برای فرزندان خردسال خود مناسب ندانند.'
      }, {
        'درجه‌بندی/نشان': 'PG-13',
        معنی: 'پی‌جی-۱۳ – تذکر قاطع به والدین',
        توضیحات: 'برخی از صحنه ها برای افراد زیر ۱۳ سال نامناسب است. از والدین درخواست می‌شود احتیاط کنند.'
      }, {
        'درجه‌بندی/نشان': 'R',
        معنی: 'آر – محدود',
        توضیحات: 'زیر ۱۸ سال به همراهی والدین یا سرپرست نیاز دارد. حاوی تعدادی محتوای بزرگسالانه است.'
      }, {
        'درجه‌بندی/نشان': 'X',
        معنی: 'فقط بزرگسالان',
        توضیحات: 'هیچ فرد کمتر از ۱۸ سال نباید این فیلم ها را ببینند. فقط بزرگسالان. کودکان اجازهٔ ورود ندارند.'
      }]
    };
  },
  head: function head() {
    return {
      title: this.$t('footer.aboutus')
    };
  }
});
// CONCATENATED MODULE: ./pages/profile/about-contact.vue?vue&type=script&lang=js
 /* harmony default export */ var profile_about_contactvue_type_script_lang_js = (about_contactvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/profile/about-contact.vue?vue&type=style&index=0&id=0a821b4d&prod&lang=css
var about_contactvue_type_style_index_0_id_0a821b4d_prod_lang_css = __webpack_require__(954);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/profile/about-contact.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_about_contactvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var about_contact = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(124).default})


/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_about_contact_vue_vue_type_style_index_0_id_0a821b4d_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(866);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_about_contact_vue_vue_type_style_index_0_id_0a821b4d_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_about_contact_vue_vue_type_style_index_0_id_0a821b4d_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);