(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8,43],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Comments_vue_vue_type_style_index_0_id_36f46c19_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(890);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Comments_vue_vue_type_style_index_0_id_36f46c19_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_Comments_vue_vue_type_style_index_0_id_36f46c19_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Comments.vue?vue&type=template&id=36f46c19&scoped=true

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "comments-container"
  }, [_c('div', {
    staticClass: "comments-count-header"
  }, [_vm.commentsData && _vm.commentsData.length ? _c('span', [_vm._v(_vm._s(_vm.commentsData.length))]) : _vm._e(), _vm._v("\n    دیدگاه ثبت شده\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "comment-input-wrapper"
  }, [_vm.avatar ? _c('div', {
    staticClass: "user-avatar",
    style: {
      backgroundImage: "url(".concat(_vm.avatar, ")")
    }
  }) : _c('div', {
    staticClass: "user-avatar user-avatar-placeholder"
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
      "fill": "#D4D4D4"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "input-box-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.message,
      expression: "message"
    }],
    staticClass: "comment-input",
    attrs: {
      "type": "text",
      "placeholder": "نوشتن نظر"
    },
    domProps: {
      "value": _vm.message
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.message = $event.target.value;
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "comment-send-button",
    on: {
      "click": _vm.saveComment
    }
  }, [_c('span', {
    staticClass: "comment-send-button-text"
  }, [_vm._v("ارسال")]), _vm._v(" "), _c('svg', {
    attrs: {
      "width": "20",
      "height": "20",
      "viewBox": "0 0 20 20",
      "fill": "none",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('path', {
    attrs: {
      "d": "M2.5 10L17.5 3.33333L10.8333 18.3333L8.33333 11.6667L2.5 10Z",
      "stroke": "white",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })])])])]), _vm._v(" "), _vm.errorComment ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v("\n    " + _vm._s(_vm.errorComment) + "\n  ")]) : _vm._e(), _vm._v(" "), _vm.commentsData && _vm.commentsData.length ? _c('div', {
    attrs: {
      "id": "comments"
    }
  }, _vm._l(_vm.commentsData, function (comment, index) {
    return _c('div', {
      key: comment.id,
      staticClass: "comment-item"
    }, [_c('CommentCard', {
      attrs: {
        "userImage": comment.user.image,
        "userName": comment.user.name,
        "content": comment.content,
        "approved": comment.approved,
        "votes": comment.votes || 0,
        "showReplyButton": true,
        "timestamp": comment.created_at || comment.timestamp
      },
      on: {
        "upvote": function upvote($event) {
          return _vm.voteComment(comment.id, _vm.COMMENT_TYPES.DIRECT, index, null, _vm.VOTE_TYPES.UP);
        },
        "downvote": function downvote($event) {
          return _vm.voteComment(comment.id, _vm.COMMENT_TYPES.DIRECT, index, null, _vm.VOTE_TYPES.DOWN);
        },
        "reply": function reply($event) {
          return _vm.toggleReplyBox(comment.id);
        }
      }
    }, [_vm.replyBoxes[comment.id] ? _c('div', {
      staticClass: "comment-input-wrapper reply-input-wrapper"
    }, [_vm.avatar ? _c('div', {
      staticClass: "user-avatar",
      style: {
        backgroundImage: "url(".concat(_vm.avatar, ")")
      }
    }) : _c('div', {
      staticClass: "user-avatar user-avatar-placeholder"
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
        "fill": "#D4D4D4"
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "input-box-wrapper"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.replyMessage[comment.id],
        expression: "replyMessage[comment.id]"
      }],
      staticClass: "comment-input",
      attrs: {
        "type": "text",
        "placeholder": "نوشتن نظر"
      },
      domProps: {
        "value": _vm.replyMessage[comment.id]
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(_vm.replyMessage, comment.id, $event.target.value);
        }
      }
    }), _vm._v(" "), _c('button', {
      staticClass: "comment-reply-button",
      on: {
        "click": function click($event) {
          return _vm.sendReply(comment.id, index);
        }
      }
    }, [_c('span', {
      staticClass: "comment-send-button-text"
    }, [_vm._v("ارسال پاسخ")]), _vm._v(" "), _c('svg', {
      attrs: {
        "width": "20",
        "height": "20",
        "viewBox": "0 0 20 20",
        "fill": "none",
        "xmlns": "http://www.w3.org/2000/svg"
      }
    }, [_c('path', {
      attrs: {
        "d": "M2.5 10L17.5 3.33333L10.8333 18.3333L8.33333 11.6667L2.5 10Z",
        "stroke": "white",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    })])])])]) : _vm._e(), _vm._v(" "), comment.replies && comment.replies.length ? _c('div', {
      staticClass: "replies-container"
    }, _vm._l(comment.replies, function (reply, rIndex) {
      return _c('CommentCard', {
        key: reply.id,
        attrs: {
          "userImage": reply.user.image,
          "userName": reply.user.name,
          "content": reply.content,
          "approved": reply.approved,
          "votes": reply.votes || 0,
          "showReplyButton": false,
          "timestamp": reply.created_at || reply.timestamp
        },
        on: {
          "upvote": function upvote($event) {
            return _vm.voteComment(reply.id, _vm.COMMENT_TYPES.REPLY, index, rIndex, _vm.VOTE_TYPES.UP);
          },
          "downvote": function downvote($event) {
            return _vm.voteComment(reply.id, _vm.COMMENT_TYPES.REPLY, index, rIndex, _vm.VOTE_TYPES.DOWN);
          }
        }
      });
    }), 1) : _vm._e()])], 1);
  }), 0) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Comments.vue?vue&type=template&id=36f46c19&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__(471);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(39);

