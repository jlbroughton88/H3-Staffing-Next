webpackHotUpdate("static/development/pages/blog/[uid].js",{

/***/ "./pages/blog/[uid].js":
/*!*****************************!*\
  !*** ./pages/blog/[uid].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_contexts_envProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/contexts/envProvider */ "./pages/comps/contexts/envProvider.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/navbar */ "./pages/comps/navbar.js");
/* harmony import */ var _comps_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/footer */ "./pages/comps/footer.js");
/* harmony import */ var _public_static_css_single_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/static/css/single.scss */ "./public/static/css/single.scss");
/* harmony import */ var _public_static_css_single_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_single_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/JacobBroughton/coding/work/H3-Staffing-Next/pages/blog/[uid].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Single = function Single() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var uid = router.query.uid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      post = _useState[0],
      setPost = _useState[1];

  var statusUrl = Object(_comps_contexts_envProvider__WEBPACK_IMPORTED_MODULE_1__["useEnv"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("".concat(statusUrl, "/api/blog/").concat(uid)).then(function (response) {
      return setPost(response.data[0]);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, [uid]); //   useEffect(() => {}, [post])

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "singleMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "singleMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, post === undefined ? __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Loading") : __jsx("div", {
    className: "singlePostContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h1", {
    className: "singleTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, post.title), __jsx("p", {
    className: "singleText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, post.blog_text), __jsx("hr", {
    className: "singleHr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "dateTimeSingle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("p", {
    className: "singleTime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, post.time_created), __jsx("p", {
    className: "singleDate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, post.date_created))))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Single);

/***/ })

})
//# sourceMappingURL=[uid].js.9c9f1e7b54b5b59ab3a4.hot-update.js.map