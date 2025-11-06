(self["webpackChunk_aniyajs_components"] = self["webpackChunk_aniyajs_components"] || []).push([[9748],{

/***/ 86128:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ es_TreeNode; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/contextTypes.js
var contextTypes = __webpack_require__(27822);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/Indent.js



var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
    level = _ref.level,
    isStart = _ref.isStart,
    isEnd = _ref.isEnd;
  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];
  for (var i = 0; i < level; i += 1) {
    list.push( /*#__PURE__*/react.createElement("span", {
      key: i,
      className: classnames_default()(baseClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(baseClassName, "-start"), isStart[i]), "".concat(baseClassName, "-end"), isEnd[i]))
    }));
  }
  return /*#__PURE__*/react.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};
/* harmony default export */ var es_Indent = (/*#__PURE__*/react.memo(Indent));
// EXTERNAL MODULE: ./node_modules/rc-tree/es/utils/keyUtil.js
var keyUtil = __webpack_require__(35381);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/utils/treeUtil.js
var treeUtil = __webpack_require__(1089);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/TreeNode.js





var _excluded = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"];







var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';
var TreeNode = function TreeNode(props) {
  var _unstableContext$node, _context$filterTreeNo, _classNames4;
  var eventKey = props.eventKey,
    className = props.className,
    style = props.style,
    dragOver = props.dragOver,
    dragOverGapTop = props.dragOverGapTop,
    dragOverGapBottom = props.dragOverGapBottom,
    isLeaf = props.isLeaf,
    isStart = props.isStart,
    isEnd = props.isEnd,
    expanded = props.expanded,
    selected = props.selected,
    checked = props.checked,
    halfChecked = props.halfChecked,
    loading = props.loading,
    domRef = props.domRef,
    active = props.active,
    data = props.data,
    onMouseMove = props.onMouseMove,
    selectable = props.selectable,
    otherProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);
  var context = react.useContext(contextTypes/* TreeContext */.k);
  var unstableContext = react.useContext(contextTypes/* UnstableContext */.y);
  var selectHandleRef = react.useRef(null);
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    dragNodeHighlight = _React$useState2[0],
    setDragNodeHighlight = _React$useState2[1];

  // ======= State: Disabled State =======
  var isDisabled = !!(context.disabled || props.disabled || (_unstableContext$node = unstableContext.nodeDisabled) !== null && _unstableContext$node !== void 0 && _unstableContext$node.call(unstableContext, data));
  var isCheckable = react.useMemo(function () {
    // Return false if tree or treeNode is not checkable
    if (!context.checkable || props.checkable === false) {
      return false;
    }
    return context.checkable;
  }, [context.checkable, props.checkable]);

  // ======= Event Handlers: Selection and Check =======
  var onSelect = function onSelect(e) {
    if (isDisabled) {
      return;
    }
    context.onNodeSelect(e, (0,treeUtil/* convertNodePropsToEventData */.F)(props));
  };
  var onCheck = function onCheck(e) {
    if (isDisabled) {
      return;
    }
    if (!isCheckable || props.disableCheckbox) {
      return;
    }
    context.onNodeCheck(e, (0,treeUtil/* convertNodePropsToEventData */.F)(props), !checked);
  };

  // ======= State: Selectable Check =======
  var isSelectable = react.useMemo(function () {
    // Ignore when selectable is undefined or null
    if (typeof selectable === 'boolean') {
      return selectable;
    }
    return context.selectable;
  }, [selectable, context.selectable]);
  var onSelectorClick = function onSelectorClick(e) {
    // Click trigger before select/check operation
    context.onNodeClick(e, (0,treeUtil/* convertNodePropsToEventData */.F)(props));
    if (isSelectable) {
      onSelect(e);
    } else {
      onCheck(e);
    }
  };
  var onSelectorDoubleClick = function onSelectorDoubleClick(e) {
    context.onNodeDoubleClick(e, (0,treeUtil/* convertNodePropsToEventData */.F)(props));
  };
  var onMouseEnter = function onMouseEnter(e) {
    context.onNodeMouseEnter(e, (0,treeUtil/* convertNodePropsToEventData */.F)(props));
  };
  var onMouseLeave = function onMouseLeave(e) {
    context.onNodeMouseLeave(e, (0,treeUtil/* convertNodePropsToEventData */.F)(props));
  };
  var onContextMenu = function onContextMenu(e) {
    context.onNodeContextMenu(e, (0,treeUtil/* convertNodePropsToEventData */.F)(props));
  };

  // ======= Drag: Drag Enabled =======
  var isDraggable = react.useMemo(function () {
    return !!(context.draggable && (!context.draggable.nodeDraggable || context.draggable.nodeDraggable(data)));
  }, [context.draggable, data]);

  // ======= Drag: Drag Event Handlers =======
  var onDragStart = function onDragStart(e) {
    e.stopPropagation();
    setDragNodeHighlight(true);
    context.onNodeDragStart(e, props);
    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (_unused) {
      // empty
    }
  };
  var onDragEnter = function onDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();
    context.onNodeDragEnter(e, props);
  };
  var onDragOver = function onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    context.onNodeDragOver(e, props);
  };
  var onDragLeave = function onDragLeave(e) {
    e.stopPropagation();
    context.onNodeDragLeave(e, props);
  };
  var onDragEnd = function onDragEnd(e) {
    e.stopPropagation();
    setDragNodeHighlight(false);
    context.onNodeDragEnd(e, props);
  };
  var onDrop = function onDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragNodeHighlight(false);
    context.onNodeDrop(e, props);
  };

  // ======= Expand: Node Expansion =======
  var onExpand = function onExpand(e) {
    if (loading) {
      return;
    }
    context.onNodeExpand(e, (0,treeUtil/* convertNodePropsToEventData */.F)(props));
  };

  // ======= State: Has Children =======
  var hasChildren = react.useMemo(function () {
    var _ref = (0,keyUtil/* default */.Z)(context.keyEntities, eventKey) || {},
      children = _ref.children;
    return Boolean((children || []).length);
  }, [context.keyEntities, eventKey]);

  // ======= State: Leaf Check =======
  var memoizedIsLeaf = react.useMemo(function () {
    if (isLeaf === false) {
      return false;
    }
    return isLeaf || !context.loadData && !hasChildren || context.loadData && props.loaded && !hasChildren;
  }, [isLeaf, context.loadData, hasChildren, props.loaded]);

  // ============== Effect ==============
  react.useEffect(function () {
    // Load data to avoid default expanded tree without data
    if (loading) {
      return;
    }
    // read from state to avoid loadData at same time
    if (typeof context.loadData === 'function' && expanded && !memoizedIsLeaf && !props.loaded) {
      // We needn't reload data when has children in sync logic
      // It's only needed in node expanded
      context.onNodeLoad((0,treeUtil/* convertNodePropsToEventData */.F)(props));
    }
  }, [loading, context.loadData, context.onNodeLoad, expanded, memoizedIsLeaf, props]);

  // ==================== Render: Drag Handler ====================
  var dragHandlerNode = react.useMemo(function () {
    var _context$draggable;
    if (!((_context$draggable = context.draggable) !== null && _context$draggable !== void 0 && _context$draggable.icon)) {
      return null;
    }
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(context.prefixCls, "-draggable-icon")
    }, context.draggable.icon);
  }, [context.draggable]);

  // ====================== Render: Switcher ======================
  var renderSwitcherIconDom = function renderSwitcherIconDom(isInternalLeaf) {
    var switcherIcon = props.switcherIcon || context.switcherIcon;
    // if switcherIconDom is null, no render switcher span
    if (typeof switcherIcon === 'function') {
      return switcherIcon((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
        isLeaf: isInternalLeaf
      }));
    }
    return switcherIcon;
  };

  // Switcher
  var renderSwitcher = function renderSwitcher() {
    if (memoizedIsLeaf) {
      // if switcherIconDom is null, no render switcher span
      var _switcherIconDom = renderSwitcherIconDom(true);
      return _switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(context.prefixCls, "-switcher"), "".concat(context.prefixCls, "-switcher-noop"))
      }, _switcherIconDom) : null;
    }
    var switcherIconDom = renderSwitcherIconDom(false);
    return switcherIconDom !== false ? /*#__PURE__*/react.createElement("span", {
      onClick: onExpand,
      className: classnames_default()("".concat(context.prefixCls, "-switcher"), "".concat(context.prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE))
    }, switcherIconDom) : null;
  };

  // ====================== Checkbox ======================
  var checkboxNode = react.useMemo(function () {
    if (!isCheckable) {
      return null;
    }

    // [Legacy] Custom element should be separate with `checkable` in future
    var $custom = typeof isCheckable !== 'boolean' ? isCheckable : null;
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(context.prefixCls, "-checkbox"), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(context.prefixCls, "-checkbox-checked"), checked), "".concat(context.prefixCls, "-checkbox-indeterminate"), !checked && halfChecked), "".concat(context.prefixCls, "-checkbox-disabled"), isDisabled || props.disableCheckbox)),
      onClick: onCheck,
      role: "checkbox",
      "aria-checked": halfChecked ? 'mixed' : checked,
      "aria-disabled": isDisabled || props.disableCheckbox,
      "aria-label": "Select ".concat(typeof props.title === 'string' ? props.title : 'tree node')
    }, $custom);
  }, [isCheckable, checked, halfChecked, isDisabled, props.disableCheckbox, props.title]);

  // ============== State: Node State (Open/Close) ==============
  var nodeState = react.useMemo(function () {
    if (memoizedIsLeaf) {
      return null;
    }
    return expanded ? ICON_OPEN : ICON_CLOSE;
  }, [memoizedIsLeaf, expanded]);

  // ==================== Render: Title + Icon ====================
  var iconNode = react.useMemo(function () {
    return /*#__PURE__*/react.createElement("span", {
      className: classnames_default()("".concat(context.prefixCls, "-iconEle"), "".concat(context.prefixCls, "-icon__").concat(nodeState || 'docu'), (0,defineProperty/* default */.Z)({}, "".concat(context.prefixCls, "-icon_loading"), loading))
    });
  }, [context.prefixCls, nodeState, loading]);

  // =================== Drop Indicator ===================
  var dropIndicatorNode = react.useMemo(function () {
    var rootDraggable = Boolean(context.draggable);
    // allowDrop is calculated in Tree.tsx, there is no need for calc it here
    var showIndicator = !props.disabled && rootDraggable && context.dragOverNodeKey === eventKey;
    if (!showIndicator) {
      return null;
    }
    return context.dropIndicatorRender({
      dropPosition: context.dropPosition,
      dropLevelOffset: context.dropLevelOffset,
      indent: context.indent,
      prefixCls: context.prefixCls,
      direction: context.direction
    });
  }, [context.dropPosition, context.dropLevelOffset, context.indent, context.prefixCls, context.direction, context.draggable, context.dragOverNodeKey, context.dropIndicatorRender]);

  // Icon + Title
  var selectorNode = react.useMemo(function () {
    var _props$title = props.title,
      title = _props$title === void 0 ? defaultTitle : _props$title;
    var wrapClass = "".concat(context.prefixCls, "-node-content-wrapper");

    // Icon - Still show loading icon when loading without showIcon
    var $icon;
    if (context.showIcon) {
      var currentIcon = props.icon || context.icon;
      $icon = currentIcon ? /*#__PURE__*/react.createElement("span", {
        className: classnames_default()("".concat(context.prefixCls, "-iconEle"), "".concat(context.prefixCls, "-icon__customize"))
      }, typeof currentIcon === 'function' ? currentIcon(props) : currentIcon) : iconNode;
    } else if (context.loadData && loading) {
      $icon = iconNode;
    }

    // Title
    var titleNode;
    if (typeof title === 'function') {
      titleNode = title(data);
    } else if (context.titleRender) {
      titleNode = context.titleRender(data);
    } else {
      titleNode = title;
    }
    return /*#__PURE__*/react.createElement("span", {
      ref: selectHandleRef,
      title: typeof title === 'string' ? title : '',
      className: classnames_default()(wrapClass, "".concat(wrapClass, "-").concat(nodeState || 'normal'), (0,defineProperty/* default */.Z)({}, "".concat(context.prefixCls, "-node-selected"), !isDisabled && (selected || dragNodeHighlight))),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onContextMenu: onContextMenu,
      onClick: onSelectorClick,
      onDoubleClick: onSelectorDoubleClick
    }, $icon, /*#__PURE__*/react.createElement("span", {
      className: "".concat(context.prefixCls, "-title")
    }, titleNode), dropIndicatorNode);
  }, [context.prefixCls, context.showIcon, props, context.icon, iconNode, context.titleRender, data, nodeState, onMouseEnter, onMouseLeave, onContextMenu, onSelectorClick, onSelectorDoubleClick]);
  var dataOrAriaAttributeProps = (0,pickAttrs/* default */.Z)(otherProps, {
    aria: true,
    data: true
  });
  var _ref2 = (0,keyUtil/* default */.Z)(context.keyEntities, eventKey) || {},
    level = _ref2.level;
  var isEndNode = isEnd[isEnd.length - 1];
  var draggableWithoutDisabled = !isDisabled && isDraggable;
  var dragging = context.draggingNodeKey === eventKey;
  var ariaSelected = selectable !== undefined ? {
    'aria-selected': !!selectable
  } : undefined;
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    ref: domRef,
    role: "treeitem",
    "aria-expanded": isLeaf ? undefined : expanded,
    className: classnames_default()(className, "".concat(context.prefixCls, "-treenode"), (_classNames4 = {}, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)(_classNames4, "".concat(context.prefixCls, "-treenode-disabled"), isDisabled), "".concat(context.prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), "".concat(context.prefixCls, "-treenode-checkbox-checked"), checked), "".concat(context.prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), "".concat(context.prefixCls, "-treenode-selected"), selected), "".concat(context.prefixCls, "-treenode-loading"), loading), "".concat(context.prefixCls, "-treenode-active"), active), "".concat(context.prefixCls, "-treenode-leaf-last"), isEndNode), "".concat(context.prefixCls, "-treenode-draggable"), isDraggable), "dragging", dragging), (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)(_classNames4, 'drop-target', context.dropTargetKey === eventKey), 'drop-container', context.dropContainerKey === eventKey), 'drag-over', !isDisabled && dragOver), 'drag-over-gap-top', !isDisabled && dragOverGapTop), 'drag-over-gap-bottom', !isDisabled && dragOverGapBottom), 'filter-node', (_context$filterTreeNo = context.filterTreeNode) === null || _context$filterTreeNo === void 0 ? void 0 : _context$filterTreeNo.call(context, (0,treeUtil/* convertNodePropsToEventData */.F)(props))), "".concat(context.prefixCls, "-treenode-leaf"), memoizedIsLeaf))),
    style: style
    // Draggable config
    ,
    draggable: draggableWithoutDisabled,
    onDragStart: draggableWithoutDisabled ? onDragStart : undefined
    // Drop config
    ,
    onDragEnter: isDraggable ? onDragEnter : undefined,
    onDragOver: isDraggable ? onDragOver : undefined,
    onDragLeave: isDraggable ? onDragLeave : undefined,
    onDrop: isDraggable ? onDrop : undefined,
    onDragEnd: isDraggable ? onDragEnd : undefined,
    onMouseMove: onMouseMove
  }, ariaSelected, dataOrAriaAttributeProps), /*#__PURE__*/react.createElement(es_Indent, {
    prefixCls: context.prefixCls,
    level: level,
    isStart: isStart,
    isEnd: isEnd
  }), dragHandlerNode, renderSwitcher(), checkboxNode, selectorNode);
};
TreeNode.isTreeNode = 1;
if (false) {}
/* harmony default export */ var es_TreeNode = (TreeNode);

/***/ }),

