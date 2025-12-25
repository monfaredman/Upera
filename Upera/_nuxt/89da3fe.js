(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4,91],{

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_VideoPlayer_vue_vue_type_style_index_0_id_446ebad0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(875);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_VideoPlayer_vue_vue_type_style_index_0_id_446ebad0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_VideoPlayer_vue_vue_type_style_index_0_id_446ebad0_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/VideoPlayer.vue?vue&type=template&id=446ebad0&scoped=true

var VideoPlayervue_type_template_id_446ebad0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "position": "relative"
    }
  }, [!_vm.stream && _vm.posterUrl ? _c('div', {
    staticClass: "video-placeholder",
    style: {
      backgroundImage: "url(".concat(_vm.posterUrl, ")")
    }
  }, [_vm.title ? _c('div', {
    staticClass: "video-title-overlay"
  }, [_vm._v("\n      " + _vm._s(_vm.displayTitle) + "\n    ")]) : _vm._e()]) : _c('video', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    ref: _vm.playerid,
    staticClass: "video-js vjs-default-skin vjs-theme-fantasy vjs-big-play-centered vjs-16-9",
    staticStyle: {
      "width": "100%",
      "height": "100%",
      "border-radius": "0.375rem"
    },
    attrs: {
      "id": _vm.playerid,
      "controls": "",
      "preload": "auto",
      "playsinline": "",
      "webkit-playsinline": "",
      "x5-playsinline": "",
      "data-poster": _vm.posterUrl
    }
  }), _vm._v(" "), _vm.showSkipCredits && _vm.stream && _vm.showSkipCreditsButton ? _c('button', {
    staticClass: "skip-credits-btn",
    attrs: {
      "id": "".concat(_vm.playerid, "-skip-credits")
    },
    on: {
      "click": _vm.skipCredits
    }
  }, [_vm._v("\n    " + _vm._s(_vm.skipButtonText) + "\n    "), _vm._m(0)]) : _vm._e(), _vm._v(" "), _vm.title && _vm.stream ? _c('div', {
    staticClass: "video-title-bottom",
    attrs: {
      "id": "".concat(_vm.playerid, "-title")
    }
  }, [_vm._v("\n    " + _vm._s(_vm.displayTitle) + "\n  ")]) : _vm._e(), _vm._v(" "), _vm.stream ? _c('div', {
    staticClass: "video-timer-bottom",
    attrs: {
      "id": "".concat(_vm.playerid, "-timer")
    }
  }, [_vm._v("\n    " + _vm._s(_vm.currentTimeFormatted) + " / " + _vm._s(_vm.durationFormatted) + "\n  ")]) : _vm._e(), _vm._v(" "), _vm.stream && _vm.showProgressPreview ? _c('div', {
    ref: "progressPreview",
    staticClass: "progress-preview-popover",
    style: {
      left: _vm.previewPosition.x + 'px'
    },
    attrs: {
      "id": "".concat(_vm.playerid, "-progress-preview")
    }
  }, [_c('div', {
    staticClass: "preview-thumbnail"
  }, [_c('canvas', {
    ref: "previewCanvas",
    attrs: {
      "width": "160",
      "height": "90"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "preview-time"
  }, [_vm._v(_vm._s(_vm.previewTime))])]) : _vm._e(), _vm._v(" "), _c('button', {
    attrs: {
      "id": "vast-cta-btn"
    }
  }, [_vm._v("اطلاعات بیشتر")]), _vm._v(" "), _vm.fullrateData && _vm.contentId && _vm.contentType ? _c('SubscriptionButton', {
    attrs: {
      "fullrate-data": _vm.fullrateData,
      "content-id": _vm.contentId,
      "content-type": _vm.contentType
    },
    on: {
      "subscription-click": _vm.handleSubscriptionClick
    }
  }) : _vm._e(), _vm._v(" "), _vm.showSettingsDrawer ? _c('div', {
    ref: "settingsDrawer",
    staticClass: "settings-drawer-overlay",
    attrs: {
      "id": "".concat(_vm.playerid, "-settings-drawer")
    },
    on: {
      "click": _vm.closeSettingsDrawer
    }
  }, [_c('div', {
    staticClass: "settings-drawer",
    class: {
      'mobile-drawer': _vm.isMobile
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm.settingsDrawerView === 'main' ? _c('div', {
    staticClass: "drawer-content"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "drawer-body"
  }, [_c('div', {
    staticClass: "drawer-item",
    on: {
      "click": _vm.openSpeedSettings
    }
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-info"
  }, [_c('div', {
    staticClass: "drawer-item-title"
  }, [_vm._v("سرعت پخش")]), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-value"
  }, [_vm._v(_vm._s(_vm.getSpeedLabel()))])]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _vm.tracks && _vm.tracks.length > 0 ? _c('div', {
    staticClass: "drawer-item",
    on: {
      "click": _vm.openSubtitleSettings
    }
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-info"
  }, [_c('div', {
    staticClass: "drawer-item-title"
  }, [_vm._v("زیرنویس")]), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-value"
  }, [_vm._v(_vm._s(_vm.getSubtitleLabel()))])]), _vm._v(" "), _vm._m(5)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "drawer-item",
    on: {
      "click": _vm.openQualitySettings
    }
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-info"
  }, [_c('div', {
    staticClass: "drawer-item-title"
  }, [_vm._v("کیفیت")]), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-value"
  }, [_vm._v(_vm._s(_vm.getQualityLabel()))])]), _vm._v(" "), _vm._m(7)]), _vm._v(" "), _vm.audioOptions && _vm.audioOptions.length > 0 ? _c('div', {
    staticClass: "drawer-item",
    on: {
      "click": _vm.openAudioSettings
    }
  }, [_vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-info"
  }, [_c('div', {
    staticClass: "drawer-item-title"
  }, [_vm._v("صدا")]), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-value"
  }, [_vm._v("\n                " + _vm._s(_vm.getAudioLabelDisplay()) + "\n              ")])]), _vm._v(" "), _vm._m(9)]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _vm.settingsDrawerView === 'subtitle-style' ? _c('div', {
    staticClass: "drawer-content"
  }, [_c('div', {
    staticClass: "drawer-header with-back"
  }, [_c('button', {
    staticClass: "back-button",
    on: {
      "click": _vm.backToSubtitleSettings
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-right"
  })]), _vm._v(" "), _c('h3', [_vm._v("تنظیمات ظاهر زیرنویس")])]), _vm._v(" "), _c('div', {
    staticClass: "drawer-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "drawer-body px-4"
  }, [_c('div', {
    staticClass: "subtitle-style-group"
  }, [_c('label', {
    staticClass: "subtitle-style-label"
  }, [_vm._v("اندازه فونت")]), _vm._v(" "), _vm.isUltraWideScreen ? _c('div', {
    staticClass: "subtitle-font-custom-control"
  }, [_c('button', {
    staticClass: "subtitle-font-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.subtitleFontSizePx <= _vm.subtitleFontMin
    },
    on: {
      "click": function click($event) {
        return _vm.adjustSubtitleFontSize(-_vm.subtitleFontStep);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-minus"
  })]), _vm._v(" "), _c('input', {
    staticClass: "subtitle-font-input",
    attrs: {
      "type": "number",
      "min": _vm.subtitleFontMin,
      "max": _vm.subtitleFontMax,
      "step": _vm.subtitleFontStep
    },
    domProps: {
      "value": _vm.subtitleFontSizePx
    },
    on: {
      "input": function input($event) {
        return _vm.handleSubtitleFontInput($event);
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "subtitle-font-unit"
  }, [_vm._v("px")]), _vm._v(" "), _c('button', {
    staticClass: "subtitle-font-btn",
    attrs: {
      "type": "button",
      "disabled": _vm.subtitleFontSizePx >= _vm.subtitleFontMax
    },
    on: {
      "click": function click($event) {
        return _vm.adjustSubtitleFontSize(_vm.subtitleFontStep);
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })])]) : _c('div', {
    staticClass: "subtitle-style-options"
  }, _vm._l(_vm.FONT_SIZES, function (size) {
    return _c('div', {
      key: size.value,
      staticClass: "subtitle-style-option",
      class: {
        active: _vm.subtitleStyle.fontSize === size.value
      },
      on: {
        "click": function click($event) {
          return _vm.updateSubtitleStyle('fontSize', size.value);
        }
      }
    }, [_vm._v("\n                " + _vm._s(size.label) + "\n              ")]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "subtitle-style-group"
  }, [_c('label', {
    staticClass: "subtitle-style-label"
  }, [_vm._v("رنگ متن")]), _vm._v(" "), _c('div', {
    staticClass: "subtitle-style-options"
  }, _vm._l(_vm.TEXT_COLORS, function (color) {
    return _c('div', {
      key: color.value,
      staticClass: "subtitle-style-option color-option",
      class: Object(defineProperty["a" /* default */])({
        active: _vm.subtitleStyle.color === color.value
      }, color.class, true),
      on: {
        "click": function click($event) {
          return _vm.updateSubtitleStyle('color', color.value);
        }
      }
    }, [_c('div', {
      staticClass: "color-preview",
      style: {
        backgroundColor: color.value
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(color.label))])]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "subtitle-style-group"
  }, [_c('label', {
    staticClass: "subtitle-style-label"
  }, [_vm._v("پس‌زمینه")]), _vm._v(" "), _c('div', {
    staticClass: "subtitle-style-options"
  }, _vm._l(_vm.BACKGROUND_OPACITIES, function (bg) {
    return _c('div', {
      key: bg.value,
      staticClass: "subtitle-style-option",
      class: {
        active: _vm.subtitleStyle.background === bg.value
      },
      on: {
        "click": function click($event) {
          return _vm.updateSubtitleStyle('background', bg.value);
        }
      }
    }, [_c('div', {
      staticClass: "bg-preview",
      style: {
        opacity: bg.value
      }
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(bg.label))])]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "subtitle-style-group"
  }, [_c('label', {
    staticClass: "subtitle-style-label"
  }, [_vm._v("سایه متن")]), _vm._v(" "), _c('div', {
    staticClass: "subtitle-style-options"
  }, _vm._l(_vm.TEXT_SHADOWS, function (shadow) {
    return _c('div', {
      key: shadow.value,
      staticClass: "subtitle-style-option",
      class: {
        active: _vm.subtitleStyle.shadow === shadow.value
      },
      on: {
        "click": function click($event) {
          return _vm.updateSubtitleStyle('shadow', shadow.value);
        }
      }
    }, [_vm._v("\n                " + _vm._s(shadow.label) + "\n              ")]);
  }), 0)]), _vm._v(" "), _c('div', {
    staticClass: "subtitle-style-actions"
  }, [_c('button', {
    staticClass: "reset-default-btn",
    on: {
      "click": _vm.resetSubtitleStyles
    }
  }, [_vm._v("\n              بازنشانی به پیش‌فرض\n            ")])])])]) : _vm._e(), _vm._v(" "), _vm.settingsDrawerView === 'speed' ? _c('div', {
    staticClass: "drawer-content"
  }, [_c('div', {
    staticClass: "drawer-header with-back"
  }, [_c('button', {
    staticClass: "back-button",
    on: {
      "click": _vm.backToMain
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-right"
  })]), _vm._v(" "), _c('h3', [_vm._v("سرعت پخش")])]), _vm._v(" "), _c('div', {
    staticClass: "drawer-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "drawer-body"
  }, _vm._l(_vm.PLAYBACK_RATES, function (rate) {
    return _c('div', {
      key: rate.value,
      staticClass: "drawer-option",
      class: {
        active: _vm.isSpeedActive(rate.value)
      },
      on: {
        "click": function click($event) {
          return _vm.selectSpeed(rate.value);
        }
      }
    }, [_c('div', {
      staticClass: "drawer-option-radio"
    }, [_vm.isSpeedActive(rate.value) ? _c('div', {
      staticClass: "radio-checked"
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "drawer-option-label"
    }, [_vm._v(_vm._s(rate.label))])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _vm.settingsDrawerView === 'subtitle' ? _c('div', {
    staticClass: "drawer-content"
  }, [_c('div', {
    staticClass: "drawer-header with-back"
  }, [_c('button', {
    staticClass: "back-button",
    on: {
      "click": _vm.backToMain
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-right"
  })]), _vm._v(" "), _c('h3', [_vm._v("زیرنویس")])]), _vm._v(" "), _c('div', {
    staticClass: "drawer-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "drawer-body"
  }, [_c('div', {
    staticClass: "drawer-option",
    class: {
      active: _vm.currentSubtitle === null
    },
    on: {
      "click": function click($event) {
        return _vm.selectSubtitle(null);
      }
    }
  }, [_c('div', {
    staticClass: "drawer-option-radio"
  }, [_vm.currentSubtitle === null ? _c('div', {
    staticClass: "radio-checked"
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "drawer-option-label"
  }, [_vm._v("خاموش")])]), _vm._v(" "), _vm._l(_vm.getSubtitleTracks(), function (track, index) {
    return _c('div', {
      key: index,
      staticClass: "drawer-option",
      class: {
        active: _vm.currentSubtitle === index
      },
      on: {
        "click": function click($event) {
          return _vm.selectSubtitle(index);
        }
      }
    }, [_c('div', {
      staticClass: "drawer-option-radio"
    }, [_vm.currentSubtitle === index ? _c('div', {
      staticClass: "radio-checked"
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "drawer-option-label"
    }, [_vm._v(_vm._s(track.label))])]);
  }), _vm._v(" "), _c('div', {
    staticClass: "drawer-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "drawer-item",
    on: {
      "click": _vm.openSubtitleStyleSettings
    }
  }, [_vm._m(10), _vm._v(" "), _vm._m(11), _vm._v(" "), _vm._m(12)])], 2)]) : _vm._e(), _vm._v(" "), _vm.settingsDrawerView === 'audio' ? _c('div', {
    staticClass: "drawer-content"
  }, [_c('div', {
    staticClass: "drawer-header with-back"
  }, [_c('button', {
    staticClass: "back-button",
    on: {
      "click": _vm.backToMain
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-right"
  })]), _vm._v(" "), _c('h3', [_vm._v("صدا")])]), _vm._v(" "), _c('div', {
    staticClass: "drawer-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "drawer-body"
  }, [_c('div', {
    staticClass: "drawer-option",
    class: {
      active: _vm.currentAudioLang === null
    },
    on: {
      "click": function click($event) {
        return _vm.selectAudio(null);
      }
    }
  }, [_c('div', {
    staticClass: "drawer-option-radio"
  }, [_vm.currentAudioLang === null ? _c('div', {
    staticClass: "radio-checked"
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "drawer-option-label"
  }, [_vm._v("پیش‌فرض")])]), _vm._v(" "), _vm._l(_vm.audioOptions, function (opt) {
    return _c('div', {
      key: opt.lang,
      staticClass: "drawer-option",
      class: {
        active: _vm.currentAudioLang === opt.lang
      },
      on: {
        "click": function click($event) {
          return _vm.selectAudio(opt.lang);
        }
      }
    }, [_c('div', {
      staticClass: "drawer-option-radio"
    }, [_vm.currentAudioLang === opt.lang ? _c('div', {
      staticClass: "radio-checked"
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "drawer-option-label"
    }, [_vm._v(_vm._s(opt.label))])]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.settingsDrawerView === 'quality' ? _c('div', {
    staticClass: "drawer-content"
  }, [_c('div', {
    staticClass: "drawer-header with-back"
  }, [_c('button', {
    staticClass: "back-button",
    on: {
      "click": _vm.backToMain
    }
  }, [_c('i', {
    staticClass: "fa fa-chevron-right"
  })]), _vm._v(" "), _c('h3', [_vm._v("کیفیت")])]), _vm._v(" "), _c('div', {
    staticClass: "drawer-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "drawer-body"
  }, _vm._l(_vm.getAvailableQualities(), function (quality) {
    return _c('div', {
      key: quality.value,
      staticClass: "drawer-option",
      class: {
        active: _vm.isQualityActive(quality.value)
      },
      on: {
        "click": function click($event) {
          return _vm.selectQuality(quality.value);
        }
      }
    }, [_c('div', {
      staticClass: "drawer-option-radio"
    }, [_vm.isQualityActive(quality.value) ? _c('div', {
      staticClass: "radio-checked"
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "drawer-option-label"
    }, [_vm._v(_vm._s(quality.label))])]);
  }), 0)]) : _vm._e()])]) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('span', {
    staticClass: "skip-icon"
  }, [_c('i', {
    staticClass: "fa fa-forward"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-header"
  }, [_c('h3', [_vm._v("تنظیمات")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-icon"
  }, [_c('i', {
    staticClass: "fa fa-clock"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-arrow"
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-icon"
  }, [_c('i', {
    staticClass: "fa fa-closed-captioning"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-arrow"
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-icon"
  }, [_c('i', {
    staticClass: "fa fa-video"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-arrow"
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-icon"
  }, [_c('i', {
    staticClass: "fa fa-headphones"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-arrow"
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-icon"
  }, [_c('i', {
    staticClass: "fa fa-cog"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-info"
  }, [_c('div', {
    staticClass: "drawer-item-title"
  }, [_vm._v("تنظیمات زیرنویس")]), _vm._v(" "), _c('div', {
    staticClass: "drawer-item-value"
  }, [_vm._v("سایز، رنگ، پس‌زمینه")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "drawer-item-arrow"
  }, [_c('i', {
    staticClass: "fa fa-chevron-left"
  })]);
}];

// CONCATENATED MODULE: ./components/VideoPlayer.vue?vue&type=template&id=446ebad0&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__(91);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.reflect.construct.js
var es_reflect_construct = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__(222);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(110);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(151);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__(83);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-nan.js
var es_number_is_nan = __webpack_require__(993);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.pad-start.js
var es_string_pad_start = __webpack_require__(994);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(175);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.starts-with.js
var es_string_starts_with = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(320);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/video.js/dist/video.es.js
var video_es = __webpack_require__(712);

// EXTERNAL MODULE: ./node_modules/@arte/videojs-vast/dist/mjs/index.js + 2 modules
var mjs = __webpack_require__(1053);

// EXTERNAL MODULE: ./node_modules/videojs-hls-quality-selector/dist/videojs-hls-quality-selector.js
var videojs_hls_quality_selector = __webpack_require__(1011);

// EXTERNAL MODULE: ./node_modules/video.js/dist/lang/fa.json
var fa = __webpack_require__(731);

// EXTERNAL MODULE: ./components/player/SubscriptionButton.vue + 4 modules
var SubscriptionButton = __webpack_require__(922);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/VideoPlayer.vue?vue&type=script&lang=js

















function _callSuper(t, o, e) { return o = Object(getPrototypeOf["a" /* default */])(o), Object(possibleConstructorReturn["a" /* default */])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], Object(getPrototypeOf["a" /* default */])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }






























var prev10Icon = __webpack_require__(635);
var next10Icon = __webpack_require__(633);
var volumeIcon = __webpack_require__(638);
var volumeDownIcon = __webpack_require__(637);
var volumeOffIcon = __webpack_require__(639);
var settingIcon = __webpack_require__(636);
var episodesIcon = __webpack_require__(632);
var nextIcon = __webpack_require__(634);

// Constants
var MOBILE_BREAKPOINT = 768;
var ULTRA_WIDE_BREAKPOINT = 2000;
var DEFAULT_SUBTITLE_FONT_SIZE = 24;
var SUBTITLE_FONT_MIN = 18;
var SUBTITLE_FONT_MAX = 64;
var SUBTITLE_FONT_STEP = 2;
var SEEK_TIME = 10;
var VOLUME_STEP = 0.1;
var _PLAYBACK_RATES = [{
  value: 0.5,
  label: '۰.۵x'
}, {
  value: 0.75,
  label: '۰.۷۵x'
}, {
  value: 1,
  label: '۱x (عادی)'
}, {
  value: 1.25,
  label: '۱.۲۵x'
}, {
  value: 1.5,
  label: '۱.۵x'
}, {
  value: 1.75,
  label: '۱.۷۵x'
}, {
  value: 2,
  label: '۲x'
}];
var LANGUAGE_MAP = {
  fa: 'فارسی',
  en: 'English',
  ar: 'العربية',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español'
};
var QUALITY_MAP = {
  '1080p': '۱۰۸۰p - Full HD',
  '720p': '۷۲۰p - HD',
  '480p': '۴۸۰p - SD',
  '360p': '۳۶۰p',
  '240p': '۲۴۰p',
  auto: 'خودکار',
  Auto: 'خودکار'
};

/* harmony default export */ var VideoPlayervue_type_script_lang_js = ({
  components: {
    SubscriptionButton: SubscriptionButton["default"]
  },
  props: {
    stream: {
      type: String,
      default: ''
    },
    playerid: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    showAutoPlayToggle: {
      type: Boolean,
      default: true
    },
    vastUrl: {
      type: String,
      default: ''
    },
    posterUrl: {
      type: String,
      default: ''
    },
    playerAutoPlay: {
      type: Boolean,
      default: true
    },
    tracks: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hasPlaylist: {
      type: Boolean,
      default: false
    },
    shouldIncrementViews: {
      type: Boolean,
      default: false
    },
    videoid: {
      type: String,
      default: ''
    },
    videotype: {
      type: String,
      default: ''
    },
    muteOnOtherPlay: {
      type: Boolean,
      default: false
    },
    creditsData: {
      type: Object,
      default: function _default() {
        return {
          first_credits: 1,
          after_credits: 60,
          final_credits: 5550
        };
      }
    },
    showSkipCreditsButton: {
      type: Boolean,
      default: true
    },
    fullrateData: {
      type: Object,
      default: null
    },
    contentId: {
      type: [String, Number],
      default: null
    },
    contentType: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      FONT_SIZES: [{
        value: 20,
        label: 'کوچک'
      }, {
        value: 24,
        label: 'متوسط'
      }, {
        value: 28,
        label: 'بزرگ'
      }, {
        value: 32,
        label: 'خیلی بزرگ'
      }],
      TEXT_COLORS: [{
        value: '#ffffff',
        label: 'سفید',
        class: 'color-white'
      }, {
        value: '#ffff00',
        label: 'زرد',
        class: 'color-yellow'
      }, {
        value: '#00ff00',
        label: 'سبز',
        class: 'color-green'
      }, {
        value: '#00ffff',
        label: 'فیروزه‌ای',
        class: 'color-cyan'
      }, {
        value: '#ffa500',
        label: 'نارنجی',
        class: 'color-orange'
      }],
      BACKGROUND_OPACITIES: [{
        value: 0,
        label: 'بدون پس‌زمینه'
      }, {
        value: 0.5,
        label: 'نیمه شفاف'
      }, {
        value: 0.8,
        label: 'مات',
        selected: true
      }, {
        value: 1,
        label: 'کاملاً مات'
      }],
      TEXT_SHADOWS: [{
        value: 'none',
        label: 'بدون سایه'
      }, {
        value: 'light',
        label: 'سایه کم'
      }, {
        value: 'medium',
        label: 'سایه متوسط'
      }, {
        value: 'heavy',
        label: 'سایه زیاد'
      }],
      adActive: false,
      viewsIncremented: false,
      player: null,
      vastData: null,
      // Store parsed VAST data (AdTitle, Description, Duration, etc.)
      showSkipCredits: false,
      skipButtonText: 'رد کردن تیتراژ',
      currentCreditType: null,
      creditCheckInterval: null,
      runtimeDisplayComponent: null,
      adEventsSetup: false,
      isMobile: false,
      isUltraWideScreen: false,
      currentTimeFormatted: '00:00',
      durationFormatted: '00:00',
      showSettingsDrawer: false,
      settingsDrawerView: 'main',
      // 'main', 'speed', 'subtitle', 'quality'
      currentPlaybackRate: 1,
      currentSubtitle: null,
      currentQuality: 'auto',
      // Track subtitle state to prevent conflicts
      subtitleTracksInitialized: false,
      subtitleStyle: {
        fontSize: DEFAULT_SUBTITLE_FONT_SIZE,
        color: '#ffffff',
        background: 0.8,
        shadow: 'medium'
      },
      subtitleFontMin: SUBTITLE_FONT_MIN,
      subtitleFontMax: SUBTITLE_FONT_MAX,
      subtitleFontStep: SUBTITLE_FONT_STEP,
      // Progress preview state
      showProgressPreview: false,
      previewPosition: {
        x: 0,
        y: 0
      },
      previewTime: '00:00',
      progressBarElement: null,
      lastPreviewTime: -1,
      // audio selection state
      audioOptions: null,
      currentAudioLang: null,
      // the actual stream currently loaded into the player
      currentStream: null,
      // Volume restoration state
      volumeRestoreInterval: null,
      savedVolumeState: null,
      volumeSaveInterval: null
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex_esm["c" /* mapGetters */])({
    autoPlay: 'autoplay'
  })), {}, {
    displayTitle: function displayTitle() {
      return this.adActive ? 'نمایش تبلیغات' : this.title;
    },
    isRtl: function isRtl() {
      return this.$i18n.locale === 'fa';
    },
    PLAYBACK_RATES: function PLAYBACK_RATES() {
      return _PLAYBACK_RATES;
    },
    subtitleFontSizePx: function subtitleFontSizePx() {
      return this.resolveSubtitleFontPx(this.subtitleStyle.fontSize);
    }
  }),
  watch: {
    stream: function stream(newVal) {
      if (newVal) {
        // update parsed audio options and currentStream when parent changes stream prop
        this.parseAudioOptionsFromStream(newVal);
        // reset currentStream to the new incoming stream (will be used on next init)
        this.currentStream = newVal;
        this.initPlayer();
      }
    },
    autoPlay: function autoPlay() {
      if (this.player) {
        this.updateIcon();
      }
    },
    '$i18n.locale': function $i18nLocale(newLang) {
      if (this.player) {
        this.player.language(newLang);
        this.player.el().style.direction = newLang === 'fa' ? 'rtl' : 'ltr';
      }
    },
    showSettingsDrawer: function showSettingsDrawer(newVal) {
      var _this = this;
      if (newVal) {
        // When drawer becomes visible, move it to player element
        this.$nextTick(function () {
          _this.moveDrawerToPlayer();
        });
      }
    }
  },
  mounted: function mounted() {
    this.updateResponsiveFlags();
    window.addEventListener('resize', this.handleResize);
    if (this.stream) {
      this.initPlayer();
    }
    window.addEventListener('keydown', this.handleKeydown);

    // Save volume state before page unload/refresh
    window.addEventListener('beforeunload', this.saveVolumeState);
  },
  beforeDestroy: function beforeDestroy() {
    // Save volume state before component is destroyed
    this.saveVolumeState();

    // Stop volume restoration monitoring
    this.stopVolumeRestoreMonitoring();

    // Stop volume save monitoring
    this.stopVolumeSaveMonitoring();

    // Reset ad events setup flag for next initialization
    this.adEventsSetup = false;
    if (this.player) {
      this.player.dispose();
    }
    if (this.creditCheckInterval) {
      clearInterval(this.creditCheckInterval);
    }
    // Clean up observer
    if (this.cueObserver) {
      this.cueObserver.disconnect();
    }
    // Remove custom style tag
    var existingStyle = document.getElementById('custom-subtitle-styles');
    if (existingStyle) {
      existingStyle.remove();
    }
    window.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('beforeunload', this.saveVolumeState);
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex_esm["b" /* mapActions */])(['SET_AUTOPLAY'])), {}, {
    // ============================================
    // Subscription Handler
    // ============================================
    handleSubscriptionClick: function handleSubscriptionClick(data) {
      // Emit to parent or call UPERAPLUS method
      this.$emit('subscription-purchase', data);

      // If you want to call UPERAPLUS directly, you can dispatch the store action
      if (this.$store && this.$store.dispatch) {
        this.$store.dispatch('subscription/SHOW_MODAL', {
          content_type: data.type,
          content_id: data.id
        });
      }
    },
    // ============================================
    // Lifecycle & Setup Methods
    // ============================================
    handleResize: function handleResize() {
      this.updateResponsiveFlags();
    },
    updateResponsiveFlags: function updateResponsiveFlags() {
      var width = window.innerWidth;
      this.isMobile = width <= MOBILE_BREAKPOINT;
      this.isUltraWideScreen = width > ULTRA_WIDE_BREAKPOINT;
    },
    initPlayer: function initPlayer() {
      // Reset ad events setup flag for new player instance
      this.adEventsSetup = false;
      var currentLang = this.$i18n.locale;
      if (currentLang === 'fa') {
        video_es["default"].addLanguage('fa', fa);
      }

      // Determine initial autoplay based on prop and global setting
      var initialAutoplay = !!(this.playerAutoPlay && this.autoPlay !== false);

      // parse audio options from the original prop stream first
      this.parseAudioOptionsFromStream(this.stream);

      // Determine initial stream to load. If user has a persisted audio selection
      // and that audio option exists in the parsed audioOptions, build a stream
      // containing only the selected audio param so the player loads with correct audio.
      var initialStream = this.currentStream || this.stream;
      try {
        // First, check if stream URL already has an audio param
        var url = new URL(this.stream, window.location.origin);
        var params = new URLSearchParams(url.search);
        var streamAudioLang = null;
        var _iterator = _createForOfIteratorHelper(params.keys()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _key = _step.value;
            if (/^audio\[.+\]$/.test(_key)) {
              var langMatch = _key.match(/audio\[(.+)\]/);
              if (langMatch) {
                streamAudioLang = langMatch[1];
                break;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var persisted = localStorage.getItem("".concat(this.playerid, "-audioLang"));
        if (persisted && this.audioOptions) {
          var match = this.audioOptions.find(function (o) {
            return o.lang === persisted;
          });
          if (match) {
            initialStream = this.buildStreamWithAudio(this.stream, match.lang);
            this.currentAudioLang = match.lang;
          }
        } else if (streamAudioLang) {
          // Stream URL already specifies audio, use that (highest priority after persisted)

          this.currentAudioLang = streamAudioLang.toUpperCase();
          // Don't rebuild stream, it already has the audio param
        } else {
          // No persisted selection and no audio in URL: prefer FA audio if available (main language is FA)
          if (this.audioOptions) {
            var faOpt = this.audioOptions.find(function (o) {
              return o.lang && o.lang.toString().toLowerCase() === 'fa';
            });
            if (faOpt) {
              initialStream = this.buildStreamWithAudio(this.stream, faOpt.lang);
              this.currentAudioLang = faOpt.lang;
            } else {
              // FA not available, detect which audio will be default from stream URL
              // If no audio param is specified, the stream will use its natural default
              // which is typically the first audio track (often EN)
              var hasAudioParam = false;
              var _iterator2 = _createForOfIteratorHelper(params.keys()),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var key = _step2.value;
                  if (/^audio\[.+\]$/.test(key)) {
                    hasAudioParam = true;
                    break;
                  }
                }

                // If no audio param exists and we have audio options,
                // assume the first option in audioOptions is the default
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              if (!hasAudioParam && this.audioOptions && this.audioOptions.length > 0) {
                this.currentAudioLang = this.audioOptions[0].lang;
              }
            }
          }
        }
      } catch (e) {
        // ignore localStorage errors
        console.warn('[VideoPlayer] Error initializing audio state:', e);
      }

      // ensure we track the actual stream we've chosen to load
      this.currentStream = initialStream;
      this.player = Object(video_es["default"])(this.playerid, {
        autoplay: initialAutoplay,
        controls: true,
        controlBar: {
          children: ['progressControl', 'playToggle', 'volumePanel', 'fullscreenToggle']
        },
        fluid: true,
        poster: this.posterUrl,
        language: currentLang,
        sources: [{
          src: initialStream,
          type: 'application/x-mpegURL'
        }]
      });

      // Suppress VideoJS bandwidth warnings (expected behavior for adaptive bitrate streaming)
      // Only override if not already overridden to avoid issues with multiple player instances
      if (!video_es["default"].log._bandwidthWarningSuppressed) {
        var originalWarn = video_es["default"].log.warn;
        video_es["default"].log.warn = function () {
          for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
            args[_key2] = arguments[_key2];
          }
          var message = args.join(' ');
          // Filter out bandwidth-related warnings as they're expected during adaptive streaming
          if (message.includes("Aborted early because there isn't enough bandwidth") || message.includes('Problem encountered with playlist')) {
            return;
          }
          originalWarn.apply(video_es["default"].log, args);
        };
        video_es["default"].log._bandwidthWarningSuppressed = true;
        video_es["default"].log._originalWarn = originalWarn;
      }
      this.player.addClass('vjs-split-controls');
      this.applyRtlSettings();
      this.setupVastPlugin();
      this.setupPlayerEvents();
    },
    applyRtlSettings: function applyRtlSettings() {
      var videoEl = this.$refs[this.playerid];
      if (videoEl) {
        videoEl.classList.toggle('vjs-rtl', this.isRtl);
        videoEl.style.direction = this.isRtl ? 'rtl' : 'ltr';
      }
    },
    // ============================================
    // VAST Ad Plugin Setup
    // ============================================
    parseVastXml: function parseVastXml(xmlText) {
      if (!xmlText) return null;
      try {
        var _xmlDoc$querySelector, _xmlDoc$querySelector2, _xmlDoc$querySelector3, _xmlDoc$querySelector4, _xmlDoc$querySelector5, _xmlDoc$querySelector6, _xmlDoc$querySelector7;
        // Parse XML
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // Extract VAST data
        var adTitle = ((_xmlDoc$querySelector = xmlDoc.querySelector('AdTitle')) === null || _xmlDoc$querySelector === void 0 ? void 0 : _xmlDoc$querySelector.textContent) || '';
        var description = ((_xmlDoc$querySelector2 = xmlDoc.querySelector('Description')) === null || _xmlDoc$querySelector2 === void 0 ? void 0 : _xmlDoc$querySelector2.textContent) || '';
        var duration = ((_xmlDoc$querySelector3 = xmlDoc.querySelector('Duration')) === null || _xmlDoc$querySelector3 === void 0 ? void 0 : _xmlDoc$querySelector3.textContent) || '';
        var adSystem = ((_xmlDoc$querySelector4 = xmlDoc.querySelector('AdSystem')) === null || _xmlDoc$querySelector4 === void 0 ? void 0 : _xmlDoc$querySelector4.textContent) || '';
        var skipOffset = ((_xmlDoc$querySelector5 = xmlDoc.querySelector('Linear')) === null || _xmlDoc$querySelector5 === void 0 ? void 0 : _xmlDoc$querySelector5.getAttribute('skipoffset')) || '';
        var mediaFile = ((_xmlDoc$querySelector6 = xmlDoc.querySelector('MediaFile')) === null || _xmlDoc$querySelector6 === void 0 ? void 0 : _xmlDoc$querySelector6.textContent) || '';
        var clickThrough = ((_xmlDoc$querySelector7 = xmlDoc.querySelector('ClickThrough')) === null || _xmlDoc$querySelector7 === void 0 ? void 0 : _xmlDoc$querySelector7.textContent) || '';
        var vastData = {
          adTitle: adTitle,
          description: description,
          duration: duration,
          adSystem: adSystem,
          skipOffset: skipOffset,
          mediaFile: mediaFile,
          clickThrough: clickThrough
        };
        this.vastData = vastData;
        return vastData;
      } catch (error) {
        console.error('Error parsing VAST XML:', error);
        return null;
      }
    },
    interceptVastRequests: function interceptVastRequests() {
      if (!this.vastUrl) return;

      // Store original methods if not already stored
      if (!this._originalXHROpen) {
        this._originalXHROpen = XMLHttpRequest.prototype.open;
        this._originalXHRSend = XMLHttpRequest.prototype.send;
      }
      var self = this;
      // Extract pathname from VAST URL for matching
      var vastUrlPattern = '';
      try {
        vastUrlPattern = new URL(this.vastUrl).pathname;
      } catch (e) {
        // If URL parsing fails, use the full URL as pattern
        vastUrlPattern = this.vastUrl;
      }

      // Intercept XMLHttpRequest to capture VAST plugin's request
      XMLHttpRequest.prototype.open = function (method, url) {
        // Check if this request is for the VAST URL
        var isVastUrl = url && (url === self.vastUrl || url.includes(vastUrlPattern) || url.includes('load/vast'));
        this._isVastRequest = isVastUrl;
        for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key3 = 2; _key3 < _len2; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }
        return self._originalXHROpen.apply(this, [method, url].concat(args));
      };
      XMLHttpRequest.prototype.send = function () {
        // Check if this is a VAST URL request
        if (this._isVastRequest) {
          var xhr = this;
          this.addEventListener('load', function () {
            if (xhr.status === 200 && xhr.responseText) {
              // Parse the VAST XML response (only once)
              if (!self.vastData) {
                self.parseVastXml(xhr.responseText);
              }
            }
          }, {
            once: true
          });
        }
        for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
          args[_key4] = arguments[_key4];
        }
        return self._originalXHRSend.apply(this, args);
      };
    },
    setupVastPlugin: function setupVastPlugin() {
      var _this2 = this;
      if (!this.vastUrl) return;

      // Pre-fetch VAST data to have it ready before ad plays
      // This runs in parallel and doesn't block plugin initialization
      this.fetchVastDataPreload().catch(function (error) {
        console.error('Failed to pre-fetch VAST data:', error);
      });

      // Also intercept XHR requests as backup (in case pre-fetch fails)
      this.interceptVastRequests();
      var skipButtonOptions = {
        text: 'رد کردن'
      };
      // Initialize VAST plugin immediately (must be done synchronously)
      var vastVjsOptions = {
        vastUrl: this.vastUrl,
        playAdAlways: true,
        withCredentials: false,
        mediaFileRegex: /.*/,
        addCtaClickZone: false,
        timeout: 5,
        skipButtonOptions: skipButtonOptions
      };
      this.player.vast(vastVjsOptions);
      this.setupVastCtaButton();

      // Setup ad events right after VAST plugin initialization
      // Always use player.ready() as it's idempotent - will call immediately if already ready
      this.player.ready(function () {
        // Use nextTick to ensure VAST plugin is fully initialized
        _this2.$nextTick(function () {
          _this2.setupAdEvents();
        });
      });

      // Listen for when ad starts to add icon to skip button
      this.player.on('vast.play', function () {
        // Add icon immediately and keep checking
        _this2.addSkipButtonIcon();
        // Also check periodically in case button is recreated
        var iconCheckInterval = setInterval(function () {
          var button = document.getElementById('videojs-vast-skipButton');
          if (button && !button.querySelector('.fa-chevron-left')) {
            _this2.addSkipButtonIcon();
          }
        }, 200);
        // Stop checking after 10 seconds
        setTimeout(function () {
          return clearInterval(iconCheckInterval);
        }, 10000);
      });
    },
    addSkipButtonIcon: function addSkipButtonIcon() {
      var _this$player;
      // Function to add icon to skip button
      var addIcon = function addIcon(button) {
        if (!button) return false;

        // Check if icon already exists
        if (button.querySelector('.fa-chevron-left')) {
          return true;
        }

        // Get current text content
        var textContent = button.textContent || button.innerText || '';

        // Create icon element
        // const icon = document.createElement('i')
        // icon.className = 'fa fa-chevron-left'
        // icon.style.marginRight = '8px'
        // icon.style.fontSize = '14px'
        // icon.style.display = 'inline-block'
        // icon.style.verticalAlign = 'middle'

        // Clear button content and rebuild with icon + text
        button.innerHTML = '';
        // button.appendChild(icon)

        // Add text node
        var textNode = document.createTextNode(textContent);
        button.appendChild(textNode);
        return true;
      };

      // Try immediately
      var skipButton = document.getElementById('videojs-vast-skipButton');
      if (skipButton) {
        addIcon(skipButton);
        return;
      }

      // If button doesn't exist, use MutationObserver + aggressive polling
      var playerEl = (_this$player = this.player) === null || _this$player === void 0 ? void 0 : _this$player.el();
      if (playerEl) {
        var observer = new MutationObserver(function () {
          var button = document.getElementById('videojs-vast-skipButton');
          if (button && !button.querySelector('.fa-chevron-left')) {
            addIcon(button);
          }
        });
        observer.observe(playerEl, {
          childList: true,
          subtree: true,
          attributes: false
        });

        // Aggressive polling as backup
        var pollInterval = setInterval(function () {
          var button = document.getElementById('videojs-vast-skipButton');
          if (button && !button.querySelector('.fa-chevron-left')) {
            addIcon(button);
          }
        }, 50); // Check every 50ms

        // Clean up after 10 seconds
        setTimeout(function () {
          observer.disconnect();
          if (pollInterval) clearInterval(pollInterval);
        }, 10000);
      }
    },
    fetchVastDataPreload: function fetchVastDataPreload() {
      var _this3 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, xmlText, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(!_this3.vastUrl || _this3.vastData)) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              _context.prev = 1;
              _context.next = 2;
              return fetch(_this3.vastUrl);
            case 2:
              response = _context.sent;
              _context.next = 3;
              return response.text();
            case 3:
              xmlText = _context.sent;
              _this3.parseVastXml(xmlText);
              _context.next = 5;
              break;
            case 4:
              _context.prev = 4;
              _t = _context["catch"](1);
              console.error('Error pre-fetching VAST data:', _t);
              // Don't throw - interceptor will catch it as backup
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 4]]);
      }))();
    },
    setupVastCtaButton: function setupVastCtaButton() {
      var _this4 = this;
      var ctaBtn = document.getElementById('vast-cta-btn');
      if (!ctaBtn) return;
      var updateCtaButton = function updateCtaButton(ctaUrl, adClickCallback, adTitle) {
        var _this4$vastData, _this4$vastData2;
        // Use parsed VAST data if available, otherwise fall back to event data
        var finalAdTitle = ((_this4$vastData = _this4.vastData) === null || _this4$vastData === void 0 ? void 0 : _this4$vastData.adTitle) || adTitle || 'اطلاعات بیشتر';
        ctaBtn.innerText = finalAdTitle;

        // Use clickThrough from parsed VAST data if available, otherwise use ctaUrl from event
        var finalCtaUrl = ((_this4$vastData2 = _this4.vastData) === null || _this4$vastData2 === void 0 ? void 0 : _this4$vastData2.clickThrough) || ctaUrl;
        if (finalCtaUrl) {
          ctaBtn.style.display = 'block';
          ctaBtn.onclick = function () {
            if (adClickCallback) {
              adClickCallback();
            }
            window.open(finalCtaUrl, '_blank');
          };
        }
      };
      this.player.on('vast.play', function (e, _ref) {
        var ctaUrl = _ref.ctaUrl,
          adClickCallback = _ref.adClickCallback,
          adTitle = _ref.adTitle;
        updateCtaButton(ctaUrl, adClickCallback, adTitle);

        // If vastData is not ready yet, check periodically and update when available
        if (!_this4.vastData) {
          var checkInterval = setInterval(function () {
            if (_this4.vastData) {
              updateCtaButton(ctaUrl, adClickCallback, adTitle);
              clearInterval(checkInterval);
            }
          }, 100);
          // Stop checking after 5 seconds
          setTimeout(function () {
            return clearInterval(checkInterval);
          }, 5000);
        }
      });
      var hideCta = function hideCta() {
        ctaBtn.style.display = 'none';
      };
      this.player.on('vast.complete', hideCta);
      this.player.on('vast.error', hideCta);
    },
    setupAdEvents: function setupAdEvents() {
      var _this5 = this;
      // Prevent duplicate event listeners
      if (this.adEventsSetup) {
        return;
      }
      this.adEventsSetup = true;

      // Use once() or check if events are already bound, but for now just set up
      this.player.on('vast.play', function () {
        _this5.adActive = true;
        // Hide runtime display during ads
        _this5.hideRuntimeDisplay();
        // Emit event to parent components
        _this5.$emit('ad-started', true);
      });
      this.player.on(['vast.complete', 'vast.skip'], function () {
        _this5.adActive = false;
        // Show runtime display after ads
        _this5.showRuntimeDisplay();
        // Emit event to parent components
        _this5.$emit('ad-ended', true);
      });
    },
    hideRuntimeDisplay: function hideRuntimeDisplay() {
      if (this.runtimeDisplayComponent) {
        this.runtimeDisplayComponent.hide();
      }
      // Also hide via CSS class
      var runtimeEl = this.player.el().querySelector('.vjs-runtime-display');
      if (runtimeEl) {
        runtimeEl.style.display = 'none';
      }
      // Hide timer element during ads
      var timerEl = document.getElementById("".concat(this.playerid, "-timer"));
      if (timerEl) {
        timerEl.style.display = 'none';
      }
    },
    showRuntimeDisplay: function showRuntimeDisplay() {
      if (this.runtimeDisplayComponent) {
        this.runtimeDisplayComponent.show();
      }
      // Also show via CSS class
      var runtimeEl = this.player.el().querySelector('.vjs-runtime-display');
      if (runtimeEl) {
        runtimeEl.style.display = '';
      }
      // Show timer element after ads
      var timerEl = document.getElementById("".concat(this.playerid, "-timer"));
      if (timerEl) {
        timerEl.style.display = '';
      }
    },
    // ============================================
    // Text Tracks & Subtitles - FIXED
    // ============================================
    setupTextTracks: function setupTextTracks() {
      var _this$tracks,
        _this6 = this,
        _localStorage$getItem,
        _ref2,
        _ref3;
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!((_this$tracks = this.tracks) !== null && _this$tracks !== void 0 && _this$tracks.length)) return;
      if (this.subtitleTracksInitialized && !force) return;

      // Clear any existing tracks first
      var existingTracks = this.player.remoteTextTracks();
      for (var i = existingTracks.length - 1; i >= 0; i--) {
        this.player.removeRemoteTextTrack(existingTracks[i]);
      }

      // Add new tracks
      this.tracks.forEach(function (track) {
        var textTrack = _this6.player.addRemoteTextTrack({
          kind: track.kind,
          src: track.src,
          label: track.label,
          srclang: track.language || '',
          default: track.default || false
        }, false);

        // Set initial mode based on default flag
        // we'll set modes after adding all tracks according to audio rules
        textTrack.track.mode = 'disabled';
      });

      // Decide which subtitle should be active based on current audio selection
      // Main language is FA. Rules:
      // - If current audio is FA => subtitles OFF
      // - Else if a FA subtitle exists => enable FA subtitle
      // - Else fall back to provided default flags
      var faSubtitleIndex = -1;
      for (var _i = 0; _i < this.tracks.length; _i++) {
        var t = this.tracks[_i];
        var lang = (t.language || t.label || '').toString().toLowerCase();
        if (lang === 'fa' || lang === 'farsi' || lang.includes('fa')) {
          faSubtitleIndex = _i;
          break;
        }
      }
      var textTracks = this.player.textTracks();

      // Simple approach: If subtitles exist, enable them automatically
      // Only disable if user explicitly selected FA audio (from persisted selection or URL)
      var isExplicitFA = this.currentAudioLang && this.currentAudioLang.toString().toLowerCase() === 'fa' && (
      // Check if FA was explicitly selected (persisted or in URL)
      ((_localStorage$getItem = localStorage.getItem("".concat(this.playerid, "-audioLang"))) === null || _localStorage$getItem === void 0 ? void 0 : _localStorage$getItem.toLowerCase()) === 'fa' || ((_ref2 = this.currentStream || this.stream) === null || _ref2 === void 0 ? void 0 : _ref2.includes('audio[FA]')) || ((_ref3 = this.currentStream || this.stream) === null || _ref3 === void 0 ? void 0 : _ref3.includes('audio[fa]')));
      if (isExplicitFA && textTracks.length > 0) {
        // User explicitly selected FA audio, disable subtitles

        for (var _i2 = 0; _i2 < textTracks.length; _i2++) {
          textTracks[_i2].mode = 'disabled';
        }
        this.currentSubtitle = null;
      } else if (textTracks.length > 0) {
        // Subtitles exist - enable them automatically
        // Prefer FA subtitle if available, otherwise enable first available
        if (faSubtitleIndex !== -1) {
          // Enable FA subtitle if available

          for (var _i3 = 0; _i3 < textTracks.length; _i3++) {
            textTracks[_i3].mode = _i3 === faSubtitleIndex ? 'showing' : 'disabled';
          }
          this.currentSubtitle = faSubtitleIndex;
        } else {
          // No FA subtitle, check for default flag first
          var foundDefault = false;
          for (var _i4 = 0; _i4 < this.tracks.length; _i4++) {
            if (this.tracks[_i4].default) {
              textTracks[_i4].mode = 'showing';
              this.currentSubtitle = _i4;
              for (var j = 0; j < textTracks.length; j++) {
                if (j !== _i4) {
                  textTracks[j].mode = 'disabled';
                }
              }
              foundDefault = true;
              break;
            }
          }
          if (!foundDefault) {
            // Enable first available subtitle

            textTracks[0].mode = 'showing';
            this.currentSubtitle = 0;
            for (var _i5 = 1; _i5 < textTracks.length; _i5++) {
              textTracks[_i5].mode = 'disabled';
            }
          }
        }
      } else {
        // No subtitles available
        this.currentSubtitle = null;
      }
      this.subtitleTracksInitialized = true;
    },
    // ============================================
    // Custom Buttons Setup
    // ============================================
    setupCustomButtons: function setupCustomButtons() {
      this.createRuntimeDisplay();
      if (this.hasPlaylist) {
        this.createPlaylistButton();
      }
      this.createNextButton();
      this.createPipButton();
      this.createSettingsButton();
      if (this.isRtl) {
        this.createCustomRTLVolumeControl();
      }
      if (this.showAutoPlayToggle) {
        this.createSkipButtons();
      }
    },
    getFullscreenInsertIndex: function getFullscreenInsertIndex() {
      var fullscreenToggle = this.player.controlBar.getChild('fullscreenToggle');
      var fullscreenIndex = this.player.controlBar.children().indexOf(fullscreenToggle);
      return fullscreenIndex === -1 ? this.player.controlBar.children().length - 1 : fullscreenIndex;
    },
    // ============================================
    // Button Creation Methods
    // ============================================
    createNextButton: function createNextButton() {
      var Button = video_es["default"].getComponent('Button');
      var iconSrc = nextIcon;
      var NextButton = /*#__PURE__*/function (_Button) {
        function NextButton(player, options) {
          var _this7;
          Object(classCallCheck["a" /* default */])(this, NextButton);
          _this7 = _callSuper(this, NextButton, [player, options]);
          _this7.addClass('vjs-next-button');
          _this7.addClass('vjs-custom-icon-button');
          _this7.controlText('قسمت بعد');
          var img = document.createElement('img');
          img.src = iconSrc;
          img.className = 'vjs-button-icon';
          _this7.el().appendChild(img);
          return _this7;
        }
        Object(inherits["a" /* default */])(NextButton, _Button);
        return Object(createClass["a" /* default */])(NextButton, [{
          key: "handleClick",
          value: function handleClick() {
            this.player().trigger('ended');
          }
        }]);
      }(Button);
      video_es["default"].registerComponent('NextButton', NextButton);
      this.player.controlBar.addChild('NextButton', {}, this.getFullscreenInsertIndex());
    },
    createPipButton: function createPipButton() {
      var Button = video_es["default"].getComponent('Button');
      var PipButton = /*#__PURE__*/function (_Button2) {
        function PipButton(player, options) {
          var _this8;
          Object(classCallCheck["a" /* default */])(this, PipButton);
          _this8 = _callSuper(this, PipButton, [player, options]);
          _this8.addClass('vjs-pip-button');
          _this8.controlText('تصویر در تصویر');
          var icon = document.createElement('span');
          icon.className = 'vjs-icon-pip';
          icon.innerHTML = '<i class="fa fa-clone"></i>';
          _this8.el().appendChild(icon);
          return _this8;
        }
        Object(inherits["a" /* default */])(PipButton, _Button2);
        return Object(createClass["a" /* default */])(PipButton, [{
          key: "handleClick",
          value: function handleClick() {
            var videoElement = this.player().el().querySelector('video');
            if (!videoElement) return;
            if (document.pictureInPictureElement) {
              document.exitPictureInPicture();
            } else if (videoElement.requestPictureInPicture) {
              videoElement.requestPictureInPicture().catch(function (error) {
                console.error('Picture-in-Picture error:', error);
              });
            }
          }
        }]);
      }(Button);
      video_es["default"].registerComponent('PipButton', PipButton);
      this.player.controlBar.addChild('PipButton', {}, this.getFullscreenInsertIndex());
    },
    createSettingsButton: function createSettingsButton() {
      var Button = video_es["default"].getComponent('Button');
      var self = this;
      var iconSrc = settingIcon;
      var SettingsButton = /*#__PURE__*/function (_Button3) {
        function SettingsButton(player, options) {
          var _this9;
          Object(classCallCheck["a" /* default */])(this, SettingsButton);
          _this9 = _callSuper(this, SettingsButton, [player, options]);
          _this9.addClass('vjs-settings-button');
          _this9.addClass('vjs-custom-icon-button');
          _this9.controlText('تنظیمات');
          var img = document.createElement('img');
          img.src = iconSrc;
          img.className = 'vjs-button-icon';
          _this9.el().appendChild(img);
          return _this9;
        }
        Object(inherits["a" /* default */])(SettingsButton, _Button3);
        return Object(createClass["a" /* default */])(SettingsButton, [{
          key: "handleClick",
          value: function handleClick() {
            self.toggleSettingsDrawer();
          }
        }]);
      }(Button);
      video_es["default"].registerComponent('SettingsButton', SettingsButton);
      this.player.controlBar.addChild('SettingsButton', {}, this.getFullscreenInsertIndex());
    },
    // ============================================
    // Settings Drawer Methods - FIXED SUBTITLE MANAGEMENT
    // ============================================
    toggleSettingsDrawer: function toggleSettingsDrawer() {
      this.showSettingsDrawer = !this.showSettingsDrawer;
      if (this.showSettingsDrawer) {
        this.settingsDrawerView = 'main';
      }
    },
    closeSettingsDrawer: function closeSettingsDrawer() {
      this.showSettingsDrawer = false;
      this.settingsDrawerView = 'main';
    },
    backToMain: function backToMain() {
      this.settingsDrawerView = 'main';
    },
    openSpeedSettings: function openSpeedSettings() {
      this.settingsDrawerView = 'speed';
    },
    openSubtitleSettings: function openSubtitleSettings() {
      this.settingsDrawerView = 'subtitle';
    },
    openQualitySettings: function openQualitySettings() {
      this.settingsDrawerView = 'quality';
    },
    getSpeedLabel: function getSpeedLabel() {
      var _this0 = this;
      var rate = _PLAYBACK_RATES.find(function (r) {
        return r.value === _this0.currentPlaybackRate;
      });
      return rate ? rate.label : '۱x (عادی)';
    },
    getSubtitleLabel: function getSubtitleLabel() {
      var _this1 = this;
      if (this.currentSubtitle === null) return 'خاموش';
      var tracks = this.getSubtitleTracks();
      var track = tracks.find(function (t) {
        return t.index === _this1.currentSubtitle;
      });
      return (track === null || track === void 0 ? void 0 : track.label) || 'خاموش';
    },
    getQualityLabel: function getQualityLabel() {
      return QUALITY_MAP[this.currentQuality] || 'خودکار';
    },
    isSpeedActive: function isSpeedActive(value) {
      return Math.abs(this.currentPlaybackRate - value) < 0.01;
    },
    selectSpeed: function selectSpeed(value) {
      this.currentPlaybackRate = value;
      if (this.player) {
        this.player.playbackRate(value);
      }
      this.closeSettingsDrawer();
    },
    getSubtitleTracks: function getSubtitleTracks() {
      if (!this.player) return [];
      var textTracks = this.player.textTracks();
      var trackList = [];
      for (var i = 0; i < textTracks.length; i++) {
        var track = textTracks[i];
        if (track.kind === 'subtitles' || track.kind === 'captions') {
          var displayLabel = LANGUAGE_MAP[track.language] || track.label || "\u0632\u0628\u0627\u0646 ".concat(i + 1);
          trackList.push({
            label: displayLabel,
            language: track.language,
            index: i
          });
        }
      }
      return trackList;
    },
    selectSubtitle: function selectSubtitle(index) {
      // Update current subtitle state
      this.currentSubtitle = index;
      if (this.player) {
        var textTracks = this.player.textTracks();

        // Disable all tracks first
        for (var i = 0; i < textTracks.length; i++) {
          textTracks[i].mode = 'disabled';
        }

        // Enable selected track if not null
        if (index !== null && textTracks[index]) {
          textTracks[index].mode = 'showing';
        }
      }
      this.closeSettingsDrawer();
    },
    getAvailableQualities: function getAvailableQualities() {
      return [{
        value: 'auto',
        label: 'خودکار'
      }, {
        value: '1080p',
        label: '۱۰۸۰p - Full HD'
      }, {
        value: '720p',
        label: '۷۲۰p - HD'
      }, {
        value: '480p',
        label: '۴۸۰p - SD'
      }, {
        value: '360p',
        label: '۳۶۰p'
      }];
    },
    isQualityActive: function isQualityActive(value) {
      return this.currentQuality === value;
    },
    selectQuality: function selectQuality(value) {
      var skipDrawerClose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.currentQuality = value;

      // Persist quality selection to localStorage
      try {
        localStorage.setItem("".concat(this.playerid, "-quality"), value);
      } catch (e) {
        console.warn('Error saving quality to localStorage:', e);
      }
      if (!this.player) {
        if (!skipDrawerClose) {
          this.closeSettingsDrawer();
        }
        return;
      }

      // Try to access quality levels through the player's qualityLevels API (from videojs-hls-quality-selector)
      if (this.player.qualityLevels && typeof this.player.qualityLevels === 'function') {
        try {
          var levels = this.player.qualityLevels();
          if (levels && levels.length > 0) {
            if (value === 'auto') {
              // Enable all levels for auto mode
              for (var i = 0; i < levels.length; i++) {
                var level = levels[i];
                // Handle both property and method forms
                if (typeof level.enabled === 'function') {
                  level.enabled(true);
                } else {
                  level.enabled = true;
                }
              }
            } else {
              // Extract the numeric height from value (e.g., '1080p' -> 1080)
              var targetHeight = parseInt(value.replace('p', ''));
              var foundMatch = false;
              var targetLevelIndex = null;

              // First, disable all levels
              for (var _i6 = 0; _i6 < levels.length; _i6++) {
                var _level = levels[_i6];
                // Handle both property and method forms
                if (typeof _level.enabled === 'function') {
                  _level.enabled(false);
                } else {
                  _level.enabled = false;
                }
              }

              // Find exact match first
              for (var _i7 = 0; _i7 < levels.length; _i7++) {
                var _level2 = levels[_i7];
                var height = _level2.height;
                if (height === targetHeight) {
                  // Handle both property and method forms
                  if (typeof _level2.enabled === 'function') {
                    _level2.enabled(true);
                  } else {
                    _level2.enabled = true;
                  }
                  foundMatch = true;
                  targetLevelIndex = _i7;
                  break;
                }
              }

              // If no exact match found, enable the closest lower quality
              if (!foundMatch && targetHeight) {
                var closestLevel = null;
                var closestDiff = Infinity;
                for (var _i8 = 0; _i8 < levels.length; _i8++) {
                  var _height = levels[_i8].height;
                  if (_height && _height <= targetHeight) {
                    var diff = targetHeight - _height;
                    if (diff < closestDiff) {
                      closestDiff = diff;
                      closestLevel = _i8;
                    }
                  }
                }
                if (closestLevel !== null) {
                  var _level3 = levels[closestLevel];
                  // Handle both property and method forms
                  if (typeof _level3.enabled === 'function') {
                    _level3.enabled(true);
                  } else {
                    _level3.enabled = true;
                  }
                  targetLevelIndex = closestLevel;
                }
              }

              // The enabled state change should trigger automatic quality switch
              // The player will switch on the next segment boundary automatically
              // For immediate feedback, we can try to access VHS and ensure the change is applied
              if (targetLevelIndex !== null) {
                try {
                  var tech = this.player.tech({
                    IWillNotUseThisInPlugins: true
                  });
                  if (tech && tech.vhs) {
                    // Trigger a quality change event to notify the player
                    // This helps ensure the player picks up the change immediately
                    if (tech.vhs.trigger) {
                      tech.vhs.trigger('qualitychange');
                    }
                    // Also try to access masterPlaylistController if available
                    if (tech.vhs.masterPlaylistController_) {
                      var mpc = tech.vhs.masterPlaylistController_;
                      // Force an update to the playlist controller
                      if (mpc.trigger) {
                        mpc.trigger('representationschange');
                      }
                    }
                  }
                } catch (e) {
                  // If triggering events fails, the enabled state change should still work
                  // The player will switch on the next segment boundary
                }
              }
            }
            if (!skipDrawerClose) {
              this.closeSettingsDrawer();
            }
            return;
          }
        } catch (error) {
          console.warn('Error accessing qualityLevels API:', error);
        }
      }

      // Fallback: Access quality levels through HLS tech object (VHS)
      try {
        var _tech = this.player.tech({
          IWillNotUseThisInPlugins: true
        });
        if (_tech && _tech.vhs && _tech.vhs.representations) {
          var representations = _tech.vhs.representations();
          if (representations && representations.length > 0) {
            if (value === 'auto') {
              // Enable all representations for auto mode
              representations.forEach(function (rep) {
                rep.enabled(true);
              });
            } else {
              // Extract the numeric height from value (e.g., '1080p' -> 1080)
              var _targetHeight = parseInt(value.replace('p', ''));
              var _foundMatch = false;
              var targetRep = null;

              // First, disable all representations
              representations.forEach(function (rep) {
                rep.enabled(false);
              });

              // Find and enable the matching representation
              representations.forEach(function (rep) {
                var height = rep.height;
                if (height === _targetHeight) {
                  rep.enabled(true);
                  _foundMatch = true;
                  targetRep = rep;
                }
              });

              // If no exact match found, enable the closest lower quality
              if (!_foundMatch && _targetHeight) {
                var closestRep = null;
                var _closestDiff = Infinity;
                representations.forEach(function (rep) {
                  var height = rep.height;
                  if (height && height <= _targetHeight) {
                    var _diff = _targetHeight - height;
                    if (_diff < _closestDiff) {
                      _closestDiff = _diff;
                      closestRep = rep;
                    }
                  }
                });
                if (closestRep) {
                  closestRep.enabled(true);
                  targetRep = closestRep;
                }
              }

              // The enabled state change should trigger automatic quality switch
              // The player will switch on the next segment boundary automatically
              // For immediate feedback, we can trigger events to notify the player
              if (targetRep) {
                try {
                  // Trigger quality change events to help the player pick up the change
                  if (_tech.vhs && _tech.vhs.trigger) {
                    _tech.vhs.trigger('qualitychange');
                  }
                  // Also try to access masterPlaylistController if available
                  if (_tech.vhs && _tech.vhs.masterPlaylistController_) {
                    var _mpc = _tech.vhs.masterPlaylistController_;
                    // Force an update to the playlist controller
                    if (_mpc.trigger) {
                      _mpc.trigger('representationschange');
                    }
                  }
                } catch (e) {
                  // If triggering events fails, the enabled state change should still work
                  console.warn('Error triggering quality change events:', e);
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('Error switching quality through VHS:', error);
      }
      if (!skipDrawerClose) {
        this.closeSettingsDrawer();
      }
    },
    // ============================================
    // REMOVED LEGACY MENU METHODS
    // All subtitle management is now handled through the settings drawer only
    // ============================================
    createCustomRTLVolumeControl: function createCustomRTLVolumeControl() {
      // Remove default volume panel
      var volumePanel = this.player.controlBar.getChild('volumePanel');
      if (volumePanel) {
        this.player.controlBar.removeChild(volumePanel);
      }
      var Component = video_es["default"].getComponent('Component');
      var CustomRTLVolumeControl = /*#__PURE__*/function (_Component) {
        function CustomRTLVolumeControl(player, options) {
          var _this10;
          Object(classCallCheck["a" /* default */])(this, CustomRTLVolumeControl);
          _this10 = _callSuper(this, CustomRTLVolumeControl, [player, options]);
          _this10.addClass('vjs-custom-rtl-volume');
          _this10.volumeLevel = player.volume();
          _this10.isDragging = false;
          _this10.touchHandled = false; // Flag to prevent double-firing on mobile
          _this10.createVolumeElements();
          _this10.attachEventHandlers();
          _this10.updateVolumeDisplay();
          _this10.updateMuteIcon(); // Call this immediately to set initial icon

          // Listen to player volume changes
          player.on('volumechange', function () {
            _this10.volumeLevel = player.volume();
            _this10.updateVolumeDisplay();
            _this10.updateMuteIcon();
          });
          return _this10;
        }
        Object(inherits["a" /* default */])(CustomRTLVolumeControl, _Component);
        return Object(createClass["a" /* default */])(CustomRTLVolumeControl, [{
          key: "saveVolumeState",
          value: function saveVolumeState() {
            try {
              var playerId = this.player().id();
              var volumeState = {
                volume: this.player().volume(),
                muted: this.player().muted()
              };
              localStorage.setItem("".concat(playerId, "-volumeState"), JSON.stringify(volumeState));
            } catch (e) {
              console.warn('[VideoPlayer] Error saving volume state in control:', e);
            }
          }
        }, {
          key: "createVolumeElements",
          value: function createVolumeElements() {
            this.el().innerHTML = "\n        <button class=\"vjs-rtl-volume-button vjs-control vjs-button vjs-custom-icon-button\" type=\"button\">\n          <img class=\"vjs-button-icon\" />\n        </button>\n        <div class=\"vjs-rtl-volume-control vjs-control\">\n          <div class=\"vjs-rtl-volume-bar\">\n            <div class=\"vjs-rtl-volume-level\">\n              <span class=\"vjs-rtl-volume-handle\"></span>\n            </div>\n          </div>\n        </div>\n      ";
          }
        }, {
          key: "attachEventHandlers",
          value: function attachEventHandlers() {
            var _this11 = this;
            var button = this.el().querySelector('.vjs-rtl-volume-button');
            var volumeControl = this.el().querySelector('.vjs-rtl-volume-control');
            var volumeBar = this.el().querySelector('.vjs-rtl-volume-bar');

            // Safety check: ensure button exists
            if (!button) {
              console.warn('[VideoPlayer] Volume button not found');
              return;
            }

            // Toggle mute/unmute function - uses muted() for proper toggle
            var toggleMute = function toggleMute(e) {
              if (e) {
                e.stopPropagation();
                e.preventDefault();
              }
              var player = _this11.player();
              if (player.muted()) {
                // Unmute: restore previous volume or default to 0.5
                player.muted(false);
                if (_this11.lastVolume && _this11.lastVolume > 0) {
                  player.volume(_this11.lastVolume);
                } else if (player.volume() === 0) {
                  player.volume(0.5);
                }
              } else {
                // Mute: save current volume and mute
                _this11.lastVolume = player.volume();
                player.muted(true);
              }
              _this11.saveVolumeState();
              // Update icon immediately for instant visual feedback
              _this11.updateMuteIcon();
            };

            // Simple and reliable mobile touch handling
            // Direct touch event handling for mobile devices
            var touchStartTime = 0;

            // Touch start - capture timestamp
            button.addEventListener('touchstart', function () {
              touchStartTime = Date.now();
              _this11.touchHandled = false;
            }, {
              passive: true
            });

            // Touch end - handle toggle directly
            button.addEventListener('touchend', function (e) {
              var touchDuration = Date.now() - touchStartTime;
              // Simple tap: any touch under 500ms is considered a tap
              if (touchDuration < 500) {
                _this11.touchHandled = true;
                toggleMute(e);
                e.preventDefault();
                e.stopPropagation();

                // Prevent click event from firing on mobile
                setTimeout(function () {
                  _this11.touchHandled = false;
                }, 300);
              }
            }, {
              passive: false
            });

            // Desktop click handling
            button.addEventListener('click', function (e) {
              // Only handle click if touch wasn't already handled (prevents double-firing on mobile)
              if (!_this11.touchHandled) {
                toggleMute(e);
              }
              // Reset flag for next interaction
              _this11.touchHandled = false;
            });

            // Show/hide volume bar on hover
            this.el().addEventListener('mouseenter', function () {
              volumeControl.classList.add('vjs-slider-active');
            });
            this.el().addEventListener('mouseleave', function () {
              if (!_this11.isDragging) {
                volumeControl.classList.remove('vjs-slider-active');
              }
            });

            // Volume bar interactions
            volumeBar.addEventListener('mousedown', function (e) {
              _this11.isDragging = true;
              _this11.updateVolumeFromEvent(e);
              var onMouseMove = function onMouseMove(e) {
                if (_this11.isDragging) {
                  _this11.updateVolumeFromEvent(e);
                }
              };
              var _onMouseUp = function onMouseUp() {
                _this11.isDragging = false;
                volumeControl.classList.remove('vjs-slider-active');
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', _onMouseUp);
              };
              document.addEventListener('mousemove', onMouseMove);
              document.addEventListener('mouseup', _onMouseUp);
            });

            // Click on volume bar
            volumeBar.addEventListener('click', function (e) {
              _this11.updateVolumeFromEvent(e);
            });
          }
        }, {
          key: "updateVolumeFromEvent",
          value: function updateVolumeFromEvent(e) {
            var volumeBar = this.el().querySelector('.vjs-rtl-volume-bar');
            var rect = volumeBar.getBoundingClientRect();

            // Calculate from left to right (0% to 100%)
            var position = (e.clientX - rect.left) / rect.width;
            position = Math.max(0, Math.min(1, position));
            this.volumeLevel = position;
            this.player().volume(position);
            this.saveVolumeState();
          }
        }, {
          key: "updateVolumeDisplay",
          value: function updateVolumeDisplay() {
            var volumeLevel = this.el().querySelector('.vjs-rtl-volume-level');
            if (volumeLevel) {
              var percentage = this.volumeLevel * 100;
              volumeLevel.style.width = "".concat(percentage, "%");
            }
          }
        }, {
          key: "updateMuteIcon",
          value: function updateMuteIcon() {
            var button = this.el().querySelector('.vjs-rtl-volume-button');
            var img = this.el().querySelector('.vjs-button-icon');
            if (button && img) {
              var player = this.player();
              var isMuted = player.muted();

              // Show mute/unmute icon based on muted state
              if (isMuted) {
                img.src = volumeOffIcon;
                img.alt = 'Unmute';
              } else {
                // When unmuted, show volume icon based on level
                var volume = player.volume();
                if (volume < 0.5) {
                  img.src = volumeDownIcon;
                } else {
                  img.src = volumeIcon;
                }
                img.alt = 'Mute';
              }
            }
          }
        }, {
          key: "createEl",
          value: function createEl() {
            return video_es["default"].dom.createEl('div', {
              className: 'vjs-custom-rtl-volume vjs-volume-panel vjs-control vjs-volume-panel-horizontal'
            });
          }
        }]);
      }(Component);
      video_es["default"].registerComponent('CustomRTLVolumeControl', CustomRTLVolumeControl);

      // Add to control bar after next10 button (or after play button if no next10)
      var next10Button = this.player.controlBar.getChild('Next10Button');
      var playToggle = this.player.controlBar.getChild('playToggle');
      var insertIndex;
      if (next10Button) {
        insertIndex = this.player.controlBar.children().indexOf(next10Button) + 1;
      } else if (playToggle) {
        insertIndex = this.player.controlBar.children().indexOf(playToggle) + 1;
      } else {
        insertIndex = 1;
      }
      var volumeControl = this.player.controlBar.addChild('CustomRTLVolumeControl', {}, insertIndex);

      // Force initial icon update after component is created
      setTimeout(function () {
        if (volumeControl && volumeControl.updateMuteIcon) {
          volumeControl.updateMuteIcon();
        }
      }, 100);
    },
    createPlaylistButton: function createPlaylistButton() {
      var _this13 = this;
      var Button = video_es["default"].getComponent('Button');
      var iconSrc = episodesIcon;
      var PlaylistButton = /*#__PURE__*/function (_Button4) {
        function PlaylistButton(player, options) {
          var _this12;
          Object(classCallCheck["a" /* default */])(this, PlaylistButton);
          _this12 = _callSuper(this, PlaylistButton, [player, options]);
          _this12.addClass('vjs-playlist-button');
          _this12.addClass('vjs-custom-icon-button');
          _this12.controlText('انتخاب فصل و قسمت');
          var img = document.createElement('img');
          img.src = iconSrc;
          img.className = 'vjs-button-icon';
          _this12.el().appendChild(img);
          return _this12;
        }
        Object(inherits["a" /* default */])(PlaylistButton, _Button4);
        return Object(createClass["a" /* default */])(PlaylistButton, [{
          key: "handleClick",
          value: function handleClick() {
            this.player().trigger('playlistButtonClick');
          }
        }]);
      }(Button);
      video_es["default"].registerComponent('PlaylistButton', PlaylistButton);
      this.player.controlBar.addChild('PlaylistButton', {}, this.player.controlBar.children().length - 1);
      this.player.on('playlistButtonClick', function () {
        _this13.$emit('playlistButtonClick');
      });
    },
    createSkipButtons: function createSkipButtons() {
      // Don't add skip buttons on mobile
      if (this.isMobile) {
        return;
      }
      var Button = video_es["default"].getComponent('Button');
      var Prev10Button = /*#__PURE__*/function (_Button5) {
        function Prev10Button(player, options) {
          var _this14;
          Object(classCallCheck["a" /* default */])(this, Prev10Button);
          _this14 = _callSuper(this, Prev10Button, [player, options]);
          _this14.addClass('vjs-prev10-button');
          _this14.controlText('10 ثانیه قبل');
          var icon = document.createElement('img');
          icon.src = prev10Icon;
          icon.style.width = '20px';
          icon.style.height = '20px';
          icon.alt = '10 seconds back';
          _this14.el().appendChild(icon);
          return _this14;
        }
        Object(inherits["a" /* default */])(Prev10Button, _Button5);
        return Object(createClass["a" /* default */])(Prev10Button, [{
          key: "handleClick",
          value: function handleClick() {
            var current = this.player().currentTime();
            this.player().currentTime(Math.max(current - 10, 0));
          }
        }]);
      }(Button);
      var Next10Button = /*#__PURE__*/function (_Button6) {
        function Next10Button(player, options) {
          var _this15;
          Object(classCallCheck["a" /* default */])(this, Next10Button);
          _this15 = _callSuper(this, Next10Button, [player, options]);
          _this15.addClass('vjs-next10-button');
          _this15.controlText('10 ثانیه بعد');
          var icon = document.createElement('img');
          icon.src = next10Icon;
          icon.style.width = '20px';
          icon.style.height = '20px';
          icon.alt = '10 seconds forward';
          _this15.el().appendChild(icon);
          return _this15;
        }
        Object(inherits["a" /* default */])(Next10Button, _Button6);
        return Object(createClass["a" /* default */])(Next10Button, [{
          key: "handleClick",
          value: function handleClick() {
            var current = this.player().currentTime();
            var duration = this.player().duration();
            this.player().currentTime(Math.min(current + 10, duration));
          }
        }]);
      }(Button);
      video_es["default"].registerComponent('Prev10Button', Prev10Button);
      video_es["default"].registerComponent('Next10Button', Next10Button);
      var playToggle = this.player.controlBar.getChild('PlayToggle');
      var playToggleIndex = this.player.controlBar.children().indexOf(playToggle);
      this.player.controlBar.addChild('Prev10Button', {}, playToggleIndex);
      this.player.controlBar.addChild('Next10Button', {}, playToggleIndex + 2);
    },
    setupPlaybackEvents: function setupPlaybackEvents() {
      var _this16 = this;
      this.player.on('play', function () {
        _this16.handlePlayEvent();
      });
      this.player.on('timeupdate', function () {
        var currentTime = _this16.player.currentTime();
        var duration = _this16.player.duration();

        // Update timer display
        _this16.currentTimeFormatted = _this16.formatTime(currentTime);
        _this16.durationFormatted = _this16.formatTime(duration);
        _this16.$emit('timeupdate', {
          currentTime: currentTime,
          duration: duration,
          player: _this16.player
        });
      });
      this.player.on('ended', function () {
        if (_this16.autoPlay) {
          _this16.$emit('ended');
        }
      });
    },
    formatTime: function formatTime(seconds) {
      if (!seconds || isNaN(seconds)) return '00:00';
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor(seconds % 3600 / 60);
      var secs = Math.floor(seconds % 60);
      if (hours > 0) {
        return "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
      } else {
        return "".concat(minutes.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
      }
    },
    handlePlayEvent: function handlePlayEvent() {
      var _this17 = this;
      if (!this.viewsIncremented && this.shouldIncrementViews && this.videoid) {
        this.$axios.$post("/nocache/videos/".concat(this.videoid, "/increment-views"), {
          videotype: this.videotype
        }).then(function () {
          _this17.viewsIncremented = true;
        }).catch(function (error) {
          console.error('Error incrementing views:', error);
        });
      }
      if (this.muteOnOtherPlay) {
        this.$emit('video-played', this.playerid);
      }
    },
    customizeQualityLabels: function customizeQualityLabels() {
      var _this18 = this;
      var qualityButton = this.player.el().querySelector('.vjs-quality-selector');
      if (!qualityButton) return;
      var observer = new MutationObserver(function () {
        var menuItems = _this18.player.el().querySelectorAll('.vjs-quality-selector .vjs-menu-item');
        menuItems.forEach(function (item) {
          var text = item.textContent.trim();
          if (QUALITY_MAP[text]) {
            item.textContent = QUALITY_MAP[text];
          }
        });
      });
      observer.observe(this.player.el(), {
        childList: true,
        subtree: true
      });
    },
    // ============================================
    // Player Control Methods
    // ============================================
    play: function play() {
      var _this$player2;
      (_this$player2 = this.player) === null || _this$player2 === void 0 || _this$player2.play();
    },
    pause: function pause() {
      var _this$player3;
      (_this$player3 = this.player) === null || _this$player3 === void 0 || _this$player3.pause();
    },
    updateIcon: function updateIcon() {
      var button = this.player.controlBar.getChild('AutoPlayButton');
      button === null || button === void 0 || button.updateIcon();
    },
    // ============================================
    // Keyboard Event Handler
    // ============================================
    handleKeydown: function handleKeydown(event) {
      var _this19 = this;
      if (!this.player) return;
      var keyActions = {
        ArrowLeft: function ArrowLeft() {
          return _this19.seekBackward();
        },
        ArrowRight: function ArrowRight() {
          return _this19.seekForward();
        },
        ArrowUp: function ArrowUp() {
          return _this19.volumeUp();
        },
        ArrowDown: function ArrowDown() {
          return _this19.volumeDown();
        },
        ' ': function _() {
          return _this19.togglePlayPause(event);
        }
      };
      var action = keyActions[event.key];
      if (action) {
        action();
      }
    },
    seekBackward: function seekBackward() {
      var newTime = Math.max(this.player.currentTime() - SEEK_TIME, 0);
      this.player.currentTime(newTime);
    },
    seekForward: function seekForward() {
      var newTime = Math.min(this.player.currentTime() + SEEK_TIME, this.player.duration());
      this.player.currentTime(newTime);
    },
    // ============================================
    // Volume Persistence Methods
    // ============================================
    saveVolumeState: function saveVolumeState() {
      if (!this.player) return;
      try {
        var volumeState = {
          volume: this.player.volume(),
          muted: this.player.muted()
        };
        localStorage.setItem("".concat(this.playerid, "-volumeState"), JSON.stringify(volumeState));
      } catch (e) {
        console.warn('[VideoPlayer] Error saving volume state:', e);
      }
    },
    restoreVolumeState: function restoreVolumeState() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.player) return false;
      try {
        var saved = localStorage.getItem("".concat(this.playerid, "-volumeState"));
        if (!saved) return false;
        var volumeState = JSON.parse(saved);
        this.savedVolumeState = volumeState;

        // Get the actual video element - try multiple methods for compatibility
        var videoEl = null;
        try {
          // Method 1: Direct querySelector
          videoEl = this.player.el().querySelector('video');
          // Method 2: Via tech if querySelector fails
          if (!videoEl) {
            var tech = this.player.tech({
              IWillNotUseThisInPlugins: true
            });
            if (tech && tech.el_) {
              videoEl = tech.el_;
            }
          }
          // Method 3: Via player's element directly
          if (!videoEl && this.player.el_) {
            videoEl = this.player.el_;
          }
        } catch (e) {
          // Silently fail - video element might not be ready yet
        }
        var restored = false;

        // Restore volume (0-1 range)
        if (typeof volumeState.volume === 'number' && volumeState.volume >= 0 && volumeState.volume <= 1) {
          var currentVolume = this.player.volume();
          // Only restore if different or forced
          if (force || Math.abs(currentVolume - volumeState.volume) > 0.01) {
            // Set on Video.js player first
            this.player.volume(volumeState.volume);
            // Also set directly on the video element for Chrome/Safari compatibility
            if (videoEl && videoEl.tagName === 'VIDEO') {
              videoEl.volume = volumeState.volume;
            }
            restored = true;
          }
        }

        // Restore muted state
        if (typeof volumeState.muted === 'boolean') {
          var currentMuted = this.player.muted();
          // Only restore if different or forced
          if (force || currentMuted !== volumeState.muted) {
            // Set on Video.js player first
            this.player.muted(volumeState.muted);
            // Also set directly on the video element for Chrome/Safari compatibility
            if (videoEl && videoEl.tagName === 'VIDEO') {
              videoEl.muted = volumeState.muted;
            }
            restored = true;
          }
        }
        return restored;
      } catch (e) {
        console.warn('[VideoPlayer] Error restoring volume state:', e);
        return false;
      }
    },
    startVolumeRestoreMonitoring: function startVolumeRestoreMonitoring() {
      var _this20 = this;
      // Clear any existing interval
      if (this.volumeRestoreInterval) {
        clearInterval(this.volumeRestoreInterval);
      }

      // Check and restore volume state every 200ms for the first 5 seconds
      var attempts = 0;
      var maxAttempts = 25; // 25 * 200ms = 5 seconds

      this.volumeRestoreInterval = setInterval(function () {
        if (!_this20.player || attempts >= maxAttempts) {
          clearInterval(_this20.volumeRestoreInterval);
          _this20.volumeRestoreInterval = null;
          return;
        }
        attempts++;
        var restored = _this20.restoreVolumeState();

        // If we successfully restored and video is playing, we can stop early
        if (restored && !_this20.player.paused()) {
          // Continue for a bit more to ensure it sticks
          if (attempts > 5) {
            clearInterval(_this20.volumeRestoreInterval);
            _this20.volumeRestoreInterval = null;
          }
        }
      }, 200);
    },
    stopVolumeRestoreMonitoring: function stopVolumeRestoreMonitoring() {
      if (this.volumeRestoreInterval) {
        clearInterval(this.volumeRestoreInterval);
        this.volumeRestoreInterval = null;
      }
    },
    startVolumeSaveMonitoring: function startVolumeSaveMonitoring() {
      var _this21 = this;
      // Clear any existing interval
      if (this.volumeSaveInterval) {
        clearInterval(this.volumeSaveInterval);
      }

      // Save volume state every 2 seconds to catch any changes
      // This ensures we capture state even if volumechange event doesn't fire
      this.volumeSaveInterval = setInterval(function () {
        if (!_this21.player) {
          clearInterval(_this21.volumeSaveInterval);
          _this21.volumeSaveInterval = null;
          return;
        }
        _this21.saveVolumeState();
      }, 2000);
    },
    stopVolumeSaveMonitoring: function stopVolumeSaveMonitoring() {
      if (this.volumeSaveInterval) {
        clearInterval(this.volumeSaveInterval);
        this.volumeSaveInterval = null;
      }
    },
    volumeUp: function volumeUp() {
      var newVolume = Math.min(this.player.volume() + VOLUME_STEP, 1);
      this.player.volume(newVolume);
      this.saveVolumeState();
    },
    volumeDown: function volumeDown() {
      var newVolume = Math.max(this.player.volume() - VOLUME_STEP, 0);
      this.player.volume(newVolume);
      this.saveVolumeState();
    },
    togglePlayPause: function togglePlayPause(event) {
      event.preventDefault();
      this.player.paused() ? this.player.play() : this.player.pause();
    },
    createRuntimeDisplay: function createRuntimeDisplay() {
      var Component = video_es["default"].getComponent('Component');
      var RuntimeDisplay = /*#__PURE__*/function (_Component2) {
        function RuntimeDisplay() {
          Object(classCallCheck["a" /* default */])(this, RuntimeDisplay);
          return _callSuper(this, RuntimeDisplay, arguments);
        }
        Object(inherits["a" /* default */])(RuntimeDisplay, _Component2);
        return Object(createClass["a" /* default */])(RuntimeDisplay, [{
          key: "updateText",
          value: function updateText() {
            var currentTime = this.player().currentTime();
            var duration = this.player().duration();
            var formatTime = function formatTime(seconds) {
              if (!seconds || isNaN(seconds)) return '00:00';
              var hours = Math.floor(seconds / 3600);
              var minutes = Math.floor(seconds % 3600 / 60);
              var secs = Math.floor(seconds % 60);
              if (hours > 0) {
                return "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
              } else {
                return "".concat(minutes.toString().padStart(2, '0'), ":").concat(secs.toString().padStart(2, '0'));
              }
            };
            var currentTimeFormatted = formatTime(currentTime);
            var durationFormatted = formatTime(duration);
            this.el().innerHTML = "".concat(currentTimeFormatted, " / ").concat(durationFormatted);
          }
        }]);
      }(Component);
      video_es["default"].registerComponent('RuntimeDisplay', RuntimeDisplay);
      var controlBar = this.player.controlBar;
      var volumePanel = controlBar.getChild('volumePanel');
      var fullscreenToggle = controlBar.getChild('fullscreenToggle');
      var insertIndex;
      if (volumePanel) {
        insertIndex = controlBar.children().indexOf(volumePanel) + 1;
      } else if (fullscreenToggle) {
        insertIndex = controlBar.children().indexOf(fullscreenToggle);
      } else {
        insertIndex = controlBar.children().length - 2;
      }
      this.runtimeDisplayComponent = controlBar.addChild('RuntimeDisplay', {}, insertIndex);
    },
    // ============================================
    // Credits Skip Functionality
    // ============================================
    setupCreditsSkip: function setupCreditsSkip() {
      var _this22 = this;
      if (this.creditCheckInterval) {
        clearInterval(this.creditCheckInterval);
      }
      this.creditCheckInterval = setInterval(function () {
        _this22.checkCreditsPosition();
      }, 1000);
      this.player.on('dispose', function () {
        if (_this22.creditCheckInterval) {
          clearInterval(_this22.creditCheckInterval);
        }
      });
    },
    checkCreditsPosition: function checkCreditsPosition() {
      if (!this.player || this.player.paused()) return;
      // Don't show skip credits button during VAST ads
      if (this.adActive) {
        this.showSkipCredits = false;
        this.currentCreditType = null;
        return;
      }
      var currentTime = this.player.currentTime();
      if (this.isInFirstCredits(currentTime)) {
        this.showSkipCredits = true;
        this.currentCreditType = 'first_credits';
        this.skipButtonText = 'رد کردن تیتراژ';
      } else {
        this.showSkipCredits = false;
        this.currentCreditType = null;
      }
    },
    isInFirstCredits: function isInFirstCredits(currentTime) {
      var _this$creditsData = this.creditsData,
        first_credits = _this$creditsData.first_credits,
        after_credits = _this$creditsData.after_credits;
      return first_credits >= 0 && currentTime > first_credits && currentTime < after_credits;
    },
    isInFinalCredits: function isInFinalCredits(currentTime, duration) {
      var final_credits = this.creditsData.final_credits;
      var creditsStart = final_credits > 0 ? final_credits : duration * 0.9;
      return currentTime >= creditsStart && duration > 0;
    },
    skipCredits: function skipCredits() {
      var _this23 = this;
      if (!this.player) return;
      var creditActions = {
        first_credits: function first_credits() {
          _this23.player.currentTime(_this23.creditsData.after_credits || 60);
        },
        final_credits: function final_credits() {
          var duration = _this23.player.duration();
          _this23.player.currentTime(duration - 1);
          _this23.$emit('credits-skipped', 'final_credits');
        }
      };
      var action = creditActions[this.currentCreditType];
      if (action) {
        action();
      }
      this.showSkipCredits = false;
      this.currentCreditType = null;
    },
    // ============================================
    // Auto-hide Controls Functionality
    // ============================================
    setupAutoHideControls: function setupAutoHideControls() {
      var _this24 = this;
      if (!this.player) return;
      var inactivityTimeout = null;
      var INACTIVITY_DELAY = 3000; // 3 seconds

      var hideControls = function hideControls() {
        if (!_this24.player.paused()) {
          _this24.player.userActive(false);
          // Also hide custom elements
          var titleEl = document.querySelector('.video-title-bottom');
          var timerEl = document.querySelector('.video-timer-bottom');
          var skipBtn = document.querySelector('.skip-credits-btn');
          var backBtn = document.querySelector('.back-button');
          var logoEl = document.querySelector('.site-logo');
          var controlBarEl = document.querySelector('.vjs-control-bar');
          if (titleEl) titleEl.style.opacity = '0';
          if (timerEl) timerEl.style.opacity = '0';
          if (skipBtn) skipBtn.style.opacity = '0';
          if (backBtn) backBtn.style.opacity = '0';
          if (logoEl) logoEl.style.opacity = '0';
          if (controlBarEl) controlBarEl.style.setProperty('opacity', '0', 'important');
        }
      };
      var showControls = function showControls() {
        _this24.player.userActive(true);
        // Also show custom elements
        var titleEl = document.querySelector('.video-title-bottom');
        var timerEl = document.querySelector('.video-timer-bottom');
        var skipBtn = document.querySelector('.skip-credits-btn');
        var backBtn = document.querySelector('.back-button');
        var logoEl = document.querySelector('.site-logo');
        var controlBarEl = document.querySelector('.vjs-control-bar');
        if (titleEl) titleEl.style.opacity = '1';
        if (timerEl) timerEl.style.opacity = '1';
        if (skipBtn) skipBtn.style.opacity = '1';
        if (backBtn) backBtn.style.opacity = '1';
        if (logoEl) logoEl.style.opacity = '1';
        if (controlBarEl) controlBarEl.style.setProperty('opacity', '1', 'important');
      };
      var resetInactivityTimer = function resetInactivityTimer() {
        clearTimeout(inactivityTimeout);
        showControls();

        // Only set hide timer if video is playing
        if (!_this24.player.paused()) {
          inactivityTimeout = setTimeout(hideControls, INACTIVITY_DELAY);
        }
      };

      // Listen to user activity on the player element
      var playerEl = this.player.el();
      playerEl.addEventListener('mousemove', resetInactivityTimer);
      // Chrome-specific: Use non-passive touch events for proper control interaction
      playerEl.addEventListener('touchstart', resetInactivityTimer, {
        passive: false
      });
      playerEl.addEventListener('touchmove', resetInactivityTimer, {
        passive: false
      });
      playerEl.addEventListener('touchend', resetInactivityTimer, {
        passive: false
      });
      playerEl.addEventListener('click', resetInactivityTimer);

      // Chrome-specific: Ensure control bar elements handle touch properly
      var controlBar = playerEl.querySelector('.vjs-control-bar');
      if (controlBar) {
        controlBar.addEventListener('touchstart', resetInactivityTimer, {
          passive: false
        });
        controlBar.addEventListener('touchmove', resetInactivityTimer, {
          passive: false
        });
        controlBar.addEventListener('touchend', resetInactivityTimer, {
          passive: false
        });
      }

      // Show controls when paused
      this.player.on('pause', function () {
        clearTimeout(inactivityTimeout);
        showControls();
      });

      // Start hiding timer when playing
      this.player.on('play', resetInactivityTimer);
      this.player.on('playing', resetInactivityTimer);

      // Clear timeout on player dispose
      this.player.on('dispose', function () {
        clearTimeout(inactivityTimeout);
      });

      // Start timer immediately if already playing
      if (!this.player.paused()) {
        resetInactivityTimer();
      }
    },
    // Call this in setupPlayerEvents
    setupPlayerEvents: function setupPlayerEvents() {
      var _this25 = this;
      this.player.ready(function () {
        // Restore volume and muted state from localStorage BEFORE creating controls
        _this25.restoreVolumeState(true); // Force initial restore

        // Setup ad events after player is ready
        // Note: If vastUrl exists, setupAdEvents is called in setupVastPlugin()
        // Only call here if there's no vastUrl to avoid duplicate listeners
        if (!_this25.vastUrl) {
          _this25.setupAdEvents();
        }
        _this25.setupTextTracks();
        _this25.setupCustomButtons();
        _this25.setupPlaybackEvents();
        _this25.setupCreditsSkip();
        _this25.applySubtitleStyles();
        _this25.setupProgressBarPreview();

        // Initialize drawer state
        _this25.currentPlaybackRate = _this25.player.playbackRate();
        _this25.initializeSubtitleState();
        // apply persisted audio selection if available
        _this25.initializeAudioState();
        // apply persisted quality selection if available
        _this25.initializeQualityState();

        // Ensure quality selector plugin is available
        // The plugin should auto-register when imported, but we can verify it's available
        if (_this25.player.qualityLevels && typeof _this25.player.qualityLevels === 'function') {
          // Plugin is available, quality switching should work
          console.log('[VideoPlayer] Quality selector plugin is available');
        }

        // Persist volume and muted state on changes
        _this25.player.on('volumechange', function () {
          _this25.saveVolumeState();
        });

        // Start monitoring to continuously restore volume state
        // This handles Chrome/Safari resetting volume during load/playback
        _this25.startVolumeRestoreMonitoring();

        // Also start periodic saving to catch any state changes
        _this25.startVolumeSaveMonitoring();

        // Restore volume state again after metadata loads (browsers may reset it)
        _this25.player.on('loadedmetadata', function () {
          // Force restore after metadata loads
          setTimeout(function () {
            _this25.restoreVolumeState(true);
          }, 100);
          // Apply quality selection when metadata is loaded (quality levels are now available)
          setTimeout(function () {
            _this25.applyQualitySelection();
          }, 200);
          // Ensure subtitles are properly enabled after metadata loads
          // This handles cases where audio detection happens after initial setup
          setTimeout(function () {
            if (_this25.tracks && _this25.tracks.length > 0) {
              _this25.syncSubtitlesWithAudio();
            }
          }, 300);
        });

        // Also restore on playing event - Chrome/Safari may reset volume when playback starts
        _this25.player.on('playing', function () {
          // Force restore when playback starts
          setTimeout(function () {
            _this25.restoreVolumeState(true);
          }, 50);
        });

        // Detect actual audio track after loadedmetadata
        _this25.detectActualAudioTrack();

        // Move custom overlays into player for fullscreen support
        _this25.setupFullscreenCustomOverlays();

        // Auto-hide control bar after 3 seconds of inactivity
        _this25.setupAutoHideControls();

        // ✅ Fix RTL volume bar direction
        var isRtl = _this25.$i18n.locale === 'fa';
        if (isRtl) {
          var _this25$player$contro;
          var volumeBar = (_this25$player$contro = _this25.player.controlBar) === null || _this25$player$contro === void 0 || (_this25$player$contro = _this25$player$contro.getChild('volumePanel')) === null || _this25$player$contro === void 0 || (_this25$player$contro = _this25$player$contro.volumeControl) === null || _this25$player$contro === void 0 ? void 0 : _this25$player$contro.volumeBar;
          if (volumeBar) {
            var originalHandleMouseMove = volumeBar.handleMouseMove;
            volumeBar.handleMouseMove = function (event) {
              // reverse the x position
              if (event) {
                var rect = this.el_.getBoundingClientRect();
                var x = event.clientX - rect.left;
                var reversedX = rect.width - x;
                var fakeEvent = new MouseEvent(event.type, {
                  clientX: rect.left + reversedX,
                  clientY: event.clientY,
                  bubbles: true
                });
                return originalHandleMouseMove.call(this, fakeEvent);
              }
              return originalHandleMouseMove.call(this, event);
            };
          }
        }
        // Attempt autoplay when player becomes ready if requested.
        // Some browsers block autoplay unless muted — try to play, and if blocked
        // mute and retry to provide a silent autoplay fallback.
        // BUT: Only mute if user doesn't have a saved preference (or if they had it muted)
        var shouldAutoplay = !!(_this25.playerAutoPlay && _this25.autoPlay !== false);
        if (shouldAutoplay) {
          // Check if user has a saved muted preference
          var savedMutedState = null;
          try {
            var saved = localStorage.getItem("".concat(_this25.playerid, "-volumeState"));
            if (saved) {
              var volumeState = JSON.parse(saved);
              savedMutedState = volumeState.muted;
            }
          } catch (e) {
            // ignore
          }
          var playResult = _this25.player.play();
          if (playResult && typeof playResult.then === 'function') {
            playResult.catch(function () {
              // Try muted autoplay as a fallback, but only if:
              // 1. User doesn't have a saved preference (savedMutedState === null), OR
              // 2. User had it muted (savedMutedState === true)
              // This preserves user's unmuted preference
              if (savedMutedState === null || savedMutedState === true) {
                try {
                  _this25.player.muted(true);
                  _this25.player.play().catch(function () {});
                  // Save the muted state if we had to mute for autoplay
                  if (savedMutedState === null) {
                    _this25.saveVolumeState();
                  }
                } catch (e) {
                  // ignore
                }
              }
            });
          }
        }
      });
    },
    setupFullscreenCustomOverlays: function setupFullscreenCustomOverlays() {
      var _this26 = this;
      if (!this.player) return;
      var playerEl = this.player.el();

      // Function to move custom overlays into player
      var moveOverlaysToPlayer = function moveOverlaysToPlayer() {
        var skipBtn = document.getElementById("".concat(_this26.playerid, "-skip-credits"));
        var titleEl = document.getElementById("".concat(_this26.playerid, "-title"));
        var timerEl = document.getElementById("".concat(_this26.playerid, "-timer"));
        if (skipBtn && !playerEl.contains(skipBtn)) {
          playerEl.appendChild(skipBtn);
        }
        if (titleEl && !playerEl.contains(titleEl)) {
          playerEl.appendChild(titleEl);
        }
        if (timerEl && !playerEl.contains(timerEl)) {
          playerEl.appendChild(timerEl);
        }

        // Move drawer if it exists
        _this26.moveDrawerToPlayer();
      };

      // Function to move overlays back to original container
      var moveOverlaysToContainer = function moveOverlaysToContainer() {
        var container = playerEl.parentElement;
        var skipBtn = document.getElementById("".concat(_this26.playerid, "-skip-credits"));
        var titleEl = document.getElementById("".concat(_this26.playerid, "-title"));
        var timerEl = document.getElementById("".concat(_this26.playerid, "-timer"));
        var drawerEl = document.getElementById("".concat(_this26.playerid, "-settings-drawer"));
        if (skipBtn && playerEl.contains(skipBtn)) {
          container.appendChild(skipBtn);
        }
        if (titleEl && playerEl.contains(titleEl)) {
          container.appendChild(titleEl);
        }
        if (timerEl && playerEl.contains(timerEl)) {
          container.appendChild(timerEl);
        }
        if (drawerEl && playerEl.contains(drawerEl)) {
          container.appendChild(drawerEl);
        }
      };

      // Listen to fullscreen changes
      this.player.on('fullscreenchange', function () {
        if (_this26.player.isFullscreen()) {
          moveOverlaysToPlayer();
        } else {
          moveOverlaysToContainer();
        }
      });

      // Initial move to player element
      setTimeout(function () {
        moveOverlaysToPlayer();
      }, 100);
    },
    moveDrawerToPlayer: function moveDrawerToPlayer() {
      if (!this.player) return;
      var playerEl = this.player.el();

      // Try to get drawer by ref first, then by ID
      var drawerEl = this.$refs.settingsDrawer;
      if (!drawerEl) {
        drawerEl = document.getElementById("".concat(this.playerid, "-settings-drawer"));
      }
      if (drawerEl && !playerEl.contains(drawerEl)) {
        playerEl.appendChild(drawerEl);
      }
    },
    initializeSubtitleState: function initializeSubtitleState() {
      if (!this.player) return;
      var textTracks = this.player.textTracks();
      var foundActive = false;
      for (var i = 0; i < textTracks.length; i++) {
        if (textTracks[i].mode === 'showing') {
          this.currentSubtitle = i;
          foundActive = true;
          break;
        }
      }

      // If no active subtitle found, set to null (off)
      if (!foundActive) {
        this.currentSubtitle = null;
      }
    },
    detectActualAudioTrack: function detectActualAudioTrack() {
      var _this27 = this;
      // Listen for when metadata is loaded to detect which audio track is actually playing
      if (!this.player) return;
      this.player.on('loadedmetadata', function () {
        try {
          // Try to detect active audio track from HLS tech
          var tech = _this27.player.tech({
            IWillNotUseThisInPlugins: true
          });
          if (tech && tech.vhs) {
            // Check the active audio track in HLS
            var audioTracks = tech.audioTracks();
            if (audioTracks && audioTracks.length > 0) {
              for (var i = 0; i < audioTracks.length; i++) {
                var track = audioTracks[i];
                if (track.enabled) {
                  // Found the active audio track
                  var trackLabel = track.label || track.language || track.id || '';
                  var trackLang = trackLabel.toLowerCase();

                  // Try to determine language from track info
                  var detectedLang = null;

                  // Check FA first (more specific)
                  if (trackLang.includes('fa') || trackLang.includes('farsi') || trackLang.includes('persian') || trackLang === 'fa') {
                    detectedLang = 'FA';
                  } else if (trackLang.includes('en') || trackLang.includes('english') || trackLang === 'en' ||
                  // Also check if it's NOT FA (default to EN for non-FA)
                  !trackLang.includes('fa') && trackLang.length > 0) {
                    // If it's not FA and has some content, assume EN
                    // This handles cases where label might be empty or generic
                    detectedLang = 'EN';
                  }

                  // Always update if we detected a language, even if it matches
                  // This ensures subtitles are synced correctly
                  if (detectedLang) {
                    var shouldUpdate = !_this27.currentAudioLang || _this27.currentAudioLang.toUpperCase() !== detectedLang.toUpperCase();
                    if (shouldUpdate) {
                      _this27.currentAudioLang = detectedLang;

                      // Re-sync subtitles based on detected audio
                      _this27.syncSubtitlesWithAudio();
                    } else {
                      // Even if same, ensure subtitles are synced

                      _this27.syncSubtitlesWithAudio();
                    }
                  } else {
                    console.warn('[VideoPlayer] Could not detect audio language from track:', trackLabel);
                    // If we can't detect but currentAudioLang is FA and we have subtitles,
                    // assume it might be EN and enable subtitles
                    if (_this27.currentAudioLang && _this27.currentAudioLang.toUpperCase() === 'FA' && _this27.tracks && _this27.tracks.length > 0) {
                      // Check stream URL to see if EN audio is actually selected
                      try {
                        var url = new URL(_this27.currentStream || _this27.stream, window.location.origin);
                        var params = new URLSearchParams(url.search);
                        var hasEnAudio = false;
                        var _iterator3 = _createForOfIteratorHelper(params.keys()),
                          _step3;
                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var key = _step3.value;
                            if (key.startsWith('audio[')) {
                              var langMatch = key.match(/audio\[(.+)\]/);
                              if (langMatch && langMatch[1].toUpperCase() === 'EN') {
                                hasEnAudio = true;
                                break;
                              }
                            }
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                        if (hasEnAudio) {
                          _this27.currentAudioLang = 'EN';
                          _this27.syncSubtitlesWithAudio();
                        }
                      } catch (e) {
                        console.warn('[VideoPlayer] Error checking stream URL:', e);
                      }
                    }
                  }
                  break;
                }
              }
            } else {
              console.warn('[VideoPlayer] No audio tracks found in HLS stream');
            }
          } else {
            console.warn('[VideoPlayer] HLS tech not available for audio detection');
          }
        } catch (e) {
          console.warn('Could not detect audio track:', e);
        }
      });
    },
    syncSubtitlesWithAudio: function syncSubtitlesWithAudio() {
      var _localStorage$getItem2, _ref4, _ref5;
      // Sync subtitle display - simple approach: enable subtitles if they exist
      if (!this.player || !this.tracks || this.tracks.length === 0) return;
      var textTracks = this.player.textTracks();
      if (textTracks.length === 0) {
        console.log('[VideoPlayer] No text tracks available for syncing');
        return;
      }

      // Find FA subtitle index in textTracks (not this.tracks, as indices may differ)
      var faSubtitleIndex = -1;
      for (var i = 0; i < textTracks.length; i++) {
        var track = textTracks[i];
        var lang = (track.language || track.label || '').toString().toLowerCase();
        if (lang === 'fa' || lang === 'farsi' || lang.includes('fa')) {
          faSubtitleIndex = i;
          break;
        }
      }

      // Simple approach: Enable subtitles if they exist
      // Only disable if user explicitly selected FA audio (from persisted selection or URL)
      var isExplicitFA = this.currentAudioLang && this.currentAudioLang.toString().toLowerCase() === 'fa' && (((_localStorage$getItem2 = localStorage.getItem("".concat(this.playerid, "-audioLang"))) === null || _localStorage$getItem2 === void 0 ? void 0 : _localStorage$getItem2.toLowerCase()) === 'fa' || ((_ref4 = this.currentStream || this.stream) === null || _ref4 === void 0 ? void 0 : _ref4.includes('audio[FA]')) || ((_ref5 = this.currentStream || this.stream) === null || _ref5 === void 0 ? void 0 : _ref5.includes('audio[fa]')));
      if (isExplicitFA) {
        // User explicitly selected FA audio -> subtitles OFF

        for (var _i9 = 0; _i9 < textTracks.length; _i9++) {
          textTracks[_i9].mode = 'disabled';
        }
        this.currentSubtitle = null;
      } else {
        // Enable subtitles - prefer FA if available, otherwise first available
        if (faSubtitleIndex !== -1) {
          for (var _i0 = 0; _i0 < textTracks.length; _i0++) {
            textTracks[_i0].mode = _i0 === faSubtitleIndex ? 'showing' : 'disabled';
          }
          this.currentSubtitle = faSubtitleIndex;
        } else if (textTracks.length > 0) {
          // No FA subtitle, enable first available
          textTracks[0].mode = 'showing';
          this.currentSubtitle = 0;
          for (var _i1 = 1; _i1 < textTracks.length; _i1++) {
            textTracks[_i1].mode = 'disabled';
          }
        }
      }
    },
    // ============================================
    // Audio parsing & selection
    // ============================================
    parseAudioOptionsFromStream: function parseAudioOptionsFromStream(streamUrl) {
      try {
        if (!streamUrl) {
          this.audioOptions = null;
          return;
        }
        var url = new URL(streamUrl, window.location.origin);
        var params = new URLSearchParams(url.search);
        var options = [];

        // Find params like audio[FA]=token
        var _iterator4 = _createForOfIteratorHelper(params.entries()),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _step4$value = Object(slicedToArray["a" /* default */])(_step4.value, 2),
              key = _step4$value[0],
              value = _step4$value[1];
            var m = key.match(/^audio\[(.+)\]$/);
            if (m) {
              var lang = m[1];
              // Map to labels requested by product: FA -> دوبله, EN -> زبان اصلی
              var label = LANGUAGE_MAP[lang.toLowerCase()] || lang;
              if (lang.toLowerCase() === 'fa' || lang === 'FA') {
                label = 'دوبله';
              } else if (lang.toLowerCase() === 'en' || lang === 'EN') {
                label = 'زبان اصلی';
              }
              options.push({
                lang: lang,
                token: value,
                label: label
              });
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        this.audioOptions = options.length ? options : null;
      } catch (e) {
        console.warn('parseAudioOptionsFromStream error', e);
        this.audioOptions = null;
      }
    },
    buildStreamWithAudio: function buildStreamWithAudio(streamUrl, lang) {
      try {
        if (!streamUrl) return streamUrl;
        var url = new URL(streamUrl, window.location.origin);
        var params = new URLSearchParams(url.search);

        // remove existing audio[...] params
        for (var _i10 = 0, _Array$from = Array.from(params.keys()); _i10 < _Array$from.length; _i10++) {
          var key = _Array$from[_i10];
          if (/^audio\[.+\]$/.test(key)) params.delete(key);
        }
        if (lang) {
          var _this$audioOptions;
          var opt = (_this$audioOptions = this.audioOptions) === null || _this$audioOptions === void 0 ? void 0 : _this$audioOptions.find(function (o) {
            return o.lang === lang;
          });
          if (opt) {
            params.set("audio[".concat(opt.lang, "]"), opt.token);
          }
        }
        url.search = params.toString();
        return url.toString();
      } catch (e) {
        console.warn('buildStreamWithAudio error', e);
        return streamUrl;
      }
    },
    initializeAudioState: function initializeAudioState() {
      // No-op now: initial audio selection is applied before player creation
      // This method kept for compatibility but does not force a reload.
    },
    initializeQualityState: function initializeQualityState() {
      // Restore persisted quality selection from localStorage
      try {
        var persisted = localStorage.getItem("".concat(this.playerid, "-quality"));
        if (persisted && ['auto', '1080p', '720p', '480p', '360p'].includes(persisted)) {
          this.currentQuality = persisted;
        }
      } catch (e) {
        console.warn('Error initializing quality state:', e);
      }
    },
    applyQualitySelection: function applyQualitySelection() {
      var _this28 = this;
      // Apply the current quality selection to the player
      // This is called when metadata is loaded and quality levels become available
      if (this.currentQuality) {
        // Use a small delay to ensure quality levels are fully initialized
        setTimeout(function () {
          _this28.selectQuality(_this28.currentQuality, true); // Pass true to skip drawer close
        }, 100);
      }
    },
    openAudioSettings: function openAudioSettings() {
      this.settingsDrawerView = 'audio';
    },
    getAudioLabelDisplay: function getAudioLabelDisplay() {
      var _this29 = this;
      if (!this.audioOptions) return 'پیش‌فرض';
      if (!this.currentAudioLang) return 'پیش‌فرض';
      var found = this.audioOptions.find(function (o) {
        return o.lang === _this29.currentAudioLang;
      });
      return found ? found.label : 'پیش‌فرض';
    },
    selectAudio: function selectAudio(lang) {
      var _this30 = this;
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // lang: null => default (do not force any audio param)
      // preserveDrawer: when true don't close drawer (used at init)
      if (!this.player) {
        this.currentAudioLang = lang;
        return;
      }
      this.currentAudioLang = lang;

      // persist selection
      try {
        if (lang) localStorage.setItem("".concat(this.playerid, "-audioLang"), lang);else localStorage.removeItem("".concat(this.playerid, "-audioLang"));
      } catch (e) {
        console.warn('parseAudioOptionsFromStream error', e);
      }

      // Rebuild stream URL based on original prop stream and selected lang
      try {
        var original = this.stream;
        var newStream = this.buildStreamWithAudio(original, lang);

        // update internal currentStream
        this.currentStream = newStream;

        // reload player source while preserving time and playback
        var currentTime = this.player.currentTime();
        var wasPlaying = !this.player.paused();
        this.player.pause();
        this.player.src({
          src: newStream,
          type: 'application/x-mpegURL'
        });
        // wait for metadata then seek and resume if needed
        this.player.one('loadedmetadata', function () {
          try {
            if (!isNaN(currentTime) && currentTime > 0) {
              var dur = _this30.player.duration();
              if (!dur || currentTime <= dur) {
                _this30.player.currentTime(currentTime);
              }
            }
          } catch (err) {
            console.warn('seek after audio change failed', err);
          }

          // Reinitialize subtitles according to new audio selection
          try {
            _this30.setupTextTracks(true);
          } catch (err) {
            console.warn('reinit subtitles after audio change failed', err);
          }
          if (wasPlaying) {
            _this30.player.play().catch(function () {});
          }
        });
      } catch (e) {
        console.error('selectAudio error', e);
      }
      if (!opts.preserveDrawer) this.closeSettingsDrawer();
    },
    // Add to methods
    openSubtitleStyleSettings: function openSubtitleStyleSettings() {
      this.settingsDrawerView = 'subtitle-style';
    },
    backToSubtitleSettings: function backToSubtitleSettings() {
      this.settingsDrawerView = 'subtitle';
    },
    updateSubtitleStyle: function updateSubtitleStyle(property, value) {
      this.subtitleStyle[property] = value;
      this.applySubtitleStyles();
    },
    handleSubtitleFontInput: function handleSubtitleFontInput(event) {
      var _event$target;
      var nextValue = Number(event === null || event === void 0 || (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.value);
      if (Number.isNaN(nextValue)) return;
      var clamped = this.clampSubtitleFontSize(nextValue);
      this.updateSubtitleFontSize(clamped);
      if (event && event.target) {
        event.target.value = clamped;
      }
    },
    adjustSubtitleFontSize: function adjustSubtitleFontSize(delta) {
      if (typeof delta !== 'number') return;
      this.updateSubtitleFontSize(this.subtitleFontSizePx + delta);
    },
    updateSubtitleFontSize: function updateSubtitleFontSize(value) {
      var clamped = this.clampSubtitleFontSize(value);
      this.updateSubtitleStyle('fontSize', clamped);
    },
    clampSubtitleFontSize: function clampSubtitleFontSize(value) {
      var numeric = Number(value);
      if (Number.isNaN(numeric)) {
        return DEFAULT_SUBTITLE_FONT_SIZE;
      }
      return Math.min(this.subtitleFontMax, Math.max(this.subtitleFontMin, Math.round(numeric)));
    },
    resolveSubtitleFontPx: function resolveSubtitleFontPx(fontSizeValue) {
      if (typeof fontSizeValue === 'number') {
        return fontSizeValue;
      }
      var fontSizeMap = {
        small: 20,
        medium: 24,
        large: 28,
        'x-large': 32
      };
      return fontSizeMap[fontSizeValue] || DEFAULT_SUBTITLE_FONT_SIZE;
    },
    applySubtitleStyles: function applySubtitleStyles() {
      if (!this.player) return;
      var textTrackDisplay = this.player.el().querySelector('.vjs-text-track-display');
      if (!textTrackDisplay) return;

      // Apply font size to the display container with !important (using pixels)
      var fontSize = "".concat(this.subtitleFontSizePx, "px");
      textTrackDisplay.style.cssText += "font-size: ".concat(fontSize, " !important;");

      // Apply styles to existing cues
      this.updateExistingCues();

      // Set up observer for new cues
      this.setupCueObserver();

      // Also inject a style tag for more specific CSS
      this.injectSubtitleStyles();
    },
    setupCueObserver: function setupCueObserver() {
      var _this31 = this;
      var textTrackDisplay = this.player.el().querySelector('.vjs-text-track-display');
      if (!textTrackDisplay) return;

      // Remove existing observer if any
      if (this.cueObserver) {
        this.cueObserver.disconnect();
      }

      // Create mutation observer to watch for new cues
      this.cueObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function (node) {
              if (node.classList && node.classList.contains('vjs-text-track-cue')) {
                _this31.applyCueStyles(node);
              }
            });
          }
        });
      });

      // Start observing
      this.cueObserver.observe(textTrackDisplay, {
        childList: true,
        subtree: true
      });
    },
    updateExistingCues: function updateExistingCues() {
      var _this32 = this;
      var textTrackDisplay = this.player.el().querySelector('.vjs-text-track-display');
      if (!textTrackDisplay) return;
      var cues = textTrackDisplay.querySelectorAll('.vjs-text-track-cue');
      cues.forEach(function (cue) {
        _this32.applyCueStyles(cue);
      });
    },
    applyCueStyles: function applyCueStyles(cue) {
      // Find the inner div that contains the actual text
      var innerDiv = cue.querySelector('div');
      if (!innerDiv) return;
      var fontSize = "".concat(this.subtitleFontSizePx, "px");

      // Apply styles with !important using CSSText to override inline styles
      var styles = "\n    font-size: ".concat(fontSize, " !important;\n    color: ").concat(this.subtitleStyle.color, " !important;\n    background-color: rgba(0, 0, 0, ").concat(this.subtitleStyle.background, ") !important;\n    padding: ").concat(this.subtitleStyle.background > 0 ? '4px 8px' : '0', " !important;\n    border-radius: 4px !important;\n    font-family: Arial, \"Segoe UI\", Tahoma, sans-serif !important;\n    font-weight: bold !important;\n    line-height: 1.4 !important;\n  ");

      // Text shadow
      var shadowMap = {
        none: 'none',
        light: '0 1px 2px rgba(0,0,0,0.8) !important',
        medium: '0 2px 4px rgba(0,0,0,0.8) !important',
        heavy: '0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9) !important'
      };
      var shadowStyle = shadowMap[this.subtitleStyle.shadow] || 'none';
      innerDiv.style.cssText += styles + "text-shadow: ".concat(shadowStyle, ";");

      // Also apply font size to the cue itself
      cue.style.cssText += "font-size: ".concat(fontSize, " !important;");
    },
    injectSubtitleStyles: function injectSubtitleStyles() {
      // Remove existing style tag if any
      var existingStyle = document.getElementById('custom-subtitle-styles');
      if (existingStyle) {
        existingStyle.remove();
      }

      // Create new style tag with specific CSS
      var style = document.createElement('style');
      style.id = 'custom-subtitle-styles';
      var fontSize = "".concat(this.subtitleFontSizePx, "px");
      var shadowMap = {
        none: 'none',
        light: '0 1px 2px rgba(0,0,0,0.8)',
        medium: '0 2px 4px rgba(0,0,0,0.8)',
        heavy: '0 3px 6px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9)'
      };
      var textShadow = shadowMap[this.subtitleStyle.shadow] || 'none';
      style.textContent = "\n    .vjs-text-track-display {\n      font-size: ".concat(fontSize, " !important;\n    }\n    .vjs-text-track-cue {\n      font-size: ").concat(fontSize, " !important;\n    }\n    .vjs-text-track-cue div {\n      font-size: ").concat(fontSize, " !important;\n      color: ").concat(this.subtitleStyle.color, " !important;\n      background-color: rgba(0, 0, 0, ").concat(this.subtitleStyle.background, ") !important;\n      padding: ").concat(this.subtitleStyle.background > 0 ? '4px 8px' : '0', " !important;\n      border-radius: 4px !important;\n      font-family: Arial, \"Segoe UI\", Tahoma, sans-serif !important;\n      font-weight: bold !important;\n      text-shadow: ").concat(textShadow, " !important;\n      line-height: 1.4 !important;\n    }\n  ");
      document.head.appendChild(style);
    },
    resetSubtitleStyles: function resetSubtitleStyles() {
      this.subtitleStyle = {
        fontSize: DEFAULT_SUBTITLE_FONT_SIZE,
        color: '#ffffff',
        background: 0.8,
        shadow: 'medium'
      };
      this.applySubtitleStyles();
    },
    // ============================================
    // Progress Bar Preview Methods
    // ============================================
    setupProgressBarPreview: function setupProgressBarPreview() {
      var _this33 = this;
      if (!this.player) return;

      // Get the progress control element
      var progressControl = this.player.controlBar.getChild('progressControl');
      if (!progressControl) return;
      this.progressBarElement = progressControl.el();

      // Add event listeners for hover
      this.progressBarElement.addEventListener('mouseenter', this.handleProgressBarEnter);
      this.progressBarElement.addEventListener('mousemove', this.handleProgressBarMove);
      this.progressBarElement.addEventListener('mouseleave', this.handleProgressBarLeave);

      // Clean up on dispose
      this.player.on('dispose', function () {
        if (_this33.progressBarElement) {
          _this33.progressBarElement.removeEventListener('mouseenter', _this33.handleProgressBarEnter);
          _this33.progressBarElement.removeEventListener('mousemove', _this33.handleProgressBarMove);
          _this33.progressBarElement.removeEventListener('mouseleave', _this33.handleProgressBarLeave);
        }
      });
    },
    handleProgressBarEnter: function handleProgressBarEnter() {
      this.showProgressPreview = true;
      this.lastPreviewTime = -1; // Reset to ensure first preview is shown
    },
    handleProgressBarMove: function handleProgressBarMove(event) {
      if (!this.player || !this.progressBarElement) return;
      var rect = this.progressBarElement.getBoundingClientRect();
      var duration = this.player.duration();
      if (!duration || isNaN(duration)) return;

      // Calculate hover position and time
      var mouseX = event.clientX - rect.left;
      var percentage = Math.max(0, Math.min(1, mouseX / rect.width));
      var hoverTime = percentage * duration;

      // Round to nearest second for 1-second precision
      var roundedTime = Math.round(hoverTime);

      // Update preview time
      this.previewTime = this.formatTime(roundedTime);

      // Calculate popover position (centered on cursor)
      var popoverWidth = 160; // matches canvas width
      var xPos = event.clientX - rect.left - popoverWidth / 2;

      // Keep popover within bounds
      xPos = Math.max(10, Math.min(xPos, rect.width - popoverWidth - 10));
      this.previewPosition.x = xPos + 14;

      // Generate thumbnail preview only if time changed (1-second precision)
      // if (roundedTime !== this.lastPreviewTime) {
      //   this.lastPreviewTime = roundedTime
      //   this.$nextTick(() => {
      //     this.generateThumbnailPreview(roundedTime)
      //   })
      // }
    },
    handleProgressBarLeave: function handleProgressBarLeave() {
      this.showProgressPreview = false;
    },
    generateThumbnailPreview: function generateThumbnailPreview(time) {
      if (!this.player || !this.$refs.previewCanvas) return;
      var canvas = this.$refs.previewCanvas;
      var ctx = canvas.getContext('2d');
      var videoElement = this.player.el().querySelector('video');
      if (!videoElement) return;
      try {
        // Create a temporary video element to seek to the time
        var tempVideo = document.createElement('video');
        tempVideo.src = videoElement.src || videoElement.currentSrc;
        tempVideo.crossOrigin = 'anonymous';
        tempVideo.muted = true;
        tempVideo.currentTime = time;
        tempVideo.addEventListener('loadeddata', function () {
          // Draw the frame to canvas
          ctx.drawImage(tempVideo, 0, 0, canvas.width, canvas.height);
          tempVideo.remove();
        });

        // Fallback: if thumbnail generation fails, show a placeholder
        tempVideo.addEventListener('error', function () {
          ctx.fillStyle = '#1a1a1a';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#ffffff';
          ctx.font = '14px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('پیش‌نمایش', canvas.width / 2, canvas.height / 2);
          tempVideo.remove();
        });
      } catch (error) {
        // Fallback for CORS or other errors
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('پیش‌نمایش', canvas.width / 2, canvas.height / 2);
      }
    }
  })
});
// CONCATENATED MODULE: ./components/VideoPlayer.vue?vue&type=script&lang=js
 /* harmony default export */ var components_VideoPlayervue_type_script_lang_js = (VideoPlayervue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/VideoPlayer.vue?vue&type=style&index=0&id=446ebad0&prod&scoped=true&lang=css
var VideoPlayervue_type_style_index_0_id_446ebad0_prod_scoped_true_lang_css = __webpack_require__(1012);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/VideoPlayer.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_VideoPlayervue_type_script_lang_js,
  VideoPlayervue_type_template_id_446ebad0_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "446ebad0",
  null
  
)

/* harmony default export */ var VideoPlayer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SubscriptionButton_vue_vue_type_style_index_0_id_5e5fcf10_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(779);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SubscriptionButton_vue_vue_type_style_index_0_id_5e5fcf10_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_SubscriptionButton_vue_vue_type_style_index_0_id_5e5fcf10_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 922:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/player/SubscriptionButton.vue?vue&type=template&id=5e5fcf10&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.isVisible && _vm.shouldShow ? _c('button', {
    staticClass: "subscription-floating-button",
    on: {
      "click": _vm.handleSubscriptionClick
    }
  }, [_c('i', {
    staticClass: "fa fa-money-bill"
  }), _vm._v(" "), _c('span', {
    staticClass: "button-text"
  }, [_vm._v("\n      " + _vm._s(_vm.buttonText) + "\n      "), _vm.showHalfPriceLabel ? _c('span', {
    staticClass: "half-price-label"
  }, [_vm._v("\n        (" + _vm._s(_vm.usageVolumeText) + ")\n      ")]) : _vm._e()])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/player/SubscriptionButton.vue?vue&type=template&id=5e5fcf10&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/player/SubscriptionButton.vue?vue&type=script&lang=js


/* harmony default export */ var SubscriptionButtonvue_type_script_lang_js = ({
  name: 'SubscriptionButton',
  props: {
    fullrateData: {
      type: Object,
      default: function _default() {
        return {
          rate: 0.5,
          show_subscription: 0,
          fa: {
            title: 'نیم بها',
            alternative: 'نیم بها'
          },
          en: {
            title: 'Half-priced',
            alternative: 'Half-priced'
          }
        };
      }
    },
    contentId: {
      type: [String, Number],
      required: true
    },
    contentType: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      isVisible: true,
      hideTimer: null
    };
  },
  computed: {
    shouldShow: function shouldShow() {
      return this.fullrateData && this.fullrateData.show_subscription === 1;
    },
    showHalfPriceLabel: function showHalfPriceLabel() {
      return this.fullrateData.rate === 1;
    },
    buttonText: function buttonText() {
      return this.$i18n.locale === 'fa' ? 'خرید اشتراک' : 'Buy Subscription';
    },
    usageVolumeText: function usageVolumeText() {
      var _this$fullrateData$en;
      if (this.$i18n.locale === 'fa') {
        var _this$fullrateData$fa;
        return "\u062D\u062C\u0645 \u0645\u0635\u0631\u0641\u06CC: ".concat(((_this$fullrateData$fa = this.fullrateData.fa) === null || _this$fullrateData$fa === void 0 ? void 0 : _this$fullrateData$fa.title) || 'نیم بها');
      }
      return "Usage Volume: ".concat(((_this$fullrateData$en = this.fullrateData.en) === null || _this$fullrateData$en === void 0 ? void 0 : _this$fullrateData$en.title) || 'Half-priced');
    }
  },
  mounted: function mounted() {
    var _this = this;
    // Hide button after 10 seconds
    this.hideTimer = setTimeout(function () {
      _this.isVisible = false;
    }, 10000);
  },
  beforeDestroy: function beforeDestroy() {
    // Clear timer when component is destroyed
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
    }
  },
  methods: {
    handleSubscriptionClick: function handleSubscriptionClick() {
      this.$emit('subscription-click', {
        id: this.contentId,
        type: this.contentType
      });
    }
  }
});
// CONCATENATED MODULE: ./components/player/SubscriptionButton.vue?vue&type=script&lang=js
 /* harmony default export */ var player_SubscriptionButtonvue_type_script_lang_js = (SubscriptionButtonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/player/SubscriptionButton.vue?vue&type=style&index=0&id=5e5fcf10&prod&scoped=true&lang=css
var SubscriptionButtonvue_type_style_index_0_id_5e5fcf10_prod_scoped_true_lang_css = __webpack_require__(828);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/player/SubscriptionButton.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  player_SubscriptionButtonvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5e5fcf10",
  null
  
)

/* harmony default export */ var SubscriptionButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 997:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);