/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js?!./src/components/Header/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js??ref--5-1!./src/components/Header/style.css ***!
  \***********************************************************************************************************/
/*! exports provided: model, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model\", function() { return model; });\n/* harmony import */ var _node_modules_css_loader_4_2_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/_css-loader@4.2.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@4.2.1@css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_4_2_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_2_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_2_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".src-components-Header-style__model--3w4ac{\\n    background: pink\\n}\", \"\"]);\n// Exports\nconst model = \"src-components-Header-style__model--3w4ac\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/components/Header/style.css?./node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js?!./src/containers/Home/style.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js??ref--5-1!./src/containers/Home/style.css ***!
  \*********************************************************************************************************/
/*! exports provided: test, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"test\", function() { return test; });\n/* harmony import */ var _node_modules_css_loader_4_2_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/_css-loader@4.2.1@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@4.2.1@css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_4_2_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_2_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_2_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n    background: green\\n}\\n.src-containers-Home-style__test--t431J {\\n    margin-top: 50px;\\n    background: red\\n}\", \"\"]);\n// Exports\nconst test = \"src-containers-Home-style__test--t431J\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/containers/Home/style.css?./node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/_css-loader@4.2.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@4.2.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@4.2.1@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack:///./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _index = __webpack_require__(/*! ./components/Header/index */ \"./src/components/Header/index.js\");\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _index3 = __webpack_require__(/*! ./components/Header/store/index */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//同构:一套react代码,在服务器端执行一次,在客户端执行一次\nvar App = function App(props) {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_index2.default, { staticContext: props.staticContext }),\n        (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n    );\n};\nApp.loadData = function (store) {\n    //服务器端渲染就行\n    return store.dispatch(_index3.actions.getHeaderInfo());\n};\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Translation = __webpack_require__(/*! ./containers/Translation */ \"./src/containers/Translation/index.js\");\n\nvar _Translation2 = _interopRequireDefault(_Translation);\n\nvar _NotFound = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import React from 'react'\n// import { Route } from 'react-router-dom';\nexports.default = [{\n    path: '/',\n    component: _App2.default,\n    loadData: _App2.default.loadData,\n    routes: [{\n        path: \"/\",\n        component: _Home2.default,\n        exact: true,\n        loadData: _Home2.default.loadData,\n        key: 'home'\n    }, {\n        path: \"/translation\",\n        component: _Translation2.default,\n        exact: true,\n        loadData: _Translation2.default.loadData,\n        key: 'translation'\n    }, {\n        component: _NotFound2.default\n    }]\n}];\n// export default (\n//     <div>\n//         <Route path=\"/login\" exact component={Login} ></Route>\n//     </div>\n// )\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _config = __webpack_require__(/*! ../config */ \"./src/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//配置secret\nvar instance = _axios2.default.create({\n    baseURL: '/'\n    // params:{\n    //     secret:config.secret\n    // }  密钥\n});\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _index = __webpack_require__(/*! ./store/index */ \"./src/components/Header/store/index.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/components/Header/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nvar _withStyle = __webpack_require__(/*! ../../withStyle */ \"./src/withStyle.js\");\n\nvar _withStyle2 = _interopRequireDefault(_withStyle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//高阶组件渲染!!!\nvar Header = function (_Component) {\n    _inherits(Header, _Component);\n\n    function Header() {\n        _classCallCheck(this, Header);\n\n        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n    }\n\n    _createClass(Header, [{\n        key: 'render',\n\n        // componentWillMount() {\n        //     if (this.props.staticContext) {\n        //         console.log(styles);\n        //         // this.props.staticContext.css.push(styles._getCss()) 假装实现\n        //         this.props.staticContext.css.push('.model{background: pink}')\n        //     }\n        // }\n        value: function render() {\n            var _props = this.props,\n                login = _props.login,\n                handleLogin = _props.handleLogin,\n                handleLogout = _props.handleLogout;\n\n            return (\n                // <div className={styles.model}> //下面假装成功\n                _react2.default.createElement(\n                    'div',\n                    { className: 'model' },\n                    _react2.default.createElement(\n                        _reactRouterDom.Link,\n                        { to: '/' },\n                        '\\u9996\\u9875'\n                    ),\n                    _react2.default.createElement('br', null),\n                    login ? _react2.default.createElement(\n                        _react.Fragment,\n                        null,\n                        _react2.default.createElement(\n                            'div',\n                            { onClick: handleLogout },\n                            '\\u9000\\u51FA'\n                        ),\n                        _react2.default.createElement('br', null),\n                        _react2.default.createElement(\n                            _reactRouterDom.Link,\n                            { to: '/translation' },\n                            '\\u7FFB\\u8BD1\\u5217\\u8868'\n                        )\n                    ) : _react2.default.createElement(\n                        'div',\n                        { onClick: handleLogin },\n                        '\\u767B\\u5F55'\n                    ),\n                    _react2.default.createElement('br', null)\n                )\n            );\n        }\n    }]);\n\n    return Header;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        login: state.header.login\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        //客户端渲染执行就可以\n        handleLogin: function handleLogin() {\n            dispatch(_index.actions.login());\n        },\n        handleLogout: function handleLogout() {\n            dispatch(_index.actions.logout());\n        }\n    };\n};\n\n// export default connect(mapStateToProps, mapDispatchToProps)(Header)\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _withStyle2.default)(Header, _style2.default)); //这样渲染\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.logout = exports.login = exports.getHeaderInfo = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar changeLogin = function changeLogin(value) {\n    return {\n        type: _constants.CHANGE_LOGIN,\n        value: value\n    };\n};\n\n//获取登录状态\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n    return function (dispatch, getState, axiosInstance) {\n        return axiosInstance.get('/users/matz/followers?page=2').then(function (res) {\n            // console.log(res);\n            //手动false\n            dispatch(changeLogin(false));\n        }) //必须的有catch\n        .catch(function (err) {\n            console.log(err);\n        });\n    };\n};\n\n//登录\nvar login = exports.login = function login() {\n    return function (dispatch, getState, axiosInstance) {\n        return axiosInstance.get('/users/matz/followers?page=2').then(function (res) {\n            //手动true\n            dispatch(changeLogin(true));\n        }) //必须的有catch\n        .catch(function (err) {\n            console.log(err);\n        });\n    };\n};\n\n//退出登录\nvar logout = exports.logout = function logout() {\n    return function (dispatch, getState, axiosInstance) {\n        return axiosInstance.get('/users/matz/followers?page=2').then(function (res) {\n            //手动false\n            dispatch(changeLogin(false));\n        }) //必须的有catch\n        .catch(function (err) {\n            console.log(err);\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'HEADER/CHANGE_LOGIN';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = actions;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar defaultState = {\n    login: false\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constants.CHANGE_LOGIN:\n            return _extends({}, state, {\n                login: action.value\n            });\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/components/Header/style.css":
/*!*****************************************!*\
  !*** ./src/components/Header/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js?!./src/components/Header/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/components/Header/style.css?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = {\n    secret: 'abcd'\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Home/store/actions.js\");\n\nvar _style = __webpack_require__(/*! ./style.css */ \"./src/containers/Home/style.css\");\n\nvar _style2 = _interopRequireDefault(_style);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n//同构:一套react代码,在服务器端执行一次,在客户端执行一次\n\n\nvar Home = function (_Component) {\n    _inherits(Home, _Component);\n\n    function Home() {\n        _classCallCheck(this, Home);\n\n        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n    }\n\n    _createClass(Home, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            if (this.props.staticContext) {\n                // console.log(styles._getContent());\n                this.props.staticContext.css.push('body{background: green}.test {margin-top: 50px;background: red}');\n            }\n        }\n    }, {\n        key: 'getList',\n        value: function getList() {\n            var list = this.props.list;\n\n            return list.map(function (item) {\n                return _react2.default.createElement(\n                    'div',\n                    { key: item.id },\n                    ' \\u767B\\u5F55\\u540D:',\n                    item.login,\n                    ' '\n                );\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return (\n                // <div className={styles.model}>\n                _react2.default.createElement(\n                    'div',\n                    { className: 'test' },\n                    this.getList(),\n                    _react2.default.createElement(\n                        'button',\n                        { onClick: function onClick() {\n                                alert('click');\n                            } },\n                        'click'\n                    ),\n                    ' '\n                )\n            );\n        }\n        //只会客户端渲染会执行\n\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            //必须有,服务器渲染只是第一次!!!解决加载其他页,跳转的问题\n            if (!this.props.list.length) {\n                this.props.getHomeList();\n            }\n        }\n    }]);\n\n    return Home;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        list: state.home.newsList\n        // name: state.home.name\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        getHomeList: function getHomeList() {\n            dispatch((0, _actions.getHomeList)());\n        }\n    };\n};\n\nvar ExportHome = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);\nExportHome.loadData = function (store) {\n    //这个函数负责在服务器端渲染之前,把这个路由器需要的数据提前加载好\n    return store.dispatch((0, _actions.getHomeList)());\n};\nexports.default = ExportHome;\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/actions.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/actions.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getHomeList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar changeList = function changeList(list) {\n    return {\n        type: _constants.CHANGE_LIST,\n        list: list\n    };\n};\nvar getHomeList = exports.getHomeList = function getHomeList() {\n    // const request = server ? serverAxios : clientAxios\n    return function (dispatch, getState, axiosInstance) {\n        //服务器渲染使用的promise异步加载\n        // https://api.github.com/users/matz/followers?page=2 网站https://www.jianshu.com/p/4ffba1bc5b5d\n        return axiosInstance.get('/users/matz/followers?page=2').then(function (res) {\n            var list = res.data;\n            dispatch(changeList(list));\n        }); //必须的有catch\n        // .catch(err => {\n        //     console.log(err);\n        // })\n    };\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/actions.js?");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'HOME/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Home/store/constants.js?");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Home/store/index.js?");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\nvar defaultState = {\n    // name: 'zhengwei1',\n    newsList: []\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constants.CHANGE_LIST:\n            var newState = _extends({}, state, {\n                newsList: action.list\n            });\n            return newState;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/containers/Home/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/style.css":