/***/ 27822:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: function() { return /* binding */ TreeContext; },
/* harmony export */   y: function() { return /* binding */ UnstableContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */

var TreeContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

/** Internal usage, safe to remove. Do not use in prod */
var UnstableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ 70593:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OF: function() { return /* reexport */ TreeNode/* default */.Z; },
  y6: function() { return /* reexport */ contextTypes/* UnstableContext */.y; },
  ZP: function() { return /* binding */ rc_tree_es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(97326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(60136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper = __webpack_require__(29388);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/KeyCode.js
var KeyCode = __webpack_require__(15105);
// EXTERNAL MODULE: ./node_modules/rc-util/es/pickAttrs.js
var pickAttrs = __webpack_require__(64217);
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(80334);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/contextTypes.js
var contextTypes = __webpack_require__(27822);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/DropIndicator.js

var DropIndicator = function DropIndicator(props) {
  var dropPosition = props.dropPosition,
    dropLevelOffset = props.dropLevelOffset,
    indent = props.indent;
  var style = {
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    backgroundColor: 'red',
    height: 2
  };
  switch (dropPosition) {
    case -1:
      style.top = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 1:
      style.bottom = 0;
      style.left = -dropLevelOffset * indent;
      break;
    case 0:
      style.bottom = 0;
      style.left = indent;
      break;
  }
  return /*#__PURE__*/react.createElement("div", {
    style: style
  });
};
if (false) {}
/* harmony default export */ var es_DropIndicator = (DropIndicator);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/rc-virtual-list/es/index.js + 17 modules
var es = __webpack_require__(87718);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 13 modules
var rc_motion_es = __webpack_require__(29372);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/TreeNode.js + 1 modules
var TreeNode = __webpack_require__(86128);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/useUnmount.js




/**
 * Trigger only when component unmount
 */
function useUnmount(triggerStart, triggerEnd) {
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    firstMount = _React$useState2[0],
    setFirstMount = _React$useState2[1];
  (0,useLayoutEffect/* default */.Z)(function () {
    if (firstMount) {
      triggerStart();
      return function () {
        triggerEnd();
      };
    }
  }, [firstMount]);
  (0,useLayoutEffect/* default */.Z)(function () {
    setFirstMount(true);
    return function () {
      setFirstMount(false);
    };
  }, []);
}
/* harmony default export */ var es_useUnmount = (useUnmount);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/utils/treeUtil.js
var treeUtil = __webpack_require__(1089);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/MotionTreeNode.js




var _excluded = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"];








var MotionTreeNode = /*#__PURE__*/react.forwardRef(function (oriProps, ref) {
  var className = oriProps.className,
    style = oriProps.style,
    motion = oriProps.motion,
    motionNodes = oriProps.motionNodes,
    motionType = oriProps.motionType,
    onOriginMotionStart = oriProps.onMotionStart,
    onOriginMotionEnd = oriProps.onMotionEnd,
    active = oriProps.active,
    treeNodeRequiredProps = oriProps.treeNodeRequiredProps,
    props = (0,objectWithoutProperties/* default */.Z)(oriProps, _excluded);
  var _React$useState = react.useState(true),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    visible = _React$useState2[0],
    setVisible = _React$useState2[1];
  var _React$useContext = react.useContext(contextTypes/* TreeContext */.k),
    prefixCls = _React$useContext.prefixCls;

  // Calculate target visible here.
  // And apply in effect to make `leave` motion work.
  var targetVisible = motionNodes && motionType !== 'hide';
  (0,useLayoutEffect/* default */.Z)(function () {
    if (motionNodes) {
      if (targetVisible !== visible) {
        setVisible(targetVisible);
      }
    }
  }, [motionNodes]);
  var triggerMotionStart = function triggerMotionStart() {
    if (motionNodes) {
      onOriginMotionStart();
    }
  };

  // Should only trigger once
  var triggerMotionEndRef = react.useRef(false);
  var triggerMotionEnd = function triggerMotionEnd() {
    if (motionNodes && !triggerMotionEndRef.current) {
      triggerMotionEndRef.current = true;
      onOriginMotionEnd();
    }
  };

  // Effect if unmount
  es_useUnmount(triggerMotionStart, triggerMotionEnd);

  // Motion end event
  var onVisibleChanged = function onVisibleChanged(nextVisible) {
    if (targetVisible === nextVisible) {
      triggerMotionEnd();
    }
  };
  if (motionNodes) {
    return /*#__PURE__*/react.createElement(rc_motion_es/* default */.ZP, (0,esm_extends/* default */.Z)({
      ref: ref,
      visible: visible
    }, motion, {
      motionAppear: motionType === 'show',
      onVisibleChanged: onVisibleChanged
    }), function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      return /*#__PURE__*/react.createElement("div", {
        ref: motionRef,
        className: classnames_default()("".concat(prefixCls, "-treenode-motion"), motionClassName),
        style: motionStyle
      }, motionNodes.map(function (treeNode) {
        var restProps = Object.assign({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)),
          title = treeNode.title,
          key = treeNode.key,
          isStart = treeNode.isStart,
          isEnd = treeNode.isEnd;
        delete restProps.children;
        var treeNodeProps = (0,treeUtil/* getTreeNodeProps */.H8)(key, treeNodeRequiredProps);
        return /*#__PURE__*/react.createElement(TreeNode/* default */.Z, (0,esm_extends/* default */.Z)({}, restProps, treeNodeProps, {
          title: title,
          active: active,
          data: treeNode.data,
          key: key,
          isStart: isStart,
          isEnd: isEnd
        }));
      }));
    });
  }
  return /*#__PURE__*/react.createElement(TreeNode/* default */.Z, (0,esm_extends/* default */.Z)({
    domRef: ref,
    className: className,
    style: style
  }, props, {
    active: active
  }));
});
if (false) {}
/* harmony default export */ var es_MotionTreeNode = (MotionTreeNode);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/utils/diffUtil.js
function findExpandedKeys() {
  var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var prevLen = prev.length;
  var nextLen = next.length;
  if (Math.abs(prevLen - nextLen) !== 1) {
    return {
      add: false,
      key: null
    };
  }
  function find(shorter, longer) {
    var cache = new Map();
    shorter.forEach(function (key) {
      cache.set(key, true);
    });
    var keys = longer.filter(function (key) {
      return !cache.has(key);
    });
    return keys.length === 1 ? keys[0] : null;
  }
  if (prevLen < nextLen) {
    return {
      add: true,
      key: find(prev, next)
    };
  }
  return {
    add: false,
    key: find(next, prev)
  };
}
function getExpandRange(shorter, longer, key) {
  var shorterStartIndex = shorter.findIndex(function (data) {
    return data.key === key;
  });
  var shorterEndNode = shorter[shorterStartIndex + 1];
  var longerStartIndex = longer.findIndex(function (data) {
    return data.key === key;
  });
  if (shorterEndNode) {
    var longerEndIndex = longer.findIndex(function (data) {
      return data.key === shorterEndNode.key;
    });
    return longer.slice(longerStartIndex + 1, longerEndIndex);
  }
  return longer.slice(longerStartIndex + 1);
}
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/NodeList.js




var NodeList_excluded = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "scrollWidth", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"];
/**
 * Handle virtual list of the TreeNodes.
 */







var HIDDEN_STYLE = {
  width: 0,
  height: 0,
  display: 'flex',
  overflow: 'hidden',
  opacity: 0,
  border: 0,
  padding: 0,
  margin: 0
};
var noop = function noop() {};
var MOTION_KEY = "RC_TREE_MOTION_".concat(Math.random());
var MotionNode = {
  key: MOTION_KEY
};
var MotionEntity = {
  key: MOTION_KEY,
  level: 0,
  index: 0,
  pos: '0',
  node: MotionNode,
  nodes: [MotionNode]
};
var MotionFlattenData = {
  parent: null,
  children: [],
  pos: MotionEntity.pos,
  data: MotionNode,
  title: null,
  key: MOTION_KEY,
  /** Hold empty list here since we do not use it */
  isStart: [],
  isEnd: []
};
/**
 * We only need get visible content items to play the animation.
 */
function getMinimumRangeTransitionRange(list, virtual, height, itemHeight) {
  if (virtual === false || !height) {
    return list;
  }
  return list.slice(0, Math.ceil(height / itemHeight) + 1);
}
function itemKey(item) {
  var key = item.key,
    pos = item.pos;
  return (0,treeUtil/* getKey */.km)(key, pos);
}
function getAccessibilityPath(item) {
  var path = String(item.data.key);
  var current = item;
  while (current.parent) {
    current = current.parent;
    path = "".concat(current.data.key, " > ").concat(path);
  }
  return path;
}
var NodeList = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    data = props.data,
    selectable = props.selectable,
    checkable = props.checkable,
    expandedKeys = props.expandedKeys,
    selectedKeys = props.selectedKeys,
    checkedKeys = props.checkedKeys,
    loadedKeys = props.loadedKeys,
    loadingKeys = props.loadingKeys,
    halfCheckedKeys = props.halfCheckedKeys,
    keyEntities = props.keyEntities,
    disabled = props.disabled,
    dragging = props.dragging,
    dragOverNodeKey = props.dragOverNodeKey,
    dropPosition = props.dropPosition,
    motion = props.motion,
    height = props.height,
    itemHeight = props.itemHeight,
    virtual = props.virtual,
    scrollWidth = props.scrollWidth,
    focusable = props.focusable,
    activeItem = props.activeItem,
    focused = props.focused,
    tabIndex = props.tabIndex,
    onKeyDown = props.onKeyDown,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onActiveChange = props.onActiveChange,
    onListChangeStart = props.onListChangeStart,
    onListChangeEnd = props.onListChangeEnd,
    domProps = (0,objectWithoutProperties/* default */.Z)(props, NodeList_excluded);

  // =============================== Ref ================================
  var listRef = react.useRef(null);
  var indentMeasurerRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return {
      scrollTo: function scrollTo(scroll) {
        listRef.current.scrollTo(scroll);
      },
      getIndentWidth: function getIndentWidth() {
        return indentMeasurerRef.current.offsetWidth;
      }
    };
  });

  // ============================== Motion ==============================
  var _React$useState = react.useState(expandedKeys),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    prevExpandedKeys = _React$useState2[0],
    setPrevExpandedKeys = _React$useState2[1];
  var _React$useState3 = react.useState(data),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    prevData = _React$useState4[0],
    setPrevData = _React$useState4[1];
  var _React$useState5 = react.useState(data),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    transitionData = _React$useState6[0],
    setTransitionData = _React$useState6[1];
  var _React$useState7 = react.useState([]),
    _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
    transitionRange = _React$useState8[0],
    setTransitionRange = _React$useState8[1];
  var _React$useState9 = react.useState(null),
    _React$useState10 = (0,slicedToArray/* default */.Z)(_React$useState9, 2),
    motionType = _React$useState10[0],
    setMotionType = _React$useState10[1];

  // When motion end but data change, this will makes data back to previous one
  var dataRef = react.useRef(data);
  dataRef.current = data;
  function onMotionEnd() {
    var latestData = dataRef.current;
    setPrevData(latestData);
    setTransitionData(latestData);
    setTransitionRange([]);
    setMotionType(null);
    onListChangeEnd();
  }

  // Do animation if expanded keys changed
  // layoutEffect here to avoid blink of node removing
  (0,useLayoutEffect/* default */.Z)(function () {
    setPrevExpandedKeys(expandedKeys);
    var diffExpanded = findExpandedKeys(prevExpandedKeys, expandedKeys);
    if (diffExpanded.key !== null) {
      if (diffExpanded.add) {
        var keyIndex = prevData.findIndex(function (_ref) {
          var key = _ref.key;
          return key === diffExpanded.key;
        });
        var rangeNodes = getMinimumRangeTransitionRange(getExpandRange(prevData, data, diffExpanded.key), virtual, height, itemHeight);
        var newTransitionData = prevData.slice();
        newTransitionData.splice(keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(newTransitionData);
        setTransitionRange(rangeNodes);
        setMotionType('show');
      } else {
        var _keyIndex = data.findIndex(function (_ref2) {
          var key = _ref2.key;
          return key === diffExpanded.key;
        });
        var _rangeNodes = getMinimumRangeTransitionRange(getExpandRange(data, prevData, diffExpanded.key), virtual, height, itemHeight);
        var _newTransitionData = data.slice();
        _newTransitionData.splice(_keyIndex + 1, 0, MotionFlattenData);
        setTransitionData(_newTransitionData);
        setTransitionRange(_rangeNodes);
        setMotionType('hide');
      }
    } else if (prevData !== data) {
      // If whole data changed, we just refresh the list
      setPrevData(data);
      setTransitionData(data);
    }
  }, [expandedKeys, data]);

  // We should clean up motion if is changed by dragging
  react.useEffect(function () {
    if (!dragging) {
      onMotionEnd();
    }
  }, [dragging]);
  var mergedData = motion ? transitionData : data;
  var treeNodeRequiredProps = {
    expandedKeys: expandedKeys,
    selectedKeys: selectedKeys,
    loadedKeys: loadedKeys,
    loadingKeys: loadingKeys,
    checkedKeys: checkedKeys,
    halfCheckedKeys: halfCheckedKeys,
    dragOverNodeKey: dragOverNodeKey,
    dropPosition: dropPosition,
    keyEntities: keyEntities
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, focused && activeItem && /*#__PURE__*/react.createElement("span", {
    style: HIDDEN_STYLE,
    "aria-live": "assertive"
  }, getAccessibilityPath(activeItem)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    style: HIDDEN_STYLE,
    disabled: focusable === false || disabled,
    tabIndex: focusable !== false ? tabIndex : null,
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onBlur: onBlur,
    value: "",
    onChange: noop,
    "aria-label": "for screen reader"
  })), /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-treenode"),
    "aria-hidden": true,
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      visibility: 'hidden',
      height: 0,
      overflow: 'hidden',
      border: 0,
      padding: 0
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-indent")
  }, /*#__PURE__*/react.createElement("div", {
    ref: indentMeasurerRef,
    className: "".concat(prefixCls, "-indent-unit")
  }))), /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({}, domProps, {
    data: mergedData,
    itemKey: itemKey,
    height: height,
    fullHeight: false,
    virtual: virtual,
    itemHeight: itemHeight,
    scrollWidth: scrollWidth,
    prefixCls: "".concat(prefixCls, "-list"),
    ref: listRef,
    role: "tree",
    onVisibleChange: function onVisibleChange(originList) {
      // The best match is using `fullList` - `originList` = `restList`
      // and check the `restList` to see if has the MOTION_KEY node
      // but this will cause performance issue for long list compare
      // we just check `originList` and repeat trigger `onMotionEnd`
      if (originList.every(function (item) {
        return itemKey(item) !== MOTION_KEY;
      })) {
        onMotionEnd();
      }
    }
  }), function (treeNode) {
    var pos = treeNode.pos,
      restProps = Object.assign({}, (_objectDestructuringEmpty(treeNode.data), treeNode.data)),
      title = treeNode.title,
      key = treeNode.key,
      isStart = treeNode.isStart,
      isEnd = treeNode.isEnd;
    var mergedKey = (0,treeUtil/* getKey */.km)(key, pos);
    delete restProps.key;
    delete restProps.children;
    var treeNodeProps = (0,treeUtil/* getTreeNodeProps */.H8)(mergedKey, treeNodeRequiredProps);
    return /*#__PURE__*/react.createElement(es_MotionTreeNode, (0,esm_extends/* default */.Z)({}, restProps, treeNodeProps, {
      title: title,
      active: !!activeItem && key === activeItem.key,
      pos: pos,
      data: treeNode.data,
      isStart: isStart,
      isEnd: isEnd,
      motion: motion,
      motionNodes: key === MOTION_KEY ? transitionRange : null,
      motionType: motionType,
      onMotionStart: onListChangeStart,
      onMotionEnd: onMotionEnd,
      treeNodeRequiredProps: treeNodeRequiredProps,
      onMouseMove: function onMouseMove() {
        onActiveChange(null);
      }
    }));
  }));
});
if (false) {}
/* harmony default export */ var es_NodeList = (NodeList);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/util.js
var util = __webpack_require__(10225);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/utils/conductUtil.js
var conductUtil = __webpack_require__(17341);
// EXTERNAL MODULE: ./node_modules/rc-tree/es/utils/keyUtil.js
var keyUtil = __webpack_require__(35381);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/Tree.js










// TODO: https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/treeview/treeview-2/treeview-2a.html
// Fully accessibility support














