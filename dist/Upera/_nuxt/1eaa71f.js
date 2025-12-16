(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[135],{

/***/ 1075:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/settings.vue?vue&type=template&id=459a98b0&scoped=true
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
  }, [_c('div', {
    staticClass: "app_container_pricing mt-4 p-2 mt-md-4 mb-5"
  }, [_c('header', {
    staticClass: "headline py-md-5"
  }, [_c('h5', {
    staticClass: "title font-weight-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('new.quickSetting')) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c('div', {
    staticClass: "setting_lable"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('new.nightMode')) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "custom-control custom-switch"
  }, [_c('input', {
    staticClass: "custom-control-input",
    attrs: {
      "id": "nightMode",
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.$colorMode.value === 'dark'
    },
    on: {
      "change": function change($event) {
        return _vm.nightmode($event.target.checked);
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "nightMode"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c('div', {
    staticClass: "setting_lable"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('new.persianLang')) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "custom-control custom-switch"
  }, [_c('input', {
    staticClass: "custom-control-input",
    attrs: {
      "id": "language",
      "disabled": "",
      "type": "checkbox"
    },
    domProps: {
      "checked": _vm.$i18n.locale === 'fa'
    },
    on: {
      "change": function change($event) {
        return _vm.changelang();
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "language"
    }
  })])]), _vm._v(" "), _vm.$config.envname == 'upera' ? _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3"
  }, [_c('div', {
    staticClass: "setting_lable"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('new.socialMedia')) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex socials setting_lable_socials"
  }, [_c('a', {
    attrs: {
      "href": "https://t.me/shop_upera"
    }
  }, [_c('i', {
    staticClass: "fab fa-2x fa-telegram-plane",
    class: {
      'mr-2 mr-md-4': _vm.$i18n.locale != 'fa'
    }
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "setting_lable"
  }, [_vm._v("فیلترگذاری ثابت بر روی کل محتوا")]), _vm._v(" "), _c('FilterContents', {
    attrs: {
      "show": true,
      "savedata": true,
      "setting": true,
      "no-top": false
    },
    on: {
      "execute_content_filtering": _vm.execute_content_filtering
    }
  }), _vm._v(" "), _c('header', {
    staticClass: "headline py-4"
  }, [_c('h5', {
    staticClass: "title font-weight-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.$t('new.more')) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3 setting_lable"
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/profile/faq"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('new.FAQ')) + "\n        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3 setting_lable"
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/profile/about-contact"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('footer.aboutus')) + "\n        ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3 setting_lable"
  }, [_c('nuxt-link', {
    attrs: {
      "to": "/profile/terms"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$t('new.term')) + "\n        ")])], 1), _vm._v(" "), _vm.$auth.loggedIn ? _c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-3 setting_lable"
  }, [_c('b-link', {
    staticClass: "text-danger",
    on: {
      "click": _vm.showLogoutConfirmation
    }
  }, [_vm._v("\n          خروج از حساب کاربری\n        ")])], 1) : _vm._e()], 1)]), _vm._v(" "), _c('b-modal', {
    ref: "logoutConfirmationModal",
    attrs: {
      "id": "logoutConfirmationModal",
      "centered": "",
      "hide-footer": "",
      "hide-header": "",
      "modal-class": "logout-confirmation-modal",
      "no-enforce-focus": ""
    }
  }, [_c('div', {
    staticClass: "logout-modal-container"
  }, [_c('div', {
    staticClass: "logout-modal-content"
  }, [_c('div', {
    staticClass: "logout-message"
  }, [_c('p', {
    staticClass: "logout-text"
  }, [_vm._v("\n            آیا از خروج از حساب کاربری خود اطمینان دارید؟\n          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "logout-modal-footer"
  }, [_c('b-button', {
    staticClass: "logout-btn-confirm",
    attrs: {
      "variant": "danger"
    },
    on: {
      "click": _vm.confirmLogout
    }
  }, [_vm._v("\n          بله\n        ")]), _vm._v(" "), _c('b-button', {
    staticClass: "logout-btn-cancel",
    attrs: {
      "variant": "secondary"
    },
    on: {
      "click": _vm.hideLogoutModal
    }
  }, [_vm._v("\n          خیر\n        ")])], 1)])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    staticClass: "mr-2 mr-md-4",
    attrs: {
      "href": "https://instagram.com/uperatv"
    }
  }, [_c('i', {
    staticClass: "fab fa-2x fa-instagram"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "fab fa-2x fa-twitter"
  })]);
}];

// CONCATENATED MODULE: ./pages/profile/settings.vue?vue&type=template&id=459a98b0&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/settings.vue?vue&type=script&lang=js


/* harmony default export */ var settingsvue_type_script_lang_js = ({
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return context.app.$axios.get('get/app/socials');
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
      data: {}
    };
  },
  head: function head() {
    return {
      title: this.$t('new.quickSetting')
    };
  },
  methods: {
    nightmode: function nightmode(e) {
      if (e == true) this.$colorMode.preference = 'dark';else this.$colorMode.preference = 'light';
    },
    logout: function logout() {
      var _this = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Clear cart from localStorage
              if (true) {
                try {
                  // Clear cart data
                  localStorage.removeItem('_cart');

                  // Clear user-specific preferences
                  localStorage.removeItem('selected_avatar');
                  localStorage.removeItem('seasonEpisodesSortOrder');
                  localStorage.removeItem('basketActive');
                  localStorage.removeItem('_download_skip_main_item');

                  // Emit cart update event to notify components
                  _this.$root.$emit('cart-updated');
                } catch (error) {
                  console.error('Error clearing localStorage on logout:', error);
                }
              }

              // Reset theme to system default
              _this.$colorMode.preference = 'system';

              // Reset basket active state in store
              _this.$store.dispatch('SET_BASKET_ACTIVE', true);

              // Clear avatars from store
              if (_this.$store.dispatch) {
                try {
                  _this.$store.dispatch('CLEAR_AVATARS');
                } catch (e) {
                  // Store action may not exist, ignore
                }
              }

              // Perform logout
              _context2.next = 1;
              return _this.$auth.logout();
            case 1:
              // Refresh the page
              _this.$router.go();
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    execute_content_filtering: function execute_content_filtering() {
      return this.data;
    },
    changelang: function changelang() {
      if (this.$i18n.locale === 'en') {
        this.$i18n.setLocale('fa');
      } else {
        this.$i18n.setLocale('en');
      }
    },
    // Logout modal methods
    showLogoutConfirmation: function showLogoutConfirmation() {
      this.$root.$emit('bv::hide::popover'); // Close the profile dropdown
      this.$refs.logoutConfirmationModal.show();
    },
    hideLogoutModal: function hideLogoutModal() {
      this.$refs.logoutConfirmationModal.hide();
    },
    confirmLogout: function confirmLogout() {
      this.hideLogoutModal();
      this.logout();
    }
  }
});
// CONCATENATED MODULE: ./pages/profile/settings.vue?vue&type=script&lang=js
 /* harmony default export */ var profile_settingsvue_type_script_lang_js = (settingsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/profile/settings.vue?vue&type=style&index=0&id=459a98b0&prod&scoped=true&lang=css
var settingsvue_type_style_index_0_id_459a98b0_prod_scoped_true_lang_css = __webpack_require__(956);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/profile/settings.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_settingsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "459a98b0",
  null
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(124).default,FilterContents: __webpack_require__(253).default})


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_settings_vue_vue_type_style_index_0_id_459a98b0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(868);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_settings_vue_vue_type_style_index_0_id_459a98b0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_settings_vue_vue_type_style_index_0_id_459a98b0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);