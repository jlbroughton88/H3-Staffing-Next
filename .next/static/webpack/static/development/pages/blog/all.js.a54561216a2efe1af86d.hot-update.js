webpackHotUpdate("static/development/pages/blog/all.js",{

/***/ "./pages/blog/all.js":
/*!***************************!*\
  !*** ./pages/blog/all.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_css_allposts_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/css/allposts.scss */ "./public/static/css/allposts.scss");
/* harmony import */ var _public_static_css_allposts_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_allposts_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/navbar */ "./pages/comps/navbar.js");
/* harmony import */ var _comps_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/footer */ "./pages/comps/footer.js");
/* harmony import */ var _comps_contexts_envProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comps/contexts/envProvider */ "./pages/comps/contexts/envProvider.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/Users/JacobBroughton/coding/work/H3-Staffing-Next/pages/blog/all.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var All = function All(posts) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      allPosts = _useState[0],
      setPosts = _useState[1];

  var statusUrl = Object(_comps_contexts_envProvider__WEBPACK_IMPORTED_MODULE_7__["useEnv"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    // setPosts([posts.json][0]);
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("".concat(statusUrl, "/api/blog/all")).then(function (res) {
      return setPosts(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data));
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "allMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    className: "allHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "All Posts"), __jsx("div", {
    className: "postGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, allPosts.length !== 0 ? allPosts.reverse().map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: post.uid,
      href: "/blog/".concat(post.uid),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      key: post.uid,
      className: "blogPost",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("h3", {
      className: "blogTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, post.title), __jsx("div", {
      className: "dateTimeDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("p", {
      className: "blogTime",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, post.time_created), __jsx("p", {
      className: "blogDate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, post.date_created)), __jsx("hr", {
      className: "blogsHr",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), post.blog_text.length > 150 ? __jsx("p", {
      className: "blogText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, post.blog_text.slice(0, 150), "...") : __jsx("p", {
      className: "blogText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, post.blog_text)));
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "No posts yet")))), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }));
}; // All.getInitialProps = async ctx => {
//   const res = await fetch(`${statusUrl}/api/blog/all`);
//   const json = await res.json();
//   return { json };
// };


/* harmony default export */ __webpack_exports__["default"] = (All);

/***/ })

})
//# sourceMappingURL=all.js.a54561216a2efe1af86d.hot-update.js.map