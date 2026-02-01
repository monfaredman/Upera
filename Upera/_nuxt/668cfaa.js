(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 1044:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./adsl.png": 631,
	"./hamrah.png": 632,
	"./irancell.png": 633,
	"./mobin.png": 634,
	"./rightel.png": 635
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1044;

/***/ }),

/***/ 1045:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IspCheckModal_vue_vue_type_style_index_0_id_0cf7a21c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(907);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IspCheckModal_vue_vue_type_style_index_0_id_0cf7a21c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_IspCheckModal_vue_vue_type_style_index_0_id_0cf7a21c_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/IspCheckModal.vue?vue&type=template&id=0cf7a21c&scoped=true



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('b-modal', {
    ref: "ispCheckModal",
    attrs: {
      "id": "ispCheckModal",
      "centered": "",
      "hide-footer": "",
      "size": _vm.provider === 'upera' ? 'lg' : 'md',
      "modal-class": "isp-check-modal"
    },
    on: {
      "hidden": _vm.onHidden,
      "shown": _vm.onShown
    },
    scopedSlots: _vm._u([{
      key: "modal-header",
      fn: function fn(_ref) {
        var close = _ref.close;
        return [_c('div', {
          staticClass: "isp-modal-header"
        }, [_c('h5', {
          staticClass: "modal-title"
        }, [_vm._v("روش تماشا")]), _vm._v(" "), _c('button', {
          staticClass: "close-btn",
          attrs: {
            "type": "button"
          },
          on: {
            "click": close
          }
        }, [_c('i', {
          staticClass: "fa fa-times"
        })])])];
      }
    }])
  }, [_vm._v(" "), _c('div', {
    staticClass: "isp-modal-body"
  }, [_c('div', {
    staticClass: "isp-divider"
  }), _vm._v(" "), _c('h6', {
    staticClass: "isp-title"
  }, [_vm._v("رایگان با اپراتور")]), _vm._v(" "), _c('p', {
    staticClass: "isp-description"
  }, [_vm._v("\n      با تغییر اینترنت به یکی از اپراتور های زیر، بدون پرداخت فیلم را رایگان\n      مشاهده کنید.\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "isp-providers"
  }, _vm._l(_vm.availableIsps, function (isp) {
    return _c('div', {
      key: isp.key,
      class: ['isp-box', {
        active: _vm.canWatch
      }]
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "isp-image",
      attrs: {
        "data-src": __webpack_require__(1044)("./".concat(isp.image, ".png")),
        "alt": isp.name
      }
    })]);
  }), 0), _vm._v(" "), _c('div', {
    staticClass: "connection-check-row"
  }, [_c('label', {
    staticClass: "check-label",
    on: {
      "click": _vm.checkConnection
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.isConnectionChecked,
      expression: "isConnectionChecked"
    }],
    staticClass: "check-input",
    attrs: {
      "type": "checkbox",
      "disabled": _vm.isChecking
    },
    domProps: {
      "checked": Array.isArray(_vm.isConnectionChecked) ? _vm._i(_vm.isConnectionChecked, null) > -1 : _vm.isConnectionChecked
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.isConnectionChecked,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.isConnectionChecked = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.isConnectionChecked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.isConnectionChecked = $$c;
        }
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "checkmark"
  }), _vm._v(" "), _c('span', {
    staticClass: "check-text"
  }, [_vm._v("بررسی ارتباط اینترنت")])]), _vm._v(" "), _vm.isChecking ? _c('b-spinner', {
    staticClass: "isp-spinner",
    attrs: {
      "small": "",
      "variant": "light"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('button', {
    staticClass: "btn btn-watch",
    attrs: {
      "disabled": !_vm.canWatch
    },
    on: {
      "click": _vm.handleWatch
    }
  }, [_c('i', {
    staticClass: "fa fa-play mr-2"
  }), _vm._v("\n      تماشا\n    ")]), _vm._v(" "), _vm.provider === 'upera' ? [_c('div', {
    staticClass: "subscription-divider"
  }, [_c('span', {
    staticClass: "divider-text"
  }, [_vm._v("یا")])]), _vm._v(" "), _c('h6', {
    staticClass: "isp-title"
  }, [_vm._v("خرید اشتراک")]), _vm._v(" "), _c('p', {
    staticClass: "isp-description"
  }, [_vm._v("\n        اگر به اپراتور های بالا دسترسی ندارید، میتوانید با خرید اشتراک، به\n        تمام محتواها بدون محدودیت دسترسی پیدا کنید.\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "subscription-select-text"
  }, [_vm._v("اشتراک خود را انتخاب کنید")]), _vm._v(" "), _vm.planLoading ? _c('div', {
    staticClass: "text-center py-3"
  }, [_c('b-spinner', {
    attrs: {
      "variant": "light",
      "small": ""
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "text-light mr-2"
  }, [_vm._v("در حال بارگذاری...")])], 1) : _vm.plansArray.length > 0 ? _c('div', {
    staticClass: "subscription-plans"
  }, _vm._l(_vm.plansArray, function (plan) {
    return _c('div', {
      key: plan.id,
      class: ['plan-box', {
        selected: _vm.selectedPlanId === plan.id
      }],
      on: {
        "click": function click($event) {
          _vm.selectedPlanId = plan.id;
        }
      }
    }, [_c('span', {
      staticClass: "plan-duration"
    }, [_vm._v(_vm._s(plan.name_fa) + "ه")]), _vm._v(" "), _c('span', {
      staticClass: "plan-price"
    }, [plan.discount ? [_vm._v("\n              " + _vm._s((plan.toman - plan.discount.discount_price).toLocaleString()) + "\n            ")] : [_vm._v("\n              " + _vm._s(plan.toman.toLocaleString()) + "\n            ")], _vm._v("\n            تومان\n          ")], 2), _vm._v(" "), plan.discount ? _c('span', {
      staticClass: "plan-badge"
    }, [_vm._v("\n            " + _vm._s(plan.discount.discount_percent) + "% تخفیف\n          ")]) : _vm._e()]);
  }), 0) : _vm._e(), _vm._v(" "), _c('button', {
    staticClass: "btn btn-buy-subscription",
    attrs: {
      "disabled": !_vm.selectedPlanId
    },
    on: {
      "click": _vm.buySelectedPlan
    }
  }, [_c('i', {
    staticClass: "fa fa-shopping-cart mr-2"
  }), _vm._v("\n        خرید اشتراک\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "tax-notice"
  }, [_vm._v("\n        به اعداد بالا ۱۰ درصد مالیات بر ارزش افزوده اضافه می‌شود\n      ")])] : _vm._e()], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/IspCheckModal.vue?vue&type=template&id=0cf7a21c&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.entries.js
var es_object_entries = __webpack_require__(174);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/IspCheckModal.vue?vue&type=script&lang=js





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }











/* harmony default export */ var IspCheckModalvue_type_script_lang_js = ({
  name: 'IspCheckModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    provider: {
      type: String,
      default: 'filimo' // 'filimo' or 'upera'
    },
    contentType: {
      type: String,
      default: ''
    },
    contentId: {
      type: [String, Number],
      default: ''
    }
  },
  data: function data() {
    return {
      isChecking: false,
      isConnectionChecked: false,
      canWatch: false,
      playLink: null,
      planLoading: false,
      plans: {},
      selectedPlanId: null
    };
  },
  computed: {
    // ISP providers based on the provider prop
    availableIsps: function availableIsps() {
      var baseIsps = [{
        key: 'irancell',
        name: 'ایرانسل',
        image: 'irancell'
      }, {
        key: 'adsl',
        name: 'مخابرات',
        image: 'adsl'
      }, {
        key: 'rightel',
        name: 'رایتل',
        image: 'rightel'
      }, {
        key: 'mobin',
        name: 'مبین نت',
        image: 'mobin'
      }];

      // For upera provider, add Hamrah Aval
      if (this.provider === 'upera') {
        baseIsps.push({
          key: 'hamrah',
          name: 'همراه اول',
          image: 'hamrah'
        });
      }
      return baseIsps;
    },
    // Convert plans object to array with id
    plansArray: function plansArray() {
      if (!this.plans || Object(esm_typeof["a" /* default */])(this.plans) !== 'object') return [];
      return Object.entries(this.plans).map(function (_ref) {
        var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
          id = _ref2[0],
          plan = _ref2[1];
        return _objectSpread({
          id: id
        }, plan);
      });
    }
  },
  watch: {
    show: function show(val) {
      if (val) {
        this.showModal();
      } else {
        this.hideModal();
      }
    }
  },
  methods: {
    showModal: function showModal() {
      var _this$$refs$ispCheckM;
      (_this$$refs$ispCheckM = this.$refs.ispCheckModal) === null || _this$$refs$ispCheckM === void 0 || _this$$refs$ispCheckM.show();
    },
    hideModal: function hideModal() {
      var _this$$refs$ispCheckM2;
      (_this$$refs$ispCheckM2 = this.$refs.ispCheckModal) === null || _this$$refs$ispCheckM2 === void 0 || _this$$refs$ispCheckM2.hide();
    },
    onShown: function onShown() {
      // Load subscription plans when modal opens (only for upera provider)
      if (this.provider === 'upera') {
        this.loadPlans();
      }
    },
    onHidden: function onHidden() {
      // Reset state when modal is hidden
      this.isChecking = false;
      this.isConnectionChecked = false;
      this.canWatch = false;
      this.playLink = null;
      this.plans = {};
      this.$emit('hide-modal');
    },
    loadPlans: function loadPlans() {
      var _this = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this.planLoading = true;
              _context.prev = 1;
              _context.next = 2;
              return _this.$axios.get('/get/app/plans');
            case 2:
              res = _context.sent;
              if (res.status === 200 && res.data.data) {
                _this.plans = res.data.data;
              }
              _context.next = 4;
              break;
            case 3:
              _context.prev = 3;
              _t = _context["catch"](1);
              console.error('Error loading plans:', _t);
            case 4:
              _context.prev = 4;
              _this.planLoading = false;
              return _context.finish(4);
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 3, 4, 5]]);
      }))();
    },
    checkConnection: function checkConnection() {
      var _this2 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _actions, actions, endpoint, response, _response$data, _response$data2, _endpoint, _response, contentData, _t2;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this2.isChecking) {
                _context2.next = 1;
                break;
              }
              return _context2.abrupt("return");
            case 1:
              _this2.isChecking = true;
              _this2.canWatch = false;
              _this2.playLink = null;
              _context2.prev = 2;
              actions = null;
              if (!_this2.$auth.loggedIn) {
                _context2.next = 4;
                break;
              }
              // Logged in user: use accessibility API
              endpoint = "/get/accessibility/".concat(_this2.contentType, "/").concat(_this2.contentId);
              _context2.next = 3;
              return _this2.$axios.get(endpoint);
            case 3:
              response = _context2.sent;
              if (response.data && response.data.data) {
                actions = response.data.data.actions;
              }
              _context2.next = 6;
              break;
            case 4:
              // Ghost mode (not logged in): use getV2 endpoint (no ghost prefix needed)
              _endpoint = "/getV2/".concat(_this2.contentType, "/").concat(_this2.contentId);
              _context2.next = 5;
              return _this2.$axios.get(_endpoint);
            case 5:
              _response = _context2.sent;
              // getV2 response structure: response.data.data.{contentType}.actions
              // e.g., response.data.data.movie.actions or response.data.data.episode.actions
              if ((_response$data = _response.data) !== null && _response$data !== void 0 && _response$data.data) {
                contentData = _response.data.data[_this2.contentType];
                if (contentData) {
                  actions = contentData.actions;
                }
              } else if ((_response$data2 = _response.data) !== null && _response$data2 !== void 0 && _response$data2[_this2.contentType]) {
                // Fallback: sometimes response doesn't have nested data
                actions = _response.data[_this2.contentType].actions;
              }
            case 6:
              // Check if action is now 'play' (user can watch)
              if (((_actions = actions) === null || _actions === void 0 || (_actions = _actions.mainButton) === null || _actions === void 0 ? void 0 : _actions.action) === 'play') {
                _this2.canWatch = true;
                _this2.isConnectionChecked = true;
                _this2.playLink = actions.mainButton.play_link || null;
              } else {
                // Still subscription action, user cannot watch yet
                _this2.canWatch = false;
                _this2.isConnectionChecked = false;
              }
              _context2.next = 8;
              break;
            case 7:
              _context2.prev = 7;
              _t2 = _context2["catch"](2);
              console.error('Error checking accessibility:', _t2);
              _this2.canWatch = false;
              _this2.isConnectionChecked = false;
            case 8:
              _context2.prev = 8;
              _this2.isChecking = false;
              return _context2.finish(8);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 7, 8, 9]]);
      }))();
    },
    buyPlan: function buyPlan(planId) {
      var _this3 = this;
      if (!this.$auth.loggedIn) {
        // Show login modal with redirect to plan page
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: "/plan/".concat(planId, "?content_id=").concat(this.contentId, "&content_type=").concat(this.contentType),
          prerefresh: false
        });
        this.hideModal();
      } else {
        // Navigate to plan page
        this.hideModal();
        this.$nextTick(function () {
          _this3.$router.push({
            name: 'plan-id',
            params: {
              id: planId
            },
            query: {
              content_id: _this3.contentId,
              content_type: _this3.contentType
            }
          });
        });
      }
    },
    buySelectedPlan: function buySelectedPlan() {
      if (!this.selectedPlanId) return;
      this.buyPlan(this.selectedPlanId);
    },
    handleWatch: function handleWatch() {
      if (!this.canWatch) return;

      // Emit event to play the content
      this.$emit('watch', {
        contentType: this.contentType,
        contentId: this.contentId,
        provider: this.provider,
        playLink: this.playLink
      });
      this.hideModal();
    }
  }
});
// CONCATENATED MODULE: ./components/item/IspCheckModal.vue?vue&type=script&lang=js
 /* harmony default export */ var item_IspCheckModalvue_type_script_lang_js = (IspCheckModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/IspCheckModal.vue?vue&type=style&index=0&id=0cf7a21c&prod&scoped=true&lang=css
var IspCheckModalvue_type_style_index_0_id_0cf7a21c_prod_scoped_true_lang_css = __webpack_require__(1045);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/IspCheckModal.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  item_IspCheckModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "0cf7a21c",
  null
  
)

/* harmony default export */ var IspCheckModal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);