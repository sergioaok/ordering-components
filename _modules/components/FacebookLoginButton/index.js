"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FacebookLoginButton = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage Facebook login behavior without UI component
 */
var FacebookLoginButton = function FacebookLoginButton(props) {
  var UIComponent = props.UIComponent,
      appId = props.appId,
      debug = props.debug,
      version = props.version,
      language = props.language,
      domain = props.domain,
      handleButtonFacebookLoginClick = props.handleButtonFacebookLoginClick,
      handleSuccessFacebookLogin = props.handleSuccessFacebookLogin,
      handleSuccessFacebookLogout = props.handleSuccessFacebookLogout;

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

  var _useState3 = (0, _react.useState)({
    ready: false,
    logged: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      facebookStatus = _useState4[0],
      setFacebookStatus = _useState4[1];

  var wasUnmounted = false;
  (0, _react.useEffect)(function () {
    if (window.document.getElementById('facebook-jssdk')) {
      return;
    }

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: appId,
        cookie: true,
        xfbml: false,
        version: version,
        status: true
      });
      !wasUnmounted && setFacebookStatus(_objectSpread(_objectSpread({}, facebookStatus), {}, {
        ready: true
      }));
      window.FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          !wasUnmounted && setFacebookStatus(_objectSpread(_objectSpread({}, facebookStatus), {}, {
            logged: true
          }));
        }
      });
    };

    var js = window.document.createElement('script');
    var fjs = window.document.getElementsByTagName('script')[0];
    js.id = 'facebook-jssdk';
    js.async = true;
    js.defer = true;
    js.src = "https://".concat(domain, "/").concat(language, "/sdk").concat(debug ? '/debug' : '', ".js");
    fjs.parentNode.insertBefore(js, fjs);
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      wasUnmounted = true;
    };
  }, []);
  /**
   * Default fuction for login/signup with Facebook workflow
   * @param {object} Result from facebook
   */

  var handleFacebookLoginClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(facebookResponse) {
      var _facebookResponse$aut, response;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!handleButtonFacebookLoginClick) {
                _context.next = 3;
                break;
              }

              handleButtonFacebookLoginClick(facebookResponse);
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context.next = 7;
              return ordering.users().authFacebook({
                access_token: (_facebookResponse$aut = facebookResponse.authResponse) === null || _facebookResponse$aut === void 0 ? void 0 : _facebookResponse$aut.accessToken
              });

            case 7:
              response = _context.sent;
              setFormState({
                result: response.content,
                loading: false
              });

              if (!response.content.error) {
                if (handleSuccessFacebookLogin) {
                  handleSuccessFacebookLogin(response.content.result);
                }
              } else {
                handleFacebookLogout();
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

    return function handleFacebookLoginClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Start Facebook login
   * @param {EventTarget} e Click button event
   */


  var handleFacebookLogin = function handleFacebookLogin(e) {
    if (window.FB) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        loading: true
      }));
      window.FB.login(function (response) {
        if (response.status === 'connected') {
          setFormState({
            loading: false,
            result: {
              error: false
            }
          });
          setFacebookStatus(_objectSpread(_objectSpread({}, facebookStatus), {}, {
            logged: true
          }));
          handleFacebookLoginClick(response);
        } else {
          setFormState({
            loading: false,
            result: {
              error: true,
              result: 'Error login with Facebook'
            }
          });
        }
      });
    }
  };
  /**
   * Start Facebook logout
   * @param {EventTarget} e Click button event
   */


  var handleFacebookLogout = function handleFacebookLogout(e) {
    if (window.FB) {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        loading: true
      }));
      window.FB.logout(function (response) {
        setFormState({
          loading: false,
          result: {
            error: false
          }
        });
        setFacebookStatus(_objectSpread(_objectSpread({}, facebookStatus), {}, {
          logged: false
        }));

        if (handleSuccessFacebookLogout) {
          handleSuccessFacebookLogout(response);
        }
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    facebookStatus: facebookStatus,
    handleFacebookLogout: handleFacebookLogout,
    handleFacebookLogin: handleFacebookLogin
  })));
};

exports.FacebookLoginButton = FacebookLoginButton;
FacebookLoginButton.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Function to change default forgot password behavior
   */
  handleButtonForgotPassowrdClick: _propTypes.default.func,

  /**
   * Function to get forgot password success event
   * @param {string} email Email to which it was sent
   */
  handleSuccessForgotPassoword: _propTypes.default.func,

  /**
   * Default email to forgot password form
   */
  appId: _propTypes.default.string.isRequired,

  /**
   * Enable/Disable Facebook login debug mode
   */
  debug: _propTypes.default.bool,

  /**
   * Facebook SDK version
   */
  version: _propTypes.default.string,

  /**
   * Facebook SDK languages
   */
  language: _propTypes.default.string,

  /**
   * Facebook SDK domain
   */
  domain: _propTypes.default.string,

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
FacebookLoginButton.defaultProps = {
  version: 'v7.0',
  language: 'en_US',
  domain: 'connect.facebook.net',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
var _default = FacebookLoginButton;
exports.default = _default;