var MAX_RETRY_TIMES = 10;
var Tree = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Tree, _React$Component);
  var _super = (0,createSuper/* default */.Z)(Tree);
  function Tree() {
    var _this;
    (0,classCallCheck/* default */.Z)(this, Tree);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "destroyed", false);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "delayedDragEnterLogic", void 0);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "loadingRetryTimes", {});
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "state", {
      keyEntities: {},
      indent: null,
      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],
      expandedKeys: [],
      draggingNodeKey: null,
      dragChildrenKeys: [],
      // dropTargetKey is the key of abstract-drop-node
      // the abstract-drop-node is the real drop node when drag and drop
      // not the DOM drag over node
      dropTargetKey: null,
      dropPosition: null,
      // the drop position of abstract-drop-node, inside 0, top -1, bottom 1
      dropContainerKey: null,
      // the container key of abstract-drop-node if dropPosition is -1 or 1
      dropLevelOffset: null,
      // the drop level offset of abstract-drag-over-node
      dropTargetPos: null,
      // the pos of abstract-drop-node
      dropAllowed: true,
      // if drop to abstract-drop-node is allowed
      // the abstract-drag-over-node
      // if mouse is on the bottom of top dom node or no the top of the bottom dom node
      // abstract-drag-over-node is the top node
      dragOverNodeKey: null,
      treeData: [],
      flattenNodes: [],
      focused: false,
      activeKey: null,
      listChanging: false,
      prevProps: null,
      fieldNames: (0,treeUtil/* fillFieldNames */.w$)()
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "dragStartMousePosition", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "dragNodeProps", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "currentMouseOverDroppableNodeKey", null);
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "listRef", /*#__PURE__*/react.createRef());
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeDragStart", function (event, nodeProps) {
      var _this$state = _this.state,
        expandedKeys = _this$state.expandedKeys,
        keyEntities = _this$state.keyEntities;
      var onDragStart = _this.props.onDragStart;
      var eventKey = nodeProps.eventKey;
      _this.dragNodeProps = nodeProps;
      _this.dragStartMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      var newExpandedKeys = (0,util/* arrDel */._5)(expandedKeys, eventKey);
      _this.setState({
        draggingNodeKey: eventKey,
        dragChildrenKeys: (0,util/* getDragChildrenKeys */.wA)(eventKey, keyEntities),
        indent: _this.listRef.current.getIndentWidth()
      });
      _this.setExpandedKeys(newExpandedKeys);
      window.addEventListener('dragend', _this.onWindowDragEnd);
      onDragStart === null || onDragStart === void 0 || onDragStart({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(nodeProps)
      });
    });
    /**
     * [Legacy] Select handler is smaller than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeDragEnter", function (event, nodeProps) {
      var _this$state2 = _this.state,
        expandedKeys = _this$state2.expandedKeys,
        keyEntities = _this$state2.keyEntities,
        dragChildrenKeys = _this$state2.dragChildrenKeys,
        flattenNodes = _this$state2.flattenNodes,
        indent = _this$state2.indent;
      var _this$props = _this.props,
        onDragEnter = _this$props.onDragEnter,
        onExpand = _this$props.onExpand,
        allowDrop = _this$props.allowDrop,
        direction = _this$props.direction;
      var pos = nodeProps.pos,
        eventKey = nodeProps.eventKey;

      // record the key of node which is latest entered, used in dragleave event.
      if (_this.currentMouseOverDroppableNodeKey !== eventKey) {
        _this.currentMouseOverDroppableNodeKey = eventKey;
      }
      if (!_this.dragNodeProps) {
        _this.resetDragState();
        return;
      }
      var _calcDropPosition = (0,util/* calcDropPosition */.OM)(event, _this.dragNodeProps, nodeProps, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction),
        dropPosition = _calcDropPosition.dropPosition,
        dropLevelOffset = _calcDropPosition.dropLevelOffset,
        dropTargetKey = _calcDropPosition.dropTargetKey,
        dropContainerKey = _calcDropPosition.dropContainerKey,
        dropTargetPos = _calcDropPosition.dropTargetPos,
        dropAllowed = _calcDropPosition.dropAllowed,
        dragOverNodeKey = _calcDropPosition.dragOverNodeKey;
      if (
      // don't allow drop inside its children
      dragChildrenKeys.includes(dropTargetKey) ||
      // don't allow drop when drop is not allowed caculated by calcDropPosition
      !dropAllowed) {
        _this.resetDragState();
        return;
      }

      // Side effect for delay drag
      if (!_this.delayedDragEnterLogic) {
        _this.delayedDragEnterLogic = {};
      }
      Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
        clearTimeout(_this.delayedDragEnterLogic[key]);
      });
      if (_this.dragNodeProps.eventKey !== nodeProps.eventKey) {
        // hoist expand logic here
        // since if logic is on the bottom
        // it will be blocked by abstract dragover node check
        //   => if you dragenter from top, you mouse will still be consider as in the top node
        event.persist();
        _this.delayedDragEnterLogic[pos] = window.setTimeout(function () {
          if (_this.state.draggingNodeKey === null) {
            return;
          }
          var newExpandedKeys = (0,toConsumableArray/* default */.Z)(expandedKeys);
          var entity = (0,keyUtil/* default */.Z)(keyEntities, nodeProps.eventKey);
          if (entity && (entity.children || []).length) {
            newExpandedKeys = (0,util/* arrAdd */.L0)(expandedKeys, nodeProps.eventKey);
          }
          if (!_this.props.hasOwnProperty('expandedKeys')) {
            _this.setExpandedKeys(newExpandedKeys);
          }
          onExpand === null || onExpand === void 0 || onExpand(newExpandedKeys, {
            node: (0,treeUtil/* convertNodePropsToEventData */.F)(nodeProps),
            expanded: true,
            nativeEvent: event.nativeEvent
          });
        }, 800);
      }

      // Skip if drag node is self
      if (_this.dragNodeProps.eventKey === dropTargetKey && dropLevelOffset === 0) {
        _this.resetDragState();
        return;
      }

      // Update drag over node and drag state
      _this.setState({
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        dropLevelOffset: dropLevelOffset,
        dropTargetKey: dropTargetKey,
        dropContainerKey: dropContainerKey,
        dropTargetPos: dropTargetPos,
        dropAllowed: dropAllowed
      });
      onDragEnter === null || onDragEnter === void 0 || onDragEnter({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(nodeProps),
        expandedKeys: expandedKeys
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeDragOver", function (event, nodeProps) {
      var _this$state3 = _this.state,
        dragChildrenKeys = _this$state3.dragChildrenKeys,
        flattenNodes = _this$state3.flattenNodes,
        keyEntities = _this$state3.keyEntities,
        expandedKeys = _this$state3.expandedKeys,
        indent = _this$state3.indent;
      var _this$props2 = _this.props,
        onDragOver = _this$props2.onDragOver,
        allowDrop = _this$props2.allowDrop,
        direction = _this$props2.direction;
      if (!_this.dragNodeProps) {
        return;
      }
      var _calcDropPosition2 = (0,util/* calcDropPosition */.OM)(event, _this.dragNodeProps, nodeProps, indent, _this.dragStartMousePosition, allowDrop, flattenNodes, keyEntities, expandedKeys, direction),
        dropPosition = _calcDropPosition2.dropPosition,
        dropLevelOffset = _calcDropPosition2.dropLevelOffset,
        dropTargetKey = _calcDropPosition2.dropTargetKey,
        dropContainerKey = _calcDropPosition2.dropContainerKey,
        dropTargetPos = _calcDropPosition2.dropTargetPos,
        dropAllowed = _calcDropPosition2.dropAllowed,
        dragOverNodeKey = _calcDropPosition2.dragOverNodeKey;
      if (dragChildrenKeys.includes(dropTargetKey) || !dropAllowed) {
        // don't allow drop inside its children
        // don't allow drop when drop is not allowed calculated by calcDropPosition
        return;
      }

      // Update drag position

      if (_this.dragNodeProps.eventKey === dropTargetKey && dropLevelOffset === 0) {
        if (!(_this.state.dropPosition === null && _this.state.dropLevelOffset === null && _this.state.dropTargetKey === null && _this.state.dropContainerKey === null && _this.state.dropTargetPos === null && _this.state.dropAllowed === false && _this.state.dragOverNodeKey === null)) {
          _this.resetDragState();
        }
      } else if (!(dropPosition === _this.state.dropPosition && dropLevelOffset === _this.state.dropLevelOffset && dropTargetKey === _this.state.dropTargetKey && dropContainerKey === _this.state.dropContainerKey && dropTargetPos === _this.state.dropTargetPos && dropAllowed === _this.state.dropAllowed && dragOverNodeKey === _this.state.dragOverNodeKey)) {
        _this.setState({
          dropPosition: dropPosition,
          dropLevelOffset: dropLevelOffset,
          dropTargetKey: dropTargetKey,
          dropContainerKey: dropContainerKey,
          dropTargetPos: dropTargetPos,
          dropAllowed: dropAllowed,
          dragOverNodeKey: dragOverNodeKey
        });
      }
      onDragOver === null || onDragOver === void 0 || onDragOver({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(nodeProps)
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeDragLeave", function (event, nodeProps) {
      // if it is outside the droppable area
      // currentMouseOverDroppableNodeKey will be updated in dragenter event when into another droppable receiver.
      if (_this.currentMouseOverDroppableNodeKey === nodeProps.eventKey && !event.currentTarget.contains(event.relatedTarget)) {
        _this.resetDragState();
        _this.currentMouseOverDroppableNodeKey = null;
      }
      var onDragLeave = _this.props.onDragLeave;
      onDragLeave === null || onDragLeave === void 0 || onDragLeave({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(nodeProps)
      });
    });
    // since stopPropagation() is called in treeNode
    // if onWindowDrag is called, whice means state is keeped, drag state should be cleared
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onWindowDragEnd", function (event) {
      _this.onNodeDragEnd(event, null, true);
      window.removeEventListener('dragend', _this.onWindowDragEnd);
    });
    // if onNodeDragEnd is called, onWindowDragEnd won't be called since stopPropagation() is called
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeDragEnd", function (event, nodeProps) {
      var onDragEnd = _this.props.onDragEnd;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      onDragEnd === null || onDragEnd === void 0 || onDragEnd({
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(nodeProps)
      });
      _this.dragNodeProps = null;
      window.removeEventListener('dragend', _this.onWindowDragEnd);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeDrop", function (event, _) {
      var _this$getActiveItem;
      var outsideTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$state4 = _this.state,
        dragChildrenKeys = _this$state4.dragChildrenKeys,
        dropPosition = _this$state4.dropPosition,
        dropTargetKey = _this$state4.dropTargetKey,
        dropTargetPos = _this$state4.dropTargetPos,
        dropAllowed = _this$state4.dropAllowed;
      if (!dropAllowed) {
        return;
      }
      var onDrop = _this.props.onDrop;
      _this.setState({
        dragOverNodeKey: null
      });
      _this.cleanDragState();
      if (dropTargetKey === null) return;
      var abstractDropNodeProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,treeUtil/* getTreeNodeProps */.H8)(dropTargetKey, _this.getTreeNodeRequiredProps())), {}, {
        active: ((_this$getActiveItem = _this.getActiveItem()) === null || _this$getActiveItem === void 0 ? void 0 : _this$getActiveItem.key) === dropTargetKey,
        data: (0,keyUtil/* default */.Z)(_this.state.keyEntities, dropTargetKey).node
      });
      var dropToChild = dragChildrenKeys.includes(dropTargetKey);
      (0,warning/* default */.ZP)(!dropToChild, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
      var posArr = (0,util/* posToArr */.yx)(dropTargetPos);
      var dropResult = {
        event: event,
        node: (0,treeUtil/* convertNodePropsToEventData */.F)(abstractDropNodeProps),
        dragNode: _this.dragNodeProps ? (0,treeUtil/* convertNodePropsToEventData */.F)(_this.dragNodeProps) : null,
        dragNodesKeys: [_this.dragNodeProps.eventKey].concat(dragChildrenKeys),
        dropToGap: dropPosition !== 0,
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };
      if (!outsideTree) {
        onDrop === null || onDrop === void 0 || onDrop(dropResult);
      }
      _this.dragNodeProps = null;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "cleanDragState", function () {
      var draggingNodeKey = _this.state.draggingNodeKey;
      if (draggingNodeKey !== null) {
        _this.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        });
      }
      _this.dragStartMousePosition = null;
      _this.currentMouseOverDroppableNodeKey = null;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "triggerExpandActionExpand", function (e, treeNode) {
      var _this$state5 = _this.state,
        expandedKeys = _this$state5.expandedKeys,
        flattenNodes = _this$state5.flattenNodes;
      var expanded = treeNode.expanded,
        key = treeNode.key,
        isLeaf = treeNode.isLeaf;
      if (isLeaf || e.shiftKey || e.metaKey || e.ctrlKey) {
        return;
      }
      var node = flattenNodes.filter(function (nodeItem) {
        return nodeItem.key === key;
      })[0];
      var eventNode = (0,treeUtil/* convertNodePropsToEventData */.F)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,treeUtil/* getTreeNodeProps */.H8)(key, _this.getTreeNodeRequiredProps())), {}, {
        data: node.data
      }));
      _this.setExpandedKeys(expanded ? (0,util/* arrDel */._5)(expandedKeys, key) : (0,util/* arrAdd */.L0)(expandedKeys, key));
      _this.onNodeExpand(e, eventNode);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeClick", function (e, treeNode) {
      var _this$props3 = _this.props,
        onClick = _this$props3.onClick,
        expandAction = _this$props3.expandAction;
      if (expandAction === 'click') {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onClick === null || onClick === void 0 || onClick(e, treeNode);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeDoubleClick", function (e, treeNode) {
      var _this$props4 = _this.props,
        onDoubleClick = _this$props4.onDoubleClick,
        expandAction = _this$props4.expandAction;
      if (expandAction === 'doubleClick') {
        _this.triggerExpandActionExpand(e, treeNode);
      }
      onDoubleClick === null || onDoubleClick === void 0 || onDoubleClick(e, treeNode);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeSelect", function (e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var _this$state6 = _this.state,
        keyEntities = _this$state6.keyEntities,
        fieldNames = _this$state6.fieldNames;
      var _this$props5 = _this.props,
        onSelect = _this$props5.onSelect,
        multiple = _this$props5.multiple;
      var selected = treeNode.selected;
      var key = treeNode[fieldNames.key];
      var targetSelected = !selected;

      // Update selected keys
      if (!targetSelected) {
        selectedKeys = (0,util/* arrDel */._5)(selectedKeys, key);
      } else if (!multiple) {
        selectedKeys = [key];
      } else {
        selectedKeys = (0,util/* arrAdd */.L0)(selectedKeys, key);
      }

      // [Legacy] Not found related usage in doc or upper libs
      var selectedNodes = selectedKeys.map(function (selectedKey) {
        var entity = (0,keyUtil/* default */.Z)(keyEntities, selectedKey);
        return entity ? entity.node : null;
      }).filter(Boolean);
      _this.setUncontrolledState({
        selectedKeys: selectedKeys
      });
      onSelect === null || onSelect === void 0 || onSelect(selectedKeys, {
        event: 'select',
        selected: targetSelected,
        node: treeNode,
        selectedNodes: selectedNodes,
        nativeEvent: e.nativeEvent
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeCheck", function (e, treeNode, checked) {
      var _this$state7 = _this.state,
        keyEntities = _this$state7.keyEntities,
        oriCheckedKeys = _this$state7.checkedKeys,
        oriHalfCheckedKeys = _this$state7.halfCheckedKeys;
      var _this$props6 = _this.props,
        checkStrictly = _this$props6.checkStrictly,
        onCheck = _this$props6.onCheck;
      var key = treeNode.key;

      // Prepare trigger arguments
      var checkedObj;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e.nativeEvent
      };
      if (checkStrictly) {
        var checkedKeys = checked ? (0,util/* arrAdd */.L0)(oriCheckedKeys, key) : (0,util/* arrDel */._5)(oriCheckedKeys, key);
        var halfCheckedKeys = (0,util/* arrDel */._5)(oriHalfCheckedKeys, key);
        checkedObj = {
          checked: checkedKeys,
          halfChecked: halfCheckedKeys
        };
        eventObj.checkedNodes = checkedKeys.map(function (checkedKey) {
          return (0,keyUtil/* default */.Z)(keyEntities, checkedKey);
        }).filter(Boolean).map(function (entity) {
          return entity.node;
        });
        _this.setUncontrolledState({
          checkedKeys: checkedKeys
        });
      } else {
        // Always fill first
        var _conductCheck = (0,conductUtil/* conductCheck */.S)([].concat((0,toConsumableArray/* default */.Z)(oriCheckedKeys), [key]), true, keyEntities),
          _checkedKeys = _conductCheck.checkedKeys,
          _halfCheckedKeys = _conductCheck.halfCheckedKeys;

        // If remove, we do it again to correction
        if (!checked) {
          var keySet = new Set(_checkedKeys);
          keySet.delete(key);
          var _conductCheck2 = (0,conductUtil/* conductCheck */.S)(Array.from(keySet), {
            checked: false,
            halfCheckedKeys: _halfCheckedKeys
          }, keyEntities);
          _checkedKeys = _conductCheck2.checkedKeys;
          _halfCheckedKeys = _conductCheck2.halfCheckedKeys;
        }
        checkedObj = _checkedKeys;

        // [Legacy] This is used for `rc-tree-select`
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;
        _checkedKeys.forEach(function (checkedKey) {
          var entity = (0,keyUtil/* default */.Z)(keyEntities, checkedKey);
          if (!entity) return;
          var node = entity.node,
            pos = entity.pos;
          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({
            node: node,
            pos: pos
          });
        });
        _this.setUncontrolledState({
          checkedKeys: _checkedKeys
        }, false, {
          halfCheckedKeys: _halfCheckedKeys
        });
      }
      onCheck === null || onCheck === void 0 || onCheck(checkedObj, eventObj);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeLoad", function (treeNode) {
      var _entity$children;
      var key = treeNode.key;
      var keyEntities = _this.state.keyEntities;

      // Skip if has children already
      var entity = (0,keyUtil/* default */.Z)(keyEntities, key);
      if (entity !== null && entity !== void 0 && (_entity$children = entity.children) !== null && _entity$children !== void 0 && _entity$children.length) {
        return;
      }
      var loadPromise = new Promise(function (resolve, reject) {
        // We need to get the latest state of loading/loaded keys
        _this.setState(function (_ref) {
          var _ref$loadedKeys = _ref.loadedKeys,
            loadedKeys = _ref$loadedKeys === void 0 ? [] : _ref$loadedKeys,
            _ref$loadingKeys = _ref.loadingKeys,
            loadingKeys = _ref$loadingKeys === void 0 ? [] : _ref$loadingKeys;
          var _this$props7 = _this.props,
            loadData = _this$props7.loadData,
            onLoad = _this$props7.onLoad;
          if (!loadData || loadedKeys.includes(key) || loadingKeys.includes(key)) {
            return null;
          }

          // Process load data
          var promise = loadData(treeNode);
          promise.then(function () {
            var currentLoadedKeys = _this.state.loadedKeys;
            var newLoadedKeys = (0,util/* arrAdd */.L0)(currentLoadedKeys, key);

            // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
            // https://github.com/ant-design/ant-design/issues/12464
            onLoad === null || onLoad === void 0 || onLoad(newLoadedKeys, {
              event: 'load',
              node: treeNode
            });
            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });
            _this.setState(function (prevState) {
              return {
                loadingKeys: (0,util/* arrDel */._5)(prevState.loadingKeys, key)
              };
            });
            resolve();
          }).catch(function (e) {
            _this.setState(function (prevState) {
              return {
                loadingKeys: (0,util/* arrDel */._5)(prevState.loadingKeys, key)
              };
            });

            // If exceed max retry times, we give up retry
            _this.loadingRetryTimes[key] = (_this.loadingRetryTimes[key] || 0) + 1;
            if (_this.loadingRetryTimes[key] >= MAX_RETRY_TIMES) {
              var currentLoadedKeys = _this.state.loadedKeys;
              (0,warning/* default */.ZP)(false, 'Retry for `loadData` many times but still failed. No more retry.');
              _this.setUncontrolledState({
                loadedKeys: (0,util/* arrAdd */.L0)(currentLoadedKeys, key)
              });
              resolve();
            }
            reject(e);
          });
          return {
            loadingKeys: (0,util/* arrAdd */.L0)(loadingKeys, key)
          };
        });
      });

      // Not care warning if we ignore this
      loadPromise.catch(function () {});
      return loadPromise;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeMouseEnter", function (event, node) {
      var onMouseEnter = _this.props.onMouseEnter;
      onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter({
        event: event,
        node: node
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeMouseLeave", function (event, node) {
      var onMouseLeave = _this.props.onMouseLeave;
      onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave({
        event: event,
        node: node
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeContextMenu", function (event, node) {
      var onRightClick = _this.props.onRightClick;
      if (onRightClick) {
        event.preventDefault();
        onRightClick({
          event: event,
          node: node
        });
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onFocus", function () {
      var onFocus = _this.props.onFocus;
      _this.setState({
        focused: true
      });
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      onFocus === null || onFocus === void 0 || onFocus.apply(void 0, args);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onBlur", function () {
      var onBlur = _this.props.onBlur;
      _this.setState({
        focused: false
      });
      _this.onActiveChange(null);
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      onBlur === null || onBlur === void 0 || onBlur.apply(void 0, args);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getTreeNodeRequiredProps", function () {
      var _this$state8 = _this.state,
        expandedKeys = _this$state8.expandedKeys,
        selectedKeys = _this$state8.selectedKeys,
        loadedKeys = _this$state8.loadedKeys,
        loadingKeys = _this$state8.loadingKeys,
        checkedKeys = _this$state8.checkedKeys,
        halfCheckedKeys = _this$state8.halfCheckedKeys,
        dragOverNodeKey = _this$state8.dragOverNodeKey,
        dropPosition = _this$state8.dropPosition,
        keyEntities = _this$state8.keyEntities;
      return {
        expandedKeys: expandedKeys || [],
        selectedKeys: selectedKeys || [],
        loadedKeys: loadedKeys || [],
        loadingKeys: loadingKeys || [],
        checkedKeys: checkedKeys || [],
        halfCheckedKeys: halfCheckedKeys || [],
        dragOverNodeKey: dragOverNodeKey,
        dropPosition: dropPosition,
        keyEntities: keyEntities
      };
    });
    // =========================== Expanded ===========================
    /** Set uncontrolled `expandedKeys`. This will also auto update `flattenNodes`. */
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "setExpandedKeys", function (expandedKeys) {
      var _this$state9 = _this.state,
        treeData = _this$state9.treeData,
        fieldNames = _this$state9.fieldNames;
      var flattenNodes = (0,treeUtil/* flattenTreeData */.oH)(treeData, expandedKeys, fieldNames);
      _this.setUncontrolledState({
        expandedKeys: expandedKeys,
        flattenNodes: flattenNodes
      }, true);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onNodeExpand", function (e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$state10 = _this.state,
        listChanging = _this$state10.listChanging,
        fieldNames = _this$state10.fieldNames;
      var _this$props8 = _this.props,
        onExpand = _this$props8.onExpand,
        loadData = _this$props8.loadData;
      var expanded = treeNode.expanded;
      var key = treeNode[fieldNames.key];

      // Do nothing when motion is in progress
      if (listChanging) {
        return;
      }

      // Update selected keys
      var certain = expandedKeys.includes(key);
      var targetExpanded = !expanded;
      (0,warning/* default */.ZP)(expanded && certain || !expanded && !certain, 'Expand state not sync with index check');
      expandedKeys = targetExpanded ? (0,util/* arrAdd */.L0)(expandedKeys, key) : (0,util/* arrDel */._5)(expandedKeys, key);
      _this.setExpandedKeys(expandedKeys);
      onExpand === null || onExpand === void 0 || onExpand(expandedKeys, {
        node: treeNode,
        expanded: targetExpanded,
        nativeEvent: e.nativeEvent
      });

      // Async Load data
      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);
        if (loadPromise) {
          loadPromise.then(function () {
            // [Legacy] Refresh logic
            var newFlattenTreeData = (0,treeUtil/* flattenTreeData */.oH)(_this.state.treeData, expandedKeys, fieldNames);
            _this.setUncontrolledState({
              flattenNodes: newFlattenTreeData
            });
          }).catch(function () {
            var currentExpandedKeys = _this.state.expandedKeys;
            var expandedKeysToRestore = (0,util/* arrDel */._5)(currentExpandedKeys, key);
            _this.setExpandedKeys(expandedKeysToRestore);
          });
        }
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onListChangeStart", function () {
      _this.setUncontrolledState({
        listChanging: true
      });
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onListChangeEnd", function () {
      setTimeout(function () {
        _this.setUncontrolledState({
          listChanging: false
        });
      });
    });
    // =========================== Keyboard ===========================
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onActiveChange", function (newActiveKey) {
      var activeKey = _this.state.activeKey;
      var _this$props9 = _this.props,
        onActiveChange = _this$props9.onActiveChange,
        _this$props9$itemScro = _this$props9.itemScrollOffset,
        itemScrollOffset = _this$props9$itemScro === void 0 ? 0 : _this$props9$itemScro;
      if (activeKey === newActiveKey) {
        return;
      }
      _this.setState({
        activeKey: newActiveKey
      });
      if (newActiveKey !== null) {
        _this.scrollTo({
          key: newActiveKey,
          offset: itemScrollOffset
        });
      }
      onActiveChange === null || onActiveChange === void 0 || onActiveChange(newActiveKey);
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "getActiveItem", function () {
      var _this$state11 = _this.state,
        activeKey = _this$state11.activeKey,
        flattenNodes = _this$state11.flattenNodes;
      if (activeKey === null) {
        return null;
      }
      return flattenNodes.find(function (_ref2) {
        var key = _ref2.key;
        return key === activeKey;
      }) || null;
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "offsetActiveKey", function (offset) {
      var _this$state12 = _this.state,
        flattenNodes = _this$state12.flattenNodes,
        activeKey = _this$state12.activeKey;
      var index = flattenNodes.findIndex(function (_ref3) {
        var key = _ref3.key;
        return key === activeKey;
      });

      // Align with index
      if (index === -1 && offset < 0) {
        index = flattenNodes.length;
      }
      index = (index + offset + flattenNodes.length) % flattenNodes.length;
      var item = flattenNodes[index];
      if (item) {
        var _key4 = item.key;
        _this.onActiveChange(_key4);
      } else {
        _this.onActiveChange(null);
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "onKeyDown", function (event) {
      var _this$state13 = _this.state,
        activeKey = _this$state13.activeKey,
        expandedKeys = _this$state13.expandedKeys,
        checkedKeys = _this$state13.checkedKeys,
        fieldNames = _this$state13.fieldNames;
      var _this$props10 = _this.props,
        onKeyDown = _this$props10.onKeyDown,
        checkable = _this$props10.checkable,
        selectable = _this$props10.selectable;

      // >>>>>>>>>> Direction
      switch (event.which) {
        case KeyCode/* default */.Z.UP:
          {
            _this.offsetActiveKey(-1);
            event.preventDefault();
            break;
          }
        case KeyCode/* default */.Z.DOWN:
          {
            _this.offsetActiveKey(1);
            event.preventDefault();
            break;
          }
      }

      // >>>>>>>>>> Expand & Selection
      var activeItem = _this.getActiveItem();
      if (activeItem && activeItem.data) {
        var treeNodeRequiredProps = _this.getTreeNodeRequiredProps();
        var expandable = activeItem.data.isLeaf === false || !!(activeItem.data[fieldNames.children] || []).length;
        var eventNode = (0,treeUtil/* convertNodePropsToEventData */.F)((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, (0,treeUtil/* getTreeNodeProps */.H8)(activeKey, treeNodeRequiredProps)), {}, {
          data: activeItem.data,
          active: true
        }));
        switch (event.which) {
          // >>> Expand
          case KeyCode/* default */.Z.LEFT:
            {
              // Collapse if possible
              if (expandable && expandedKeys.includes(activeKey)) {
                _this.onNodeExpand({}, eventNode);
              } else if (activeItem.parent) {
                _this.onActiveChange(activeItem.parent.key);
              }
              event.preventDefault();
              break;
            }
          case KeyCode/* default */.Z.RIGHT:
            {
              // Expand if possible
              if (expandable && !expandedKeys.includes(activeKey)) {
                _this.onNodeExpand({}, eventNode);
              } else if (activeItem.children && activeItem.children.length) {
                _this.onActiveChange(activeItem.children[0].key);
              }
              event.preventDefault();
              break;
            }

          // Selection
          case KeyCode/* default */.Z.ENTER:
          case KeyCode/* default */.Z.SPACE:
            {
              if (checkable && !eventNode.disabled && eventNode.checkable !== false && !eventNode.disableCheckbox) {
                _this.onNodeCheck({}, eventNode, !checkedKeys.includes(activeKey));
              } else if (!checkable && selectable && !eventNode.disabled && eventNode.selectable !== false) {
                _this.onNodeSelect({}, eventNode);
              }
              break;
            }
        }
      }
      onKeyDown === null || onKeyDown === void 0 || onKeyDown(event);
    });
    /**
     * Only update the value which is not in props
     */
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "setUncontrolledState", function (state) {
      var atomic = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var forceState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (!_this.destroyed) {
        var needSync = false;
        var allPassed = true;
        var newState = {};
        Object.keys(state).forEach(function (name) {
          if (_this.props.hasOwnProperty(name)) {
            allPassed = false;
            return;
          }
          needSync = true;
          newState[name] = state[name];
        });
        if (needSync && (!atomic || allPassed)) {
          _this.setState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, newState), forceState));
        }
      }
    });
    (0,defineProperty/* default */.Z)((0,assertThisInitialized/* default */.Z)(_this), "scrollTo", function (scroll) {
      _this.listRef.current.scrollTo(scroll);
    });
    return _this;
  }
  (0,createClass/* default */.Z)(Tree, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      this.onUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onUpdated();
    }
  }, {
    key: "onUpdated",
    value: function onUpdated() {
      var _this$props11 = this.props,
        activeKey = _this$props11.activeKey,
        _this$props11$itemScr = _this$props11.itemScrollOffset,
        itemScrollOffset = _this$props11$itemScr === void 0 ? 0 : _this$props11$itemScr;
      if (activeKey !== undefined && activeKey !== this.state.activeKey) {
        this.setState({
          activeKey: activeKey
        });
        if (activeKey !== null) {
          this.scrollTo({
            key: activeKey,
            offset: itemScrollOffset
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('dragend', this.onWindowDragEnd);
      this.destroyed = true;
    }
  }, {
    key: "resetDragState",
    value: function resetDragState() {
      this.setState({
        dragOverNodeKey: null,
        dropPosition: null,
        dropLevelOffset: null,
        dropTargetKey: null,
        dropContainerKey: null,
        dropTargetPos: null,
        dropAllowed: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state14 = this.state,
        focused = _this$state14.focused,
        flattenNodes = _this$state14.flattenNodes,
        keyEntities = _this$state14.keyEntities,
        draggingNodeKey = _this$state14.draggingNodeKey,
        activeKey = _this$state14.activeKey,
        dropLevelOffset = _this$state14.dropLevelOffset,
        dropContainerKey = _this$state14.dropContainerKey,
        dropTargetKey = _this$state14.dropTargetKey,
        dropPosition = _this$state14.dropPosition,
        dragOverNodeKey = _this$state14.dragOverNodeKey,
        indent = _this$state14.indent;
      var _this$props12 = this.props,
        prefixCls = _this$props12.prefixCls,
        className = _this$props12.className,
        style = _this$props12.style,
        showLine = _this$props12.showLine,
        focusable = _this$props12.focusable,
        _this$props12$tabInde = _this$props12.tabIndex,
        tabIndex = _this$props12$tabInde === void 0 ? 0 : _this$props12$tabInde,
        selectable = _this$props12.selectable,
        showIcon = _this$props12.showIcon,
        icon = _this$props12.icon,
        switcherIcon = _this$props12.switcherIcon,
        draggable = _this$props12.draggable,
        checkable = _this$props12.checkable,
        checkStrictly = _this$props12.checkStrictly,
        disabled = _this$props12.disabled,
        motion = _this$props12.motion,
        loadData = _this$props12.loadData,
        filterTreeNode = _this$props12.filterTreeNode,
        height = _this$props12.height,
        itemHeight = _this$props12.itemHeight,
        scrollWidth = _this$props12.scrollWidth,
        virtual = _this$props12.virtual,
        titleRender = _this$props12.titleRender,
        dropIndicatorRender = _this$props12.dropIndicatorRender,
        onContextMenu = _this$props12.onContextMenu,
        onScroll = _this$props12.onScroll,
        direction = _this$props12.direction,
        rootClassName = _this$props12.rootClassName,
        rootStyle = _this$props12.rootStyle;
      var domProps = (0,pickAttrs/* default */.Z)(this.props, {
        aria: true,
        data: true
      });

      // It's better move to hooks but we just simply keep here
      var draggableConfig;
      if (draggable) {
        if ((0,esm_typeof/* default */.Z)(draggable) === 'object') {
          draggableConfig = draggable;
        } else if (typeof draggable === 'function') {
          draggableConfig = {
            nodeDraggable: draggable
          };
        } else {
          draggableConfig = {};
        }
      }
      var contextValue = {
        prefixCls: prefixCls,
        selectable: selectable,
        showIcon: showIcon,
        icon: icon,
        switcherIcon: switcherIcon,
        draggable: draggableConfig,
        draggingNodeKey: draggingNodeKey,
        checkable: checkable,
        checkStrictly: checkStrictly,
        disabled: disabled,
        keyEntities: keyEntities,
        dropLevelOffset: dropLevelOffset,
        dropContainerKey: dropContainerKey,
        dropTargetKey: dropTargetKey,
        dropPosition: dropPosition,
        dragOverNodeKey: dragOverNodeKey,
        indent: indent,
        direction: direction,
        dropIndicatorRender: dropIndicatorRender,
        loadData: loadData,
        filterTreeNode: filterTreeNode,
        titleRender: titleRender,
        onNodeClick: this.onNodeClick,
        onNodeDoubleClick: this.onNodeDoubleClick,
        onNodeExpand: this.onNodeExpand,
        onNodeSelect: this.onNodeSelect,
        onNodeCheck: this.onNodeCheck,
        onNodeLoad: this.onNodeLoad,
        onNodeMouseEnter: this.onNodeMouseEnter,
        onNodeMouseLeave: this.onNodeMouseLeave,
        onNodeContextMenu: this.onNodeContextMenu,
        onNodeDragStart: this.onNodeDragStart,
        onNodeDragEnter: this.onNodeDragEnter,
        onNodeDragOver: this.onNodeDragOver,
        onNodeDragLeave: this.onNodeDragLeave,
        onNodeDragEnd: this.onNodeDragEnd,
        onNodeDrop: this.onNodeDrop
      };
      return /*#__PURE__*/react.createElement(contextTypes/* TreeContext */.k.Provider, {
        value: contextValue
      }, /*#__PURE__*/react.createElement("div", {
        className: classnames_default()(prefixCls, className, rootClassName, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-show-line"), showLine), "".concat(prefixCls, "-focused"), focused), "".concat(prefixCls, "-active-focused"), activeKey !== null)),
        style: rootStyle
      }, /*#__PURE__*/react.createElement(es_NodeList, (0,esm_extends/* default */.Z)({
        ref: this.listRef,
        prefixCls: prefixCls,
        style: style,
        data: flattenNodes,
        disabled: disabled,
        selectable: selectable,
        checkable: !!checkable,
        motion: motion,
        dragging: draggingNodeKey !== null,
        height: height,
        itemHeight: itemHeight,
        virtual: virtual,
        focusable: focusable,
        focused: focused,
        tabIndex: tabIndex,
        activeItem: this.getActiveItem(),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onKeyDown,
        onActiveChange: this.onActiveChange,
        onListChangeStart: this.onListChangeStart,
        onListChangeEnd: this.onListChangeEnd,
        onContextMenu: onContextMenu,
        onScroll: onScroll,
        scrollWidth: scrollWidth
      }, this.getTreeNodeRequiredProps(), domProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;
      var newState = {
        prevProps: props
      };
      function needSync(name) {
        return !prevProps && props.hasOwnProperty(name) || prevProps && prevProps[name] !== props[name];
      }

      // ================== Tree Node ==================
      var treeData;

      // fieldNames
      var fieldNames = prevState.fieldNames;
      if (needSync('fieldNames')) {
        fieldNames = (0,treeUtil/* fillFieldNames */.w$)(props.fieldNames);
        newState.fieldNames = fieldNames;
      }

      // Check if `treeData` or `children` changed and save into the state.
      if (needSync('treeData')) {
        treeData = props.treeData;
      } else if (needSync('children')) {
        (0,warning/* default */.ZP)(false, '`children` of Tree is deprecated. Please use `treeData` instead.');
        treeData = (0,treeUtil/* convertTreeToData */.zn)(props.children);
      }

      // Save flatten nodes info and convert `treeData` into keyEntities
      if (treeData) {
        newState.treeData = treeData;
        var entitiesMap = (0,treeUtil/* convertDataToEntities */.I8)(treeData, {
          fieldNames: fieldNames
        });
        newState.keyEntities = (0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, MOTION_KEY, MotionEntity), entitiesMap.keyEntities);

        // Warning if treeNode not provide key
        if (false) {}
      }
      var keyEntities = newState.keyEntities || prevState.keyEntities;

      // ================ expandedKeys =================
      if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? (0,util/* conductExpandParent */.r7)(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        var cloneKeyEntities = (0,objectSpread2/* default */.Z)({}, keyEntities);
        delete cloneKeyEntities[MOTION_KEY];

        // Only take the key who has the children to enhance the performance
        var nextExpandedKeys = [];
        Object.keys(cloneKeyEntities).forEach(function (key) {
          var entity = cloneKeyEntities[key];
          if (entity.children && entity.children.length) {
            nextExpandedKeys.push(entity.key);
          }
        });
        newState.expandedKeys = nextExpandedKeys;
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? (0,util/* conductExpandParent */.r7)(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }
      if (!newState.expandedKeys) {
        delete newState.expandedKeys;
      }

      // ================ flattenNodes =================
      if (treeData || newState.expandedKeys) {
        var flattenNodes = (0,treeUtil/* flattenTreeData */.oH)(treeData || prevState.treeData, newState.expandedKeys || prevState.expandedKeys, fieldNames);
        newState.flattenNodes = flattenNodes;
      }

      // ================ selectedKeys =================
      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState.selectedKeys = (0,util/* calcSelectedKeys */.BT)(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = (0,util/* calcSelectedKeys */.BT)(props.defaultSelectedKeys, props);
        }
      }

      // ================= checkedKeys =================
      if (props.checkable) {
        var checkedKeyEntity;
        if (needSync('checkedKeys')) {
          checkedKeyEntity = (0,util/* parseCheckedKeys */.E6)(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = (0,util/* parseCheckedKeys */.E6)(props.defaultCheckedKeys) || {};
        } else if (treeData) {
          // If `treeData` changed, we also need check it
          checkedKeyEntity = (0,util/* parseCheckedKeys */.E6)(props.checkedKeys) || {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }
        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
            _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
            checkedKeys = _checkedKeyEntity$che === void 0 ? [] : _checkedKeyEntity$che,
            _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
            halfCheckedKeys = _checkedKeyEntity$hal === void 0 ? [] : _checkedKeyEntity$hal;
          if (!props.checkStrictly) {
            var conductKeys = (0,conductUtil/* conductCheck */.S)(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }
          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      }

      // ================= loadedKeys ==================
      if (needSync('loadedKeys')) {
        newState.loadedKeys = props.loadedKeys;
      }
      return newState;
    }
  }]);
  return Tree;
}(react.Component);
(0,defineProperty/* default */.Z)(Tree, "defaultProps", {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: es_DropIndicator,
  allowDrop: function allowDrop() {
    return true;
  },
  expandAction: false
});
(0,defineProperty/* default */.Z)(Tree, "TreeNode", TreeNode/* default */.Z);
/* harmony default export */ var es_Tree = (Tree);
;// CONCATENATED MODULE: ./node_modules/rc-tree/es/index.js




/* harmony default export */ var rc_tree_es = (es_Tree);

/***/ }),

/***/ 10225:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BT: function() { return /* binding */ calcSelectedKeys; },
/* harmony export */   E6: function() { return /* binding */ parseCheckedKeys; },
/* harmony export */   L0: function() { return /* binding */ arrAdd; },
/* harmony export */   OM: function() { return /* binding */ calcDropPosition; },
/* harmony export */   _5: function() { return /* binding */ arrDel; },
/* harmony export */   r7: function() { return /* binding */ conductExpandParent; },
/* harmony export */   wA: function() { return /* binding */ getDragChildrenKeys; },
/* harmony export */   yx: function() { return /* binding */ posToArr; }
/* harmony export */ });
/* unused harmony exports isLastChild, isFirstChild, convertDataToTree */
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74902);
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71002);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80334);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86128);
/* harmony import */ var _utils_keyUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35381);
/* harmony import */ var _utils_treeUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1089);