/*!***************************************!*\
  !*** ./src/containers/Home/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !../../../node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js??ref--5-1!./style.css */ \"./node_modules/_css-loader@4.2.1@css-loader/dist/cjs.js?!./src/containers/Home/style.css\");\n    var insertCss = __webpack_require__(/*! ../../../node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js */ \"./node_modules/_isomorphic-style-loader@5.1.0@isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.i, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/containers/Home/style.css?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFound = function (_Component) {\n    _inherits(NotFound, _Component);\n\n    function NotFound() {\n        _classCallCheck(this, NotFound);\n\n        return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));\n    }\n\n    _createClass(NotFound, [{\n        key: 'componentWillMount',\n        value: function componentWillMount() {\n            var staticContext = this.props.staticContext;\n\n            if (staticContext) {\n                staticContext.NOT_FOUND = true;\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                '404,page not found'\n            );\n        }\n    }]);\n\n    return NotFound;\n}(_react.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/containers/Translation/index.js":
/*!*********************************************!*\
  !*** ./src/containers/Translation/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ./store/actions */ \"./src/containers/Translation/store/actions.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Translation = function (_Component) {\n    _inherits(Translation, _Component);\n\n    function Translation() {\n        _classCallCheck(this, Translation);\n\n        return _possibleConstructorReturn(this, (Translation.__proto__ || Object.getPrototypeOf(Translation)).apply(this, arguments));\n    }\n\n    _createClass(Translation, [{\n        key: 'getList',\n        value: function getList() {\n            var list = this.props.list;\n\n            return list.map(function (item) {\n                return _react2.default.createElement(\n                    'div',\n                    { key: item.id },\n                    ' \\u7FFB\\u8BD1\\u540E:',\n                    item.login,\n                    ' '\n                );\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return this.props.login ? _react2.default.createElement(\n                'div',\n                null,\n                this.getList()\n            ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n        }\n    }, {\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            if (!this.props.list.length) {\n                this.props.getTranslationList();\n            }\n        }\n    }]);\n\n    return Translation;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        list: state.translation.translationList,\n        login: state.header.login\n    };\n};\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        getTranslationList: function getTranslationList() {\n            dispatch((0, _actions.getTranslationList)());\n        }\n    };\n};\nvar ExportTranslation = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Translation);\n\nExportTranslation.loadData = function (store) {\n    //这个函数负责在服务器端渲染之前,把这个路由器需要的数据提前加载好\n    return store.dispatch((0, _actions.getTranslationList)());\n};\nexports.default = ExportTranslation;\n\n//# sourceURL=webpack:///./src/containers/Translation/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/actions.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getTranslationList = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\nvar changeList = function changeList(list) {\n    return {\n        type: _constants.CHANGE_LIST,\n        list: list\n    };\n};\nvar getTranslationList = exports.getTranslationList = function getTranslationList() {\n    return function (dispatch, getState, axiosInstance) {\n        // https://api.github.com/users/matz/followers?page=2 网站https://www.jianshu.com/p/4ffba1bc5b5d\n        return axiosInstance.get('/users/matz/followers?page=2').then(function (res) {\n            //判断是否是登录状态,手动设置为true\n            if (true) {\n                var list = res.data;\n                dispatch(changeList(list));\n            } else { var _list; }\n        }) //必须的有catch\n        .catch(function (err) {\n            console.log(err);\n        });\n    };\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/actions.js?");

