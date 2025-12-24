(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[131],{

/***/ 1066:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/index.vue?vue&type=template&id=d1af267a&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "checkcontainer"
    }
  }, [!_vm.$auth.loggedIn ? _c('div', {
    staticClass: "container-fluid"
  }, [_c('section', {
    staticClass: "pt-5 pt-lg-5 pt-md-5",
    attrs: {
      "id": "banner"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('header', {
    staticClass: "headline mt-5"
  }, [_c('h5', {
    staticClass: "title font-weight-bold"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('new.account')) + "\n          ")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex flex-column justify-content-center align-items-center"
  }, [_c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    staticClass: "image-profile",
    attrs: {
      "data-src": __webpack_require__(822),
      "alt": ""
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "btn btn-lg btn-main px-4 px-md-4 py-md-2 my-2 mb-4",
    attrs: {
      "href": ""
    },
    on: {
      "click": function click($event) {
        $event.preventDefault();
        return _vm.SHOW_MODAL();
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t('new.login_register')) + "\n          ")]), _vm._v(" "), _c('p', {
    staticClass: "text-center h6 font-weight-normal"
  }, [_vm._v("\n            " + _vm._s(_vm.$t('new.loginDescription')) + "\n          ")])])])])]) : _c('div', [_c('div', {
    staticClass: "container-fluid"
  }, [_c('section', {
    staticClass: "pt-5 pt-lg-5 pt-md-5",
    attrs: {
      "id": "banner"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('header', {
    staticClass: "headline mt-5"
  }, [_c('h5', {
    staticClass: "title font-weight-bold"
  }, [_vm._v("\n              " + _vm._s(_vm.$t('new.myMovies')) + "\n            ")])])])])]), _vm._v(" "), _c('FilterContents', {
    attrs: {
      "show": true,
      "savedata": false
    },
    on: {
      "execute_content_filtering": _vm.execute_content_filtering
    }
  }), _vm._v(" "), _vm.data.recently && _vm.data.recently !== null ? _c('section', {
    staticClass: "horizontal-list-container mt-lg-4 pt-5",
    attrs: {
      "id": "watching"
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center justify-content-between w-full"
  }, [_c('h4', {
    staticClass: "font-weight-bold text-nowrap mr-5 px-5 in-watching"
  }, [_vm._v("\n          " + _vm._s(_vm.ChooseLang(_vm.data.recently.list, _vm.data.recently.list_fa)) + "\n        ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:watchSwip",
      value: _vm.swiperOption2,
      expression: "swiperOption2",
      arg: "watchSwip"
    }],
    staticClass: "swiper-container watching-slide"
  }, [_c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.data.recently.data, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [item.type == 'movie' ? _c('nuxt-link', {
      attrs: {
        "to": {
          name: 'movie-show-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.tv/s3/backdrops/' + item.backdrop,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 364,
      height: 190,
      show: true
    }, false))], 1) : item.type == 'episode' ? _c('nuxt-link', {
      attrs: {
        "to": {
          name: 'episode-show-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.tv/s3/backdrops/' + item.backdrop,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 364,
      height: 190,
      show: true
    }, false))], 1) : _c('nuxt-link', {
      attrs: {
        "to": {
          name: 'series-show-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.tv/s3/backdrops/' + item.backdrop,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 364,
      height: 190,
      show: true
    }, false))], 1), _vm._v(" "), _c('div', {
      staticClass: "progress"
    }, [_c('div', {
      staticClass: "progress-bar",
      style: 'width: ' + item.current_time / item.duration_time * 100 + '%',
      attrs: {
        "role": "progressbar",
        "aria-valuenow": "0",
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    })])], 1);
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.data.downloads && _vm.data.downloads !== null ? _c('section', {
    staticClass: "horizontal-list-container reach-begin mt-5"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-2 container-fluid"
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.ChooseLang(_vm.data.downloads.list, _vm.data.downloads.list_fa)) + "\n        ")]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mb-1 d-inline-flex align-items-center show-all-link",
    attrs: {
      "to": {
        name: 'profile-list-list',
        params: {
          list: 'downloads'
        }
      }
    }
  }, [_c('span', {
    staticClass: "show-all-text ml-1"
  }, [_vm._v(_vm._s(_vm.$t('new.show_all')))]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-h show-all-icon",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:downloadsSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "downloadsSwiper"
    }],
    staticClass: "newset-slider"
  }, [_c('div', {
    staticClass: "swiper-wrapper py-1"
  }, _vm._l(_vm.data.downloads.data, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide",
      class: {
        movielabel: item.type == 'movie'
      }
    }, [_c('nuxt-link', {
      class: {
        'is-series': item.type != 'movie'
      },
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), !item.ir && item.persian ? _c('span', {
      staticClass: "label label-rounded label-red label-1"
    }, [_vm._v("دوبله")]) : _vm._e(), _vm._v(" "), !item.ir && !item.persian ? _c('span', {
      staticClass: "label label-rounded label-warning label-1"
    }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), item.free && _vm.$config.envname == 'upera' ? _c('span', {
      staticClass: "label label-blue label-2",
      class: {
        'label-rotated': item.type == 'movie'
      }
    }, [_vm._v("رایگان")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "mt-2"
    }, [_c('h6', {
      staticClass: "mt-2 small font-weight-normal"
    }, [_vm._v("\n                " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n              ")])])], 1);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.data.watchlist && _vm.data.watchlist !== null ? _c('section', {
    staticClass: "horizontal-list-container mt-5 reach-begin"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-2 container-fluid"
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.ChooseLang(_vm.data.watchlist.list, _vm.data.watchlist.list_fa)) + "\n        ")]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mb-1 d-inline-flex align-items-center show-all-link",
    attrs: {
      "to": {
        name: 'profile-list-list',
        params: {
          list: 'watchlist'
        }
      }
    }
  }, [_c('span', {
    staticClass: "show-all-text ml-1"
  }, [_vm._v(_vm._s(_vm.$t('new.show_all')))]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-h show-all-icon",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:watchlistSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "watchlistSwiper"
    }],
    staticClass: "newset-slider"
  }, [_c('div', {
    staticClass: "swiper-wrapper py-1"
  }, _vm._l(_vm.data.watchlist.data, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide",
      class: {
        movielabel: item.type == 'movie'
      }
    }, [_c('nuxt-link', {
      class: {
        'is-series': item.type != 'movie'
      },
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), !item.ir && item.persian ? _c('span', {
      staticClass: "label label-rounded label-red label-1"
    }, [_vm._v("دوبله")]) : _vm._e(), _vm._v(" "), !item.ir && !item.persian ? _c('span', {
      staticClass: "label label-rounded label-warning label-1"
    }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), item.free && _vm.$config.envname == 'upera' ? _c('span', {
      staticClass: "label label-blue label-2",
      class: {
        'label-rotated': item.type == 'movie'
      }
    }, [_vm._v("رایگان")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "mt-2"
    }, [_c('h6', {
      staticClass: "mt-2 small font-weight-normal"
    }, [_vm._v("\n                " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n              ")])])], 1);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.data.likes && _vm.data.likes !== null ? _c('section', {
    staticClass: "horizontal-list-container mt-5 reach-begin"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-2 container-fluid"
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.ChooseLang(_vm.data.likes.list, _vm.data.likes.list_fa)) + "\n        ")]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mb-1 d-inline-flex align-items-center show-all-link",
    attrs: {
      "to": {
        name: 'profile-list-list',
        params: {
          list: 'likes'
        }
      }
    }
  }, [_c('span', {
    staticClass: "show-all-text ml-1"
  }, [_vm._v(_vm._s(_vm.$t('new.show_all')))]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-h show-all-icon",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:likesSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "likesSwiper"
    }],
    staticClass: "newset-slider"
  }, [_c('div', {
    staticClass: "swiper-wrapper py-1"
  }, _vm._l(_vm.data.likes.data, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide",
      class: {
        movielabel: item.type == 'movie'
      }
    }, [_c('nuxt-link', {
      class: {
        'is-series': item.type != 'movie'
      },
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), !item.ir && item.persian ? _c('span', {
      staticClass: "label label-rounded label-red label-1"
    }, [_vm._v("دوبله")]) : _vm._e(), _vm._v(" "), !item.ir && !item.persian ? _c('span', {
      staticClass: "label label-rounded label-warning label-1"
    }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), item.free && _vm.$config.envname == 'upera' ? _c('span', {
      staticClass: "label label-blue label-2",
      class: {
        'label-rotated': item.type == 'movie'
      }
    }, [_vm._v("رایگان")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "mt-2"
    }, [_c('h6', {
      staticClass: "mt-2 small font-weight-normal"
    }, [_vm._v("\n                " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n              ")])])], 1);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.data.offer && _vm.data.offer !== null ? _c('section', {
    staticClass: "horizontal-list-container mt-5 reach-begin"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-2 container-fluid"
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.ChooseLang(_vm.data.offer.list, _vm.data.offer.list_fa)) + "\n        ")]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mb-1 d-inline-flex align-items-center show-all-link",
    attrs: {
      "to": {
        name: 'profile-list-list',
        params: {
          list: 'offer'
        }
      }
    }
  }, [_c('span', {
    staticClass: "show-all-text ml-1"
  }, [_vm._v(_vm._s(_vm.$t('new.show_all')))]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-h show-all-icon",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:offerSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "offerSwiper"
    }],
    staticClass: "newset-slider"
  }, [_c('div', {
    staticClass: "swiper-wrapper py-1"
  }, _vm._l(_vm.data.offer.data, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide",
      class: {
        movielabel: item.type == 'movie'
      }
    }, [_c('nuxt-link', {
      class: {
        'is-series': item.type != 'movie'
      },
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), !item.ir && item.persian ? _c('span', {
      staticClass: "label label-rounded label-red label-1"
    }, [_vm._v("دوبله")]) : _vm._e(), _vm._v(" "), !item.ir && !item.persian ? _c('span', {
      staticClass: "label label-rounded label-warning label-1"
    }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), item.free && _vm.$config.envname == 'upera' ? _c('span', {
      staticClass: "label label-blue label-2",
      class: {
        'label-rotated': item.type == 'movie'
      }
    }, [_vm._v("رایگان")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "mt-2"
    }, [_c('h6', {
      staticClass: "mt-2 small font-weight-normal"
    }, [_vm._v("\n                " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n              ")])])], 1);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.data.watched && _vm.data.watched !== null ? _c('section', {
    staticClass: "horizontal-list-container mt-5 reach-begin"
  }, [_c('div', {
    staticClass: "d-flex justify-content-between align-items-center mb-2 container-fluid"
  }, [_c('h4', {
    staticClass: "font-weight-bold"
  }, [_vm._v("\n          " + _vm._s(_vm.ChooseLang(_vm.data.watched.list, _vm.data.watched.list_fa)) + "\n        ")]), _vm._v(" "), _c('nuxt-link', {
    staticClass: "mb-1 d-inline-flex align-items-center show-all-link",
    attrs: {
      "to": {
        name: 'profile-list-list',
        params: {
          list: 'watched'
        }
      }
    }
  }, [_c('span', {
    staticClass: "show-all-text ml-1"
  }, [_vm._v(_vm._s(_vm.$t('new.show_all')))]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-ellipsis-h show-all-icon",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1), _vm._v(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:watchedSwiper",
      value: _vm.swiperOption,
      expression: "swiperOption",
      arg: "watchedSwiper"
    }],
    staticClass: "newset-slider"
  }, [_c('div', {
    staticClass: "swiper-wrapper py-1"
  }, _vm._l(_vm.data.watched.data, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide",
      class: {
        movielabel: item.type == 'movie'
      }
    }, [_c('nuxt-link', {
      class: {
        'is-series': item.type != 'movie'
      },
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), item.type != 'movie' ? _c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.tv/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.tv/s3/posters/' + item.poster,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      width: 142,
      height: 212,
      show: true
    }, false)) : _vm._e(), _vm._v(" "), !item.ir && item.persian ? _c('span', {
      staticClass: "label label-rounded label-red label-1"
    }, [_vm._v("دوبله")]) : _vm._e(), _vm._v(" "), !item.ir && !item.persian ? _c('span', {
      staticClass: "label label-rounded label-warning label-1"
    }, [_vm._v("زیرنویس")]) : _vm._e(), _vm._v(" "), item.free && _vm.$config.envname == 'upera' ? _c('span', {
      staticClass: "label label-blue label-2",
      class: {
        'label-rotated': item.type == 'movie'
      }
    }, [_vm._v("رایگان")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
      staticClass: "mt-2"
    }, [_c('h6', {
      staticClass: "mt-2 small font-weight-normal"
    }, [_vm._v("\n                " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n              ")])])], 1);
  }), 0)])]) : _vm._e(), _vm._v(" "), _vm.data.watched == null && _vm.data.recently == null && _vm.data.downloads == null && _vm.data.watchlist == null && _vm.data.watchlist == null && _vm.data.offer == null ? _c('div', {
    staticClass: "container-fluid-notfound"
  }, [_vm._m(0)]) : _vm._e()], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center py-5"
  }, [_c('h2', [_vm._v("محتوایی جهت نمایش وجود ندارد")])]);
}];

// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=d1af267a&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./components/FilterContents.vue + 4 modules
var FilterContents = __webpack_require__(253);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/index.vue?vue&type=script&lang=js



/* harmony default export */ var profilevue_type_script_lang_js = ({
  components: {
    FilterContents: FilterContents["default"]
  },
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!context.app.$auth.loggedIn) {
              _context.next = 2;
              break;
            }
            _context.next = 1;
            return context.app.$axios.get('/get/profile/get_list/all' + context.store.getters.filtercontents);
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
      data: {
        recently: null,
        downloads: null,
        watchlist: null,
        likes: null,
        offer: null,
        watched: null
      },
      swiperOption: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        grabCursor: true,
        setWrapperSize: true,
        threshold: 2,
        breakpoints: {
          200: {
            slidesPerView: 2.5
          },
          420: {
            slidesPerView: 3.5
          },
          768: {
            slidesPerView: 4.5
          },
          992: {
            slidesPerView: 5.5
          },
          1024: {
            slidesPerView: 6.5
          },
          1200: {
            slidesPerView: 7
          },
          1420: {
            slidesPerView: 8
          },
          1670: {
            slidesPerView: 9
          }
        }
      },
      swiperOption2: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        grabCursor: true,
        watchOverflow: true,
        threshold: 2,
        breakpoints: {
          320: {
            slidesPerView: 1.5
          },
          768: {
            slidesPerView: 2.5
          },
          992: {
            slidesPerView: 2.5
          },
          1024: {
            slidesPerView: 3.5
          },
          1420: {
            slidesPerView: 4.5
          },
          1670: {
            slidesPerView: 4.5
          }
        }
      }
    };
  },
  head: function head() {
    return {
      title: this.$t('setting.profile')
    };
  },
  mounted: function mounted() {
    if (this.data.recently != null) {
      var watching = document.getElementById('watching');
      if (this.watchSwip && watching) {
        this.watchSwip.on('reachBeginning', function () {
          watching.classList.remove('swipe');
        });
        this.watchSwip.on('fromEdge', function () {
          watching.classList.add('swipe');
        });
      }
    }
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale == 'fa') return fa;else return en;
    },
    SHOW_MODAL: function SHOW_MODAL() {
      this.$store.dispatch('login/SHOW_MODAL', {
        premessage: null,
        premobile: null,
        preredirect: null,
        prerefresh: false
      });
    },
    execute_content_filtering: function execute_content_filtering() {
      var _this = this;
      if (this.$auth.loggedIn) {
        this.$nuxt.$loading.start();
        this.$store.dispatch('filter/FILTER_LOADING');
        this.$axios.get('/get/profile/get_list/all' + this.filtercontents).then(function (response) {
          if (response.status === 200) {
            //if (response.data.data.data.length) {
            _this.data = response.data.data;
            //}
          }
          _this.$store.dispatch('filter/CLEAN_FILTER_LOADING');
          _this.$nuxt.$loading.finish();
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_profilevue_type_script_lang_js = (profilevue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/profile/index.vue?vue&type=style&index=0&id=d1af267a&prod&scoped=true&lang=css
var profilevue_type_style_index_0_id_d1af267a_prod_scoped_true_lang_css = __webpack_require__(953);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/profile/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "d1af267a",
  null
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(124).default,FilterContents: __webpack_require__(253).default})


/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profile.74cecbb.png";

/***/ }),

/***/ 865:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 953:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_d1af267a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(865);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_d1af267a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_d1af267a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);