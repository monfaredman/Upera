(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(175);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/faq.vue?vue&type=template&id=1b14e24b


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container-fluid",
    attrs: {
      "id": "checkcontainer"
    }
  }, [_c('div', {
    staticClass: "container pt-5 pt-lg-5 pt-md-5 mb-5 pt-1 faq-page"
  }, [_c('h4', {
    staticClass: "font-weight-bold h6 mt-5 pt-2"
  }, [_c('span', {
    staticClass: "pl-2 title"
  }, [_vm._v(_vm._s(_vm.$t('new.faqTitle')))])]), _vm._v(" "), _c('div', {
    staticClass: "input-group search-field with-filter my-4 insert_comment search_box_container"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "form-control border-left-0 border shadow-none",
    attrs: {
      "type": "text",
      "autofocus": "",
      "placeholder": _vm.$t('new.faq_search')
    },
    domProps: {
      "value": _vm.search
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _vm._l(_vm.filteredList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "accordion"
    }, [_c('h2', {
      staticClass: "mb-1 mt-4 collapse-header"
    }, [_c('b-button', {
      directives: [{
        name: "b-toggle",
        rawName: "v-b-toggle",
        value: 'accordion-' + index,
        expression: "'accordion-' + index"
      }],
      attrs: {
        "id": 'collapse-' + index,
        "variant": "link"
      }
    }, [_c('i', {
      staticClass: "fa fa-plus pr-4"
    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.a))])])], 1), _vm._v(" "), _c('b-collapse', {
      attrs: {
        "id": 'accordion-' + index,
        "accordion": "my-accordion",
        "role": "tabpanel"
      },
      on: {
        "shown": function shown($event) {
          return _vm.show(index);
        },
        "hide": function hide($event) {
          return _vm.hide(index);
        }
      }
    }, [_c('p', {
      staticClass: "pl-5 collapse-content"
    }, [_vm._v("\n          " + _vm._s(item.q) + "\n        ")])])], 1);
  })], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    staticClass: "btn btn-sm btn-send-comment"
  }, [_c('i', {
    staticClass: "icon-search"
  })]);
}];

// CONCATENATED MODULE: ./pages/profile/faq.vue?vue&type=template&id=1b14e24b

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/string-replace-loader??ref--13!./pages/profile/faq.vue?vue&type=script&lang=js








/* harmony default export */ var faqvue_type_script_lang_js = ({
  asyncData: function asyncData(context) {
    return Object(asyncToGenerator["a" /* default */])(/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var res;
      return regeneratorRuntime.wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return context.app.$axios.get('/faq');
          case 1:
            res = _context.sent;
            if (!(context.app.i18n.locale == 'fa')) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", {
              data: res.data.data.faq
            });
          case 2:
            return _context.abrupt("return", {
              data: res.data.data.faq_en
            });
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      data: {},
      search: ''
    };
  },
  head: function head() {
    return {
      title: this.$t('new.faqTitle')
    };
  },
  computed: {
    filteredList: function filteredList() {
      var _this = this;
      return this.data.filter(function (data) {
        return data.a.toLowerCase().includes(_this.search.toLowerCase());
      });
    }
  },
  methods: {
    show: function show(index) {
      var collapse = document.getElementById('collapse-' + index).getElementsByClassName('fa');
      if (collapse.length) {
        collapse[0].classList.add('fa-minus');
        collapse[0].classList.remove('fa-plus');
      }
    },
    hide: function hide(index) {
      var collapse = document.getElementById('collapse-' + index).getElementsByClassName('fa');
      if (collapse.length) {
        collapse[0].classList.add('fa-plus');
        collapse[0].classList.remove('fa-minus');
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/profile/faq.vue?vue&type=script&lang=js
 /* harmony default export */ var profile_faqvue_type_script_lang_js = (faqvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(32);

// CONCATENATED MODULE: ./pages/profile/faq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_faqvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var faq = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);