webpackHotUpdate(4,{

/***/ "./pages/ReviewModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProductModal__ = __webpack_require__("./pages/ProductModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("./actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios_index__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios_index__);

var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ReviewModal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var backModal = function backModal(id) {
  return $("#".concat(id, " .ui.modal.main")).modal('show');
};

var ReviewModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ReviewModal, _Component);

  function ReviewModal() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ReviewModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ReviewModal.__proto__ || Object.getPrototypeOf(ReviewModal)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e) {
          var _reviewData, _this$props, info, reviewed, store, _store$getState$custo, reviewCount, reviewSentiment, score;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  _reviewData = _this.refs._reviewData;
                  _reviewData = _reviewData.value;
                  _this$props = _this.props, info = _this$props.info, reviewed = _this$props.reviewed;
                  store = _this.context.store;
                  _store$getState$custo = store.getState().customerML, reviewCount = _store$getState$custo.reviewCount, reviewSentiment = _store$getState$custo.reviewSentiment;
                  _context.next = 8;
                  return __WEBPACK_IMPORTED_MODULE_5_axios_index___default.a.get("https://service-area.herokuapp.com/ibm?reviewText=".concat(_reviewData, "&reviewCount=").concat(reviewCount + 1, "0&prevReviewScore=").concat(reviewSentiment));

                case 8:
                  score = _context.sent;
                  store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["e" /* reviewProduct */])(info.asin, _reviewData));
                  reviewed(info);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(ReviewModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          info = _props.info,
          b2p = _props.b2p;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "ui segment review",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Review your product"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "ui form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        ref: "_reviewData",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "ui button complaint-button-pad",
        onClick: function onClick() {
          return b2p(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "Go Back"))));
    }
  }]);

  return ReviewModal;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ReviewModal.contextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
/* harmony default export */ __webpack_exports__["a"] = (ReviewModal);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/ReviewModal")
  
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
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui stackable four column grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "three wide column side-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__SideMenu__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      })), this.state.active === 'pane' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "twelve wide column product-pane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ProductPane__["a" /* default */], {
        showProduct: this.showProduct,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
          lineNumber: 74
        }
      }) : this.state.active === 'buy' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__ThankModal__["a" /* default */], {
        info: this.state.info,
        b2h: this.backToHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }) : this.state.active === 'review' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__ReviewModal__["a" /* default */], {
        info: this.state.info,
        reviewed: this.thanks,
        b2p: this.backToProductModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }) : this.state.active === 'complaint' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__ComplaintModal__["a" /* default */], {
        info: this.state.info,
        complaintPut: this.thanks,
        b2p: this.backToProductModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }) : this.state.active === 'complaintFeedback' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ComplaintFeedBackModal__["a" /* default */], {
        info: this.state.info,
        feedbackPut: this.thanks,
        b2p: this.backToProductModal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
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

/***/ }),

/***/ "./store/reducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return customerMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customerML; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./constants.js");

var products = function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].REVIEW_PRODUCT:
      state.forEach(function (item) {
        return item.asin === action.asin ? item.reviews.push(action.review) : null;
      });
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CHANGE_INIT_STATE:
      return action.state.products;

    default:
      return state;
  }
};
var customerMeta = function customerMeta() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].BUY_PRODUCT:
      state.productsBought.push({
        asin: action.asin
      });
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].REVIEW_PRODUCT:
      state.productsBought.forEach(function (item) {
        return item.asin === action.asin ? item.review = action.review : null;
      });
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].COMPLAINT_PRODUCT:
      state.productsBought.forEach(function (item) {
        return item.asin === action.asin ? item.complaint = {
          placedOn: new Date(),
          issue: action.complaint,
          onGoing: true
        } : null;
      });
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].COMPLAINT_FEEDBACK:
      state.productsBought.forEach(function (item) {
        if (item.asin === action.asin) {
          item.complaint.feedbackRating = action.rating;
          item.complaint.onGoing = false;
        }
      });
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CHANGE_INIT_STATE:
      return action.state.customerMeta;

    default:
      return state;
  }
};
var customerML = function customerML() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].BUY_PRODUCT:
      state['c' + action.categories] -= 1;
      state['p' + action.categories] += 1;
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].VIEW_PRODUCT:
      state['c' + action.categories] += 1;
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].REVIEW_PRODUCT:
      state.reviewCount += 1;
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].COMPLAINT_FEEDBACK:
      state.feedbackCount += 1;
      state.serviceFeedbackSentiment = (state.serviceFeedbackSentiment + action.rating) / state.feedbackCount;
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CHANGE_INIT_STATE:
      return action.state.customerML;

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=4.8f9051e883eb41a35b4e.hot-update.js.map