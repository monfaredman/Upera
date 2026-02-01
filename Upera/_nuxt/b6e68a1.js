(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/ItemDownload.vue?vue&type=template&id=7c05b584



var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-modal', {
    ref: "downloadLinks",
    attrs: {
      "id": "downloadLinks",
      "centered": _vm.staticmodal ? false : true,
      "hide-footer": "",
      "hide-header": "",
      "size": "xl",
      "no-close-on-backdrop": _vm.staticmodal ? true : false,
      "hide-backdrop": _vm.staticmodal ? true : false,
      "no-close-on-esc": _vm.staticmodal ? true : false,
      "modal-class": "modal-download-link",
      "static": _vm.staticmodal ? true : false,
      "no-enforce-focus": ""
    }
  }, [_c('div', {
    staticClass: "download-links"
  }, [_c('div', {
    staticClass: "download-links-poster download-links-poster2",
    style: 'background-image: url(\'https://thumb.upera.tv/thumb?w=800&h=412&q=100&a=c&src=https://cdn.upera.tv/s3/backdrops/' + _vm.backdrop + '\')'
  }, [_c('div', {
    staticClass: "download-links-info d-flex align-items-center"
  }, [_c('div', {
    staticClass: "download-links-thumbnail"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "download-links-thumbnail",
    attrs: {
      "data-src": 'https://thumb.upera.tv/thumb?w=70&h=103&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + _vm.posterf
    }
  })]), _vm._v(" "), _vm.type != 'episode' ? _c('div', {
    staticClass: "download-links-title font-weight-bold"
  }, [_c('a', {
    staticClass: "text-white",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.Push(_vm.id, _vm.type);
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.ChooseLang(_vm.name, _vm.namefa)) + "\n            ")])]) : _c('div', {
    staticClass: "download-links-title font-weight-bold"
  }, [_c('a', {
    staticClass: "text-white",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.Push(_vm.id, _vm.type);
      }
    }
  }, [_vm._v("\n              " + _vm._s(_vm.ChooseLang(_vm.itemdata.series_name, _vm.itemdata.series_name_fa)) + "\n            ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h6', {
    staticClass: "text-small"
  }, [_vm._v("\n              " + _vm._s(_vm.ChooseLang(_vm.name, _vm.namefa)) + "\n            ")])])]), _vm._v(" "), _c('button', {
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
    staticClass: "fas fa-times"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "download-links-body",
    class: {
      'download-links-body2': !_vm.lastseason,
      'download-links-0': _vm.divcount == 0,
      'download-links-2': _vm.divcount == 2,
      'download-links-3': _vm.divcount == 3
    }
  }, [_vm.lastseason ? _c('div', {
    staticClass: "row py-4 download-options-wrapper"
  }, [_vm.season_num > 1 ? _c('div', {
    staticClass: "col-sm-6"
  }, [_c('b-dropdown', {
    attrs: {
      "block": "",
      "text": _vm.seasontitle,
      "variant": "dark"
    }
  }, _vm._l(_vm.lastseason, function (item, index) {
    return _c('b-dropdown-item', {
      key: index,
      attrs: {
        "href": "#",
        "active": _vm.selectseriesid == index
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.selectseries(index, _vm.lastseason[index][0].id);
        }
      }
    }, [_vm._v("\n                فصل " + _vm._s(index) + "\n              ")]);
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      'col-sm-6': _vm.season_num > 1,
      'col-sm-12': _vm.season_num <= 1
    }
  }, [_c('b-dropdown', {
    staticClass: "srmb",
    class: {
      scrollable: _vm.episode_num > 20,
      scrollable2: _vm.episode_num > 20 && _vm.staticmodal
    },
    attrs: {
      "block": "",
      "text": _vm.episodetitle,
      "variant": "outline-dark"
    }
  }, _vm._l(_vm.lastseason[_vm.selectseriesid], function (item, index) {
    return _c('b-dropdown-item', {
      key: index,
      attrs: {
        "href": "#",
        "active": _vm.type == 'episode' && _vm.itemdata.episode_number == item.episode_number
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.selectepisode(item.id);
        }
      }
    }, [_vm._v("\n                قسمت " + _vm._s(item.episode_number) + "\n              ")]);
  }), 1)], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "download-links-items",
    class: {
      'download-links-season-num1': _vm.season_num == 1
    },
    attrs: {
      "id": "download-links-items"
    }
  }, [_c('div', {
    staticClass: "col-12"
  }, [_vm.cartloading || _vm.downloadloading ? _c('svg', {
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
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.message ? _c('p', {
    staticClass: "text-danger"
  }, [_vm._v("\n              " + _vm._s(_vm.message) + "\n            ")]) : _vm._e(), _vm._v(" "), !_vm.screening.ekran && !_vm.cartloading ? _c('span', {
    staticClass: "text-info h6 text-justify"
  }, [_vm._v("حجم مصرفی: " + _vm._s(_vm.fullrate_data.fa.title)), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), !_vm.ftb2 && !_vm.cartloading && _vm.traffic && !_vm.downloadslist.some(function (el) {
    return el.owned === 1;
  }) ? _c('span', {
    staticClass: "text-justify"
  }, [_vm._v("\n              دسترسی بدون خرید، با اینترنت " + _vm._s(_vm.operator_fullrate)), _c('br'), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary text-right",
    on: {
      "click": function click($event) {
        return _vm.SHOWAGAIN(0);
      }
    }
  }, [_vm._v("\n                بررسی اتصال اینترنت\n                "), _c('i', {
    staticClass: "fas fa-sync-alt"
  })]), _vm._v(" "), _c('br'), _vm._v("و یا خرید با اینترنت فعلی شما:"), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), _vm.screening.ekran && !_vm.cartloading ? _c('span', {
    staticClass: "text-info h6 text-justify"
  }, [_vm._v("مصرف اینترنت جهت تماشای آنلاین " + _vm._s(_vm.fullrate_data.fa.title) + " می\n              باشد"), _c('br'), _c('br')]) : _vm._e(), _vm._v(" "), !_vm.cartloading && !_vm.presale && _vm.pass ? _c('span', {
    staticClass: "text-danger h6 text-justify"
  }, [_vm._v("رمز پیش خرید:\n              "), _c('span', {
    staticClass: "text-primary"
  }, [_vm._v(_vm._s(_vm.pass))]), _vm._v(" (مخصوص کسانی که\n              قبلا خرید کرده اند)"), _c('br'), _c('br')]) : _vm._e()]), _vm._v(" "), !_vm.cartloading && Object.keys(_vm.downloadslist).length > 0 && _vm.downloadslist.some(function (el) {
    return el.owned === 1;
  }) ? _c('div', _vm._l(_vm.downloadslist, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "download-links-item"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-sm-6"
    }, [_c('div', {
      staticClass: "row"
    }, [_vm.screening.ekran ? _c('div', {
      staticClass: "col-9"
    }, [_c('div', {
      staticClass: "download-quality font-weight-bold"
    }, [_vm._v("\n                        بلیط اکران\n                      ")]), _vm._v(" "), _c('div', {
      staticClass: "download-suitable"
    }, [_vm._v("تماشای آنلاین")])]) : item.isfolder && _vm.type != 'series' ? _c('div', {
      staticClass: "col-9"
    }, [_c('div', {
      staticClass: "download-quality font-weight-bold"
    }, [_vm._v("\n                        " + _vm._s(_vm.$t('download.all_qualities')) + "\n                      ")]), _vm._v(" "), _c('div', {
      staticClass: "download-suitable"
    }, [_vm._v("\n                        " + _vm._s(item.info) + "\n                      ")])]) : _c('div', {
      staticClass: "col-9"
    }, [_c('div', {
      staticClass: "download-quality font-weight-bold"
    }, [_vm._v("\n                        " + _vm._s(item.quality) + "\n                      ")]), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showinfo,
        expression: "showinfo"
      }],
      staticClass: "download-suitable"
    }, [_vm._v("\n                        " + _vm._s(item.info) + "\n                      ")])]), _vm._v(" "), _c('div', {
      staticClass: "col-3 d-flex justify-end align-items-end text-right"
    }, [item.isfolder == 0 ? _c('div', {
      staticClass: "download-size"
    }, [_vm._v("\n                        " + _vm._s(item.size) + "\n                      ")]) : _vm._e()])])]), _vm._v(" "), item.owned == 1 && item.isfolder == 1 && !_vm.screening.ekran ? _c('div', {
      staticClass: "col-sm-6"
    }, [_c('div', {
      staticClass: "d-flex h-100 align-items-end"
    }, [_c('div', {
      staticClass: "download-full-link"
    }, [_c('button', {
      staticClass: "btn btn-info btn-block",
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("\n                        خریداری شده\n                        "), _c('i', {
      staticClass: "icon-download"
    })])])])]) : item.owned == 1 && item.isfolder == 1 ? _c('div', {
      staticClass: "col-sm-6"
    }, [_c('div', {
      staticClass: "d-flex h-100 align-items-end"
    }, [_c('div', {
      staticClass: "download-full-link"
    }, [_c('button', {
      staticClass: "btn btn-secondary btn-block",
      on: {
        "click": function click($event) {
          return _vm.EKRAN(_vm.screening.ekran_id);
        }
      }
    }, [_vm._v("\n                        تماشا\n                        "), _c('i', {
      staticClass: "icon-play"
    })])])])]) : item.owned == 1 ? _c('div', {
      staticClass: "col-sm-6"
    }, [_c('div', {
      staticClass: "d-flex h-100 align-items-end"
    }, [_c('div', {
      staticClass: "download-link"
    }, [_c('button', {
      staticClass: "btn btn-secondary btn-block",
      on: {
        "click": function click($event) {
          return _vm.LINK_DOWNLOAD(item.id);
        }
      }
    }, [_vm._v("\n                        " + _vm._s(_vm.$t('show.download')) + "\n                        "), _c('i', {
      staticClass: "icon-download"
    })])]), _vm._v(" "), _c('div', {
      staticClass: "copy-link"
    }, [_c('button', {
      staticClass: "btn btn-copy btn-block",
      on: {
        "click": function click($event) {
          return _vm.COPY_DOWNLOAD(item.id);
        }
      }
    }, [_vm._v("\n                        کپی لینک\n                      ")])])])]) : _c('div', {
      staticClass: "col-sm-6"
    }, [_c('div', {
      staticClass: "d-flex h-100 align-items-end"
    }, [_c('div', {
      staticClass: "download-link w-100"
    }, [_c('button', {
      staticClass: "btn btn-outline-secondary btn-block",
      attrs: {
        "disabled": ""
      }
    }, [_vm._v("\n                        این کیفیت خریداری نشده است\n                      ")])])])])])]);
  }), 0) : !_vm.cartloading ? _c('div', {
    staticClass: "col-12"
  }, [_c('span', {
    staticClass: "text-danger h6 text-justify"
  }, [_vm._v("لینکی برای دانلود در دسترس نیست. لطفا وضعیت خرید خود را بررسی\n              کنید."), _c('br'), _c('br')])]) : _vm._e(), _vm._v(" "), !_vm.cartloading && _vm.notes ? _c('div', {
    staticClass: "col-12"
  }, [_c('span', {
    staticClass: "text-info h6 text-justify"
  }, [_c('br'), _vm._v(_vm._s(_vm.notes)), _c('br'), _c('br')])]) : _vm._e()]), _vm._v(" "), !_vm.cartloading ? _c('div', {
    staticClass: "download-links-footer",
    class: {
      'footer-0': _vm.divcount == 0,
      'footer-1': _vm.divcount == 1
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.play_button,
      expression: "play_button"
    }],
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("\n                  کیفیت متناسب با سرعت اینترنت\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_vm.type == 'movie' ? _c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.Push2(_vm.id, _vm.type);
      }
    }
  }, [_vm._v("\n                  نمایش فیلم\n                  "), _c('i', {
    staticClass: "icon-play"
  })]) : _vm.type == 'series' ? _c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.Push2(_vm.season[1][0].id, 'episode');
      }
    }
  }, [_vm._v("\n                  نمایش قسمت اول سریال\n                  "), _c('i', {
    staticClass: "icon-play"
  })]) : _c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.Push2(_vm.id, _vm.type);
      }
    }
  }, [_vm._v("\n                  نمایش این قسمت\n                  "), _c('i', {
    staticClass: "icon-play"
  })])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.sub_button,
      expression: "sub_button"
    }],
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("\n                  دسترسی همزمان به ۳۰۰۰۰ عنوان فیلم و اپیزود\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('a', {
    staticClass: "btn btn-main btn-block",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.UPERAPLUS(_vm.id, _vm.type);
      }
    }
  }, [_vm._v("\n                  خرید اشتراک"), _vm.fullrate_data.rate == 1 ? _c('span', [_vm._v("\n                    (حجم مصرفی: نیم بها)")]) : _vm._e(), _vm._v(" "), _c('i', {
    staticClass: "fa fa-money-bill pr-2"
  })])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show_free,
      expression: "show_free"
    }],
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("\n                  همه کیفیت ها\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-secondary btn-block",
    on: {
      "click": function click($event) {
        return _vm.SHOWAGAIN(0);
      }
    }
  }, [_vm._v("\n                  دانلود رایگان\n                  "), _c('i', {
    staticClass: "icon-download"
  })])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show_buy,
      expression: "show_buy"
    }],
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("\n                  خرید و دانلود\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('button', {
    staticClass: "btn btn-danger btn-block",
    on: {
      "click": function click($event) {
        return _vm.SHOWAGAIN(1);
      }
    }
  }, [_vm._v("\n                  خرید و دانلود با حجم " + _vm._s(_vm.fullrate_data.fa.alternative) + "\n                  "), _c('i', {
    staticClass: "fa fa-money-bill pr-2"
  })])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.ussd,
      expression: "ussd"
    }],
    staticClass: "download-links-item"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "font-weight-bold d-none d-sm-block"
  }, [_vm._v("\n                  خرید با USSD\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('a', {
    staticClass: "btn btn-danger btn-block",
    attrs: {
      "href": 'tel:' + _vm.ussd
    }
  }, [_vm._v("\n                  خرید تکی از طریق هف هشتاد\n                  "), _c('i', {
    staticClass: "fa fa-money-bill pr-2"
  })])])])])]) : _vm._e()])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ItemDownload.vue?vue&type=template&id=7c05b584

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/ItemDownload.vue?vue&type=script&lang=js