var _excluded = (/* unused pure expression or super */ null && (["children"]));
/* eslint-disable no-lonely-if */
/**
 * Legacy code. Should avoid to use if you are new to import these code.
 */






function arrDel(list, value) {
  if (!list) return [];
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}
function arrAdd(list, value) {
  var clone = (list || []).slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}
function posToArr(pos) {
  return pos.split('-');
}
function getDragChildrenKeys(dragNodeKey, keyEntities) {
  // not contains self
  // self for left or right drag
  var dragChildrenKeys = [];
  var entity = (0,_utils_keyUtil__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keyEntities, dragNodeKey);
  function dig() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (_ref) {
      var key = _ref.key,
        children = _ref.children;
      dragChildrenKeys.push(key);
      dig(children);
    });
  }
  dig(entity.children);
  return dragChildrenKeys;
}
function isLastChild(treeNodeEntity) {
  if (treeNodeEntity.parent) {
    var posArr = posToArr(treeNodeEntity.pos);
    return Number(posArr[posArr.length - 1]) === treeNodeEntity.parent.children.length - 1;
  }
  return false;
}
function isFirstChild(treeNodeEntity) {
  var posArr = posToArr(treeNodeEntity.pos);
  return Number(posArr[posArr.length - 1]) === 0;
}

