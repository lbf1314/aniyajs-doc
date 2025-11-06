"use strict";
(self["webpackChunk_aniyajs_components"] = self["webpackChunk_aniyajs_components"] || []).push([[1009],{

/***/ 65149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Demo; }
});

// EXTERNAL MODULE: ./.dumi/tmp-production/dumi/exports.ts + 24 modules
var dumi_exports = __webpack_require__(44794);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/dumi/dist/client/theme-api/useRenderer.js
var useRenderer = __webpack_require__(52289);
;// CONCATENATED MODULE: ./node_modules/dumi/dist/client/pages/Demo/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/dumi/dist/client/pages/Demo/index.js




var DemoRenderPage = function DemoRenderPage() {
  var params = (0,dumi_exports/* useParams */.UO)();
  var id = params.id;
  var demo = (0,dumi_exports/* useDemo */.FO)(id);
  var _useRenderer = (0,useRenderer/* useRenderer */.m)({
      id: id,
      component: demo.component,
      renderOpts: demo.renderOpts
    }),
    canvasRef = _useRenderer.canvasRef;
  var _ref = demo || {},
    component = _ref.component,
    renderOpts = _ref.renderOpts;
  var _useLiveDemo = (0,dumi_exports/* useLiveDemo */.kw)(id),
    liveDemoNode = _useLiveDemo.node,
    setSource = _useLiveDemo.setSource,
    liveDemoError = _useLiveDemo.error,
    loading = _useLiveDemo.loading;
  var finalNode = liveDemoNode || (renderOpts !== null && renderOpts !== void 0 && renderOpts.renderer ? /*#__PURE__*/(0,react.createElement)('div', {
    ref: canvasRef
  }) : component && /*#__PURE__*/(0,react.createElement)(component));

  // listen message event for setSource
  (0,react.useEffect)(function () {
    var handler = function handler(ev) {
      if (ev.data.type === 'dumi.liveDemo.setSource') {
        setSource(ev.data.value);
      }
    };
    window.addEventListener('message', handler);
    return function () {
      return window.removeEventListener('message', handler);
    };
  }, [setSource]);

  // notify parent window that compile done
  (0,react.useEffect)(function () {
    if (!loading && (liveDemoError || liveDemoNode)) {
      window.postMessage({
        type: 'dumi.liveDemo.compileDone',
        value: {
          err: liveDemoError
        }
      });
    }
  }, [liveDemoError, liveDemoNode, loading]);
  return finalNode;
};
/* harmony default export */ var Demo = (DemoRenderPage);

/***/ })

}]);