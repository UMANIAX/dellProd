webpackHotUpdate(4,{

/***/ "./pages/ProductModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("./actions.js");
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ProductModal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ProductModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductModal, _Component);

  function ProductModal() {
    _classCallCheck(this, ProductModal);

    return _possibleConstructorReturn(this, (ProductModal.__proto__ || Object.getPrototypeOf(ProductModal)).apply(this, arguments));
  }

  _createClass(ProductModal, [{
    key: "render",
    value: function render() {
      var store = this.context.store;
      var _props = this.props,
          buy = _props.buy,
          review = _props.review,
          complaint = _props.complaint,
          complaintFeedback = _props.complaintFeedback,
          info = _props.info,
          b2h = _props.b2h;
      var productsBought = store.getState().customerMeta.productsBought;
      var isBought = 0;
      var ongoingComplaint = 0;
      console.log(productsBought);
      productsBought.forEach(function (item) {
        if (item.asin === info.asin) {
          isBought = 1;
          item.complaint ? item.complaint.onGoing ? ongoingComplaint = 1 : null : null;
        }
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, info.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, isBought ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui green button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Buy Now $ ", info.price) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui green button",
        onClick: function onClick() {
          store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* buyProduct */])(info.asin, info.categories));
          buy(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Buy Now $ ", info.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, !isBought || ongoingComplaint ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button red disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Issue Complain") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button red",
        onClick: function onClick() {
          return complaint(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Issue Complain")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, !isBought ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui pink button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Review") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui pink button",
        onClick: function onClick() {
          return review(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, "Review"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, !isBought || !ongoingComplaint ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui orange button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Complaint Feedback") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui orange button",
        onClick: function onClick() {
          return complaintFeedback(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Complaint Feedback")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        onClick: function onClick() {
          return b2h();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Go Back"))))));
    }
  }]);

  return ProductModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ProductModal.contextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
/* harmony default export */ __webpack_exports__["a"] = (ProductModal);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/ProductModal")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar__ = __webpack_require__("./pages/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SideMenu__ = __webpack_require__("./pages/SideMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProductPane__ = __webpack_require__("./pages/ProductPane.js");
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
        info: null
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
    }), Object.defineProperty(_assertThisInitialized(_this), "reviewProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        // this.props.store.dispatch(reviewProduct(info.asin, review))
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
        // this.props.store.dispatch(complaintProduct(info.asin, complaint))
        _this.setState({
          active: 'complaint',
          info: info
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "complaintFeedback", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info, rating) {
        // this.props.store.dispatch(complaintFeedback(info.asin, rating))
        _this.setState({
          active: 'complaintFeedback',
          info: info
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
          lineNumber: 66
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui stackable four column grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "three wide column side-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SideMenu__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), this.state.active === 'pane' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "twelve wide column product-pane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ProductPane__["a" /* default */], {
        showProduct: this.showProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
          lineNumber: 75
        }
      }) : this.state.active === 'buy' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ThankModal__["a" /* default */], {
        info: this.state.info,
        b2h: this.backToHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }) : this.state.active === 'review' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__ReviewModal__["a" /* default */], {
        info: this.state.info,
        reviewed: this.thanks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }) : this.state.active === 'complaint' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__ComplaintModal__["a" /* default */], {
        info: this.state.info,
        complaintPut: this.thanks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }) : this.state.active === 'complaintFeedback' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ComplaintFeedBackModal__["a" /* default */], {
        info: this.state.info,
        feedbackPut: this.thanks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
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
//# sourceMappingURL=4.0c7cc9c81547b62eb87a.hot-update.js.map