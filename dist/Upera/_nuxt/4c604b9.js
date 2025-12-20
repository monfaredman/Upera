(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[109],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_172bbf2c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(883);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_172bbf2c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_id_vue_vue_type_style_index_0_id_172bbf2c_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1087:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/ekran/_id.vue?vue&type=template&id=172bbf2c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid",
    attrs: {
      "id": "checkcontainer"
    }
  }, [_c('section', {
    staticClass: "mt-5 pt-lg-5 pt-md-5",
    attrs: {
      "id": "banner"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', [_c('b-modal', {
    ref: "callbackModal",
    attrs: {
      "id": "callbackModal",
      "centered": false,
      "hide-footer": "",
      "hide-header": "",
      "size": "lg",
      "no-close-on-backdrop": "",
      "hide-backdrop": "",
      "no-close-on-esc": "",
      "modal-class": "modal-download-link",
      "static": "",
      "no-enforce-focus": ""
    }
  }, [_c('div', {
    staticClass: "download-links"
  }, [!_vm.loading && _vm.error ? _c('header', {
    staticClass: "modal-header"
  }, [_c('h5', {
    staticClass: "modal-title"
  }, [_vm._v("\n                جهت نمایش فیلم به موارد زیر توجه کنید\n              ")])]) : _vm._e(), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "download-links-body download-links-body-header",
    class: {
      'download-links-2': _vm.backtoapp
    }
  }, [_c('div', {
    staticClass: "download-links-items"
  }, [_c('client-only', [_vm.presale ? _c('countdown', {
    attrs: {
      "left-time": _vm.presale * 1000
    },
    scopedSlots: _vm._u([{
      key: "process",
      fn: function fn(_ref) {
        var timeObj = _ref.timeObj;
        return _c('div', {
          staticClass: "d-flex align-items-center justify-content-center count-down-wrapper"
        }, [_c('div', {
          staticClass: "count-down count-down-invert text-center"
        }, [_c('div', {
          staticClass: "count-down-num"
        }, [_vm._v("\n                            " + _vm._s(timeObj.s) + "\n                          ")]), _vm._v(" "), _c('div', {
          staticClass: "count-down-caption"
        }, [_vm._v("\n                            ثانیه\n                          ")])]), _vm._v(" "), _c('div', {
          staticClass: "count-down count-down-invert text-center"
        }, [_c('div', {
          staticClass: "count-down-num"
        }, [_vm._v("\n                            " + _vm._s(timeObj.m) + "\n                          ")]), _vm._v(" "), _c('div', {
          staticClass: "count-down-caption"
        }, [_vm._v("\n                            دقیقه\n                          ")])]), _vm._v(" "), _c('div', {
          staticClass: "count-down count-down-invert text-center"
        }, [_c('div', {
          staticClass: "count-down-num"
        }, [_vm._v("\n                            " + _vm._s(timeObj.h) + "\n                          ")]), _vm._v(" "), _c('div', {
          staticClass: "count-down-caption"
        }, [_vm._v("\n                            ساعت\n                          ")])]), _vm._v(" "), timeObj.d ? _c('div', {
          staticClass: "count-down count-down-invert text-center"
        }, [_c('div', {
          staticClass: "count-down-num"
        }, [_vm._v("\n                            " + _vm._s(timeObj.d) + "\n                          ")]), _vm._v(" "), _c('div', {
          staticClass: "count-down-caption"
        }, [_vm._v("\n                            روز\n                          ")])]) : _vm._e()]);
      }
    }], null, false, 942859182)
  }) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_vm.loading ? _c('svg', {
    staticClass: "svg-loader",
    attrs: {
      "id": "L9",
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "viewBox": "0 0 100 100",
      "enable-background": "new 0 0 0 0",
      "xml:space": "preserve"
    }
  }, [_c('path', {
    attrs: {
      "data-v-28f0b4cb": "",
      "fill": "#373737",
      "d": "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50",
      "transform": "rotate(109.69 50 50)"
    }
  }, [_c('animateTransform', {
    attrs: {
      "data-v-28f0b4cb": "",
      "attributeName": "transform",
      "attributeType": "XML",
      "type": "rotate",
      "dur": "1s",
      "from": "0 50 50",
      "to": "360 50 50",
      "repeatCount": "indefinite"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.error && !_vm.loading ? _c('span', {
    staticClass: "text-danger h6 text-justify"
  }, [_vm._v(_vm._s(_vm.message)), _c('br'), _c('br')]) : !_vm.loading ? _c('span', {
    staticClass: "h6 text-justify"
  }, [_vm._v("مدت زمان سانس :" + _vm._s(_vm.screening.ekran_hour) + " ساعت | زمان باقیمانده تا پایان سانس شما : " + _vm._s(_vm.screening.owned_period_end)), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.presale && !_vm.loading,
      expression: "presale && !loading"
    }],
    staticClass: "text-danger h6"
  }, [_vm._v("شما بلیط اکران را پیش خرید کرده اید، این به این معناست که شما برای مشاهده فیلم از طریق لینک پیامک شده که پس از خرید به شما ارسال شده است، از " + _vm._s(_vm.presale_date) + " می توانید فیلم را مشاهده کنید و در این روز از ساعتی که شروع به دیدن فیلم می کنید به مدت " + _vm._s(_vm.screening.ekran_hour) + " ساعت، وقت دارید تا فیلم را مشاهده نمایید.ما نیز از طریق پیامک در این روز شما را مطلع خواهیم کرد."), _c('br'), _c('br')]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.presale && !_vm.loading,
      expression: "presale && !loading"
    }],
    staticClass: "text-danger h6"
  }, [_vm._v("آخرین روز اکران: " + _vm._s(_vm.screening.ekran_period_end)), _c('br'), _c('br')]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.presale && !_vm.loading,
      expression: "presale && !loading"
    }],
    staticClass: "text-danger h6 text-justify"
  }, [_vm._v("برای تماشا از خانه، سانس سینمای آنلاین " + _vm._s(_vm.screening.ekran_hour) + " ساعته است، طوری تنظیم کنید که تماشای کامل فیلم را در سانس خود از دست ندهید."), _c('br'), _c('br')])]), _vm._v(" "), !_vm.loading && _vm.error ? _c('div', [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.get_verification,
      expression: "get_verification"
    }],
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-12 col-sm-12"
  }, [_c('label', {
    attrs: {
      "for": "verification"
    }
  }, [_vm._v("کد تاییدیه")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.verification,
      expression: "verification"
    }],
    staticClass: "form-control",
    attrs: {
      "name": "verification",
      "type": "text",
      "placeholder": "کد تاییدیه"
    },
    domProps: {
      "value": _vm.verification
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.verification = $event.target.value;
      }
    }
  })])])]) : _vm._e(), _vm._v(" "), !_vm.loading ? _c('div', {
    staticClass: "col-12 p-4 text-right"
  }, [_c('br'), _c('a', {
    attrs: {
      "href": "tel:02191690309"
    }
  }, [_vm._v("تلفن پشتیبانی در ساعات اداری:‌ "), _c('br'), _vm._v("02191690309")]), _c('br'), _c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "href": "tel:09022018555"
    }
  }, [_vm._v("تلفن پشتیبانی در ساعات غیر اداری:‌ "), _c('br'), _vm._v("09022018555")]), _c('br'), _c('br'), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://telegram.me/srmweb",
      "target": "_blank"
    }
  }, [_vm._v("تلگرام پشتیبانی")])]) : _vm._e()], 1)]), _vm._v(" "), !_vm.loading ? _c('div', {
    staticClass: "download-links-footer",
    class: {
      'footer-1': !_vm.backtoapp
    }
  }, [_vm.error ? _c('div', {
    staticClass: "download-links-item"
  }, [_vm.get_verification ? _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.SEND_VERIFICATION(_vm.verification, 0);
      }
    }
  }, [_vm._v("\n                        ارسال و نمایش فیلم\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-6"
  }, [_c('a', {
    staticClass: "btn btn-light btn-copy btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.SEND_VERIFICATION(_vm.verification, 1);
      }
    }
  }, [_vm._v("\n                        دریافت مجدد کد تاییدیه\n                      ")])])]) : _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('nuxt-link', {
    staticClass: "btn btn-danger btn-block",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n                        بازگشت به صفحه اصلی\n                        "), _c('i', {
    staticClass: "fa fa-back pr-2"
  })])], 1)])]) : _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.player();
      }
    }
  }, [_vm._v("\n                        تماشای فیلم\n                        "), _c('i', {
    staticClass: "icon-play"
  })])])])]), _vm._v(" "), _vm.backtoapp ? _c('div', {
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": "uperaapp://upera?type=download&success=false"
    }
  }, [_vm._v("\n                      نمایش فیلم\n                      "), _c('i', {
    staticClass: "fa fa-back pr-2"
  })])])]) : _vm._e()]) : _vm._e()])])])], 1)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ekran/_id.vue?vue&type=template&id=172bbf2c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/ekran/_id.vue?vue&type=script&lang=js
