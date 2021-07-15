"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useConfig = exports.ConfigProvider = exports.ConfigContext = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _ApiContext = require("../ApiContext");

var _LanguageContext = require("../LanguageContext");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

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

_dayjs.default.extend(_utc.default);
/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */


var ConfigContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to configs manager
 * This provider has a reducer for manage configs state
 * @param {props} props
 */

exports.ConfigContext = ConfigContext;

var ConfigProvider = function ConfigProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)({
    loading: true,
    configs: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 1),
      languageState = _useLanguage2[0];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var customConfigs = {
    max_days_preorder: {
      key: 'max_days_preorder',
      value: 6
    },
    meters_to_change_address: {
      key: 'meters_to_change_address',
      value: 500
    },
    default_order_type: {
      key: 'default_order_type',
      value: 'delivery'
    },
    order_types_allowed: {
      key: 'order_types_allowed',
      value: '1|2|3|4|5'
    },
    google_autocomplete_selection_required: {
      key: 'google_autocomplete_selection_required',
      value: 'true'
    },
    google_maps_api_key: {
      key: 'google_maps_api_key',
      value: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
    },
    country_autocomplete: {
      key: 'country_autocomplete',
      value: '*'
    },
    track_id_google_analytics: {
      key: 'track_id_google_analytics',
      value: 'UA-51635411-4'
    },
    guest_uuid_max_days: {
      key: 'guest_uuid_max_days',
      value: 3
    },
    guest_uuid_access: {
      key: 'guest_uuid_access',
      value: 1
    },
    location_default_latitude: {
      key: 'location_default_latitude',
      value: 40.7751052
    },
    location_default_longitude: {
      key: 'location_default_longitude',
      value: -73.9651148
    },
    driver_tip_type: {
      key: 'driver_tip_type',
      value: 2 // 1: fixed, 2: percetaje

    },
    driver_tip_options: {
      key: 'driver_tip_options',
      value: [0, 10, 15, 20, 25]
    },
    driver_tip_use_custom: {
      key: 'driver_tip_use_custom',
      value: 0 // 0: disabled, 1: enabled

    },
    validation_phone_number_lib: {
      key: 'validation_phone_number_lib',
      value: 1 // 0: disabled, 1: enabled

    },
    add_product_with_one_click: {
      key: 'add_product_with_one_click',
      value: false
    }
  };

  var refreshConfigs = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _result$dates_moment_, _result$format_time, _result$dates_moment_2, _result$format_time2, _data, _data2, _yield$ordering$confi, _yield$ordering$confi2, error, result, data, response, conditionalConfigs, configsResult;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              !state.loading && setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: true
              }));
              _context.next = 4;
              return ordering.configs().asDictionary().get();

            case 4:
              _yield$ordering$confi = _context.sent;
              _yield$ordering$confi2 = _yield$ordering$confi.content;
              error = _yield$ordering$confi2.error;
              result = _yield$ordering$confi2.result;
              data = null;
              _context.prev = 9;
              _context.next = 12;
              return fetch('https://ipapi.co/json/');

            case 12:
              response = _context.sent;
              _context.next = 15;
              return response.json();

            case 15:
              data = _context.sent;
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](9);
              data = null;

            case 21:
              conditionalConfigs = {
                dates_moment_format: {
                  key: 'dates_moment_format',
                  value: (result === null || result === void 0 ? void 0 : (_result$dates_moment_ = result.dates_moment_format) === null || _result$dates_moment_ === void 0 ? void 0 : _result$dates_moment_.value) || ((result === null || result === void 0 ? void 0 : (_result$format_time = result.format_time) === null || _result$format_time === void 0 ? void 0 : _result$format_time.value) === '24' ? 'MM/DD HH:mm' : 'MM/DD hh:mma')
                },
                dates_general_format: {
                  key: 'dates_general_format',
                  value: (result === null || result === void 0 ? void 0 : (_result$dates_moment_2 = result.dates_moment_format) === null || _result$dates_moment_2 === void 0 ? void 0 : _result$dates_moment_2.value) || ((result === null || result === void 0 ? void 0 : (_result$format_time2 = result.format_time) === null || _result$format_time2 === void 0 ? void 0 : _result$format_time2.value) === '24' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ssa')
                }
              };
              configsResult = _objectSpread(_objectSpread(_objectSpread({}, customConfigs), {}, {
                default_country_code: {
                  value: data && ((_data = data) === null || _data === void 0 ? void 0 : _data.country_code) || 'US',
                  calling_number: data && ((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.country_calling_code) || '+1'
                }
              }, result), conditionalConfigs);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false,
                configs: error ? {} : configsResult
              }));
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t1 = _context["catch"](0);
              setState(_objectSpread(_objectSpread({}, state), {}, {
                loading: false
              }));

            case 29:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 26], [9, 18]]);
    }));

    return function refreshConfigs() {
      return _ref2.apply(this, arguments);
    };
  }();

  var functions = {
    refreshConfigs: refreshConfigs
  };
  (0, _react.useEffect)(function () {
    if (!languageState.loading) {
      refreshConfigs();
    }
  }, [languageState]);
  return /*#__PURE__*/_react.default.createElement(ConfigContext.Provider, {
    value: [state, functions]
  }, children);
};
/**
 * Hook to get and update configs state
 */


exports.ConfigProvider = ConfigProvider;

var useConfig = function useConfig() {
  var configManager = (0, _react.useContext)(ConfigContext);
  return configManager || [{}, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }))];
};

exports.useConfig = useConfig;