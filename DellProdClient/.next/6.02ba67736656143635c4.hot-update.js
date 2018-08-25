webpackHotUpdate(6,{

/***/ "./pages/product/modals/ProductModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("./actions.js");
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/product/modals/ProductModal.js";


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
      value: function value(id, store, cat) {
        $("#".concat(id, " .ui.modal.bought")).modal('show');
        store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* buyProduct */])(id, cat));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "reviewModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        return $("#".concat(id, " .ui.modal.review")).modal('show');
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "complaintModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        return $("#".concat(id, " .ui.modal.complaint")).modal('show');
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "complaintFeedbackModal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        return $("#".concat(id, " .ui.modal.complaint-feedback")).modal('show');
      }
    }), _temp));
  }

  _createClass(ProductModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var info = this.props.info;
      var store = this.context.store;
      var productsBought = store.getState().customerMeta.productsBought;
      var isBought = 0;
      var ongoingComplaint = 0;
      console.log(store.getState());
      productsBought.forEach(function (item) {
        return item.asin === info.asin ? function () {
          isBought = 1;
          item.complaint ? item.complaint.onGoing ? ongoingComplaint = 1 : null : null;
        } : null;
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui modal main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, info.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, isBought ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui green button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Buy Now $ ", info.price) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui green button",
        onClick: function onClick() {
          return _this2.buyModal(info.asin, store, info.categories);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Buy Now $ ", info.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, !isBought || ongoingComplaint ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button red disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Issue Complain") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button red",
        onClick: function onClick() {
          return _this2.complaintModal(info.asin);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Issue Complain")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, isBought ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui pink button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "Review") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui pink button",
        onClick: function onClick() {
          return _this2.reviewModal(info.asin);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Review"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, !isBought || !ongoingComplaint ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui orange button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Complaint Feedback") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui orange button",
        onClick: function onClick() {
          return _this2.complaintFeedbackModal(info.asin);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Complaint Feedback")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/product/modals/ProductModal")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.02ba67736656143635c4.hot-update.js.map