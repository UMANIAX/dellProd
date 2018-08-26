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
var reviewProduct = function reviewProduct(asin, review, score) {
  return {
    type: __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].REVIEW_PRODUCT,
    asin: asin,
    review: review,
    score: score
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
          var _reviewData, _this$props, info, reviewed, store, _store$getState$custo, reviewCount, reviewSentiment, _ref2, data, score;

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
                  return __WEBPACK_IMPORTED_MODULE_5_axios_index___default.a.get("http://service-area.herokuapp.com/ibm?reviewText=".concat(_reviewData, "&reviewCount=").concat(reviewCount, "0&prevReviewScore=").concat(reviewSentiment));

                case 8:
                  _ref2 = _context.sent;
                  data = _ref2.data;
                  score = data.score;
                  store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_4__actions__["e" /* reviewProduct */])(info.asin, _reviewData, score));
                  reviewed(info);

                case 13:
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
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Review your product"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "ui form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        ref: "_reviewData",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "ui button complaint-button-pad",
        onClick: function onClick() {
          return b2p(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
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
      state.reviewSentiment = action.score;
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
//# sourceMappingURL=4.c12993bd5d243085cf78.hot-update.js.map