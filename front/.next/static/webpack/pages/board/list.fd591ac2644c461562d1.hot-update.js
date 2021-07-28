self["webpackHotUpdate_N_E"]("pages/board/list",{

/***/ "./components/public/LinkBtn.jsx":
/*!***************************************!*\
  !*** ./components/public/LinkBtn.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Btn": function() { return /* binding */ Btn; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\components\\public\\LinkBtn.jsx",
    _this = undefined;



var StyledBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "LinkBtn__StyledBtn",
  componentId: "sc-1uzpjs8-0"
})(["display:inline;padding:7px 14px;color:black;border:1px solid black;border-radius:5px;"]);
_c = StyledBtn;
var Btn = function Btn(props) {
  var value = props.value,
      link = props.link;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBtn, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: link,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: [" ", value, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
}; //div는 나중에 스타일드 컴포넌트 주기.
//img도 받아서 버튼에 이미지도 넣어주기. 글쓰기는 펜, 검색은 돋보기. 인기글은 별 이런식으로

_c2 = Btn;

var _c, _c2;

$RefreshReg$(_c, "StyledBtn");
$RefreshReg$(_c2, "Btn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/board/list.jsx":
/*!******************************!*\
  !*** ./pages/board/list.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_public_LinkBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/public/LinkBtn */ "./components/public/LinkBtn.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\board\\list.jsx",
    _this = undefined;



var List = function List() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_public_LinkBtn__WEBPACK_IMPORTED_MODULE_1__.Btn, {
      value: "\uC804\uCCB4\uAE00",
      link: "/board/list?type=all&page=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_public_LinkBtn__WEBPACK_IMPORTED_MODULE_1__.Btn, {
      value: "\uC778\uAE30\uAE00",
      link: "/board/write?type=hot&page=1?"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_public_LinkBtn__WEBPACK_IMPORTED_MODULE_1__.Btn, {
      value: "\uAE00\uC4F0\uAE30",
      link: "/board/write"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_c = List;
/* harmony default export */ __webpack_exports__["default"] = (List);

var _c;

$RefreshReg$(_c, "List");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wdWJsaWMvTGlua0J0bi5qc3giLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2JvYXJkL2xpc3QuanN4Il0sIm5hbWVzIjpbIlN0eWxlZEJ0biIsInN0eWxlZCIsIkJ0biIsInByb3BzIiwidmFsdWUiLCJsaW5rIiwiTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsNkZBQWY7S0FBTUQsUztBQVNDLElBQU1FLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BQ3JCQyxLQURxQixHQUNQRCxLQURPLENBQ3JCQyxLQURxQjtBQUFBLE1BQ2ZDLElBRGUsR0FDUEYsS0FETyxDQUNmRSxJQURlO0FBRTVCLHNCQUNFLDhEQUFDLFNBQUQ7QUFBQSwyQkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRUEsSUFBWjtBQUFBLDZCQUFrQjtBQUFBLHdCQUFLRCxLQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FQTSxDLENBVVA7QUFDQTs7TUFYYUYsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaYjs7QUFFQSxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBRWpCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBSyxXQUFLLEVBQUMsb0JBQVg7QUFBaUIsVUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLDhEQUFDLDJEQUFEO0FBQUssV0FBSyxFQUFDLG9CQUFYO0FBQWlCLFVBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSw4REFBQywyREFBRDtBQUFLLFdBQUssRUFBQyxvQkFBWDtBQUFpQixVQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUEsa0JBREY7QUFPRCxDQVREOztLQUFNQSxJO0FBV04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmQvbGlzdC5mZDU5MWFjMjY0NGM0NjE1NjJkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IFN0eWxlZEJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDdweCAxNHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCdG4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7dmFsdWUsbGlua30gPSBwcm9wczsgXHJcbiAgcmV0dXJuKFxyXG4gICAgPFN0eWxlZEJ0bj5cclxuICAgICAgPExpbmsgaHJlZj17bGlua30+PGE+IHt2YWx1ZX0gPC9hPjwvTGluaz5cclxuICAgIDwvU3R5bGVkQnRuPlxyXG4gIClcclxufVxyXG5cclxuXHJcbi8vZGl264qUIOuCmOykkeyXkCDsiqTtg4Dsnbzrk5wg7Lu07Y+s64SM7Yq4IOyjvOq4sC5cclxuLy9pbWfrj4Qg67Cb7JWE7IScIOuyhO2KvOyXkCDsnbTrr7jsp4Drj4Qg64Sj7Ja07KO86riwLiDquIDsk7DquLDripQg7Y6cLCDqsoDsg4nsnYAg64+L67O06riwLiDsnbjquLDquIDsnYAg67OEIOydtOufsOyLneycvOuhnCIsImltcG9ydCB7IEJ0biB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3B1YmxpYy9MaW5rQnRuXCJcclxuXHJcbmNvbnN0IExpc3QgPSAoKSA9PiB7IFxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICA8QnRuIHZhbHVlPSfsoITssrTquIAnIGxpbms9XCIvYm9hcmQvbGlzdD90eXBlPWFsbCZwYWdlPTFcIi8+XHJcbiAgICAgIDxCdG4gdmFsdWU9J+yduOq4sOq4gCcgbGluaz1cIi9ib2FyZC93cml0ZT90eXBlPWhvdCZwYWdlPTE/XCIvPlxyXG4gICAgICA8QnRuIHZhbHVlPSfquIDsk7DquLAnIGxpbms9XCIvYm9hcmQvd3JpdGVcIi8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3QiXSwic291cmNlUm9vdCI6IiJ9