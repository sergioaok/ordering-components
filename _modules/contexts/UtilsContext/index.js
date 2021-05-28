"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUtils = exports.UtilsProviders = exports.UtilsContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ConfigContext = require("../ConfigContext");

var _LanguageContext = require("../LanguageContext");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _relativeTime = _interopRequireDefault(require("dayjs/plugin/relativeTime"));

var _updateLocale = _interopRequireDefault(require("dayjs/plugin/updateLocale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_utc.default);

_dayjs.default.extend(_relativeTime.default);

_dayjs.default.extend(_updateLocale.default);
/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */


var UtilsContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to utils manager
 * This provider has a reducer for manage utils functions
 * @param {props} props
 */

exports.UtilsContext = UtilsContext;

var UtilsProviders = function UtilsProviders(_ref) {
  var children = _ref.children;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      languageState = _useLanguage2[0],
      t = _useLanguage2[1];

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0]; // const [localObject, setLocalObject] = useState({})


  var refreshLocalObject = function refreshLocalObject() {
    var months = [t('MONTH1', 'January'), t('MONTH2', 'February'), t('MONTH3', 'March'), t('MONTH4', 'April'), t('MONTH5', 'May'), t('MONTH6', 'June'), t('MONTH7', 'July'), t('MONTH8', 'August'), t('MONTH9', 'September'), t('MONTH10', 'October'), t('MONTH11', 'November'), t('MONTH12', 'December')];
    var monthsShort = [t('MONTHSHORT1', 'Jan'), t('MONTHSHORT2', 'Feb'), t('MONTHSHORT3', 'Mar'), t('MONTHSHORT4', 'Apr'), t('MONTHSHORT5', 'May'), t('MONTHSHORT6', 'Jun'), t('MONTHSHORT7', 'Jul'), t('MONTHSHORT8', 'Aug'), t('MONTHSHORT9', 'Sep'), t('MONTHSHORT10', 'Oct'), t('MONTHSHORT11', 'Nov'), t('MONTHSHORT12', 'Dec')];
    var weekdays = [t('DAY7', 'Sunday'), t('DAY1', 'Monday'), t('DAY2', 'Tuesday'), t('DAY3', 'Wednesday'), t('DAY4', 'Thursday'), t('DAY5', 'Friday'), t('DAY6', 'Saturday')];
    var weekdaysShort = [t('DAYSHORT7', 'Sun'), t('DAYSHORT1', 'Mon'), t('DAYSHORT2', 'Tue'), t('DAYSHORT3', 'Wed'), t('DAYSHORT4', 'Thu'), t('DAYSHORT5', 'Fri'), t('DAYSHORT6', 'Sat')];
    var weekdaysMin = [t('DAYMIN7', 'Su'), t('DAYMIN1', 'Mo'), t('DAYMIN2', 'Tu'), t('DAYMIN3', 'We'), t('DAYMIN4', 'Th'), t('DAYMIN5', 'Fr'), t('DAYMIN6', 'Sa')];
    var localeObject = {
      name: 'auto',
      // name String
      months: months,
      // months Array
      monthsShort: monthsShort,
      // monthsShort Array
      weekdays: weekdays,
      // weekdays Array
      weekdaysShort: weekdaysShort,
      // weekdaysShort Array
      weekdaysMin: weekdaysMin,
      // weekdaysMin Array
      ordinal: function ordinal(n) {
        return "".concat(n, "\xBA");
      },
      // ordinal Function (number) => return number + output
      relativeTime: {
        // relative time format strings, keep %s %d as the same
        future: t('RELATIVE_TIME_IN', 'in %s'),
        // e.g. in 2 hours, %s been replaced with 2hours
        past: t('RELATIVE_TIME_AGO', '%s ago'),
        s: t('RELATIVE_TIME_FEW_SECONDS ', 'a few seconds'),
        m: t('RELATIVE_TIME_MINUTES', 'a minute'),
        mm: t('RELATIVE_TIME_MINUTES', '%d minutes'),
        h: t('RELATIVE_TIME_HOUR', 'an hour'),
        hh: t('RELATIVE_TIME_HOURS', '%d hours'),
        // e.g. 2 hours, %d been replaced with 2
        d: t('RELATIVE_TIME_DAY', 'a day'),
        dd: t('RELATIVE_TIME_DAYS', '%d days'),
        M: t('RELATIVE_TIME_MONTH', 'a month'),
        MM: t('RELATIVE_TIME_MONTHS', '%d months'),
        y: t('RELATIVE_TIME_YEAR', 'a year'),
        yy: t('RELATIVE_TIME_YEARS', '%d years')
      },
      meridiem: function meridiem(hour, minute, isLowercase) {
        // OPTIONAL, AM/PM
        return hour > 12 ? t('PM', 'PM') : t('AM', 'AM');
      }
    };

    _dayjs.default.locale('auto', localeObject);

    _dayjs.default.updateLocale('auto', localeObject);
  };

  var parsePrice = function parsePrice(value) {
    var _configState$configs$, _configState$configs$2, _configState$configs$3, _configState$configs$4, _configState$configs$5;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var formatNumber = {
      decimal: (options === null || options === void 0 ? void 0 : options.decimal) || ((_configState$configs$ = configState.configs.format_number_decimal_length) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value) || 2,
      separator: (options === null || options === void 0 ? void 0 : options.separator) || ((_configState$configs$2 = configState.configs.format_number_decimal_separator) === null || _configState$configs$2 === void 0 ? void 0 : _configState$configs$2.value) || ',',
      thousand: (options === null || options === void 0 ? void 0 : options.thousand) || ((_configState$configs$3 = configState.configs.format_number_thousand_separator) === null || _configState$configs$3 === void 0 ? void 0 : _configState$configs$3.value) || '.',
      currency: (options === null || options === void 0 ? void 0 : options.currency) || ((_configState$configs$4 = configState.configs.format_number_currency) === null || _configState$configs$4 === void 0 ? void 0 : _configState$configs$4.value) || '$',
      currencyPosition: (options === null || options === void 0 ? void 0 : options.currencyPosition) || ((_configState$configs$5 = configState.configs.currency_position) === null || _configState$configs$5 === void 0 ? void 0 : _configState$configs$5.value) || 'left'
    };
    var number = parseNumber(value, formatNumber);

    if (formatNumber.currencyPosition === 'left') {
      number = formatNumber.currency + ' ' + number;
    } else {
      number = number + ' ' + formatNumber.currency;
    }

    return number;
  };

  var parseNumber = function parseNumber(value) {
    var _configState$configs$6, _configState$configs$7, _configState$configs$8;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    value = parseFloat(value) || 0;
    var formatNumber = {
      decimal: (options === null || options === void 0 ? void 0 : options.decimal) || ((_configState$configs$6 = configState.configs.format_number_decimal_length) === null || _configState$configs$6 === void 0 ? void 0 : _configState$configs$6.value) || 2,
      separator: (options === null || options === void 0 ? void 0 : options.separator) || ((_configState$configs$7 = configState.configs.format_number_decimal_separator) === null || _configState$configs$7 === void 0 ? void 0 : _configState$configs$7.value) || ',',
      thousand: (options === null || options === void 0 ? void 0 : options.thousand) || ((_configState$configs$8 = configState.configs.format_number_thousand_separator) === null || _configState$configs$8 === void 0 ? void 0 : _configState$configs$8.value) || '.'
    };
    var number = value.toFixed(formatNumber.decimal);
    number = number.toString();

    if (number.indexOf('.')) {
      number = number.replace('.', formatNumber.separator);
    } else if (number.indexOf(',')) {
      number = number.replace(',', formatNumber.separator);
    }

    var numberParts = number.split(formatNumber.separator);
    numberParts[0] = numberParts[0].replace(/(.)(?=(\d{3})+$)/g, '$1' + formatNumber.thousand);
    number = numberParts.join(formatNumber.separator);
    return number;
  };

  var parseDate = function parseDate(date) {
    var _configState$configs$9, _configState$configs, _configState$configs$10;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var formatTime = (options === null || options === void 0 ? void 0 : options.formatTime) || ((_configState$configs$9 = configState.configs.format_time) === null || _configState$configs$9 === void 0 ? void 0 : _configState$configs$9.value) || '24';
    var formatDate = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      outputFormat: (options === null || options === void 0 ? void 0 : options.outputFormat) || ((_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$10 = _configState$configs.dates_general_format) === null || _configState$configs$10 === void 0 ? void 0 : _configState$configs$10.value) || (formatTime === '24' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ss A'),
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };

    if (!(0, _dayjs.default)(date, formatDate.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }

    var _date = formatDate.utc ? _dayjs.default.utc(date, formatDate.inputFormat).local() : (0, _dayjs.default)(date, formatDate.inputFormat);

    return _date.format(formatDate.outputFormat);
  };

  var parseTime = function parseTime(time) {
    var _configState$configs$11;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!time) return '00:00';

    var _formatTime = (options === null || options === void 0 ? void 0 : options.formatTime) || ((_configState$configs$11 = configState.configs.format_time) === null || _configState$configs$11 === void 0 ? void 0 : _configState$configs$11.value) || '24';

    var formatTime = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['HH:mm', 'hh:mm A', 'hh:mm'],
      outputFormat: (options === null || options === void 0 ? void 0 : options.outputFormat) || (_formatTime === '24' ? 'HH:mm' : 'hh:mm A'),
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };

    if (!(0, _dayjs.default)(time, formatTime.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }

    var _date = formatTime.utc ? _dayjs.default.utc(time, formatTime.inputFormat).local() : (0, _dayjs.default)(time, formatTime.inputFormat);

    return _date.format(formatTime.outputFormat);
  };

  var parseShortenDistance = function parseShortenDistance(distance) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (distance >= 1000000000) {
      return "".concat((distance / 1000000000).toFixed(1).replace(/\.0$/, '')).concat(t('G', 'G'));
    }

    if (distance >= 1000000) {
      return "".concat((distance / 1000000).toFixed(1).replace(/\.0$/, '')).concat(t('M', 'M'));
    }

    if (distance >= 1000) {
      return "".concat((distance / 1000).toFixed(1).replace(/\.0$/, '')).concat(t('K', 'K'));
    }
  };

  var parseDistance = function parseDistance(distance) {
    var _configState$configs$12, _configState$configs$13;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    distance = parseFloat(distance) || 0;
    var unit = (options === null || options === void 0 ? void 0 : options.unit) || 'KM';

    if (((_configState$configs$12 = configState.configs.distance_unit_km) === null || _configState$configs$12 === void 0 ? void 0 : _configState$configs$12.value) === '1') {
      unit = 'KM';
    }

    if ((_configState$configs$13 = configState.configs.distance_unit) !== null && _configState$configs$13 !== void 0 && _configState$configs$13.value) {
      var _configState$configs$14;

      unit = (_configState$configs$14 = configState.configs.distance_unit) === null || _configState$configs$14 === void 0 ? void 0 : _configState$configs$14.value;
    }

    if (unit.toUpperCase() === 'MI') {
      var dist = distance * 0.621371;

      if (dist >= 1000) {
        return "".concat(parseShortenDistance(dist), " ").concat(t('MI', 'mi'));
      }

      return "".concat(parseNumber(dist, options), " ").concat(t('MI', 'mi'));
    } else {
      if (distance >= 1000) {
        return "".concat(parseShortenDistance(distance), " ").concat(t('KM', 'km'));
      }

      return "".concat(parseNumber(distance, options), " ").concat(t('KM', 'km'));
    }
  };

  var getTimeAgo = function getTimeAgo(dateTime, options) {
    if (!dateTime) return 'NN';
    var dateOptions = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };

    if (!(0, _dayjs.default)(dateTime, dateOptions.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }

    var _date = dateOptions.utc ? _dayjs.default.utc(dateTime, dateOptions.inputFormat).local() : (0, _dayjs.default)(dateTime, dateOptions.inputFormat);

    return _date.fromNow();
  };

  var getTimeTo = function getTimeTo(dateTime, options) {
    if (!dateTime) return 'NN';
    var dateOptions = {
      inputFormat: (options === null || options === void 0 ? void 0 : options.inputFormat) || ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD hh:mm:ss A', 'YYYY-MM-DD hh:mm:ss'],
      utc: typeof (options === null || options === void 0 ? void 0 : options.utc) === 'boolean' ? options === null || options === void 0 ? void 0 : options.utc : true
    };

    if (!(0, _dayjs.default)(dateTime, dateOptions.inputFormat).isValid()) {
      return t('INVALID_FORMAT', 'invalid format');
    }

    var _date = dateOptions.utc ? _dayjs.default.utc(dateTime, dateOptions.inputFormat).local() : (0, _dayjs.default)(dateTime, dateOptions.inputFormat);

    return _date.toNow();
  };

  var optimizeImage = function optimizeImage(url, params, fallback) {
    if (!url && fallback) return fallback;
    params = params && params.length > 0 ? ",".concat(params) : '';

    if (url != null && url.indexOf('res.cloudinary.com') !== -1) {
      var parts = url.split('upload');
      url = "".concat(parts[0], "upload/f_auto,q_auto").concat(params).concat(parts[1]);
    }

    return url;
  };

  var functions = {
    parsePrice: parsePrice,
    parseNumber: parseNumber,
    parseDate: parseDate,
    parseTime: parseTime,
    parseDistance: parseDistance,
    parseShortenDistance: parseShortenDistance,
    getTimeAgo: getTimeAgo,
    getTimeTo: getTimeTo,
    optimizeImage: optimizeImage
  };
  (0, _react.useEffect)(function () {
    if (!languageState.loading) {
      refreshLocalObject();
    }
  }, [languageState]);
  return /*#__PURE__*/_react.default.createElement(UtilsContext.Provider, {
    value: [functions]
  }, children);
};
/**
 * Hook to get utils functions
 */


exports.UtilsProviders = UtilsProviders;

var useUtils = function useUtils() {
  var utilsManager = (0, _react.useContext)(UtilsContext);
  return utilsManager || [{}, function () {}];
};

exports.useUtils = useUtils;