function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




/* harmony default export */ var ItemDownloadvue_type_script_lang_js = ({
  name: 'ItemDownload',
  props: {
    show: Boolean,
    staticmodal: Boolean,
    owned: {
      type: Number,
      default: 0
    },
    traffic: {
      type: Number,
      default: 0
    },
    ir: {
      type: Number,
      default: 0
    },
    trafficoo: {
      type: Number,
      default: 0
    },
    vod: {
      type: Number,
      default: 0
    },
    free: {
      type: Number,
      default: 0
    },
    ftb: Boolean,
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
    redirect: {
      type: String,
      default: null
    },
    season: {
      type: Object,
      default: null
    },
    itemdata: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      ftb2: 0,
      downloadloading: false,
      message: null,
      operator_fullrate: 'همراه اول یا ایرانسل',
      season_num: 0,
      episode_num: 0,
      showinfo: true,
      lastseason: {},
      selectseriesid: 1,
      seasontitle: 'فصل 1',
      episodetitle: 'قسمت ها'
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, Object(vuex_esm["c" /* mapGetters */])({
    downloadslist: 'download/downloadslist'
  })), Object(vuex_esm["c" /* mapGetters */])({
    cartloading: 'download/cartloading'
  })), Object(vuex_esm["c" /* mapGetters */])({
    presale: 'download/presale'
  })), Object(vuex_esm["c" /* mapGetters */])({
    pass: 'download/pass'
  })), Object(vuex_esm["c" /* mapGetters */])({
    screening: 'download/screening'
  })), Object(vuex_esm["c" /* mapGetters */])({
    ussd: 'download/ussd'
  })), Object(vuex_esm["c" /* mapGetters */])({
    fullrate_data: 'download/fullrate_data'
  })), Object(vuex_esm["c" /* mapGetters */])({
    show_free: 'download/show_free'
  })), Object(vuex_esm["c" /* mapGetters */])({
    play_button: 'download/play_button'
  })), Object(vuex_esm["c" /* mapGetters */])({
    sub_button: 'download/sub_button'
  })), Object(vuex_esm["c" /* mapGetters */])({
    show_buy: 'download/show_buy'
  })), Object(vuex_esm["c" /* mapGetters */])({
    notes: 'download/notes'
  })), Object(vuex_esm["c" /* mapGetters */])({
    divcount: 'download/divcount'
  })), Object(vuex_esm["c" /* mapGetters */])({
    checkuser: 'checkuser'
  })),
  watch: {
    show: function show(val) {
      if (val !== null && this.show) {
        this.showModal();
      } else {
        this.hideModal();
      }
    },
    show_free: function show_free() {
      this.checkdiv();
    },
    show_buy: function show_buy() {
      this.checkdiv();
    }
  },
  mounted: function mounted() {
    var _this = this;
    if (this.checkuser.operator_fullrate) {
      this.operator_fullrate = this.checkuser.operator_fullrate;
    }
    if (this.staticmodal) {
      this.showModal();
      document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex');
    }
    if (this.type == 'episode') {
      this.selectseriesid = this.itemdata.season_number;
      this.seasontitle = 'فصل ' + this.selectseriesid;
      this.episodetitle = 'قسمت ' + this.itemdata.episode_number;
    } else if (this.type == 'series' && this.season) {
      this.selectseriesid = Object.keys(this.season)[0];
      this.seasontitle = 'فصل ' + this.selectseriesid;
    }
    this.$refs['downloadLinks'].$on('hide', function () {
      window.removeEventListener('resize', _this.Resize);
      _this.$store.dispatch('download/RESET_DOWNLOAD');
      document.getElementsByClassName('default')[0].classList.remove('blure');
      _this.$emit('hide-modal', null);
    });
    document.body.classList.add('loaded');
  },
  methods: {
    Resize: function Resize(e) {
      var vh = window.innerHeight * 0.01;
      var element = document.getElementsByClassName('download-links');
      if (element.length) element[0].style.setProperty('--vh', "".concat(vh, "px"));
      return e;
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa;
      return en;
    },
    Push: function Push(id, type) {
      if (this.staticmodal || id != this.id) {
        this.$router.push({
          name: type + '-id',
          params: {
            id: id
          }
        });
      }
    },
    Push2: function Push2(id, type) {
      this.$router.push({
        name: type + '-show-id',
        params: {
          id: id
        }
      });
    },
    showModal: function showModal() {
      var _this2 = this;
      this.$refs['downloadLinks'].show();
      if (!this.staticmodal) {
        document.getElementsByClassName('default')[0].classList.add('blure');
      }
      if (window.innerHeight <= 500) {
        this.lastseason = null;
      } else {
        this.lastseason = this.season;
      }
      this.$refs['downloadLinks'].$on('shown', function () {
        window.addEventListener('resize', _this2.Resize);
        _this2.Resize('e');
        if (_this2.lastseason) {
          _this2.season_num = _this2.sizeofobj(_this2.lastseason);
          _this2.episode_num = _this2.sizeofobj(_this2.lastseason[_this2.selectseriesid]);
        }
      });
      this.ftb2 = this.ftb ? 1 : 0;
      if (this.ftb2 != 1 && this.$route.query.force_to_buy == 1) this.ftb2 = 1;
      var payload = {
        id: this.id,
        type: this.type,
        quality: this.$route.query.quality,
        force_to_buy: this.ftb2
      };
      if (this.$auth.loggedIn) {
        this.$store.dispatch('download/GET_DOWNLOAD', payload);
      } else {
        this.$store.dispatch('download/GET_GHOST_DOWNLOAD', payload);
      }
      this.checkdiv();
      if (this.$route.query.quality) {
        this.showinfo = false;
      }
      this.$route.query.quality = 0;
      this.$route.query.force_to_buy = 0;
    },
    hideModal: function hideModal() {
      this.$refs['downloadLinks'].hide();
      this.$emit('hide-modal', null);
      this.$store.dispatch('download/RESET_DOWNLOAD');
      document.getElementsByClassName('default')[0].classList.remove('blure');
    },
    sizeofobj: function sizeofobj(obj) {
      if (!obj) return 0;
      return Object.keys(obj).length;
    },
    EKRAN: function EKRAN(ekranid) {
      this.$router.push({
        name: 'ekran-id',
        params: {
          id: ekranid
        }
      });
    },
    SHOWAGAIN: function SHOWAGAIN(force_to_buy) {
      this.ftb2 = force_to_buy;
      var payload = {
        id: this.id,
        type: this.type,
        quality: 0,
        force_to_buy: force_to_buy
      };
      if (this.$auth.loggedIn) {
        this.$store.dispatch('download/GET_DOWNLOAD', payload);
      } else {
        this.$store.dispatch('download/GET_GHOST_DOWNLOAD', payload);
      }
      this.checkdiv();
    },
    checkdiv: function checkdiv() {
      var free = this.free;
      if (this.show_free == 1) free = 0;
      if (this.show_buy == 1) free = 1;
      if (this.show_free == 0 && (this.owned || free && this.vod || this.vod && this.checkuser.access)) {
        this.$store.dispatch('download/ADD_DIVCOUNT');
      } else {
        this.$store.dispatch('download/MIN_DIVCOUNT');
      }
      if (!this.owned && this.vod && !this.checkuser.access) {
        this.$store.dispatch('download/ADD_DIVCOUNT2');
      } else {
        this.$store.dispatch('download/MIN_DIVCOUNT2');
      }
    },
    DOWNLOAD: function DOWNLOAD(itemid) {
      var _this3 = this;
      this.downloadloading = true;
      var api_url = this.$auth.loggedIn ? '/get/download' : '/ghost/get/download';
      var traffic_button;
      if (this.fullrate_data.rate) {
        traffic_button = 'دانلود ' + this.fullrate_data.fa.title;
      } else {
        traffic_button = 'دانلود';
      }
      var ref = this.$cookiz.get('ref');
      if (!ref || isNaN(ref)) ref = 0;
      this.$axios.post(api_url, {
        itemid: itemid,
        ref: ref,
        content: this.$route.query.content
      }).then(function (res) {
        _this3.downloadloading = false;
        if (res.status === 200) {
          var dlsmbuttons = {
            back: {
              text: _this3.$t('player.back'),
              value: 'back',
              closeModal: true,
              className: 'swal-back'
            },
            copy: {
              text: 'کپی لینک',
              value: 'copy',
              closeModal: true
            },
            dl1: {
              text: traffic_button,
              value: 'dl1',
              closeModal: true,
              className: 'btn-success'
            }
          };
          if (res.data.data.url2) {
            dlsmbuttons.dl2 = {
              text: 'لینک کمکی',
              value: 'dl2',
              closeModal: true
            };
          }
          _this3.$swal({
            title: _this3.ChooseLang(_this3.name, _this3.namefa) + '!',
            icon: 'success',
            dangerMode: false,
            buttons: dlsmbuttons
          }).then(function (value) {
            switch (value) {
              case 'back':
                _this3.$swal.close();
                break;
              case 'dl1':
                window.location.href = res.data.data.url;
                break;
              case 'dl2':
                window.location.href = res.data.data.url2;
                break;
              case 'copy':
                _this3.copy(res.data.data.url);
                break;
              default:
                _this3.$swal.close();
                break;
            }
          });
        } else {
          _this3.message = res.data.message;
        }
      }, function (error) {
        _this3.downloadloading = false;
        return error;
      });
    },
    LINK_DOWNLOAD: function LINK_DOWNLOAD(itemid) {
      var _this4 = this;
      this.downloadloading = true;
      var api_url = this.$auth.loggedIn ? '/get/download' : '/ghost/get/download';
      var ref = this.$cookiz.get('ref');
      if (!ref || isNaN(ref)) ref = 0;
      this.$axios.post(api_url, {
        itemid: itemid,
        ref: ref,
        content: this.$route.query.content
      }).then(function (res) {
        _this4.downloadloading = false;
        if (res.status === 200) {
          window.location.href = res.data.data.url;
        } else {
          _this4.message = res.data.message;
        }
      }, function (error) {
        _this4.downloadloading = false;
        return error;
      });
    },
    COPY_DOWNLOAD: function COPY_DOWNLOAD(itemid) {
      var _this5 = this;
      this.downloadloading = true;
      var api_url = this.$auth.loggedIn ? '/get/download' : '/ghost/get/download';
      var ref = this.$cookiz.get('ref');
      if (!ref || isNaN(ref)) ref = 0;
      this.$axios.post(api_url, {
        itemid: itemid,
        ref: ref,
        content: this.$route.query.content
      }).then(function (res) {
        _this5.downloadloading = false;
        if (res.status === 200) {
          _this5.copy(res.data.data.url);
        } else {
          _this5.message = res.data.message;
        }
      }, function (error) {
        _this5.downloadloading = false;
        return error;
      });
    },
    copy: function copy(text) {
      var _this6 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 1;
              return _this6.$copyText(text);
            case 1:
              _this6.$swal('لینک کپی شد', {
                icon: 'success'
              });
              _context.next = 3;
              break;
            case 2:
              _context.prev = 2;
              _t = _context["catch"](0);
              _this6.$swal('لینک در دیوایس شما قابل کپی نیست.');
              return _context.abrupt("return", _t);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    selectseries: function selectseries(id, num) {
      if (num && num !== this.id) {
        this.hideModal();
        this.$router.push({
          name: 'episode-id',
          params: {
            id: num
          }
        });
        return;
      }
      this.selectseriesid = id;
      this.seasontitle = 'فصل ' + id;
    },
    selectepisode: function selectepisode(id) {
      if (id !== this.id) {
        this.hideModal();
        this.$router.push({
          name: 'episode-id',
          params: {
            id: id
          }
        });
      }
    },
    UPERAPLUS: function UPERAPLUS() {
      this.$store.dispatch('subscription/SHOW_MODAL', {
        content_type: this.type,
        content_id: this.id
      });
    }
  }
});
// CONCATENATED MODULE: ./components/ItemDownload.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ItemDownloadvue_type_script_lang_js = (ItemDownloadvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/ItemDownload.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ItemDownloadvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ItemDownload = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);