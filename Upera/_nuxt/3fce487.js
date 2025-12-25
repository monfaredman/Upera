(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/MediaCard.vue?vue&type=template&id=a5daca6e&scoped=true

var render = function render() {
  var _vm$item$cdnType, _vm$item$cdnType2, _vm$item$cdnType3, _vm$item$cdnType4, _vm$item$cdnType5, _vm$item$cdnType6, _vm$item$cdnType7, _vm$item$cdnType8, _vm$item$cdnType9, _vm$item$cdnType0;
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.layout === 'slide' ? _c('div', {
    staticClass: "swiper-slide"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-md-12 col-lg-12 showcase-pic"
  }, [_vm.variant === 'poster' ? [_c('nuxt-link', {
    class: (_vm.computedLinkClass, ['media-card', {
      offer: _vm.hoverable
    }], {
      'is-series': _vm.item.type != 'movie'
    }),
    attrs: {
      "to": _vm.resolvedLink
    }
  }, [_vm.hoverable ? [_c('div', {
    staticClass: "media-image-wrapper"
  }, [_c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-none d-lg-block d-xl-none d-xxl-none media-image",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": _vm.size.w,
      "height": 223,
      "show": "",
      "data-src": _vm.variant === 'poster' ? _vm.posterSrc(_vm.item.poster) : _vm.backdropSrc(_vm.item.mobileSrc ? _vm.item.mobileSrc : _vm.item.backdrop, (_vm$item$cdnType = _vm.item.cdnType) !== null && _vm$item$cdnType !== void 0 ? _vm$item$cdnType : 1),
      "alt": _vm.altText,
      "rounded": ""
    }
  }), _vm._v(" "), _c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-none d-lg-none d-xl-block d-xxl-none media-image",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": _vm.size.w,
      "height": 241,
      "show": "",
      "data-src": _vm.variant === 'poster' ? _vm.posterSrc(_vm.item.poster) : _vm.backdropSrc(_vm.item.mobileSrc ? _vm.item.mobileSrc : _vm.item.backdrop, (_vm$item$cdnType2 = _vm.item.cdnType) !== null && _vm$item$cdnType2 !== void 0 ? _vm$item$cdnType2 : 1),
      "alt": _vm.altText,
      "rounded": ""
    }
  }), _vm._v(" "), _vm.hoverable ? _c('div', {
    staticClass: "hover-overlay"
  }, [_c('h5', {
    staticClass: "media-title"
  }, [_vm._v("\n                    " + _vm._s(_vm.ChooseLang(_vm.item.name, _vm.item.name_fa)) + "\n                  ")]), _vm._v(" "), _c('p', {
    staticClass: "media-genre"
  }, [_vm._v("\n                    " + _vm._s(_vm.item.genre || '...') + "\n                  ")])]) : _vm._e()], 1)] : [_c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-none d-lg-block d-xl-none d-xxl-none non-hover-media-image-lg",
    staticStyle: {
      "min-height": "fit-content"
    },
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": _vm.size.w,
      "height": _vm.size.h,
      "show": "",
      "data-src": _vm.variant === 'poster' ? _vm.posterSrc(_vm.item.poster) : _vm.backdropSrc(_vm.item.mobileSrc ? _vm.item.mobileSrc : _vm.item.backdrop, (_vm$item$cdnType3 = _vm.item.cdnType) !== null && _vm$item$cdnType3 !== void 0 ? _vm$item$cdnType3 : 1),
      "alt": _vm.altText,
      "rounded": ""
    }
  }), _vm._v(" "), _c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-none d-lg-none d-xl-block d-xxl-none non-hover-media-image-xxl",
    staticStyle: {
      "min-height": "fit-content"
    },
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": _vm.size.w,
      "height": _vm.size.h,
      "show": "",
      "data-src": _vm.variant === 'poster' ? _vm.posterSrc(_vm.item.poster) : _vm.backdropSrc(_vm.item.mobileSrc ? _vm.item.mobileSrc : _vm.item.backdrop, (_vm$item$cdnType4 = _vm.item.cdnType) !== null && _vm$item$cdnType4 !== void 0 ? _vm$item$cdnType4 : 1),
      "alt": _vm.altText,
      "rounded": ""
    }
  }), _vm._v(" "), _vm.item.type != 'movie' ? _c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-none d-lg-block d-xl-block d-xxl-none non-hover-media-image-xxl",
    attrs: {
      "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + _vm.item.poster,
      "alt": _vm.item.name
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: 142,
    height: 212,
    show: true
  }, false)) : _vm._e(), _vm._v(" "), _vm.item.type != 'movie' ? _c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-none d-lg-block d-xl-block d-xxl-none non-hover-media-image-xxl",
    attrs: {
      "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + _vm.item.poster,
      "alt": _vm.item.name
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: 142,
    height: 212,
    show: true
  }, false)) : _vm._e(), _vm._v(" "), _vm.showBadges ? [_vm.showDubbed ? _c('span', {
    staticClass: "label label-rounded label-red label-1"
  }, [_vm._v("دوبله")]) : _vm.showSubtitle ? _c('span', {
    staticClass: "label label-rounded label-warning label-1"
  }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), _vm.showFree ? _c('span', {
    staticClass: "label label-blue label-2"
  }, [_vm._v("رایگان")]) : _vm._e()] : _vm._e()]], 2), _vm._v(" "), !_vm.hoverable ? _c('div', {
    staticClass: "mt-2 d-none d-lg-inline"
  }, [_c('h6', {
    staticClass: "mt-2 small font-weight-normal"
  }, [_vm._v("\n              " + _vm._s(_vm.ChooseLang(_vm.item.name, _vm.item.name_fa)) + "\n            ")])]) : _vm._e()] : [_vm.hoverable && _vm.item.type === 'teaser' ? _c('div', {
    class: (_vm.computedLinkClass, ['media-card', {
      offer: _vm.hoverable
    }]),
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": _vm.handleTeaserClick
    }
  }, [_c('div', {
    staticClass: "media-image-wrapper"
  }, [_vm.variant === 'backdrop' ? _c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "media-image",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "data-src": _vm.backdropSrc(_vm.item.backdrop, (_vm$item$cdnType5 = _vm.item.cdnType) !== null && _vm$item$cdnType5 !== void 0 ? _vm$item$cdnType5 : 1, true),
      "alt": _vm.altText,
      "width": _vm.size.w,
      "height": _vm.size.h,
      "rounded": ""
    }
  }) : _vm._e(), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "hover-overlay teaser-overlay"
  }, [_c('h5', {
    staticClass: "media-title"
  }, [_vm._v("\n                  " + _vm._s(_vm.ChooseLang(_vm.item.name, _vm.item.name_fa)) + "\n                ")])])], 1)]) : _vm.hoverable ? _c('nuxt-link', {
    class: (_vm.computedLinkClass, ['media-card', {
      offer: _vm.hoverable
    }]),
    attrs: {
      "to": _vm.resolvedLink
    }
  }, [_c('div', {
    staticClass: "media-image-wrapper"
  }, [_vm.item.type === 'video' ? _c('div', {
    staticClass: "none-hover-overlay"
  }, [_c('p', {
    staticClass: "none-media-title"
  }, [_vm._v("\n                  " + _vm._s(_vm.ChooseLang(_vm.item.studio_list_en, _vm.item.studio_list_fa)) + "\n                ")])]) : _vm._e(), _vm._v(" "), _vm.item.type === 'live' ? _c('div', {
    staticClass: "none-hover-overlay-live"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "image-live",
    attrs: {
      "data-src": __webpack_require__(631)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "none-media-title"
  }, [_vm._v("نمایش همزمان")])]) : _vm._e(), _vm._v(" "), _vm.variant === 'backdrop' ? _c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "media-image",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "data-src": _vm.backdropSrc(_vm.isOffer ? _vm.item.back_teaser : _vm.item.backdrop, (_vm$item$cdnType6 = _vm.item.cdnType) !== null && _vm$item$cdnType6 !== void 0 ? _vm$item$cdnType6 : 1),
      "alt": _vm.altText,
      "width": _vm.size.w,
      "height": _vm.size.h,
      "rounded": ""
    }
  }) : _vm._e(), _vm._v(" "), _vm.hoverable ? _c('div', {
    staticClass: "hover-overlay",
    class: {
      'video-overlay': _vm.item.type === 'video' || _vm.item.type === 'live'
    }
  }, [_vm.item.type !== 'video' && _vm.item.type !== 'live' ? [_c('h5', {
    staticClass: "media-title"
  }, [_vm._v("\n                    " + _vm._s(_vm.ChooseLang(_vm.item.name, _vm.item.name_fa)) + "\n                  ")]), _vm._v(" "), _c('p', {
    staticClass: "media-genre"
  }, [_vm._v("\n                    " + _vm._s(_vm.getGenreDisplay(_vm.item.new_genres) || '...') + "\n                  ")])] : _vm.item.type === 'video' ? _c('div', {
    staticClass: "video-stats"
  }, [_c('div', {
    staticClass: "stat-item"
  }, [_c('svg', {
    attrs: {
      "width": "16",
      "height": "16",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "d": "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
    }
  })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.item.likes || 0))])]), _vm._v(" "), _c('div', {
    staticClass: "stat-item"
  }, [_c('svg', {
    attrs: {
      "width": "16",
      "height": "16",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }
  })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.item.comments || 0))])]), _vm._v(" "), _c('div', {
    staticClass: "stat-item"
  }, [_c('svg', {
    attrs: {
      "width": "16",
      "height": "16",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "stroke": "currentColor",
      "stroke-width": "2"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
    }
  }), _vm._v(" "), _c('circle', {
    attrs: {
      "cx": "12",
      "cy": "12",
      "r": "3"
    }
  })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.item.watching || 0))])])]) : _vm.item.type === 'live' ? _c('div', {
    staticClass: "live-stats"
  }, [_c('p', [_vm._v(_vm._s(_vm.ChooseLang(_vm.item.name, _vm.item.name_fa)))]), _vm._v(" "), _c('div', [_c('i', {
    staticClass: "fa fa-dot-circle fa-xs",
    staticStyle: {
      "color": "#1b6be5"
    }
  }), _vm._v(" "), _c('span', [_vm._v("۱۲")]), _vm._v(" "), _c('span', [_vm._v("بیننده")])])]) : _vm._e()], 2) : _vm._e()], 1)]) : _c('nuxt-link', {
    class: _vm.computedLinkClass,
    attrs: {
      "to": _vm.resolvedLink
    }
  }, [_c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-none d-lg-block",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": _vm.size.w,
      "height": _vm.size.h,
      "show": "",
      "data-src": _vm.backdropSrc(_vm.item.backdrop, (_vm$item$cdnType7 = _vm.item.cdnType) !== null && _vm$item$cdnType7 !== void 0 ? _vm$item$cdnType7 : 1),
      "alt": _vm.altText,
      "rounded": ""
    }
  })], 1), _vm._v(" "), _vm.item.type === 'video' ? _c('div', {
    staticClass: "mt-2 d-none d-md-inline"
  }, [_c('h6', {
    staticClass: "mt-2 small font-weight-normal"
  }, [_vm._v("\n              " + _vm._s(_vm.ChooseLang(_vm.item.name, _vm.item.name_fa)) + "\n            ")])]) : _vm._e()], _vm._v(" "), !_vm.isOffer && !_vm.hoverable ? _c('nuxt-link', {
    class: (_vm.computedLinkClass, {
      'is-series': _vm.item.type != 'movie'
    }),
    attrs: {
      "to": _vm.resolvedLink
    }
  }, [_c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-sm-none non-hover-media-image-lg",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": "142",
      "height": "159",
      "show": "",
      "data-src": _vm.variant === 'poster' ? _vm.posterSrc(_vm.item.poster, true) : _vm.backdropSrc(_vm.item.mobileSrc ? _vm.item.mobileSrc : _vm.item.backdrop, (_vm$item$cdnType8 = _vm.item.cdnType) !== null && _vm$item$cdnType8 !== void 0 ? _vm$item$cdnType8 : 1),
      "alt": _vm.altText,
      "rounded": ""
    }
  }), _vm._v(" "), _c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-none d-sm-block d-md-block d-lg-none non-hover-media-image-lg",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": "142",
      "height": "232",
      "show": "",
      "data-src": _vm.variant === 'poster' ? _vm.posterSrc(_vm.item.poster) : _vm.backdropSrc(_vm.item.mobileSrc ? _vm.item.mobileSrc : _vm.item.backdrop, (_vm$item$cdnType9 = _vm.item.cdnType) !== null && _vm$item$cdnType9 !== void 0 ? _vm$item$cdnType9 : 1),
      "alt": _vm.altText,
      "rounded": ""
    }
  }), _vm._v(" "), _vm.item.type != 'movie' ? _c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-block d-lg-none non-hover-media-image-xxl",
    attrs: {
      "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + _vm.item.poster,
      "alt": _vm.item.name
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: 142,
    height: 212,
    show: true
  }, false)) : _vm._e(), _vm._v(" "), _vm.item.type != 'movie' ? _c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "d-block d-lg-none non-hover-media-image-xxl",
    attrs: {
      "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + _vm.item.poster,
      "alt": _vm.item.name
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: 142,
    height: 212,
    show: true
  }, false)) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _vm.variant === 'poster' || _vm.item.type === 'video' ? _c('div', {
    staticClass: "mt-2 d-block d-lg-none"
  }, [_c('h6', {
    staticClass: "mt-2 small font-weight-normal"
  }, [_vm._v("\n            " + _vm._s(_vm.ChooseLang(_vm.item.name, _vm.item.name_fa)) + "\n          ")])]) : _vm._e()], 2)])]) : _c('div', [_c('nuxt-link', {
    class: [_vm.computedLinkClass, {
      'is-series-grid': _vm.item.type != 'movie'
    }],
    attrs: {
      "to": _vm.resolvedLink
    }
  }, [_vm.variant === 'poster' ? [_c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "isSeries grid-image-img",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": _vm.size.w,
      "height": _vm.size.h,
      "show": "",
      "data-src": _vm.posterSrc(_vm.item.poster),
      "alt": _vm.altText
    }
  }), _vm._v(" "), _vm.item.type != 'movie' ? _c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "isSeries grid-image-img",
    attrs: {
      "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + _vm.item.poster,
      "alt": _vm.item.name
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: _vm.size.w,
    height: _vm.size.h,
    show: true
  }, false)) : _vm._e(), _vm._v(" "), _vm.item.type != 'movie' ? _c('b-img', _vm._b({
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "isSeries grid-image-img",
    attrs: {
      "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + _vm.item.poster,
      "alt": _vm.item.name
    }
  }, 'b-img', {
    fluidGrow: true,
    blank: true,
    blankColor: '#bbb',
    width: _vm.size.w,
    height: _vm.size.h,
    show: true
  }, false)) : _vm._e()] : _c('b-img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "grid-image-img",
    attrs: {
      "blank": "",
      "blank-color": "#bbb",
      "width": _vm.size.w,
      "height": _vm.size.h,
      "show": "",
      "data-src": _vm.backdropSrc(_vm.item.backdrop, (_vm$item$cdnType0 = _vm.item.cdnType) !== null && _vm$item$cdnType0 !== void 0 ? _vm$item$cdnType0 : 1),
      "alt": _vm.altText
    }
  }), _vm._v(" "), _vm.showBadges ? [_vm.showDubbed ? _c('span', {
    staticClass: "label label-rounded label-red label-1"
  }, [_vm._v("دوبله")]) : _vm.showSubtitle ? _c('span', {
    staticClass: "label label-rounded label-warning label-1"
  }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), _vm.showFree ? _c('span', {
    staticClass: "label label-blue label-2"
  }, [_vm._v("رایگان")]) : _vm._e()] : _vm._e()], 2)], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "teaser-play-overlay"
  }, [_c('div', {
    staticClass: "teaser-play-icon-circle"
  }, [_c('i', {
    staticClass: "icon-play"
  })])]);
}];

