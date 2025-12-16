(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/SiteDL.vue?vue&type=template&id=dbed6ae0
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('b-modal', {
    ref: "downloadLinks",
    attrs: {
      "id": "downloadLinks",
      "centered": false,
      "hide-footer": "",
      "hide-header": "",
      "size": "lg",
      "no-close-on-backdrop": true,
      "hide-backdrop": true,
      "no-close-on-esc": true,
      "modal-class": "modal-download-link",
      "static": true,
      "no-enforce-focus": ""
    }
  }, [_c('div', {
    staticClass: "download-links"
  }, [_c('div', [_c('div', {
    staticClass: "download-links-info d-flex justify-content-center"
  }, [_c('div', {
    staticClass: "download-links-title text-center"
  }, [_c('div', {
    staticClass: "traffic-hint mt-4 mb-3"
  }, [_vm._v("\n              حجم مصرف اینترنت شما تمام بها محاسبه می شود\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "text-white mx-2"
  }, [_vm._v("\n              " + _vm._s(_vm.filename) + "\n            ")])])])]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "download-links-body download-links-body2 download-links-0"
  }, [_c('div', {
    staticClass: "download-links-items px-2",
    attrs: {
      "id": "download-links-items"
    }
  }, [_c('div', [_c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "d-flex h-100 align-items-end"
  }, [_c('div', {
    staticClass: "download-link"
  }, [_c('button', {
    staticClass: "btn btn-secondary btn-block",
    on: {
      "click": function click($event) {
        return _vm.LINK_DOWNLOAD();
      }
    }
  }, [_vm._v("\n                          " + _vm._s(_vm.$t('show.download')) + "\n                          "), _c('i', {
    staticClass: "icon-download"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "copy-link"
  }, [_c('button', {
    staticClass: "btn btn-copy btn-block",
    on: {
      "click": function click($event) {
        return _vm.COPY_DOWNLOAD();
      }
    }
  }, [_vm._v("\n                          کپی لینک\n                        ")])])])])])])])])])])])])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SiteDL.vue?vue&type=template&id=dbed6ae0

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.sub.js
var es_string_sub = __webpack_require__(861);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./components/SiteDL.vue?vue&type=script&lang=js





