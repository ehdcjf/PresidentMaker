self["webpackHotUpdate_N_E"]("pages/kakao/callback",{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

var matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

var customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = function _default() {
  var customRoute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function (path) {
    var keys = [];
    var matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    var matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return function (pathname, params) {
      var res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;

            // unnamed params should be removed as they
            // are not allowed to be used in the destination
            if (typeof key.name === 'number') {
              delete res.params[key.name];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.matchHas = matchHas;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;
exports.getSafeParamName = void 0;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // ensure only a-zA-Z are used for param names for proper interpolating
// with path-to-regexp


var getSafeParamName = function getSafeParamName(paramName) {
  var newParamName = '';

  for (var i = 0; i < paramName.length; i++) {
    var charCode = paramName.charCodeAt(i);

    if (charCode > 64 && charCode < 91 || // A-Z
    charCode > 96 && charCode < 123 // a-z
    ) {
        newParamName += paramName[i];
      }
  }

  return newParamName;
};

exports.getSafeParamName = getSafeParamName;

function matchHas(req, has, query) {
  var params = {};
  var initialQueryValues = [];

  if (false) {}

  if (true) {
    initialQueryValues = Array.from(new URLSearchParams(location.search).values());
  }

  var allMatch = has.every(function (hasItem) {
    var value;
    var key = hasItem.key;

    switch (hasItem.type) {
      case 'header':
        {
          key = key.toLowerCase();
          value = req.headers[key];
          break;
        }

      case 'cookie':
        {
          value = req.cookies[hasItem.key];
          break;
        }

      case 'query':
        {
          // preserve initial encoding of query values
          value = query[key];

          if (initialQueryValues.includes(value || '')) {
            value = encodeURIComponent(value);
          }

          break;
        }

      case 'host':
        {
          var _ref = (req == null ? void 0 : req.headers) || {},
              host = _ref.host; // remove port from host if present


          var hostname = host == null ? void 0 : host.split(':')[0].toLowerCase();
          value = hostname;
          break;
        }

      default:
        {
          break;
        }
    }

    if (!hasItem.value && value) {
      params[getSafeParamName(key)] = value;
      return true;
    } else if (value) {
      var matcher = new RegExp("^".concat(hasItem.value, "$"));
      var matches = value.match(matcher);

      if (matches) {
        if (matches.groups) {
          Object.keys(matches.groups).forEach(function (groupKey) {
            params[groupKey] = matches.groups[groupKey];
          });
        } else if (hasItem.type === 'host' && matches[0]) {
          params.host = matches[0];
        }

        return true;
      }
    }

    return false;
  });

  if (allMatch) {
    return params;
  }

  return false;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (var _i = 0, _Object$keys = Object.keys(params); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (value.includes(":".concat(key))) {
      value = value.replace(new RegExp(":".concat(key, "\\*"), 'g'), ":".concat(key, "--ESCAPED_PARAM_ASTERISKS")).replace(new RegExp(":".concat(key, "\\?"), 'g'), ":".concat(key, "--ESCAPED_PARAM_QUESTION")).replace(new RegExp(":".concat(key, "\\+"), 'g'), ":".concat(key, "--ESCAPED_PARAM_PLUS")).replace(new RegExp(":".concat(key, "(?!\\w)"), 'g'), "--ESCAPED_PARAM_COLON".concat(key));
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile("/".concat(value), {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  var parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  var hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    var _URL = new URL(destination),
        pathname = _URL.pathname,
        searchParams = _URL.searchParams,
        hash = _URL.hash,
        hostname = _URL.hostname,
        port = _URL.port,
        protocol = _URL.protocol,
        search = _URL.search,
        href = _URL.href;

    parsedDestination = {
      pathname: pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash: hash,
      protocol: protocol,
      hostname: hostname,
      port: port,
      search: search,
      href: href
    };
  }

  var destQuery = parsedDestination.query;
  var destPath = "".concat(parsedDestination.pathname).concat(parsedDestination.hash || '');
  var destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  var destPathParams = destPathParamKeys.map(function (key) {
    return key.name;
  });
  var destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  var newUrl; // update any params in query values

  for (var _i2 = 0, _Object$entries = Object.entries(destQuery); _i2 < _Object$entries.length; _i2++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
        key = _Object$entries$_i[0],
        strOrArray = _Object$entries$_i[1];

    var value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  var paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(function (name) {
      return name !== 'nextInternalLocale';
    });
  }

  if (appendParamsToQuery && !paramKeys.some(function (key) {
    return destPathParams.includes(key);
  })) {
    var _iterator = _createForOfIteratorHelper(paramKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _key = _step.value;

        if (!(_key in destQuery)) {
          destQuery[_key] = params[_key];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  try {
    newUrl = destinationCompiler(params);

    var _newUrl$split = newUrl.split('#'),
        _newUrl$split2 = _slicedToArray(_newUrl$split, 2),
        _pathname = _newUrl$split2[0],
        _hash = _newUrl$split2[1];

    parsedDestination.pathname = _pathname;
    parsedDestination.hash = "".concat(_hash ? '#' : '').concat(_hash || '');
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl: newUrl,
    parsedDestination: parsedDestination
  };
}

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

/***/ "./pages/kakao/callback.jsx":
/*!**********************************!*\
  !*** ./pages/kakao/callback.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/api/kakaoCallback */ "./components/api/kakaoCallback.jsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/context */ "./pages/store/context.jsx");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\KGA_18\\Desktop\\rlaehdcjf\\PresidentMaker\\front\\pages\\kakao\\callback.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var KakaoLogin = function KakaoLogin() {
  _s();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_5__.default),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var code;
    return C_Users_KGA_18_Desktop_rlaehdcjf_PresidentMaker_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            code = new URL(window.location.href).searchParams.get("code");
            (0,_components_api_kakaoCallback__WEBPACK_IMPORTED_MODULE_4__.kakaoCallback)(dispatch, code); // await dispatch(userActions.kakaoLogin(code));

            next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_6__.default.push("/user/join?id=".concat(data.userid));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      children: "\uCE74\uCE74\uC624 \uB85C\uAD6C\uC778 \uC981\uC785\uB2C8\uB3E0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(KakaoLogin, "tMjQDhNvN1vDEz7QS76YEprP+qA=");

_c = KakaoLogin;
/* harmony default export */ __webpack_exports__["default"] = (KakaoLogin);

var _c;

$RefreshReg$(_c, "KakaoLogin");

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

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/router.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/router.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=exports.route=void 0;var _pathMatch=_interopRequireDefault(__webpack_require__(/*! ../lib/router/utils/path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));var _normalizeTrailingSlash=__webpack_require__(/*! ../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");var _normalizeLocalePath=__webpack_require__(/*! ../lib/i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");var _prepareDestination=__webpack_require__(/*! ../lib/router/utils/prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const route=(0,_pathMatch.default)();exports.route=route;const customRouteTypes=new Set(['rewrite','redirect','header']);function replaceBasePath(basePath,pathname){// If replace ends up replacing the full url it'll be `undefined`, meaning we have to default it to `/`
return pathname.replace(basePath,'')||'/';}class Router{constructor({basePath='',headers=[],fsRoutes=[],rewrites={beforeFiles:[],afterFiles:[],fallback:[]},redirects=[],catchAllRoute,dynamicRoutes=[],pageChecker,useFileSystemPublicRoutes,locales=[]}){this.basePath=void 0;this.headers=void 0;this.fsRoutes=void 0;this.redirects=void 0;this.rewrites=void 0;this.catchAllRoute=void 0;this.pageChecker=void 0;this.dynamicRoutes=void 0;this.useFileSystemPublicRoutes=void 0;this.locales=void 0;this.basePath=basePath;this.headers=headers;this.fsRoutes=fsRoutes;this.rewrites=rewrites;this.redirects=redirects;this.pageChecker=pageChecker;this.catchAllRoute=catchAllRoute;this.dynamicRoutes=dynamicRoutes;this.useFileSystemPublicRoutes=useFileSystemPublicRoutes;this.locales=locales;}setDynamicRoutes(routes=[]){this.dynamicRoutes=routes;}addFsRoute(fsRoute){this.fsRoutes.unshift(fsRoute);}async execute(req,res,parsedUrl){// memoize page check calls so we don't duplicate checks for pages
const pageChecks={};const memoizedPageChecker=async p=>{p=(0,_normalizeLocalePath.normalizeLocalePath)(p,this.locales).pathname;if(pageChecks[p]){return pageChecks[p];}const result=this.pageChecker(p);pageChecks[p]=result;return result;};let parsedUrlUpdated=parsedUrl;const applyCheckTrue=async checkParsedUrl=>{const originalFsPathname=checkParsedUrl.pathname;const fsPathname=replaceBasePath(this.basePath,originalFsPathname);for(const fsRoute of this.fsRoutes){const fsParams=fsRoute.match(fsPathname);if(fsParams){checkParsedUrl.pathname=fsPathname;const fsResult=await fsRoute.fn(req,res,fsParams,checkParsedUrl);if(fsResult.finished){return true;}checkParsedUrl.pathname=originalFsPathname;}}let matchedPage=await memoizedPageChecker(fsPathname);// If we didn't match a page check dynamic routes
if(!matchedPage){const normalizedFsPathname=(0,_normalizeLocalePath.normalizeLocalePath)(fsPathname,this.locales).pathname;for(const dynamicRoute of this.dynamicRoutes){if(dynamicRoute.match(normalizedFsPathname)){matchedPage=true;}}}// Matched a page or dynamic route so render it using catchAllRoute
if(matchedPage){const pageParams=this.catchAllRoute.match(checkParsedUrl.pathname);checkParsedUrl.pathname=fsPathname;checkParsedUrl.query._nextBubbleNoFallback='1';const result=await this.catchAllRoute.fn(req,res,pageParams,checkParsedUrl);return result.finished;}};/*
      Desired routes order
      - headers
      - redirects
      - Check filesystem (including pages), if nothing found continue
      - User rewrites (checking filesystem and pages each match)
    */const allRoutes=[...this.headers,...this.redirects,...this.rewrites.beforeFiles,...this.fsRoutes,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[{type:'route',name:'page checker',requireBasePath:false,match:route('/:path*'),fn:async(checkerReq,checkerRes,params,parsedCheckerUrl)=>{let{pathname}=parsedCheckerUrl;pathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname||'/');if(!pathname){return{finished:false};}if(await memoizedPageChecker(pathname)){return this.catchAllRoute.fn(checkerReq,checkerRes,params,parsedCheckerUrl);}return{finished:false};}}]:[]),...this.rewrites.afterFiles,...(this.rewrites.fallback.length?[{type:'route',name:'dynamic route/page check',requireBasePath:false,match:route('/:path*'),fn:async(_checkerReq,_checkerRes,_params,parsedCheckerUrl)=>{return{finished:await applyCheckTrue(parsedCheckerUrl)};}},...this.rewrites.fallback]:[]),// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[this.catchAllRoute]:[])];const originallyHadBasePath=!this.basePath||req._nextHadBasePath;for(const testRoute of allRoutes){// if basePath is being used, the basePath will still be included
// in the pathname here to allow custom-routes to require containing
// it or not, filesystem routes and pages must always include the basePath
// if it is set
let currentPathname=parsedUrlUpdated.pathname;const originalPathname=currentPathname;const requireBasePath=testRoute.requireBasePath!==false;const isCustomRoute=customRouteTypes.has(testRoute.type);const isPublicFolderCatchall=testRoute.name==='public folder catchall';const keepBasePath=isCustomRoute||isPublicFolderCatchall;const keepLocale=isCustomRoute;const currentPathnameNoBasePath=replaceBasePath(this.basePath,currentPathname);if(!keepBasePath){currentPathname=currentPathnameNoBasePath;}const localePathResult=(0,_normalizeLocalePath.normalizeLocalePath)(currentPathnameNoBasePath,this.locales);const activeBasePath=keepBasePath?this.basePath:'';if(keepLocale){if(!testRoute.internal&&parsedUrl.query.__nextLocale&&!localePathResult.detectedLocale){currentPathname=`${activeBasePath}/${parsedUrl.query.__nextLocale}${currentPathnameNoBasePath==='/'?'':currentPathnameNoBasePath}`;}if(req.__nextHadTrailingSlash&&!currentPathname.endsWith('/')){currentPathname+='/';}}else{currentPathname=`${req._nextHadBasePath?activeBasePath:''}${activeBasePath&&localePathResult.pathname==='/'?'':localePathResult.pathname}`;}let newParams=testRoute.match(currentPathname);if(testRoute.has&&newParams){const hasParams=(0,_prepareDestination.matchHas)(req,testRoute.has,parsedUrlUpdated.query);if(hasParams){Object.assign(newParams,hasParams);}else{newParams=false;}}// Check if the match function matched
if(newParams){// since we require basePath be present for non-custom-routes we
// 404 here when we matched an fs route
if(!keepBasePath){if(!originallyHadBasePath&&!req._nextDidRewrite){if(requireBasePath){// consider this a non-match so the 404 renders
return false;}// page checker occurs before rewrites so we need to continue
// to check those since they don't always require basePath
continue;}parsedUrlUpdated.pathname=currentPathname;}const result=await testRoute.fn(req,res,newParams,parsedUrlUpdated);// The response was handled
if(result.finished){return true;}// since the fs route didn't match we need to re-add the basePath
// to continue checking rewrites with the basePath present
if(!keepBasePath){parsedUrlUpdated.pathname=originalPathname;}if(result.pathname){parsedUrlUpdated.pathname=result.pathname;}if(result.query){parsedUrlUpdated.query={...parsedUrlUpdated.query,...result.query};}// check filesystem
if(testRoute.check===true){if(await applyCheckTrue(parsedUrlUpdated)){return true;}}}}return false;}}exports.default=Router;
//# sourceMappingURL=router.js.map

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMva2FrYW8vY2FsbGJhY2suanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXIuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsInBhdGhUb1JlZ2V4cCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJfZGVmYXVsdCIsImN1c3RvbVJvdXRlIiwicGF0aCIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInBhdGhuYW1lIiwicGFyYW1zIiwicmVzIiwibmFtZSIsIm1hdGNoSGFzIiwiY29tcGlsZU5vblBhdGgiLCJwcmVwYXJlRGVzdGluYXRpb24iLCJfcXVlcnlzdHJpbmciLCJfcGFyc2VSZWxhdGl2ZVVybCIsImdldFNhZmVQYXJhbU5hbWUiLCJwYXJhbU5hbWUiLCJuZXdQYXJhbU5hbWUiLCJpIiwibGVuZ3RoIiwiY2hhckNvZGUiLCJjaGFyQ29kZUF0IiwicmVxIiwicXVlcnkiLCJpbml0aWFsUXVlcnlWYWx1ZXMiLCJBcnJheSIsImZyb20iLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsInZhbHVlcyIsImFsbE1hdGNoIiwiZXZlcnkiLCJoYXNJdGVtIiwidmFsdWUiLCJ0eXBlIiwidG9Mb3dlckNhc2UiLCJoZWFkZXJzIiwiY29va2llcyIsImluY2x1ZGVzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdCIsImhvc3RuYW1lIiwic3BsaXQiLCJSZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJncm91cHMiLCJmb3JFYWNoIiwiZ3JvdXBLZXkiLCJyZXBsYWNlIiwiY29tcGlsZSIsInZhbGlkYXRlIiwic3Vic3RyIiwiZGVzdGluYXRpb24iLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyc2VkRGVzdGluYXRpb24iLCJhc3NpZ24iLCJoYWRMb2NhbGUiLCJfX25leHRMb2NhbGUiLCJfX25leHREZWZhdWx0TG9jYWxlIiwic3RhcnRzV2l0aCIsInBhcnNlUmVsYXRpdmVVcmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwicG9ydCIsInByb3RvY29sIiwiaHJlZiIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJtYXAiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwibmV3VXJsIiwiZW50cmllcyIsInN0ck9yQXJyYXkiLCJpc0FycmF5IiwicGFyYW1LZXlzIiwiZmlsdGVyIiwic29tZSIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsIktha2FvTG9naW4iLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiY29kZSIsIndpbmRvdyIsImtha2FvQ2FsbGJhY2siLCJSb3V0ZXIiLCJkYXRhIiwidXNlcmlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7OztBQ2ZhOzs7Ozs7Ozs7Ozs7OztBQUFBQSxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsb0JBQUEsR0FBcUJBLGVBQUEsR0FBZ0JBLGlDQUFBLEdBQWtDQSxzQkFBQSxHQUF1QixLQUFLLENBQW5HOztBQUFxRyxJQUFJQyxZQUFZLEdBQUNDLHVCQUF1QixDQUFDQyxtQkFBTyxDQUFDLG9HQUFELENBQVIsQ0FBeEM7O0FBQXVGSCxvQkFBQSxHQUFxQkMsWUFBckI7O0FBQWtDLFNBQVNHLHdCQUFULEdBQW1DO0FBQUMsTUFBRyxPQUFPQyxPQUFQLEtBQWlCLFVBQXBCLEVBQStCLE9BQU8sSUFBUDtBQUFZLE1BQUlDLEtBQUssR0FBQyxJQUFJRCxPQUFKLEVBQVY7O0FBQXdCRCwwQkFBd0IsR0FBQyxvQ0FBVTtBQUFDLFdBQU9FLEtBQVA7QUFBYyxHQUFsRDs7QUFBbUQsU0FBT0EsS0FBUDtBQUFjOztBQUFBLFNBQVNKLHVCQUFULENBQWlDSyxHQUFqQyxFQUFxQztBQUFDLE1BQUdBLEdBQUcsSUFBRUEsR0FBRyxDQUFDQyxVQUFaLEVBQXVCO0FBQUMsV0FBT0QsR0FBUDtBQUFZOztBQUFBLE1BQUdBLEdBQUcsS0FBRyxJQUFOLElBQVksT0FBT0EsR0FBUCxLQUFhLFFBQWIsSUFBdUIsT0FBT0EsR0FBUCxLQUFhLFVBQW5ELEVBQThEO0FBQUMsV0FBTTtBQUFDLGlCQUFRQTtBQUFULEtBQU47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ZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhdGhUb1JlZ2V4cD1leHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5jdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zPWV4cG9ydHMubWF0Y2hlck9wdGlvbnM9dm9pZCAwO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7ZXhwb3J0cy5wYXRoVG9SZWdleHA9cGF0aFRvUmVnZXhwO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Y29uc3QgbWF0Y2hlck9wdGlvbnM9e3NlbnNpdGl2ZTpmYWxzZSxkZWxpbWl0ZXI6Jy8nfTtleHBvcnRzLm1hdGNoZXJPcHRpb25zPW1hdGNoZXJPcHRpb25zO2NvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9ey4uLm1hdGNoZXJPcHRpb25zLHN0cmljdDp0cnVlfTtleHBvcnRzLmN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM9Y3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczt2YXIgX2RlZmF1bHQ9KGN1c3RvbVJvdXRlPWZhbHNlKT0+e3JldHVybiBwYXRoPT57Y29uc3Qga2V5cz1bXTtjb25zdCBtYXRjaGVyUmVnZXg9cGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChwYXRoLGtleXMsY3VzdG9tUm91dGU/Y3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczptYXRjaGVyT3B0aW9ucyk7Y29uc3QgbWF0Y2hlcj1wYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsa2V5cyk7cmV0dXJuKHBhdGhuYW1lLHBhcmFtcyk9Pntjb25zdCByZXM9cGF0aG5hbWU9PW51bGw/ZmFsc2U6bWF0Y2hlcihwYXRobmFtZSk7aWYoIXJlcyl7cmV0dXJuIGZhbHNlO31pZihjdXN0b21Sb3V0ZSl7Zm9yKGNvbnN0IGtleSBvZiBrZXlzKXsvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4vLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbmlmKHR5cGVvZiBrZXkubmFtZT09PSdudW1iZXInKXtkZWxldGUgcmVzLnBhcmFtc1trZXkubmFtZV07fX19cmV0dXJuey4uLnBhcmFtcywuLi5yZXMucGFyYW1zfTt9O307fTtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXRoLW1hdGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWF0Y2hIYXM9bWF0Y2hIYXM7ZXhwb3J0cy5jb21waWxlTm9uUGF0aD1jb21waWxlTm9uUGF0aDtleHBvcnRzLmRlZmF1bHQ9cHJlcGFyZURlc3RpbmF0aW9uO2V4cG9ydHMuZ2V0U2FmZVBhcmFtTmFtZT12b2lkIDA7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBwYXRoVG9SZWdleHA9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cFwiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBlbnN1cmUgb25seSBhLXpBLVogYXJlIHVzZWQgZm9yIHBhcmFtIG5hbWVzIGZvciBwcm9wZXIgaW50ZXJwb2xhdGluZ1xuLy8gd2l0aCBwYXRoLXRvLXJlZ2V4cFxuY29uc3QgZ2V0U2FmZVBhcmFtTmFtZT1wYXJhbU5hbWU9PntsZXQgbmV3UGFyYW1OYW1lPScnO2ZvcihsZXQgaT0wO2k8cGFyYW1OYW1lLmxlbmd0aDtpKyspe2NvbnN0IGNoYXJDb2RlPXBhcmFtTmFtZS5jaGFyQ29kZUF0KGkpO2lmKGNoYXJDb2RlPjY0JiZjaGFyQ29kZTw5MXx8Ly8gQS1aXG5jaGFyQ29kZT45NiYmY2hhckNvZGU8MTIzLy8gYS16XG4pe25ld1BhcmFtTmFtZSs9cGFyYW1OYW1lW2ldO319cmV0dXJuIG5ld1BhcmFtTmFtZTt9O2V4cG9ydHMuZ2V0U2FmZVBhcmFtTmFtZT1nZXRTYWZlUGFyYW1OYW1lO2Z1bmN0aW9uIG1hdGNoSGFzKHJlcSxoYXMscXVlcnkpe2NvbnN0IHBhcmFtcz17fTtsZXQgaW5pdGlhbFF1ZXJ5VmFsdWVzPVtdO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7aW5pdGlhbFF1ZXJ5VmFsdWVzPU9iamVjdC52YWx1ZXMocmVxLl9fTkVYVF9JTklUX1FVRVJZKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXtpbml0aWFsUXVlcnlWYWx1ZXM9QXJyYXkuZnJvbShuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaCkudmFsdWVzKCkpO31jb25zdCBhbGxNYXRjaD1oYXMuZXZlcnkoaGFzSXRlbT0+e2xldCB2YWx1ZTtsZXQga2V5PWhhc0l0ZW0ua2V5O3N3aXRjaChoYXNJdGVtLnR5cGUpe2Nhc2UnaGVhZGVyJzp7a2V5PWtleS50b0xvd2VyQ2FzZSgpO3ZhbHVlPXJlcS5oZWFkZXJzW2tleV07YnJlYWs7fWNhc2UnY29va2llJzp7dmFsdWU9cmVxLmNvb2tpZXNbaGFzSXRlbS5rZXldO2JyZWFrO31jYXNlJ3F1ZXJ5Jzp7Ly8gcHJlc2VydmUgaW5pdGlhbCBlbmNvZGluZyBvZiBxdWVyeSB2YWx1ZXNcbnZhbHVlPXF1ZXJ5W2tleV07aWYoaW5pdGlhbFF1ZXJ5VmFsdWVzLmluY2x1ZGVzKHZhbHVlfHwnJykpe3ZhbHVlPWVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7fWJyZWFrO31jYXNlJ2hvc3QnOntjb25zdHtob3N0fT0ocmVxPT1udWxsP3ZvaWQgMDpyZXEuaGVhZGVycyl8fHt9Oy8vIHJlbW92ZSBwb3J0IGZyb20gaG9zdCBpZiBwcmVzZW50XG5jb25zdCBob3N0bmFtZT1ob3N0PT1udWxsP3ZvaWQgMDpob3N0LnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTt2YWx1ZT1ob3N0bmFtZTticmVhazt9ZGVmYXVsdDp7YnJlYWs7fX1pZighaGFzSXRlbS52YWx1ZSYmdmFsdWUpe3BhcmFtc1tnZXRTYWZlUGFyYW1OYW1lKGtleSldPXZhbHVlO3JldHVybiB0cnVlO31lbHNlIGlmKHZhbHVlKXtjb25zdCBtYXRjaGVyPW5ldyBSZWdFeHAoYF4ke2hhc0l0ZW0udmFsdWV9JGApO2NvbnN0IG1hdGNoZXM9dmFsdWUubWF0Y2gobWF0Y2hlcik7aWYobWF0Y2hlcyl7aWYobWF0Y2hlcy5ncm91cHMpe09iamVjdC5rZXlzKG1hdGNoZXMuZ3JvdXBzKS5mb3JFYWNoKGdyb3VwS2V5PT57cGFyYW1zW2dyb3VwS2V5XT1tYXRjaGVzLmdyb3Vwc1tncm91cEtleV07fSk7fWVsc2UgaWYoaGFzSXRlbS50eXBlPT09J2hvc3QnJiZtYXRjaGVzWzBdKXtwYXJhbXMuaG9zdD1tYXRjaGVzWzBdO31yZXR1cm4gdHJ1ZTt9fXJldHVybiBmYWxzZTt9KTtpZihhbGxNYXRjaCl7cmV0dXJuIHBhcmFtczt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBjb21waWxlTm9uUGF0aCh2YWx1ZSxwYXJhbXMpe2lmKCF2YWx1ZS5pbmNsdWRlcygnOicpKXtyZXR1cm4gdmFsdWU7fWZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocGFyYW1zKSl7aWYodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSl7dmFsdWU9dmFsdWUucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCdnJyksYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTYCkucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCdnJyksYDoke2tleX0tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT05gKS5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsJ2cnKSxgOiR7a2V5fS0tRVNDQVBFRF9QQVJBTV9QTFVTYCkucmVwbGFjZShuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwnZycpLGAtLUVTQ0FQRURfUEFSQU1fQ09MT04ke2tleX1gKTt9fXZhbHVlPXZhbHVlLnJlcGxhY2UoLyg6fFxcKnxcXD98XFwrfFxcKHxcXCl8XFx7fFxcfSkvZywnXFxcXCQxJykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywnKycpLnJlcGxhY2UoLy0tRVNDQVBFRF9QQVJBTV9DT0xPTi9nLCc6JykucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OL2csJz8nKS5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csJyonKTsvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbi8vIGNvcnJlY3RseVxucmV0dXJuIHBhdGhUb1JlZ2V4cC5jb21waWxlKGAvJHt2YWx1ZX1gLHt2YWxpZGF0ZTpmYWxzZX0pKHBhcmFtcykuc3Vic3RyKDEpO31mdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oZGVzdGluYXRpb24scGFyYW1zLHF1ZXJ5LGFwcGVuZFBhcmFtc1RvUXVlcnkpe2xldCBwYXJzZWREZXN0aW5hdGlvbj17fTsvLyBjbG9uZSBxdWVyeSBzbyB3ZSBkb24ndCBtb2RpZnkgdGhlIG9yaWdpbmFsXG5xdWVyeT1PYmplY3QuYXNzaWduKHt9LHF1ZXJ5KTtjb25zdCBoYWRMb2NhbGU9cXVlcnkuX19uZXh0TG9jYWxlO2RlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGU7ZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGU7aWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtwYXJzZWREZXN0aW5hdGlvbj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7fWVsc2V7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLGhhc2gsaG9zdG5hbWUscG9ydCxwcm90b2NvbCxzZWFyY2gsaHJlZn09bmV3IFVSTChkZXN0aW5hdGlvbik7cGFyc2VkRGVzdGluYXRpb249e3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLGhhc2gscHJvdG9jb2wsaG9zdG5hbWUscG9ydCxzZWFyY2gsaHJlZn07fWNvbnN0IGRlc3RRdWVyeT1wYXJzZWREZXN0aW5hdGlvbi5xdWVyeTtjb25zdCBkZXN0UGF0aD1gJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZX0ke3BhcnNlZERlc3RpbmF0aW9uLmhhc2h8fCcnfWA7Y29uc3QgZGVzdFBhdGhQYXJhbUtleXM9W107cGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCxkZXN0UGF0aFBhcmFtS2V5cyk7Y29uc3QgZGVzdFBhdGhQYXJhbXM9ZGVzdFBhdGhQYXJhbUtleXMubWFwKGtleT0+a2V5Lm5hbWUpO2xldCBkZXN0aW5hdGlvbkNvbXBpbGVyPXBhdGhUb1JlZ2V4cC5jb21waWxlKGRlc3RQYXRoLC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4vLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2Vcbi8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbi8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxue3ZhbGlkYXRlOmZhbHNlfSk7bGV0IG5ld1VybDsvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbmZvcihjb25zdFtrZXksc3RyT3JBcnJheV1vZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKXtsZXQgdmFsdWU9QXJyYXkuaXNBcnJheShzdHJPckFycmF5KT9zdHJPckFycmF5WzBdOnN0ck9yQXJyYXk7aWYodmFsdWUpey8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuLy8gY29ycmVjdGx5XG52YWx1ZT1jb21waWxlTm9uUGF0aCh2YWx1ZSxwYXJhbXMpO31kZXN0UXVlcnlba2V5XT12YWx1ZTt9Ly8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbmxldCBwYXJhbUtleXM9T2JqZWN0LmtleXMocGFyYW1zKTsvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbmlmKGhhZExvY2FsZSl7cGFyYW1LZXlzPXBhcmFtS2V5cy5maWx0ZXIobmFtZT0+bmFtZSE9PSduZXh0SW50ZXJuYWxMb2NhbGUnKTt9aWYoYXBwZW5kUGFyYW1zVG9RdWVyeSYmIXBhcmFtS2V5cy5zb21lKGtleT0+ZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSkpe2Zvcihjb25zdCBrZXkgb2YgcGFyYW1LZXlzKXtpZighKGtleSBpbiBkZXN0UXVlcnkpKXtkZXN0UXVlcnlba2V5XT1wYXJhbXNba2V5XTt9fX10cnl7bmV3VXJsPWRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKTtjb25zdFtwYXRobmFtZSxoYXNoXT1uZXdVcmwuc3BsaXQoJyMnKTtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZT1wYXRobmFtZTtwYXJzZWREZXN0aW5hdGlvbi5oYXNoPWAke2hhc2g/JyMnOicnfSR7aGFzaHx8Jyd9YDtkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoO31jYXRjaChlcnIpe2lmKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKXt0aHJvdyBuZXcgRXJyb3IoYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1tdWx0aS1tYXRjaGApO310aHJvdyBlcnI7fS8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4vLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbi8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbi8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5PXsuLi5xdWVyeSwuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeX07cmV0dXJue25ld1VybCxwYXJzZWREZXN0aW5hdGlvbn07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJlcGFyZS1kZXN0aW5hdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsga2FrYW9DYWxsYmFjayB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FwaS9rYWthb0NhbGxiYWNrXCI7XHJcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vc3RvcmUvY29udGV4dFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiO1xyXG5cclxuY29uc3QgS2FrYW9Mb2dpbiA9ICgpID0+IHtcclxuICBjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdG9yZSk7XHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb2RlID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZikuc2VhcmNoUGFyYW1zLmdldChcImNvZGVcIik7XHJcbiAgICBrYWthb0NhbGxiYWNrKGRpc3BhdGNoLCBjb2RlKTtcclxuICAgIC8vIGF3YWl0IGRpc3BhdGNoKHVzZXJBY3Rpb25zLmtha2FvTG9naW4oY29kZSkpO1xyXG4gICAgUm91dGVyLnB1c2goYC91c2VyL2pvaW4/aWQ9JHtkYXRhLnVzZXJpZH1gKSBcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj7subTsubTsmKQg66Gc6rWs7J24IOymgeyeheuLiOuPoDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLYWthb0xvZ2luO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PWV4cG9ydHMucm91dGU9dm9pZCAwO3ZhciBfcGF0aE1hdGNoPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaFwiKSk7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfcHJlcGFyZURlc3RpbmF0aW9uPXJlcXVpcmUoXCIuLi9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb25cIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCByb3V0ZT0oMCxfcGF0aE1hdGNoLmRlZmF1bHQpKCk7ZXhwb3J0cy5yb3V0ZT1yb3V0ZTtjb25zdCBjdXN0b21Sb3V0ZVR5cGVzPW5ldyBTZXQoWydyZXdyaXRlJywncmVkaXJlY3QnLCdoZWFkZXInXSk7ZnVuY3Rpb24gcmVwbGFjZUJhc2VQYXRoKGJhc2VQYXRoLHBhdGhuYW1lKXsvLyBJZiByZXBsYWNlIGVuZHMgdXAgcmVwbGFjaW5nIHRoZSBmdWxsIHVybCBpdCdsbCBiZSBgdW5kZWZpbmVkYCwgbWVhbmluZyB3ZSBoYXZlIHRvIGRlZmF1bHQgaXQgdG8gYC9gXG5yZXR1cm4gcGF0aG5hbWUucmVwbGFjZShiYXNlUGF0aCwnJyl8fCcvJzt9Y2xhc3MgUm91dGVye2NvbnN0cnVjdG9yKHtiYXNlUGF0aD0nJyxoZWFkZXJzPVtdLGZzUm91dGVzPVtdLHJld3JpdGVzPXtiZWZvcmVGaWxlczpbXSxhZnRlckZpbGVzOltdLGZhbGxiYWNrOltdfSxyZWRpcmVjdHM9W10sY2F0Y2hBbGxSb3V0ZSxkeW5hbWljUm91dGVzPVtdLHBhZ2VDaGVja2VyLHVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXMsbG9jYWxlcz1bXX0pe3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuaGVhZGVycz12b2lkIDA7dGhpcy5mc1JvdXRlcz12b2lkIDA7dGhpcy5yZWRpcmVjdHM9dm9pZCAwO3RoaXMucmV3cml0ZXM9dm9pZCAwO3RoaXMuY2F0Y2hBbGxSb3V0ZT12b2lkIDA7dGhpcy5wYWdlQ2hlY2tlcj12b2lkIDA7dGhpcy5keW5hbWljUm91dGVzPXZvaWQgMDt0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLmhlYWRlcnM9aGVhZGVyczt0aGlzLmZzUm91dGVzPWZzUm91dGVzO3RoaXMucmV3cml0ZXM9cmV3cml0ZXM7dGhpcy5yZWRpcmVjdHM9cmVkaXJlY3RzO3RoaXMucGFnZUNoZWNrZXI9cGFnZUNoZWNrZXI7dGhpcy5jYXRjaEFsbFJvdXRlPWNhdGNoQWxsUm91dGU7dGhpcy5keW5hbWljUm91dGVzPWR5bmFtaWNSb3V0ZXM7dGhpcy51c2VGaWxlU3lzdGVtUHVibGljUm91dGVzPXVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM7dGhpcy5sb2NhbGVzPWxvY2FsZXM7fXNldER5bmFtaWNSb3V0ZXMocm91dGVzPVtdKXt0aGlzLmR5bmFtaWNSb3V0ZXM9cm91dGVzO31hZGRGc1JvdXRlKGZzUm91dGUpe3RoaXMuZnNSb3V0ZXMudW5zaGlmdChmc1JvdXRlKTt9YXN5bmMgZXhlY3V0ZShyZXEscmVzLHBhcnNlZFVybCl7Ly8gbWVtb2l6ZSBwYWdlIGNoZWNrIGNhbGxzIHNvIHdlIGRvbid0IGR1cGxpY2F0ZSBjaGVja3MgZm9yIHBhZ2VzXG5jb25zdCBwYWdlQ2hlY2tzPXt9O2NvbnN0IG1lbW9pemVkUGFnZUNoZWNrZXI9YXN5bmMgcD0+e3A9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO2lmKHBhZ2VDaGVja3NbcF0pe3JldHVybiBwYWdlQ2hlY2tzW3BdO31jb25zdCByZXN1bHQ9dGhpcy5wYWdlQ2hlY2tlcihwKTtwYWdlQ2hlY2tzW3BdPXJlc3VsdDtyZXR1cm4gcmVzdWx0O307bGV0IHBhcnNlZFVybFVwZGF0ZWQ9cGFyc2VkVXJsO2NvbnN0IGFwcGx5Q2hlY2tUcnVlPWFzeW5jIGNoZWNrUGFyc2VkVXJsPT57Y29uc3Qgb3JpZ2luYWxGc1BhdGhuYW1lPWNoZWNrUGFyc2VkVXJsLnBhdGhuYW1lO2NvbnN0IGZzUGF0aG5hbWU9cmVwbGFjZUJhc2VQYXRoKHRoaXMuYmFzZVBhdGgsb3JpZ2luYWxGc1BhdGhuYW1lKTtmb3IoY29uc3QgZnNSb3V0ZSBvZiB0aGlzLmZzUm91dGVzKXtjb25zdCBmc1BhcmFtcz1mc1JvdXRlLm1hdGNoKGZzUGF0aG5hbWUpO2lmKGZzUGFyYW1zKXtjaGVja1BhcnNlZFVybC5wYXRobmFtZT1mc1BhdGhuYW1lO2NvbnN0IGZzUmVzdWx0PWF3YWl0IGZzUm91dGUuZm4ocmVxLHJlcyxmc1BhcmFtcyxjaGVja1BhcnNlZFVybCk7aWYoZnNSZXN1bHQuZmluaXNoZWQpe3JldHVybiB0cnVlO31jaGVja1BhcnNlZFVybC5wYXRobmFtZT1vcmlnaW5hbEZzUGF0aG5hbWU7fX1sZXQgbWF0Y2hlZFBhZ2U9YXdhaXQgbWVtb2l6ZWRQYWdlQ2hlY2tlcihmc1BhdGhuYW1lKTsvLyBJZiB3ZSBkaWRuJ3QgbWF0Y2ggYSBwYWdlIGNoZWNrIGR5bmFtaWMgcm91dGVzXG5pZighbWF0Y2hlZFBhZ2Upe2NvbnN0IG5vcm1hbGl6ZWRGc1BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGZzUGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtmb3IoY29uc3QgZHluYW1pY1JvdXRlIG9mIHRoaXMuZHluYW1pY1JvdXRlcyl7aWYoZHluYW1pY1JvdXRlLm1hdGNoKG5vcm1hbGl6ZWRGc1BhdGhuYW1lKSl7bWF0Y2hlZFBhZ2U9dHJ1ZTt9fX0vLyBNYXRjaGVkIGEgcGFnZSBvciBkeW5hbWljIHJvdXRlIHNvIHJlbmRlciBpdCB1c2luZyBjYXRjaEFsbFJvdXRlXG5pZihtYXRjaGVkUGFnZSl7Y29uc3QgcGFnZVBhcmFtcz10aGlzLmNhdGNoQWxsUm91dGUubWF0Y2goY2hlY2tQYXJzZWRVcmwucGF0aG5hbWUpO2NoZWNrUGFyc2VkVXJsLnBhdGhuYW1lPWZzUGF0aG5hbWU7Y2hlY2tQYXJzZWRVcmwucXVlcnkuX25leHRCdWJibGVOb0ZhbGxiYWNrPScxJztjb25zdCByZXN1bHQ9YXdhaXQgdGhpcy5jYXRjaEFsbFJvdXRlLmZuKHJlcSxyZXMscGFnZVBhcmFtcyxjaGVja1BhcnNlZFVybCk7cmV0dXJuIHJlc3VsdC5maW5pc2hlZDt9fTsvKlxuICAgICAgRGVzaXJlZCByb3V0ZXMgb3JkZXJcbiAgICAgIC0gaGVhZGVyc1xuICAgICAgLSByZWRpcmVjdHNcbiAgICAgIC0gQ2hlY2sgZmlsZXN5c3RlbSAoaW5jbHVkaW5nIHBhZ2VzKSwgaWYgbm90aGluZyBmb3VuZCBjb250aW51ZVxuICAgICAgLSBVc2VyIHJld3JpdGVzIChjaGVja2luZyBmaWxlc3lzdGVtIGFuZCBwYWdlcyBlYWNoIG1hdGNoKVxuICAgICovY29uc3QgYWxsUm91dGVzPVsuLi50aGlzLmhlYWRlcnMsLi4udGhpcy5yZWRpcmVjdHMsLi4udGhpcy5yZXdyaXRlcy5iZWZvcmVGaWxlcywuLi50aGlzLmZzUm91dGVzLC8vIFdlIG9ubHkgY2hlY2sgdGhlIGNhdGNoLWFsbCByb3V0ZSBpZiBwdWJsaWMgcGFnZSByb3V0ZXMgaGFzbid0IGJlZW5cbi8vIGRpc2FibGVkXG4uLi4odGhpcy51c2VGaWxlU3lzdGVtUHVibGljUm91dGVzP1t7dHlwZToncm91dGUnLG5hbWU6J3BhZ2UgY2hlY2tlcicscmVxdWlyZUJhc2VQYXRoOmZhbHNlLG1hdGNoOnJvdXRlKCcvOnBhdGgqJyksZm46YXN5bmMoY2hlY2tlclJlcSxjaGVja2VyUmVzLHBhcmFtcyxwYXJzZWRDaGVja2VyVXJsKT0+e2xldHtwYXRobmFtZX09cGFyc2VkQ2hlY2tlclVybDtwYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWV8fCcvJyk7aWYoIXBhdGhuYW1lKXtyZXR1cm57ZmluaXNoZWQ6ZmFsc2V9O31pZihhd2FpdCBtZW1vaXplZFBhZ2VDaGVja2VyKHBhdGhuYW1lKSl7cmV0dXJuIHRoaXMuY2F0Y2hBbGxSb3V0ZS5mbihjaGVja2VyUmVxLGNoZWNrZXJSZXMscGFyYW1zLHBhcnNlZENoZWNrZXJVcmwpO31yZXR1cm57ZmluaXNoZWQ6ZmFsc2V9O319XTpbXSksLi4udGhpcy5yZXdyaXRlcy5hZnRlckZpbGVzLC4uLih0aGlzLnJld3JpdGVzLmZhbGxiYWNrLmxlbmd0aD9be3R5cGU6J3JvdXRlJyxuYW1lOidkeW5hbWljIHJvdXRlL3BhZ2UgY2hlY2snLHJlcXVpcmVCYXNlUGF0aDpmYWxzZSxtYXRjaDpyb3V0ZSgnLzpwYXRoKicpLGZuOmFzeW5jKF9jaGVja2VyUmVxLF9jaGVja2VyUmVzLF9wYXJhbXMscGFyc2VkQ2hlY2tlclVybCk9PntyZXR1cm57ZmluaXNoZWQ6YXdhaXQgYXBwbHlDaGVja1RydWUocGFyc2VkQ2hlY2tlclVybCl9O319LC4uLnRoaXMucmV3cml0ZXMuZmFsbGJhY2tdOltdKSwvLyBXZSBvbmx5IGNoZWNrIHRoZSBjYXRjaC1hbGwgcm91dGUgaWYgcHVibGljIHBhZ2Ugcm91dGVzIGhhc24ndCBiZWVuXG4vLyBkaXNhYmxlZFxuLi4uKHRoaXMudXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcz9bdGhpcy5jYXRjaEFsbFJvdXRlXTpbXSldO2NvbnN0IG9yaWdpbmFsbHlIYWRCYXNlUGF0aD0hdGhpcy5iYXNlUGF0aHx8cmVxLl9uZXh0SGFkQmFzZVBhdGg7Zm9yKGNvbnN0IHRlc3RSb3V0ZSBvZiBhbGxSb3V0ZXMpey8vIGlmIGJhc2VQYXRoIGlzIGJlaW5nIHVzZWQsIHRoZSBiYXNlUGF0aCB3aWxsIHN0aWxsIGJlIGluY2x1ZGVkXG4vLyBpbiB0aGUgcGF0aG5hbWUgaGVyZSB0byBhbGxvdyBjdXN0b20tcm91dGVzIHRvIHJlcXVpcmUgY29udGFpbmluZ1xuLy8gaXQgb3Igbm90LCBmaWxlc3lzdGVtIHJvdXRlcyBhbmQgcGFnZXMgbXVzdCBhbHdheXMgaW5jbHVkZSB0aGUgYmFzZVBhdGhcbi8vIGlmIGl0IGlzIHNldFxubGV0IGN1cnJlbnRQYXRobmFtZT1wYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lO2NvbnN0IG9yaWdpbmFsUGF0aG5hbWU9Y3VycmVudFBhdGhuYW1lO2NvbnN0IHJlcXVpcmVCYXNlUGF0aD10ZXN0Um91dGUucmVxdWlyZUJhc2VQYXRoIT09ZmFsc2U7Y29uc3QgaXNDdXN0b21Sb3V0ZT1jdXN0b21Sb3V0ZVR5cGVzLmhhcyh0ZXN0Um91dGUudHlwZSk7Y29uc3QgaXNQdWJsaWNGb2xkZXJDYXRjaGFsbD10ZXN0Um91dGUubmFtZT09PSdwdWJsaWMgZm9sZGVyIGNhdGNoYWxsJztjb25zdCBrZWVwQmFzZVBhdGg9aXNDdXN0b21Sb3V0ZXx8aXNQdWJsaWNGb2xkZXJDYXRjaGFsbDtjb25zdCBrZWVwTG9jYWxlPWlzQ3VzdG9tUm91dGU7Y29uc3QgY3VycmVudFBhdGhuYW1lTm9CYXNlUGF0aD1yZXBsYWNlQmFzZVBhdGgodGhpcy5iYXNlUGF0aCxjdXJyZW50UGF0aG5hbWUpO2lmKCFrZWVwQmFzZVBhdGgpe2N1cnJlbnRQYXRobmFtZT1jdXJyZW50UGF0aG5hbWVOb0Jhc2VQYXRoO31jb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGN1cnJlbnRQYXRobmFtZU5vQmFzZVBhdGgsdGhpcy5sb2NhbGVzKTtjb25zdCBhY3RpdmVCYXNlUGF0aD1rZWVwQmFzZVBhdGg/dGhpcy5iYXNlUGF0aDonJztpZihrZWVwTG9jYWxlKXtpZighdGVzdFJvdXRlLmludGVybmFsJiZwYXJzZWRVcmwucXVlcnkuX19uZXh0TG9jYWxlJiYhbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7Y3VycmVudFBhdGhuYW1lPWAke2FjdGl2ZUJhc2VQYXRofS8ke3BhcnNlZFVybC5xdWVyeS5fX25leHRMb2NhbGV9JHtjdXJyZW50UGF0aG5hbWVOb0Jhc2VQYXRoPT09Jy8nPycnOmN1cnJlbnRQYXRobmFtZU5vQmFzZVBhdGh9YDt9aWYocmVxLl9fbmV4dEhhZFRyYWlsaW5nU2xhc2gmJiFjdXJyZW50UGF0aG5hbWUuZW5kc1dpdGgoJy8nKSl7Y3VycmVudFBhdGhuYW1lKz0nLyc7fX1lbHNle2N1cnJlbnRQYXRobmFtZT1gJHtyZXEuX25leHRIYWRCYXNlUGF0aD9hY3RpdmVCYXNlUGF0aDonJ30ke2FjdGl2ZUJhc2VQYXRoJiZsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lPT09Jy8nPycnOmxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWV9YDt9bGV0IG5ld1BhcmFtcz10ZXN0Um91dGUubWF0Y2goY3VycmVudFBhdGhuYW1lKTtpZih0ZXN0Um91dGUuaGFzJiZuZXdQYXJhbXMpe2NvbnN0IGhhc1BhcmFtcz0oMCxfcHJlcGFyZURlc3RpbmF0aW9uLm1hdGNoSGFzKShyZXEsdGVzdFJvdXRlLmhhcyxwYXJzZWRVcmxVcGRhdGVkLnF1ZXJ5KTtpZihoYXNQYXJhbXMpe09iamVjdC5hc3NpZ24obmV3UGFyYW1zLGhhc1BhcmFtcyk7fWVsc2V7bmV3UGFyYW1zPWZhbHNlO319Ly8gQ2hlY2sgaWYgdGhlIG1hdGNoIGZ1bmN0aW9uIG1hdGNoZWRcbmlmKG5ld1BhcmFtcyl7Ly8gc2luY2Ugd2UgcmVxdWlyZSBiYXNlUGF0aCBiZSBwcmVzZW50IGZvciBub24tY3VzdG9tLXJvdXRlcyB3ZVxuLy8gNDA0IGhlcmUgd2hlbiB3ZSBtYXRjaGVkIGFuIGZzIHJvdXRlXG5pZigha2VlcEJhc2VQYXRoKXtpZighb3JpZ2luYWxseUhhZEJhc2VQYXRoJiYhcmVxLl9uZXh0RGlkUmV3cml0ZSl7aWYocmVxdWlyZUJhc2VQYXRoKXsvLyBjb25zaWRlciB0aGlzIGEgbm9uLW1hdGNoIHNvIHRoZSA0MDQgcmVuZGVyc1xucmV0dXJuIGZhbHNlO30vLyBwYWdlIGNoZWNrZXIgb2NjdXJzIGJlZm9yZSByZXdyaXRlcyBzbyB3ZSBuZWVkIHRvIGNvbnRpbnVlXG4vLyB0byBjaGVjayB0aG9zZSBzaW5jZSB0aGV5IGRvbid0IGFsd2F5cyByZXF1aXJlIGJhc2VQYXRoXG5jb250aW51ZTt9cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1jdXJyZW50UGF0aG5hbWU7fWNvbnN0IHJlc3VsdD1hd2FpdCB0ZXN0Um91dGUuZm4ocmVxLHJlcyxuZXdQYXJhbXMscGFyc2VkVXJsVXBkYXRlZCk7Ly8gVGhlIHJlc3BvbnNlIHdhcyBoYW5kbGVkXG5pZihyZXN1bHQuZmluaXNoZWQpe3JldHVybiB0cnVlO30vLyBzaW5jZSB0aGUgZnMgcm91dGUgZGlkbid0IG1hdGNoIHdlIG5lZWQgdG8gcmUtYWRkIHRoZSBiYXNlUGF0aFxuLy8gdG8gY29udGludWUgY2hlY2tpbmcgcmV3cml0ZXMgd2l0aCB0aGUgYmFzZVBhdGggcHJlc2VudFxuaWYoIWtlZXBCYXNlUGF0aCl7cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1vcmlnaW5hbFBhdGhuYW1lO31pZihyZXN1bHQucGF0aG5hbWUpe3BhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU9cmVzdWx0LnBhdGhuYW1lO31pZihyZXN1bHQucXVlcnkpe3BhcnNlZFVybFVwZGF0ZWQucXVlcnk9ey4uLnBhcnNlZFVybFVwZGF0ZWQucXVlcnksLi4ucmVzdWx0LnF1ZXJ5fTt9Ly8gY2hlY2sgZmlsZXN5c3RlbVxuaWYodGVzdFJvdXRlLmNoZWNrPT09dHJ1ZSl7aWYoYXdhaXQgYXBwbHlDaGVja1RydWUocGFyc2VkVXJsVXBkYXRlZCkpe3JldHVybiB0cnVlO319fX1yZXR1cm4gZmFsc2U7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=