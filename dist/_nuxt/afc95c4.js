(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/SeasonSelector.vue?vue&type=template&id=902e35c4
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "row py-4 download-options-wrapper"
  }, [_vm.showSeasonDropdown ? _c('div', {
    staticClass: "col-sm-6"
  }, [_c('b-dropdown', {
    attrs: {
      "block": "",
      "text": _vm.seasonTitle,
      "variant": "dark"
    }
  }, _vm._l(_vm.seasons, function (season, index) {
    return _c('b-dropdown-item', {
      key: index,
      attrs: {
        "href": "#",
        "active": _vm.selectedSeasonId == index
      },
      on: {
        "click": function click($event) {
          var _season$;
          $event.preventDefault();
          return _vm.onSeasonSelect(index, (_season$ = season[0]) === null || _season$ === void 0 ? void 0 : _season$.id);
        }
      }
    }, [_vm._v("\n        فصل " + _vm._s(index) + "\n      ")]);
  }), 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.episodeDropdownClass
  }, [_c('b-dropdown', {
    staticClass: "srmb",
    class: _vm.dropdownScrollClass,
    attrs: {
      "block": "",
      "text": _vm.episodeTitle,
      "variant": "outline-dark"
    }
  }, _vm._l(_vm.currentSeasonEpisodes, function (episode, index) {
    return _c('b-dropdown-item', {
      key: index,
      attrs: {
        "href": "#",
        "active": _vm.isEpisodeActive(episode)
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.onEpisodeSelect(episode.id);
        }
      }
    }, [_vm._v("\n        قسمت " + _vm._s(episode.episode_number) + "\n      ")]);
  }), 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/download/SeasonSelector.vue?vue&type=template&id=902e35c4

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/download/SeasonSelector.vue?vue&type=script&lang=js


/* harmony default export */ var SeasonSelectorvue_type_script_lang_js = ({
  name: 'SeasonSelector',
  props: {
    seasons: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    selectedSeasonId: {
      type: [String, Number],
      default: 1
    },
    episodeTitle: {
      type: String,
      default: 'قسمت ها'
    },
    currentItem: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    itemType: {
      type: String,
      default: ''
    },
    isStaticModal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSeasonDropdown: function showSeasonDropdown() {
      return Object.keys(this.seasons).length > 1;
    },
    seasonTitle: function seasonTitle() {
      return "\u0641\u0635\u0644 ".concat(this.selectedSeasonId);
    },
    currentSeasonEpisodes: function currentSeasonEpisodes() {
      return this.seasons[this.selectedSeasonId] || [];
    },
    episodeDropdownClass: function episodeDropdownClass() {
      return {
        'col-sm-6': this.showSeasonDropdown,
        'col-sm-12': !this.showSeasonDropdown
      };
    },
    dropdownScrollClass: function dropdownScrollClass() {
      var episodeCount = this.currentSeasonEpisodes.length;
      return {
        scrollable: episodeCount > 20,
        scrollable2: episodeCount > 20 && this.isStaticModal
      };
    }
  },
  methods: {
    onSeasonSelect: function onSeasonSelect(seasonId, firstEpisodeId) {
      this.$emit('season-selected', {
        seasonId: seasonId,
        firstEpisodeId: firstEpisodeId
      });
    },
    onEpisodeSelect: function onEpisodeSelect(episodeId) {
      this.$emit('episode-selected', episodeId);
    },
    isEpisodeActive: function isEpisodeActive(episode) {
      return this.itemType === 'episode' && this.currentItem.episode_number === episode.episode_number;
    }
  }
});
// CONCATENATED MODULE: ./components/download/SeasonSelector.vue?vue&type=script&lang=js
 /* harmony default export */ var download_SeasonSelectorvue_type_script_lang_js = (SeasonSelectorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/download/SeasonSelector.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  download_SeasonSelectorvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SeasonSelector = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);