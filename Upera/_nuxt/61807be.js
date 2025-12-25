(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_File_vue_vue_type_style_index_0_id_6dc12dfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(895);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_File_vue_vue_type_style_index_0_id_6dc12dfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_File_vue_vue_type_style_index_0_id_6dc12dfa_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_File_vue_vue_type_style_index_1_id_6dc12dfa_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(896);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_File_vue_vue_type_style_index_1_id_6dc12dfa_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_File_vue_vue_type_style_index_1_id_6dc12dfa_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/File.vue?vue&type=template&id=6dc12dfa&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-modal', {
    ref: "FilePlayer",
    attrs: {
      "id": "FilePlayer",
      "centered": _vm.staticmodal ? false : true,
      "hide-footer": "",
      "hide-header": "",
      "size": "lg",
      "no-close-on-backdrop": _vm.staticmodal ? true : false,
      "hide-backdrop": _vm.staticmodal ? true : false,
      "no-close-on-esc": _vm.staticmodal ? true : false,
      "static": _vm.staticmodal ? true : false,
      "no-enforce-focus": "",
      "modal-class": "files enhanced-file-modal"
    }
  }, [_c('div', {
    staticClass: "file-modal-wrapper",
    attrs: {
      "dir": "ltr"
    }
  }, [_c('div', {
    staticClass: "enhanced-player-container",
    attrs: {
      "id": "flowplayer-files-player"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.filesloading,
      expression: "filesloading"
    }],
    staticClass: "enhanced-spinner-container"
  }, [_c('div', {
    staticClass: "spinner-backdrop"
  }), _vm._v(" "), _c('div', {
    staticClass: "spinner-content"
  }, [_c('div', {
    staticClass: "modern-spinner"
  }, [_c('div', {
    staticClass: "spinner-ring"
  }), _vm._v(" "), _c('div', {
    staticClass: "spinner-ring"
  }), _vm._v(" "), _c('div', {
    staticClass: "spinner-ring"
  })]), _vm._v(" "), _c('p', {
    staticClass: "loading-text"
  }, [_vm._v("در حال بارگذاری...")])])]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.filesloading,
      expression: "!filesloading"
    }],
    staticClass: "enhanced-close-button",
    attrs: {
      "aria-label": "بستن"
    },
    on: {
      "click": _vm.hideModal
    }
  }, [_c('div', {
    staticClass: "close-icon-wrapper"
  }, [_c('i', {
    staticClass: "fas fa-times"
  })])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.filesloading && _vm.fileTitle,
      expression: "!filesloading && fileTitle"
    }],
    staticClass: "media-title-badge"
  }, [_c('div', {
    staticClass: "title-badge-content"
  }, [_c('i', {
    staticClass: "fas fa-play-circle badge-icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "title-text"
  }, [_vm._v(_vm._s(_vm.fileTitle))])])]), _vm._v(" "), _vm.filePlayerUrl && !_vm.filesloading ? _c('div', {
    staticClass: "player-wrapper"
  }, [_c('VideoPlayer', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    ref: "FileVideoPlayer",
    staticClass: "fp-full fp-mute fp-edgy flowplayer enhanced-video-player",
    attrs: {
      "playerid": "file-player",
      "stream": _vm.filePlayerUrl,
      "data-poster": _vm.filePosterUrl,
      "player-auto-play": true,
      "show-auto-play-toggle": false,
      "show-skip-teaser": false,
      "show-skip-intro": false,
      "show-skip-credits-button": false
    }
  })], 1) : _vm._e()])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/item/File.vue?vue&type=template&id=6dc12dfa&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/item/File.vue?vue&type=script&lang=js





