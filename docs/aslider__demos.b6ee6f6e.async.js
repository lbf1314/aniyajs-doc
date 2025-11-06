"use strict";
(self["webpackChunk_aniyajs_components"] = self["webpackChunk_aniyajs_components"] || []).push([[8373],{

/***/ 20121:
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.ASlider, {
      name: "test01",
      label: "\u6D4B\u8BD501",
      rules: [{
        required: true,
        message: '请选择'
      }],
      initialValue: 30,
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        tooltip: {
          open: true
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.ASlider, {
      name: "test02",
      label: "\u6D4B\u8BD502",
      rules: [{
        required: true,
        message: '请选择'
      }],
      initialValue: [20, 50],
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {
        range: true
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

/***/ })

}]);