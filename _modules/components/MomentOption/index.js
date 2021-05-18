"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MomentOption = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _isSameOrAfter = _interopRequireDefault(require("dayjs/plugin/isSameOrAfter"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _OrderContext = require("../../contexts/OrderContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_dayjs.default.extend(_isSameOrAfter.default);

_dayjs.default.extend(_utc.default);
/**
 * Component to manage moment option behavior without UI component
 */


var MomentOption = function MomentOption(props) {
  var _orderStatus$options, _orderStatus$options4;

  var minDate = props.minDate,
      maxDate = props.maxDate,
      currentDate = props.currentDate,
      useOrderContext = props.useOrderContext,
      onChangeMoment = props.onChangeMoment,
      UIComponent = props.UIComponent;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderStatus = _useOrder2[0],
      changeMoment = _useOrder2[1].changeMoment;
  /**
   * Method to valid if a date is same of after current date
   * @param {String} date
   */


  var validDate = function validDate(date) {
    if (!date) return;

    var _date = (0, _dayjs.default)(date, 'YYYY-MM-DD HH:mm').isSameOrAfter((0, _dayjs.default)(), 'day') ? (0, _dayjs.default)(date).format('YYYY-MM-DD HH:mm') : (0, _dayjs.default)().format('YYYY-MM-DD HH:mm');

    return _date;
  };
  /**
   * Method to calculate diferrence between 2 dates
   * @param {moment} start
   * @param {moment} end
   */


  var calculateDiffDay = function calculateDiffDay(start, end) {
    var endVal = end !== null && end !== void 0 ? end : (0, _dayjs.default)();
    var days = (0, _dayjs.default)(start).diff((0, _dayjs.default)(endVal), 'day');
    return days;
  };
  /**
   * This must be containt schedule selected by user
   */


  var _currentDate = useOrderContext ? (_orderStatus$options = orderStatus.options) === null || _orderStatus$options === void 0 ? void 0 : _orderStatus$options.moment : currentDate;

  var _useState = (0, _react.useState)(_currentDate ? (0, _dayjs.default)(validDate(_currentDate)).format('YYYY-MM-DD HH:mm') : null),
      _useState2 = _slicedToArray(_useState, 2),
      scheduleSelected = _useState2[0],
      setScheduleSelected = _useState2[1];
  /**
   * Flag to know if user select asap time
   */


  var _useState3 = (0, _react.useState)(!scheduleSelected),
      _useState4 = _slicedToArray(_useState3, 2),
      isAsap = _useState4[0],
      setIsAsap = _useState4[1];
  /**
   * Arrays for save hours and dates lists
   */


  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      hoursList = _useState6[0],
      setHourList = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      datesList = _useState8[0],
      setDatesList = _useState8[1];

  var _useState9 = (0, _react.useState)((0, _dayjs.default)(validDate(_currentDate)).format('YYYY-MM-DD')),
      _useState10 = _slicedToArray(_useState9, 2),
      dateSelected = _useState10[0],
      setDateSelected = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      timeSelected = _useState12[0],
      setTimeSelected = _useState12[1];

  var handleChangeDate = function handleChangeDate(date) {
    if (!date || date === dateSelected) return;
    setDateSelected(date);
    setTimeSelected(null);
    setIsAsap(false);
  };

  var handleChangeTime = function handleChangeTime(time) {
    if (!time || time === timeSelected) return;

    var _moment = (0, _dayjs.default)("".concat(dateSelected, " ").concat(time), 'YYYY-MM-DD HH:mm').toDate();

    setTimeSelected(time);
    setIsAsap(false);

    if (useOrderContext) {
      changeMoment(_moment);
    }

    onChangeMoment && onChangeMoment(_moment);
  };

  var handleAsap = function handleAsap() {
    if (isAsap) return;
    setIsAsap(true);

    if (useOrderContext) {
      changeMoment(null);
    }

    onChangeMoment && onChangeMoment(null);
  };

  (0, _react.useEffect)(function () {
    if (useOrderContext) {
      var _orderStatus$options2;

      if ((_orderStatus$options2 = orderStatus.options) === null || _orderStatus$options2 === void 0 ? void 0 : _orderStatus$options2.moment) {
        var _orderStatus$options3;

        var _currentDate2 = _dayjs.default.utc(validDate((_orderStatus$options3 = orderStatus.options) === null || _orderStatus$options3 === void 0 ? void 0 : _orderStatus$options3.moment)).local();

        setScheduleSelected(_currentDate2.format('YYYY-MM-DD HH:mm'));
        setDateSelected(_currentDate2.format('YYYY-MM-DD'));
        setTimeSelected(_currentDate2.format('HH:mm'));
        isAsap && setIsAsap(false);
      } else {
        dateSelected !== (0, _dayjs.default)().format('YYYY-MM-DD') && setDateSelected((0, _dayjs.default)().format('YYYY-MM-DD'));
        timeSelected !== null && setTimeSelected(null);
        scheduleSelected !== null && setScheduleSelected(null);
        !isAsap && setIsAsap(true);
      }
    } else {
      scheduleSelected !== null && setScheduleSelected(null);
      !isAsap && setIsAsap(true);
    }
  }, [(_orderStatus$options4 = orderStatus.options) === null || _orderStatus$options4 === void 0 ? void 0 : _orderStatus$options4.moment]);
  (0, _react.useEffect)(function () {
    if (!scheduleSelected) {
      return;
    }

    var selected = (0, _dayjs.default)(scheduleSelected, 'YYYY-MM-DD HH:mm');
    var now = (0, _dayjs.default)();
    var secondsDiff = selected.diff(now, 'seconds');
    var checkTime;

    if (secondsDiff <= 0) {
      handleAsap();
      return;
    }

    if (secondsDiff * 1000 < 36000) {
      checkTime = setTimeout(function () {
        handleAsap();
      }, secondsDiff * 1000);
    }

    return function () {
      if (typeof checkTime === 'number') {
        clearTimeout(checkTime);
      }
    };
  }, [scheduleSelected]);
  (0, _react.useEffect)(function () {
    if (isAsap && datesList[0]) {
      setDateSelected(datesList[0]);
      setTimeSelected(null);
    }
  }, [isAsap, datesList]);
  /**
   * generate a list of available hours
   */

  var generateHourList = function generateHourList() {
    var hoursAvailable = [];
    var isToday = dateSelected === (0, _dayjs.default)().format('YYYY-MM-DD');
    var isLastDate = dateSelected === (0, _dayjs.default)(maxDate).format('YYYY-MM-DD');
    var now = new Date();

    for (var hour = 0; hour < 24; hour++) {
      /**
       * Continue if is today and hour is smaller than current hour
       */
      if (isToday && hour < (now === null || now === void 0 ? void 0 : now.getHours())) continue;
      /**
       * Continue if is max date and hour is greater than max date hour
       */

      if (isLastDate && hour > (maxDate === null || maxDate === void 0 ? void 0 : maxDate.getHours())) continue;

      for (var minute = 0; minute < 59; minute += 15) {
        /**
         * Continue if is today and hour is equal to current hour and minutes is smaller than current minute
         */
        if (isToday && hour === (now === null || now === void 0 ? void 0 : now.getHours()) && minute <= now.getMinutes()) continue;
        /**
         * Continue if is today and hour is equal to max date hour and minutes is greater than max date minute
         */

        if (isLastDate && hour === (maxDate === null || maxDate === void 0 ? void 0 : maxDate.getHours()) && minute > maxDate.getMinutes()) continue;

        var _hour = hour < 10 ? "0".concat(hour) : hour;

        var startMinute = minute < 10 ? "0".concat(minute) : minute;
        var endMinute = minute + 14 < 10 ? "0".concat(minute + 14) : minute + 14;
        var startTime = "".concat(_hour, ":").concat(startMinute);
        var endTime = "".concat(_hour, ":").concat(endMinute);
        hoursAvailable.push({
          startTime: startTime,
          endTime: endTime
        });
      }
    }

    setHourList(hoursAvailable);
  };
  /**
   * Generate a list of available dates
   */


  var generateDatesList = function generateDatesList() {
    var datesList = [];
    var diff = parseInt(calculateDiffDay(validDate(maxDate)), validDate(minDate));

    for (var i = 0; i < diff + 1; i++) {
      datesList.push((0, _dayjs.default)(validDate(minDate)).add(i, 'd').format('YYYY-MM-DD'));
    }

    setDatesList(datesList);
  };

  (0, _react.useEffect)(function () {
    if (!dateSelected) return;
    generateHourList();
  }, [dateSelected]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      var diff = (0, _dayjs.default)(dateSelected).diff((0, _dayjs.default)(currentDate), 'day');

      if (diff === 0) {
        generateHourList();
      }
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [dateSelected]);
  (0, _react.useEffect)(function () {
    generateDatesList();
  }, [maxDate, minDate]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isAsap: isAsap,
    minDate: validDate(minDate),
    maxDate: validDate(maxDate),
    dateSelected: dateSelected,
    timeSelected: timeSelected,
    handleChangeDate: handleChangeDate,
    handleChangeTime: handleChangeTime,
    datesList: datesList,
    hoursList: hoursList,
    handleAsap: handleAsap
  })));
};

exports.MomentOption = MomentOption;
MomentOption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * minDate, this must be contains a custom date selected
   */
  minDate: _propTypes.default.instanceOf(Date),

  /**
   * maxDate, this must be contains a custom date selected
   */
  maxDate: _propTypes.default.instanceOf(Date).isRequired,

  /**
   * currentDate, this must be contains a custom date selected
   */
  currentDate: _propTypes.default.instanceOf(Date),

  /**
   * currentDate, this must be contains a custom date selected
   */
  useOrderContext: _propTypes.default.bool,

  /**
   * Method to return moment selection
   */
  onChangeMoment: _propTypes.default.func,

  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
MomentOption.defaultProps = {
  useOrderContext: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};