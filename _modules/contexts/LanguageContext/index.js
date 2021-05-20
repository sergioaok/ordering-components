"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLanguage = exports.LanguageProvider = exports.LanguageContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * Create LanguageContext
 * This context will manage the current languages internally and provide an easy interface
 */
var LanguageContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */

exports.LanguageContext = LanguageContext;

var LanguageProvider = function LanguageProvider(_ref) {
  var _state$language4;

  var children = _ref.children,
      strategy = _ref.strategy;

  var _useState = (0, _react.useState)({
    loading: true,
    dictionary: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];
  /**
   * Load language from localstorage and set state or load default language
   */


  var setLanguageFromLocalStorage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var language;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return strategy.getItem('language', true);

            case 2:
              language = _context.sent;

              if (!language) {
                loadDefaultLanguage();
              } else {
                setState(_objectSpread(_objectSpread({}, state), {}, {
                  language: language
                }));
                apiHelper.setLanguage(language === null || language === void 0 ? void 0 : language.code);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function setLanguageFromLocalStorage() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 2),
      ordering = _useApi2[0],
      apiHelper = _useApi2[1];

  var refreshTranslations = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$ordering$trans, _yield$ordering$trans2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context2.next = 4;
              return ordering.translations().asDictionary().get();

            case 4:
              _yield$ordering$trans = _context2.sent;
              _yield$ordering$trans2 = _yield$ordering$trans.content;
              error = _yield$ordering$trans2.error;
              result = _yield$ordering$trans2.result;
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false,
                dictionary: error ? {} : result
              }));
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 11]]);
    }));

    return function refreshTranslations() {
      return _ref3.apply(this, arguments);
    };
  }();

  var loadDefaultLanguage = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _yield$ordering$langu, _yield$ordering$langu2, error, result, language;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return ordering.languages().where([{
                attribute: 'default',
                value: true
              }]).get();

            case 3:
              _yield$ordering$langu = _context3.sent;
              _yield$ordering$langu2 = _yield$ordering$langu.content;
              error = _yield$ordering$langu2.error;
              result = _yield$ordering$langu2.result;

              if (error) {
                _context3.next = 12;
                break;
              }

              language = {
                id: result[0].id,
                code: result[0].code,
                rtl: result[0].rtl
              };
              _context3.next = 11;
              return strategy.setItem('language', language, true);

            case 11:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                language: language
              }));

            case 12:
              _context3.next = 16;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](0);

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 14]]);
    }));

    return function loadDefaultLanguage() {
      return _ref4.apply(this, arguments);
    };
  }();

  var setLanguage = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(language) {
      var _state$language;

      var _language;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!language || language.id === ((_state$language = state.language) === null || _state$language === void 0 ? void 0 : _state$language.id))) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              _language = {
                id: language.id,
                code: language.code,
                rtl: language.rtl
              };
              _context4.next = 5;
              return strategy.setItem('language', _language, true);

            case 5:
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true,
                language: _language
              }));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function setLanguage(_x) {
      return _ref5.apply(this, arguments);
    };
  }();
  /**
   * Refresh translation when change language from ordering
   */


  (0, _react.useEffect)(function () {
    var _state$language2, _state$language3;

    if ((_state$language2 = state.language) !== null && _state$language2 !== void 0 && _state$language2.code && ((_state$language3 = state.language) === null || _state$language3 === void 0 ? void 0 : _state$language3.code) === ordering.language) {
      refreshTranslations();
    }
  }, [(_state$language4 = state.language) === null || _state$language4 === void 0 ? void 0 : _state$language4.code, ordering]);
  (0, _react.useEffect)(function () {
    setLanguageFromLocalStorage();
  }, []);
  (0, _react.useEffect)(function () {
    var _state$language5;

    apiHelper.setLanguage(state === null || state === void 0 ? void 0 : (_state$language5 = state.language) === null || _state$language5 === void 0 ? void 0 : _state$language5.code);
  }, [state.language]);

  var t = function t(key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return (state === null || state === void 0 ? void 0 : state.dictionary) && Object.keys(state === null || state === void 0 ? void 0 : state.dictionary).length > 0 && state.dictionary[key] || fallback || key;
  };

  return /*#__PURE__*/_react.default.createElement(LanguageContext.Provider, {
    value: [state, t, setLanguage, refreshTranslations]
  }, children);
};
/**
 * Hook to get and update language state
 */


exports.LanguageProvider = LanguageProvider;

var useLanguage = function useLanguage() {
  var languageManager = (0, _react.useContext)(LanguageContext);
  return languageManager || [{}, function (key) {
    var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return fallback || key;
  }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  })), /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }))];
};

exports.useLanguage = useLanguage;