/* harmony default export */ var _idvue_type_script_lang_js = ({
  layout: "nofooter",
  data: function data() {
    return {
      verification: '',
      id: null,
      get_verification: 0,
      send_unique_id: 0,
      screening: {
        ekran: 0,
        ekran_period_end: null,
        ekran_hour: 0,
        ekran_owned: null,
        owned_period_end: null,
        ekran_id: null
      },
      presale: null,
      presale_date: null,
      loading: true,
      error: 0,
      message: '',
      error_code: 0,
      backtoapp: false
    };
  },
  head: function head() {
    return {
      bodyAttrs: {
        class: 'callback'
      },
      title: 'بلیط اکران'
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (window.location.host == 'app.upera.tv' || window.location.host == 'app.pofefilm.tv') this.backtoapp = true;
    this.showModal();
    document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex');
    this.$refs['callbackModal'].$on('hide', function () {
      window.removeEventListener('resize', _this.Resize);
      document.getElementsByClassName('default')[0].classList.remove('blure');
      _this.$emit("hide-modal", null);
    });
    document.body.classList.add('loaded');
  },
  methods: {
    login: function login() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: 'ekran/' + this.$route.params.id,
        prerefresh: false
      });
    },
    Push2: function Push2(id, type) {
      this.hideModal();
      this.$router.push({
        name: type + "-show-id",
        params: {
          id: id
        }
      });
    },
    player: function player() {
      this.$router.push({
        name: "movie-show-id",
        params: {
          id: this.id
        },
        query: {
          ekran_unique_id: this.screening.unique_id
        }
      });
    },
    showModal: function showModal() {
      var _this2 = this;
      this.$refs['callbackModal'].show();
      this.$refs['callbackModal'].$on('shown', function () {
        window.addEventListener("resize", _this2.Resize);
        _this2.Resize('e');
      });
      var api_url;
      if (this.$auth.loggedIn) {
        api_url = '/get/ekran/' + this.$route.params.id;
      } else {
        api_url = '/ghost/get/ekran/' + this.$route.params.id;
      }
      this.loading = true;
      this.$axios.get(api_url).then(function (res) {
        _this2.loading = false;
        if (res.status === 200) {
          _this2.id = res.data.data.id;
          _this2.get_verification = res.data.data.get_verification;
          _this2.send_unique_id = res.data.data.send_unique_id;
          _this2.screening = res.data.data.screening;
          _this2.presale = res.data.data.presale;
          _this2.presale_date = res.data.data.presale_date;
          _this2.error = 0;
        } else {
          _this2.message = res.data.message;
          _this2.error_code = res.data.error_code;
          _this2.presale = res.data.presale;
          _this2.presale_date = res.data.presale_date;
          _this2.id = res.data.id;
          _this2.screening = res.data.screening;
          _this2.get_verification = res.data.get_verification;
          _this2.error = 1;
        }
      }, function (error) {
        _this2.loading = false;
        _this2.message = error.response.data.message;
        _this2.error_code = error.response.data.error_code;
        _this2.presale = error.response.data.presale;
        _this2.presale_date = error.response.data.presale_date;
        _this2.id = error.response.data.id;
        _this2.screening = error.response.data.screening;
        _this2.get_verification = error.response.data.get_verification;
        _this2.error = 1;
      });
    },
    hideModal: function hideModal() {
      this.$refs['callbackModal'].hide();
      this.$emit("hide-modal", null);
      document.getElementsByClassName('default')[0].classList.remove('blure');
    },
    SEND_VERIFICATION: function SEND_VERIFICATION(verification, send_code) {
      var _this3 = this;
      var api_url;
      if (this.$auth.loggedIn) {
        api_url = '/get/ekran/' + this.$route.params.id;
      } else {
        api_url = '/ghost/get/ekran/' + this.$route.params.id;
      }
      this.loading = true;
      this.$axios.get(api_url + '?verification=' + verification + '&send_code=' + send_code).then(function (res) {
        _this3.loading = false;
        if (res.status === 200) {
          _this3.id = res.data.data.id;
          _this3.get_verification = res.data.data.get_verification;
          _this3.send_unique_id = res.data.data.send_unique_id;
          _this3.screening = res.data.data.screening;
          _this3.presale = res.data.data.presale;
          _this3.presale_date = res.data.data.presale_date;
          _this3.error = 0;
        } else {
          _this3.message = res.data.message;
          _this3.error_code = res.data.error_code;
          _this3.presale = res.data.presale;
          _this3.presale_date = res.data.presale_date;
          _this3.id = res.data.id;
          _this3.screening = res.data.screening;
          _this3.get_verification = res.data.get_verification;
          _this3.error = 1;
        }
      }, function (error) {
        _this3.loading = false;
        _this3.message = error.response.data.message;
        _this3.error_code = error.response.data.error_code;
        _this3.presale = error.response.data.presale;
        _this3.presale_date = error.response.data.presale_date;
        _this3.id = error.response.data.id;
        _this3.screening = error.response.data.screening;
        _this3.get_verification = error.response.data.get_verification;
        _this3.error = 1;
      });
    },
    Resize: function Resize(e) {
      var vh = window.innerHeight * 0.01;
      var element = document.getElementsByClassName('download-links');
      if (element.length) element[0].style.setProperty('--vh', "".concat(vh, "px"));
      return e;
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == "fa") return fa;else return en;
    }
  }
});
// CONCATENATED MODULE: ./pages/ekran/_id.vue?vue&type=script&lang=js
 /* harmony default export */ var ekran_idvue_type_script_lang_js = (_idvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/ekran/_id.vue?vue&type=style&index=0&id=172bbf2c&prod&lang=css
var _idvue_type_style_index_0_id_172bbf2c_prod_lang_css = __webpack_require__(1020);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/ekran/_id.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ekran_idvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(124).default})


/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);