// CONCATENATED MODULE: ./components/MediaCard.vue?vue&type=template&id=a5daca6e&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.values.js
var es_object_values = __webpack_require__(469);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/MediaCard.vue?vue&type=script&lang=js






var THUMB_BASE = 'https://thumb.upera.tv/thumb';
var CDN_POSTERS = 'https://cdn.upera.tv/s3/posters';
var CDN_BACKDROPS_1 = 'https://cdn.upera.tv/s3/backdrops';
var CDN_BACKDROPS_2 = 'https://s35.upera.net/files2';
/* harmony default export */ var MediaCardvue_type_script_lang_js = ({
  name: 'MediaCard',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    // 'poster' or 'backdrop'
    variant: {
      type: String,
      default: 'poster'
    },
    // { w: number, h: number }
    size: {
      type: Object,
      default: function _default() {
        return {
          w: 1512,
          h: 461
        };
      }
    },
    // Function: (item) => routeObject
    linkBuilder: {
      type: [Function, String, Object],
      required: true
    },
    showBadges: {
      type: Boolean,
      default: true
    },
    addSeriesClass: {
      type: Boolean,
      default: true
    },
    // 'slide' | 'grid'
    layout: {
      type: String,
      default: 'slide'
    },
    // additional class for nuxt-link (e.g., 'actor' in poster grid)
    linkBaseClass: {
      type: [String, Object, Array],
      default: ''
    },
    isOffer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    altText: function altText() {
      var _this$item, _this$item2;
      return ((_this$item = this.item) === null || _this$item === void 0 ? void 0 : _this$item.name) || ((_this$item2 = this.item) === null || _this$item2 === void 0 ? void 0 : _this$item2.name_fa) || '';
    },
    computedLinkClass: function computedLinkClass() {
      return [this.linkBaseClass
      // { 'is-series': this.addSeriesClass && this.item?.type !== 'movie' },
      ];
    },
    resolvedLink: function resolvedLink() {
      if (typeof this.linkBuilder === 'string') {
        return this.linkBuilder;
      }
      if (Object(esm_typeof["a" /* default */])(this.linkBuilder) === 'object') {
        return this.linkBuilder;
      }
      return this.linkBuilder(this.item);
    },
    // Badges visibility derived from item and env
    showDubbed: function showDubbed() {
      var _this$item3, _this$item4;
      return !((_this$item3 = this.item) !== null && _this$item3 !== void 0 && _this$item3.ir) && !!((_this$item4 = this.item) !== null && _this$item4 !== void 0 && _this$item4.persian);
    },
    showSubtitle: function showSubtitle() {
      var _this$item5, _this$item6;
      return !((_this$item5 = this.item) !== null && _this$item5 !== void 0 && _this$item5.ir) && !((_this$item6 = this.item) !== null && _this$item6 !== void 0 && _this$item6.persian);
    },
    showFree: function showFree() {
      var _this$$config, _this$item7;
      var env = (_this$$config = this.$config) === null || _this$$config === void 0 ? void 0 : _this$$config.envname;
      return !!((_this$item7 = this.item) !== null && _this$item7 !== void 0 && _this$item7.free) && env === 'upera';
    }
  },
  methods: {
    handleTeaserClick: function handleTeaserClick() {
      if (this.item.type === 'teaser' && typeof this.linkBuilder === 'function') {
        var result = this.linkBuilder(this.item);
        if (result && typeof result.click === 'function') {
          result.click();
        }
      }
    },
    posterSrc: function posterSrc(filename) {
      var isMobile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!filename) return '';
      var _ref = isMobile ? {
          w: 142,
          h: 212
        } : this.size,
        w = _ref.w,
        h = _ref.h;
      return "".concat(THUMB_BASE, "?w=").concat(w, "&h=").concat(h, "&q=100&a=c&src=").concat(CDN_POSTERS, "/").concat(filename);
    },
    backdropSrc: function backdropSrc(filename) {
      var _this$item8, _this$item9;
      var cdnType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var isTeaser = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (!filename) return '';
      var _this$size = this.size,
        w = _this$size.w,
        h = _this$size.h;

      // Special config for video type
      if (((_this$item8 = this.item) === null || _this$item8 === void 0 ? void 0 : _this$item8.type) === 'video') {
        w = 364;
        h = 190;
        return "".concat(THUMB_BASE, "?w=").concat(w, "&h=").concat(h, "&q=100&a=c&src=").concat(CDN_BACKDROPS_1, "/").concat(filename);
      }

      // only use mobile dimensions in slide layout when mobileSrc exists
      if ((_this$item9 = this.item) !== null && _this$item9 !== void 0 && _this$item9.mobileSrc && this.layout === 'slide') {
        w = 375;
        h = 300;
      }
      if (isTeaser) {
        return "https://thumb.upera.tv/thumb?w=382&h=220&q=100&a=t&src=https://cdn.upera.tv/s3/".concat(filename);
      }
      var base = cdnType === 1 ? CDN_BACKDROPS_1 : CDN_BACKDROPS_2;
      if (this.isOffer) {
        if (this.index === 0) return "https://thumb.upera.tv/thumb?w=".concat(w, "&h=").concat(h, "&q=100&a=r&src=https://cdn.upera.tv/s3/").concat(filename);else {
          return "https://thumb.upera.tv/thumb?w=".concat(310, "&h=", 180, "&q=100&a=c&src=https://cdn.upera.tv/s3/", filename);
        }
      }
      return this.variant === 'md_backdrop' ? "".concat(THUMB_BASE, "?w=").concat(w, "&h=").concat(h, "&q=100&src=").concat(base, "/").concat(filename) : "".concat(THUMB_BASE, "?w=").concat(w, "&h=").concat(h, "&q=100&a=t&src=").concat(base, "/").concat(filename);
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      return en;
    },
    getGenreDisplay: function getGenreDisplay(newGenre) {
      if (!newGenre) return '';
      if (Object(esm_typeof["a" /* default */])(newGenre) === 'object' && newGenre !== null) {
        return Object.values(newGenre).join(', ');
      }
      return newGenre;
    }
  }
});
// CONCATENATED MODULE: ./components/MediaCard.vue?vue&type=script&lang=js
 /* harmony default export */ var components_MediaCardvue_type_script_lang_js = (MediaCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/MediaCard.vue?vue&type=style&index=0&id=a5daca6e&prod&scoped=true&lang=css
var MediaCardvue_type_style_index_0_id_a5daca6e_prod_scoped_true_lang_css = __webpack_require__(946);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/MediaCard.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MediaCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "a5daca6e",
  null
  
)

/* harmony default export */ var MediaCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 856:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaCard_vue_vue_type_style_index_0_id_a5daca6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(856);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaCard_vue_vue_type_style_index_0_id_a5daca6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_MediaCard_vue_vue_type_style_index_0_id_a5daca6e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);