// Only used when drag, not affect SSR.
function calcDropPosition(event, dragNodeProps, targetNodeProps, indent, startMousePosition, allowDrop, flattenedNodes, keyEntities, expandKeys, direction) {
  var _abstractDropNodeEnti;
  var clientX = event.clientX,
    clientY = event.clientY;
  var _getBoundingClientRec = event.target.getBoundingClientRect(),
    top = _getBoundingClientRec.top,
    height = _getBoundingClientRec.height;
  // optional chain for testing
  var horizontalMouseOffset = (direction === 'rtl' ? -1 : 1) * (((startMousePosition === null || startMousePosition === void 0 ? void 0 : startMousePosition.x) || 0) - clientX);
  var rawDropLevelOffset = (horizontalMouseOffset - 12) / indent;

  // Filter the expanded keys to exclude the node that not has children currently (like async nodes).
  var filteredExpandKeys = expandKeys.filter(function (key) {
    var _keyEntities$key;
    return (_keyEntities$key = keyEntities[key]) === null || _keyEntities$key === void 0 || (_keyEntities$key = _keyEntities$key.children) === null || _keyEntities$key === void 0 ? void 0 : _keyEntities$key.length;
  });

  // find abstract drop node by horizontal offset
  var abstractDropNodeEntity = (0,_utils_keyUtil__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keyEntities, targetNodeProps.eventKey);
  if (clientY < top + height / 2) {
    // first half, set abstract drop node to previous node
    var nodeIndex = flattenedNodes.findIndex(function (flattenedNode) {
      return flattenedNode.key === abstractDropNodeEntity.key;
    });
    var prevNodeIndex = nodeIndex <= 0 ? 0 : nodeIndex - 1;
    var prevNodeKey = flattenedNodes[prevNodeIndex].key;
    abstractDropNodeEntity = (0,_utils_keyUtil__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keyEntities, prevNodeKey);
  }
  var initialAbstractDropNodeKey = abstractDropNodeEntity.key;
  var abstractDragOverEntity = abstractDropNodeEntity;
  var dragOverNodeKey = abstractDropNodeEntity.key;
  var dropPosition = 0;
  var dropLevelOffset = 0;

  // Only allow cross level drop when dragging on a non-expanded node
  if (!filteredExpandKeys.includes(initialAbstractDropNodeKey)) {
    for (var i = 0; i < rawDropLevelOffset; i += 1) {
      if (isLastChild(abstractDropNodeEntity)) {
        abstractDropNodeEntity = abstractDropNodeEntity.parent;
        dropLevelOffset += 1;
      } else {
        break;
      }
    }
  }
  var abstractDragDataNode = dragNodeProps.data;
  var abstractDropDataNode = abstractDropNodeEntity.node;
  var dropAllowed = true;
  if (isFirstChild(abstractDropNodeEntity) && abstractDropNodeEntity.level === 0 && clientY < top + height / 2 && allowDrop({
    dragNode: abstractDragDataNode,
    dropNode: abstractDropDataNode,
    dropPosition: -1
  }) && abstractDropNodeEntity.key === targetNodeProps.eventKey) {
    // first half of first node in first level
    dropPosition = -1;
  } else if ((abstractDragOverEntity.children || []).length && filteredExpandKeys.includes(dragOverNodeKey)) {
    // drop on expanded node
    // only allow drop inside
    if (allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 0
    })) {
      dropPosition = 0;
    } else {
      dropAllowed = false;
    }
  } else if (dropLevelOffset === 0) {
    if (rawDropLevelOffset > -1.5) {
      // | Node     | <- abstractDropNode
      // | -^-===== | <- mousePosition
      // 1. try drop after
      // 2. do not allow drop
      if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    } else {
      // | Node     | <- abstractDropNode
      // | ---==^== | <- mousePosition
      // whether it has children or doesn't has children
      // always
      // 1. try drop inside
      // 2. try drop after
      // 3. do not allow drop
      if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 0
      })) {
        dropPosition = 0;
      } else if (allowDrop({
        dragNode: abstractDragDataNode,
        dropNode: abstractDropDataNode,
        dropPosition: 1
      })) {
        dropPosition = 1;
      } else {
        dropAllowed = false;
      }
    }
  } else {
    // | Node1 | <- abstractDropNode
    //      |  Node2  |
    // --^--|----=====| <- mousePosition
    // 1. try insert after Node1
    // 2. do not allow drop
    if (allowDrop({
      dragNode: abstractDragDataNode,
      dropNode: abstractDropDataNode,
      dropPosition: 1
    })) {
      dropPosition = 1;
    } else {
      dropAllowed = false;
    }
  }
  return {
    dropPosition: dropPosition,
    dropLevelOffset: dropLevelOffset,
    dropTargetKey: abstractDropNodeEntity.key,
    dropTargetPos: abstractDropNodeEntity.pos,
    dragOverNodeKey: dragOverNodeKey,
    dropContainerKey: dropPosition === 0 ? null : ((_abstractDropNodeEnti = abstractDropNodeEntity.parent) === null || _abstractDropNodeEnti === void 0 ? void 0 : _abstractDropNodeEnti.key) || null,
    dropAllowed: dropAllowed
  };
}

/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;
  var multiple = props.multiple;
  if (multiple) {
    return selectedKeys.slice();
  }
  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}
var internalProcessProps = function internalProcessProps(props) {
  return props;
};
function convertDataToTree(treeData, processor) {
  if (!treeData) return [];
  var _ref2 = processor || {},
    _ref2$processProps = _ref2.processProps,
    processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;
  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref3) {
    var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, _excluded);
    var childrenNodes = convertDataToTree(children, processor);
    return /*#__PURE__*/React.createElement(TreeNode, _extends({
      key: props.key
    }, processProps(props)), childrenNodes);
  });
}

/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }

  // Convert keys to object format
  var keyProps;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(false, '`checkedKeys` is not an array or an object');
    return null;
  }
  return keyProps;
}

/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = new Set();
  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = (0,_utils_keyUtil__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(keyEntities, key);
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent,
      node = entity.node;
    if (node.disabled) return;
    if (parent) {
      conductUp(parent.key);
    }
  }
  (keyList || []).forEach(function (key) {
    conductUp(key);
  });
  return (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(expandedKeys);
}

/***/ }),

/***/ 17341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: function() { return /* binding */ conductCheck; }
/* harmony export */ });
/* unused harmony export isCheckDisabled */
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80334);
/* harmony import */ var _keyUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35381);


function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = new Set();
  halfCheckedKeys.forEach(function (key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}
function isCheckDisabled(node) {
  var _ref = node || {},
    disabled = _ref.disabled,
    disableCheckbox = _ref.disableCheckbox,
    checkable = _ref.checkable;
  return !!(disabled || disableCheckbox) || checkable === false;
}

// Fill miss keys
function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set();

  // Add checked keys top to bottom
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
        node = entity.node,
        _entity$children = entity.children,
        children = _entity$children === void 0 ? [] : _entity$children;
      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  }

  // Add checked keys from bottom to top
  var visitedKeys = new Set();
  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || new Set();
    _entities.forEach(function (entity) {
      var parent = entity.parent,
        node = entity.node;

      // Skip if no need to check
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }

      // Skip if parent is disabled
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (allChecked) {
        checkedKeys.add(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}

// Remove useless key
function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys);

  // Remove checked keys from top to bottom
  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
        node = entity.node,
        _entity$children2 = entity.children,
        children = _entity$children2 === void 0 ? [] : _entity$children2;
      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  }

  // Remove checked keys form bottom to top
  halfCheckedKeys = new Set();
  var visitedKeys = new Set();
  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || new Set();
    _entities2.forEach(function (entity) {
      var parent = entity.parent,
        node = entity.node;

      // Skip if no need to check
      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      }

      // Skip if parent is disabled
      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }
      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);
        if (allChecked && !checked) {
          allChecked = false;
        }
        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });
      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }
      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }
      visitedKeys.add(parent.key);
    });
  }
  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}

/**
 * Conduct with keys.
 * @param keyList current key list
 * @param keyEntities key - dataEntity map
 * @param mode `fill` to fill missing key, `clean` to remove useless key
 */
function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;
  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  }

  // We only handle exist keys
  var keys = new Set(keyList.filter(function (key) {
    var hasEntity = !!(0,_keyUtil__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(keyEntities, key);
    if (!hasEntity) {
      warningMissKeys.push(key);
    }
    return hasEntity;
  }));
  var levelEntities = new Map();
  var maxLevel = 0;

  // Convert entities by level for calculation
  Object.keys(keyEntities).forEach(function (key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);
    if (!levelSet) {
      levelSet = new Set();
      levelEntities.set(level, levelSet);
    }
    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function (key) {
    return "'".concat(key, "'");
  }).join(', ')));
  var result;
  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }
  return result;
}

/***/ }),

/***/ 35381:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ getEntity; }
/* harmony export */ });
function getEntity(keyEntities, key) {
  return keyEntities[key];
}

/***/ }),

/***/ 1089:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ convertNodePropsToEventData; },
/* harmony export */   H8: function() { return /* binding */ getTreeNodeProps; },
/* harmony export */   I8: function() { return /* binding */ convertDataToEntities; },
/* harmony export */   km: function() { return /* binding */ getKey; },
/* harmony export */   oH: function() { return /* binding */ flattenTreeData; },
/* harmony export */   w$: function() { return /* binding */ fillFieldNames; },
/* harmony export */   zn: function() { return /* binding */ convertTreeToData; }
/* harmony export */ });
/* unused harmony exports getPosition, isTreeNode, warningWithoutKey, traverseDataNodes */
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71002);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74902);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1413);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50344);
/* harmony import */ var rc_util_es_omit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98423);
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80334);
/* harmony import */ var _keyUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35381);




var _excluded = ["children"];




function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}
function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}
function getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }
  return pos;
}
function fillFieldNames(fieldNames) {
  var _ref = fieldNames || {},
    title = _ref.title,
    _title = _ref._title,
    key = _ref.key,
    children = _ref.children;
  var mergedTitle = title || 'title';
  return {
    title: mergedTitle,
    _title: _title || [mergedTitle],
    key: key || 'key',
    children: children || 'children'
  };
}

/**
 * Warning if TreeNode do not provides key
 */
function warningWithoutKey(treeData, fieldNames) {
  var keys = new Map();
  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (list || []).forEach(function (treeNode) {
      var key = treeNode[fieldNames.key];
      var children = treeNode[fieldNames.children];
      warning(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      warning(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }
  dig(treeData);
}

/**
 * Convert `children` of Tree into `treeData` structure.
 */
function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(node);
    return treeNodes.map(function (treeNode) {
      // Filter invalidate node
      if (!isTreeNode(treeNode)) {
        (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
        return null;
      }
      var key = treeNode.key;
      var _treeNode$props = treeNode.props,
        children = _treeNode$props.children,
        rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_treeNode$props, _excluded);
      var dataNode = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        key: key
      }, rest);
      var parsedChildren = dig(children);
      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }
      return dataNode;
    }).filter(function (dataNode) {
      return dataNode;
    });
  }
  return dig(rootNodes);
}

/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */
function flattenTreeData(treeNodeList, expandedKeys, fieldNames) {
  var _fillFieldNames = fillFieldNames(fieldNames),
    fieldTitles = _fillFieldNames._title,
    fieldKey = _fillFieldNames.key,
    fieldChildren = _fillFieldNames.children;
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];
  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return list.map(function (treeNode, index) {
      var pos = getPosition(parent ? parent.pos : '0', index);
      var mergedKey = getKey(treeNode[fieldKey], pos);

      // Pick matched title in field title list
      var mergedTitle;
      for (var i = 0; i < fieldTitles.length; i += 1) {
        var fieldTitle = fieldTitles[i];
        if (treeNode[fieldTitle] !== undefined) {
          mergedTitle = treeNode[fieldTitle];
          break;
        }
      }

      // Add FlattenDataNode into list
      // We use `Object.assign` here to save perf since babel's `objectSpread` has perf issue
      var flattenNode = Object.assign((0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(treeNode, [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(fieldTitles), [fieldKey, fieldChildren])), {
        title: mergedTitle,
        key: mergedKey,
        parent: parent,
        pos: pos,
        children: null,
        data: treeNode,
        isStart: [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(parent ? parent.isEnd : []), [index === list.length - 1])
      });
      flattenList.push(flattenNode);

      // Loop treeNode children
      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode[fieldChildren] || [], flattenNode);
      } else {
        flattenNode.children = [];
      }
      return flattenNode;
    });
  }
  dig(treeNodeList);
  return flattenList;
}
/**
 * Traverse all the data by `treeData`.
 * Please not use it out of the `rc-tree` since we may refactor this code.
 */
function traverseDataNodes(dataNodes, callback,
// To avoid too many params, let use config instead of origin param
config) {
  var mergedConfig = {};
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(config) === 'object') {
    mergedConfig = config;
  } else {
    mergedConfig = {
      externalGetKey: config
    };
  }
  mergedConfig = mergedConfig || {};

  // Init config
  var _mergedConfig = mergedConfig,
    childrenPropName = _mergedConfig.childrenPropName,
    externalGetKey = _mergedConfig.externalGetKey,
    fieldNames = _mergedConfig.fieldNames;
  var _fillFieldNames2 = fillFieldNames(fieldNames),
    fieldKey = _fillFieldNames2.key,
    fieldChildren = _fillFieldNames2.children;
  var mergeChildrenPropName = childrenPropName || fieldChildren;

  // Get keys
  var syntheticGetKey;
  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey(node, pos) {
      return getKey(node[fieldKey], pos);
    };
  }

  // Process
  function processNode(node, index, parent, pathNodes) {
    var children = node ? node[mergeChildrenPropName] : dataNodes;
    var pos = node ? getPosition(parent.pos, index) : '0';
    var connectNodes = node ? [].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(pathNodes), [node]) : [];

    // Process node if is not root
    if (node) {
      var key = syntheticGetKey(node, pos);
      var _data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1,
        nodes: connectNodes
      };
      callback(_data);
    }

    // Process children node
    if (children) {
      children.forEach(function (subNode, subIndex) {
        processNode(subNode, subIndex, {
          node: node,
          pos: pos,
          level: parent ? parent.level + 1 : -1
        }, connectNodes);
      });
    }
  }
  processNode(null);
}
/**
 * Convert `treeData` into entity records.
 */
function convertDataToEntities(dataNodes) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    initWrapper = _ref2.initWrapper,
    processEntity = _ref2.processEntity,
    onProcessFinished = _ref2.onProcessFinished,
    externalGetKey = _ref2.externalGetKey,
    childrenPropName = _ref2.childrenPropName,
    fieldNames = _ref2.fieldNames;
  var /** @deprecated Use `config.externalGetKey` instead */
  legacyExternalGetKey = arguments.length > 2 ? arguments[2] : undefined;
  // Init config
  var mergedExternalGetKey = externalGetKey || legacyExternalGetKey;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };
  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }
  traverseDataNodes(dataNodes, function (item) {
    var node = item.node,
      index = item.index,
      pos = item.pos,
      key = item.key,
      parentPos = item.parentPos,
      level = item.level,
      nodes = item.nodes;
    var entity = {
      node: node,
      nodes: nodes,
      index: index,
      key: key,
      pos: pos,
      level: level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity;

    // Fill children
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }
    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, {
    externalGetKey: mergedExternalGetKey,
    childrenPropName: childrenPropName,
    fieldNames: fieldNames
  });
  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }
  return wrapper;
}
/**
 * Get TreeNode props with Tree props.
 */
function getTreeNodeProps(key, _ref3) {
  var expandedKeys = _ref3.expandedKeys,
    selectedKeys = _ref3.selectedKeys,
    loadedKeys = _ref3.loadedKeys,
    loadingKeys = _ref3.loadingKeys,
    checkedKeys = _ref3.checkedKeys,
    halfCheckedKeys = _ref3.halfCheckedKeys,
    dragOverNodeKey = _ref3.dragOverNodeKey,
    dropPosition = _ref3.dropPosition,
    keyEntities = _ref3.keyEntities;
  var entity = (0,_keyUtil__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(keyEntities, key);
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ''),
    // [Legacy] Drag props
    // Since the interaction of drag is changed, the semantic of the props are
    // not accuracy, I think it should be finally removed
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}
function convertNodePropsToEventData(props) {
  var data = props.data,
    expanded = props.expanded,
    selected = props.selected,
    checked = props.checked,
    loaded = props.loaded,
    loading = props.loading,
    halfChecked = props.halfChecked,
    dragOver = props.dragOver,
    dragOverGapTop = props.dragOverGapTop,
    dragOverGapBottom = props.dragOverGapBottom,
    pos = props.pos,
    active = props.active,
    eventKey = props.eventKey;
  var eventData = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, data), {}, {
    expanded: expanded,
    selected: selected,
    checked: checked,
    loaded: loaded,
    loading: loading,
    halfChecked: halfChecked,
    dragOver: dragOver,
    dragOverGapTop: dragOverGapTop,
    dragOverGapBottom: dragOverGapBottom,
    pos: pos,
    active: active,
    key: eventKey
  });
  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
        return props;
      }
    });
  }
  return eventData;
}

/***/ }),

/***/ 64217:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ pickAttrs; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1413);

var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

/***/ }),

/***/ 87718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ rc_virtual_list_es; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(71002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(97685);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-resize-observer/es/index.js + 4 modules
var es = __webpack_require__(48555);
// EXTERNAL MODULE: ./node_modules/rc-util/es/index.js
var rc_util_es = __webpack_require__(56790);
// EXTERNAL MODULE: ./node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect = __webpack_require__(8410);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Filler.js






/**
 * Fill component to provided the scroll content real height.
 */
var Filler = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var height = _ref.height,
    offsetY = _ref.offsetY,
    offsetX = _ref.offsetX,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize,
    innerProps = _ref.innerProps,
    rtl = _ref.rtl,
    extra = _ref.extra;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offsetY !== undefined) {
    // Not set `width` since this will break `sticky: right`
    outerStyle = {
      height: height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, innerStyle), {}, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({
      transform: "translateY(".concat(offsetY, "px)")
    }, rtl ? 'marginRight' : 'marginLeft', -offsetX), "position", 'absolute'), "left", 0), "right", 0), "top", 0));
  }
  return /*#__PURE__*/react.createElement("div", {
    style: outerStyle
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: function onResize(_ref2) {
      var offsetHeight = _ref2.offsetHeight;
      if (offsetHeight && onInnerResize) {
        onInnerResize();
      }
    }
  }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    style: innerStyle,
    className: classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-holder-inner"), prefixCls)),
    ref: ref
  }, innerProps), children, extra)));
});
Filler.displayName = 'Filler';
/* harmony default export */ var es_Filler = (Filler);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/Item.js

function Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = react.useCallback(function (node) {
    setRef(node);
  }, []);
  return /*#__PURE__*/react.cloneElement(children, {
    ref: refFunc
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useChildren.js


function useChildren(list, startIndex, endIndex, scrollWidth, offsetX, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function (item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {
      style: {
        width: scrollWidth
      },
      offsetX: offsetX
    });
    var key = getKey(item);
    return /*#__PURE__*/react.createElement(Item, {
      key: key,
      setRef: function setRef(ele) {
        return setNodeRef(item, ele);
      }
    }, node);
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/algorithmUtil.js
/**
 * Get index with specific start index one by one. e.g.
 * min: 3, max: 9, start: 6
 *
 * Return index is:
 * [0]: 6
 * [1]: 7
 * [2]: 5
 * [3]: 8
 * [4]: 4
 * [5]: 9
 * [6]: 3
 */
function getIndexByStartLoc(min, max, start, index) {
  var beforeCount = start - min;
  var afterCount = max - start;
  var balanceCount = Math.min(beforeCount, afterCount) * 2;

  // Balance
  if (index <= balanceCount) {
    var stepIndex = Math.floor(index / 2);
    if (index % 2) {
      return start + stepIndex + 1;
    }
    return start - stepIndex;
  }

  // One is out of range
  if (beforeCount > afterCount) {
    return start - (index - afterCount);
  }
  return start + (index - beforeCount);
}

/**
 * We assume that 2 list has only 1 item diff and others keeping the order.
 * So we can use dichotomy algorithm to find changed one.
 */
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== undefined) {
      return getKey(item);
    }
    return notExistKey;
  }

  // Loop to find diff one
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null ? null : {
    index: diffIndex,
    multiple: multiple
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useDiffItem.js



function useDiffItem(data, getKey, onDiff) {
  var _React$useState = react.useState(data),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  react.useEffect(function () {
    var diff = findListDiffIndex(prevData || [], data || [], getKey);
    if ((diff === null || diff === void 0 ? void 0 : diff.index) !== undefined) {
      onDiff === null || onDiff === void 0 || onDiff(diff.index);
      setDiffItem(data[diff.index]);
    }
    setPrevData(data);
  }, [data]);
  return [diffItem];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(75164);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/isFirefox.js

var isFF = (typeof navigator === "undefined" ? "undefined" : (0,esm_typeof/* default */.Z)(navigator)) === 'object' && /Firefox/i.test(navigator.userAgent);
/* harmony default export */ var isFirefox = (isFF);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useOriginScroll.js

/* harmony default export */ var useOriginScroll = (function (isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight) {
  // Do lock for a wheel when scrolling
  var lockRef = (0,react.useRef)(false);
  var lockTimeoutRef = (0,react.useRef)(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function () {
      lockRef.current = false;
    }, 50);
  }

  // Pass to ref since global add is in closure
  var scrollPingRef = (0,react.useRef)({
    top: isScrollAtTop,
    bottom: isScrollAtBottom,
    left: isScrollAtLeft,
    right: isScrollAtRight
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  scrollPingRef.current.left = isScrollAtLeft;
  scrollPingRef.current.right = isScrollAtRight;
  return function (isHorizontal, delta) {
    var smoothOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var originScroll = isHorizontal ?
    // Pass origin wheel when on the left
    delta < 0 && scrollPingRef.current.left ||
    // Pass origin wheel when on the right
    delta > 0 && scrollPingRef.current.right // Pass origin wheel when on the top
    : delta < 0 && scrollPingRef.current.top ||
    // Pass origin wheel when on the bottom
    delta > 0 && scrollPingRef.current.bottom;
    if (smoothOffset && originScroll) {
      // No need lock anymore when it's smooth offset from touchMove interval
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
});
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useFrameWheel.js




function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, horizontalScroll,
/***
 * Return `true` when you need to prevent default event
 */
onWheelDelta) {
  var offsetRef = (0,react.useRef)(0);
  var nextFrameRef = (0,react.useRef)(null);

  // Firefox patch
  var wheelValueRef = (0,react.useRef)(null);
  var isMouseScrollRef = (0,react.useRef)(false);

  // Scroll status sync
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);
  function onWheelY(e, deltaY) {
    raf/* default */.Z.cancel(nextFrameRef.current);

    // Do nothing when scroll at the edge, Skip check when is in scroll
    if (originScroll(false, deltaY)) return;

    // Skip if nest List has handled this event
    var event = e;
    if (!event._virtualHandled) {
      event._virtualHandled = true;
    } else {
      return;
    }
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;

    // Proxy of scroll events
    if (!isFirefox) {
      event.preventDefault();
    }
    nextFrameRef.current = (0,raf/* default */.Z)(function () {
      // Patch a multiple for Firefox to fix wheel number too small
      // ref: https://github.com/ant-design/ant-design/issues/26372#issuecomment-679460266
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple, false);
      offsetRef.current = 0;
    });
  }
  function onWheelX(event, deltaX) {
    onWheelDelta(deltaX, true);
    if (!isFirefox) {
      event.preventDefault();
    }
  }

  // Check for which direction does wheel do. `sx` means `shift + wheel`
  var wheelDirectionRef = (0,react.useRef)(null);
  var wheelDirectionCleanRef = (0,react.useRef)(null);
  function onWheel(event) {
    if (!inVirtual) return;

    // Wait for 2 frame to clean direction
    raf/* default */.Z.cancel(wheelDirectionCleanRef.current);
    wheelDirectionCleanRef.current = (0,raf/* default */.Z)(function () {
      wheelDirectionRef.current = null;
    }, 2);
    var deltaX = event.deltaX,
      deltaY = event.deltaY,
      shiftKey = event.shiftKey;
    var mergedDeltaX = deltaX;
    var mergedDeltaY = deltaY;
    if (wheelDirectionRef.current === 'sx' || !wheelDirectionRef.current && (shiftKey || false) && deltaY && !deltaX) {
      mergedDeltaX = deltaY;
      mergedDeltaY = 0;
      wheelDirectionRef.current = 'sx';
    }
    var absX = Math.abs(mergedDeltaX);
    var absY = Math.abs(mergedDeltaY);
    if (wheelDirectionRef.current === null) {
      wheelDirectionRef.current = horizontalScroll && absX > absY ? 'x' : 'y';
    }
    if (wheelDirectionRef.current === 'y') {
      onWheelY(event, mergedDeltaY);
    } else {
      onWheelX(event, mergedDeltaX);
    }
  }

  // A patch for firefox
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useGetSize.js



/**
 * Size info need loop query for the `heights` which will has the perf issue.
 * Let cache result for each render phase.
 */
function useGetSize(mergedData, getKey, heights, itemHeight) {
  var _React$useMemo = react.useMemo(function () {
      return [new Map(), []];
    }, [mergedData, heights.id, itemHeight]),
    _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
    key2Index = _React$useMemo2[0],
    bottomList = _React$useMemo2[1];
  var getSize = function getSize(startKey) {
    var endKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : startKey;
    // Get from cache first
    var startIndex = key2Index.get(startKey);
    var endIndex = key2Index.get(endKey);

    // Loop to fill the cache
    if (startIndex === undefined || endIndex === undefined) {
      var dataLen = mergedData.length;
      for (var i = bottomList.length; i < dataLen; i += 1) {
        var _heights$get;
        var item = mergedData[i];
        var key = getKey(item);
        key2Index.set(key, i);
        var cacheHeight = (_heights$get = heights.get(key)) !== null && _heights$get !== void 0 ? _heights$get : itemHeight;
        bottomList[i] = (bottomList[i - 1] || 0) + cacheHeight;
        if (key === startKey) {
          startIndex = i;
        }
        if (key === endKey) {
          endIndex = i;
        }
        if (startIndex !== undefined && endIndex !== undefined) {
          break;
        }
      }
    }
    return {
      top: bottomList[startIndex - 1] || 0,
      bottom: bottomList[endIndex]
    };
  };
  return getSize;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(15671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(43144);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/CacheMap.js



// Firefox has low performance of map.
var CacheMap = /*#__PURE__*/function () {
  function CacheMap() {
    (0,classCallCheck/* default */.Z)(this, CacheMap);
    (0,defineProperty/* default */.Z)(this, "maps", void 0);
    // Used for cache key
    // `useMemo` no need to update if `id` not change
    (0,defineProperty/* default */.Z)(this, "id", 0);
    (0,defineProperty/* default */.Z)(this, "diffRecords", new Map());
    this.maps = Object.create(null);
  }
  (0,createClass/* default */.Z)(CacheMap, [{
    key: "set",
    value: function set(key, value) {
      // Record prev value
      this.diffRecords.set(key, this.maps[key]);
      this.maps[key] = value;
      this.id += 1;
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.maps[key];
    }

    /**
     * CacheMap will record the key changed.
     * To help to know what's update in the next render.
     */
  }, {
    key: "resetRecord",
    value: function resetRecord() {
      this.diffRecords.clear();
    }
  }, {
    key: "getRecord",
    value: function getRecord() {
      return this.diffRecords;
    }
  }]);
  return CacheMap;
}();
/* harmony default export */ var utils_CacheMap = (CacheMap);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useHeights.js




function parseNumber(value) {
  var num = parseFloat(value);
  return isNaN(num) ? 0 : num;
}
function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = react.useState(0),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = (0,react.useRef)(new Map());
  var heightsRef = (0,react.useRef)(new utils_CacheMap());
  var promiseIdRef = (0,react.useRef)(0);
  function cancelRaf() {
    promiseIdRef.current += 1;
  }
  function collectHeight() {
    var sync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    cancelRaf();
    var doCollect = function doCollect() {
      var changed = false;
      instanceRef.current.forEach(function (element, key) {
        if (element && element.offsetParent) {
          var offsetHeight = element.offsetHeight;
          var _getComputedStyle = getComputedStyle(element),
            marginTop = _getComputedStyle.marginTop,
            marginBottom = _getComputedStyle.marginBottom;
          var marginTopNum = parseNumber(marginTop);
          var marginBottomNum = parseNumber(marginBottom);
          var totalHeight = offsetHeight + marginTopNum + marginBottomNum;
          if (heightsRef.current.get(key) !== totalHeight) {
            heightsRef.current.set(key, totalHeight);
            changed = true;
          }
        }
      });

      // Always trigger update mark to tell parent that should re-calculate heights when resized
      if (changed) {
        setUpdatedMark(function (c) {
          return c + 1;
        });
      }
    };
    if (sync) {
      doCollect();
    } else {
      promiseIdRef.current += 1;
      var id = promiseIdRef.current;
      Promise.resolve().then(function () {
        if (id === promiseIdRef.current) {
          doCollect();
        }
      });
    }
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }

    // Instance changed
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 || onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 || onItemRemove(item);
      }
    }
  }
  (0,react.useEffect)(function () {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js


var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = (0,react.useRef)(false);
  var touchXRef = (0,react.useRef)(0);
  var touchYRef = (0,react.useRef)(0);
  var elementRef = (0,react.useRef)(null);

  // Smooth scroll
  var intervalRef = (0,react.useRef)(null);

  /* eslint-disable prefer-const */
  var cleanUpEvents;
  var onTouchMove = function onTouchMove(e) {
    if (touchedRef.current) {
      var currentX = Math.ceil(e.touches[0].pageX);
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetX = touchXRef.current - currentX;
      var offsetY = touchYRef.current - currentY;
      var _isHorizontal = Math.abs(offsetX) > Math.abs(offsetY);
      if (_isHorizontal) {
        touchXRef.current = currentX;
      } else {
        touchYRef.current = currentY;
      }
      var scrollHandled = callback(_isHorizontal, _isHorizontal ? offsetX : offsetY, false, e);
      if (scrollHandled) {
        e.preventDefault();
      }

      // Smooth interval
      clearInterval(intervalRef.current);
      if (scrollHandled) {
        intervalRef.current = setInterval(function () {
          if (_isHorizontal) {
            offsetX *= SMOOTH_PTG;
          } else {
            offsetY *= SMOOTH_PTG;
          }
          var offset = Math.floor(_isHorizontal ? offsetX : offsetY);
          if (!callback(_isHorizontal, offset, true) || Math.abs(offset) <= 0.1) {
            clearInterval(intervalRef.current);
          }
        }, 16);
      }
    }
  };
  var onTouchEnd = function onTouchEnd() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchXRef.current = Math.ceil(e.touches[0].pageX);
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove, {
        passive: false
      });
      elementRef.current.addEventListener('touchend', onTouchEnd, {
        passive: true
      });
    }
  };
  cleanUpEvents = function cleanUpEvents() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  (0,useLayoutEffect/* default */.Z)(function () {
    if (inVirtual) {
      listRef.current.addEventListener('touchstart', onTouchStart, {
        passive: true
      });
    }
    return function () {
      var _listRef$current;
      (_listRef$current = listRef.current) === null || _listRef$current === void 0 || _listRef$current.removeEventListener('touchstart', onTouchStart);
      cleanUpEvents();
      clearInterval(intervalRef.current);
    };
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useScrollDrag.js


function smoothScrollOffset(offset) {
  return Math.floor(Math.pow(offset, 0.5));
}
function getPageXY(e, horizontal) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return obj[horizontal ? 'pageX' : 'pageY'] - window[horizontal ? 'scrollX' : 'scrollY'];
}
function useScrollDrag(inVirtual, componentRef, onScrollOffset) {
  react.useEffect(function () {
    var ele = componentRef.current;
    if (inVirtual && ele) {
      var mouseDownLock = false;
      var rafId;
      var _offset;
      var stopScroll = function stopScroll() {
        raf/* default */.Z.cancel(rafId);
      };
      var continueScroll = function continueScroll() {
        stopScroll();
        rafId = (0,raf/* default */.Z)(function () {
          onScrollOffset(_offset);
          continueScroll();
        });
      };
      var clearDragState = function clearDragState() {
        mouseDownLock = false;
        stopScroll();
      };
      var onMouseDown = function onMouseDown(e) {
        // Skip if element set draggable
        if (e.target.draggable || e.button !== 0) {
          return;
        }
        // Skip if nest List has handled this event
        var event = e;
        if (!event._virtualHandled) {
          event._virtualHandled = true;
          mouseDownLock = true;
        }
      };
      var onMouseMove = function onMouseMove(e) {
        if (mouseDownLock) {
          var mouseY = getPageXY(e, false);
          var _ele$getBoundingClien = ele.getBoundingClientRect(),
            top = _ele$getBoundingClien.top,
            bottom = _ele$getBoundingClien.bottom;
          if (mouseY <= top) {
            var diff = top - mouseY;
            _offset = -smoothScrollOffset(diff);
            continueScroll();
          } else if (mouseY >= bottom) {
            var _diff = mouseY - bottom;
            _offset = smoothScrollOffset(_diff);
            continueScroll();
          } else {
            stopScroll();
          }
        }
      };
      ele.addEventListener('mousedown', onMouseDown);
      ele.ownerDocument.addEventListener('mouseup', clearDragState);
      ele.ownerDocument.addEventListener('mousemove', onMouseMove);
      ele.ownerDocument.addEventListener('dragend', clearDragState);
      return function () {
        ele.removeEventListener('mousedown', onMouseDown);
        ele.ownerDocument.removeEventListener('mouseup', clearDragState);
        ele.ownerDocument.removeEventListener('mousemove', onMouseMove);
        ele.ownerDocument.removeEventListener('dragend', clearDragState);
        stopScroll();
      };
    }
  }, [inVirtual]);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/hooks/useScrollTo.js



/* eslint-disable no-param-reassign */




var MAX_TIMES = 10;
function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = react.useRef();
  var _React$useState = react.useState(null),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    syncState = _React$useState2[0],
    setSyncState = _React$useState2[1];

  // ========================== Sync Scroll ==========================
  (0,useLayoutEffect/* default */.Z)(function () {
    if (syncState && syncState.times < MAX_TIMES) {
      // Never reach
      if (!containerRef.current) {
        setSyncState(function (ori) {
          return (0,objectSpread2/* default */.Z)({}, ori);
        });
        return;
      }
      collectHeight();
      var targetAlign = syncState.targetAlign,
        originAlign = syncState.originAlign,
        index = syncState.index,
        offset = syncState.offset;
      var height = containerRef.current.clientHeight;
      var needCollectHeight = false;
      var newTargetAlign = targetAlign;
      var targetTop = null;

      // Go to next frame if height not exist
      if (height) {
        var mergedAlign = targetAlign || originAlign;

        // Get top & bottom
        var stackTop = 0;
        var itemTop = 0;
        var itemBottom = 0;
        var maxLen = Math.min(data.length - 1, index);
        for (var i = 0; i <= maxLen; i += 1) {
          var key = getKey(data[i]);
          itemTop = stackTop;
          var cacheHeight = heights.get(key);
          itemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);
          stackTop = itemBottom;
        }

        // Check if need sync height (visible range has item not record height)
        var leftHeight = mergedAlign === 'top' ? offset : height - offset;
        for (var _i = maxLen; _i >= 0; _i -= 1) {
          var _key = getKey(data[_i]);
          var _cacheHeight = heights.get(_key);
          if (_cacheHeight === undefined) {
            needCollectHeight = true;
            break;
          }
          leftHeight -= _cacheHeight;
          if (leftHeight <= 0) {
            break;
          }
        }

        // Scroll to
        switch (mergedAlign) {
          case 'top':
            targetTop = itemTop - offset;
            break;
          case 'bottom':
            targetTop = itemBottom - height + offset;
            break;
          default:
            {
              var scrollTop = containerRef.current.scrollTop;
              var scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = 'top';
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = 'bottom';
              }
            }
        }
        if (targetTop !== null) {
          syncScrollTop(targetTop);
        }

        // One more time for sync
        if (targetTop !== syncState.lastTop) {
          needCollectHeight = true;
        }
      }

      // Trigger next effect
      if (needCollectHeight) {
        setSyncState((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, syncState), {}, {
          times: syncState.times + 1,
          targetAlign: newTargetAlign,
          lastTop: targetTop
        }));
      }
    } else if (false) {}
  }, [syncState, containerRef.current]);

  // =========================== Scroll To ===========================
  return function (arg) {
    // When not argument provided, we think dev may want to show the scrollbar
    if (arg === null || arg === undefined) {
      triggerFlash();
      return;
    }

    // Normal scroll logic
    raf/* default */.Z.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && (0,esm_typeof/* default */.Z)(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function (item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      setSyncState({
        times: 0,
        index: index,
        offset: offset,
        originAlign: align
      });
    }
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/ScrollBar.js







var ScrollBar = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
    rtl = props.rtl,
    scrollOffset = props.scrollOffset,
    scrollRange = props.scrollRange,
    onStartMove = props.onStartMove,
    onStopMove = props.onStopMove,
    onScroll = props.onScroll,
    horizontal = props.horizontal,
    spinSize = props.spinSize,
    containerSize = props.containerSize,
    style = props.style,
    propsThumbStyle = props.thumbStyle,
    showScrollBar = props.showScrollBar;
  var _React$useState = react.useState(false),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    dragging = _React$useState2[0],
    setDragging = _React$useState2[1];
  var _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
    pageXY = _React$useState4[0],
    setPageXY = _React$useState4[1];
  var _React$useState5 = react.useState(null),
    _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
    startTop = _React$useState6[0],
    setStartTop = _React$useState6[1];
  var isLTR = !rtl;

  // ========================= Refs =========================
  var scrollbarRef = react.useRef();
  var thumbRef = react.useRef();

  // ======================= Visible ========================
  var _React$useState7 = react.useState(showScrollBar),
    _React$useState8 = (0,slicedToArray/* default */.Z)(_React$useState7, 2),
    visible = _React$useState8[0],
    setVisible = _React$useState8[1];
  var visibleTimeoutRef = react.useRef();
  var delayHidden = function delayHidden() {
    if (showScrollBar === true || showScrollBar === false) return;
    clearTimeout(visibleTimeoutRef.current);
    setVisible(true);
    visibleTimeoutRef.current = setTimeout(function () {
      setVisible(false);
    }, 3000);
  };

  // ======================== Range =========================
  var enableScrollRange = scrollRange - containerSize || 0;
  var enableOffsetRange = containerSize - spinSize || 0;

  // ========================= Top ==========================
  var top = react.useMemo(function () {
    if (scrollOffset === 0 || enableScrollRange === 0) {
      return 0;
    }
    var ptg = scrollOffset / enableScrollRange;
    return ptg * enableOffsetRange;
  }, [scrollOffset, enableScrollRange, enableOffsetRange]);

  // ====================== Container =======================
  var onContainerMouseDown = function onContainerMouseDown(e) {
    e.stopPropagation();
    e.preventDefault();
  };

  // ======================== Thumb =========================
  var stateRef = react.useRef({
    top: top,
    dragging: dragging,
    pageY: pageXY,
    startTop: startTop
  });
  stateRef.current = {
    top: top,
    dragging: dragging,
    pageY: pageXY,
    startTop: startTop
  };
  var onThumbMouseDown = function onThumbMouseDown(e) {
    setDragging(true);
    setPageXY(getPageXY(e, horizontal));
    setStartTop(stateRef.current.top);
    onStartMove();
    e.stopPropagation();
    e.preventDefault();
  };

  // ======================== Effect ========================

  // React make event as passive, but we need to preventDefault
  // Add event on dom directly instead.
  // ref: https://github.com/facebook/react/issues/9809
  react.useEffect(function () {
    var onScrollbarTouchStart = function onScrollbarTouchStart(e) {
      e.preventDefault();
    };
    var scrollbarEle = scrollbarRef.current;
    var thumbEle = thumbRef.current;
    scrollbarEle.addEventListener('touchstart', onScrollbarTouchStart, {
      passive: false
    });
    thumbEle.addEventListener('touchstart', onThumbMouseDown, {
      passive: false
    });
    return function () {
      scrollbarEle.removeEventListener('touchstart', onScrollbarTouchStart);
      thumbEle.removeEventListener('touchstart', onThumbMouseDown);
    };
  }, []);

  // Pass to effect
  var enableScrollRangeRef = react.useRef();
  enableScrollRangeRef.current = enableScrollRange;
  var enableOffsetRangeRef = react.useRef();
  enableOffsetRangeRef.current = enableOffsetRange;
  react.useEffect(function () {
    if (dragging) {
      var moveRafId;
      var onMouseMove = function onMouseMove(e) {
        var _stateRef$current = stateRef.current,
          stateDragging = _stateRef$current.dragging,
          statePageY = _stateRef$current.pageY,
          stateStartTop = _stateRef$current.startTop;
        raf/* default */.Z.cancel(moveRafId);
        var rect = scrollbarRef.current.getBoundingClientRect();
        var scale = containerSize / (horizontal ? rect.width : rect.height);
        if (stateDragging) {
          var offset = (getPageXY(e, horizontal) - statePageY) * scale;
          var newTop = stateStartTop;
          if (!isLTR && horizontal) {
            newTop -= offset;
          } else {
            newTop += offset;
          }
          var tmpEnableScrollRange = enableScrollRangeRef.current;
          var tmpEnableOffsetRange = enableOffsetRangeRef.current;
          var ptg = tmpEnableOffsetRange ? newTop / tmpEnableOffsetRange : 0;
          var newScrollTop = Math.ceil(ptg * tmpEnableScrollRange);
          newScrollTop = Math.max(newScrollTop, 0);
          newScrollTop = Math.min(newScrollTop, tmpEnableScrollRange);
          moveRafId = (0,raf/* default */.Z)(function () {
            onScroll(newScrollTop, horizontal);
          });
        }
      };
      var onMouseUp = function onMouseUp() {
        setDragging(false);
        onStopMove();
      };
      window.addEventListener('mousemove', onMouseMove, {
        passive: true
      });
      window.addEventListener('touchmove', onMouseMove, {
        passive: true
      });
      window.addEventListener('mouseup', onMouseUp, {
        passive: true
      });
      window.addEventListener('touchend', onMouseUp, {
        passive: true
      });
      return function () {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchmove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchend', onMouseUp);
        raf/* default */.Z.cancel(moveRafId);
      };
    }
  }, [dragging]);
  react.useEffect(function () {
    delayHidden();
    return function () {
      clearTimeout(visibleTimeoutRef.current);
    };
  }, [scrollOffset]);

  // ====================== Imperative ======================
  react.useImperativeHandle(ref, function () {
    return {
      delayHidden: delayHidden
    };
  });

  // ======================== Render ========================
  var scrollbarPrefixCls = "".concat(prefixCls, "-scrollbar");
  var containerStyle = {
    position: 'absolute',
    visibility: visible ? null : 'hidden'
  };
  var thumbStyle = {
    position: 'absolute',
    borderRadius: 99,
    background: 'var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))',
    cursor: 'pointer',
    userSelect: 'none'
  };
  if (horizontal) {
    Object.assign(containerStyle, {
      height: 8,
      left: 0,
      right: 0,
      bottom: 0
    });
    Object.assign(thumbStyle, (0,defineProperty/* default */.Z)({
      height: '100%',
      width: spinSize
    }, isLTR ? 'left' : 'right', top));
  } else {
    Object.assign(containerStyle, (0,defineProperty/* default */.Z)({
      width: 8,
      top: 0,
      bottom: 0
    }, isLTR ? 'right' : 'left', 0));
    Object.assign(thumbStyle, {
      width: '100%',
      height: spinSize,
      top: top
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: scrollbarRef,
    className: classnames_default()(scrollbarPrefixCls, (0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)((0,defineProperty/* default */.Z)({}, "".concat(scrollbarPrefixCls, "-horizontal"), horizontal), "".concat(scrollbarPrefixCls, "-vertical"), !horizontal), "".concat(scrollbarPrefixCls, "-visible"), visible)),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, containerStyle), style),
    onMouseDown: onContainerMouseDown,
    onMouseMove: delayHidden
  }, /*#__PURE__*/react.createElement("div", {
    ref: thumbRef,
    className: classnames_default()("".concat(scrollbarPrefixCls, "-thumb"), (0,defineProperty/* default */.Z)({}, "".concat(scrollbarPrefixCls, "-thumb-moving"), dragging)),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, thumbStyle), propsThumbStyle),
    onMouseDown: onThumbMouseDown
  }));
});
if (false) {}
/* harmony default export */ var es_ScrollBar = (ScrollBar);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/utils/scrollbarUtil.js
var MIN_SIZE = 20;
function getSpinSize() {
  var containerSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var scrollRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var baseSize = containerSize / scrollRange * containerSize;
  if (isNaN(baseSize)) {
    baseSize = 0;
  }
  baseSize = Math.max(baseSize, MIN_SIZE);
  return Math.floor(baseSize);
}
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/List.js






var _excluded = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"];



















var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    direction = props.direction,
    scrollWidth = props.scrollWidth,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVirtualScroll = props.onVirtualScroll,
    onVisibleChange = props.onVisibleChange,
    innerProps = props.innerProps,
    extraRender = props.extraRender,
    styles = props.styles,
    _props$showScrollBar = props.showScrollBar,
    showScrollBar = _props$showScrollBar === void 0 ? 'optional' : _props$showScrollBar,
    restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  // =============================== Item Key ===============================
  var getKey = react.useCallback(function (item) {
    if (typeof itemKey === 'function') {
      return itemKey(item);
    }
    return item === null || item === void 0 ? void 0 : item[itemKey];
  }, [itemKey]);

  // ================================ Height ================================
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = (0,slicedToArray/* default */.Z)(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];

  // ================================= MISC =================================
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var containerHeight = react.useMemo(function () {
    return Object.values(heights.maps).reduce(function (total, curr) {
      return total + curr;
    }, 0);
  }, [heights.id, heights.maps]);
  var inVirtual = useVirtual && data && (Math.max(itemHeight * data.length, containerHeight) > height || !!scrollWidth);
  var isRTL = direction === 'rtl';
  var mergedClassName = classnames_default()(prefixCls, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), isRTL), className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = (0,react.useRef)();
  var fillerInnerRef = (0,react.useRef)();
  var containerRef = (0,react.useRef)();

  // =============================== Item Key ===============================

  var _useState = (0,react.useState)(0),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    offsetTop = _useState2[0],
    setOffsetTop = _useState2[1];
  var _useState3 = (0,react.useState)(0),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    offsetLeft = _useState4[0],
    setOffsetLeft = _useState4[1];
  var _useState5 = (0,react.useState)(false),
    _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
    scrollMoving = _useState6[0],
    setScrollMoving = _useState6[1];
  var onScrollbarStartMove = function onScrollbarStartMove() {
    setScrollMoving(true);
  };
  var onScrollbarStopMove = function onScrollbarStopMove() {
    setScrollMoving(false);
  };
  var sharedConfig = {
    getKey: getKey
  };

  // ================================ Scroll ================================
  function syncScrollTop(newTop) {
    setOffsetTop(function (origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }

  // ================================ Legacy ================================
  // Put ref here since the range is generate by follow
  var rangeRef = (0,react.useRef)({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = (0,react.useRef)();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = (0,slicedToArray/* default */.Z)(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;

  // ========================== Visible Calculation =========================
  var _React$useMemo = react.useMemo(function () {
      if (!useVirtual) {
        return {
          scrollHeight: undefined,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }

      // Always use virtual scroll bar in avoid shaking
      if (!inVirtual) {
        var _fillerInnerRef$curre;
        return {
          scrollHeight: ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0 ? void 0 : _fillerInnerRef$curre.offsetHeight) || 0,
          start: 0,
          end: mergedData.length - 1,
          offset: undefined
        };
      }
      var itemTop = 0;
      var startIndex;
      var startOffset;
      var endIndex;
      var dataLen = mergedData.length;
      for (var i = 0; i < dataLen; i += 1) {
        var _item = mergedData[i];
        var key = getKey(_item);
        var cacheHeight = heights.get(key);
        var currentItemBottom = itemTop + (cacheHeight === undefined ? itemHeight : cacheHeight);

        // Check item top in the range
        if (currentItemBottom >= offsetTop && startIndex === undefined) {
          startIndex = i;
          startOffset = itemTop;
        }

        // Check item bottom in the range. We will render additional one item for motion usage
        if (currentItemBottom > offsetTop + height && endIndex === undefined) {
          endIndex = i;
        }
        itemTop = currentItemBottom;
      }

      // When scrollTop at the end but data cut to small count will reach this
      if (startIndex === undefined) {
        startIndex = 0;
        startOffset = 0;
        endIndex = Math.ceil(height / itemHeight);
      }
      if (endIndex === undefined) {
        endIndex = mergedData.length - 1;
      }

      // Give cache to improve scroll experience
      endIndex = Math.min(endIndex + 1, mergedData.length - 1);
      return {
        scrollHeight: itemTop,
        start: startIndex,
        end: endIndex,
        offset: startOffset
      };
    }, [inVirtual, useVirtual, offsetTop, mergedData, heightUpdatedMark, height]),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    fillerOffset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;

  // When scroll up, first visible item get real height may not same as `itemHeight`,
  // Which will make scroll jump.
  // Let's sync scroll top to avoid jump
  react.useLayoutEffect(function () {
    var changedRecord = heights.getRecord();
    if (changedRecord.size === 1) {
      var recordKey = Array.from(changedRecord.keys())[0];
      var prevCacheHeight = changedRecord.get(recordKey);

      // Quick switch data may cause `start` not in `mergedData` anymore
      var startItem = mergedData[start];
      if (startItem && prevCacheHeight === undefined) {
        var startIndexKey = getKey(startItem);
        if (startIndexKey === recordKey) {
          var realStartHeight = heights.get(recordKey);
          var diffHeight = realStartHeight - itemHeight;
          syncScrollTop(function (ori) {
            return ori + diffHeight;
          });
        }
      }
    }
    heights.resetRecord();
  }, [scrollHeight]);

  // ================================= Size =================================
  var _React$useState = react.useState({
      width: 0,
      height: height
    }),
    _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
    size = _React$useState2[0],
    setSize = _React$useState2[1];
  var onHolderResize = function onHolderResize(sizeInfo) {
    setSize({
      width: sizeInfo.offsetWidth,
      height: sizeInfo.offsetHeight
    });
  };

  // Hack on scrollbar to enable flash call
  var verticalScrollBarRef = (0,react.useRef)();
  var horizontalScrollBarRef = (0,react.useRef)();
  var horizontalScrollBarSpinSize = react.useMemo(function () {
    return getSpinSize(size.width, scrollWidth);
  }, [size.width, scrollWidth]);
  var verticalScrollBarSpinSize = react.useMemo(function () {
    return getSpinSize(size.height, scrollHeight);
  }, [size.height, scrollHeight]);

  // =============================== In Range ===============================
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = (0,react.useRef)(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = offsetTop <= 0;
  var isScrollAtBottom = offsetTop >= maxScrollHeight;
  var isScrollAtLeft = offsetLeft <= 0;
  var isScrollAtRight = offsetLeft >= scrollWidth;
  var originScroll = useOriginScroll(isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight);

  // ================================ Scroll ================================
  var getVirtualScrollInfo = function getVirtualScrollInfo() {
    return {
      x: isRTL ? -offsetLeft : offsetLeft,
      y: offsetTop
    };
  };
  var lastVirtualScrollInfoRef = (0,react.useRef)(getVirtualScrollInfo());
  var triggerScroll = (0,rc_util_es/* useEvent */.zX)(function (params) {
    if (onVirtualScroll) {
      var nextInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, getVirtualScrollInfo()), params);

      // Trigger when offset changed
      if (lastVirtualScrollInfoRef.current.x !== nextInfo.x || lastVirtualScrollInfoRef.current.y !== nextInfo.y) {
        onVirtualScroll(nextInfo);
        lastVirtualScrollInfoRef.current = nextInfo;
      }
    }
  });
  function onScrollBar(newScrollOffset, horizontal) {
    var newOffset = newScrollOffset;
    if (horizontal) {
      (0,react_dom.flushSync)(function () {
        setOffsetLeft(newOffset);
      });
      triggerScroll();
    } else {
      syncScrollTop(newOffset);
    }
  }

  // When data size reduce. It may trigger native scroll event back to fit scroll position
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== offsetTop) {
      syncScrollTop(newScrollTop);
    }

    // Trigger origin onScroll
    onScroll === null || onScroll === void 0 || onScroll(e);
    triggerScroll();
  }
  var keepInHorizontalRange = function keepInHorizontalRange(nextOffsetLeft) {
    var tmpOffsetLeft = nextOffsetLeft;
    var max = !!scrollWidth ? scrollWidth - size.width : 0;
    tmpOffsetLeft = Math.max(tmpOffsetLeft, 0);
    tmpOffsetLeft = Math.min(tmpOffsetLeft, max);
    return tmpOffsetLeft;
  };
  var onWheelDelta = (0,rc_util_es/* useEvent */.zX)(function (offsetXY, fromHorizontal) {
    if (fromHorizontal) {
      (0,react_dom.flushSync)(function () {
        setOffsetLeft(function (left) {
          var nextOffsetLeft = left + (isRTL ? -offsetXY : offsetXY);
          return keepInHorizontalRange(nextOffsetLeft);
        });
      });
      triggerScroll();
    } else {
      syncScrollTop(function (top) {
        var newTop = top + offsetXY;
        return newTop;
      });
    }
  });

  // Since this added in global,should use ref to keep update
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, isScrollAtLeft, isScrollAtRight, !!scrollWidth, onWheelDelta),
    _useFrameWheel2 = (0,slicedToArray/* default */.Z)(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];

  // Mobile touch move
  useMobileTouchMove(useVirtual, componentRef, function (isHorizontal, delta, smoothOffset, e) {
    var event = e;
    if (originScroll(isHorizontal, delta, smoothOffset)) {
      return false;
    }

    // Fix nest List trigger TouchMove event
    if (!event || !event._virtualHandled) {
      if (event) {
        event._virtualHandled = true;
      }
      onRawWheel({
        preventDefault: function preventDefault() {},
        deltaX: isHorizontal ? delta : 0,
        deltaY: isHorizontal ? 0 : delta
      });
      return true;
    }
    return false;
  });

  // MouseDown drag for scroll
  useScrollDrag(inVirtual, componentRef, function (offset) {
    syncScrollTop(function (top) {
      return top + offset;
    });
  });
  (0,useLayoutEffect/* default */.Z)(function () {
    // Firefox only
    function onMozMousePixelScroll(e) {
      // scrolling at top/bottom limit
      var scrollingUpAtTop = isScrollAtTop && e.detail < 0;
      var scrollingDownAtBottom = isScrollAtBottom && e.detail > 0;
      if (useVirtual && !scrollingUpAtTop && !scrollingDownAtBottom) {
        e.preventDefault();
      }
    }
    var componentEle = componentRef.current;
    componentEle.addEventListener('wheel', onRawWheel, {
      passive: false
    });
    componentEle.addEventListener('DOMMouseScroll', onFireFoxScroll, {
      passive: true
    });
    componentEle.addEventListener('MozMousePixelScroll', onMozMousePixelScroll, {
      passive: false
    });
    return function () {
      componentEle.removeEventListener('wheel', onRawWheel);
      componentEle.removeEventListener('DOMMouseScroll', onFireFoxScroll);
      componentEle.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
    };
  }, [useVirtual, isScrollAtTop, isScrollAtBottom]);

  // Sync scroll left
  (0,useLayoutEffect/* default */.Z)(function () {
    if (scrollWidth) {
      var newOffsetLeft = keepInHorizontalRange(offsetLeft);
      setOffsetLeft(newOffsetLeft);
      triggerScroll({
        x: newOffsetLeft
      });
    }
  }, [size.width, scrollWidth]);

  // ================================= Ref ==================================
  var delayHideScrollBar = function delayHideScrollBar() {
    var _verticalScrollBarRef, _horizontalScrollBarR;
    (_verticalScrollBarRef = verticalScrollBarRef.current) === null || _verticalScrollBarRef === void 0 || _verticalScrollBarRef.delayHidden();
    (_horizontalScrollBarR = horizontalScrollBarRef.current) === null || _horizontalScrollBarR === void 0 || _horizontalScrollBarR.delayHidden();
  };
  var _scrollTo = useScrollTo(componentRef, mergedData, heights, itemHeight, getKey, function () {
    return collectHeight(true);
  }, syncScrollTop, delayHideScrollBar);
  react.useImperativeHandle(ref, function () {
    return {
      nativeElement: containerRef.current,
      getScrollInfo: getVirtualScrollInfo,
      scrollTo: function scrollTo(config) {
        function isPosScroll(arg) {
          return arg && (0,esm_typeof/* default */.Z)(arg) === 'object' && ('left' in arg || 'top' in arg);
        }
        if (isPosScroll(config)) {
          // Scroll X
          if (config.left !== undefined) {
            setOffsetLeft(keepInHorizontalRange(config.left));
          }

          // Scroll Y
          _scrollTo(config.top);
        } else {
          _scrollTo(config);
        }
      }
    };
  });

  // ================================ Effect ================================
  /** We need told outside that some list not rendered */
  (0,useLayoutEffect/* default */.Z)(function () {
    if (onVisibleChange) {
      var renderList = mergedData.slice(start, end + 1);
      onVisibleChange(renderList, mergedData);
    }
  }, [start, end, mergedData]);

  // ================================ Extra =================================
  var getSize = useGetSize(mergedData, getKey, heights, itemHeight);
  var extraContent = extraRender === null || extraRender === void 0 ? void 0 : extraRender({
    start: start,
    end: end,
    virtual: inVirtual,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    rtl: isRTL,
    getSize: getSize
  });

  // ================================ Render ================================
  var listChildren = useChildren(mergedData, start, end, scrollWidth, offsetLeft, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = (0,objectSpread2/* default */.Z)((0,defineProperty/* default */.Z)({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollWidth) {
        componentStyle.overflowX = 'hidden';
      }
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  var containerProps = {};
  if (isRTL) {
    containerProps.dir = 'rtl';
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    ref: containerRef,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, style), {}, {
      position: 'relative'
    }),
    className: mergedClassName
  }, containerProps, restProps), /*#__PURE__*/react.createElement(es/* default */.Z, {
    onResize: onHolderResize
  }, /*#__PURE__*/react.createElement(Component, {
    className: "".concat(prefixCls, "-holder"),
    style: componentStyle,
    ref: componentRef,
    onScroll: onFallbackScroll,
    onMouseEnter: delayHideScrollBar
  }, /*#__PURE__*/react.createElement(es_Filler, {
    prefixCls: prefixCls,
    height: scrollHeight,
    offsetX: offsetLeft,
    offsetY: fillerOffset,
    scrollWidth: scrollWidth,
    onInnerResize: collectHeight,
    ref: fillerInnerRef,
    innerProps: innerProps,
    rtl: isRTL,
    extra: extraContent
  }, listChildren))), inVirtual && scrollHeight > height && /*#__PURE__*/react.createElement(es_ScrollBar, {
    ref: verticalScrollBarRef,
    prefixCls: prefixCls,
    scrollOffset: offsetTop,
    scrollRange: scrollHeight,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: verticalScrollBarSpinSize,
    containerSize: size.height,
    style: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.verticalScrollBarThumb,
    showScrollBar: showScrollBar
  }), inVirtual && scrollWidth > size.width && /*#__PURE__*/react.createElement(es_ScrollBar, {
    ref: horizontalScrollBarRef,
    prefixCls: prefixCls,
    scrollOffset: offsetLeft,
    scrollRange: scrollWidth,
    rtl: isRTL,
    onScroll: onScrollBar,
    onStartMove: onScrollbarStartMove,
    onStopMove: onScrollbarStopMove,
    spinSize: horizontalScrollBarSpinSize,
    containerSize: size.width,
    horizontal: true,
    style: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBar,
    thumbStyle: styles === null || styles === void 0 ? void 0 : styles.horizontalScrollBarThumb,
    showScrollBar: showScrollBar
  }));
}
var List = /*#__PURE__*/react.forwardRef(RawList);
List.displayName = 'List';
/* harmony default export */ var es_List = (List);
;// CONCATENATED MODULE: ./node_modules/rc-virtual-list/es/index.js

/* harmony default export */ var rc_virtual_list_es = (es_List);

/***/ }),

/***/ 64836:
/***/ (function(module) {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18698:
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);