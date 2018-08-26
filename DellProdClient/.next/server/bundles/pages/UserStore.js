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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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


var uuidv1 = __webpack_require__("uuid/v1");

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
    complaintId: uuidv1(),
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

/***/ "./constants.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return serverLink; });
var serverLink = 'http://localhost:8080';
/* harmony default export */ __webpack_exports__["a"] = ({
  BUY_PRODUCT: 'BUY_PRODUCT',
  VIEW_PRODUCT: 'VIEW_PRODUCT',
  REVIEW_PRODUCT: 'REVIEW_PRODUCT',
  COMPLAINT_PRODUCT: 'COMPLAINT_PRODUCT',
  COMPLAINT_FEEDBACK: 'COMPLAINT_FEEDBACK',
  CHANGE_INIT_STATE: 'CHANGE_INIT_STATE'
});

/***/ }),

/***/ "./pages/ComplaintFeedBackModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stars_RatingStars__ = __webpack_require__("./pages/stars/RatingStars.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__("./actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
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
    }), Object.defineProperty(_assertThisInitialized(_this), "submitRating", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props = _this.props,
            info = _this$props.info,
            feedbackPut = _this$props.feedbackPut;
        var store = _this.context.store;
        store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["c" /* complaintFeedback */])(info.asin, _this.state.count));
        feedbackPut(info);
      }
    }), _temp));
  }

  _createClass(ComplaintFeedBackModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          info = _props.info,
          b2p = _props.b2p;
      var store = this.context.store;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment complaint-feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, "Please enter feedback of a specific complaint"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Rate your experience with our team"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__stars_RatingStars__["a" /* default */], {
        currentRate: this.state.count,
        update: this.updateRating,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        onClick: function onClick() {
          return _this2.submitRating();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Submit"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button complaint-button-pad",
        onClick: function onClick() {
          return b2p(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
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

/***/ }),

/***/ "./pages/ComplaintModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__("./actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProductModal__ = __webpack_require__("./pages/ProductModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
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
        var _this$props = _this.props,
            info = _this$props.info,
            complaintPut = _this$props.complaintPut;
        var store = _this.context.store;
        store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_1__actions__["d" /* complaintProduct */])(info.asin, _complaintData));
        complaintPut(info);
      }
    }), _temp));
  }

  _createClass(ComplaintModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          info = _props.info,
          b2p = _props.b2p;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment complaint",
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
      }, "Register new Complaint"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("form", {
        onSubmit: this.submit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "field",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("textarea", {
        ref: "_complaintData",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Submit")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button complaint-button-pad",
        onClick: function onClick() {
          return b2p(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, "Go Back"))));
    }
  }]);

  return ComplaintModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ComplaintModal.contextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};
/* harmony default export */ __webpack_exports__["a"] = (ComplaintModal);

/***/ }),

/***/ "./pages/HeadComp.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/HeadComp.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Title aayega yahan"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/semantic/dist/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.1.1.min.js",
    integrity: "sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("script", {
    src: "/static/semantic/dist/semantic.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/stylesheets/navbar.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/stylesheets/index.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/stylesheets/modal.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/static/stylesheets/star.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }));
});

/***/ }),

/***/ "./pages/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_stylesheets_navbar_css__ = __webpack_require__("./static/stylesheets/navbar.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_stylesheets_navbar_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_stylesheets_navbar_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/Navbar.js";




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var user = _ref.user;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "ui inverted menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "imgDim",
    src: "/static/dell-logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, user), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: "/SignIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "item right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Log Out")));
});

/***/ }),

