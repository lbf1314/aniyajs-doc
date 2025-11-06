"use strict";
(self["webpackChunk_aniyajs_components"] = self["webpackChunk_aniyajs_components"] || []).push([[8342],{

/***/ 42520:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aniyajs_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47086);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9361);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68916);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83622);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);






var Test01 = function Test01() {
  var _theme$useToken = antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.useToken(),
    token = _theme$useToken.token;
  var onFinish = function onFinish(values) {
    console.log('values :>> ', values.test01.toHexString());
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    name: "test01",
    style: {
      maxWidth: 600
    },
    onFinish: onFinish,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_aniyajs_components__WEBPACK_IMPORTED_MODULE_0__.AColorPicker, {
      name: "test01",
      label: "\u989C\u8272\u9009\u62E9",
      rules: [{
        required: true,
        message: '请选择'
      }],
      initialValue: token.colorPrimary,
      formItemProps: {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      },
      widgetProps: {}
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.Item, {
      wrapperCol: {
        offset: 6,
        span: 18
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
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