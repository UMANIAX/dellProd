webpackHotUpdate(5,{

/***/ "./constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serverLink; });
var serverLink = 'https://dellnode.herokuapp.com'; //'http://localhost:8080'

/* unused harmony default export */ var _unused_webpack_default_export = ({
  BUY_PRODUCT: 'BUY_PRODUCT',
  VIEW_PRODUCT: 'VIEW_PRODUCT',
  REVIEW_PRODUCT: 'REVIEW_PRODUCT',
  COMPLAINT_PRODUCT: 'COMPLAINT_PRODUCT',
  COMPLAINT_FEEDBACK: 'COMPLAINT_FEEDBACK',
  CHANGE_INIT_STATE: 'CHANGE_INIT_STATE'
});

/***/ }),

/***/ "./pages/SignIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeadComp__ = __webpack_require__("./pages/HeadComp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("./constants.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);

var _jsxFileName = "/home/umaniax/WebstormProjects/Dell_SNU_Hackathon_2018/dellSiteProtoType/dellProd/DellProdClient/pages/SignIn.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var SignIn =
/*#__PURE__*/
function (_Component) {
  _inherits(SignIn, _Component);

  function SignIn() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SignIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        loading: 0
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "submit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e) {
          var _this$refs, _username, _password;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.setState({
                    loading: 1
                  });

                  e.preventDefault();
                  _this$refs = _this.refs, _username = _this$refs._username, _password = _this$refs._password;
                  _username = _username.value;
                  _password = _password.value; // const {data} = await axios.post(serverLink + '/login', {user: _username})

                  window.location = '/UserStore/' + _username;

                case 6:
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
    }), Object.defineProperty(_assertThisInitialized(_this), "loaderHTML", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "ui icon message",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "notched circle loading icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        }, "Just one second"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, "We're fetching that content for you.")));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "signIn", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "custom-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__HeadComp__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "ui container segment ".concat(_this.state.loading ? 'loading' : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
          className: "ui form",
          onSubmit: _this.submit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, "Username"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
          type: "text",
          name: "username",
          placeholder: "Username",
          ref: "_username",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, "Password"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          ref: "_password",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          className: "ui button",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, "Submit"))), _this.state.loading ? _this.loaderHTML() : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }));
      }
    }), _temp));
  }

  _createClass(SignIn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage['user']) {
        if (localStorage['redux-store']) {
          __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_3__constants__["a" /* serverLink */] + '/sessionData', JSON.parse(localStorage['redux-store']));
          delete localStorage['redux-store'];
        }

        delete localStorage['user'];
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.signIn());
    }
  }]);

  return SignIn;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/SignIn")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.b8b9723557905b4765e8.hot-update.js.map