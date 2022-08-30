module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lightbox; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar DEFAULT_ZOOM_STEP = 0.3;\nvar DEFAULT_LARGE_ZOOM = 4;\n\nfunction getXY(e) {\n  var x = 0;\n  var y = 0;\n\n  if (e.touches && e.touches.length) {\n    x = e.touches[0].pageX;\n    y = e.touches[0].pageY;\n  } else {\n    x = e.pageX;\n    y = e.pageY;\n  }\n\n  return {\n    x: x,\n    y: y\n  };\n}\n\nfunction Cond(props) {\n  if (!props.condition) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children);\n}\n\nvar Lightbox = /*#__PURE__*/function (_React$Component) {\n  _inherits(Lightbox, _React$Component);\n\n  var _super = _createSuper(Lightbox);\n\n  function Lightbox() {\n    var _this$props$startInde, _this$props, _this$props2, _this$props2$images;\n\n    var _this;\n\n    _classCallCheck(this, Lightbox);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"initX\", 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"initY\", 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"lastX\", 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"lastY\", 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"_cont\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      x: 0,\n      y: 0,\n      zoom: 1,\n      rotate: 0,\n      loading: true,\n      moving: false,\n      current: (_this$props$startInde = (_this$props = _this.props) === null || _this$props === void 0 ? void 0 : _this$props.startIndex) !== null && _this$props$startInde !== void 0 ? _this$props$startInde : 0,\n      multi: (_this$props2 = _this.props) !== null && _this$props2 !== void 0 && (_this$props2$images = _this$props2.images) !== null && _this$props2$images !== void 0 && _this$props2$images.length ? true : false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"createTransform\", function (x, y, zoom, rotate) {\n      return \"translate3d(\".concat(x, \"px,\").concat(y, \"px,0px) scale(\").concat(zoom, \") rotate(\").concat(rotate, \"deg)\");\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"stopSideEffect\", function (e) {\n      return e.stopPropagation();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getCurrentImage\", function (s, p) {\n      var _p$image, _ref, _p$images$s$current$u, _p$images$s$current, _p$images;\n\n      if (!s.multi) return (_p$image = p.image) !== null && _p$image !== void 0 ? _p$image : \"\";\n      return (_ref = (_p$images$s$current$u = (_p$images$s$current = p.images[s.current]) === null || _p$images$s$current === void 0 ? void 0 : _p$images$s$current.url) !== null && _p$images$s$current$u !== void 0 ? _p$images$s$current$u : (_p$images = p.images) === null || _p$images === void 0 ? void 0 : _p$images[s.current]) !== null && _ref !== void 0 ? _ref : \"\";\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getCurrentTitle\", function (s, p) {\n      var _p$title, _p$images$s$current$t, _p$images2, _p$images2$s$current;\n\n      if (!s.multi) return (_p$title = p.title) !== null && _p$title !== void 0 ? _p$title : \"\";\n      return (_p$images$s$current$t = (_p$images2 = p.images) === null || _p$images2 === void 0 ? void 0 : (_p$images2$s$current = _p$images2[s.current]) === null || _p$images2$s$current === void 0 ? void 0 : _p$images2$s$current.title) !== null && _p$images$s$current$t !== void 0 ? _p$images$s$current$t : \"\";\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"resetZoom\", function () {\n      return _this.setState({\n        x: 0,\n        y: 0,\n        zoom: 1\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"shockZoom\", function (e) {\n      var _this$_cont$current, _this$_cont$current$g;\n\n      var _this$props3 = _this.props,\n          _this$props3$zoomStep = _this$props3.zoomStep,\n          zoomStep = _this$props3$zoomStep === void 0 ? DEFAULT_ZOOM_STEP : _this$props3$zoomStep,\n          _this$props3$allowZoo = _this$props3.allowZoom,\n          allowZoom = _this$props3$allowZoo === void 0 ? true : _this$props3$allowZoo,\n          _this$props3$doubleCl = _this$props3.doubleClickZoom,\n          doubleClickZoom = _this$props3$doubleCl === void 0 ? DEFAULT_LARGE_ZOOM : _this$props3$doubleCl;\n      if (!allowZoom || !doubleClickZoom) return false;\n\n      _this.stopSideEffect(e);\n\n      if (_this.state.zoom > 1) return _this.resetZoom();\n\n      var _z = (zoomStep < 1 ? Math.ceil(doubleClickZoom / zoomStep) : zoomStep) * zoomStep;\n\n      var _xy = getXY(e);\n\n      var _cbr = (_this$_cont$current = _this._cont.current) === null || _this$_cont$current === void 0 ? void 0 : (_this$_cont$current$g = _this$_cont$current.getBoundingClientRect) === null || _this$_cont$current$g === void 0 ? void 0 : _this$_cont$current$g.call(_this$_cont$current);\n\n      var _ccx = _cbr.x + _cbr.width / 2;\n\n      var _ccy = _cbr.y + _cbr.height / 2;\n\n      var x = (_xy.x - _ccx) * -1 * _z;\n      var y = (_xy.y - _ccy) * -1 * _z;\n\n      _this.setState({\n        x: x,\n        y: y,\n        zoom: _z\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"navigateImage\", function (direction, e) {\n      _this.stopSideEffect(e);\n\n      var current = 0;\n\n      switch (direction) {\n        case \"next\":\n          current = _this.state.current + 1;\n          break;\n\n        case \"prev\":\n          current = _this.state.current - 1;\n          break;\n      }\n\n      if (current >= _this.props.images.length) current = 0;else if (current < 0) current = _this.props.images.length - 1;\n\n      _this.setState({\n        current: current,\n        x: 0,\n        y: 0,\n        zoom: 1,\n        rotate: 0,\n        loading: true\n      });\n\n      if (typeof _this.props.onNavigateImage === 'function') {\n        _this.props.onNavigateImage(current);\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"startMove\", function (e) {\n      if (_this.state.zoom <= 1) return false;\n\n      _this.setState({\n        moving: true\n      });\n\n      var xy = getXY(e);\n      _this.initX = xy.x - _this.lastX;\n      _this.initY = xy.y - _this.lastY;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"duringMove\", function (e) {\n      if (!_this.state.moving) return false;\n      var xy = getXY(e);\n      _this.lastX = xy.x - _this.initX;\n      _this.lastY = xy.y - _this.initY;\n\n      _this.setState({\n        x: xy.x - _this.initX,\n        y: xy.y - _this.initY\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"endMove\", function (e) {\n      return _this.setState({\n        moving: false\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"wheelZoom\", function (e) {\n      if (e.deltaY > 0) {\n        _this.setState({\n          zoom: _this.state.zoom + zoomStep\n        });\n      } else if (e.deltaY < 0) {\n        _this.setState({\n          zoom: _this.state.zoom - zoomStep\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"applyZoom\", function (type) {\n      var _this$props$zoomStep = _this.props.zoomStep,\n          zoomStep = _this$props$zoomStep === void 0 ? DEFAULT_ZOOM_STEP : _this$props$zoomStep;\n\n      switch (type) {\n        case \"in\":\n          _this.setState({\n            zoom: _this.state.zoom + zoomStep\n          });\n\n          break;\n\n        case \"out\":\n          var newZoom = _this.state.zoom - zoomStep;\n          if (newZoom < 1) break;else if (newZoom === 1) _this.setState({\n            x: 0,\n            y: 0,\n            zoom: 1\n          });else _this.setState({\n            zoom: newZoom\n          });\n          break;\n\n        case \"reset\":\n          _this.resetZoom();\n\n          break;\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"applyRotate\", function (type) {\n      switch (type) {\n        case \"cw\":\n          _this.setState({\n            rotate: _this.state.rotate + 90\n          });\n\n          break;\n\n        case \"acw\":\n          _this.setState({\n            rotate: _this.state.rotate - 90\n          });\n\n          break;\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"reset\", function (e) {\n      _this.stopSideEffect(e);\n\n      _this.setState({\n        x: 0,\n        y: 0,\n        zoom: 1,\n        rotate: 0\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"exit\", function (e) {\n      if (typeof _this.props.onClose === \"function\") return _this.props.onClose(e);\n      console.error(\"No Exit function passed on prop: onClose. Clicking the close button will do nothing\");\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"shouldShowReset\", function () {\n      return _this.state.x || _this.state.y || _this.state.zoom !== 1 || _this.state.rotate !== 0;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"canvasClick\", function (e) {\n      var _this$props$clickOuts = _this.props.clickOutsideToExit,\n          clickOutsideToExit = _this$props$clickOuts === void 0 ? true : _this$props$clickOuts;\n      if (clickOutsideToExit && _this.state.zoom <= 1) return _this.exit(e);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"keyboardNavigation\", function (e) {\n      var _this$props4 = _this.props,\n          _this$props4$allowZoo = _this$props4.allowZoom,\n          allowZoom = _this$props4$allowZoo === void 0 ? true : _this$props4$allowZoo,\n          _this$props4$allowRes = _this$props4.allowReset,\n          allowReset = _this$props4$allowRes === void 0 ? true : _this$props4$allowRes;\n      var _this$state = _this.state,\n          multi = _this$state.multi,\n          x = _this$state.x,\n          y = _this$state.y,\n          zoom = _this$state.zoom;\n\n      switch (e.key) {\n        case \"ArrowLeft\":\n          if (multi && zoom === 1) _this.navigateImage(\"prev\", e);else if (zoom > 1) _this.setState({\n            x: x - 20\n          });\n          break;\n\n        case \"ArrowRight\":\n          if (multi && zoom === 1) _this.navigateImage(\"next\", e);else if (zoom > 1) _this.setState({\n            x: x + 20\n          });\n          break;\n\n        case \"ArrowUp\":\n          if (zoom > 1) _this.setState({\n            y: y + 20\n          });\n          break;\n\n        case \"ArrowDown\":\n          if (zoom > 1) _this.setState({\n            y: y - 20\n          });\n          break;\n\n        case \"+\":\n          if (allowZoom) _this.applyZoom(\"in\");\n          break;\n\n        case \"-\":\n          if (allowZoom) _this.applyZoom(\"out\");\n          break;\n\n        case \"Escape\":\n          if (allowReset && _this.shouldShowReset()) _this.reset(e);else _this.exit(e);\n          break;\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(Lightbox, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.body.classList.add(\"lb-open-lightbox\");\n      var _this$props$keyboardI = this.props.keyboardInteraction,\n          keyboardInteraction = _this$props$keyboardI === void 0 ? true : _this$props$keyboardI;\n      if (keyboardInteraction) document.addEventListener(\"keyup\", this.keyboardNavigation);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      document.body.classList.remove(\"lb-open-lightbox\");\n      var _this$props$keyboardI2 = this.props.keyboardInteraction,\n          keyboardInteraction = _this$props$keyboardI2 === void 0 ? true : _this$props$keyboardI2;\n      if (keyboardInteraction) document.removeEventListener(\"keyup\", this.keyboardNavigation);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var image = this.getCurrentImage(this.state, this.props);\n      var title = this.getCurrentTitle(this.state, this.props);\n\n      if (!image) {\n        console.warn(\"Not showing lightbox because no image(s) was supplied\");\n        return null;\n      }\n\n      var _this$props5 = this.props,\n          _this$props5$allowZoo = _this$props5.allowZoom,\n          allowZoom = _this$props5$allowZoo === void 0 ? true : _this$props5$allowZoo,\n          _this$props5$allowRot = _this$props5.allowRotate,\n          allowRotate = _this$props5$allowRot === void 0 ? true : _this$props5$allowRot,\n          _this$props5$buttonAl = _this$props5.buttonAlign,\n          buttonAlign = _this$props5$buttonAl === void 0 ? \"flex-end\" : _this$props5$buttonAl,\n          _this$props5$showTitl = _this$props5.showTitle,\n          showTitle = _this$props5$showTitl === void 0 ? true : _this$props5$showTitl,\n          _this$props5$allowRes = _this$props5.allowReset,\n          allowReset = _this$props5$allowRes === void 0 ? true : _this$props5$allowRes;\n      var _this$state2 = this.state,\n          x = _this$state2.x,\n          y = _this$state2.y,\n          zoom = _this$state2.zoom,\n          rotate = _this$state2.rotate,\n          multi = _this$state2.multi,\n          loading = _this$state2.loading,\n          moving = _this$state2.moving;\n\n      var _reset = allowReset && this.shouldShowReset();\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"lb-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"lb-header\",\n        style: {\n          justifyContent: buttonAlign\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cond, {\n        condition: showTitle && title\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"lb-title\",\n        style: {\n          display: buttonAlign === \"center\" ? \"none\" : \"flex\",\n          order: buttonAlign === \"flex-start\" ? \"2\" : \"unset\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        title: title,\n        style: {\n          textAlign: buttonAlign === \"flex-start\" ? \"right\" : \"left\"\n        }\n      }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cond, {\n        condition: buttonAlign === \"center\" || _reset\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Reset\",\n        style: {\n          order: buttonAlign === \"flex-start\" ? \"1\" : \"unset\"\n        },\n        className: \"lb-button lb-icon-reset lb-hide-mobile reload \".concat(_reset ? \"\" : \"lb-disabled\"),\n        onClick: this.reset\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cond, {\n        condition: multi\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Previous\",\n        className: \"lb-button lb-icon-arrow prev lb-hide-mobile\",\n        onClick: function onClick(e) {\n          return _this2.navigateImage(\"prev\", e);\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Next\",\n        className: \"lb-button lb-icon-arrow next lb-hide-mobile\",\n        onClick: function onClick(e) {\n          return _this2.navigateImage(\"next\", e);\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cond, {\n        condition: allowZoom\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Zoom In\",\n        className: \"lb-button lb-icon-zoomin zoomin\",\n        onClick: function onClick() {\n          return _this2.applyZoom(\"in\");\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Zoom Out\",\n        className: \"lb-button lb-icon-zoomout zoomout \".concat(zoom <= 1 ? \"lb-disabled\" : \"\"),\n        onClick: function onClick() {\n          return _this2.applyZoom(\"out\");\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cond, {\n        condition: allowRotate\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Rotate left\",\n        className: \"lb-button lb-icon-rotate rotatel\",\n        onClick: function onClick() {\n          return _this2.applyRotate(\"acw\");\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Rotate right\",\n        className: \"lb-button lb-icon-rotate rotater\",\n        onClick: function onClick() {\n          return _this2.applyRotate(\"cw\");\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Close\",\n        className: \"lb-button lb-icon-close close\",\n        style: {\n          order: buttonAlign === \"flex-start\" ? \"-1\" : \"unset\"\n        },\n        onClick: function onClick(e) {\n          return _this2.exit(e);\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"lb-canvas\".concat(loading ? \" lb-loading\" : \"\"),\n        ref: this._cont,\n        onClick: function onClick(e) {\n          return _this2.canvasClick(e);\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        draggable: \"false\",\n        style: {\n          transform: this.createTransform(x, y, zoom, rotate),\n          cursor: zoom > 1 ? \"grab\" : \"unset\",\n          transition: moving ? \"none\" : \"all 0.1s\"\n        },\n        onMouseDown: function onMouseDown(e) {\n          return _this2.startMove(e);\n        },\n        onTouchStart: function onTouchStart(e) {\n          return _this2.startMove(e);\n        },\n        onMouseMove: function onMouseMove(e) {\n          return _this2.duringMove(e);\n        },\n        onTouchMove: function onTouchMove(e) {\n          return _this2.duringMove(e);\n        },\n        onMouseUp: function onMouseUp(e) {\n          return _this2.endMove(e);\n        },\n        onMouseLeave: function onMouseLeave(e) {\n          return _this2.endMove(e);\n        },\n        onTouchEnd: function onTouchEnd(e) {\n          return _this2.endMove(e);\n        },\n        onClick: function onClick(e) {\n          return _this2.stopSideEffect(e);\n        },\n        onDoubleClick: function onDoubleClick(e) {\n          return _this2.shockZoom(e);\n        },\n        onWheel: function onWheel(e) {\n          return _this2.wheelZoom(e);\n        },\n        onLoad: function onLoad(e) {\n          return _this2.setState({\n            loading: false\n          });\n        },\n        className: \"lb-img\".concat(loading ? \" lb-loading\" : \"\"),\n        title: title,\n        src: image,\n        alt: title\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mobile-controls lb-show-mobile\"\n      }, multi ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Previous\",\n        className: \"lb-button lb-icon-arrow prev\",\n        onClick: function onClick(e) {\n          return _this2.navigateImage(\"prev\", e);\n        }\n      }) : null, _reset ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Reset\",\n        className: \"lb-button lb-icon-reset reload\",\n        onClick: this.reset\n      }) : null, multi ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        title: \"Next\",\n        className: \"lb-button lb-icon-arrow next\",\n        onClick: function onClick(e) {\n          return _this2.navigateImage(\"next\", e);\n        }\n      }) : null)));\n    }\n  }]);\n\n  return Lightbox;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });