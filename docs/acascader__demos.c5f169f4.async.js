"use strict";
(self["webpackChunk_aniyajs_components"] = self["webpackChunk_aniyajs_components"] || []).push([[2204],{

/***/ 63040:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






var Test01 = function Test01() {
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    name: "test01",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.ACascader, {
      name: "test01",
      label: "\u7701\u5E02\u533A",
      initialValue: ['zhejiang', 'hangzhou', 'xihu'],
      rules: [{
        required: true,
        message: '请选择'
      }],
      selectOptions: [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [{
            value: 'xihu',
            label: 'West Lake'
          }]
        }]
      }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
          value: 'nanjing',
          label: 'Nanjing',
          children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men'
          }]
        }]
      }],
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        allowClear: true
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
/* harmony default export */ __webpack_exports__["default"] = (Test01);

/***/ }),

/***/ 70716:
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.ACascader, {
      name: "test02",
      label: "\u7701\u5E02\u533A",
      rules: [{
        required: true,
        message: '请选择'
      }],
      selectOptions: [{
        value: 'zhejiang',
        label: '浙江',
        isLeaf: false
      }, {
        value: 'jiangsu',
        label: '江苏',
        isLeaf: false
      }],
      loadDataOptions: [null, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test02',
        queryKey: 'id'
      }, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test03',
        queryKey: 'id'
      }],
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        allowClear: true
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

/***/ 38013:
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.ACascader, {
      name: "test03",
      label: "\u7701\u5E02\u533A",
      rules: [{
        required: true,
        message: '请选择'
      }],
      loadDataOptions: [{
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test01'
      }, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test02',
        queryKey: 'id'
      }, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test03',
        queryKey: 'id'
      }],
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        allowClear: true
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

/***/ 5848:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






var Test04 = function Test04() {
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    name: "test04",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.ACascader, {
      name: "test04",
      label: "\u7701\u5E02\u533A",
      rules: [{
        required: true,
        message: '请选择'
      }],
      selectOptions: [{
        value: 'zhejiang',
        label: '浙江',
        isLeaf: false
      }, {
        value: 'jiangsu',
        label: '江苏',
        isLeaf: false
      }],
      loadDataOptions: [null, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/city',
        queryKey: 'id'
      }, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/area',
        queryKey: 'id'
      }],
      formatter: function formatter(childData, _, index) {
        if (index === 1) {
          return childData === null || childData === void 0 ? void 0 : childData.map(function (item) {
            return {
              label: item === null || item === void 0 ? void 0 : item.cityName,
              value: item === null || item === void 0 ? void 0 : item.id,
              isLeaf: false
            };
          });
        }
        if (index === 2) {
          return childData === null || childData === void 0 ? void 0 : childData.map(function (item) {
            return {
              label: item === null || item === void 0 ? void 0 : item.name,
              value: item === null || item === void 0 ? void 0 : item.id
            };
          });
        }
        return false;
      },
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        allowClear: true
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
/* harmony default export */ __webpack_exports__["default"] = (Test04);

/***/ }),

/***/ 52816:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97857);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99289);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70338);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);










var Test05 = function Test05() {
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    name: "test05",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_3__.ACascader, {
      name: "test05",
      label: "\u7701\u5E02\u533A",
      rules: [{
        required: true,
        message: '请选择'
      }],
      selectOptions: [{
        value: 'zhejiang',
        label: '浙江',
        isLeaf: false
      }, {
        value: 'jiangsu',
        label: '江苏',
        isLeaf: false
      }],
      loadDataOptions: [null, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/city',
        queryKey: 'id'
      }, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/test-asyncFn',
        queryKey: 'id'
      }],
      formatter: function formatter(childData, _, index) {
        if (index === 1) {
          return childData === null || childData === void 0 ? void 0 : childData.map(function (item) {
            return {
              label: item === null || item === void 0 ? void 0 : item.cityName,
              value: item === null || item === void 0 ? void 0 : item.id,
              isLeaf: false
            };
          });
        }
        return false;
      },
      asyncFn: ( /*#__PURE__*/function () {
        var _ref = _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(queryOption, index) {
          var _queryOption$options, res, result;
          return _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(index === 2)) {
                  _context.next = 7;
                  break;
                }
                _context.next = 3;
                return (0,_services__WEBPACK_IMPORTED_MODULE_5__.queryPost)(queryOption === null || queryOption === void 0 ? void 0 : queryOption.url, _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({}, queryOption === null || queryOption === void 0 || (_queryOption$options = queryOption.options) === null || _queryOption$options === void 0 ? void 0 : _queryOption$options.params));
              case 3:
                res = _context.sent;
                if (!((res === null || res === void 0 ? void 0 : res.code) === 200)) {
                  _context.next = 7;
                  break;
                }
                result = res.result;
                return _context.abrupt("return", result);
              case 7:
                return _context.abrupt("return", false);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }()),
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        allowClear: true
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Item, {
      wrapperCol: {
        offset: 6,
        span: 18
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Test05);

/***/ }),

