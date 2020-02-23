webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_icons_downArrow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/icons/downArrow.js */ "./pages/comps/icons/downArrow.js");
/* harmony import */ var _comps_icons_checkMark_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/icons/checkMark.js */ "./pages/comps/icons/checkMark.js");
/* harmony import */ var _comps_icons_quotes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/icons/quotes.js */ "./pages/comps/icons/quotes.js");
/* harmony import */ var _public_static_images_img1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/static/images/img1.jpg */ "./public/static/images/img1.jpg");
/* harmony import */ var _public_static_images_img1_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_img1_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _comps_navbar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/navbar.js */ "./pages/comps/navbar.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _comps_footer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/footer.js */ "./pages/comps/footer.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! use-auth0-hooks */ "./node_modules/use-auth0-hooks/dist/index.js");
/* harmony import */ var use_auth0_hooks__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_static_css_index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/static/css/index.scss */ "./public/static/css/index.scss");
/* harmony import */ var _public_static_css_index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_index_scss__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/JacobBroughton/coding/work/H3-Staffing-Next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var Index = function Index(posts) {
  var testiArray = [{
    testi: "nsectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "Software Engineer"
  }, {
    testi: "dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "Software Engineer"
  }, {
    testi: "um dolor sit amenstur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    role: "Software Engineer"
  }, {
    testi: "uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "Software Engineer"
  }, {
    testi: "Lre et dolore magna aliqua. Ut enim ad minim ve quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "Software Engineer"
  }, {
    testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qunostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. r. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "Software Engineer"
  }, {
    testi: "Lorem ipsum dolor sit amet, consectetuscing elit, se do eiusmod tempor incididunt ut labot dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ie velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "Software Engineer"
  }, {
    testi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, se iusmod tempor indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    role: "Software Engineer"
  }, {
    testi: "Lorem ipsum dlor sit amet, consectetur adipiscing elit, se do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    role: "Software Engineer"
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("seeker"),
      currentSlide = _useState[0],
      setSlide = _useState[1];

  var currentArr = [];

  var _useAuth = Object(use_auth0_hooks__WEBPACK_IMPORTED_MODULE_11__["useAuth"])(),
      isAuthenticated = _useAuth.isAuthenticated,
      user = _useAuth.user;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      allPosts = _useState2[0],
      setPosts = _useState2[1];

  var seekerEmployerArray = {
    seeker: ["Completely free for job seekers.", "Dedicated to getting you a great role.", "Close relationships to important decision makers."],
    employer: ["Employer sample phrase 1", "Employer sample phrase 2", "Employer sample phrase 3"]
  };
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log("below is from useEffect"); // console.log([posts.json][0])

    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("https://h3-staffing.now.sh/api/blog/all").then(function (res) {
      return setPosts(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res.data));
    })["catch"](function (err) {
      return console.log(err);
    }); // setPosts([posts.json][0]);

    var seekerSlide = document.getElementById("seekerBtn");
    seekerSlide.classList.add("active");

    if (isAuthenticated) {
      console.log(user);
    }
  }, []);

  var handleSeekerClick = function handleSeekerClick() {
    var seekerSlide = document.getElementById("seekerBtn");
    var employerSlide = document.getElementById("employerBtn");
    setSlide("seeker");
    employerSlide.classList.remove("active");
    seekerSlide.classList.add("active");
  };

  var handleEmployerClick = function handleEmployerClick() {
    var seekerSlide = document.getElementById("seekerBtn");
    var employerSlide = document.getElementById("employerBtn");
    setSlide("employer");
    seekerSlide.classList.remove("active");
    employerSlide.classList.add("active");
  };

  if (currentSlide === "seeker") {
    currentArr = seekerEmployerArray.seeker;
  } else if (currentSlide === "employer") {
    currentArr = seekerEmployerArray.employer;
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_comps_navbar_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("div", {
    className: "home1Mother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "home1Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: "home1HeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("h2", {
    className: "home1Head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "or")), __jsx("div", {
    className: "home1CTADiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/jobs/#!/search?page=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("button", {
    className: "home1CTA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Find A Job")))), __jsx("div", {
    className: "arrowDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_comps_icons_downArrow_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "downArrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })))), __jsx("div", {
    className: "home2Mother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("div", {
    className: "home2Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("div", {
    className: "discoverHeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("h1", {
    className: "discoverHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Discover The")), __jsx("div", {
    className: "seekerEmployeeDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("div", {
    className: "seekerEmployerSlider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("button", {
    onClick: handleSeekerClick,
    id: "seekerBtn",
    className: "slideBtn seekerSlide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Job Seeker"), __jsx("button", {
    onClick: handleEmployerClick,
    id: "employerBtn",
    className: "slideBtn employerSlide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Employer"))), __jsx("div", {
    className: "checkListDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("div", {
    className: "checkListParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    className: "checkList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, currentArr.map(function (item) {
    return __jsx("div", {
      className: "checkListItemParent",
      key: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("div", {
      className: "checkListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("div", {
      className: "iconDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx(_comps_icons_checkMark_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "checkListIcon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    })), __jsx("p", {
      className: "checkListPara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, item)));
  })))), __jsx("div", {
    className: "coreValuesParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("div", {
    className: "valuesHeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("h1", {
    className: "valuesHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Our Core Values")), __jsx("div", {
    className: "valuesContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("div", {
    className: "valuesParaDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("div", {
    className: "valuesPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Our clients and candidates are our only concern. They are why we exist. Everything we do is to help our clients find superior talent and our candidates realize their career ambitions. \u2029\u2029", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }), "Our job at H3 is very simple: to build lasting relationships with everyone we meet, to listen deeply, and to", " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "honestly care"), ".")), __jsx("div", {
    className: "valuesListDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("div", {
    className: "valuesList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("div", {
    className: "valueItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Diligence"), __jsx("div", {
    className: "valueItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Integrity"), __jsx("div", {
    className: "valueItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, "Genuine"), __jsx("div", {
    className: "valueItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Responsiveness"), __jsx("div", {
    className: "valueItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "Synergistic"), __jsx("div", {
    className: "valueItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "Professionalism"))))))), __jsx("div", {
    className: "home3Mother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("div", {
    className: "home3Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, __jsx("div", {
    className: "overviewHeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, __jsx("h2", {
    className: "overviewHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, "A Brief Overview of H3 Staffing")), __jsx("div", {
    className: "overviewSectParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("div", {
    className: "overviewSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("div", {
    className: "overviewImgSect2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("div", {
    className: "overviewParaDiv2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx("p", {
    className: "overviewPara2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, "At H3 Staffing we work hard to understand your complex staffing needs and work efficiently to find the perfect marriage between employer and employee. ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), " \u2029Having a combined total of ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "10 years"), " ", "of Staffing experience, our mission is to build meaningful relationships. It\u2019s what we\u2019re about. ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), "\u2029We\u2019ve got connections that count, experience that makes all the difference, deep working relationships that matter and the right recruiting team who\u2019s got your back.")), __jsx("img", {
    className: "overviewImg2",
    src: _public_static_images_img1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Women sitting with computers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  })), __jsx("div", {
    className: "overviewParaDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx("p", {
    className: "overviewPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "At H3 Staffing we work hard to understand your complex staffing needs and work efficiently to find the perfect marriage between employer and employee. ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }), " \u2029Having a combined total of ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, "10 years"), " ", "of Staffing experience, our mission is to build meaningful relationships. It\u2019s what we\u2019re about. ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }), "\u2029We\u2019ve got connections that count, experience that makes all the difference, deep working relationships that matter and the right recruiting team who\u2019s got your back.")), __jsx("div", {
    className: "briefSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("div", {
    className: "briefDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("h3", {
    className: "briefHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "We Provide Consistent, Professional, Quality Service"), __jsx("p", {
    className: "briefPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "We do whatever it takes to build client and consultant loyalty.")), __jsx("div", {
    className: "briefDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, __jsx("h3", {
    className: "briefHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "We Take Care Of Our People"), __jsx("p", {
    className: "briefPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "We understand that our success is because of our people.")), __jsx("div", {
    className: "briefDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, __jsx("h3", {
    className: "briefHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, "We Work Together"), __jsx("p", {
    className: "briefPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, "By working as a synchronized, organized team; we are able to provide a better, more\u2029professional service than anyone else.")))), __jsx("div", {
    className: "overviewImgSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx("img", {
    className: "overviewImg",
    src: _public_static_images_img1_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Women sitting with computers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }))), __jsx("div", {
    className: "briefSect2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx("div", {
    className: "briefDiv2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx("h3", {
    className: "briefHead2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "We Provide Consistent, Professional, Quality Service"), __jsx("p", {
    className: "briefPara2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, "We do whatever it takes to build client and consultant loyalty.")), __jsx("div", {
    className: "briefDiv2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, __jsx("h3", {
    className: "briefHead2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, "We Take Care Of Our People"), __jsx("p", {
    className: "briefPara2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "We understand that our success is because of our people.")), __jsx("div", {
    className: "briefDiv2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, __jsx("h3", {
    className: "briefHead2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "We Work Together"), __jsx("p", {
    className: "briefPara2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, "By working as a synchronized, organized team; we are able to provide a better, more\u2029 professional service than anyone else."))))), __jsx("div", {
    className: "home4Mother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, __jsx("div", {
    className: "home4Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, __jsx("div", {
    className: "home4HeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, __jsx("h2", {
    className: "home4Head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, "How can we help?")), __jsx("div", {
    className: "servicesGridDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, __jsx("div", {
    className: "servicesGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, __jsx("h3", {
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Permanent Placements"), __jsx("p", {
    className: "servicePara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, "Looking for that long term answer \u2029to be an integral part of your \u2029business?")), __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx("h3", {
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, "Contract Services"), __jsx("p", {
    className: "servicePara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "Have a short term need?\u2029 Want to ensure that you have \u2029the right cultural fit to go along \u2029with the skills required?")), __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, __jsx("h3", {
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "Consultants"), __jsx("p", {
    className: "servicePara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, "Whether you prefer the flexibility\u2029 of contract work, or the stability \u2029of full-time placement, we're here \u2029to help you find it.")))), __jsx("div", {
    className: "letsTalkDiv1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, __jsx("div", {
    className: "letsTalkHeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, __jsx("h2", {
    className: "letsTalkHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, "Lets make it happen."))))), __jsx("div", {
    className: "home5Mother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, __jsx("div", {
    className: "home5Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, __jsx("div", {
    className: "home5HeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, __jsx("h1", {
    className: "home5Head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, "Testimonials")), __jsx("div", {
    className: "scrollingDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, testiArray.map(function (item) {
    return __jsx("div", {
      key: item.testi,
      className: "testimonialBoxParent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412
      },
      __self: this
    }, __jsx(_comps_icons_quotes_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "quotes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: this
    }), __jsx("div", {
      className: "testimonialBox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: this
    }, __jsx("p", {
      className: "testimonialPara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: this
    }, " ", item.testi, " ")), __jsx("div", {
      className: "testimonialRoleDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417
      },
      __self: this
    }, __jsx("p", {
      className: "testimonialRole",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418
      },
      __self: this
    }, item.role)));
  })))), __jsx("div", {
    className: "letsTalkMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, __jsx("div", {
    className: "letsTalkMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx("div", {
    className: "letsTalkBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:h3staffing@gmail.com?Subject=Website%20Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, __jsx("h1", {
    className: "letsTalkHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, "Lets Talk"))))), __jsx("div", {
    className: "blogMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }, __jsx("div", {
    className: "blogMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, __jsx("h1", {
    className: "blogHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444
    },
    __self: this
  }, "H3 Blog"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/blog/all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, __jsx("button", {
    className: "blogViewAllBtn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, "View All"))), __jsx("div", {
    className: "postGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }, console.log("below is in the html"), console.log(allPosts), console.log(typeof allPosts), allPosts.length !== 0 ? allPosts.splice(0, 3).map(function (post) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: post.uid,
      href: "/blog/".concat(post.uid),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456
      },
      __self: this
    }, __jsx("div", {
      key: post.uid,
      className: "blogPost",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457
      },
      __self: this
    }, __jsx("h3", {
      className: "blogTitle",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458
      },
      __self: this
    }, post.title), __jsx("div", {
      className: "dateTimeDiv",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459
      },
      __self: this
    }, __jsx("p", {
      className: "blogTime",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460
      },
      __self: this
    }, post.time_created), __jsx("p", {
      className: "blogDate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461
      },
      __self: this
    }, post.date_created)), __jsx("hr", {
      className: "blogsHr",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463
      },
      __self: this
    }), post.blog_text.length > 150 ? __jsx("p", {
      className: "blogText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465
      },
      __self: this
    }, post.blog_text.slice(0, 150), "...") : __jsx("p", {
      className: "blogText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467
      },
      __self: this
    }, post.blog_text)));
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, "No posts yet"))))), __jsx(_comps_footer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }));
}; // Index.getInitialProps = async(ctx) => {
//   const res = await fetch("https://h3-staffing.now.sh/api/blog/all")
//   const json = await res.json();
//   console.log("below is from getInitialProps")
//   console.log(json)
//   return { json }
// }


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b495ee38f14ea48c7bfb.hot-update.js.map