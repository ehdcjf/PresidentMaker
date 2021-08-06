(function() {
var exports = {};
exports.id = "pages/user/join";
exports.ids = ["pages/user/join"];
exports.modules = {

/***/ "./components/FormLayout.jsx":
/*!***********************************!*\
  !*** ./components/FormLayout.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\components\\FormLayout.jsx";
 // import styled from "./FormLayout.module.css";


const Background = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "FormLayout__Background",
  componentId: "sc-f90v8c-0"
})(["width:100vw;height:100vh;background:#eee;display:flex;align-items:center;justify-content:center;& > div{width:300px;height:500px;background:#fff;padding:20px;}"]);

const FormLayout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Background, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default().back(),
          children: "\uB4A4\uB85C\uAC00\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), children]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (FormLayout);

/***/ }),

/***/ "./components/api/joinRequest.jsx":
/*!****************************************!*\
  !*** ./components/api/joinRequest.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imageUpload": function() { return /* binding */ imageUpload; },
/* harmony export */   "joinRequest": function() { return /* binding */ joinRequest; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const imageUpload = async image => {
  let imageURL;
  const fd = new FormData();
  fd.append("image", image);
  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`http://localhost:3002/api/image`, fd, config).then(res => {
    console.log(res.data);
    imageURL = res.data;
  }).catch(error => {
    console.log(error.response);
  });
  return imageURL;
};
const joinRequest = async data => {
  const {
    userid,
    age,
    gender,
    image,
    hometown,
    residence,
    nickname
  } = data;
  let url = "http://localhost:3002/user";
  let options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      userid,
      age,
      gender,
      image,
      hometown,
      residence,
      nickname
    })
  };
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  return result;
};

/***/ }),

/***/ "./hooks/useInput.jsx":
/*!****************************!*\
  !*** ./hooks/useInput.jsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "genderRadio": function() { return /* binding */ genderRadio; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useInput = defaultValue => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);

  const onChange = e => {
    const {
      value
    } = _objectSpread({}, e.target);

    setValue(value);
  };

  return {
    value,
    onChange
  };
};

const genderRadio = defaultValue => {
  const {
    0: gender,
    1: setGender
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);

  const onChange = e => {
    const gender = e.target.value;
    console.log(gender);
    console.log(e.target);
    setGender(gender);
  };

  return {
    gender,
    onChange
  };
};
/* harmony default export */ __webpack_exports__["default"] = (useInput);

/***/ }),

/***/ "./pages/user/join.jsx":
/*!*****************************!*\
  !*** ./pages/user/join.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FormLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FormLayout */ "./components/FormLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_api_joinRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/api/joinRequest */ "./components/api/joinRequest.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");