/***/ }),

/***/ "./src/containers/Translation/store/constants.js":
/*!*******************************************************!*\
  !*** ./src/containers/Translation/store/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LIST = exports.CHANGE_LIST = 'TRANSLATION/CHANGE_LIST';\n\n//# sourceURL=webpack:///./src/containers/Translation/store/constants.js?");

/***/ }),

/***/ "./src/containers/Translation/store/index.js":
/*!***************************************************!*\
  !*** ./src/containers/Translation/store/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/containers/Translation/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\n\n//# sourceURL=webpack:///./src/containers/Translation/store/index.js?");

/***/ }),

/***/ "./src/containers/Translation/store/reducer.js":
/*!*****************************************************!*\
  !*** ./src/containers/Translation/store/reducer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/containers/Translation/store/constants.js\");\n\nvar defaultState = {\n    translationList: []\n};\n\nexports.default = function () {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n    var action = arguments[1];\n\n    switch (action.type) {\n        case _constants.CHANGE_LIST:\n            var newState = _extends({}, state, {\n                translationList: action.list\n            });\n            return newState;\n        default:\n            return state;\n    }\n};\n\n//# sourceURL=webpack:///./src/containers/Translation/store/reducer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _util = __webpack_require__(/*! ./util */ \"./src/server/util.js\");\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//匹配多层次路由\nvar app = (0, _express2.default)();\n//客户端渲染 =>React在浏览器上执行,消耗的是用户浏览器的性能\n//服务器端渲染 =>React代码在服务器上执行,消耗的是服务器端的性能\n\napp.use(_express2.default.static('public')); //发现你请求静态文件(下面的index.js),从根目录public中找\napp.use('/users', (0, _expressHttpProxy2.default)('https://api.github.com', { //把node server 当做中间层\n    proxyReqPathResolver: function proxyReqPathResolver(req) {\n        // 课程中 return 'ssr/api'+req.url\n        return '/users' + req.url;\n    }\n}));\n// 虚拟dom原理=>虚拟dom是真实dom的一个js对象映射\n\napp.get('*', function (req, res) {\n    var store = (0, _store.getStore)(req);\n    //根据路由的路径,来往store里面加数据\n    var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n    //让matchRoutes中所有的组件,对应的loadData方法执行一次\n    var promises = [];\n    matchedRoutes.forEach(function (item) {\n        // promise函数是异步的\n        if (item.route.loadData) {\n            //页面要加载A,B,C,D四个组件,这四个组件都需要服务器端加载数据 promises=[A,B,C,D]\n            //A数据有误,会调用catch,外部promise成功的\n            var promise = new Promise(function (resolve, reject) {\n                item.route.loadData(store).then(resolve).catch(resolve); //操作store函数!!!(本身就是异步的)\n            }); //让外层Promise成功!!!\n            promises.push(promise);\n        }\n    });\n    //页面要加载A,B,C,D四个组件,这四个组件都需要服务器端加载数据 promises=[A,B,C,D]\n    //假设A错误,BCD几种情况\n    //1.BCD已经加载完成了\n    //2.BCD接口慢,BCD没有加载完成,pending,store中就没有数据了\n\n    //等待所有的promise执行成功,再执行下面的\n    Promise.all(promises).then(function () {\n        var context = {\n            css: []\n        };\n        var html = (0, _util.render)(store, _Routes2.default, req, context);\n        // 重定向时会自动帮你发现redirect (StaticRouter结合renderRoutes)\n        if (context.action == 'REPLACE') {\n            //服务器端重定向301\n            res.redirect(301, context.url);\n        } else if (context.NOT_FOUND) {\n            res.status(404);\n            res.send(html);\n        } else {\n            //渲染模板\n            res.send(html);\n        }\n    });\n    // .catch(() => {\n    //     res.end('sorry,request error')\n    // })\n});\n\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar createInstance = function createInstance(req) {\n    return _axios2.default.create({\n        //api接口地址:https://api.apiopen.top/getJoke?page=1&count=2&type=video\n        baseURL: 'https://api.github.com', //正常http://api/ssr/abc.json可以,这个请求不可以\n        headers: {\n            // 跨域请求 这个配置不能少  \n            // \"Content-Type\": \"application/x-www-form-urlencoded;charset=UTF-8\",\n            // 'Accept': 'application/json',\n            cookie: req.get('cookie') || '' //获取客户端cookie\n        }\n    });\n};\n\nexports.default = createInstance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/util.js":
