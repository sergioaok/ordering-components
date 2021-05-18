"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _EventContext = require("../../contexts/EventContext");

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

/**
 * Component to manage login behavior without UI component
 */
var LoginForm = function LoginForm(props) {
  var UIComponent = props.UIComponent,
      handleButtonLoginClick = props.handleButtonLoginClick,
      handleSuccessLogin = props.handleSuccessLogin,
      useLoginByEmail = props.useLoginByEmail,
      useLoginByCellphone = props.useLoginByCellphone,
      useDefualtSessionManager = props.useDefualtSessionManager,
      urlToRedirect = props.urlToRedirect,
      allowedLevels = props.allowedLevels,
      handleCustomLogin = props.handleCustomLogin;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var defaultLoginTab = props.defaultLoginTab;

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
    email: '',
    cellphone: '',
    password: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      credentials = _useState4[0],
      setCredentials = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      verifyPhoneState = _useState6[0],
      setVerifyPhoneState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      checkPhoneCodeState = _useState8[0],
      setCheckPhoneCodeState = _useState8[1];

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  if (!useLoginByEmail && !useLoginByCellphone) {
    defaultLoginTab = 'none';
  } else if (defaultLoginTab === 'email' && !useLoginByEmail && useLoginByCellphone) {
    defaultLoginTab = 'cellphone';
  } else if (defaultLoginTab === 'cellphone' && !useLoginByCellphone && useLoginByEmail) {
    defaultLoginTab = 'email';
  }

  var _useState9 = (0, _react.useState)(defaultLoginTab || (useLoginByCellphone && !useLoginByEmail ? 'cellphone' : 'email')),
      _useState10 = _slicedToArray(_useState9, 2),
      loginTab = _useState10[0],
      setLoginTab = _useState10[1];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      _useSession2$ = _useSession2[1],
      login = _useSession2$.login,
      logout = _useSession2$.logout;
  /**
   * Default fuction for login workflow
   * @param {object} credentials Login credentials email/cellphone and password
   */


  var handleLoginClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(values) {
      var _credentials2, _credentials$cellphon, _credentials, parsedNumber, cellphone, _yield$ordering$users, _yield$ordering$users2, error, result, _result$session, level, session, access_token, _yield$ordering$setAc, logoutResp;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!handleCustomLogin) {
                _context.next = 3;
                break;
              }

              handleCustomLogin(values || credentials, loginTab);
              return _context.abrupt("return");

            case 3:
              _context.prev = 3;
              _credentials = (_credentials2 = {}, _defineProperty(_credentials2, loginTab, values && values[loginTab] || credentials[loginTab]), _defineProperty(_credentials2, "password", values && (values === null || values === void 0 ? void 0 : values.password) || credentials.password), _credentials2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));

              if (_credentials === null || _credentials === void 0 ? void 0 : (_credentials$cellphon = _credentials.cellphone) === null || _credentials$cellphon === void 0 ? void 0 : _credentials$cellphon.includes('+')) {
                parsedNumber = (0, _libphonenumberJs.default)(_credentials.cellphone);
                cellphone = parsedNumber === null || parsedNumber === void 0 ? void 0 : parsedNumber.nationalNumber;
                _credentials.cellphone = cellphone;
              }

              _context.next = 9;
              return ordering.users().auth(_credentials);

            case 9:
              _yield$ordering$users = _context.sent;
              _yield$ordering$users2 = _yield$ordering$users.content;
              error = _yield$ordering$users2.error;
              result = _yield$ordering$users2.result;

              if (error) {
                _context.next = 36;
                break;
              }

              if (!useDefualtSessionManager) {
                _context.next = 33;
                break;
              }

              if (!(allowedLevels && (allowedLevels === null || allowedLevels === void 0 ? void 0 : allowedLevels.length) > 0)) {
                _context.next = 32;
                break;
              }

              level = result.level, session = result.session;
              access_token = session === null || session === void 0 ? void 0 : session.access_token;

              if (allowedLevels.includes(level)) {
                _context.next = 32;
                break;
              }

              _context.prev = 19;
              _context.next = 22;
              return ordering.setAccessToken(access_token).users().logout();

            case 22:
              _yield$ordering$setAc = _context.sent;
              logoutResp = _yield$ordering$setAc.content;

              if (!logoutResp.error) {
                logout();
              }

              setFormState({
                result: {
                  error: true,
                  result: ['YOU_DO_NOT_HAVE_PERMISSION']
                },
                loading: false
              });
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](19);
              setFormState({
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              });

            case 31:
              return _context.abrupt("return");

            case 32:
              login({
                user: result,
                token: (_result$session = result.session) === null || _result$session === void 0 ? void 0 : _result$session.access_token
              });

            case 33:
              events.emit('userLogin', result);

              if (handleSuccessLogin) {
                handleSuccessLogin(result);
              }

              if (urlToRedirect) {
                window.location.href = "".concat(window.location.origin).concat(urlToRedirect);
              }

            case 36:
              setFormState({
                result: {
                  error: error,
                  result: result
                },
                loading: false
              });
              _context.next = 42;
              break;

            case 39:
              _context.prev = 39;
              _context.t1 = _context["catch"](3);
              setFormState({
                result: {
                  error: true,
                  result: _context.t1.message
                },
                loading: false
              });

            case 42:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 39], [19, 28]]);
    }));

    return function handleLoginClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e) {
    setCredentials(_objectSpread(_objectSpread({}, credentials), {}, _defineProperty({}, e.target.name, e.target.value)));
  };
  /**
   * Change current selected tab
   * @param {string} tab Reference tab email or cellphone
   */


  var handleChangeTab = function handleChangeTab(tab) {
    setLoginTab(tab);
  };
  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */


  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(values) {
      var response, res;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: true
              }));
              _context2.next = 4;
              return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  cellphone: values.cellphone,
                  country_phone_code: "+".concat(values.country_phone_code)
                })
              });

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();

            case 7:
              res = _context2.sent;
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: false,
                result: res
              }));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: false,
                result: {
                  error: _context2.t0.message
                }
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function sendVerifyPhoneCode(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSetCheckPhoneCodeState = function handleSetCheckPhoneCodeState(data) {
    var values = data || {
      loading: false,
      result: {
        error: false
      }
    };
    setCheckPhoneCodeState(values);
  };
  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */


  var checkVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(values) {
      var _res$result, response, res, _res$result2, _res$result2$session;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: true
              }));
              _context3.next = 4;
              return fetch("".concat(ordering.root, "/auth/sms/twilio"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              });

            case 4:
              response = _context3.sent;
              _context3.next = 7;
              return response.json();

            case 7:
              res = _context3.sent;

              if (!(res === null || res === void 0 ? void 0 : res.error) && (res === null || res === void 0 ? void 0 : (_res$result = res.result) === null || _res$result === void 0 ? void 0 : _res$result.id)) {
                login({
                  user: res === null || res === void 0 ? void 0 : res.result,
                  token: res === null || res === void 0 ? void 0 : (_res$result2 = res.result) === null || _res$result2 === void 0 ? void 0 : (_res$result2$session = _res$result2.session) === null || _res$result2$session === void 0 ? void 0 : _res$result2$session.access_token
                });

                if (handleSuccessLogin) {
                  handleSuccessLogin(res === null || res === void 0 ? void 0 : res.result);
                }
              }

              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: res
              }));
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](0);
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: {
                  error: _context3.t0.message
                }
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 12]]);
    }));

    return function checkVerifyPhoneCode(_x3) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    loginTab: loginTab,
    credentials: credentials,
    verifyPhoneState: verifyPhoneState,
    checkPhoneCodeState: checkPhoneCodeState,
    setCheckPhoneCodeState: handleSetCheckPhoneCodeState,
    handleChangeInput: handleChangeInput,
    handleButtonLoginClick: handleButtonLoginClick || handleLoginClick,
    handleChangeTab: handleChangeTab,
    handleSendVerifyCode: sendVerifyPhoneCode,
    handleCheckPhoneCode: checkVerifyPhoneCode
  })));
};

exports.LoginForm = LoginForm;
LoginForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Function to change default login behavior
   */
  handleButtonLoginClick: _propTypes.default.func,

  /**
   * Function to get login success event
   * @param {Object} user User with session data
   */
  handleSuccessLogin: _propTypes.default.func,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,

  /**
   * Enable/Disable login by email
   */
  useLoginByEmail: _propTypes.default.bool,

  /**
   * Enable/Disable login by cellphone
   */
  useLoginByCellphone: _propTypes.default.bool,

  /**
   * Selected tab by default
   * You can choose between 'email' or 'cellphone'
   */
  defaultLoginTab: _propTypes.default.string,

  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: _propTypes.default.string,

  /**
   * Url to forgot password page
   * Url to create element link to signup page
   */
  linkToForgetPassword: _propTypes.default.string,

  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: _propTypes.default.element,

  /**
   * Element to custo link to forgot password
   * You can provide de link element as react router Link or your custom Anchor to forgot password page
   */
  elementLinkToForgotPassword: _propTypes.default.element
};
LoginForm.defaultProps = {
  defaultLoginTab: 'email',
  useLoginByEmail: true,
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};