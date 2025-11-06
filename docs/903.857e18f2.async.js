"use strict";
(self["webpackChunk_aniyajs_components"] = self["webpackChunk_aniyajs_components"] || []).push([[903],{

/***/ 76311:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./.dumi/tmp-production/dumi/exports.ts + 24 modules
var dumi_exports = __webpack_require__(44794);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/dumi/theme-default/builtins/Badge/index.js + 1 modules
var builtins_Badge = __webpack_require__(93359);
// EXTERNAL MODULE: ./node_modules/dumi/theme-default/builtins/Table/index.js + 1 modules
var builtins_Table = __webpack_require__(96057);
;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/builtins/API/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/builtins/API/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





function Token(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react.createElement("span", {
    "data-token": children
  }, children);
}

// https://github.com/umijs/dumi/issues/1957
function fixArg(arg) {
  if (arg.hasQuestionToken && typeof arg.type === 'string') {
    arg.type = arg.type.replace(/\s+\|\s+undefined\s*$/i, '');
  }
  return arg;
}

// Usually handles types other than basic types, either interfaces or type aliases
var CompositeType = function CompositeType(prop) {
  var _prop$source;
  var intl = (0,dumi_exports/* useIntl */.YB)();
  var _useSiteData = (0,dumi_exports/* useSiteData */.WF)(),
    themeConfig = _useSiteData.themeConfig;
  return (_prop$source = prop.source) !== null && _prop$source !== void 0 && _prop$source[0] && themeConfig.sourceLink ? /*#__PURE__*/react.createElement("a", {
    className: "dumi-default-api-link",
    href: intl.formatMessage({
      id: '$internal.api.sourceLink'
    }, _objectSpread({}, prop.source[0])),
    target: "_blank",
    rel: "noreferrer"
  }, prop.className) : prop.className;
};
var HANDLERS = {
  // entry method
  toNode: function toNode(prop) {
    if (typeof prop.type === 'string' && prop.type in this) {
      // value from TypeMap
      if ('enum' in prop) return this.enum(prop);
      return this[prop.type](prop);
    } else if (prop.type) {
      // non-parsed type, such as ReactNode
      return this.getValidClassName(prop) || /*#__PURE__*/react.createElement("span", null, prop.type);
    } else if ('const' in prop) {
      // const value
      return /*#__PURE__*/react.createElement("span", null, prop.const);
    } else if ('oneOf' in prop) {
      // oneOf value
      return this.oneOf(prop);
    }

    // unknown type
    return /*#__PURE__*/react.createElement("span", null, "unknown");
  },
  // type handlers
  string: function string(prop) {
    return /*#__PURE__*/react.createElement("span", null, prop.type);
  },
  number: function number(prop) {
    return /*#__PURE__*/react.createElement("span", null, prop.type);
  },
  boolean: function boolean(prop) {
    return /*#__PURE__*/react.createElement("span", null, prop.type);
  },
  any: function any(prop) {
    return /*#__PURE__*/react.createElement("span", null, prop.type);
  },
  object: function object(prop) {
    var _this = this;
    var entries = Object.entries(prop.properties || {});
    var props = entries.map(function (_ref2, index) {
      var _prop$required;
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      // skip nested object type
      return /*#__PURE__*/react.createElement("span", {
        key: key
      }, /*#__PURE__*/react.createElement("span", null, key), !((_prop$required = prop.required) !== null && _prop$required !== void 0 && _prop$required.includes(key)) && /*#__PURE__*/react.createElement(Token, null, "?"), /*#__PURE__*/react.createElement(Token, null, ":"), value.type === 'object' ? /*#__PURE__*/react.createElement("span", null, "object") : _this.toNode(value), index < entries.length - 1 && /*#__PURE__*/react.createElement(Token, null, ";"));
    });
    return /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Token, null, '{'), props, /*#__PURE__*/react.createElement(Token, null, '}'));
  },
  array: function array(prop) {
    var _this2 = this;
    var arrayType = /*#__PURE__*/react.createElement("span", null, "any");
    if (prop.items) {
      if (Array.isArray(prop.items)) return /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Token, null, '['), prop.items.map(function (item, i) {
        return /*#__PURE__*/react.createElement("span", {
          key: "".concat(i)
        }, i > 0 && ', ', _this2.toNode(item));
      }), /*#__PURE__*/react.createElement(Token, null, ']'));
      var className = this.getValidClassName(prop.items);
      arrayType = className !== null && className !== void 0 ? className : this.toNode(prop.items);
    }
    return /*#__PURE__*/react.createElement("span", null, arrayType, /*#__PURE__*/react.createElement(Token, null, '['), /*#__PURE__*/react.createElement(Token, null, ']'));
  },
  // FIXME: extract real type
  element: function element(prop) {
    return /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement(Token, null, "<"), /*#__PURE__*/react.createElement("span", null, prop.componentName), /*#__PURE__*/react.createElement(Token, null, ">"));
  },
  // FIXME: extract real type
  function: function _function(_ref4) {
    var _this3 = this;
    var signature = _ref4.signature;
    // handle Function type without signature
    if (!signature) return /*#__PURE__*/react.createElement("span", null, "Function");
    var signatures = 'oneOf' in signature ? signature.oneOf : [signature];
    return signatures.map(function (signature, si) {
      return /*#__PURE__*/react.createElement("span", {
        key: "".concat(si)
      }, signature.isAsync ? /*#__PURE__*/react.createElement(Token, null, "async") : '', /*#__PURE__*/react.createElement(Token, null, '('), signature.arguments.map(function (arg, ai) {
        return /*#__PURE__*/react.createElement("span", {
          key: "".concat(si).concat(ai)
        }, /*#__PURE__*/react.createElement("span", null, arg.key), arg.hasQuestionToken && /*#__PURE__*/react.createElement(Token, null, "?"), /*#__PURE__*/react.createElement(Token, null, ":"), _this3.toNode(!!arg.schema ? arg.schema : fixArg(arg)), ai < signature.arguments.length - 1 && /*#__PURE__*/react.createElement(Token, null, ","));
      }), /*#__PURE__*/react.createElement(Token, null, ')'), /*#__PURE__*/react.createElement(Token, null, "=>"), _this3.toNode(signature.returnType), si < signatures.length - 1 && /*#__PURE__*/react.createElement(Token, null, "|"));
    });
  },
  // FIXME: extract real type
  dom: function dom(prop) {
    return /*#__PURE__*/react.createElement("span", null, prop.className || 'DOM');
  },
  // special handlers
  enum: function _enum(prop) {
    var enumStringArray = prop.enum.map(function (v) {
      return JSON.stringify(v);
    });
    return /*#__PURE__*/react.createElement("span", null, enumStringArray.map(function (e, i) {
      return /*#__PURE__*/react.createElement("span", {
        key: i
      }, /*#__PURE__*/react.createElement("span", null, e), i < enumStringArray.length - 1 && /*#__PURE__*/react.createElement(Token, null, "|"));
    }));
  },
  oneOf: function oneOf(prop) {
    var _this4 = this;
    return prop.oneOf.map(function (v, i) {
      return /*#__PURE__*/react.createElement("span", {
        key: i
      }, _this4.getValidClassName(v) || _this4.toNode(v), i < prop.oneOf.length - 1 && /*#__PURE__*/react.createElement(Token, null, "|"));
    });
  },
  reference: function reference(prop) {
    var _this5 = this;
    var typeParameters = prop.typeParameters || [];
    var params = typeParameters.map(function (param, i) {
      return /*#__PURE__*/react.createElement("span", {
        key: i
      }, _this5.toNode(param), i < typeParameters.length - 1 && /*#__PURE__*/react.createElement(Token, null, ","));
    });
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("a", {
      className: "dumi-default-api-link",
      href: prop.externalUrl,
      target: "_blank",
      rel: "noreferrer"
    }, prop.name), params.length ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Token, null, "<"), params, /*#__PURE__*/react.createElement(Token, null, ">")) : '');
  },
  // utils
  getValidClassName: function getValidClassName(prop) {
    if ('className' in prop && typeof prop.className === 'string' && prop.className !== '__type') {
      return /*#__PURE__*/react.createElement(CompositeType, prop);
    }
    return null;
  }
};
var APIType = function APIType(prop) {
  var _useState = useState(function () {
      return HANDLERS.toNode(prop);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  useEffect(function () {
    setType(HANDLERS.toNode(prop));
  }, [prop]);
  return /*#__PURE__*/React.createElement("code", {
    className: "dumi-default-api-type"
  }, type);
};
function getReleaseAndVersionInfo(props) {
  var releaseInfo = {};
  Object.entries(props).forEach(function (_ref5) {
    var _schema$tags, _schema$tags2;
    var _ref6 = _slicedToArray(_ref5, 2),
      prop = _ref6[0],
      schema = _ref6[1];
    var modiferTags = (_schema$tags = schema.tags) === null || _schema$tags === void 0 ? void 0 : _schema$tags.modifierTags;
    var blockTags = (_schema$tags2 = schema.tags) === null || _schema$tags2 === void 0 ? void 0 : _schema$tags2.blockTags;
    modiferTags === null || modiferTags === void 0 ? void 0 : modiferTags.forEach(function (tag) {
      if (tag === 'alpha' || tag === 'beta' || tag === 'experimental') {
        releaseInfo[prop] = [tag];
      }
    });
    blockTags === null || blockTags === void 0 ? void 0 : blockTags.forEach(function (_ref7) {
      var tag = _ref7.tag,
        content = _ref7.content;
      if (tag === 'deprecated' || tag === 'since') {
        var textContent = content.map(function (item) {
          return item.text;
        }).join('');
        releaseInfo[prop] = [tag, textContent];
      }
    });
  });
  return releaseInfo;
}
var APIRelease = function APIRelease(_ref8) {
  var name = _ref8.name,
    info = _ref8.info;
  var intl = useIntl();
  var _info = _slicedToArray(info, 2),
    modifer = _info[0],
    text = _info[1];
  var modiferProps = _defineProperty({
    className: 'dumi-default-api-release-modifer'
  }, 'data-release', modifer);
  if (text && modifer === 'deprecated') {
    modiferProps['data-dumi-tooltip'] = text;
  }
  var modiferText = modifer === 'since' ? "".concat(text, "+") : intl.formatMessage({
    id: "api.component.release.".concat(modifer)
  });
  return /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-api-release"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-api-release-name",
    "data-release": modifer
  }, name), /*#__PURE__*/React.createElement("span", modiferProps, modifer === 'deprecated' ? modiferText : /*#__PURE__*/React.createElement(Badge, {
    type: "info"
  }, modiferText)));
};
var API = function API(props) {
  var _useRouteMeta = useRouteMeta(),
    frontmatter = _useRouteMeta.frontmatter;
  var _useAtomAssets = useAtomAssets(),
    components = _useAtomAssets.components;
  var id = props.id || frontmatter.atomId;
  var intl = useIntl();
  if (!id) throw new Error('`id` properties if required for API component!');
  var definition = components === null || components === void 0 ? void 0 : components[id];
  var properties = {};
  var type = (props.type || 'props').toLowerCase();
  if (definition) {
    var _definition$key;
    var key = "".concat(type, "Config");
    properties = ((_definition$key = definition[key]) === null || _definition$key === void 0 ? void 0 : _definition$key.properties) || {};
  }
  var releaseInfo = useMemo(function () {
    return getReleaseAndVersionInfo(properties);
  }, [properties]);
  return /*#__PURE__*/React.createElement("div", {
    className: "markdown"
  }, /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: 'api.component.name'
  })), /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: 'api.component.description'
  })), /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: 'api.component.type'
  })), type === 'props' && /*#__PURE__*/React.createElement("th", null, intl.formatMessage({
    id: 'api.component.default'
  })))), /*#__PURE__*/React.createElement("tbody", null, Object.keys(properties).length ? Object.entries(properties).map(function (_ref9) {
    var _definition$propsConf;
    var _ref10 = _slicedToArray(_ref9, 2),
      name = _ref10[0],
      prop = _ref10[1];
    return /*#__PURE__*/React.createElement("tr", {
      key: name
    }, /*#__PURE__*/React.createElement("td", null, releaseInfo[name] ? /*#__PURE__*/React.createElement(APIRelease, {
      name: name,
      info: releaseInfo[name]
    }) : name), /*#__PURE__*/React.createElement("td", null, prop.description || '--'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(APIType, prop)), type === 'props' && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("code", null, (_definition$propsConf = definition.propsConfig.required) !== null && _definition$propsConf !== void 0 && _definition$propsConf.includes(name) ? intl.formatMessage({
      id: 'api.component.required'
    }) : JSON.stringify(prop.default) || '--')));
  }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 4
  }, intl.formatMessage({
    id: "api.component.".concat(components ? 'not.found' : 'unavailable')
  }, {
    id: id
  }))))));
};
/* harmony default export */ var builtins_API = ((/* unused pure expression or super */ null && (API)));