/***/ 98426:
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









var Test06 = function Test06() {
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    name: "test06",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_2__.ACascader, {
      name: "test06",
      label: "\u9AD8\u5FB7\u5730\u56FE\u83B7\u53D6\u7701\u5E02\u533A",
      rules: [{
        required: true,
        message: '请选择'
      }],
      loadDataOptions: [{
        action: 'https://restapi.amap.com/v3/config/district?subdistrict=1&key=bc79432dc6c9a562b428d54904d0ebfe'
      }, {
        action: 'https://restapi.amap.com/v3/config/district?subdistrict=1&key=bc79432dc6c9a562b428d54904d0ebfe',
        queryKey: 'keywords'
      }, {
        action: 'https://restapi.amap.com/v3/config/district?subdistrict=1&key=bc79432dc6c9a562b428d54904d0ebfe',
        queryKey: 'keywords'
      }],
      formatter: function formatter(childData, _, index) {
        if (index === 0) {
          return childData === null || childData === void 0 ? void 0 : childData.map(function (item) {
            return {
              label: item === null || item === void 0 ? void 0 : item.name,
              value: item === null || item === void 0 ? void 0 : item.adcode,
              isLeaf: false
            };
          });
        }
        if (index === 1) {
          return childData === null || childData === void 0 ? void 0 : childData.map(function (item) {
            return {
              label: item === null || item === void 0 ? void 0 : item.name,
              value: item === null || item === void 0 ? void 0 : item.citycode,
              isLeaf: false
            };
          });
        }
        if (index === 2) {
          return childData === null || childData === void 0 ? void 0 : childData.map(function (item) {
            return {
              label: item === null || item === void 0 ? void 0 : item.name,
              value: item === null || item === void 0 ? void 0 : item.adcode
            };
          });
        }
        return false;
      },
      asyncFn: ( /*#__PURE__*/function () {
        var _ref = _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(queryOption, index) {
          var _res$districts$0$dist, _res$districts, res, _queryOption$options, _res$districts$0$dist2, _res$districts2, _res, _queryOption$options2, _res2$districts$0$dis, _res2$districts, _res2;
          return _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(index === 0)) {
                  _context.next = 5;
                  break;
                }
                _context.next = 3;
                return (0,_services__WEBPACK_IMPORTED_MODULE_4__.fetchAsync)(queryOption.url);
              case 3:
                res = _context.sent;
                return _context.abrupt("return", (_res$districts$0$dist = res === null || res === void 0 || (_res$districts = res.districts) === null || _res$districts === void 0 || (_res$districts = _res$districts[0]) === null || _res$districts === void 0 ? void 0 : _res$districts.districts) !== null && _res$districts$0$dist !== void 0 ? _res$districts$0$dist : []);
              case 5:
                if (!(index === 1)) {
                  _context.next = 10;
                  break;
                }
                _context.next = 8;
                return (0,_services__WEBPACK_IMPORTED_MODULE_4__.fetchAsync)("".concat(queryOption.url, "&keywords=").concat(queryOption === null || queryOption === void 0 || (_queryOption$options = queryOption.options) === null || _queryOption$options === void 0 || (_queryOption$options = _queryOption$options.params) === null || _queryOption$options === void 0 ? void 0 : _queryOption$options.keywords));
              case 8:
                _res = _context.sent;
                return _context.abrupt("return", (_res$districts$0$dist2 = _res === null || _res === void 0 || (_res$districts2 = _res.districts) === null || _res$districts2 === void 0 || (_res$districts2 = _res$districts2[0]) === null || _res$districts2 === void 0 ? void 0 : _res$districts2.districts) !== null && _res$districts$0$dist2 !== void 0 ? _res$districts$0$dist2 : []);
              case 10:
                if (!(index === 2)) {
                  _context.next = 15;
                  break;
                }
                _context.next = 13;
                return (0,_services__WEBPACK_IMPORTED_MODULE_4__.fetchAsync)("".concat(queryOption.url, "&keywords=").concat(queryOption === null || queryOption === void 0 || (_queryOption$options2 = queryOption.options) === null || _queryOption$options2 === void 0 || (_queryOption$options2 = _queryOption$options2.params) === null || _queryOption$options2 === void 0 ? void 0 : _queryOption$options2.keywords));
              case 13:
                _res2 = _context.sent;
                return _context.abrupt("return", (_res2$districts$0$dis = _res2 === null || _res2 === void 0 || (_res2$districts = _res2.districts) === null || _res2$districts === void 0 || (_res2$districts = _res2$districts[0]) === null || _res2$districts === void 0 ? void 0 : _res2$districts.districts) !== null && _res2$districts$0$dis !== void 0 ? _res2$districts$0$dis : []);
              case 15:
                return _context.abrupt("return", false);
              case 16:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }()),
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        allowClear: true
      }
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
/* harmony default export */ __webpack_exports__["default"] = (Test06);

/***/ }),

