webpackHotUpdate(6,{

/***/ "./store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
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
  return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */])(saveToLocal)(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* createStore */])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* combineReducers */])({
    products: __WEBPACK_IMPORTED_MODULE_1__reducers__["c" /* products */],
    customerMeta: __WEBPACK_IMPORTED_MODULE_1__reducers__["b" /* customerMeta */],
    customerML: __WEBPACK_IMPORTED_MODULE_1__reducers__["a" /* customerML */]
  }), // use combine reducers for multiple reducers
  initState // initial state
  );
};

/* harmony default export */ __webpack_exports__["a"] = (storeFactory);

/***/ })

})
//# sourceMappingURL=6.aa1be37147e094fdfff3.hot-update.js.map