/***/ }),

/***/ 93359:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/builtins/Badge/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/builtins/Badge/index.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Badge = function Badge(props) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: "dumi-default-badge"
  }, props));
};
/* harmony default export */ var builtins_Badge = ((/* unused pure expression or super */ null && (Badge)));

/***/ }),

/***/ 61788:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _slots_Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95470);
/* harmony import */ var dumi_theme_builtins_SourceCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24422);
/* harmony import */ var rc_util_lib_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45598);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




function CodeGroup(props) {
  var children = props.children;
  var usefulChildren = toArray(children).filter(function (child) {
    var _child$type;
    return _typeof(child) === 'object' && typeof child.type === 'function' && ((_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.name) === SourceCode.name;
  });
  var items = usefulChildren.map(function (child, idx) {
    var _child$props, _child$key;
    var _ref = (_child$props = child.props) !== null && _child$props !== void 0 ? _child$props : {},
      lang = _ref.lang,
      title = _ref.title;
    return {
      key: String((_child$key = child.key) !== null && _child$key !== void 0 ? _child$key : idx),
      label: title || lang || 'txt',
      // fallback to txt if no lang and title
      children: child
    };
  });
  return /*#__PURE__*/React.createElement(Tabs, {
    className: "dumi-default-code-group",
    items: items
  });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (CodeGroup)));

/***/ }),

/***/ 96057:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ builtins_Table; }
});

// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
var lodash_throttle = __webpack_require__(93096);
var lodash_throttle_default = /*#__PURE__*/__webpack_require__.n(lodash_throttle);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/builtins/Table/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/builtins/Table/index.js
var _excluded = ["children"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Table = function Table(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var container = (0,react.useRef)(null);
  var _useState = (0,react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    leftFolded = _useState2[0],
    setLeftFolded = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    rightFolded = _useState4[0],
    setRightFolded = _useState4[1];

  // watch content scroll to render folded shadow
  (0,react.useEffect)(function () {
    var elm = container.current;
    if (elm) {
      var handler = lodash_throttle_default()(function () {
        setLeftFolded(elm.scrollLeft > 0);
        setRightFolded(elm.scrollLeft < elm.scrollWidth - elm.offsetWidth);
      }, 100);
      handler();
      elm.addEventListener('scroll', handler);
      window.addEventListener('resize', handler);
      return function () {
        elm.removeEventListener('scroll', handler);
        window.removeEventListener('resize', handler);
      };
    }
  }, []);
  return /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-table"
  }, /*#__PURE__*/react.createElement("div", {
    className: "dumi-default-table-content",
    ref: container,
    "data-left-folded": leftFolded || undefined,
    "data-right-folded": rightFolded || undefined
  }, /*#__PURE__*/react.createElement("table", props, children)));
};
/* harmony default export */ var builtins_Table = (Table);

