webpackHotUpdate(4,{

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/lib/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./pages/ProductCard.js":
false,

/***/ "./pages/ProductPane.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ProductPane.js: Unexpected token (12:80)\n\n  10 |         const {store} = this.context\n  11 |         const {products} = store.getState()\n> 12 |         let displayProducts = products.filter(item => item.categories === cat ? return item)\n     |                                                                                 ^\n  13 | \n  14 |         if (!displayProducts)\n  15 |             displayProducts = products\n    at _class.raise (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2063:16)\n    at _class.parseExprAtom (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:3125:20)\n    at _class.parseExprAtom (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprAtom (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:8086:52)\n    at _class.parseExprSubscripts (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseConditional (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2603:32)\n    at _class.parseMaybeConditional (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2595:17)\n    at _class.parseMaybeAssign (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseFunctionBody (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:3714:24)\n    at _class.parseArrowExpression (/home/umaniax/WebstormProjects/Dell/DellProdClient/node_modules/babylon/lib/index.js:3674:10)");

/***/ }),

/***/ "./pages/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar__ = __webpack_require__("./pages/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SideMenu__ = __webpack_require__("./pages/SideMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProductPane__ = __webpack_require__("./pages/ProductPane.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProductPane___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ProductPane__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_stylesheets_index_css__ = __webpack_require__("./static/stylesheets/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_stylesheets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_stylesheets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ProductModal__ = __webpack_require__("./pages/ProductModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions__ = __webpack_require__("./actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ThankModal__ = __webpack_require__("./pages/ThankModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ReviewModal__ = __webpack_require__("./pages/ReviewModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ComplaintModal__ = __webpack_require__("./pages/ComplaintModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ComplaintFeedBackModal__ = __webpack_require__("./pages/ComplaintFeedBackModal.js");
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/User.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
















var User =
/*#__PURE__*/
function (_Component) {
  _inherits(User, _Component);

  function User() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        active: 'pane',
        info: 0
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "showProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        _this.props.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_9__actions__["f" /* viewProduct */])(info.asin, info.categories));

        _this.setState({
          active: 'product',
          info: info
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "thanks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        _this.setState({
          active: 'buy',
          info: info
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "backToHome", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.setState({
          active: 'pane',
          info: 'null'
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "backToProductModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        return _this.setState({
          active: 'product',
          info: info
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "reviewProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        _this.setState({
          active: 'review',
          info: info
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "complaintProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        _this.setState({
          active: 'complaint',
          info: info
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "complaintFeedback", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        _this.setState({
          active: 'complaintFeedback',
          info: info
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "sideMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(cat) {
        return _this.setState({
          active: 'pane',
          info: cat
        });
      }
    }), _temp));
  }

  _createClass(User, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        store: this.props.store
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.unsubscribe = this.props.store.subscribe(function () {
        return _this2.forceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui stackable four column grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "three wide column side-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SideMenu__["a" /* default */], {
        changeCat: this.sideMenu,
        cat: this.state.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), this.state.active === 'pane' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "twelve wide column product-pane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ProductPane__["default"], {
        cat: this.state.info,
        showProduct: this.showProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })) : this.state.active === 'product' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ProductModal__["a" /* default */], {
        buy: this.thanks,
        review: this.reviewProduct,
        complaint: this.complaintProduct,
        complaintFeedback: this.complaintFeedback,
        info: this.state.info,
        b2h: this.backToHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }) : this.state.active === 'buy' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ThankModal__["a" /* default */], {
        info: this.state.info,
        b2h: this.backToHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }) : this.state.active === 'review' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__ReviewModal__["a" /* default */], {
        info: this.state.info,
        reviewed: this.thanks,
        b2p: this.backToProductModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }) : this.state.active === 'complaint' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__ComplaintModal__["a" /* default */], {
        info: this.state.info,
        complaintPut: this.thanks,
        b2p: this.backToProductModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }) : this.state.active === 'complaintFeedback' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ComplaintFeedBackModal__["a" /* default */], {
        info: this.state.info,
        feedbackPut: this.thanks,
        b2p: this.backToProductModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }) : null));
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

User.childContextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (User);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/User")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.6d9ad12201e8c63c4746.hot-update.js.map