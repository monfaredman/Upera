(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116,90,93,95],{

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/index.vue?vue&type=template&id=2ee36b60&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm.isLoadingSlider ? _c('ShowcaseSkeleton', {
    attrs: {
      "page": 'home'
    }
  }) : _vm.sliders && _vm.sliders.length ? _c('section', {
    attrs: {
      "id": "slideshow"
    }
  }, [_c('div', {
    staticClass: "swiper-container showcase main-slideshow"
  }, [_c('ShowcaseCarousel', {
    key: _vm.swiperKey,
    ref: "carousel",
    attrs: {
      "options": _vm.swiperOption3,
      "sliders": _vm.sliders
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm.isLoadingOffer ? _c('OfferSectionSkeleton') : _vm.offer ? _c('OfferSection', {
    attrs: {
      "offer": _vm.offer
    }
  }) : _vm._e(), _vm._v(" "), _c('FilterSkeleton', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isLoadingFilters,
      expression: "isLoadingFilters"
    }]
  }), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isLoadingFilters,
      expression: "!isLoadingFilters"
    }]
  }, [_c('FilterContents', {
    attrs: {
      "show": true,
      "show-genres": true,
      "savedata": false,
      "start-fetching": _vm.startFetchingFilters,
      "no-top": !(_vm.sliders && _vm.sliders.length > 0)
    },
    on: {
      "execute_content_filtering": _vm.execute_content_filtering,
      "filters-ready": function filtersReady($event) {
        _vm.isLoadingFilters = false;
      }
    }
  })], 1), _vm._v(" "), _vm.isLoadingLives ? _c('HorizontalListSkeleton', {
    attrs: {
      "variant": "backdrop"
    }
  }) : _vm.lives && _vm.lives.data && _vm.lives.data.length ? _c('div', {
    staticClass: "mt-4"
  }, [_c('HorizontalList', {
    attrs: {
      "title-en": _vm.lives.list_en,
      "title-fa": _vm.lives.list_fa,
      "show-all-route": {
        name: 'lists-list',
        params: {
          list: _vm.lives.list
        }
      },
      "items": _vm.lives.data,
      "instance-name": "livesSwip",
      "options": _vm.SWIPER_OPTION_BACKDROP,
      "card-variant": "backdrop",
      "size": {
        w: 364,
        h: 190
      },
      "link-builder": _vm.buildIdRoute,
      "show-badges": false,
      "add-series-class": false,
      "hoverable": true,
      "type": 'live'
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm.isLoadingUgcs ? _c('HorizontalListSkeleton', {
    attrs: {
      "variant": "backdrop"
    }
  }) : _vm.ugcs && Array.isArray(_vm.ugcs) && _vm.ugcs.length > 0 ? _c('div', {
    staticClass: "mt-4"
  }, _vm._l(_vm.ugcs, function (sec, rootindex) {
    return _c('div', {
      key: rootindex
    }, [_c('HorizontalList', {
      attrs: {
        "title-en": sec.title_en,
        "title-fa": sec.title_fa,
        "show-all-route": {
          name: 'lists-list',
          params: {
            list: sec.list
          }
        },
        "items": sec,
        "instance-name": "ugcs".concat(rootindex + 9000),
        "options": _vm.SWIPER_OPTION_BACKDROP,
        "card-variant": "backdrop",
        "size": {
          w: 450,
          h: 254
        },
        "link-builder": _vm.buildShowIdRoute,
        "show-badges": false,
        "add-series-class": false,
        "hoverable": true,
        "type": 'ugc'
      }
    })], 1);
  }), 0) : _vm._e(), _vm._v(" "), _vm.isLoadingRecently && _vm.$auth.loggedIn ? _c('HorizontalListSkeleton', {
    attrs: {
      "variant": "backdrop"
    }
  }) : _vm.recently !== null ? _c('section', {
    staticClass: "horizontal-list-container mt-lg-4 pt-4 pb-4",
    attrs: {
      "id": "watching"
    }
  }, [_c('div', {
    staticClass: "d-flex align-items-center justify-content-between w-full"
  }, [_c('h4', {
    staticClass: "font-weight-bold text-nowrap mr-5 ml-0 ml-sm-4 ml-xl-0 px-5 in-watching"
  }, [_vm._v("\n        " + _vm._s(_vm.ChooseLang(_vm.recently.list_en, _vm.recently.list_fa)) + "\n      ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "swiper",
      rawName: "v-swiper:watchSwip",
      value: _vm.swiperOption2,
      expression: "swiperOption2",
      arg: "watchSwip"
    }],
    staticClass: "swiper-container watching-slider"
  }, [_c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l(_vm.recently.recently, function (item, index) {
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
        name: "lazy",
        rawName: "v-lazy",
        value: 'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' + item.backdrop,
        expression: "\n                  'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' +\n                  item.backdrop\n                "
      }, {
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": 'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' + item.backdrop,
        "alt": item.name,
        "loading": "lazy"
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
        "data-src": 'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' + item.backdrop,
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
        "data-src": 'https://thumb.upera.shop/thumb?w=364&h=190&q=100&a=c&src=https://cdn.upera.shop/s3/backdrops/' + item.backdrop,
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
  }), 0)])])]) : _vm._e(), _vm._v(" "), _vm.isLoadingDiscover ? [_c('OccasionSectionSkeleton'), _vm._v(" "), _c('HorizontalListSkeleton', {
    attrs: {
      "variant": "poster"
    }
  }), _vm._v(" "), _c('HorizontalListSkeleton', {
    attrs: {
      "variant": "poster"
    }
  }), _vm._v(" "), _c('HorizontalListSkeleton', {
    attrs: {
      "variant": "poster"
    }
  })] : _vm.discoverBlocks.length ? [_vm._l(_vm.discoverBlocks, function (block, blockIndex) {
    return [block.kind === 'discover' ? _c('div', {
      key: block.key || "discover-block-".concat(blockIndex)
    }, [block.list.style == 'occasion' && block.list.data.length > 0 ? _c('div', [_c('section', {
      staticClass: "mb-5",
      attrs: {
        "id": "special"
      }
    }, [_c('div', {
      staticClass: "container-fluid"
    }, [_c('div', {
      staticClass: "special d-flex flex-column justify-content-start align-items-start align-items-lg-center flex-lg-row"
    }, [_c('h4', {
      staticClass: "font-weight-bold text-nowrap mr-lg-5 mb-4 mb-lg-0 special-title"
    }, [_vm._v("\n                  " + _vm._s(_vm.ChooseLang(block.list.list_en, block.list.list_fa)) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "position-relative w-full"
    }, [_c('div', {
      staticClass: "special-slides",
      attrs: {
        "id": "special-slides"
      }
    }, _vm._l(block.list.data, function (item, index) {
      return _c('div', {
        key: index,
        staticClass: "special-slide",
        class: {
          active: index == 0
        }
      }, [_c('div', {
        staticClass: "d-flex justify-content-start w-full special"
      }, [_c('img', {
        directives: [{
          name: "lazy-load",
          rawName: "v-lazy-load"
        }],
        staticClass: "special-image spec-1",
        attrs: {
          "data-src": 'https://thumb.upera.shop/thumb?w=142&h=212&q=100&a=c&src=https://cdn.upera.shop/s3/posters/' + item.poster,
          "alt": item.name
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "special-content d-flex flex-column justify-content-between justify-content-lg-around align-items-end w-full"
      }, [_c('div', {
        staticClass: "d-flex justify-content-between w-full"
      }, [_c('div', {
        staticClass: "ml-2 ml-lg-5"
      }, [_c('h6', {
        staticClass: "font-weight-bold mb-0 d-lg-none"
      }, [_vm._v("\n                                " + _vm._s(_vm.truncate(_vm.ChooseLang(item.name, item.name_fa), 15)) + "\n                              ")]), _vm._v(" "), _c('h5', {
        staticClass: "font-weight-bold mb-0 d-none d-lg-block"
      }, [_vm._v("\n                                " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n                              ")]), _vm._v(" "), _c('p', {
        staticClass: "mt-1 font-weight-normal"
      }, _vm._l(item.genre.split(','), function (genre, index2) {
        return _c('span', {
          key: index2
        }, [_vm._v("\n                                  " + _vm._s(item.new_genres[genre.toLowerCase()] || genre) + "\n                                  "), index2 + 1 < item.genre.split(',').length ? _c('span', [_vm._v("\n                                    |\n                                  ")]) : _vm._e()]);
      }), 0)]), _vm._v(" "), _c('div', {
        staticClass: "d-flex flex-column justify-content-center align-items-center small"
      }, [_c('nuxt-link', {
        staticClass: "d-inline-flex align-items-center show-all-link",
        attrs: {
          "to": {
            name: 'lists-list',
            params: {
              list: block.list.occasion
            }
          }
        }
      }, [_c('span', {
        staticClass: "show-all-text ml-1"
      }, [_vm._v("\n                                  " + _vm._s(_vm.$t('new.show_all')) + "\n                                ")]), _vm._v(" "), _c('i', {
        staticClass: "fa fa-ellipsis-h show-all-icon",
        attrs: {
          "aria-hidden": "true"
        }
      })])], 1)]), _vm._v(" "), _c('div', {
        staticClass: "d-flex justify-content-between w-full"
      }, [_c('p', {
        staticClass: "d-lg-none"
      }, [_vm._v("\n                              " + _vm._s(_vm.truncate(_vm.ChooseLang(item.overview, item.overview_fa), 60)) + "\n                            ")]), _vm._v(" "), _c('p', {
        staticClass: "d-none d-lg-block text-justify ml-2 ml-lg-5"
      }, [_vm._v("\n                              " + _vm._s(_vm.ChooseLang(item.overview, item.overview_fa)) + "\n                            ")])]), _vm._v(" "), item.type == 'movie' ? _c('nuxt-link', {
        staticClass: "show-btn small",
        attrs: {
          "to": {
            name: 'movie-id',
            params: {
              id: item.id
            }
          }
        }
      }, [_c('span', [_vm._v("نمایش")]), _vm._v(" "), _c('img', {
        directives: [{
          name: "lazy-load",
          rawName: "v-lazy-load"
        }],
        staticClass: "ml-2",
        attrs: {
          "data-src": __webpack_require__(823),
          "alt": ""
        }
      })]) : item.type == 'episode' ? _c('nuxt-link', {
        staticClass: "show-btn small",
        attrs: {
          "to": {
            name: 'episode-id',
            params: {
              id: item.id
            }
          }
        }
      }, [_c('span', [_vm._v("نمایش")]), _vm._v(" "), _c('img', {
        directives: [{
          name: "lazy-load",
          rawName: "v-lazy-load"
        }],
        staticClass: "ml-2",
        attrs: {
          "data-src": __webpack_require__(823),
          "alt": ""
        }
      })]) : _c('nuxt-link', {
        staticClass: "show-btn small",
        attrs: {
          "to": {
            name: 'series-id',
            params: {
              id: item.id
            }
          }
        }
      }, [_c('span', [_vm._v("نمایش")]), _vm._v(" "), _c('img', {
        directives: [{
          name: "lazy-load",
          rawName: "v-lazy-load"
        }],
        staticClass: "ml-2",
        attrs: {
          "data-src": __webpack_require__(823),
          "alt": ""
        }
      })])], 1)])]);
    }), 0)])])])])]) : block.list.data.length > 0 ? _c('div', {
      staticClass: "mt-4"
    }, [_c('HorizontalList', {
      attrs: {
        "title-en": block.list.list_en,
        "title-fa": block.list.list_fa,
        "show-all-route": {
          name: 'lists-list',
          params: {
            list: block.list.list.toLowerCase()
          }
        },
        "items": block.list.data,
        "instance-name": String(block.originalIndex),
        "options": _vm.SWIPER_OPTION_POSTER,
        "card-variant": "poster",
        "size": {
          w: 183,
          h: 273
        },
        "link-builder": _vm.buildIdRoute,
        "show-badges": true,
        "type": 'discover'
      }
    })], 1) : _vm._e()]) : _c('div', {
      key: block.key || "slider-".concat(blockIndex),
      staticClass: "mt-4"
    }, [block.sliderType === 'type1' ? _c('section', {
      staticClass: "type1-carousel-section"
    }, [_c('div', {
      directives: [{
        name: "swiper",
        rawName: "v-swiper:[block.swiperHandle]",
        value: _vm.getType1SwiperOptions(),
        expression: "getType1SwiperOptions()",
        arg: block.swiperHandle
      }],
      staticClass: "swiper-container type1-carousel-container"
    }, [_c('div', {
      staticClass: "swiper-wrapper"
    }, _vm._l(block.items, function (item, index) {
      return _c('div', {
        key: index,
        staticClass: "swiper-slide type1-carousel-slide"
      }, [_c('nuxt-link', {
        staticClass: "type1-carousel-link",
        attrs: {
          "to": _vm.buildIdRoute(item)
        }
      }, [_c('b-img', {
        directives: [{
          name: "lazy-load",
          rawName: "v-lazy-load"
        }],
        staticClass: "type1-carousel-image",
        attrs: {
          "blank": "",
          "blank-color": "#bbb",
          "show": "",
          "data-src": _vm.getType1ImageSrc(item),
          "sizes": _vm.type1CarouselSizes,
          "alt": _vm.ChooseLang(item.name, item.name_fa)
        }
      })], 1)], 1);
    }), 0), _vm._v(" "), block.items.length > 1 ? _c('div', {
      staticClass: "type1-carousel-navigation"
    }, [_c('button', {
      staticClass: "type1-carousel-btn type1-carousel-prev",
      attrs: {
        "aria-label": "Previous"
      },
      on: {
        "click": function click($event) {
          return _vm.type1CarouselPrev(block.swiperHandle);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-chevron-right"
    })]), _vm._v(" "), _c('button', {
      staticClass: "type1-carousel-btn type1-carousel-next",
      attrs: {
        "aria-label": "Next"
      },
      on: {
        "click": function click($event) {
          return _vm.type1CarouselNext(block.swiperHandle);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-chevron-left"
    })])]) : _vm._e()])]) : block.sliderType === 'type2' ? _c('div', [_c('HorizontalList', {
      attrs: {
        "title-en": block.titleEn,
        "title-fa": block.titleFa,
        "items": block.items,
        "instance-name": block.instanceName,
        "options": block.swiperOptions || _vm.SWIPER_OPTION_BACKDROP,
        "card-variant": "block.cardVariant || 'backdrop'",
        "size": block.size || {
          w: 364,
          h: 190
        },
        "link-builder": _vm.buildIdRoute,
        "show-badges": false,
        "add-series-class": false,
        "hoverable": true,
        "type": 'slider'
      }
    })], 1) : block.sliderType === 'type3' ? _c('div', [_c('HorizontalList', {
      attrs: {
        "title-en": block.titleEn,
        "title-fa": block.titleFa,
        "items": block.items,
        "instance-name": block.instanceName,
        "options": block.swiperOptions || _vm.SWIPER_OPTION_BACKDROP,
        "card-variant": "block.cardVariant || 'backdrop'",
        "size": block.size || {
          w: 364,
          h: 190
        },
        "link-builder": _vm.buildIdRoute,
        "show-badges": false,
        "add-series-class": false,
        "hoverable": true,
        "type": 'slider'
      }
    })], 1) : _vm._e()])];
  })] : _vm.nocontent ? _c('div', {
    staticClass: "container-fluid-notfound"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _c('client-only', [_vm.data.last_page > 1 ? _c('infinite-loading', {
    attrs: {
      "identifier": _vm.infiniteId
    },
    on: {
      "infinite": _vm.infiniteHandler
    }
  }, [_c('span', {
    attrs: {
      "slot": "no-more"
    },
    slot: "no-more"
  }), _vm._v(" "), _c('span', {
    attrs: {
      "slot": "no-results"
    },
    slot: "no-results"
  })]) : _vm._e()], 1), _vm._v(" "), _c('client-only', [_c('b-modal', {
    attrs: {
      "id": "modal-sharing",
      "centered": "",
      "hide-footer": "",
      "title": 'اشتراک گذاری'
    },
    model: {
      value: _vm.modalsharing,
      callback: function callback($$v) {
        _vm.modalsharing = $$v;
      },
      expression: "modalsharing"
    }
  }, [_c('Socialsharing', {
    attrs: {
      "mtitle": _vm.simpleData.name_fa,
      "description": _vm.simpleData.overview_fa
    }
  })], 1)], 1)], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center py-5"
  }, [_c('h2', [_vm._v("محتوایی جهت نمایش وجود ندارد")])]);
}];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=2ee36b60&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(180);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.is-finite.js
var es_number_is_finite = __webpack_require__(956);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__(958);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
var es_string_match = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.add-all.js
var esnext_set_add_all = __webpack_require__(960);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.delete-all.js
var esnext_set_delete_all = __webpack_require__(961);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.difference.js
var esnext_set_difference = __webpack_require__(962);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.every.js
var esnext_set_every = __webpack_require__(966);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.filter.js
var esnext_set_filter = __webpack_require__(967);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.find.js
var esnext_set_find = __webpack_require__(968);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.intersection.js
var esnext_set_intersection = __webpack_require__(969);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-disjoint-from.js
var esnext_set_is_disjoint_from = __webpack_require__(971);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-subset-of.js
var esnext_set_is_subset_of = __webpack_require__(973);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.is-superset-of.js
var esnext_set_is_superset_of = __webpack_require__(975);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.join.js
var esnext_set_join = __webpack_require__(977);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.map.js
var esnext_set_map = __webpack_require__(978);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.reduce.js
var esnext_set_reduce = __webpack_require__(979);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.some.js
var esnext_set_some = __webpack_require__(980);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.symmetric-difference.js
var esnext_set_symmetric_difference = __webpack_require__(981);

// EXTERNAL MODULE: ./node_modules/core-js/modules/esnext.set.union.js
var esnext_set_union = __webpack_require__(983);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(318);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js
var vue_infinite_loading = __webpack_require__(752);
var vue_infinite_loading_default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading);

// EXTERNAL MODULE: ./components/FilterContents.vue + 4 modules
var FilterContents = __webpack_require__(253);

// EXTERNAL MODULE: ./components/HorizontalList.vue + 4 modules
var HorizontalList = __webpack_require__(744);

// EXTERNAL MODULE: ./components/ShowcaseCarousel.vue + 4 modules
var ShowcaseCarousel = __webpack_require__(850);

// EXTERNAL MODULE: ./components/OfferSection.vue + 4 modules
var OfferSection = __webpack_require__(851);

// EXTERNAL MODULE: ./components/Socialsharing.vue + 4 modules
var Socialsharing = __webpack_require__(757);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/index.vue?vue&type=script&lang=js




function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }













































var SWIPER_OPTION_OFFER = {
  slidesPerView: 5.5,
  spaceBetween: 10,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 3.5
    },
    1200: {
      slidesPerView: 5.5
    },
    1600: {
      slidesPerView: 7.5
    }
  }
};
var SWIPER_OPTION_POSTER = {
  spaceBetween: 10,
  slidesPerView: 3.3,
  grabCursor: true,
  setWrapperSize: true,
  threshold: 2,
  countdown: {},
  breakpoints: {
    200: {
      slidesPerView: 2.8
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
};
var SWIPER_OPTION_BACKDROP = {
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
      slidesPerView: 3
    },
    1420: {
      slidesPerView: 2.8
    },
    1670: {
      slidesPerView: 3
    }
  }
};
var SWIPER_OPTION_RECENTLY = {
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
      slidesPerView: 3.5
    },
    1024: {
      slidesPerView: 4.5
    },
    1420: {
      slidesPerView: 4.5
    },
    1670: {
      slidesPerView: 4.5
    }
  }
};
var SLICK_MAIN_OPTIONS = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchThreshold: 10,
  autoplay: true
};
var SLIDER_PRESENTATION = {
  type1: {
    instancePrefix: 'type1Carousel'
  },
  type2: {
    titleEn: 'Type 2',
    titleFa: 'نوع ۲',
    instancePrefix: 'type2Swip',
    cardVariant: 'backdrop',
    size: {
      w: 364,
      h: 190
    },
    swiperOptions: SWIPER_OPTION_BACKDROP
  },
  type3: {
    titleEn: 'Type 3',
    titleFa: 'نوع ۳',
    instancePrefix: 'type3Swip',
    cardVariant: 'backdrop',
    size: {
      w: 364,
      h: 190
    },
    swiperOptions: SWIPER_OPTION_BACKDROP
  }
};
/* harmony default export */ var string_replace_loader_ref_13_pagesvue_type_script_lang_js = ({
  components: {
    InfiniteLoading: vue_infinite_loading_default.a,
    FilterContents: FilterContents["default"],
    HorizontalList: HorizontalList["default"],
    ShowcaseCarousel: ShowcaseCarousel["default"],
    OfferSection: OfferSection["default"],
    Socialsharing: Socialsharing["default"],
    ShowcaseSkeleton: function ShowcaseSkeleton() {
      return __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, 922));
    },
    HorizontalListSkeleton: function HorizontalListSkeleton() {
      return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, 1110));
    },
    OccasionSectionSkeleton: function OccasionSectionSkeleton() {
      return __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, 1111));
    },
    FilterSkeleton: function FilterSkeleton() {
      return __webpack_require__.e(/* import() */ 11).then(__webpack_require__.bind(null, 1109));
    },
    OfferSectionSkeleton: function OfferSectionSkeleton() {
      return __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, 1112));
    }
  },
  asyncData: function asyncData() {
    // Return empty data, all fetching will happen in mounted()
    return {
      data: {},
      offer: null
    };
  },
  data: function data() {
    return {
      data: {},
      recently: null,
      offer: null,
      lives: null,
      ugcs: null,
      page: 1,
      infiniteId: +new Date(),
      swiperKey: +new Date(),
      simpleData: {
        type: 'episode',
        id: '9f761f10-ad1c-11f0-a2bb-d96f4ae09bb8',
        name: 'Episode 11 Midnight with Amirhossein Qeyasi S05',
        name_fa: 'قسمت 11 نیمه شب با امیرحسین قیاسی ۵',
        created_at: '2025-10-19 18:51:29',
        updated_at: '2025-10-19 19:12:04',
        poster: 'eZhlFjdY73xCtKo6ZhkK.jpg',
        overview: 'توسعه اونا تند و ناپایدار؛ توسعه ما کند و پایدار!',
        overview_fa: 'توسعه اونا تند و ناپایدار؛ توسعه ما کند و پایدار!',
        year: 2025,
        genre: 'Comedy',
        rate: 6,
        backdrop: 'RpCWoHg6swpNyucUxzsQ.jpg',
        age: 'PG-13',
        runtime: 28,
        free: 0,
        traffic: 0,
        traffic_oo: 0,
        internal_studio: 0,
        current_time: 0,
        duration_time: 0,
        player: 'default',
        upera: '3057504',
        cloud: 'aws',
        ir: 1,
        owner: 3439731,
        imdb: null,
        persian: 1,
        series_id: 'ab9fb8b0-76e5-11f0-ab63-bf0bb12031a6',
        series_name: 'Midnight with Amirhossein Qeyasi S05',
        series_name_fa: 'نیمه شب با امیرحسین قیاسی ۵',
        season_number: '1',
        episode_number: '11',
        old_name_fa: 'قسمت یازدهم نیمه شب با امیرحسین قیاسی',
        old_name: 'Midnight with Amirhossein Ghiasi S05 E11'
      },
      actionsButtons: [{
        mainButton: {
          exist: true,
          action: 'play',
          label: {
            en: 'Play',
            fa: 'نمایش'
          },
          type: {
            en: 'Play',
            fa: 'نمایش'
          }
        },
        downloadButton: {
          exist: true,
          action: 'openDownloadModal',
          label: {
            en: 'Free Download',
            fa: 'دانلود رایگان'
          }
        }
      }],
      distance: -Infinity,
      nocontent: false,
      ghostApi: '/getV2/discover',
      SWIPER_OPTION_POSTER: SWIPER_OPTION_POSTER,
      SWIPER_OPTION_BACKDROP: SWIPER_OPTION_BACKDROP,
      SWIPER_OPTION_OFFER: SWIPER_OPTION_OFFER,
      swiperOption3: SLICK_MAIN_OPTIONS,
      swiperOption2: SWIPER_OPTION_RECENTLY,
      swiperOptionType1: {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        effect: 'slide',
        speed: 500
      },
      type1CarouselSizes: '(max-width: 991.98px) 880px, 1920px',
      // Loading states
      isLoadingSlider: true,
      isLoadingRecently: true,
      isLoadingLives: true,
      isLoadingUgcs: false,
      isLoadingDiscover: true,
      isLoadingFilters: true,
      isLoadingOffer: true,
      isLoadingDynamicSliders: false,
      dynamicSliderInsertions: [],
      startFetchingFilters: false,
      // Clap and watchlist state
      clapinterval: false,
      user_claps_counter: 0,
      clapCheckTimer: false,
      modalsharing: false,
      // Timeout timers for skeleton loading
      skeletonTimeouts: {}
    };
  },
  computed: {
    sliders: function sliders() {
      return Array.isArray(this.$store.state.slider.sliders) ? this.$store.state.slider.sliders : [];
    },
    type1Sliders: function type1Sliders() {
      var sliders = this.$store.state.slider.type1Sliders;
      return Array.isArray(sliders) && sliders.length > 0 ? this.transformSliderData(sliders) : [];
    },
    type2Sliders: function type2Sliders() {
      var sliders = this.$store.state.slider.type2Sliders;
      return Array.isArray(sliders) && sliders.length > 0 ? this.transformSliderData(sliders) : [];
    },
    type3Sliders: function type3Sliders() {
      var sliders = this.$store.state.slider.type3Sliders;
      return Array.isArray(sliders) && sliders.length > 0 ? this.transformSliderData(sliders) : [];
    },
    discoverLists: function discoverLists() {
      var _this$data;
      return Array.isArray((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data.data) ? this.data.data : [];
    },
    discoverBlocks: function discoverBlocks() {
      var baseBlocks = this.discoverLists.map(function (list, index) {
        return {
          kind: 'discover',
          // Use index to ensure unique keys even if list.list values are duplicated
          key: "discover-".concat(list.list || 'unknown', "-").concat(index),
          list: list,
          originalIndex: index
        };
      });
      if (!this.dynamicSliderInsertions.length) {
        return baseBlocks;
      }
      var sliderEntries = this.dynamicSliderInsertions.slice().sort(function (a, b) {
        var _a$index_on_list, _b$index_on_list, _a$_sequence, _b$_sequence;
        var indexDiff = ((_a$index_on_list = a.index_on_list) !== null && _a$index_on_list !== void 0 ? _a$index_on_list : Infinity) - ((_b$index_on_list = b.index_on_list) !== null && _b$index_on_list !== void 0 ? _b$index_on_list : Infinity);
        if (indexDiff !== 0) {
          return indexDiff;
        }
        return ((_a$_sequence = a._sequence) !== null && _a$_sequence !== void 0 ? _a$_sequence : 0) - ((_b$_sequence = b._sequence) !== null && _b$_sequence !== void 0 ? _b$_sequence : 0);
      });
      var merged = [];
      var sliderCursor = 0;
      baseBlocks.forEach(function (block, index) {
        merged.push(block);
        var afterIndex = index + 1;
        while (sliderCursor < sliderEntries.length && sliderEntries[sliderCursor].index_on_list === afterIndex) {
          merged.push(_objectSpread(_objectSpread({
            kind: 'slider'
          }, sliderEntries[sliderCursor]), {}, {
            key: sliderEntries[sliderCursor].key || "slider-".concat(sliderEntries[sliderCursor].sliderType, "-").concat(sliderCursor)
          }));
          sliderCursor += 1;
        }
      });
      while (sliderCursor < sliderEntries.length) {
        merged.push(_objectSpread(_objectSpread({
          kind: 'slider'
        }, sliderEntries[sliderCursor]), {}, {
          key: sliderEntries[sliderCursor].key || "slider-".concat(sliderEntries[sliderCursor].sliderType, "-").concat(sliderCursor)
        }));
        sliderCursor += 1;
      }
      return merged;
    }
  },
  watch: {
    recently: function recently(newVal) {
      var _this = this;
      if (newVal && newVal.recently && newVal.recently.length > 0) {
        this.$nextTick(function () {
          console.log('handling');
          _this.setupWatchingSwiper();
        });
      }
    }
  },
  destroyed: function destroyed() {
    var _this2 = this;
    if (this.data.occasions != null) {
      var specials = document.getElementsByClassName('special-slides');
      var k = specials.length;
      if (k) {
        window.removeEventListener('resize', this.specialsize);
      }
    }
    // Clear clap interval if exists
    if (this.clapinterval) {
      clearInterval(this.clapinterval);
      this.clapinterval = false;
    }
    // Clear clap timer if exists
    if (this.clapCheckTimer) {
      clearTimeout(this.clapCheckTimer);
      this.clapCheckTimer = false;
    }
    // Clear all skeleton timeout timers
    Object.keys(this.skeletonTimeouts || {}).forEach(function (key) {
      if (_this2.skeletonTimeouts[key]) {
        clearTimeout(_this2.skeletonTimeouts[key]);
      }
    });
    this.skeletonTimeouts = {};
  },
  mounted: function mounted() {
    var _this3 = this;
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var _this3$$store, _this3$$auth;
      var checkuser, authUser, user, _this3$checkuser2;
      return regeneratorRuntime.wrap(function (_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 1;
            return _this3.withSkeletonTimeout('slider', function (state) {
              _this3.isLoadingSlider = state;
            }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function (_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 1;
                    return _this3.$store.dispatch('slider/fetchSlider', {
                      filtercontents: _this3.filtercontents
                    });
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            })));
          case 1:
            // After slider loads, trigger filters/genres to load
            _this3.startFetchingFilters = true;

            // After slider is loaded, fetch other content in parallel
            // Fetch offer
            _this3.withSkeletonTimeout('offer', function (state) {
              _this3.isLoadingOffer = state;
            }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var offerRes;
              return regeneratorRuntime.wrap(function (_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 1;
                    return _this3.$axios.get('/get/offer' + _this3.filtercontents);
                  case 1:
                    offerRes = _context2.sent;
                    if (offerRes.data) {
                      _this3.offer = offerRes.data;
                    } else {
                      _this3.offer = null;
                    }
                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }))).catch(function (error) {
              console.error('Error fetching offer:', error);
              _this3.isLoadingOffer = false;
              _this3.offer = null;
            });

            // Fetch recently watched
            _this3.get_recently();

            // Fetch discover content
            _this3.fetchDiscoverData();

            // Fetch dynamic sliders based on user request configuration
            _this3.loadDynamicSliderLayout();

            // Fetch lives only if user.show_lives === 1
            checkuser = ((_this3$$store = _this3.$store) === null || _this3$$store === void 0 || (_this3$$store = _this3$$store.getters) === null || _this3$$store === void 0 ? void 0 : _this3$$store.checkuser) || {};
            authUser = ((_this3$$auth = _this3.$auth) === null || _this3$$auth === void 0 ? void 0 : _this3$$auth.user) || {};
            user = checkuser || authUser;
            if (user.show_lives === 1) {
              _this3.withSkeletonTimeout('lives', function (state) {
                _this3.isLoadingLives = state;
              }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this3$checkuser;
                var livesRes;
                return regeneratorRuntime.wrap(function (_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 1;
                      return _this3.$axios.get('/get/lives?ref=' + ((_this3$checkuser = _this3.checkuser) === null || _this3$checkuser === void 0 ? void 0 : _this3$checkuser.ref));
                    case 1:
                      livesRes = _context3.sent;
                      if (livesRes.data && livesRes.data.data) {
                        _this3.lives = livesRes.data;
                      } else {
                        _this3.lives = null;
                      }
                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }))).catch(function (e) {
                console.error('fetch lives failed', e);
                _this3.isLoadingLives = false;
              });
            } else {
              _this3.isLoadingLives = false;
              _this3.lives = null;
            }

            // Fetch UGCs only if user.show_ugcs === 1
            if (user.show_ugcs === 1) {
              _this3.isLoadingUgcs = true;
              _this3.$axios.get('/get/ugcs?ref=' + ((_this3$checkuser2 = _this3.checkuser) === null || _this3$checkuser2 === void 0 ? void 0 : _this3$checkuser2.ref)).then(function (ugcsRes) {
                _this3.ugcs = ugcsRes.data;
                _this3.ugcs = _this3.transformUgcsData(_this3.ugcs);
              }).catch(function (e) {
                console.error('fetch ugcs failed', e);
              }).finally(function () {
                _this3.isLoadingUgcs = false;
              });
            } else {
              _this3.isLoadingUgcs = false;
              _this3.ugcs = null;
            }
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  methods: {
    /**
     * Helper method to handle API requests with timeout for skeleton loading
     * @param {string} loadingStateKey - Key in this.skeletonTimeouts to track timeout
     * @param {Function} loadingStateSetter - Function to set loading state (e.g., () => this.isLoadingSlider = true)
     * @param {Function} apiCall - Function that returns a Promise (the API call)
     * @param {number} timeoutMs - Timeout in milliseconds (default: 15000)
     */
    withSkeletonTimeout: function withSkeletonTimeout(loadingStateKey, loadingStateSetter, apiCall) {
      var _arguments = arguments,
        _this4 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var timeoutMs, result, _t;
        return regeneratorRuntime.wrap(function (_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              timeoutMs = _arguments.length > 3 && _arguments[3] !== undefined ? _arguments[3] : 15000;
              // Set loading state
              loadingStateSetter(true);

              // Clear any existing timeout for this key
              if (_this4.skeletonTimeouts[loadingStateKey]) {
                clearTimeout(_this4.skeletonTimeouts[loadingStateKey]);
              }

              // Set timeout to hide skeleton
              _this4.skeletonTimeouts[loadingStateKey] = setTimeout(function () {
                loadingStateSetter(false);
                delete _this4.skeletonTimeouts[loadingStateKey];
              }, timeoutMs);
              _context5.prev = 1;
              _context5.next = 2;
              return apiCall();
            case 2:
              result = _context5.sent;
              // Clear timeout on success
              if (_this4.skeletonTimeouts[loadingStateKey]) {
                clearTimeout(_this4.skeletonTimeouts[loadingStateKey]);
                delete _this4.skeletonTimeouts[loadingStateKey];
              }
              loadingStateSetter(false);
              return _context5.abrupt("return", result);
            case 3:
              _context5.prev = 3;
              _t = _context5["catch"](1);
              // Clear timeout on error
              if (_this4.skeletonTimeouts[loadingStateKey]) {
                clearTimeout(_this4.skeletonTimeouts[loadingStateKey]);
                delete _this4.skeletonTimeouts[loadingStateKey];
              }
              loadingStateSetter(false);
              throw _t;
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[1, 3]]);
      }))();
    },
    loadDynamicSliderLayout: function loadDynamicSliderLayout() {
      var _arguments2 = arguments,
        _this5 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var _ref4, _ref4$force, force, sliderRequests, normalized, locationsToFetch, prepared, _t2;
        return regeneratorRuntime.wrap(function (_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _ref4 = _arguments2.length > 0 && _arguments2[0] !== undefined ? _arguments2[0] : {}, _ref4$force = _ref4.force, force = _ref4$force === void 0 ? false : _ref4$force;
              _this5.isLoadingDynamicSliders = true;
              _context6.prev = 1;
              sliderRequests = _this5.getStoredUserSliderRequests();
              if (!(!Array.isArray(sliderRequests) || !sliderRequests.length)) {
                _context6.next = 2;
                break;
              }
              _this5.dynamicSliderInsertions = [];
              return _context6.abrupt("return");
            case 2:
              normalized = sliderRequests.map(function (request, index) {
                var location = Number(request.location);
                var sliderType = _this5.mapLocationToSliderType(location);
                var indexOnList = _this5.normalizeSliderIndex(request.index_on_list);
                if (!sliderType || !indexOnList) {
                  return null;
                }
                return {
                  location: location,
                  sliderType: sliderType,
                  index_on_list: indexOnList,
                  _sequence: index
                };
              }).filter(Boolean);
              if (normalized.length) {
                _context6.next = 3;
                break;
              }
              _this5.dynamicSliderInsertions = [];
              return _context6.abrupt("return");
            case 3:
              locationsToFetch = Object(toConsumableArray["a" /* default */])(new Set(normalized.map(function (entry) {
                return entry.location;
              })));
              if (!locationsToFetch.length) {
                _context6.next = 4;
                break;
              }
              _context6.next = 4;
              return _this5.ensureSliderDataForLocations(locationsToFetch, force);
            case 4:
              prepared = normalized.map(function (entry, index) {
                var items = _this5.getSliderItemsByType(entry.sliderType);
                if (!Array.isArray(items) || !items.length) {
                  return null;
                }
                var presentation = _this5.getSliderPresentation(entry.sliderType);
                var instanceBase = presentation.instancePrefix || entry.sliderType;
                var swiperHandle = entry.sliderType === 'type1' ? "".concat(instanceBase, "-").concat(index) : null;
                return _objectSpread(_objectSpread({}, entry), {}, {
                  items: items,
                  key: "dynamic-".concat(entry.sliderType, "-").concat(index, "-").concat(entry.index_on_list),
                  titleFa: presentation.titleFa,
                  titleEn: presentation.titleEn,
                  instanceName: "".concat(instanceBase, "-").concat(index),
                  cardVariant: presentation.cardVariant,
                  size: presentation.size ? _objectSpread({}, presentation.size) : null,
                  swiperOptions: presentation.swiperOptions,
                  swiperHandle: swiperHandle
                });
              }).filter(Boolean);
              _this5.dynamicSliderInsertions = prepared;
              _context6.next = 6;
              break;
            case 5:
              _context6.prev = 5;
              _t2 = _context6["catch"](1);
              console.error('Failed to prepare sliders for discover:', _t2);
              _this5.dynamicSliderInsertions = [];
            case 6:
              _context6.prev = 6;
              _this5.isLoadingDynamicSliders = false;
              return _context6.finish(6);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[1, 5, 6, 7]]);
      }))();
    },
    getStoredUserSliderRequests: function getStoredUserSliderRequests() {
      var _this$$store, _this$$store2;
      var checkuser = ((_this$$store = this.$store) === null || _this$$store === void 0 || (_this$$store = _this$$store.state) === null || _this$$store === void 0 ? void 0 : _this$$store.checkuser) || {};
      var authUser = ((_this$$store2 = this.$store) === null || _this$$store2 === void 0 || (_this$$store2 = _this$$store2.state) === null || _this$$store2 === void 0 || (_this$$store2 = _this$$store2.auth) === null || _this$$store2 === void 0 ? void 0 : _this$$store2.user) || {};
      var candidates = [checkuser.sliders, checkuser.slider_requests, authUser.sliders, authUser.slider_requests];
      var entry = candidates.find(function (value) {
        return Array.isArray(value);
      });
      return entry || null;
    },
    ensureSliderDataForLocations: function ensureSliderDataForLocations() {
      var _arguments3 = arguments,
        _this6 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var locations, force, loaders;
        return regeneratorRuntime.wrap(function (_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              locations = _arguments3.length > 0 && _arguments3[0] !== undefined ? _arguments3[0] : [];
              force = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : false;
              loaders = locations.map(function (location) {
                var sliderType = _this6.mapLocationToSliderType(location);
                if (!sliderType) {
                  return Promise.resolve();
                }
                if (!force) {
                  var existing = _this6.getSliderItemsByType(sliderType);
                  if (Array.isArray(existing) && existing.length) {
                    return Promise.resolve();
                  }
                }
                switch (sliderType) {
                  case 'type1':
                    return _this6.$store.dispatch('slider/fetchType1Slider', {
                      filtercontents: _this6.filtercontents,
                      loadagain: force ? 1 : 0
                    });
                  case 'type2':
                    return _this6.$store.dispatch('slider/fetchType2Slider', {
                      filtercontents: _this6.filtercontents,
                      loadagain: force ? 1 : 0
                    });
                  case 'type3':
                    return _this6.$store.dispatch('slider/fetchType3Slider', {
                      filtercontents: _this6.filtercontents,
                      loadagain: force ? 1 : 0
                    });
                  default:
                    return Promise.resolve();
                }
              });
              _context7.next = 1;
              return Promise.all(loaders);
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }))();
    },
    mapLocationToSliderType: function mapLocationToSliderType(location) {
      var numericLocation = Number(location);
      if (numericLocation === 2) return 'type1';
      if (numericLocation === 3) return 'type2';
      if (numericLocation === 4) return 'type3';
      return null;
    },
    getSliderItemsByType: function getSliderItemsByType(sliderType) {
      if (sliderType === 'type1') return this.type1Sliders;
      if (sliderType === 'type2') return this.type2Sliders;
      if (sliderType === 'type3') return this.type3Sliders;
      return [];
    },
    getSliderPresentation: function getSliderPresentation(sliderType) {
      var preset = SLIDER_PRESENTATION[sliderType] || {};
      return {
        titleFa: preset.titleFa || '',
        titleEn: preset.titleEn || '',
        instancePrefix: preset.instancePrefix || sliderType,
        cardVariant: preset.cardVariant || 'backdrop',
        size: preset.size ? _objectSpread({}, preset.size) : null,
        swiperOptions: preset.swiperOptions || this.SWIPER_OPTION_BACKDROP
      };
    },
    normalizeSliderIndex: function normalizeSliderIndex(value) {
      var parsed = Number(value);
      if (!Number.isFinite(parsed)) {
        return null;
      }
      return Math.max(1, Math.floor(parsed));
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa;
      if (!en) return fa || '';
      return en.charAt(0).toUpperCase() + en.slice(1);
    },
    transformSliderData: function transformSliderData(sliders) {
      return sliders.map(function (item) {
        // Extract backdrop filename from image_src URL if available
        var backdrop = item.backdrop;
        if (!backdrop && item.image_src) {
          try {
            var url = new URL(item.image_src);
            var srcParam = url.searchParams.get('src');
            if (srcParam) {
              // Extract filename from src URL (e.g., "https://thumb.upera.shop/s3/backdrops/xzVIX3yB1ZK0n4uuoI8z.jpg")
              var srcUrl = new URL(srcParam);
              var pathParts = srcUrl.pathname.split('/');
              backdrop = pathParts[pathParts.length - 1];
            }
          } catch (e) {
            // If URL parsing fails, try to extract from the src parameter directly
            var match = item.image_src.match(/src=([^&]+)/);
            if (match) {
              try {
                var decoded = decodeURIComponent(match[1]);
                var _srcUrl = new URL(decoded);
                var _pathParts = _srcUrl.pathname.split('/');
                backdrop = _pathParts[_pathParts.length - 1];
              } catch (e2) {
                console.warn('Could not extract backdrop from image_src:', item.image_src);
              }
            }
          }
        }
        return _objectSpread(_objectSpread({}, item), {}, {
          backdrop: backdrop || item.backdrop || '',
          // Keep original image_src for reference if needed
          image_src: item.image_src,
          image_mobile_src: item.image_mobile_src
        });
      });
    },
    transformUgcsData: function transformUgcsData(ugcsData) {
      if (!ugcsData || !ugcsData.data) return {
        data: []
      };
      var transformedItems = [];
      ugcsData.data.forEach(function (section) {
        if (section.data && Array.isArray(section.data)) {
          section.data.forEach(function (item) {
            transformedItems.push(_objectSpread(_objectSpread({}, item), {}, {
              studio_title_fa: section.title_fa || section.list_fa,
              studio_title_en: section.title_en || section.list_en,
              studio_list_fa: section.list_fa,
              studio_list_en: section.list_en,
              studio_list: section.list,
              studio_style: section.style
            }));
          });
        }
      });
      return {
        data: transformedItems
      };
    },
    truncate: function truncate(string, value) {
      if (!string) return '';
      return string.length > value ? string.substring(0, value) + '...' : string;
    },
    buildIdRoute: function buildIdRoute(item) {
      return {
        name: item.type + '-id',
        params: {
          id: item.id
        }
      };
    },
    buildShowIdRoute: function buildShowIdRoute(item) {
      return {
        name: item.type + '-show-id',
        params: {
          id: item.id
        }
      };
    },
    setupWatchingSwiper: function setupWatchingSwiper() {
      var _this7 = this;
      // Wait a bit for swiper to initialize
      var _trySetup = function trySetup() {
        var attempts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var watching = document.getElementById('watching');
        if (!watching) {
          if (attempts < 10) {
            setTimeout(function () {
              return _trySetup(attempts + 1);
            }, 100);
          }
          return;
        }
        var swiper = _this7.watchSwip;
        if (!swiper || swiper.isBeginning === undefined) {
          // Retry if swiper not ready yet
          if (attempts < 10) {
            setTimeout(function () {
              return _trySetup(attempts + 1);
            }, 100);
          }
          return;
        }

        // Remove existing listeners to avoid duplicates
        swiper.off('reachBeginning');
        swiper.off('slideChange');
        swiper.off('slideChangeTransitionEnd');
        swiper.off('touchEnd');
        swiper.off('fromEdge');
        swiper.off('touchMove');
        swiper.off('progress');
        swiper.off('setTranslate');

        // Helper function to update swipe class based on swiper state
        var updateSwipeClass = function updateSwipeClass() {
          if (!watching || !swiper) return;
          try {
            // Check if swiper has moved away from beginning
            var isAtBeginning = swiper.isBeginning;
            if (isAtBeginning) {
              console.log('no swiping');
              watching.classList.remove('swipe');
            } else {
              console.log('swiping');
              watching.classList.add('swipe');
            }
          } catch (e) {
            console.warn('Error updating swipe class:', e);
          }
        };

        // Update class when slide changes (primary method)
        swiper.on('slideChange', function () {
          updateSwipeClass();
        });

        // Update after transition ends for smoother updates
        swiper.on('slideChangeTransitionEnd', function () {
          updateSwipeClass();
        });

        // Remove class when slider reaches the beginning
        swiper.on('reachBeginning', function () {
          if (watching) {
            watching.classList.remove('swipe');
          }
        });

        // Add class when swiping away from the beginning
        swiper.on('fromEdge', function () {
          if (watching) {
            watching.classList.add('swipe');
          }
        });

        // Handle during swipe for real-time updates
        swiper.on('touchMove', function () {
          updateSwipeClass();
        });

        // Also listen to progress for more accurate detection
        swiper.on('progress', function () {
          updateSwipeClass();
        });

        // Handle when swipe ends - ensure class state is correct
        swiper.on('touchEnd', function () {
          // Small delay to ensure swiper state is updated
          setTimeout(function () {
            updateSwipeClass();
          }, 50);
        });

        // Initialize class state based on current position
        // Use a small delay to ensure swiper is fully initialized
        setTimeout(function () {
          updateSwipeClass();
        }, 100);
      };

      // Start trying after a short delay
      setTimeout(function () {
        _trySetup(0);
      }, 200);
    },
    get_recently: function get_recently() {
      var _this8 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function (_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (_this8.$auth.loggedIn) {
                _context9.next = 1;
                break;
              }
              _this8.recently = null;
              _this8.isLoadingRecently = false;
              return _context9.abrupt("return");
            case 1:
              _context9.next = 2;
              return _this8.withSkeletonTimeout('recently', function (state) {
                _this8.isLoadingRecently = state;
              }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var apiurl, _yield$_this8$$axios$, data, status;
                return regeneratorRuntime.wrap(function (_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      apiurl = '/get/recently';
                      _context8.next = 1;
                      return _this8.$axios.get(apiurl + _this8.filtercontents);
                    case 1:
                      _yield$_this8$$axios$ = _context8.sent;
                      data = _yield$_this8$$axios$.data;
                      status = _yield$_this8$$axios$.status;
                      if (status === 200) {
                        _this8.recently = data.data;
                      } else {
                        _this8.recently = null;
                      }
                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8);
              }))).catch(function (error) {
                console.error('get_recently failed:', error);
                _this8.isLoadingRecently = false;
                _this8.recently = null;
              });
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }))();
    },
    fetchDiscoverData: function fetchDiscoverData() {
      var _this9 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee1() {
        return regeneratorRuntime.wrap(function (_context1) {
          while (1) switch (_context1.prev = _context1.next) {
            case 0:
              _context1.next = 1;
              return _this9.withSkeletonTimeout('discover', function (state) {
                _this9.isLoadingDiscover = state;
              }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee0() {
                var response;
                return regeneratorRuntime.wrap(function (_context0) {
                  while (1) switch (_context0.prev = _context0.next) {
                    case 0:
                      _context0.next = 1;
                      return _this9.$axios.get(_this9.ghostApi + _this9.filtercontents);
                    case 1:
                      response = _context0.sent;
                      if (response.status === 200) {
                        _this9.data = response.data.data;
                        if (!_this9.data.data.length) {
                          _this9.nocontent = true;
                        } else {
                          _this9.nocontent = false;
                        }
                      }
                    case 2:
                    case "end":
                      return _context0.stop();
                  }
                }, _callee0);
              }))).catch(function (error) {
                console.error('Error fetching discover:', error);
                _this9.isLoadingDiscover = false;
                _this9.nocontent = true;
              });
            case 1:
            case "end":
              return _context1.stop();
          }
        }, _callee1);
      }))();
    },
    showNext: function showNext() {
      this.$refs.carousel.next();
    },
    showPrev: function showPrev() {
      this.$refs.carousel.prev();
    },
    execute_content_filtering: function execute_content_filtering() {
      var _this0 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
        var requests, _t3;
        return regeneratorRuntime.wrap(function (_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _this0.$store.dispatch('filter/FILTER_LOADING');
              requests = [];
              requests.push(_this0.withSkeletonTimeout('slider-filter', function (state) {
                _this0.isLoadingSlider = state;
              }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                return regeneratorRuntime.wrap(function (_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 1;
                      return _this0.$store.dispatch('slider/fetchSlider', {
                        filtercontents: _this0.filtercontents,
                        loadagain: 1
                      });
                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10);
              }))));
              requests.push(_this0.withSkeletonTimeout('offer-filter', function (state) {
                _this0.isLoadingOffer = state;
              }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var response;
                return regeneratorRuntime.wrap(function (_context11) {
                  while (1) switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 1;
                      return _this0.$axios.get('/get/offer' + _this0.filtercontents);
                    case 1:
                      response = _context11.sent;
                      if (response.status === 200) _this0.offer = response.data;
                    case 2:
                    case "end":
                      return _context11.stop();
                  }
                }, _callee11);
              }))));
              if (_this0.$auth.loggedIn) {
                requests.push(_this0.withSkeletonTimeout('recently-filter', function (state) {
                  _this0.isLoadingRecently = state;
                }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
                  var response;
                  return regeneratorRuntime.wrap(function (_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 1;
                        return _this0.$axios.get('/get/recently' + _this0.filtercontents);
                      case 1:
                        response = _context12.sent;
                        if (response.status === 200) {
                          _this0.recently = response.data.data;
                          _this0.$nextTick(function () {
                            var watching = document.getElementById('watching');
                            if (watching && _this0.watchSwip) {
                              _this0.watchSwip.on('reachBeginning', function () {
                                watching.classList.remove('swipe');
                              });
                              _this0.watchSwip.on('fromEdge', function () {
                                watching.classList.add('swipe');
                              });
                            }
                          });
                        }
                      case 2:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12);
                }))));
              } else {
                _this0.isLoadingRecently = false;
              }
              requests.push(_this0.withSkeletonTimeout('discover-filter', function (state) {
                _this0.isLoadingDiscover = state;
              }, /*#__PURE__*/Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                var response;
                return regeneratorRuntime.wrap(function (_context13) {
                  while (1) switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 1;
                      return _this0.$axios.get(_this0.ghostApi + _this0.filtercontents);
                    case 1:
                      response = _context13.sent;
                      if (response.status === 200) {
                        _this0.nocontent = !response.data.data.data.length;
                        _this0.data = response.data.data;
                        _this0.page = 1;
                        _this0.infiniteId += 1;
                        _this0.swiperKey += 1;
                      }
                    case 2:
                    case "end":
                      return _context13.stop();
                  }
                }, _callee13);
              }))));

              // Refresh dynamic slider layout for the selected filters
              requests.push(_this0.loadDynamicSliderLayout({
                force: true
              }));
              _context14.prev = 1;
              _context14.next = 2;
              return Promise.all(requests);
            case 2:
              _context14.next = 4;
              break;
            case 3:
              _context14.prev = 3;
              _t3 = _context14["catch"](1);
              console.error('Error in requests:', _t3);
            case 4:
              _context14.prev = 4;
              _this0.$store.dispatch('filter/CLEAN_FILTER_LOADING');
              return _context14.finish(4);
            case 5:
            case "end":
              return _context14.stop();
          }
        }, _callee14, null, [[1, 3, 4, 5]]);
      }))();
    },
    infiniteHandler: function infiniteHandler($state) {
      var _this1 = this;
      var apiurl = this.ghostApi;
      var nextPage = this.page + 1;
      this.$axios.get(apiurl + this.filtercontents, {
        params: {
          discover_page: nextPage
        }
      }).then(function (response) {
        if (response.status !== 200) {
          $state.complete();
          return;
        }
        var payload = response.data && response.data.data ? response.data.data : null;
        var nextChunk = payload && payload.data ? payload.data : [];
        if (nextChunk && nextChunk.length) {
          _this1.data.data = _this1.data.data.concat(nextChunk);
          if (payload.last_page && payload.last_page === _this1.page) {
            $state.complete();
          } else {
            $state.loaded();
          }
        } else {
          $state.complete();
        }
      }).catch(function () {
        $state.complete();
      });
      this.page = nextPage;
    },
    // Icon Actions handlers
    handleToggleWatchlist: function handleToggleWatchlist(item) {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false
        });
        return;
      }

      // Toggle watchlist status for the item
      if (item.isWatchlist !== undefined) {
        item.isWatchlist = item.isWatchlist === 0 ? 1 : 0;
      }
      this.$axios.post('/create/watchlist', {
        id: item.id,
        type: item.type
      });
    },
    handleShare: function handleShare() {
      this.modalsharing = true;
    },
    handleClapStart: function handleClapStart(item) {
      var _this10 = this;
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: null,
          premobile: null,
          preredirect: null,
          prerefresh: false
        });
        return;
      }
      if (!this.clapinterval) {
        this.clapinterval = setInterval(function () {
          _this10.incrementClapLocal(item);
        }, 30);
      }
    },
    handleClapStop: function handleClapStop(item) {
      if (this.clapinterval) {
        clearInterval(this.clapinterval);
        this.clapinterval = false;
        this.flushClaps(item, false);
      }
    },
    incrementClapLocal: function incrementClapLocal(item) {
      this.user_claps_counter += 1;
      if (item.userClaps !== undefined) {
        item.userClaps = parseInt(item.userClaps || 0) + 1;
      }
    },
    flushClaps: function flushClaps(item) {
      var _this11 = this;
      var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.clapCheckTimer) {
        clearTimeout(this.clapCheckTimer);
        this.clapCheckTimer = false;
      }
      if (this.user_claps_counter < 1) return;
      var pending = this.user_claps_counter;
      var revert = function revert() {
        if (item.userClaps !== undefined) {
          item.userClaps = parseInt(item.userClaps || 0) - pending;
        }
      };
      var send = function send() {
        _this11.$axios.post('/add/clap', {
          id: item.id,
          type: item.type,
          claps: pending
        }).then(function (res) {
          if (res.status !== 200) revert();
        }, function () {
          revert();
        });
        _this11.user_claps_counter = 0;
      };
      if (immediate) {
        send();
      } else {
        this.clapCheckTimer = setTimeout(function () {
          send();
        }, 2000);
      }
    },
    handleOpenDownloadModal: function handleOpenDownloadModal(item) {
      // Navigate to the item page which has download functionality
      this.$router.push({
        name: item.type + '-show-id',
        params: {
          id: item.id
        },
        query: {
          force_download: 1
        }
      });
    },
    getType1ImageSrc: function getType1ImageSrc(item) {
      var desktop = item.image_src || item.image_mobile_src || '';
      var mobile = item.image_mobile_src || item.image_src || '';
      if (typeof window !== 'undefined' && window.innerWidth <= 991) {
        return mobile || desktop;
      }
      return desktop || mobile;
    },
    // getType1SrcSet(item) {
    //   const desktop = item.image_src || ''
    //   const mobile = item.image_mobile_src || ''
    //   if (!desktop && !mobile) return ''
    //   if (!desktop || desktop === mobile) return ''
    //   return `${mobile || desktop} 880w, ${desktop} 1920w`
    // },
    getType1SwiperOptions: function getType1SwiperOptions() {
      var loopable = false;
      return _objectSpread(_objectSpread({}, this.swiperOptionType1), {}, {
        loop: loopable,
        autoplay: loopable ? this.swiperOptionType1.autoplay : false
      });
    },
    type1CarouselPrev: function type1CarouselPrev() {
      var handle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'type1Carousel';
      var swiperInstance = this[handle] || this.type1Carousel;
      if (swiperInstance && swiperInstance.slidePrev) {
        swiperInstance.slidePrev();
      }
    },
    type1CarouselNext: function type1CarouselNext() {
      var handle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'type1Carousel';
      var swiperInstance = this[handle] || this.type1Carousel;
      if (swiperInstance && swiperInstance.slideNext) {
        swiperInstance.slideNext();
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (string_replace_loader_ref_13_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./pages/index.vue?vue&type=style&index=0&id=2ee36b60&prod&scoped=true&lang=css
var pagesvue_type_style_index_0_id_2ee36b60_prod_scoped_true_lang_css = __webpack_require__(985);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "2ee36b60",
  null
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ShowcaseCarousel: __webpack_require__(850).default,OfferSection: __webpack_require__(851).default,FilterContents: __webpack_require__(253).default,HorizontalList: __webpack_require__(744).default,Socialsharing: __webpack_require__(757).default})


/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Socialsharing.vue?vue&type=template&id=ed03633e&scoped=true


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "modern-socialsharing"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "sharing-grid"
  }, [_c('ShareNetwork', {
    staticClass: "share-button sms-button",
    attrs: {
      "network": "sms",
      "url": _vm.url,
      "title": _vm.mtitle,
      "description": _vm.description
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fas fa-sms"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("پیامک")])])]), _vm._v(" "), _c('ShareNetwork', {
    staticClass: "share-button whatsapp-button",
    attrs: {
      "network": "whatsapp",
      "url": _vm.url,
      "title": _vm.mtitle,
      "description": _vm.description
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fab fa-whatsapp"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("واتس اپ")])])]), _vm._v(" "), _c('ShareNetwork', {
    staticClass: "share-button telegram-button",
    attrs: {
      "network": "telegram",
      "url": _vm.url,
      "title": _vm.mtitle,
      "description": _vm.description
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fab fa-telegram"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("تلگرام")])])]), _vm._v(" "), _c('ShareNetwork', {
    staticClass: "share-button linkedin-button",
    attrs: {
      "network": "linkedin",
      "url": _vm.url,
      "title": _vm.mtitle
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fab fa-linkedin"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("لینکدین")])])]), _vm._v(" "), _c('ShareNetwork', {
    staticClass: "share-button skype-button",
    attrs: {
      "network": "skype",
      "url": _vm.url,
      "title": _vm.mtitle,
      "description": _vm.description
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fab fa-skype"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("اسکایپ")])])]), _vm._v(" "), _c('ShareNetwork', {
    staticClass: "share-button facebook-button",
    attrs: {
      "network": "facebook",
      "url": _vm.url,
      "title": _vm.mtitle,
      "description": _vm.description
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fab fa-facebook"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("فیسبوک")])])]), _vm._v(" "), _c('ShareNetwork', {
    staticClass: "share-button twitter-button",
    attrs: {
      "network": "twitter",
      "url": _vm.url,
      "title": _vm.mtitle
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fab fa-twitter"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("توییتر")])])]), _vm._v(" "), _c('ShareNetwork', {
    staticClass: "share-button pinterest-button",
    attrs: {
      "network": "pinterest",
      "url": _vm.url,
      "title": _vm.mtitle
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fab fa-pinterest"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("پینترست")])])]), _vm._v(" "), _c('ShareNetwork', {
    staticClass: "share-button email-button",
    attrs: {
      "network": "email",
      "url": _vm.url,
      "title": _vm.mtitle,
      "description": _vm.description
    }
  }, [_c('div', {
    staticClass: "button-content"
  }, [_c('div', {
    staticClass: "icon-wrapper"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })]), _vm._v(" "), _c('span', {
    staticClass: "button-label"
  }, [_vm._v("ایمیل")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "copy-link-section"
  }, [_c('div', {
    staticClass: "copy-link-wrapper"
  }, [_c('input', {
    staticClass: "link-input",
    attrs: {
      "readonly": ""
    },
    domProps: {
      "value": _vm.url
    },
    on: {
      "click": _vm.selectAll
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "copy-button",
    on: {
      "click": _vm.copyLink
    }
  }, [_c('i', {
    staticClass: "fas fa-copy"
  }), _vm._v(" "), _c('span', [_vm._v("کپی لینک")])])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_vm.showCopiedMessage ? _c('div', {
    staticClass: "copied-message"
  }, [_c('i', {
    staticClass: "fas fa-check-circle"
  }), _vm._v("\n        لینک کپی شد!\n      ")]) : _vm._e()])], 1)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "sharing-header"
  }, [_c('i', {
    staticClass: "fas fa-share-alt header-icon"
  }), _vm._v(" "), _c('h3', {
    staticClass: "header-title"
  }, [_vm._v("اشتراک گذاری در شبکه های اجتماعی")]), _vm._v(" "), _c('p', {
    staticClass: "header-subtitle"
  }, [_vm._v("\n      این محتوا را با دوستان خود به اشتراک بگذارید\n    ")])]);
}];

// CONCATENATED MODULE: ./components/Socialsharing.vue?vue&type=template&id=ed03633e&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(97);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Socialsharing.vue?vue&type=script&lang=js



/* harmony default export */ var Socialsharingvue_type_script_lang_js = ({
  props: {
    mtitle: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      url: '',
      showCopiedMessage: false
    };
  },
  mounted: function mounted() {
    this.url = location.href;
  },
  methods: {
    selectAll: function selectAll(event) {
      event.target.select();
    },
    copyLink: function copyLink() {
      var _this = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var input, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 1;
              return navigator.clipboard.writeText(_this.url);
            case 1:
              _this.showCopiedMessage = true;
              setTimeout(function () {
                _this.showCopiedMessage = false;
              }, 2000);
              _context.next = 3;
              break;
            case 2:
              _context.prev = 2;
              _t = _context["catch"](0);
              // Fallback for older browsers
              input = document.querySelector('.link-input');
              input.select();
              document.execCommand('copy');
              _this.showCopiedMessage = true;
              setTimeout(function () {
                _this.showCopiedMessage = false;
              }, 2000);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 2]]);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./components/Socialsharing.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Socialsharingvue_type_script_lang_js = (Socialsharingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/Socialsharing.vue?vue&type=style&index=0&id=ed03633e&prod&scoped=true&lang=css
var Socialsharingvue_type_style_index_0_id_ed03633e_prod_scoped_true_lang_css = __webpack_require__(760);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/Socialsharing.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Socialsharingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "ed03633e",
  null
  
)

/* harmony default export */ var Socialsharing = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Socialsharing_vue_vue_type_style_index_0_id_ed03633e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(746);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Socialsharing_vue_vue_type_style_index_0_id_ed03633e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Socialsharing_vue_vue_type_style_index_0_id_ed03633e_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDQuNyAxMDkuMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTA0LjcgMTA5LjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjx0aXRsZT5wbGF5PC90aXRsZT4NCjxnIGlkPSJMYXllcl8yXzFfIj4NCgk8ZyBpZD0iTGF5ZXJfMS0yIj4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTEwMi40LDQ4LjFjMy4zLDQsMy4yLDEyLjQtMC43LDE2Qzg5LjksNzQuNyw3Ny42LDgyLjgsNjMuNSw5MWMtMTMuMSw3LjYtMjksMTMuMi00My42LDE3LjkNCgkJCWMtNC43LDEuNS05LjctMS4xLTExLjItNS43YzAtMC4xLTAuMS0wLjItMC4xLTAuM0MzLjksODYsMCw2OS4zLDAsNTMuNUMwLDM4LjgsMi4zLDI1LjQsOC4zLDYuMWMxLjUtNC43LDYuMy02LjcsMTEuMS01LjkNCgkJCUMzNS4zLDMsNTAuNyw4LjYsNjQuNywxNi43Qzc5LjMsMjUuMSw5MS40LDM0LjksMTAyLjQsNDguMXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseCarousel_vue_vue_type_style_index_0_id_8c084e5a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(776);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseCarousel_vue_vue_type_style_index_0_id_8c084e5a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_ShowcaseCarousel_vue_vue_type_style_index_0_id_8c084e5a_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OfferSection_vue_vue_type_style_index_0_id_9a1aec08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OfferSection_vue_vue_type_style_index_0_id_9a1aec08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_OfferSection_vue_vue_type_style_index_0_id_9a1aec08_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/ShowcaseCarousel.vue?vue&type=template&id=8c084e5a&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('VueSlickCarousel', _vm._b({
    key: _vm.swiperKey,
    ref: "innerCarousel",
    staticClass: "swiper-wrapper",
    class: {
      'dir-ltr': _vm.sliders.length === 1
    },
    attrs: {
      "rtl": true,
      "arrows": true,
      "dots": true
    },
    scopedSlots: _vm._u([{
      key: "prevArrow",
      fn: function fn() {
        return [_c('button', {
          staticClass: "custom-arrow custom-prev",
          attrs: {
            "type": "button",
            "aria-label": "Previous"
          }
        }, [_c('i', {
          staticClass: "fa fa-chevron-left"
        })])];
      },
      proxy: true
    }, {
      key: "nextArrow",
      fn: function fn() {
        return [_c('button', {
          staticClass: "custom-arrow custom-next",
          attrs: {
            "type": "button",
            "aria-label": "Next"
          }
        }, [_c('i', {
          staticClass: "fa fa-chevron-right"
        })])];
      },
      proxy: true
    }])
  }, 'VueSlickCarousel', _vm.options, false), [_vm._v(" "), _vm._v(" "), _vm._l(_vm.reorderedSliders, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "row no-gutters"
    }, [_c('div', {
      staticClass: "col-12 showcase-pic showcase-pic-main"
    }, [item.media_type === 'video2' ? [_c('video', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }, {
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "showcase-img d-none d-lg-block",
      staticStyle: {
        "width": "1120px",
        "height": "576px",
        "object-fit": "cover"
      },
      attrs: {
        "autoplay": "",
        "loop": "",
        "playsinline": "",
        "data-src": item.video_src,
        "data-poster": item.image_src
      },
      domProps: {
        "muted": item.muted
      },
      on: {
        "loadeddata": function loadeddata($event) {
          item.is_loading = false;
        }
      }
    }), _vm._v(" "), _c('video', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }, {
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "showcase-img d-lg-none",
      staticStyle: {
        "width": "375px",
        "height": "300px",
        "object-fit": "cover"
      },
      attrs: {
        "autoplay": "",
        "loop": "",
        "playsinline": "",
        "data-src": item.video_src,
        "data-poster": item.image_mobile_src
      },
      domProps: {
        "muted": item.muted
      },
      on: {
        "loadeddata": function loadeddata($event) {
          item.is_loading = false;
        }
      }
    }), _vm._v(" "), item.is_loading ? _c('div', {
      staticClass: "video-loading-spinner",
      staticStyle: {
        "position": "absolute",
        "inset": "0",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center",
        "z-index": "10"
      }
    }, [_vm._v("\n            Loading…\n          ")]) : _vm._e()] : [_c('b-img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "showcase-img d-none d-lg-block",
      attrs: {
        "blank": "",
        "blank-color": "#bbb",
        "width": "1120",
        "height": "576",
        "show": "",
        "data-src": _vm.transformThumbUrl(item.image_src),
        "alt": item.name
      }
    }), _vm._v(" "), _c('b-img', {
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      staticClass: "showcase-img d-lg-none",
      attrs: {
        "blank": "",
        "blank-color": "#bbb",
        "width": "375",
        "height": "300",
        "show": "",
        "data-src": _vm.transformMobileUrl(item.image_mobile_src),
        "alt": item.name
      }
    })]], 2), _vm._v(" "), _c('div', {
      staticClass: "col-md-6 col-lg-5"
    })]), _vm._v(" "), _c('div', {
      staticClass: "showcase-thumbnail-wrapper-outter d-flex align-items-center justify-content-between pr-md-3 showcases-desc-wrapper"
    }, [_c('div', {
      staticClass: "showcase-thumbnail-wrapper w-full"
    }, [_c('div', {
      staticClass: "d-flex h-full align-items-end d-flex align-items-center justify-content-start"
    }, [_c('div', {
      staticClass: "showcase-desc-wrapper"
    }, [_c('div', {
      staticClass: "showcase-desc"
    }, [item.logo ? _c('div', {
      staticClass: "showcase-logo mb-2 mb-md-4"
    }, [_c('b-img', _vm._b({
      directives: [{
        name: "lazy-load",
        rawName: "v-lazy-load"
      }],
      attrs: {
        "data-src": item.logo,
        "alt": item.name
      }
    }, 'b-img', {
      fluidGrow: true,
      blank: true,
      blankColor: '#bbb',
      show: true
    }, false))], 1) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "showcase-details"
    }, [item.type != 'episode' ? _c('div', [!item.logo ? _c('div', {
      staticClass: "detail-title text-invert mb-1 mb-md-2"
    }, [_c('nuxt-link', {
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n                    ")])], 1) : _vm._e()]) : _c('div', [!item.logo ? _c('div', {
      staticClass: "detail-title text-invert mb-1 mb-md-2"
    }, [_c('nuxt-link', {
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_vm._v("\n                      " + _vm._s(_vm.ChooseLang(item.name, item.name_fa)) + "\n                      "), item.season_number > 1 ? _c('span', {
      staticClass: "show-mobile"
    }, [_vm._v("\n                        " + _vm._s(item.season_number) + "\n                      ")]) : _vm._e()])], 1) : _vm._e()]), _vm._v(" "), item.type == 'episode' ? _c('div', {
      staticClass: "detail-paragraph text-invert mb-1 mb-md-3 font-weight-normal"
    }, [item.slogan ? _c('div', {
      staticClass: "tag slogan-episode"
    }, [_vm._v("\n                    " + _vm._s(item.slogan) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('span', {
      class: {
        'slogan-episode-show': item.slogan
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.$t('show.season')) + _vm._s(item.season_number) + " -\n                    " + _vm._s(_vm.$t('show.episode')) + " " + _vm._s(item.episode_number))])]) : _c('div', {
      staticClass: "detail-paragraph text-invert mb-2 mb-md-3"
    }, [item.slogan ? _c('div', {
      staticClass: "tag"
    }, [_vm._v("\n                    " + _vm._s(item.slogan) + "\n                  ")]) : _vm._l(item.genre, function (persianName, englishName) {
      return _c('nuxt-link', {
        key: englishName,
        staticClass: "tag",
        attrs: {
          "to": {
            name: 'lists-list',
            params: {
              list: englishName
            }
          }
        }
      }, [_vm._v("\n                      " + _vm._s(persianName) + "\n                    ")]);
    })], 2)])]), _vm._v(" "), _c('div', {
      staticClass: "showcase-button-wrapper"
    }, [item.presale ? _c('nuxt-link', {
      staticClass: "btn btn-main",
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_vm._v("\n                به زودی\n              ")]) : item.type != 'series' ? _c('nuxt-link', {
      staticClass: "btn btn-main d-flex justify-content-center align-items-center watch-btn",
      attrs: {
        "to": {
          name: item.type + '-show-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-play fa-xs"
    }), _vm._v(" "), _c('span', {
      staticClass: "mr-2"
    }, [_vm._v("تماشا")])]) : _c('nuxt-link', {
      staticClass: "btn btn-main watch-btn",
      attrs: {
        "to": {
          name: 'series-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('span', [_vm._v(" قسمت ها ")])]), _vm._v(" "), _c('nuxt-link', {
      staticClass: "btn btn-download ml-md-2 text-white showcase-about-btn",
      attrs: {
        "to": {
          name: item.type + '-id',
          params: {
            id: item.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-info-circle fa-xs mr-2 ml-0"
    }), _vm._v(" "), _c('span', [_vm._v(" درباره ")]), _vm._v(" "), _c('span', [item.type == 'movie' ? _c('span', [_vm._v("فیلم")]) : _c('span', [_vm._v(" سریال")])])])], 1)])])])])]);
  })], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ShowcaseCarousel.vue?vue&type=template&id=8c084e5a&scoped=true

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(318);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.to-json.js
var web_url_to_json = __webpack_require__(319);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd.js
var vue_slick_carousel_umd = __webpack_require__(384);
var vue_slick_carousel_umd_default = /*#__PURE__*/__webpack_require__.n(vue_slick_carousel_umd);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/ShowcaseCarousel.vue?vue&type=script&lang=js










/* harmony default export */ var ShowcaseCarouselvue_type_script_lang_js = ({
  name: 'ShowcaseCarousel',
  components: {
    VueSlickCarousel: vue_slick_carousel_umd_default.a
  },
  props: {
    sliders: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    swiperKey: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    reorderedSliders: function reorderedSliders() {
      if (this.sliders.length === 0) return [];
      // Reverse array for RTL display
      return Object(toConsumableArray["a" /* default */])(this.sliders).reverse();
    }
  },
  methods: {
    next: function next() {
      if (this.$refs.innerCarousel && this.$refs.innerCarousel.next) {
        this.$refs.innerCarousel.next();
      }
    },
    prev: function prev() {
      if (this.$refs.innerCarousel && this.$refs.innerCarousel.prev) {
        this.$refs.innerCarousel.prev();
      }
    },
    ChooseLang: function ChooseLang(en, fa) {
      if (fa && this.$i18n && this.$i18n.locale === 'fa') return fa;
      if (!en) return fa || '';
      return en.charAt(0).toUpperCase() + en.slice(1);
    },
    transformThumbUrl: function transformThumbUrl(url) {
      if (!url) return url;
      var urlObj = new URL(url);

      // Keep the same `src` param
      var src = urlObj.searchParams.get('src');

      // Build the new URL
      return "https://thumb.upera.shop/thumb?w=1920&h=1070&src=".concat(encodeURIComponent(src));
    },
    transformMobileUrl: function transformMobileUrl(url) {
      if (!url) return url;
      var urlObj = new URL(url);

      // Keep the same `src` param
      var src = urlObj.searchParams.get('src');

      // Build the new URL
      return "https://thumb.upera.shop/thumb?w=960&h=1000&a=c&src=".concat(encodeURIComponent(src));
    }
  }
});
// CONCATENATED MODULE: ./components/ShowcaseCarousel.vue?vue&type=script&lang=js
 /* harmony default export */ var components_ShowcaseCarouselvue_type_script_lang_js = (ShowcaseCarouselvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/ShowcaseCarousel.vue?vue&type=style&index=0&id=8c084e5a&prod&scoped=true&lang=css
var ShowcaseCarouselvue_type_style_index_0_id_8c084e5a_prod_scoped_true_lang_css = __webpack_require__(825);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/ShowcaseCarousel.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ShowcaseCarouselvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "8c084e5a",
  null
  
)

/* harmony default export */ var ShowcaseCarousel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/OfferSection.vue?vue&type=template&id=9a1aec08&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.offer && _vm.offer.data && _vm.offer.data.length ? _c('div', {
    staticClass: "offer-section"
  }, [_c('HorizontalList', {
    attrs: {
      "title-en": _vm.offer.list_en,
      "title-fa": _vm.offer.list_fa,
      "show-all-route": {
        name: 'lists-list',
        params: {
          list: _vm.offer.list.toLowerCase()
        }
      },
      "items": _vm.offer.data,
      "instance-name": "offerSwip",
      "options": _vm.SWIPER_OPTION_OFFER,
      "card-variant": "backdrop",
      "size": {
        w: 764,
        h: 400
      },
      "link-builder": _vm.buildIdRoute,
      "show-badges": true,
      "is-offer": true,
      "hoverable": true
    }
  })], 1) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/OfferSection.vue?vue&type=template&id=9a1aec08&scoped=true

// EXTERNAL MODULE: ./components/HorizontalList.vue + 4 modules
var HorizontalList = __webpack_require__(744);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/OfferSection.vue?vue&type=script&lang=js

var SWIPER_OPTION_OFFER = {
  slidesPerView: 5.5,
  spaceBetween: 10,
  slidesPerGroup: 2,
  watchSlidesProgress: true,
  resistanceRatio: 0,
  freeMode: false,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 3.5
    },
    1200: {
      slidesPerView: 5.5
    },
    1600: {
      slidesPerView: 7.5
    }
  }
};
/* harmony default export */ var OfferSectionvue_type_script_lang_js = ({
  name: 'OfferSection',
  components: {
    HorizontalList: HorizontalList["default"]
  },
  props: {
    offer: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    return {
      SWIPER_OPTION_OFFER: SWIPER_OPTION_OFFER
    };
  },
  methods: {
    buildIdRoute: function buildIdRoute(item) {
      return {
        name: item.type + '-id',
        params: {
          id: item.id
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./components/OfferSection.vue?vue&type=script&lang=js
 /* harmony default export */ var components_OfferSectionvue_type_script_lang_js = (OfferSectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/OfferSection.vue?vue&type=style&index=0&id=9a1aec08&prod&scoped=true&lang=css
var OfferSectionvue_type_style_index_0_id_9a1aec08_prod_scoped_true_lang_css = __webpack_require__(826);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/OfferSection.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_OfferSectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "9a1aec08",
  null
  
)

/* harmony default export */ var OfferSection = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HorizontalList: __webpack_require__(744).default})


/***/ }),

/***/ 868:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 985:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_2ee36b60_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(868);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_2ee36b60_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_index_vue_vue_type_style_index_0_id_2ee36b60_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);