/* harmony default export */ var SiteDLvue_type_script_lang_js = ({
  props: {
    show: Boolean
  },
  data: function data() {
    return {
      filename: '',
      md5: '',
      expires: ''
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.showModal();
    document.getElementsByClassName('modal-content')[0].removeAttribute('tabindex');
    if (document.getElementsByClassName('download-options-label').length) document.getElementsByClassName('download-options-label')[0].classList.remove('btn');
    document.body.classList.add('loaded');

    // if(this.$route.query.sub && this.$route.query.f){
    //   if(this.$route.query.s)
    //     window.location.href = 'https://'+this.$route.query.sub+'.igap.net'+this.$route.query.f+'&s='+this.$route.query.s
    //   else
    //     window.location.href = 'https://'+this.$route.query.sub+'.igap.net'+this.$route.query.f
    // }

    if (this.$route.query.f) {
      this.filename = this.$route.query.f.split(/(\\|\/)/g).pop();
    }
    this.$axios.post('/ghost/getmd5', {
      token: this.$route.query.token,
      expires: this.$route.query.expires
    }).then(function (res) {
      if (res.status === 200) {
        _this.md5 = res.data.md5;
        _this.expires = res.data.expires;
      } else if (res.status === 404) {
        _this.$swal({
          icon: 'error',
          title: 'لطفا جهت دسترسی، با اینترنت همراه اول یا ایرانسل وارد شوید',
          dangerMode: true,
          button: 'بررسی اتصال اینترنت'
        }).then(function () {
          _this.$router.go();
        });
      } else {
        _this.$swal("لینک منقضی شده است.");
      }
    }, function (error) {
      if (error.response.status === 404) {
        _this.$swal({
          icon: 'error',
          title: 'لطفا جهت دسترسی، با اینترنت همراه اول یا ایرانسل وارد شوید',
          dangerMode: true,
          button: 'بررسی اتصال اینترنت'
        }).then(function () {
          _this.$router.go();
        });
      } else {
        _this.$swal("لینک منقضی شده است.");
      }
    });
  },
  methods: {
    Resize: function Resize(e) {
      var vh = window.innerHeight * 0.01;
      var element = document.getElementsByClassName('download-links');
      if (element.length) element[0].style.setProperty('--vh', "".concat(vh, "px"));
      return e;
    },
    showModal: function showModal() {
      var _this2 = this;
      this.$refs['downloadLinks'].show();
      this.$refs['downloadLinks'].$on('shown', function () {
        window.addEventListener("resize", _this2.Resize);
        _this2.Resize('e');
      });
    },
    hideModal: function hideModal() {
      this.$refs['downloadLinks'].hide();
      this.$emit("hide-modal", null);
      this.$store.dispatch("download/RESET_DOWNLOAD");
      document.getElementsByClassName('default')[0].classList.remove('blure');
    },
    LINK_DOWNLOAD: function LINK_DOWNLOAD() {
      var _this3 = this;
      if (this.md5 && this.expires && this.$route.query.sub && this.$route.query.f && this.$route.query.dl) {
        if (this.$route.query.s) window.location.href = 'https://' + this.$route.query.sub + '.igap.net' + this.$route.query.f + '?s=' + this.$route.query.s + '&dl=' + this.$route.query.dl + '&mdr=' + this.md5 + '&expiresr=' + this.expires;else window.location.href = 'https://' + this.$route.query.sub + '.igap.net' + this.$route.query.f + '?dl=' + this.$route.query.dl + '&mdr=' + this.md5 + '&expiresr=' + this.expires;
      } else if (this.$route.query.sub && this.$route.query.f && this.$route.query.dl) {
        if (!this.md5 || !this.expires) this.$axios.post('/ghost/getmd5', {
          token: this.$route.query.token,
          expires: this.$route.query.expires
        }).then(function (res) {
          if (res.status === 200) {
            _this3.md5 = res.data.md5;
            _this3.expires = res.data.expires;
            if (_this3.$route.query.s) window.location.href = 'https://' + _this3.$route.query.sub + '.igap.net' + _this3.$route.query.f + '?s=' + _this3.$route.query.s + '&dl=' + _this3.$route.query.dl + '&mdr=' + _this3.md5 + '&expiresr=' + _this3.expires;else window.location.href = 'https://' + _this3.$route.query.sub + '.igap.net' + _this3.$route.query.f + '?dl=' + _this3.$route.query.dl + '&mdr=' + _this3.md5 + '&expiresr=' + _this3.expires;
          } else if (res.status === 404) {
            _this3.$swal({
              icon: 'error',
              title: 'لطفا جهت دسترسی، با اینترنت همراه اول یا ایرانسل وارد شوید',
              dangerMode: true,
              button: 'بررسی اتصال اینترنت'
            }).then(function () {
              _this3.$router.go();
            });
          } else {
            _this3.$swal("لینک منقضی شده است.");
          }
        }, function (error) {
          if (error.response.status === 404) {
            _this3.$swal({
              icon: 'error',
              title: 'لطفا جهت دسترسی، با اینترنت همراه اول یا ایرانسل وارد شوید',
              dangerMode: true,
              button: 'بررسی اتصال اینترنت'
            }).then(function () {
              _this3.$router.go();
            });
          } else {
            _this3.$swal("لینک منقضی شده است.");
          }
        });
      } else {
        this.$swal("صفحه را مجددا باز نمایید.");
      }
    },
    COPY_DOWNLOAD: function COPY_DOWNLOAD() {
      var _this4 = this;
      if (this.md5 && this.expires && this.$route.query.sub && this.$route.query.f && this.$route.query.dl) {
        var url;
        if (this.$route.query.s) url = 'https://' + this.$route.query.sub + '.igap.net' + this.$route.query.f + '?s=' + this.$route.query.s + '&dl=' + this.$route.query.dl + '&mdr=' + this.md5 + '&expiresr=' + this.expires;else url = 'https://' + this.$route.query.sub + '.igap.net' + this.$route.query.f + '?dl=' + this.$route.query.dl + '&mdr=' + this.md5 + '&expiresr=' + this.expires;
        this.copy(url);
      } else if (this.$route.query.sub && this.$route.query.f && this.$route.query.dl) {
        if (!this.md5 || !this.expires) this.$axios.post('/ghost/getmd5', {
          token: this.$route.query.token,
          expires: this.$route.query.expires
        }).then(function (res) {
          if (res.status === 200) {
            _this4.md5 = res.data.md5;
            _this4.expires = res.data.expires;
            var url;
            if (_this4.$route.query.s) url = 'https://' + _this4.$route.query.sub + '.igap.net' + _this4.$route.query.f + '?s=' + _this4.$route.query.s + '&dl=' + _this4.$route.query.dl + '&mdr=' + _this4.md5 + '&expiresr=' + _this4.expires;else url = 'https://' + _this4.$route.query.sub + '.igap.net' + _this4.$route.query.f + '?dl=' + _this4.$route.query.dl + '&mdr=' + _this4.md5 + '&expiresr=' + _this4.expires;
            _this4.copy(url);
          } else if (res.status === 404) {
            _this4.$swal({
              icon: 'error',
              title: 'لطفا جهت دسترسی، با اینترنت همراه اول یا ایرانسل وارد شوید',
              dangerMode: true,
              button: 'بررسی اتصال اینترنت'
            }).then(function () {
              _this4.$router.go();
            });
          } else {
            _this4.$swal("لینک منقضی شده است.");
          }
        }, function (error) {
          if (error.response.status === 404) {
            _this4.$swal({
              icon: 'error',
              title: 'لطفا جهت دسترسی، با اینترنت همراه اول یا ایرانسل وارد شوید',
              dangerMode: true,
              button: 'بررسی اتصال اینترنت'
            }).then(function () {
              _this4.$router.go();
            });
          } else {
            _this4.$swal("لینک منقضی شده است.");
          }
        });
      } else {
        this.$swal("صفحه را مجددا باز نمایید.");
      }
    },
    copy: function copy(text) {
      var _this5 = this;
      return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _t;
        return regeneratorRuntime.wrap(function (_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 1;
              return _this5.$copyText(text);
            case 1:
              _this5.$swal("لینک کپی شد", {
                icon: "success"
              });
              _context.next = 3;
              break;
            case 2:
              _context.prev = 2;
              _t = _context["catch"](0);
              _this5.$swal("لینک در دیوایس شما قابل کپی نیست.");
              return _context.abrupt("return", _t);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    lottery: function lottery() {
      if (!this.$auth.loggedIn) {
        this.$store.dispatch('login/SHOW_MODAL', {
          premessage: this.premessage,
          premobile: this.mobile,
          preredirect: null,
          prerefresh: false
        });
      } else {
        this.LINK_DOWNLOAD();
      }
      // else{
      //   window.location.href = 'https://www.instagram.com/uperatv/'
      // }
    }
  }
});
// CONCATENATED MODULE: ./components/SiteDL.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SiteDLvue_type_script_lang_js = (SiteDLvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./components/SiteDL.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SiteDLvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SiteDL = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);