/*!****************************!*\
  !*** ./src/server/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//作为模板渲染\nvar render = exports.render = function render(store, routes, req, context) {\n    var content = (0, _server.renderToString)(\n    //Static不会自动识别   //context数据传递\n    _react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.path, context: context },\n            _react2.default.createElement(\n                'div',\n                null,\n                (0, _reactRouterConfig.renderRoutes)(routes)\n            )\n        )\n    ));\n    var cssStr = context.css.length ? context.css.join('\\n') : '';\n    //window.context 数据注水 // \n    return '<html>\\n    <head><title>React\\u7684SSR\\u6E32\\u67D3</title>\\n    <style> ' + cssStr + '</style>\\n    </head>\\n    <body>\\n        <div id=\\'root\\'>' + content + '</div>\\n        <script>\\n        window.context={\\n            state:' + JSON.stringify(store.getState()) + '\\n        }\\n        </script>\\n        <script src=\"/index.js\"></script>\\n        </body>\\n    </html>';\n};\n\n//# sourceURL=webpack:///./src/server/util.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _store = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\nvar _store2 = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n\nvar _store3 = __webpack_require__(/*! ../containers/Translation/store */ \"./src/containers/Translation/store/index.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar reducer = (0, _redux.combineReducers)({\n    home: _store.reducer,\n    header: _store2.reducer,\n    translation: _store3.reducer\n});\nvar getStore = exports.getStore = function getStore(req) {\n    //req用来实现传递cookie\n    //改变服务器端store内容,使用serverAxios\n    return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req)))); //把serverAxios改成函数\n};\nvar getClientStore = exports.getClientStore = function getClientStore() {\n    //数据脱水,让客户端快速渲染服务器生成的window.context.state\n    //改变客户端端store内容,使用clientAxios\n    var defaultState = window.context.state;\n    return (0, _redux.createStore)(reducer, defaultState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/withStyle.js":
/*!**************************!*\
  !*** ./src/withStyle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //这个函数返回一个组件,高阶组件\n//这个函数是生成高阶组件的函数\n\n\nexports.default = function (DecoratedComponent, styles) {\n    return function (_Component) {\n        _inherits(NewComponent, _Component);\n\n        function NewComponent() {\n            _classCallCheck(this, NewComponent);\n\n            return _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).apply(this, arguments));\n        }\n\n        _createClass(NewComponent, [{\n            key: 'componentWillMount',\n            value: function componentWillMount() {\n                if (this.props.staticContext) {\n                    // console.log(styles._getCss());\n                    this.props.staticContext.css.push('.model{background: pink}');\n                }\n            }\n        }, {\n            key: 'render',\n            value: function render() {\n                return _react2.default.createElement(DecoratedComponent, this.props);\n            }\n        }]);\n\n        return NewComponent;\n    }(_react.Component);\n};\n\n//# sourceURL=webpack:///./src/withStyle.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });