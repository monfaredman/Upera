(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Download-New.vue?vue&type=template&id=6b3c81c1&scoped=true



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('client-only', [_vm.isMobile && !_vm.staticmodal ? _c('transition', {
    attrs: {
      "name": "download-drawer-slide"
    }
  }, [_vm.isDrawerVisible ? _c('div', {
    staticClass: "download-drawer-overlay",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.hideModal.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "download-drawer"
  }, [_c('div', {
    staticClass: "download-drawer-header"
  }, [_c('button', {
    staticClass: "close-button",
    on: {
      "click": _vm.hideModal
    }
  }, [_c('i', {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "download-drawer-content"
  }, [_vm._t("default")], 2)])]) : _vm._e()]) : _vm._e()], 1), _vm._v(" "), !_vm.isMobile || _vm.staticmodal ? _c('b-modal', {
    ref: "downloadLinks",
    attrs: {
      "id": "downloadLinks",
      "centered": !_vm.staticmodal,
      "hide-footer": "",
      "hide-header": "",
      "size": "lg",
      "no-close-on-backdrop": _vm.staticmodal,
      "hide-backdrop": _vm.staticmodal,
      "no-close-on-esc": _vm.staticmodal,
      "modal-class": "modal-download-link",
      "static": _vm.staticmodal,
      "no-enforce-focus": ""
    }
  }, [_c('div', {
    staticClass: "download-links"
  }, [_c('div', {
    staticClass: "top-section"
  }, [_c('div', {
    staticClass: "download-links-header-simple"
  }, [_c('div', {
    staticClass: "download-links-title-simple"
  }, [_vm._v("\n            " + _vm._s(_vm.getContentTitleHeader()) + "\n          ")]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.staticmodal,
      expression: "!staticmodal"
    }],
    staticClass: "close",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.hideModal
    }
  }, [_c('i', {
    staticClass: "fas fa-times",
    style: {
      color: _vm.$colorMode.value === 'dark' ? 'white' : 'black'
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "download-links-body-simple"
  }, [_vm.loading ? _c('div', {
    staticClass: "loading-state"
  }, [_c('div', {
    staticClass: "spinner-border",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]), _vm._v(" "), _c('p', [_vm._v("در حال بارگذاری...")])]) : _vm.error ? _c('div', {
    staticClass: "error-state"
  }, [_c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function click($event) {
        return _vm.loadContentData(_vm.type, _vm.id);
      }
    }
  }, [_vm._v("\n              تلاش مجدد\n            ")])]) : _c('div', {
    staticClass: "tvod-content"
  }, [_c('div', {
    staticClass: "content-card"
  }, [_vm.addedItems.length > 0 ? _c('div', {
    staticClass: "added-items-list"
  }, _vm._l(_vm.addedItems, function (item) {
    return _c('div', {
      key: item.id,
      staticClass: "added-item-card"
    }, [_c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      staticClass: "card-image"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": _vm.posterSrc(item.poster),
        "alt": "Poster"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "card-details"
    }, [_c('div', {
      staticClass: "content-name"
    }, [_vm._v("\n                        " + _vm._s(_vm.getContentTitle(item)) + "\n                      ")]), _vm._v(" "), _c('div', {
      staticClass: "content-info"
    }, [item.season_number && item.episode_number ? _c('span', [_vm._v("\n                          فصل " + _vm._s(item.season_number) + " - قسمت\n                          " + _vm._s(item.episode_number) + "\n                        ")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "content-price"
    }, [_vm._v("\n                        " + _vm._s(_vm.formatPrice(item.tvod_price)) + "\n                        "), _c('span', {
      staticClass: "toman-title"
    }, [_vm._v("تومان")])])]), _vm._v(" "), _c('div', {
      staticClass: "card-actions"
    }, [_c('button', {
      staticClass: "btn-delete",
      on: {
        "click": function click($event) {
          return _vm.removeAddedItem(item.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt",
      staticStyle: {
        "color": "#ff6633",
        "font-size": "1.5rem"
      }
    })])])])]);
  }), 0) : _vm._e()]), _vm._v(" "), _vm.showAddMoreButton ? _c('div', {
    staticClass: "add-more-section"
  }, [_c('button', {
    staticClass: "btn-add-more",
    on: {
      "click": function click($event) {
        return _vm.redirectToItem();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-plus"
  }), _vm._v("اضافه کردن قسمت های دیگر\n              ")])]) : _vm._e(), _vm._v(" "), _vm.showPaymentMethods ? _c('div', {
    staticClass: "payment-section"
  }, [_c('div', {
    staticClass: "section-title"
  }, [_vm._v("انتخاب روش پرداخت")]), _vm._v(" "), _c('div', {
    staticClass: "payment-options"
  }, _vm._l(_vm.paymentMethods, function (method) {
    return _c('div', {
      key: method.value,
      staticClass: "payment-option",
      class: {
        disabled: _vm.useWalletCredit
      }
    }, [_c('div', {
      staticClass: "payment-option-content"
    }, [_c('div', {
      staticClass: "payment-image"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": __webpack_require__(528)("./".concat(method.src))
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "payment-info"
    }, [_c('div', {
      staticClass: "payment-name"
    }, [_vm._v(_vm._s(method.name))])]), _vm._v(" "), _c('div', {
      staticClass: "payment-radio"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.paymentMethod,
        expression: "paymentMethod"
      }],
      attrs: {
        "id": "payment-".concat(method.value),
        "type": "radio",
        "name": "payment",
        "disabled": _vm.useWalletCredit
      },
      domProps: {
        "value": method.value,
        "checked": _vm._q(_vm.paymentMethod, method.value)
      },
      on: {
        "change": function change($event) {
          _vm.paymentMethod = method.value;
        }
      }
    })])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.showWalletSection ? _c('div', {
    staticClass: "wallet-section"
  }, [_c('div', {
    staticClass: "d-flex justify-content-start align-content-center"
  }, [_c('i', {
    staticClass: "fas fa-wallet fa-2x",
    staticStyle: {
      "color": "#525252",
      "padding": "1rem"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "wallet-option"
  }, [_c('label', {
    staticClass: "text-sm mb-0",
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      "for": "use-wallet"
    }
  }, [_vm._v("کیف پول")]), _vm._v(" "), _c('div', {
    staticClass: "wallet-balance"
  }, [_c('span', [_vm._v("موجودی :")]), _vm._v(" "), _c('span', {
    staticClass: "balance-amount"
  }, [_vm._v("\n                      " + _vm._s(_vm.my_credit) + "\n                    ")]), _vm._v(" "), !_vm.hasEnoughWalletBalance ? _c('span', {
    staticClass: "wallet-balance-error"
  }, [_c('span', [_vm._v("موجودی کافی نیست")])]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "custom-control custom-switch ml-2 mb-2",
    attrs: {
      "dir": "rtl"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.useWalletCredit,
      expression: "useWalletCredit"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "id": "use-wallet",
      "type": "checkbox",
      "disabled": !_vm.hasEnoughWalletBalance
    },
    domProps: {
      "checked": Array.isArray(_vm.useWalletCredit) ? _vm._i(_vm.useWalletCredit, null) > -1 : _vm.useWalletCredit
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.useWalletCredit,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.useWalletCredit = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.useWalletCredit = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.useWalletCredit = $$c;
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "use-wallet"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.showMobileInput ? _c('div', {
    staticClass: "mobile-section"
  }, [_c('div', {
    staticClass: "mobile-input-container"
  }, [_c('label', {
    attrs: {
      "for": "mobile-input"
    }
  }, [_vm._v("شماره موبایل")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mobileDisplay,
      expression: "mobileDisplay"
    }],
    ref: "mobileInput",
    staticClass: "form-control",
    attrs: {
      "id": "mobile-input",
      "type": "tel",
      "placeholder": "شماره موبایل خود را وارد کنید",
      "dir": "rtl"
    },
    domProps: {
      "value": _vm.mobileDisplay
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.mobileDisplay = $event.target.value;
      }, _vm.validateMobile]
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-note"
  }, [_vm._v("\n                  برای خرید شماره تلفن خودرا وارد کنید\n                ")]), _vm._v(" "), _vm.mobileError ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v("\n                  " + _vm._s(_vm.mobileError) + "\n                ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "price-summary"
  }, [_c('div', {
    staticClass: "price-row"
  }, [_c('span', [_vm._v("جمع")]), _vm._v(" "), _c('span', {
    staticClass: "amount-value"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.subtotalAmount)) + "\n                  "), _c('span', {
    staticClass: "toman-title"
  }, [_vm._v("تومان")])])]), _vm._v(" "), _vm.taxAmount > 0 ? _c('div', {
    staticClass: "price-row"
  }, [_c('span', [_vm._v("ارزش افزوده (۱۰٪)")]), _vm._v(" "), _c('span', {
    staticClass: "amount-value"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.taxAmount)) + "\n                  "), _c('span', {
    staticClass: "toman-title"
  }, [_vm._v("تومان")])])]) : _vm._e()])])])]), _vm._v(" "), !_vm.loading && !_vm.error ? _c('div', {
    staticClass: "download-links-footer-simple"
  }, [_c('div', {
    staticClass: "info-alert-download mb-3"
  }, [_c('div', {
    staticClass: "info-icon-download"
  }, [_c('i', {
    staticClass: "fa fa-info-circle",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info-text-download"
  }, [_vm._v("\n            با این خرید، به تمام کیفیت‌ها دسترسی خواهید داشت.\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "footer-content"
  }, [_c('div', {
    staticClass: "payable-amount-wrapper"
  }, [_c('div', {
    staticClass: "payable-amount"
  }, [_c('span', {
    staticClass: "amount-label"
  }, [_vm._v("مبلغ قابل پرداخت:")]), _vm._v(" "), _c('span', {
    staticClass: "amount-value"
  }, [_vm._v("\n                " + _vm._s(_vm.formatPrice(_vm.totalAmount)) + "\n                "), _c('span', {
    staticClass: "toman-title"
  }, [_vm._v("تومان")])])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-payment",
    attrs: {
      "disabled": !_vm.canPurchase || _vm.processing
    },
    on: {
      "click": _vm.handlePurchase
    }
  }, [_vm.processing ? _c('span', {
    staticClass: "spinner-border spinner-border-sm"
  }) : _c('span', [_vm._v("پرداخت")])])])])]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('client-only', [_vm.isMobile && !_vm.staticmodal ? _c('transition', {
    attrs: {
      "name": "download-drawer-slide"
    }
  }, [_vm.isDrawerVisible ? _c('div', {
    staticClass: "download-drawer-overlay",
    on: {
      "click": function click($event) {
        if ($event.target !== $event.currentTarget) return null;
        return _vm.hideModal.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "download-drawer"
  }, [_c('div', {
    staticClass: "download-drawer-header"
  }, [_c('button', {
    staticClass: "close-button",
    on: {
      "click": _vm.hideModal
    }
  }, [_c('i', {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "download-drawer-content"
  }, [_c('div', {
    staticClass: "download-links"
  }, [_c('div', {
    staticClass: "top-section"
  }, [_c('div', {
    staticClass: "download-links-header-simple"
  }, [_c('div', {
    staticClass: "download-links-title-simple"
  }, [_vm._v("\n                    " + _vm._s(_vm.getContentTitleHeader()) + "\n                  ")])]), _vm._v(" "), _c('div', {
    staticClass: "download-links-body-simple"
  }, [_vm.loading ? _c('div', {
    staticClass: "loading-state"
  }, [_c('div', {
    staticClass: "spinner-border",
    attrs: {
      "role": "status"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Loading...")])]), _vm._v(" "), _c('p', [_vm._v("در حال بارگذاری...")])]) : _vm.error ? _c('div', {
    staticClass: "error-state"
  }, [_c('p', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.error))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": function click($event) {
        return _vm.loadContentData(_vm.type, _vm.id);
      }
    }
  }, [_vm._v("\n                      تلاش مجدد\n                    ")])]) : _c('div', {
    staticClass: "tvod-content"
  }, [_c('div', {
    staticClass: "content-card"
  }, [_vm.addedItems.length > 0 ? _c('div', {
    staticClass: "added-items-list"
  }, _vm._l(_vm.addedItems, function (item) {
    return _c('div', {
      key: item.id,
      staticClass: "added-item-card"
    }, [_c('div', {
      staticClass: "card-content"
    }, [_c('div', {
      staticClass: "card-image"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": _vm.posterSrc(item.poster),
        "alt": "Poster"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "card-details"
    }, [_c('div', {
      staticClass: "content-name"
    }, [_vm._v("\n                                " + _vm._s(_vm.getContentTitle(item)) + "\n                              ")]), _vm._v(" "), _c('div', {
      staticClass: "content-info"
    }, [item.season_number && item.episode_number ? _c('span', [_vm._v("\n                                  فصل " + _vm._s(item.season_number) + " - قسمت\n                                  " + _vm._s(item.episode_number) + "\n                                ")]) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "content-price"
    }, [_vm._v("\n                                " + _vm._s(_vm.formatPrice(item.tvod_price)) + "\n                                "), _c('span', {
      staticClass: "toman-title"
    }, [_vm._v("تومان")])])]), _vm._v(" "), _c('div', {
      staticClass: "card-actions"
    }, [_c('button', {
      staticClass: "btn-delete",
      on: {
        "click": function click($event) {
          return _vm.removeAddedItem(item.id);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt",
      staticStyle: {
        "color": "#ff6633",
        "font-size": "1.5rem"
      }
    })])])])]);
  }), 0) : _vm._e()]), _vm._v(" "), _vm.showAddMoreButton ? _c('div', {
    staticClass: "add-more-section"
  }, [_c('button', {
    staticClass: "btn-add-more",
    on: {
      "click": function click($event) {
        return _vm.redirectToItem();
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-plus"
  }), _vm._v("اضافه کردن قسمت های دیگر\n                      ")])]) : _vm._e(), _vm._v(" "), _vm.showPaymentMethods ? _c('div', {
    staticClass: "payment-section"
  }, [_c('div', {
    staticClass: "section-title"
  }, [_vm._v("انتخاب روش پرداخت")]), _vm._v(" "), _c('div', {
    staticClass: "payment-options"
  }, _vm._l(_vm.paymentMethods, function (method) {
    return _c('div', {
      key: method.value,
      staticClass: "payment-option",
      class: {
        disabled: _vm.useWalletCredit
      }
    }, [_c('div', {
      staticClass: "payment-option-content"
    }, [_c('div', {
      staticClass: "payment-image"
    }, [_c('img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": __webpack_require__(528)("./".concat(method.src))
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "payment-info"
    }, [_c('div', {
      staticClass: "payment-name"
    }, [_vm._v("\n                                " + _vm._s(method.name) + "\n                              ")])]), _vm._v(" "), _c('div', {
      staticClass: "payment-radio"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.paymentMethod,
        expression: "paymentMethod"
      }],
      attrs: {
        "id": "payment-mobile-".concat(method.value),
        "type": "radio",
        "name": "payment",
        "disabled": _vm.useWalletCredit
      },
      domProps: {
        "value": method.value,
        "checked": _vm._q(_vm.paymentMethod, method.value)
      },
      on: {
        "change": function change($event) {
          _vm.paymentMethod = method.value;
        }
      }
    })])])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.showWalletSection ? _c('div', {
    staticClass: "wallet-section"
  }, [_c('div', {
    staticClass: "d-flex justify-content-start align-content-center"
  }, [_c('i', {
    staticClass: "fas fa-wallet fa-2x",
    staticStyle: {
      "color": "#525252",
      "padding": "1rem"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "wallet-option"
  }, [_c('label', {
    staticClass: "text-sm mb-0",
    staticStyle: {
      "font-weight": "600"
    },
    attrs: {
      "for": "use-wallet-mobile"
    }
  }, [_vm._v("کیف پول")]), _vm._v(" "), _c('div', {
    staticClass: "wallet-balance"
  }, [_c('span', [_vm._v("موجودی :")]), _vm._v(" "), _c('span', {
    staticClass: "balance-amount"
  }, [_vm._v("\n                              " + _vm._s(_vm.my_credit) + "\n                            ")])]), _vm._v(" "), !_vm.hasEnoughWalletBalance ? _c('span', {
    staticClass: "wallet-balance-error-mobile"
  }, [_vm._v("\n                            موجودی کافی نیست\n                          ")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "custom-control custom-switch ml-2 mb-2",
    attrs: {
      "dir": "rtl"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.useWalletCredit,
      expression: "useWalletCredit"
    }],
    staticClass: "custom-control-input",
    attrs: {
      "id": "use-wallet-mobile",
      "type": "checkbox",
      "disabled": !_vm.hasEnoughWalletBalance
    },
    domProps: {
      "checked": Array.isArray(_vm.useWalletCredit) ? _vm._i(_vm.useWalletCredit, null) > -1 : _vm.useWalletCredit
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.useWalletCredit,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.useWalletCredit = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.useWalletCredit = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.useWalletCredit = $$c;
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-control-label",
    attrs: {
      "for": "use-wallet-mobile"
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.showMobileInput ? _c('div', {
    staticClass: "mobile-section"
  }, [_c('div', {
    staticClass: "mobile-input-container"
  }, [_c('label', {
    attrs: {
      "for": "mobile-input-drawer"
    }
  }, [_vm._v("شماره موبایل")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mobileDisplay,
      expression: "mobileDisplay"
    }],
    ref: "mobileInputDrawer",
    staticClass: "form-control",
    attrs: {
      "id": "mobile-input-drawer",
      "type": "tel",
      "placeholder": "شماره موبایل خود را وارد کنید",
      "dir": "rtl"
    },
    domProps: {
      "value": _vm.mobileDisplay
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.mobileDisplay = $event.target.value;
      }, _vm.validateMobile]
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-note"
  }, [_vm._v("\n                          برای خرید شماره تلفن خودرا وارد کنید\n                        ")]), _vm._v(" "), _vm.mobileError ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v("\n                          " + _vm._s(_vm.mobileError) + "\n                        ")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "price-summary"
  }, [_c('div', {
    staticClass: "price-row"
  }, [_c('span', [_vm._v("جمع")]), _vm._v(" "), _c('span', {
    staticClass: "amount-value"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.subtotalAmount)) + "\n                          "), _c('span', {
    staticClass: "toman-title"
  }, [_vm._v("تومان")])])]), _vm._v(" "), _vm.taxAmount > 0 ? _c('div', {
    staticClass: "price-row"
  }, [_c('span', [_vm._v("ارزش افزوده (۱۰٪)")]), _vm._v(" "), _c('span', {
    staticClass: "amount-value"
  }, [_vm._v(_vm._s(_vm.formatPrice(_vm.taxAmount)) + "\n                          "), _c('span', {
    staticClass: "toman-title"
  }, [_vm._v("تومان")])])]) : _vm._e()])])])]), _vm._v(" "), !_vm.loading && !_vm.error ? _c('div', {
    staticClass: "download-links-footer-simple"
  }, [_c('div', {
    staticClass: "footer-content"
  }, [_c('div', {
    staticClass: "info-alert-download"
  }, [_c('div', {
    staticClass: "info-icon-download"
  }, [_c('i', {
    staticClass: "fa fa-info-circle",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "info-text-download"
  }, [_vm._v("\n                      با این خرید، به تمام کیفیت‌ها دسترسی خواهید داشت.\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "payable-amount-wrapper"
  }, [_c('div', {
    staticClass: "payable-amount"
  }, [_c('span', {
    staticClass: "amount-label"
  }, [_vm._v("مبلغ قابل پرداخت:")]), _vm._v(" "), _c('span', {
    staticClass: "amount-value"
  }, [_vm._v("\n                        " + _vm._s(_vm.formatPrice(_vm.totalAmount)) + "\n                        "), _c('span', {
    staticClass: "toman-title"
  }, [_vm._v("تومان")])])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary btn-payment",
    attrs: {
      "disabled": !_vm.canPurchase || _vm.processing
    },
    on: {
      "click": _vm.handlePurchase
    }
  }, [_vm.processing ? _c('span', {
    staticClass: "spinner-border spinner-border-sm"
  }) : _c('span', [_vm._v("پرداخت")])])])])]) : _vm._e()])])])]) : _vm._e()]) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Download-New.vue?vue&type=template&id=6b3c81c1&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(472);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__(987);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__(195);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.unscopables.flat.js
var es_array_unscopables_flat = __webpack_require__(989);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(468);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Download-New.vue?vue&type=script&lang=js























function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }

var THUMB_BASE = 'https://thumb.upera.tv/thumb';
var CDN_POSTERS = 'https://cdn.upera.tv/s3/posters';
/* harmony default export */ var Download_Newvue_type_script_lang_js = ({
  name: 'Download',
  props: {
    show: Boolean,
    staticmodal: Boolean,
    viewOnly: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null
    },
    posterf: {
      type: String,
      default: null
    },
    backdrop: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    namefa: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    itemdata: {
      type: Object,
      default: null
    },
    season: {
      type: [Array, Object],
      default: null
    }
  },
  data: function data() {
    return {
      loading: false,
      error: null,
      processing: false,
      paymentMethod: 'sep',
      mobile: null,
      mobileError: '',
      useWallet: false,
      useWalletCredit: false,
      showAddMoreDropdown: false,
      addedItems: [],
      availableItems: [],
      isMobile: false,
      isDrawerVisible: false,
      isSyncingFromCart: false,
      paymentMethods: [{
        value: 'sep',
        name: 'درگاه بانکی',
        description: 'پرداخت با کلیه کارت‌های بانکی',
        icon: 'BankIcon',
        src: 'Shaparak.png'
      },
      // {
      //   value: 'directdebit',
      //   name: 'پرداخت خودکار',
      //   description: 'خرید خودکار بدون وارد کردن اطلاعات بانکی',
      //   icon: 'AutoPaymentIcon',
      //   src: 'kart.png',
      // },
      {
        value: 'directdebit',
        name: 'پرداخت خودکار',
        description: 'پرداخت با اعتبار حساب آپرا',
        icon: 'OperaCreditIcon',
        src: 'directdebit.png'
      }
      // {
      //   value: 'tally',
      //   name: 'اعتبار تالی',
      //   description: 'پرداخت با اعتبار تالی',
      //   icon: 'TallyIcon',
      //   src: 'tally.png',
      // },
      ]
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex_esm["c" /* mapGetters */])({
    user: 'auth/user'
  })), Object(vuex_esm["c" /* mapGetters */])({
    my_credit: 'my_credit'
  })), {}, {
    // Determine user state
    userState: function userState() {
      var _this$$store;
      if (!this.$auth.loggedIn) return 3; // No login
      return (_this$$store = this.$store) !== null && _this$$store !== void 0 && (_this$$store = _this$$store.state) !== null && _this$$store !== void 0 && _this$$store.basketActive ? 1 : 2; // 1: activated cart, 2: not activated
    },
    userLogin: function userLogin() {
      return this.$auth.loggedIn;
    },
    // Show conditions based on user state
    showAddMoreButton: function showAddMoreButton() {
      var _this$$store2;
      return (_this$$store2 = this.$store) === null || _this$$store2 === void 0 || (_this$$store2 = _this$$store2.state) === null || _this$$store2 === void 0 ? void 0 : _this$$store2.basketActive;
    },
    showPaymentMethods: function showPaymentMethods() {
      return this.userState === 1 || this.userState === 2;
    },
    showWalletSection: function showWalletSection() {
      return this.userState === 1 || this.userState === 2;
    },
    showMobileInput: function showMobileInput() {
      return this.userState === 3;
    },
    subtotalAmount: function subtotalAmount() {
      return this.addedItems.reduce(function (sum, item) {
        return sum + item.tvod_price;
      }, 0);
    },
    taxAmount: function taxAmount() {
      return Math.floor(this.subtotalAmount * 0.1); // 10% VAT
    },
    totalAmount: function totalAmount() {
      return this.subtotalAmount + this.taxAmount;
    },
    canPurchase: function canPurchase() {
      // For logged-in users (states 1 and 2)
      if (this.userState === 1 || this.userState === 2) {
        return this.subtotalAmount > 0;
      }
      // For guest users (state 3)
      if (this.userState === 3) {
        return this.subtotalAmount > 0;
      }
      return false;
    },
    // Check if wallet has sufficient balance
    hasEnoughWalletBalance: function hasEnoughWalletBalance() {
      return this.myCreditValue >= this.totalAmount;
    },
    myCreditValue: function myCreditValue() {
      if (!this.my_credit) return 0;
      // Remove non-digit characters
      var num = this.my_credit.replace(/[^\d.]/g, '');
      return Number(num) || 0;
    },
    mobileDisplay: {
      get: function get() {
        return this.convertDigitsToPersian(this.mobile || '');
      },
      set: function set(value) {
        var englishDigits = this.convertDigitsToEnglish(value || '');
        this.mobile = englishDigits.replace(/\s+/g, '');
      }
    }
  }),
  watch: {
    show: function show(val) {
      if (val) {
        this.showModal();
        this.syncWithCart();
        var skipMainItem = false;
        if (true) {
          try {
            skipMainItem = localStorage.getItem('_download_skip_main_item') === '1';
            if (skipMainItem) {
              localStorage.removeItem('_download_skip_main_item');
            }
          } catch (error) {
            console.error('Failed to read skip flag:', error);
          }
        }

        // Only load main item content if not skipping and not view-only
        // When skipMainItem is true, we're adding episodes from SeasonEpisodes
        // and don't want to add the main series/movie item
        if (!this.viewOnly && !skipMainItem && this.type && this.id) {
          this.loadContentData(this.type, this.id);
        }
        this.loadAvailableItems();
      } else {
        this.hideModal();
      }
    },
    useWalletCredit: function useWalletCredit(val) {
      if (val) {
        // When wallet is enabled, set payment method to credit
        this.paymentMethod = 'credit';
      } else {
        // When wallet is disabled, reset to default payment method
        this.paymentMethod = 'sep';
      }
    },
    addedItems: {
      deep: true,
      handler: function handler() {
        // Don't sync to cart if we're currently syncing FROM cart
        // This prevents a write loop when syncWithCart() sets addedItems
        if (!this.isSyncingFromCart) {
          this.syncToCart();
        }
      }
    }
  },
  mounted: function mounted() {
    this.setupModalEvents();
    this.syncWithCart();
    if (true) {
      this.checkIfMobile();
      window.addEventListener('resize', this.checkIfMobile);
    }

    // Show modal if show prop is initially true
    if (this.show) {
      this.showModal();
      // Check skip flag in mounted as well
      var skipMainItem = false;
      if (true) {
        try {
          skipMainItem = localStorage.getItem('_download_skip_main_item') === '1';
          if (skipMainItem) {
            localStorage.removeItem('_download_skip_main_item');
          }
        } catch (error) {
          console.error('Failed to read skip flag:', error);
        }
      }
      if (!this.viewOnly && !skipMainItem && this.type && this.id) {
        this.loadContentData(this.type, this.id);
      }
      this.loadAvailableItems();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (true) {
      window.removeEventListener('resize', this.checkIfMobile);
      document.body.style.overflow = '';
    }
  },
  methods: {
    checkIfMobile: function checkIfMobile() {
      if (false) {}
      this.isMobile = window.innerWidth < 768;
    },
    setupModalEvents: function setupModalEvents() {
      var _this$$refs$downloadL,
        _this = this;
      (_this$$refs$downloadL = this.$refs.downloadLinks) === null || _this$$refs$downloadL === void 0 || _this$$refs$downloadL.$on('hide', function () {
        _this.cleanup();
        _this.$emit('hide-modal');
      });
    },
    syncWithCart: function syncWithCart() {
      try {
        var _this$$store3;
        // Set flag to prevent addedItems watcher from triggering syncToCart
        this.isSyncingFromCart = true;

        // If basketActive is not active, clear cart storage
        if (!((_this$$store3 = this.$store) !== null && _this$$store3 !== void 0 && (_this$$store3 = _this$$store3.state) !== null && _this$$store3 !== void 0 && _this$$store3.basketActive)) {
          localStorage.removeItem('_cart');
          this.addedItems = [];
          this.isSyncingFromCart = false;
          // Don't emit cart change when clearing during sync
          return;
        }
        var cart = localStorage.getItem('_cart');
        if (cart) {
          var parsedCart = JSON.parse(cart);
          if (parsedCart.content && Array.isArray(parsedCart.content)) {
            this.addedItems = parsedCart.content;
          } else {
            this.addedItems = [];
          }
        } else {
          this.addedItems = [];
        }

        // Reset flag after syncing
        this.isSyncingFromCart = false;
      } catch (error) {
        console.error('Error syncing with cart:', error);
        this.isSyncingFromCart = false;
      }
    },
    syncToCart: function syncToCart() {
      try {
        var _this$$store4;
        // Only sync to cart if basketActive is active
        if (!((_this$$store4 = this.$store) !== null && _this$$store4 !== void 0 && (_this$$store4 = _this$$store4.state) !== null && _this$$store4 !== void 0 && _this$$store4.basketActive)) {
          localStorage.removeItem('_cart');
          this.emitCartChange();
          return;
        }
        var normalizedContent = Array.isArray(this.addedItems) ? this.addedItems.map(function (item) {
          return item && Object(esm_typeof["a" /* default */])(item) === 'object' ? _objectSpread(_objectSpread({}, item), {}, {
            id: item.id !== undefined && item.id !== null ? String(item.id) : item.id
          }) : item;
        }) : [];
        var cart = {
          content: normalizedContent,
          amount: this.totalAmount
        };
        localStorage.setItem('_cart', JSON.stringify(cart));
        this.emitCartChange();
      } catch (error) {
        console.error('Error syncing to cart:', error);
      }
    },
    emitCartChange: function emitCartChange() {
      if (false) {}
      try {
        var event = new StorageEvent('storage', {
          key: '_cart'
        });
        window.dispatchEvent(event);
      } catch (error) {
        window.dispatchEvent(new Event('storage'));
      }
      // Emit Vue event for same-window updates
      this.$root.$emit('cart-updated');
    },
    addToCart: function addToCart(item) {
      try {
        var _this$$store5;
        // If basketActive is not active, only keep the last item
        if (!((_this$$store5 = this.$store) !== null && _this$$store5 !== void 0 && (_this$$store5 = _this$$store5.state) !== null && _this$$store5 !== void 0 && _this$$store5.basketActive)) {
          this.addedItems = [item];
          localStorage.removeItem('_cart');
          this.emitCartChange();
          return;
        }
        var cart = localStorage.getItem('_cart');
        var parsedCart = cart ? JSON.parse(cart) : {
          content: []
        };
        var content = Array.isArray(parsedCart.content) ? Object(toConsumableArray["a" /* default */])(parsedCart.content) : [];

        // Normalize item ID for comparison
        var itemId = item && item.id != null ? String(item.id) : null;
        if (!itemId) {
          console.warn('Cannot add item to cart: item has no ID', item);
          return;
        }

        // Check if item already exists (compare as strings)
        var existingIndex = content.findIndex(function (cartItem) {
          return cartItem && cartItem.id != null && String(cartItem.id) === itemId;
        });
        if (existingIndex === -1) {
          // Add new item with normalized ID
          content.push(_objectSpread(_objectSpread({}, item), {}, {
            id: itemId
          }));
        } else {
          // Update existing item
          content.splice(existingIndex, 1, _objectSpread(_objectSpread({}, item), {}, {
            id: itemId
          }));
        }
        this.addedItems = content;
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    },
    removeFromCart: function removeFromCart(itemId) {
      try {
        var _this$$store6;
        // If basketActive is not active, don't use cart storage
        if (!((_this$$store6 = this.$store) !== null && _this$$store6 !== void 0 && (_this$$store6 = _this$$store6.state) !== null && _this$$store6 !== void 0 && _this$$store6.basketActive)) {
          this.addedItems = this.addedItems.filter(function (item) {
            return item.id !== itemId;
          });
          localStorage.removeItem('_cart');
          this.emitCartChange();
          return;
        }
        var cart = localStorage.getItem('_cart');
        var parsedCart = cart ? JSON.parse(cart) : {
          content: []
        };
        var content = Array.isArray(parsedCart.content) ? parsedCart.content.filter(function (item) {
          return (item === null || item === void 0 ? void 0 : item.id) !== itemId;
        }) : [];
        this.addedItems = content;
      } catch (error) {
        console.error('Error removing from cart:', error);
      }
    },
    loadContentData: function loadContentData(type, id) {
      var _this2 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var skipMainItem, _api$data, _api$data2, endpoint, resp, api, normalized, existingIndex, _t, _t2;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (false) {}
              _context.prev = 1;
              skipMainItem = localStorage.getItem('_download_skip_main_item') === '1';
              if (!skipMainItem) {
                _context.next = 2;
                break;
              }
              localStorage.removeItem('_download_skip_main_item');
              return _context.abrupt("return");
            case 2:
              _context.next = 4;
              break;
            case 3:
              _context.prev = 3;
              _t = _context["catch"](1);
              console.error('Failed to check skip flag:', _t);
            case 4:
              _this2.loading = true;
              _this2.error = null;
              _context.prev = 5;
              if (type === 'movie') {
                endpoint = "/getV2/movie/".concat(id);
              } else if (type === 'episode' || type === 'series') {
                endpoint = "/getV2/episode/".concat(id);
              }
              _context.next = 6;
              return _this2.$axios.get(endpoint);
            case 6:
              resp = _context.sent;
              api = resp.data; // Normalize getV2 response to a flat object with cdn + entity fields
              normalized = null;
              if (api !== null && api !== void 0 && (_api$data = api.data) !== null && _api$data !== void 0 && _api$data.episode) {
                normalized = _objectSpread(_objectSpread({}, api.data.episode), {}, {
                  cdn: api.data.cdn
                });
              } else if (api !== null && api !== void 0 && (_api$data2 = api.data) !== null && _api$data2 !== void 0 && _api$data2.movie) {
                normalized = _objectSpread(_objectSpread({}, api.data.movie), {}, {
                  cdn: api.data.cdn
                });
              } else if (api !== null && api !== void 0 && api.data) {
                normalized = api.data;
              } else {
                normalized = api;
              }

              // Only add to cart if item doesn't already exist
              // Check if this item is already in addedItems to prevent duplicates
              existingIndex = _this2.addedItems.findIndex(function (item) {
                return item && item.id && String(item.id) === String(normalized.id);
              });
              if (existingIndex === -1) {
                _this2.addToCart(normalized);
              }
              _context.next = 8;
              break;
            case 7:
              _context.prev = 7;
              _t2 = _context["catch"](5);
              _this2.error = 'خطا در بارگذاری اطلاعات محتوا';
              console.error('Error loading content data:', _t2);
            case 8:
              _context.prev = 8;
              _this2.showAddMoreDropdown = false;
              _this2.loading = false;
              return _context.finish(8);
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 3], [5, 7, 8, 9]]);
      }))();
    },
    loadAvailableItems: function loadAvailableItems() {
      if (this.season && Object(esm_typeof["a" /* default */])(this.season) === 'object') {
        this.availableItems = Object.values(this.season).flat();
      } else {
        this.availableItems = [];
      }
    },
    // getPosterUrl() {
    //   // Prefer API response (cdn + poster), fallback to prop-based poster
    //   if (this.contentData?.poster && this.contentData?.cdn?.sm_poster) {
    //     return `${this.contentData.cdn.sm_poster}${this.contentData.poster}`
    //   }
    //   if (this.posterf) {
    //     return `https://thumb.upera.tv/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.tv/s3/posters/${this.posterf}`
    //   }
    //   return ''
    // },
    getContentTitle: function getContentTitle(item) {
      if (item) {
        var en = item.name || item.title;
        var fa = item.name_fa || item.title_fa;
        var title = this.chooseLang(en, fa);
        if (title) return title;
      }
      return this.chooseLang(this.name, this.namefa);
    },
    getContentTitleHeader: function getContentTitleHeader() {
      var _this$addedItems$, _this$addedItems$2, _this$addedItems$3;
      if (((_this$addedItems$ = this.addedItems[0]) === null || _this$addedItems$ === void 0 ? void 0 : _this$addedItems$.type) === 'series') {
        return 'خرید سریال ';
      } else if (((_this$addedItems$2 = this.addedItems[0]) === null || _this$addedItems$2 === void 0 ? void 0 : _this$addedItems$2.type) === 'episode') {
        return 'خرید قسمت ';
      } else if (((_this$addedItems$3 = this.addedItems[0]) === null || _this$addedItems$3 === void 0 ? void 0 : _this$addedItems$3.type) === 'movie') {
        return 'خرید فیلم ';
      }
    },
    formatPrice: function formatPrice(cents) {
      if (!cents) return '0';
      var tomansStr = String(cents);
      var length = tomansStr.length;
      if (length === 4) return tomansStr.substring(0, 1) + '.' + tomansStr.substring(1);else if (length === 5) return tomansStr.substring(0, 2) + '.' + tomansStr.substring(2);else if (length === 3) return tomansStr;else return tomansStr.substring(0, 3) + '.' + tomansStr.substring(3);
    },
    removeItem: function removeItem() {
      // Logic to remove the main item
      // This would need to be handled based on your business logic
      this.hideModal();
    },
    addItem: function addItem(item) {
      this.loadContentData(item.type, item.id);
      this.showAddMoreDropdown = true;
    },
    removeAddedItem: function removeAddedItem(itemId) {
      if (this.addedItems.length <= 1) {
        this.hideModal();
        return;
      }
      this.removeFromCart(itemId);
    },
    convertDigitsToPersian: function convertDigitsToPersian(value) {
      if (!value) return '';
      var persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return value.replace(/\d/g, function (digit) {
        return persianDigits[Number(digit)];
      });
    },
    convertDigitsToEnglish: function convertDigitsToEnglish(value) {
      if (!value) return '';
      var persianDigitMap = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9'
      };
      return value.replace(/[۰-۹]/g, function (char) {
        return persianDigitMap[char] || char;
      });
    },
    validateMobile: function validateMobile() {
      var mobileRegex = /^09[0-9]{9}$/;
      var normalizedMobile = (this.mobile || '').replace(/\s+/g, '');
      this.mobile = normalizedMobile;
      if (!normalizedMobile) {
        this.mobileError = 'شماره موبایل الزامی است';
      } else if (!mobileRegex.test(normalizedMobile)) {
        this.mobileError = 'شماره موبایل معتبر نیست';
      } else {
        this.mobileError = '';
      }
    },
    ensureGuestMobile: function ensureGuestMobile() {
      var _this3 = this;
      if (this.userState !== 3) {
        return true;
      }
      this.validateMobile();
      if (this.mobileError) {
        this.$nextTick(function () {
          var _this3$$refs$mobileIn;
          (_this3$$refs$mobileIn = _this3.$refs.mobileInput) === null || _this3$$refs$mobileIn === void 0 || _this3$$refs$mobileIn.focus();
        });
        return false;
      }
      return true;
    },
    handlePurchase: function handlePurchase() {
      var _this4 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var payload, endpoint, response, _t3;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (_this4.ensureGuestMobile()) {
                _context2.next = 1;
                break;
              }
              return _context2.abrupt("return");
            case 1:
              if (_this4.canPurchase) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              if (!(_this4.paymentMethod === 'directdebit')) {
                _context2.next = 3;
                break;
              }
              _this4.hideModal();
              _this4.$store.dispatch('directdebit/SHOW_MODAL', {
                premobile: null,
                forsubscription: false,
                id: null,
                type: null,
                paymentid: 0
              });
              return _context2.abrupt("return");
            case 3:
              _this4.processing = true;
              _context2.prev = 4;
              payload = {};
              if (_this4.userLogin) {
                payload = {
                  method: _this4.paymentMethod,
                  cart: [],
                  ekran: 0,
                  callback_url: 'https://upera.tv/callback',
                  ref: 0,
                  sms: false,
                  mobile: _this4.mobile
                };
              } else {
                payload = {
                  method: _this4.paymentMethod,
                  cart: [],
                  ekran: 0,
                  callback_url: 'https://upera.tv/callback',
                  ref: 0,
                  sms: false
                };
              }

              // Add main item
              // if (this.type === 'movie') {
              //   payload.movie_id = this.id
              // }

              // else if (this.type === 'episode' || this.type === 'series') {
              //   payload.episode_id = this.id
              // }

              // Add additional items
              if (_this4.addedItems.length > 0) {
                payload.cart = _this4.addedItems.map(function (item) {
                  return item.type === 'movie' ? {
                    movie_id: item.id
                  } : {
                    episode_id: item.id
                  };
                });
              }

              // Add mobile for guest users
              if (_this4.userState === 3) {
                payload.mobile = _this4.mobile;
              }
              endpoint = _this4.userLogin ? '/get/buy' : '/ghost/get/buy';
              _context2.next = 5;
              return _this4.$axios.post(endpoint, payload);
            case 5:
              response = _context2.sent;
              if (response.data.data.pay_url) {
                // Redirect to payment gateway
                window.location.href = response.data.data.pay_url;
              } else if (response.data.status === 'success' && _this4.useWalletCredit) {
                // Clear paid items from basket
                _this4.addedItems = [];
                localStorage.removeItem('_cart');
                _this4.emitCartChange();
                _this4.my_credit = _this4.my_credit - _this4.totalAmount;
                _this4.$store.dispatch('my_credit/SET_MY_CREDIT', _this4.my_credit);
                _this4.$swal('پرداخت با موفقیت انجام شد', {
                  icon: 'success'
                }).then(function () {
                  window.location.reload();
                });
              } else {
                _this4.error = 'خطا در ایجاد لینک پرداخت';
              }
              _context2.next = 8;
              break;
            case 6:
              _context2.prev = 6;
              _t3 = _context2["catch"](4);
              if (!(_t3.response && _t3.response.data && _t3.response.data.message)) {
                _context2.next = 7;
                break;
              }
              _this4.error = _t3.response.data.message;
              return _context2.abrupt("return");
            case 7:
              _this4.error = 'خطا در انجام عملیات پرداخت';
            case 8:
              _context2.prev = 8;
              _this4.processing = false;
              return _context2.finish(8);
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[4, 6, 8, 9]]);
      }))();
    },
    cleanup: function cleanup() {
      this.error = null;
      this.mobile = null;
      this.mobileError = '';
      this.useWallet = false;
      this.showAddMoreDropdown = false;
      this.availableItems = [];
      // Clear cart from localStorage
      // localStorage.removeItem('_cart')
      // this.addedItems = []
    },
    chooseLang: function chooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa;else return en;
    },
    showModal: function showModal() {
      if (this.isMobile && !this.staticmodal) {
        this.isDrawerVisible = true;
        if (true) {
          document.body.style.overflow = 'hidden';
        }
      } else {
        var _this$$refs$downloadL2;
        (_this$$refs$downloadL2 = this.$refs.downloadLinks) === null || _this$$refs$downloadL2 === void 0 || _this$$refs$downloadL2.show();
      }
    },
    hideModal: function hideModal() {
      if (this.isMobile && !this.staticmodal) {
        this.isDrawerVisible = false;
        if (true) {
          document.body.style.overflow = '';
        }
      } else {
        var _this$$refs$downloadL3;
        (_this$$refs$downloadL3 = this.$refs.downloadLinks) === null || _this$$refs$downloadL3 === void 0 || _this$$refs$downloadL3.hide();
      }
      this.$emit('hide-modal', null);
      this.cleanup();
    },
    posterSrc: function posterSrc(filename) {
      if (!filename) return '';
      var _w$h = {
          w: 142,
          h: 212
        },
        w = _w$h.w,
        h = _w$h.h;
      return "".concat(THUMB_BASE, "?w=").concat(w, "&h=").concat(h, "&q=100&a=c&src=").concat(CDN_POSTERS, "/").concat(filename);
    },
    redirectToItem: function redirectToItem() {
      this.hideModal();
      this.$router.push(this.type === 'episode' ? {
        name: 'episode-id',
        params: {
          id: this.$route.params.id
        }
      } : this.type === 'movie' ? {
        name: 'movie-id',
        params: {
          id: this.$route.params.id
        }
      } : {
        name: 'series-id',
        params: {
          id: this.$route.params.id
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./components/Download-New.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Download_Newvue_type_script_lang_js = (Download_Newvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/Download-New.vue?vue&type=style&index=0&id=6b3c81c1&prod&scoped=true&lang=css
var Download_Newvue_type_style_index_0_id_6b3c81c1_prod_scoped_true_lang_css = __webpack_require__(990);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/Download-New.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Download_Newvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6b3c81c1",
  null
  
)

/* harmony default export */ var Download_New = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Download_New_vue_vue_type_style_index_0_id_6b3c81c1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(870);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Download_New_vue_vue_type_style_index_0_id_6b3c81c1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Download_New_vue_vue_type_style_index_0_id_6b3c81c1_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);