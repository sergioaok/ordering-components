"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSession = exports.SessionProvider = exports.SessionContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
var SessionContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */

exports.SessionContext = SessionContext;

var SessionProvider = function SessionProvider(_ref) {
  var children = _ref.children,
      strategy = _ref.strategy;

  var _useState = (0, _react.useState)({
    auth: null,
    token: null,
    user: null,
    loading: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var setValuesFromLocalStorage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$getValuesFromL, auth, token, user;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getValuesFromLocalStorage();

            case 2:
              _yield$getValuesFromL = _context.sent;
              auth = _yield$getValuesFromL.auth;
              token = _yield$getValuesFromL.token;
              user = _yield$getValuesFromL.user;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                auth: auth,
                token: token,
                user: user,
                loading: false
              }));

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function setValuesFromLocalStorage() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getValuesFromLocalStorage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var auth, token, user;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return strategy.getItem('token');

            case 2:
              auth = _context2.sent;
              _context2.next = 5;
              return strategy.getItem('token');

            case 5:
              token = _context2.sent;
              _context2.next = 8;
              return strategy.getItem('user', true);

            case 8:
              user = _context2.sent;
              return _context2.abrupt("return", {
                auth: auth,
                token: token,
                user: user
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getValuesFromLocalStorage() {
      return _ref3.apply(this, arguments);
    };
  }();

  var login = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(values) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return strategy.setItem('token', values.token);

            case 2:
              _context3.next = 4;
              return strategy.setItem('user', values.user, true);

            case 4:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                auth: true,
                user: values.user,
                token: values.token,
                loading: false
              }));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function login(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  var logout = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return strategy.removeItem('token');

            case 2:
              _context4.next = 4;
              return strategy.removeItem('user');

            case 4:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                auth: false,
                user: null,
                token: null,
                loading: false
              }));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function logout() {
      return _ref5.apply(this, arguments);
    };
  }();

  var changeUser = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5(user) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return strategy.setItem('user', user, true);

            case 2:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                user: user,
                loading: false
              }));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function changeUser(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();

  var checkLocalStorage = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
      var _yield$getValuesFromL2, token, user;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return getValuesFromLocalStorage();

            case 2:
              _yield$getValuesFromL2 = _context6.sent;
              token = _yield$getValuesFromL2.token;
              user = _yield$getValuesFromL2.user;

              if (token && !state.token) {
                login({
                  user: user,
                  token: token
                });
              }

              if (!token && state.token) {
                logout();
              }

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    return function checkLocalStorage() {
      return _ref7.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      checkLocalStorage();
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [state]);
  (0, _react.useEffect)(function () {
    setValuesFromLocalStorage();
  }, []);
  var functions = {
    login: login,
    logout: logout,
    changeUser: changeUser
  };
  return /*#__PURE__*/_react.default.createElement(SessionContext.Provider, {
    value: [state, functions]
  }, children);
};
/**
 * Hook to get and update session state
 */


exports.SessionProvider = SessionProvider;

var useSession = function useSession() {
  var sessionManager = (0, _react.useContext)(SessionContext);
  return sessionManager || [{}, function () {}];
};

exports.useSession = useSession;