/***/ "./pages/ProductCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProductModal__ = __webpack_require__("./pages/ProductModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ThankModal__ = __webpack_require__("./pages/ThankModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ReviewModal__ = __webpack_require__("./pages/ReviewModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ComplaintModal__ = __webpack_require__("./pages/ComplaintModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ComplaintFeedBackModal__ = __webpack_require__("./pages/ComplaintFeedBackModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("./actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_link__);
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ProductCard.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var ProductCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductCard, _Component);

  function ProductCard() {
    _classCallCheck(this, ProductCard);

    return _possibleConstructorReturn(this, (ProductCard.__proto__ || Object.getPrototypeOf(ProductCard)).apply(this, arguments));
  }

  _createClass(ProductCard, [{
    key: "render",
    value: function render() {
      var info = this.props.info;
      var showProduct = this.props.showProduct;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui link cards",
        id: info.asin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "$ ", info.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, info.description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "extra content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "right floated",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, info.categories), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "modal-button ui teal button",
        onClick: function onClick() {
          return showProduct(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "View")))));
    }
  }]);

  return ProductCard;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ProductCard);

/***/ }),

/***/ "./pages/ProductModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
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
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, info.description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, isBought ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui green button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Buy Now $ ", info.price) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui green button",
        onClick: function onClick() {
          store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* buyProduct */])(info.asin, info.categories));
          buy(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Buy Now $ ", info.price)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, !isBought || ongoingComplaint ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button red disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Issue Complain") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button red",
        onClick: function onClick() {
          return complaint(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Issue Complain")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, !isBought ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui pink button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Review") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui pink button",
        onClick: function onClick() {
          return review(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Review"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui horizontal segments",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, !isBought || !ongoingComplaint ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui orange button disabled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Complaint Feedback") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui orange button",
        onClick: function onClick() {
          return complaintFeedback(info);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Complaint Feedback")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        onClick: function onClick() {
          return b2h();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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

/***/ }),

/***/ "./pages/ProductPane.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProductCard__ = __webpack_require__("./pages/ProductCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ProductPane.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ProductPane =
/*#__PURE__*/
function (_Component) {
  _inherits(ProductPane, _Component);

  function ProductPane() {
    _classCallCheck(this, ProductPane);

    return _possibleConstructorReturn(this, (ProductPane.__proto__ || Object.getPrototypeOf(ProductPane)).apply(this, arguments));
  }

  _createClass(ProductPane, [{
    key: "render",
    value: function render() {
      var _this = this;

      var cat = this.props.cat;
      var store = this.context.store;

      var _store$getState = store.getState(),
          products = _store$getState.products;

      var displayProducts = products.filter(function (item) {
        return item.categories == cat;
      });
      if (!displayProducts.length) displayProducts = products;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "ui stackable five column grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, displayProducts.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "column",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__ProductCard__["a" /* default */], {
          showProduct: _this.props.showProduct,
          info: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }));
      }));
    }
  }]);

  return ProductPane;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

ProductPane.contextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};
/* harmony default export */ __webpack_exports__["a"] = (ProductPane);

/***/ }),

/***/ "./pages/ReviewModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ProductModal__ = __webpack_require__("./pages/ProductModal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions__ = __webpack_require__("./actions.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios_index__ = __webpack_require__("axios/index");
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

/***/ }),

/***/ "./pages/SideMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/SideMenu.js";

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var cat = _ref.cat,
      changeCat = _ref.changeCat;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "ui large vertical menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: cat === 0 ? "item active" : "item",
    onClick: function onClick() {
      return changeCat(0);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, "All Products"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: cat === 1 ? "item active" : "item",
    onClick: function onClick() {
      return changeCat(1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Category 1"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: cat === 2 ? "item active" : "item",
    onClick: function onClick() {
      return changeCat(2);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Category 2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: cat === 3 ? "item active" : "item",
    onClick: function onClick() {
      return changeCat(3);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Category 3"));
});

/***/ }),

/***/ "./pages/ThankModal.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/ThankModal.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ThankModal =
/*#__PURE__*/
function (_Component) {
  _inherits(ThankModal, _Component);

  function ThankModal() {
    _classCallCheck(this, ThankModal);

    return _possibleConstructorReturn(this, (ThankModal.__proto__ || Object.getPrototypeOf(ThankModal)).apply(this, arguments));
  }

  _createClass(ThankModal, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          info = _props.info,
          b2h = _props.b2h;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "ui segment bought",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, "Thank You"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "image content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: "image img-size",
        src: info.imgURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, info.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        className: "ui button",
        onClick: function onClick() {
          return b2h();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Back to Home"))));
    }
  }]);

  return ThankModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./pages/User.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Navbar__ = __webpack_require__("./pages/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SideMenu__ = __webpack_require__("./pages/SideMenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProductPane__ = __webpack_require__("./pages/ProductPane.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_stylesheets_index_css__ = __webpack_require__("./static/stylesheets/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_stylesheets_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_stylesheets_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_axios__ = __webpack_require__("axios");
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
        user: this.props.store.getState().customerMeta.username,
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
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ProductPane__["a" /* default */], {
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

/***/ }),

/***/ "./pages/UserStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("./pages/User.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
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
      localStorage['user'] = this.props.id;
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
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__HeadComp__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__User__["a" /* default */], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
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
                  incomingData: dbFetch.data,
                  id: id
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



/***/ }),

/***/ "./pages/stars/RatingStars.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Star__ = __webpack_require__("./pages/stars/Star.js");
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/stars/RatingStars.js";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var currentRate = _ref.currentRate,
      update = _ref.update;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _toConsumableArray(Array(5)).map(function (acc, ind) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Star__["a" /* default */], {
      key: ind,
      checked: ind < currentRate,
      onStarClick: function onStarClick() {
        return update(ind + 1);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    });
  }));
});

/***/ }),

/***/ "./pages/stars/Star.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/umaniax/WebstormProjects/Dell/DellProdClient/pages/stars/Star.js";


var Star = function Star(_ref) {
  var _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? true : _ref$checked,
      onStarClick = _ref.onStarClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: checked ? "fa fa-star check" : "fa fa-star",
    onClick: onStarClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Star);

/***/ }),

/***/ "./static/stylesheets/index.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/stylesheets/navbar.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./store/reducers.js");



var saveToLocal = function saveToLocal(store) {
  return function (next) {
    return function (action) {
      next(action);
      localStorage['redux-store'] = JSON.stringify(store.getState());
    };
  };
};

var storeFactory = function storeFactory() {
  var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(saveToLocal)(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    products: __WEBPACK_IMPORTED_MODULE_1__reducers__["c" /* products */],
    customerMeta: __WEBPACK_IMPORTED_MODULE_1__reducers__["b" /* customerMeta */],
    customerML: __WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* customerML */]
  }), // use combine reducers for multiple reducers
  initState // initial state
  );
};

/* harmony default export */ __webpack_exports__["a"] = (storeFactory);

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
      state = state.map(function (item) {
        item.asin === action.asin ? item.reviews.push(action.review) : null;
        return item;
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
      state.productsBought = state.productsBought.map(function (item) {
        item.asin === action.asin ? item.review = action.review : null;
        return item;
      });
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].COMPLAINT_PRODUCT:
      state.productsBought = state.productsBought.map(function (item) {
        if (item.asin === action.asin) item.complaint = {
          placedOn: new Date(),
          issue: action.complaint,
          onGoing: true,
          isNew: true,
          id: action.complaintId
        };
        return item;
      });
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].COMPLAINT_FEEDBACK:
      state.productsBought = state.productsBought.map(function (item) {
        if (item.asin === action.asin) {
          item.complaint.feedbackRating = action.rating;
          item.complaint.onGoing = false;
        }

        return item;
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
      state.isAltered = true;
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

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/UserStore.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "axios/index":
/***/ (function(module, exports) {

module.exports = require("axios/index");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "uuid/v1":
/***/ (function(module, exports) {

module.exports = require("uuid/v1");

/***/ })

/******/ });
//# sourceMappingURL=UserStore.js.map