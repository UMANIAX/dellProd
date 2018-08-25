webpackHotUpdate(6,{

/***/ "./pages/UserStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__("./pages/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__("./store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__HeadComp__ = __webpack_require__("./pages/HeadComp.js");
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/UserStore.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var UserStore =
/*#__PURE__*/
function (_Component) {
  _inherits(UserStore, _Component);

  function UserStore() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, UserStore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = UserStore.__proto__ || Object.getPrototypeOf(UserStore)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        loading: 1
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "user", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), Object.defineProperty(_assertThisInitialized(_this), "incomingData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: null
    }), _temp));
  }

  _createClass(UserStore, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref2) {
      var id = _ref2.query.id;
      this.user = id;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_2_axios___default()(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* serverLink */] + '/data/' + id).then(function (res) {
        _this2.incomingData = res;

        _this2.setState({
          loading: 0
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _incomingData = this.incomingData,
          products = _incomingData.products,
          customerMeta = _incomingData.customerMeta,
          customerML = _incomingData.customerML;
      var store = Object(__WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */])({
        products: products,
        customerMeta: customerMeta,
        customerML: customerML
      });
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__HeadComp__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), !this.state.loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__User__["a" /* default */], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }));
    }
  }]);

  return UserStore;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


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
//# sourceMappingURL=6.07816065aecbb18bf6bf.hot-update.js.map