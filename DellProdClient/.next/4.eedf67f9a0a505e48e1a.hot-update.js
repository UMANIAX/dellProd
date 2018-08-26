webpackHotUpdate(4,{

/***/ "./actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return buyProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return viewProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reviewProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return complaintProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return complaintFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeInitState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./constants.js");

var buyProduct = function buyProduct(asin, cat) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].BUY_PRODUCT,
    asin: asin,
    categories: cat
  };
};
var viewProduct = function viewProduct(asin, cat) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].VIEW_PRODUCT,
    asin: asin,
    categories: cat
  };
};
var reviewProduct = function reviewProduct(asin, review) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].REVIEW_PRODUCT,
    asin: asin,
    review: review
  };
};
var complaintProduct = function complaintProduct(asin, complaint) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].COMPLAINT_PRODUCT,
    asin: asin,
    complaint: complaint
  };
};
var complaintFeedback = function complaintFeedback(asin, rating) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].COMPLAINT_FEEDBACK,
    asin: asin,
    rating: rating
  };
};
var changeInitState = function changeInitState(state) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].CHANGE_INIT_STATE,
    state: state
  };
};

/***/ }),

/***/ "./pages/ComplaintFeedBackModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stars_RatingStars__ = __webpack_require__("./pages/stars/RatingStars.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("./actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ComplaintFeedBackModal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var backModal = function backModal(id) {
  return $("#".concat(id, " .ui.modal.main")).modal('show');
};

var submitRating = function submitRating(rating, asin, store) {
  store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["c" /* complaintFeedback */])(asin, rating));
};

var ComplaintFeedBackModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ComplaintFeedBackModal, _Component);

  function ComplaintFeedBackModal() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ComplaintFeedBackModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ComplaintFeedBackModal.__proto__ || Object.getPrototypeOf(ComplaintFeedBackModal)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        count: 1
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "updateRating", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(newRating) {
        return _this.setState({
          count: newRating
        });
      }
    }), _temp));
  }

  _createClass(ComplaintFeedBackModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var info = this.props.info;
      var store = this.context.store;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui small modal complaint-feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Please enter feedback of a specific complaint"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Rate your experience with our team"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__stars_RatingStars__["a" /* default */], {
        currentRate: this.state.count,
        update: this.updateRating,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        onClick: function onClick() {
          return submitRating(_this2.state, info.asin, store);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Submit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button complaint-button-pad",
        onClick: function onClick() {
          return backModal(info.asin);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Go Back"))));
    }
  }]);

  return ComplaintFeedBackModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ComplaintFeedBackModal.contextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
/* harmony default export */ __webpack_exports__["a"] = (ComplaintFeedBackModal);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/ComplaintFeedBackModal")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/ComplaintModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./actions.js");
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ComplaintModal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var backModal = function backModal(id) {
  return $("#".concat(id, " .ui.modal.main")).modal('show');
};

var ComplaintModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ComplaintModal, _Component);

  function ComplaintModal() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ComplaintModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ComplaintModal.__proto__ || Object.getPrototypeOf(ComplaintModal)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var _complaintData = _this.refs._complaintData;
        _complaintData = _complaintData.value;
        var info = _this.props.info;
        var store = _this.context.store;
        store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions__["d" /* complaintProduct */])(info.asin, _complaintData));
      }
    }), _temp));
  }

  _createClass(ComplaintModal, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui tiny modal complaint",
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
      }, "Register new Complaint"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        ref: "_complaintData",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button complaint-button-pad",
        onClick: function onClick() {
          return backModal(info.asin);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "Go Back"))));
    }
  }]);

  return ComplaintModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/ComplaintModal")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ProductModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductModal, _Component);

  function ProductModal() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ProductModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ProductModal.__proto__ || Object.getPrototypeOf(ProductModal)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "buyModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(store, info, buy) {
        _this.props.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* buyProduct */])(info.asin, info.categories));

        buy(info);
      }
    }), _temp));
  }

  _createClass(ProductModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var store = this.context.store;
      var _props = this.props,
          buy = _props.buy,
          review = _props.review,
          complaint = _props.complaint,
          complaintFeedback = _props.complaintFeedback,
          info = _props.info;
      var productsBought = store.getState().customerMeta.productsBought;
      var isBought = 0;
      var ongoingComplaint = 0;
      productsBought.forEach(function (item) {
        return item.asin === info.asin ? function () {
          isBought = 1;
          item.complaint ? item.complaint.onGoing ? ongoingComplaint = 1 : null : null;
        } : null;
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, info.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, isBought ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui green button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Buy Now $ ", info.price) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui green button",
        onClick: function onClick() {
          return _this2.buyModal(store, info, buy);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
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
        className: "ui button red"
        /*onClick={() => this.complaintModal(info.asin)}*/
        ,
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
      }, isBought ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui pink button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "Review") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui pink button"
        /*onClick={() => this.reviewModal(info.asin)}*/
        ,
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
        className: "ui orange button"
        /*onClick={() => this.complaintFeedbackModal(info.asin)}*/
        ,
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

/***/ "./pages/ReviewModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductModal__ = __webpack_require__("./pages/ProductModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./actions.js");
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ReviewModal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      value: function value(e) {
        e.preventDefault();
        var _reviewData = _this.refs._reviewData;
        _reviewData = _reviewData.value;
        var info = _this.props.info;
        var store = _this.context.store;
        store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_3__actions__["e" /* reviewProduct */])(info.asin, _reviewData));
      }
    }), _temp));
  }

  _createClass(ReviewModal, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui tiny modal review",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Review your product"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        ref: "_reviewData",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button complaint-button-pad",
        onClick: function onClick() {
          return backModal(info.asin);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Go Back"))));
    }
  }]);

  return ReviewModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ReviewModal.contextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__BoughtModal__ = __webpack_require__("./pages/BoughtModal.js");
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
        active: 'pane'
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
    }), Object.defineProperty(_assertThisInitialized(_this), "buyProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info) {
        // this.props.store.dispatch(buyProduct(info.asin, info.categories))
        _this.setState({
          active: 'buy',
          info: info
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "reviewProduct", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(info, review) {
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
      value: function value(info, complaint) {
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
        buy: this.buyProduct,
        review: this.reviewProduct,
        complaint: this.complaintProduct,
        complaintFeedback: this.complaintFeedback,
        info: this.state.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }) : this.state.active === 'buy' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__BoughtModal__["a" /* default */], {
        info: this.state.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }) : this.state.active === 'review' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__ReviewModal__["a" /* default */], {
        info: this.state.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }) : this.state.active === 'complaint' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__ComplaintModal__["a" /* default */], {
        info: this.state.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }) : this.state.active === 'complaintFeedback' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ComplaintFeedBackModal__["a" /* default */], {
        info: this.state.info,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
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

/***/ "./pages/UserStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("./pages/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("./store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HeadComp__ = __webpack_require__("./pages/HeadComp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("./actions.js");

var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/UserStore.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var store = null;

var UserStore =
/*#__PURE__*/
function (_Component) {
  _inherits(UserStore, _Component);

  function UserStore() {
    _classCallCheck(this, UserStore);

    return _possibleConstructorReturn(this, (UserStore.__proto__ || Object.getPrototypeOf(UserStore)).apply(this, arguments));
  }

  _createClass(UserStore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      localStorage['redux-store'] ? store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions__["b" /* changeInitState */])(JSON.parse(localStorage['redux-store']))) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _props$incomingData = this.props.incomingData,
          products = _props$incomingData.products,
          customerMeta = _props$incomingData.customerMeta,
          customerML = _props$incomingData.customerML;
      store = Object(__WEBPACK_IMPORTED_MODULE_4__store__["a" /* default */])({
        products: products,
        customerMeta: customerMeta,
        customerML: customerML
      });
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__HeadComp__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var id, dbFetch;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.query.id;
                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_3_axios___default()(__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* serverLink */] + '/data/' + id);

              case 3:
                dbFetch = _context.sent;
                return _context.abrupt("return", {
                  incomingData: dbFetch.data
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return UserStore;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/UserStore")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.eedf67f9a0a505e48e1a.hot-update.js.map