/***/ 24638:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97857);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99289);
/* harmony import */ var _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70338);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85893);










var Test07 = function Test07() {
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
    name: "test07",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_3__.ACascader, {
      name: "test07",
      label: "\u7701\u5E02\u533A",
      rules: [{
        required: true,
        message: '请选择'
      }],
      initialValue: ['jiangsu', 3, 1],
      selectOptions: [{
        value: 'zhejiang',
        label: '浙江',
        isLeaf: false
      }, {
        value: 'jiangsu',
        label: '江苏',
        isLeaf: false
      }],
      loadDataOptions: [null, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/city',
        queryKey: 'id'
      }, {
        action: 'http://yapi.yunxiaowei.cn/mock/168/sys/test-asyncFn',
        queryKey: 'id'
      }],
      formatter: function formatter(childData, _, index) {
        if (index === 1) {
          return childData === null || childData === void 0 ? void 0 : childData.map(function (item) {
            return {
              label: item === null || item === void 0 ? void 0 : item.cityName,
              value: item === null || item === void 0 ? void 0 : item.id,
              isLeaf: false
            };
          });
        }
        return false;
      },
      asyncFn: ( /*#__PURE__*/function () {
        var _ref = _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(queryOption, index) {
          var _queryOption$options, res, result;
          return _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!(index === 2)) {
                  _context.next = 7;
                  break;
                }
                _context.next = 3;
                return (0,_services__WEBPACK_IMPORTED_MODULE_5__.queryPost)(queryOption === null || queryOption === void 0 ? void 0 : queryOption.url, _Users_00513436_Desktop_study_old_aniyajs_aniyajs_components_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default()({}, queryOption === null || queryOption === void 0 || (_queryOption$options = queryOption.options) === null || _queryOption$options === void 0 ? void 0 : _queryOption$options.params));
              case 3:
                res = _context.sent;
                if (!((res === null || res === void 0 ? void 0 : res.code) === 200)) {
                  _context.next = 7;
                  break;
                }
                result = res.result;
                return _context.abrupt("return", result);
              case 7:
                return _context.abrupt("return", false);
              case 8:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }()),
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        allowClear: true
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z.Item, {
      wrapperCol: {
        offset: 6,
        span: 18
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Test07);

/***/ })

}]);