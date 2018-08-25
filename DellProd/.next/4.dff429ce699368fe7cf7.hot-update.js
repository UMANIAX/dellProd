webpackHotUpdate(4,{

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers__ = __webpack_require__("./store/reducers.js");



var storeFactory = function storeFactory() {
  var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* createStore */])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* combineReducers */])({
    products: __WEBPACK_IMPORTED_MODULE_1__reducers__["b" /* products */],
    customer: __WEBPACK_IMPORTED_MODULE_1__reducers__["customer"]
  }), // use combine reducers for multiple reducers
  initState // initial state
  );
};

/* harmony default export */ __webpack_exports__["a"] = (storeFactory);

/***/ }),

/***/ "./store/reducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return products; });
/* unused harmony export customerMeta */
/* unused harmony export customerML */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__("./constants.js");

var products = function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].REVIEW_PRODUCT:
      state.customerMeta.productsBought.forEach(function (item) {
        return item.asin === action.asin ? item.review = action.review : null;
      });
      state.products.forEach(function (item) {
        return item.asin === action.asin ? item.reviews.push(action.review) : null;
      });
      return state;

    default:
      return state;
  }
};
var customerMeta = function customerMeta() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].BUY_PRODUCT:
      state.customerMeta.productsBought.push({
        asin: action.asin
      });
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].COMPLAINT_PRODUCT:
      state.customerMeta.productsBought.forEach(function (item) {
        return item.asin === action.asin ? item.complaint = {
          placedOn: new Date(),
          issue: action.complaint
        } : null;
      });
      return state;

    default:
      return state;
  }
};
var customerML = function customerML() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].BUY_PRODUCT:
      state.customerML['c' + action.categories] -= 1;
      state.customerML['p' + action.categories] += 1;
      return state;

    case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].VIEW_PRODUCT:
      state.customerML['c' + action.categories] += 1;
      return state;

    default:
      return state;
  }
};

/***/ })

})
//# sourceMappingURL=4.dff429ce699368fe7cf7.hot-update.js.map