(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CommentCard_vue_vue_type_style_index_0_id_ce9a68fc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(776);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CommentCard_vue_vue_type_style_index_0_id_ce9a68fc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CommentCard_vue_vue_type_style_index_0_id_ce9a68fc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 841:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/CommentCard.vue?vue&type=template&id=ce9a68fc&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "comment-card"
  }, [_c('div', {
    staticClass: "comment-avatar"
  }, [_vm.userImage ? _c('img', {
    directives: [{
      name: "lazy-load",
      rawName: "v-lazy-load"
    }],
    attrs: {
      "data-src": _vm.userImage,
      "alt": "User avatar"
    }
  }) : _c('div', {
    staticClass: "avatar-placeholder"
  }, [_c('svg', {
    attrs: {
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z",
      "fill": "#FFFFFF"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "comment-content-wrapper"
  }, [_c('div', {
    staticClass: "comment-header"
  }, [_c('span', {
    staticClass: "comment-user-name"
  }, [_vm._v(_vm._s(_vm.userName))]), _vm._v(" "), _c('span', {
    staticClass: "comment-timestamp"
  }, [_vm._v(_vm._s(_vm.formattedTime))])]), _vm._v(" "), _c('p', {
    staticClass: "comment-text",
    class: {
      'not-approved': !_vm.approved
    }
  }, [_vm._v("\n      " + _vm._s(_vm.content) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "comment-actions"
  }, [_c('button', {
    staticClass: "action-btn upvote-btn",
    on: {
      "click": function click($event) {
        return _vm.$emit('upvote');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-thumbs-up"
  })]), _vm._v(" "), _c('span', {
    staticClass: "votes-count"
  }, [_vm._v(_vm._s(_vm.votes || 0))]), _vm._v(" "), _c('button', {
    staticClass: "action-btn downvote-btn",
    on: {
      "click": function click($event) {
        return _vm.$emit('downvote');
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-thumbs-down"
  })]), _vm._v(" "), _vm.showReplyButton ? _c('button', {
    staticClass: "action-btns reply-btn",
    on: {
      "click": function click($event) {
        return _vm.$emit('reply');
      }
    }
  }, [_vm._v("\n        پاسخ\n      ")]) : _vm._e()]), _vm._v(" "), _vm._t("default")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CommentCard.vue?vue&type=template&id=ce9a68fc&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(140);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/CommentCard.vue?vue&type=script&lang=js

/* harmony default export */ var CommentCardvue_type_script_lang_js = ({
  name: 'CommentCard',
  props: {
    userImage: {
      type: String,
      default: ''
    },
    userName: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    approved: {
      type: [Boolean, Number],
      default: true
    },
    votes: {
      type: Number,
      default: 0
    },
    showReplyButton: {
      type: Boolean,
      default: false
    },
    timestamp: {
      type: String,
      default: ''
    }
  },
  computed: {
    formattedTime: function formattedTime() {
      if (!this.timestamp) return 'همین الان';
      var date = new Date(this.timestamp);
      var now = new Date();
      var diffInSeconds = Math.floor((now - date) / 1000);
      if (diffInSeconds < 60) return 'همین الان';
      if (diffInSeconds < 3600) {
        var minutes = Math.floor(diffInSeconds / 60);
        return "".concat(minutes, " \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634");
      }
      if (diffInSeconds < 86400) {
        var hours = Math.floor(diffInSeconds / 3600);
        return "".concat(hours, " \u0633\u0627\u0639\u062A \u067E\u06CC\u0634");
      }
      if (diffInSeconds < 604800) {
        var days = Math.floor(diffInSeconds / 86400);
        return "".concat(days, " \u0631\u0648\u0632 \u067E\u06CC\u0634");
      }
      if (diffInSeconds < 2592000) {
        var weeks = Math.floor(diffInSeconds / 604800);
        return "".concat(weeks, " \u0647\u0641\u062A\u0647 \u067E\u06CC\u0634");
      }
      if (diffInSeconds < 31536000) {
        var months = Math.floor(diffInSeconds / 2592000);
        return "".concat(months, " \u0645\u0627\u0647 \u067E\u06CC\u0634");
      }
      var years = Math.floor(diffInSeconds / 31536000);
      return "".concat(years, " \u0633\u0627\u0644 \u067E\u06CC\u0634");
    }
  }
});
// CONCATENATED MODULE: ./components/CommentCard.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CommentCardvue_type_script_lang_js = (CommentCardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/CommentCard.vue?vue&type=style&index=0&id=ce9a68fc&prod&scoped=true&lang=css
var CommentCardvue_type_style_index_0_id_ce9a68fc_prod_scoped_true_lang_css = __webpack_require__(828);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/CommentCard.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentCardvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "ce9a68fc",
  null
  
)

/* harmony default export */ var CommentCard = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);