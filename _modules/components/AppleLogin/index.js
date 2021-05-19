"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppleLogin = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _ConfigContext = require("../../contexts/ConfigContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AppleLogin = function AppleLogin(props) {
  var _configs$apple_login_;

  var UIComponent = props.UIComponent,
      onSuccess = props.onSuccess,
      onFailure = props.onFailure,
      initParamsCustom = props.initParams,
      handleButtonAppleLoginClick = props.handleButtonAppleLoginClick;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var initParams = initParamsCustom || {
    clientId: configs === null || configs === void 0 ? void 0 : (_configs$apple_login_ = configs.apple_login_client_id) === null || _configs$apple_login_ === void 0 ? void 0 : _configs$apple_login_.value,
    redirectURI: !window.location.origin.includes('localhost') ? window.location.href : 'https://example-app.com/redirect',
    response_mode: 'form_post',
    response_type: 'code',
    state: 'state',
    scope: 'name email',
    nonce: 'nonce',
    usePopup: false // or true defaults to false

  };
  (0, _react.useEffect)(function () {
    window.addEventListener('AppleIDSignInOnSuccess', function (data) {
      onSuccess(data);
    });
    window.addEventListener('AppleIDSignInOnFailure', function (error) {
      onFailure(error);
    });
    createScriptApple();
    return function () {
      document.removeEventListener('AppleIDSignInOnSuccess');
      document.removeEventListener('AppleIDSignInOnFailure');
    };
  }, []);
  /**
   * loading script of de Apple login sdk
   */

  var createScriptApple = function createScriptApple() {
    if (window.document.getElementById('apple-login')) {
      return;
    }

    var js = window.document.createElement('script');
    js.id = 'apple-login';
    js.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
    js.async = true;
    js.defer = true;
    window.document.body.appendChild(js);
  };

  var handleAppleLoginClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(data) {
      var response;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!handleButtonAppleLoginClick) {
                _context.next = 3;
                break;
              }

              handleButtonAppleLoginClick(data);
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context.next = 7;
              return fetch("".concat(ordering.root, "/auth/apple"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  code: data.code
                })
              });

            case 7:
              response = _context.sent;
              setFormState({
                result: response.content,
                loading: false
              });

              if (!response.content.error) {
                if (onSuccess) {
                  onSuccess(response.content.result);
                }
              } else {
                if (onFailure) {
                  onFailure(response.content.result);
                }
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](3);
              setFormState({
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 12]]);
    }));

    return function handleAppleLoginClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * start Login Apple
   */


  var initLoginApple = function initLoginApple() {
    window.AppleID.auth.init(initParams);
    handleLoginApple();
  };
  /**
   * handilng the response of login apple when login
   */


  var handleLoginApple = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var data;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return window.AppleID.auth.signIn();

            case 3:
              data = _context2.sent;
              console.log(data);
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.log('error', _context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function handleLoginApple() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    initLoginApple: initLoginApple,
    handleAppleLoginClick: handleAppleLoginClick
  })));
};

exports.AppleLogin = AppleLogin;
AppleLogin.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * loading script of de Apple login sdk
   */
  createScriptApple: _propTypes.default.func,

  /**
   * start Login Apple
   */
  initLoginApple: _propTypes.default.func,

  /**
   * handilng the response of login apple when login
   */
  handleLoginApple: _propTypes.default.func,

  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AppleLogin.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
var _default = AppleLogin;
exports.default = _default;