// Dynamic import for code splitting - VideoPlayer is heavy, only load when modal opens
var VideoPlayer = function VideoPlayer() {
  return Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 749));
};
/* harmony default export */ var Filevue_type_script_lang_js = ({
  components: {
    VideoPlayer: VideoPlayer
  },
  props: {
    show: Boolean,
    staticmodal: Boolean,
    content: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: null
    },
    backdrop: {
      type: String,
      default: null
    },
    backdropteaser: {
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
    }
  },
  data: function data() {
    return {
      filesloading: true,
      download_files: [],
      filePlayerUrl: null,
      filePosterUrl: null,
      fileTitle: null
    };
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
  mounted: function mounted() {
    var _this = this;
    if (this.staticmodal) {
      this.showModal();
      document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex');
    }
    // هنگام بسته شدن مدال، حذف کلاس blure و emit رویداد hide-modal
    this.$refs['FilePlayer'].$on('hide', function () {
      document.getElementsByClassName('default')[0].classList.remove('blure');
      _this.$emit('hide-modal', null);
    });
    document.body.classList.add('loaded');
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      return fa && this.$i18n.locale === 'fa' ? fa : en;
    },
    Chooseback: function Chooseback(teaser, backdrop) {
      return teaser ? teaser : backdrop;
    },
    showModal: function showModal() {
      var _this2 = this;
      this.$refs['FilePlayer'].show();
      if (!this.staticmodal) document.getElementsByClassName('default')[0].classList.add('blure');

      // شروع بارگذاری اطلاعات فایل
      this.filesloading = true;
      var ref = this.$cookiz ? this.$cookiz.get('ref') : 0;
      if (!ref || isNaN(ref)) ref = 0;
      var api_url = this.$auth && this.$auth.loggedIn ? '/get/files' : '/ghost/get/files';

      // ارسال درخواست با Axios (می‌توانید از this.$axios استفاده کنید)
      this.$axios.post(api_url, {
        id: this.id,
        content: this.content,
        hls: 1,
        type: this.type,
        ref: ref
      }).then(function (res) {
        if (res.status === 200) {
          var data = res.data.data;
          if (_this2.content === 5) {
            // در صورتی که content==5 باشد (برای تصاویر)
            // اطلاعات lightimages را می‌توانید در متغیر محلی یا به صورت دلخواه تنظیم کنید.
            // در این مثال تمرکز روی پخش فایل است.
          } else {
            if (data.file.length === 0) {
              _this2.$swal('There was a problem playing the video, we will fix it soon.', {
                icon: 'error'
              });
              _this2.filesloading = false;
            } else {
              // تنظیم عنوان فایل بر اساس content
              var titlesm = _this2.name;
              if (_this2.content === 1) titlesm = _this2.$i18n.t('show.trailer') + ' ' + titlesm;else if (_this2.content === 2) titlesm = _this2.$i18n.t('show.watch_backstage') + ' | ' + titlesm;else if (_this2.content === 3) titlesm = _this2.$i18n.t('show.watch_next') + ' | ' + titlesm;else if (_this2.content === 4) titlesm = _this2.$i18n.t('show.watch_musicvideo') + ' | ' + titlesm;else titlesm = _this2.$i18n.t('show.watch_images') + ' | ' + titlesm;

              // در اینجا می‌توانید اطلاعات دانلود را نیز تنظیم کنید
              _this2.download_files = data.download || [];
              // تنظیم URL فایل پخش، پوستر و عنوان
              _this2.filePlayerUrl = data.file[0].file;
              _this2.filePosterUrl = _this2.backdrop ? 'https://thumb.upera.tv/thumb?w=1920&h=938&q=100&a=c&src=https://cdn.upera.tv/s3/backdrops/' + _this2.Chooseback(_this2.backdropteaser, _this2.backdrop) : null;
              _this2.fileTitle = titlesm;
              _this2.filesloading = false;
            }
          }
        }
      }).catch(function (error) {
        console.error(error);
        _this2.filesloading = false;
        _this2.$swal('There was a problem playing the video, we will fix it soon.', {
          icon: 'error'
        });
      });
    },
    hideModal: function hideModal() {
      this.$refs['FilePlayer'].hide();
      this.$emit('hide-modal', null);
      document.getElementsByClassName('default')[0].classList.remove('blure');
    }
  }
});
// CONCATENATED MODULE: ./components/item/File.vue?vue&type=script&lang=js
 /* harmony default export */ var item_Filevue_type_script_lang_js = (Filevue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/item/File.vue?vue&type=style&index=0&id=6dc12dfa&prod&scoped=true&lang=css
var Filevue_type_style_index_0_id_6dc12dfa_prod_scoped_true_lang_css = __webpack_require__(1032);

// EXTERNAL MODULE: ./components/item/File.vue?vue&type=style&index=1&id=6dc12dfa&prod&lang=css
var Filevue_type_style_index_1_id_6dc12dfa_prod_lang_css = __webpack_require__(1033);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/item/File.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  item_Filevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6dc12dfa",
  null
  
)

/* harmony default export */ var File = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {VideoPlayer: __webpack_require__(749).default})


/***/ }),

/***/ 895:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);