/***/ }),

/***/ 85939:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./node_modules/rc-tree/es/index.js + 7 modules
var es = __webpack_require__(70593);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/builtins/Tree/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./node_modules/dumi/theme-default/builtins/Tree/index.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }








function getTreeFromList(nodes) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var data = [];
  [].concat(nodes).forEach(function (node, i) {
    var key = "".concat(prefix ? "".concat(prefix, "-") : '').concat(i);
    switch (node === null || node === void 0 ? void 0 : node.type) {
      case 'ul':
        {
          var _data;
          var parent = ((_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.children) || data;
          var ulLeafs = getTreeFromList(node.props.children || [], key);
          parent.push.apply(parent, _toConsumableArray(ulLeafs));
          break;
        }
      case 'li':
        {
          var _node$props$children, _node$props$children$;
          var hasEmptyUl = (_node$props$children = node.props.children) === null || _node$props$children === void 0 ? void 0 : (_node$props$children$ = _node$props$children.some) === null || _node$props$children$ === void 0 ? void 0 : _node$props$children$.call(_node$props$children, function (child) {
            var _child$props$children;
            return child.type === 'ul' && !((_child$props$children = child.props.children) !== null && _child$props$children !== void 0 && _child$props$children.length);
          });
          var title = [].concat(node.props.children).filter(function (child) {
            return child.type !== 'ul';
          });
          var children = hasEmptyUl ? [] : getTreeFromList(node.props.children, key);
          data.push({
            title: title,
            key: key,
            children: children,
            isLeaf: !hasEmptyUl && !children.length,
            switcherIcon: hasEmptyUl ? /*#__PURE__*/React.createElement("span", {
              className: "tree-switcher-leaf-line"
            }) : undefined
          });
          break;
        }
      default:
    }
  });
  return data;
}
var useListToTree = function useListToTree(nodes) {
  var _useState = useState(getTreeFromList(nodes)),
    _useState2 = _slicedToArray(_useState, 2),
    tree = _useState2[0],
    setTree = _useState2[1];
  useEffect(function () {
    setTree(getTreeFromList(nodes));
  }, [nodes]);
  return tree;
};
var getIcon = function getIcon(props) {
  var _data$children;
  var isLeaf = props.isLeaf,
    expanded = props.expanded,
    data = props.data;
  if (isLeaf) {
    return /*#__PURE__*/React.createElement("span", {
      className: "dumi-default-tree-icon"
    }, /*#__PURE__*/React.createElement(FileOutlined, {
      fill: "currentColor"
    }));
  }
  return !expanded || !(data !== null && data !== void 0 && (_data$children = data.children) !== null && _data$children !== void 0 && _data$children.length) ? /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(FolderOutlined, {
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(FolderOpenOutlined, {
    fill: "currentColor"
  }));
};
var renderSwitcherIcon = function renderSwitcherIcon(props) {
  var isLeaf = props.isLeaf,
    expanded = props.expanded;
  if (isLeaf) {
    return /*#__PURE__*/React.createElement("span", {
      className: "tree-switcher-leaf-line"
    });
  }
  return expanded ? /*#__PURE__*/React.createElement("span", {
    className: "tree-switcher-line-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(MinusSquareOutlined, {
    fill: "currentColor"
  }))) : /*#__PURE__*/React.createElement("span", {
    className: "tree-switcher-line-icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dumi-default-tree-icon"
  }, /*#__PURE__*/React.createElement(PlusSquareOutlined, {
    fill: "currentColor"
  })));
};

// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};
var getRealHeight = function getRealHeight(node) {
  var scrollHeight = node.scrollHeight;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node ? node.offsetHeight : 0
  };
};
var skipOpacityTransition = function skipOpacityTransition(_, event) {
  return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
};
var initCollapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
};
/* harmony default export */ var builtins_Tree = (function (props) {
  var data = useListToTree(props.children);
  var treeRef = /*#__PURE__*/createRef();
  var onClick = function onClick(event, node) {
    var _node$children;
    var isLeaf = node.isLeaf;
    var isEmptyUl = !isLeaf && !((_node$children = node.children) !== null && _node$children !== void 0 && _node$children.length);
    if (isLeaf || isEmptyUl || event.shiftKey || event.metaKey || event.ctrlKey) {
      return;
    }
    treeRef.current.onNodeExpand(event, node);
  };
  return /*#__PURE__*/React.createElement(Tree, {
    className: "dumi-default-tree",
    icon: getIcon,
    ref: treeRef,
    itemHeight: 20,
    showLine: true,
    selectable: false,
    virtual: false,
    motion: _objectSpread(_objectSpread({}, initCollapseMotion), {}, {
      motionAppear: false
    }),
    onClick: onClick,
    treeData: [{
      key: '0',
      title: props.title || '<root>',
      children: data
    }],
    defaultExpandAll: true,
    switcherIcon: renderSwitcherIcon
  });
});

/***/ }),

/***/ 45598:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = (__webpack_require__(64836)["default"]);
__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = toArray;
var _isFragment = _interopRequireDefault(__webpack_require__(86165));
var _react = _interopRequireDefault(__webpack_require__(67294));
function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  _react.default.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0, _isFragment.default)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/***/ }),

/***/ 86165:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var _interopRequireDefault = (__webpack_require__(64836)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isFragment;
var _typeof2 = _interopRequireDefault(__webpack_require__(18698));
var REACT_ELEMENT_TYPE_18 = Symbol.for('react.element');
var REACT_ELEMENT_TYPE_19 = Symbol.for('react.transitional.element');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');

/**
 * Compatible with React 18 or 19 to check if node is a Fragment.
 */
function isFragment(object) {
  return (
    // Base object type
    object && (0, _typeof2.default)(object) === 'object' && (
    // React Element type
    object.$$typeof === REACT_ELEMENT_TYPE_18 || object.$$typeof === REACT_ELEMENT_TYPE_19) &&
    // React Fragment type
    object.type === REACT_FRAGMENT_TYPE
  );
}

/***/ })

}]);