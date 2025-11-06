"use strict";
(self["webpackChunk_aniyajs_components"] = self["webpackChunk_aniyajs_components"] || []).push([[8968],{

/***/ 98024:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5574);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);







var mockVal = function mockVal(str) {
  var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    label: str.repeat(repeat),
    value: str.repeat(repeat)
  };
};
var Test01 = function Test01() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
    options = _useState2[0],
    setOptions = _useState2[1];
  var onSearch = function onSearch(searchText) {
    setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);
  };
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    name: "test01",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_1__.AAutoComplete, {
      name: "test01",
      label: "\u81EA\u52A8\u5B8C\u62101",
      rules: [{
        required: true,
        message: '请选择'
      }],
      initialValue: 'a',
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      selectOptions: options,
      onSearch: onSearch
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.Item, {
      wrapperCol: {
        offset: 6,
        span: 18
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Test01);

/***/ }),

/***/ 73765:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






var Test02 = function Test02() {
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    name: "test02",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.AAutoComplete, {
      name: "test02",
      label: "\u81EA\u52A8\u5B8C\u62102",
      rules: [{
        required: true,
        message: '请选择'
      }],
      initialValue: 'a',
      url: "http://yapi.yunxiaowei.cn/mock/168/auto-complete",
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Item, {
      wrapperCol: {
        offset: 6,
        span: 18
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Test02);

/***/ }),

/***/ 40629:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






var Test03 = function Test03() {
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    name: "test03",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.AAutoComplete, {
      name: "test03",
      label: "\u81EA\u52A8\u5B8C\u62103",
      rules: [{
        required: true,
        message: '请选择'
      }],
      initialValue: 'a',
      url: "http://yapi.yunxiaowei.cn/mock/168/auto-complete/formatter",
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      formatter: function formatter(data) {
        return data === null || data === void 0 ? void 0 : data.map(function (item) {
          return {
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              },
              children: ["\u8FD9\u4E2A\u662F\uFF1A", item === null || item === void 0 ? void 0 : item.name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                target: "_blank",
                href: "https://www.baidu.com",
                rel: "noreferrer",
                children: "more"
              })]
            }),
            value: item === null || item === void 0 ? void 0 : item.name
          };
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.Item, {
      wrapperCol: {
        offset: 6,
        span: 18
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Test03);

/***/ }),

/***/ 42905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99289);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70338);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85893);









var Test04 = function Test04() {
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    name: "test04",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_2__.AAutoComplete, {
      name: "test04",
      label: "\u81EA\u52A8\u5B8C\u62104",
      rules: [{
        required: true,
        message: '请选择'
      }],
      initialValue: 'a',
      url: "http://yapi.yunxiaowei.cn/mock/168/auto-complete/asyncFn",
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      formatter: function formatter(data) {
        return data === null || data === void 0 ? void 0 : data.map(function (item) {
          return {
            label: item === null || item === void 0 ? void 0 : item.name,
            value: item === null || item === void 0 ? void 0 : item.name
          };
        });
      },
      asyncFn: ( /*#__PURE__*/function () {
        var _ref = _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(url, value) {
          var res, _res$result;
          return _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,_services__WEBPACK_IMPORTED_MODULE_4__.queryPost)(url, {
                  test: value
                });
              case 2:
                res = _context.sent;
                if (!((res === null || res === void 0 ? void 0 : res.code) === 200)) {
                  _context.next = 7;
                  break;
                }
                return _context.abrupt("return", (_res$result = res === null || res === void 0 ? void 0 : res.result) !== null && _res$result !== void 0 ? _res$result : []);
              case 7:
                return _context.abrupt("return", []);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }())
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.Item, {
      wrapperCol: {
        offset: 6,
        span: 18
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Test04);

/***/ })

}]);