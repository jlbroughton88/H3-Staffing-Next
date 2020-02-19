webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/comps/navbar.js":
/*!*******************************!*\
  !*** ./pages/comps/navbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/static/css/navbar.scss */ "./public/static/css/navbar.scss");
/* harmony import */ var _public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/JacobBroughton/coding/work/H3-Staffing-Next/pages/comps/navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Navbar = function Navbar() {
  var _useAuth = Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_3__["useAuth"])(),
      isLoading = _useAuth.isLoading,
      loginWithRedirect = _useAuth.loginWithRedirect,
      logout = _useAuth.logout,
      user = _useAuth.user; //   let authorized;
  //   useEffect(() => {
  //     if(user) {
  //           if (user.email === "jlbroughton88@gmail.com" || user.email === "ablue@h3staffing.com" || user.email === "deberry@deberrycompany.com") {
  //       authorized = true;
  //     } else {
  //       let navLogOut = document.getElementById("navLogOut");
  //       navLogOut.style.borderBottom = "2px solid #333";
  //     }
  //     }
  //   }, [user])


  return __jsx("nav", {
    className: "navMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "navMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("section", {
    className: "leftNav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "logoDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "H3 Staffing")))), __jsx("section", {
    className: "rightNav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "loginLogoutSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "loggedOutSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Log In")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.5345939ab425b4be0e6e.hot-update.js.map