var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\user\\join.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Join = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const {
    0: userid,
    1: setUserid
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const nickname = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)("");
  const age = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__.default)("");
  const {
    0: gender,
    1: setGender
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    male: false,
    female: false
  });
  const {
    0: term,
    1: setTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: termError,
    1: setTermError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: hometown,
    1: setHomtown
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: residence,
    1: setResidence
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: image,
    1: setImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(async () => {
    const id = new URL(window.location.href).searchParams.get("id");
    setUserid(id);
  }, []);

  const handleTerm = () => {
    setTermError(term === true);
    setTerm(!term);
  };

  const handleGender = e => {
    let temp = {
      male: false,
      female: false
    };
    temp[e.target.value] = e.target.checked;
    setGender(temp);
  };

  const handleHometown = e => {
    setHomtown(e.target.value);
  };

  const handleResidence = e => {
    setResidence(e.target.value);
  };

  const handleImage = e => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let imageURI = "defaultProfil";

    if (image != undefined) {
      imageURI = await (0,_components_api_joinRequest__WEBPACK_IMPORTED_MODULE_5__.imageUpload)(image);
    }

    let sex;

    if (gender.male) {
      sex = 0;
    } else {
      sex = 1;
    }

    const data = {
      userid: userid,
      nickname: nickname.value,
      age: age.value,
      hometown: hometown,
      residence: residence,
      gender: sex,
      image: imageURI
    };
    console.log(data);
    const result = await (0,_components_api_joinRequest__WEBPACK_IMPORTED_MODULE_5__.joinRequest)(data);
    await dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_8__.UserLoginAction)(result));
    next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Join"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormLayout__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        children: ["\uD504\uB85C\uD544 \uC774\uBBF8\uC9C0: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "file",
          onChange: handleImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 20
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, undefined), "\uB2C9\uB124\uC784:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "text"
        }, nickname), {}, {
          placeholder: "\uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined), "\uC131\uBCC4: \uB0A8:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "radio",
          name: "gender",
          value: "male",
          checked: gender.male,
          onChange: handleGender
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined), "\uC5EC:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "radio",
          name: "gender",
          value: "female",
          checked: gender.female,
          onChange: handleGender
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined), "\uCD9C\uC0DD \uC5F0\uB3C4:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
          type: "number"
        }, age), {}, {
          placeholder: "\uCD9C\uC0DD\uC5F0\uB3C4 \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined), "\uACE0\uD5A5:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "hometown",
          onChange: handleHometown,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "",
            children: "\uACE0\uD5A5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC",
            children: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uBD80\uC0B0\uAD11\uC5ED\uC2DC",
            children: "\uBD80\uC0B0\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uB300\uAD6C\uAD11\uC5ED\uC2DC",
            children: "\uB300\uAD6C\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC778\uCC9C\uAD11\uC5ED\uC2DC",
            children: "\uC778\uCC9C\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uAD11\uC8FC\uAD11\uC5ED\uC2DC",
            children: "\uAD11\uC8FC\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uB300\uC804\uAD11\uC5ED\uC2DC",
            children: "\uB300\uC804\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC6B8\uC0B0\uAD11\uC5ED\uC2DC",
            children: "\uC6B8\uC0B0\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC138\uC885\uD2B9\uBCC4\uC790\uCE58\uC2DC",
            children: "\uC138\uC885\uD2B9\uBCC4\uC790\uCE58\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uACBD\uAE30\uB3C4",
            children: "\uACBD\uAE30\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uAC15\uC6D0\uB3C4",
            children: "\uAC15\uC6D0\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uCDA9\uCCAD\uBD81\uB3C4",
            children: "\uCDA9\uCCAD\uBD81\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uCDA9\uCCAD\uB0A8\uB3C4",
            children: "\uCDA9\uCCAD\uB0A8\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC804\uB77C\uBD81\uB3C4",
            children: "\uC804\uB77C\uBD81\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC804\uB77C\uB0A8\uB3C4",
            children: "\uC804\uB77C\uB0A8\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uACBD\uC0C1\uBD81\uB3C4",
            children: "\uACBD\uC0C1\uBD81\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uACBD\uC0C1\uB0A8\uB3C4",
            children: "\uACBD\uC0C1\uB0A8\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4",
            children: "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined), "\uAC70\uC8FC\uC9C0:", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
          name: "residence",
          onChange: handleResidence,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "",
            children: "\uAC70\uC8FC\uC9C0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC",
            children: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uBD80\uC0B0\uAD11\uC5ED\uC2DC",
            children: "\uBD80\uC0B0\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uB300\uAD6C\uAD11\uC5ED\uC2DC",
            children: "\uB300\uAD6C\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC778\uCC9C\uAD11\uC5ED\uC2DC",
            children: "\uC778\uCC9C\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uAD11\uC8FC\uAD11\uC5ED\uC2DC",
            children: "\uAD11\uC8FC\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uB300\uC804\uAD11\uC5ED\uC2DC",
            children: "\uB300\uC804\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC6B8\uC0B0\uAD11\uC5ED\uC2DC",
            children: "\uC6B8\uC0B0\uAD11\uC5ED\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC138\uC885\uD2B9\uBCC4\uC790\uCE58\uC2DC",
            children: "\uC138\uC885\uD2B9\uBCC4\uC790\uCE58\uC2DC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uACBD\uAE30\uB3C4",
            children: "\uACBD\uAE30\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uAC15\uC6D0\uB3C4",
            children: "\uAC15\uC6D0\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uCDA9\uCCAD\uBD81\uB3C4",
            children: "\uCDA9\uCCAD\uBD81\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uCDA9\uCCAD\uB0A8\uB3C4",
            children: "\uCDA9\uCCAD\uB0A8\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC804\uB77C\uBD81\uB3C4",
            children: "\uC804\uB77C\uBD81\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC804\uB77C\uB0A8\uB3C4",
            children: "\uC804\uB77C\uB0A8\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uACBD\uC0C1\uBD81\uB3C4",
            children: "\uACBD\uC0C1\uBD81\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uACBD\uC0C1\uB0A8\uB3C4",
            children: "\uACBD\uC0C1\uB0A8\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
            value: "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4",
            children: "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "checkbox",
          checked: term,
          onChange: handleTerm,
          id: "term"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
          htmlFor: "term",
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, undefined), termError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            color: "red"
          },
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD574\uC8FC\uC138\uC694."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "submit",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Join);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserLoginAction": function() { return /* binding */ UserLoginAction; },
/* harmony export */   "UserLoginRequest": function() { return /* binding */ UserLoginRequest; },
/* harmony export */   "UserLoginSuccess": function() { return /* binding */ UserLoginSuccess; },
/* harmony export */   "UserLoginError": function() { return /* binding */ UserLoginError; },
/* harmony export */   "UserLogoutAction": function() { return /* binding */ UserLogoutAction; }
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  loadding: false,
  IsLogin: false,
  userid: null,
  nickname: null
};
const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';
const USER_LOGOUT = 'USER_LOGOUT';
const UserLoginAction = data => {
  return async dispatch => {
    dispatch(UserLoginRequest());

    try {
      const result = data;
      console.log(result);
      result.isUser === true ? dispatch(UserLoginSuccess(result)) : dispatch(UserLoginError());
    } catch (e) {
      dispatch(UserLoginError());
    }
  };
};
const UserLoginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST
  };
};
const UserLoginSuccess = data => {
  return {
    type: USER_LOGIN_SUCCESS,
    data: data
  };
};
const UserLoginError = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};
const UserLogoutAction = () => {
  return {
    type: USER_LOGOUT
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: true
      });

    case USER_LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: true,
        userid: action.data.userid,
        nickname: action.data.nickname,
        loadding: false
      });

    case USER_LOGIN_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadding: false
      });

    case USER_LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        IsLogin: false,
        userid: null,
        nickname: null
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/user/join.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL2NvbXBvbmVudHMvRm9ybUxheW91dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9jb21wb25lbnRzL2FwaS9qb2luUmVxdWVzdC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9ob29rcy91c2VJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy91c2VyL2pvaW4uanN4Iiwid2VicGFjazovL2Zyb250Ly4vcmVkdWNlcnMvdXNlci5qcyIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiU3R5bGVkIiwiRm9ybUxheW91dCIsImNoaWxkcmVuIiwiUm91dGVyIiwiaW1hZ2VVcGxvYWQiLCJpbWFnZSIsImltYWdlVVJMIiwiZmQiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNvbmZpZyIsImhlYWRlcnMiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsImpvaW5SZXF1ZXN0IiwidXNlcmlkIiwiYWdlIiwiZ2VuZGVyIiwiaG9tZXRvd24iLCJyZXNpZGVuY2UiLCJuaWNrbmFtZSIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsInVzZUlucHV0IiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZ2VuZGVyUmFkaW8iLCJzZXRHZW5kZXIiLCJKb2luIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInNldFVzZXJpZCIsIm1hbGUiLCJmZW1hbGUiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsInNldEhvbXRvd24iLCJzZXRSZXNpZGVuY2UiLCJzZXRJbWFnZSIsInVzZUVmZmVjdCIsImlkIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiaGFuZGxlVGVybSIsImhhbmRsZUdlbmRlciIsInRlbXAiLCJjaGVja2VkIiwiaGFuZGxlSG9tZXRvd24iLCJoYW5kbGVSZXNpZGVuY2UiLCJoYW5kbGVJbWFnZSIsImZpbGVzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpbWFnZVVSSSIsInVuZGVmaW5lZCIsInNleCIsIlVzZXJMb2dpbkFjdGlvbiIsImNvbG9yIiwiaW5pdGlhbFN0YXRlIiwibG9hZGRpbmciLCJJc0xvZ2luIiwiVVNFUl9MT0dJTl9SRVFVRVNUIiwiVVNFUl9MT0dJTl9TVUNDRVNTIiwiVVNFUl9MT0dJTl9FUlJPUiIsIlVTRVJfTE9HT1VUIiwiVXNlckxvZ2luUmVxdWVzdCIsImlzVXNlciIsIlVzZXJMb2dpblN1Y2Nlc3MiLCJVc2VyTG9naW5FcnJvciIsInR5cGUiLCJVc2VyTG9nb3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSx1S0FBaEI7O0FBZ0JBLE1BQU1DLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUNuQyxzQkFDRTtBQUFB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TTRFLGNBQWMsR0FBRyxNQUFNO0FBQ2xDLFNBQU87QUFDTEMsUUFBSSxFQUFFTjtBQURELEdBQVA7QUFJRCxDQUxNO0FBUUEsTUFBTU8sZ0JBQWdCLEdBQUcsTUFBTTtBQUNwQyxTQUFPO0FBQ0xELFFBQUksRUFBRUw7QUFERCxHQUFQO0FBR0QsQ0FKTTs7QUFNUCxNQUFNTyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHZCxZQUFULEVBQXVCZSxNQUF2QixLQUFrQztBQUNoRCxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFFRSxTQUFLUixrQkFBTDtBQUNFLDZDQUNLVyxLQURMO0FBRUViLGdCQUFRLEVBQUU7QUFGWjs7QUFLRixTQUFLRyxrQkFBTDtBQUNFLDZDQUNLVSxLQURMO0FBRUVaLGVBQU8sRUFBRSxJQUZYO0FBR0UvRCxjQUFNLEVBQUU0RSxNQUFNLENBQUNqRixJQUFQLENBQVlLLE1BSHRCO0FBSUVLLGdCQUFRLEVBQUV1RSxNQUFNLENBQUNqRixJQUFQLENBQVlVLFFBSnhCO0FBS0V5RCxnQkFBUSxFQUFFO0FBTFo7O0FBT0YsU0FBS0ksZ0JBQUw7QUFDRSw2Q0FDS1MsS0FETDtBQUVFYixnQkFBUSxFQUFFO0FBRlo7O0FBSUYsU0FBS0ssV0FBTDtBQUNFLDZDQUNLUSxLQURMO0FBRUVaLGVBQU8sRUFBRSxLQUZYO0FBR0UvRCxjQUFNLEVBQUMsSUFIVDtBQUlFSyxnQkFBUSxFQUFDO0FBSlg7O0FBTUY7QUFDRSxhQUFPc0UsS0FBUDtBQTdCSjtBQStCRCxDQWhDRDs7QUFrQ0EsK0RBQWVELE9BQWYsRTs7Ozs7Ozs7Ozs7QUMxRkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvdXNlci9qb2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuLy8gaW1wb3J0IHN0eWxlZCBmcm9tIFwiLi9Gb3JtTGF5b3V0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEJhY2tncm91bmQgPSBTdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6MTAwdnc7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiNlZWU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cclxuICAgICYgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgIGhlaWdodDo1MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAgICAgcGFkZGluZzoyMHB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRm9ybUxheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJhY2tncm91bmQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IFJvdXRlci5iYWNrKCl9PuuSpOuhnOqwgOq4sDwvcD5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9CYWNrZ3JvdW5kPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1MYXlvdXQ7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbWFnZVVwbG9hZCA9IGFzeW5jIChpbWFnZSkgPT4ge1xyXG4gIGxldCBpbWFnZVVSTDtcclxuICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gIGZkLmFwcGVuZChcImltYWdlXCIsIGltYWdlKTtcclxuICBjb25zdCBjb25maWcgPSB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiY29udGVudC10eXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBhd2FpdCBheGlvc1xyXG4gICAgLnBvc3QoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9hcGkvaW1hZ2VgLCBmZCwgY29uZmlnKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIGltYWdlVVJMID0gcmVzLmRhdGE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgcmV0dXJuIGltYWdlVVJMO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGpvaW5SZXF1ZXN0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICBjb25zdCB7IHVzZXJpZCwgYWdlLCBnZW5kZXIsIGltYWdlLCBob21ldG93biwgcmVzaWRlbmNlLCBuaWNrbmFtZSB9ID0gZGF0YTtcclxuICBsZXQgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDIvdXNlclwiO1xyXG4gIGxldCBvcHRpb25zID0ge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICB1c2VyaWQsXHJcbiAgICAgIGFnZSxcclxuICAgICAgZ2VuZGVyLFxyXG4gICAgICBpbWFnZSxcclxuICAgICAgaG9tZXRvd24sXHJcbiAgICAgIHJlc2lkZW5jZSxcclxuICAgICAgbmlja25hbWUsXHJcbiAgICB9KSxcclxuICB9O1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlSW5wdXQgPSAoZGVmYXVsdFZhbHVlKSA9PiB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsdWUgfSA9IHsgLi4uZS50YXJnZXQgfTtcclxuICAgIHNldFZhbHVlKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmFsdWUsXHJcbiAgICBvbkNoYW5nZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmRlclJhZGlvID0gKGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGdlbmRlciA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2coZ2VuZGVyKTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgIHNldEdlbmRlcihnZW5kZXIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBnZW5kZXIsXHJcbiAgICBvbkNoYW5nZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7XHJcbiIsImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Zvcm1MYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUlucHV0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgaW1hZ2VVcGxvYWQsIGpvaW5SZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXBpL2pvaW5SZXF1ZXN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFVzZXJMb2dpbkFjdGlvbiB9IGZyb20gXCIuLi8uLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG5jb25zdCBKb2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdXNlcmlkLCBzZXRVc2VyaWRdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBuaWNrbmFtZSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IGFnZSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtnZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZSh7IG1hbGU6IGZhbHNlLCBmZW1hbGU6IGZhbHNlIH0pO1xyXG4gIGNvbnN0IFt0ZXJtLCBzZXRUZXJtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGVybUVycm9yLCBzZXRUZXJtRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtob21ldG93biwgc2V0SG9tdG93bl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtyZXNpZGVuY2UsIHNldFJlc2lkZW5jZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGlkID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldChcImlkXCIpO1xyXG4gICAgc2V0VXNlcmlkKGlkKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRlcm0gPSAoKSA9PiB7XHJcbiAgICBzZXRUZXJtRXJyb3IodGVybSA9PT0gdHJ1ZSk7XHJcbiAgICBzZXRUZXJtKCF0ZXJtKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVHZW5kZXIgPSAoZSkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSB7IG1hbGU6IGZhbHNlLCBmZW1hbGU6IGZhbHNlIH07XHJcbiAgICB0ZW1wW2UudGFyZ2V0LnZhbHVlXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICBzZXRHZW5kZXIodGVtcCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSG9tZXRvd24gPSAoZSkgPT4ge1xyXG4gICAgc2V0SG9tdG93bihlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzaWRlbmNlID0gKGUpID0+IHtcclxuICAgIHNldFJlc2lkZW5jZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0SW1hZ2UoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgaW1hZ2VVUkkgPSBcImRlZmF1bHRQcm9maWxcIjtcclxuICAgIGlmIChpbWFnZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgaW1hZ2VVUkkgPSBhd2FpdCBpbWFnZVVwbG9hZChpbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNleDtcclxuICAgIGlmIChnZW5kZXIubWFsZSkge1xyXG4gICAgICBzZXggPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V4ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICB1c2VyaWQ6IHVzZXJpZCxcclxuICAgICAgbmlja25hbWU6IG5pY2tuYW1lLnZhbHVlLFxyXG4gICAgICBhZ2U6IGFnZS52YWx1ZSxcclxuICAgICAgaG9tZXRvd246IGhvbWV0b3duLFxyXG4gICAgICByZXNpZGVuY2U6IHJlc2lkZW5jZSxcclxuICAgICAgZ2VuZGVyOiBzZXgsXHJcbiAgICAgIGltYWdlOiBpbWFnZVVSSSxcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGpvaW5SZXF1ZXN0KGRhdGEpO1xyXG4gICAgYXdhaXQgZGlzcGF0Y2goVXNlckxvZ2luQWN0aW9uKHJlc3VsdCkpO1xyXG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Sm9pbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgPGgyPu2ajOybkOqwgOyehTwvaDI+XHJcblxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAg7ZSE66Gc7ZWEIOydtOuvuOyngDogPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlfSAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICDri4nrhKTsnoQ6e1wiIFwifVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgey4uLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuLieuEpOyehOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAg7ISx67OEOiDrgqg6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgbmFtZT1cImdlbmRlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e2dlbmRlci5tYWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlR2VuZGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIOyXrDpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBuYW1lPVwiZ2VuZGVyXCJcclxuICAgICAgICAgICAgdmFsdWU9XCJmZW1hbGVcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXtnZW5kZXIuZmVtYWxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlR2VuZGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAg7Lac7IOdIOyXsOuPhDp7XCIgXCJ9XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHsuLi5hZ2V9IHBsYWNlaG9sZGVyPVwi7Lac7IOd7Jew64+EIOyeheugpe2VtOyjvOyEuOyalFwiIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIOqzoO2WpTp7XCIgXCJ9XHJcbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJob21ldG93blwiIG9uQ2hhbmdlPXtoYW5kbGVIb21ldG93bn0+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj7qs6DtlqU8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuyEnOyauO2KueuzhOyLnFwiPuyEnOyauO2KueuzhOyLnDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi67aA7IKw6rSR7Jet7IucXCI+67aA7IKw6rSR7Jet7IucPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLrjIDqtazqtJHsl63si5xcIj7rjIDqtazqtJHsl63si5w8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuyduOyynOq0keyXreyLnFwiPuyduOyynOq0keyXreyLnDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi6rSR7KO86rSR7Jet7IucXCI+6rSR7KO86rSR7Jet7IucPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLrjIDsoITqtJHsl63si5xcIj7rjIDsoITqtJHsl63si5w8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuyauOyCsOq0keyXreyLnFwiPuyauOyCsOq0keyXreyLnDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7IS47KKF7Yq567OE7J6Q7LmY7IucXCI+7IS47KKF7Yq567OE7J6Q7LmY7IucPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLqsr3quLDrj4RcIj7qsr3quLDrj4Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuqwleybkOuPhFwiPuqwleybkOuPhDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7Lap7LKt67aB64+EXCI+7Lap7LKt67aB64+EPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLstqnssq3rgqjrj4RcIj7stqnssq3rgqjrj4Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuyghOudvOu2geuPhFwiPuyghOudvOu2geuPhDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7KCE652864Ko64+EXCI+7KCE652864Ko64+EPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLqsr3sg4HrtoHrj4RcIj7qsr3sg4HrtoHrj4Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuqyveyDgeuCqOuPhFwiPuqyveyDgeuCqOuPhDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7KCc7KO87Yq567OE7J6Q7LmY64+EXCI+7KCc7KO87Yq567OE7J6Q7LmY64+EPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAg6rGw7KO87KeAOntcIiBcIn1cclxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInJlc2lkZW5jZVwiIG9uQ2hhbmdlPXtoYW5kbGVSZXNpZGVuY2V9PlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+6rGw7KO87KeAPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLshJzsmrjtirnrs4Tsi5xcIj7shJzsmrjtirnrs4Tsi5w8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuu2gOyCsOq0keyXreyLnFwiPuu2gOyCsOq0keyXreyLnDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi64yA6rWs6rSR7Jet7IucXCI+64yA6rWs6rSR7Jet7IucPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLsnbjsspzqtJHsl63si5xcIj7snbjsspzqtJHsl63si5w8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuq0keyjvOq0keyXreyLnFwiPuq0keyjvOq0keyXreyLnDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi64yA7KCE6rSR7Jet7IucXCI+64yA7KCE6rSR7Jet7IucPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLsmrjsgrDqtJHsl63si5xcIj7smrjsgrDqtJHsl63si5w8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuyEuOyihe2KueuzhOyekOy5mOyLnFwiPuyEuOyihe2KueuzhOyekOy5mOyLnDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi6rK96riw64+EXCI+6rK96riw64+EPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLqsJXsm5Drj4RcIj7qsJXsm5Drj4Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuy2qeyyreu2geuPhFwiPuy2qeyyreu2geuPhDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi7Lap7LKt64Ko64+EXCI+7Lap7LKt64Ko64+EPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLsoITrnbzrtoHrj4RcIj7soITrnbzrtoHrj4Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuyghOudvOuCqOuPhFwiPuyghOudvOuCqOuPhDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwi6rK97IOB67aB64+EXCI+6rK97IOB67aB64+EPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCLqsr3sg4Hrgqjrj4RcIj7qsr3sg4Hrgqjrj4Q8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIuygnOyjvO2KueuzhOyekOy5mOuPhFwiPuygnOyjvO2KueuzhOyekOy5mOuPhDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjaGVja2VkPXt0ZXJtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGVybX1cclxuICAgICAgICAgICAgaWQ9XCJ0ZXJtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlcm1cIj7slb3qtIDsl5Ag64+Z7J2Y7ZW07KO87IS47JqULjwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PuyVveq0gOyXkCDrj5nsnZjtlbTso7zshLjsmpQuPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+7ZqM7JuQ6rCA7J6FPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSm9pbjtcclxuIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvYWRkaW5nOiBmYWxzZSxcclxuICBJc0xvZ2luOiBmYWxzZSxcclxuICB1c2VyaWQ6IG51bGwsXHJcbiAgbmlja25hbWU6IG51bGwsXHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgVVNFUl9MT0dJTl9SRVFVRVNUID0gJ1VTRVJfTE9HSU5fUkVRVUVTVCdcclxuY29uc3QgVVNFUl9MT0dJTl9TVUNDRVNTID0gJ1VTRVJfTE9HSU5fU1VDQ0VTUydcclxuY29uc3QgVVNFUl9MT0dJTl9FUlJPUiA9ICdVU0VSX0xPR0lOX0VSUk9SJ1xyXG5jb25zdCBVU0VSX0xPR09VVCA9ICdVU0VSX0xPR09VVCdcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKFVzZXJMb2dpblJlcXVlc3QoKSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBkYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgIHJlc3VsdC5pc1VzZXIgPT09IHRydWVcclxuICAgICAgICA/IGRpc3BhdGNoKFVzZXJMb2dpblN1Y2Nlc3MocmVzdWx0KSlcclxuICAgICAgICA6IGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGRpc3BhdGNoKFVzZXJMb2dpbkVycm9yKCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luUmVxdWVzdCA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dJTl9SRVFVRVNULFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX1NVQ0NFU1MsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG5cclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJMb2dpbkVycm9yID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBVU0VSX0xPR0lOX0VSUk9SLFxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ291dEFjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdHlwZTogVVNFUl9MT0dPVVQsXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgY2FzZSBVU0VSX0xPR0lOX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbG9hZGRpbmc6IHRydWUsXHJcblxyXG4gICAgICB9XHJcbiAgICBjYXNlIFVTRVJfTE9HSU5fU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBJc0xvZ2luOiB0cnVlLFxyXG4gICAgICAgIHVzZXJpZDogYWN0aW9uLmRhdGEudXNlcmlkLFxyXG4gICAgICAgIG5pY2tuYW1lOiBhY3Rpb24uZGF0YS5uaWNrbmFtZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dJTl9FUlJPUjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBsb2FkZGluZzogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgVVNFUl9MT0dPVVQ6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgSXNMb2dpbjogZmFsc2UsXHJcbiAgICAgICAgdXNlcmlkOm51bGwsXHJcbiAgICAgICAgbmlja25hbWU6bnVsbCxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=