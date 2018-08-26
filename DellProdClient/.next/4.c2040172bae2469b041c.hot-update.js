webpackHotUpdate(4,{

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
        item.asin === action.asin ? item.complaint = {
          placedOn: new Date(),
          issue: action.complaint,
          onGoing: true,
          isNew: true,
          id: action.complaintId
        } : null;
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

/***/ })

})
//# sourceMappingURL=4.c2040172bae2469b041c.hot-update.js.map