// EXTERNAL MODULE: ./components/CommentCard.vue + 4 modules
var CommentCard = __webpack_require__(852);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/Comments.vue?vue&type=script&lang=js










function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { Object(defineProperty["a" /* default */])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }







// Constants
var API = Object.freeze({
  AUTH: '/comments-v2',
  GHOST: '/ghost/comments-v2'
});
var PAGINATION = Object.freeze({
  PAGE: 1,
  LIMIT: 10
});
var VOTE_TYPES = Object.freeze({
  UP: 'up',
  DOWN: 'down'
});
var COMMENT_TYPES = Object.freeze({
  DIRECT: 'directcomment',
  REPLY: 'replycomment'
});
/* harmony default export */ var Commentsvue_type_script_lang_js = ({
  components: {
    CommentCard: CommentCard["default"]
  },
  props: {
    type: {
      type: String,
      default: null
    },
    id: {
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
    }
  },
  data: function data() {
    return {
      avatar: null,
      fullname: null,
      commentsData: [],
      message: null,
      errorComment: null,
      errorReply: null,
      loading: false,
      hasFetched: false,
      // Prevent duplicate fetches
      fetchCancelToken: null,
      // For canceling pending requests
      // Maintain the open/close state of the reply form for each comment
      replyBoxes: {},
      // Maintain the reply text for each comment
      replyMessage: {},
      // expose constants for template use
      COMMENT_TYPES: COMMENT_TYPES,
      VOTE_TYPES: VOTE_TYPES
    };
  },
  computed: _objectSpread({}, Object(vuex_esm["c" /* mapGetters */])({
    commentsloading: 'comments/commentsloading'
  })),
  watch: {
    // Watch for changes in id/type props to refetch if needed
    id: function id(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.hasFetched = false;
        this.fetchComments();
      }
    },
    type: function type(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.hasFetched = false;
        this.fetchComments();
      }
    }
  },
  mounted: function mounted() {
    if (!this.hasFetched) {
      this.fetchComments();
    }
  },
  beforeDestroy: function beforeDestroy() {
    // Cancel any pending request when component is destroyed
    if (this.fetchCancelToken) {
      this.fetchCancelToken.cancel('Component destroyed');
      this.fetchCancelToken = null;
    }
  },
  methods: {
    ChooseLang: function ChooseLang(en, fa) {
      return fa && this.$i18n.locale === 'fa' ? fa : en;
    },
    ChooseFaType: function ChooseFaType() {
      if (this.type === 'movie') return 'فیلم';else if (this.type === 'episode') return 'قسمت';else return 'سریال';
    },
    getApiUrl: function getApiUrl() {
      return this.$auth.loggedIn ? API.AUTH : API.GHOST;
    },
    fetchComments: function fetchComments() {
      var _this = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var CancelToken, PAGE, LIMIT, res, _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.hasFetched || !_this.type || !_this.id)) {
                _context.next = 1;
                break;
              }
              return _context.abrupt("return");
            case 1:
              // Cancel any pending request
              if (_this.fetchCancelToken) {
                _this.fetchCancelToken.cancel('New request initiated');
              }

              // Create new cancel token
              CancelToken = _this.$axios.CancelToken;
              _this.fetchCancelToken = CancelToken.source();
              _this.$store.dispatch('comments/COMMENTS_SPINER_LOAD');
              _context.prev = 2;
              PAGE = PAGINATION.PAGE, LIMIT = PAGINATION.LIMIT;
              _context.next = 3;
              return _this.$axios.get(_this.getApiUrl(), {
                params: {
                  type: _this.type,
                  id: _this.id,
                  page: PAGE,
                  limit: LIMIT
                },
                cancelToken: _this.fetchCancelToken.token
              });
            case 3:
              res = _context.sent;
              if (res.status === 200 && res.data.status === 'success') {
                _this.commentsData = res.data.comments.data;
                _this.avatar = res.data.avatar;
                _this.fullname = res.data.name;
                _this.errorComment = null;
                _this.hasFetched = true; // Mark as fetched
              } else {
                _this.errorComment = res.data.message || 'خطا در دریافت نظرات';
              }
              _context.next = 6;
              break;
            case 4:
              _context.prev = 4;
              _t = _context["catch"](2);
              if (!_this.$axios.isCancel(_t)) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              _this.errorComment = _t.response && _t.response.data && _t.response.data.message || 'خطای شبکه';
            case 6:
              _context.prev = 6;
              _this.$store.dispatch('comments/COMMENTS_SPINER_CLEAN');
              _this.fetchCancelToken = null;
              return _context.finish(6);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 4, 6, 7]]);
      }))();
    },
    saveComment: function saveComment() {
      var _this2 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res, _t2;
        return regeneratorRuntime.wrap(function (_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!_this2.message || _this2.message.trim() === '')) {
                _context2.next = 1;
                break;
              }
              _this2.errorComment = 'لطفا نظر خود را وارد نمایید';
              return _context2.abrupt("return");
            case 1:
              _this2.errorComment = null;
              if (_this2.$auth.loggedIn) {
                _context2.next = 2;
                break;
              }
              _this2.$store.dispatch('login/SHOW_MODAL', {
                premessage: null,
                premobile: null,
                preredirect: null,
                prerefresh: false
              });
              return _context2.abrupt("return");
            case 2:
              _this2.loading = true;
              _context2.prev = 3;
              _context2.next = 4;
              return _this2.$axios.post(API.AUTH, {
                type: _this2.type,
                id: _this2.id,
                content: _this2.message,
                parent_id: null
              });
            case 4:
              res = _context2.sent;
              if ((res.status === 200 || res.status === 201) && res.data.status === 'success') {
                _this2.commentsData.unshift(res.data.comment);
                _this2.message = null;
              } else {
                _this2.errorComment = res.data.message || 'ثبت نظر ناموفق بود';
              }
              _context2.next = 6;
              break;
            case 5:
              _context2.prev = 5;
              _t2 = _context2["catch"](3);
              _this2.errorComment = _t2.response && _t2.response.data && _t2.response.data.message || 'خطای شبکه';
            case 6:
              _context2.prev = 6;
              _this2.loading = false;
              return _context2.finish(6);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[3, 5, 6, 7]]);
      }))();
    },
    toggleReplyBox: function toggleReplyBox(commentId) {
      var next = !this.replyBoxes[commentId];
      this.$set(this.replyBoxes, commentId, next);
      // Clear the reply text when toggling the reply form
      this.$set(this.replyMessage, commentId, '');
    },
    sendReply: function sendReply(parentId, commentIndex) {
      var _this3 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var replyText, res, _t3;
        return regeneratorRuntime.wrap(function (_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              replyText = _this3.replyMessage[parentId];
              if (!(!replyText || replyText.trim() === '')) {
                _context3.next = 1;
                break;
              }
              _this3.errorReply = 'لطفا پاسخ خود را وارد نمایید';
              return _context3.abrupt("return");
            case 1:
              _this3.errorReply = null;
              if (_this3.$auth.loggedIn) {
                _context3.next = 2;
                break;
              }
              _this3.$store.dispatch('login/SHOW_MODAL', {
                premessage: null,
                premobile: null,
                preredirect: null,
                prerefresh: false
              });
              return _context3.abrupt("return");
            case 2:
              _this3.loading = true;
              _context3.prev = 3;
              _context3.next = 4;
              return _this3.$axios.post(API.AUTH, {
                type: _this3.type,
                id: _this3.id,
                content: replyText,
                parent_id: parentId
              });
            case 4:
              res = _context3.sent;
              if ((res.status === 200 || res.status === 201) && res.data.status === 'success') {
                if (!_this3.commentsData[commentIndex].replies) {
                  _this3.$set(_this3.commentsData[commentIndex], 'replies', []);
                }
                _this3.commentsData[commentIndex].replies.unshift(res.data.comment);
                _this3.$set(_this3.replyMessage, parentId, '');
                _this3.$set(_this3.replyBoxes, parentId, false);
              } else {
                _this3.errorReply = res.data.message || 'ثبت پاسخ ناموفق بود';
              }
              _context3.next = 6;
              break;
            case 5:
              _context3.prev = 5;
              _t3 = _context3["catch"](3);
              _this3.errorReply = _t3.response && _t3.response.data && _t3.response.data.message || 'خطای شبکه';
            case 6:
              _context3.prev = 6;
              _this3.loading = false;
              return _context3.finish(6);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[3, 5, 6, 7]]);
      }))();
    },
    voteComment: function voteComment(commentId, commentType, commentIndex, replyIndex, voteType) {
      var _this4 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var res, _this4$commentsData$c, msg, _t4;
        return regeneratorRuntime.wrap(function (_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_this4.$auth.loggedIn) {
                _context4.next = 1;
                break;
              }
              _this4.$store.dispatch('login/SHOW_MODAL', {
                premessage: 'نیاز به ورود',
                premobile: null,
                preredirect: null,
                prerefresh: false
              });
              return _context4.abrupt("return");
            case 1:
              _this4.loading = true;
              _context4.prev = 2;
              _context4.next = 3;
              return _this4.$axios.post("".concat(API.AUTH, "/").concat(commentId, "/vote"), {
                vote: voteType
              });
            case 3:
              res = _context4.sent;
              if (res.status === 200 && res.data.status === 'success') {
                if (commentType === COMMENT_TYPES.DIRECT) {
                  _this4.$set(_this4.commentsData[commentIndex], 'votes', res.data.votes);
                } else if (commentType === COMMENT_TYPES.REPLY && (_this4$commentsData$c = _this4.commentsData[commentIndex]) !== null && _this4$commentsData$c !== void 0 && (_this4$commentsData$c = _this4$commentsData$c.replies) !== null && _this4$commentsData$c !== void 0 && _this4$commentsData$c[replyIndex]) {
                  _this4.$set(_this4.commentsData[commentIndex].replies[replyIndex], 'votes', res.data.votes);
                }
              }
              _context4.next = 5;
              break;
            case 4:
              _context4.prev = 4;
              _t4 = _context4["catch"](2);
              msg = _t4.response && _t4.response.data && _t4.response.data.message || 'خطای شبکه';
              if (commentType === COMMENT_TYPES.REPLY) {
                _this4.errorReply = msg;
              } else {
                _this4.errorComment = msg;
              }
            case 5:
              _context4.prev = 5;
              _this4.loading = false;
              return _context4.finish(5);
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[2, 4, 5, 6]]);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./components/Comments.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Commentsvue_type_script_lang_js = (Commentsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./components/Comments.vue?vue&type=style&index=0&id=36f46c19&prod&scoped=true&lang=css
var Commentsvue_type_style_index_0_id_36f46c19_prod_scoped_true_lang_css = __webpack_require__(1027);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/Comments.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Commentsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "36f46c19",
  null
  
)

/* harmony default export */ var Comments = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommentCard: __webpack_require__(852).default})


/***/ }),

/***/ 839:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CommentCard_vue_vue_type_style_index_0_id_ce9a68fc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(787);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CommentCard_vue_vue_type_style_index_0_id_ce9a68fc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_string_replace_loader_index_js_ref_13_CommentCard_vue_vue_type_style_index_0_id_ce9a68fc_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 852:
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
var es_number_constructor = __webpack_require__(142);

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
var CommentCardvue_type_style_index_0_id_ce9a68fc_prod_scoped_true_lang_css = __webpack_require__(839);

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

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ })

}]);