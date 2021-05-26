"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessController = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

var _ApiContext = require("../../contexts/ApiContext");

var _UtilsContext = require("../../contexts/UtilsContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessController = function BusinessController(props) {
  var _businessObject$today, _businessObject$today2;

  var business = props.business,
      businessId = props.businessId,
      businessAttributes = props.businessAttributes,
      onBusinessClick = props.onBusinessClick,
      handleCustomClick = props.handleCustomClick,
      UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * This must be containt business object data
   */


  var _useState = (0, _react.useState)(business),
      _useState2 = _slicedToArray(_useState, 2),
      businessObject = _useState2[0],
      setBusinessObject = _useState2[1];
  /**
   * This must be containt local time for check if business is close
   */


  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTime = _useState4[0],
      setCurrentTime = _useState4[1];
  /**
   * This must be containt a boolean to indicate if a business is close or not
   */


  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isBusinessClose = _useState6[0],
      setIsBusinessClose = _useState6[1];
  /**
   * Order context data
   */


  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];
  /**
   * formatPrice function
   */


  var _useUtils = (0, _UtilsContext.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parsePrice = _useUtils2[0].parsePrice;
  /**
   * Method to get business from SDK
   */


  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ordering.businesses(businessId).select(businessAttributes).get();

            case 2:
              _yield$ordering$busin = _context.sent;
              result = _yield$ordering$busin.content.result;
              setBusinessObject(result);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to return business offert to show
   * @param {object} offer
   */


  var getBusinessOffer = function getBusinessOffer(offers) {
    if (!offers || !offers.length) return null;
    var maxOffer = offers.reduce(function (acc, cur) {
      return acc.rate > cur.rate ? acc : cur;
    });
    return (maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate_type) === 1 ? "".concat(maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate, "%") : parsePrice(maxOffer === null || maxOffer === void 0 ? void 0 : maxOffer.rate);
  };
  /**
   * Method to return business max offer to show
   * @param {object} max offer
   */


  var getBusinessMaxOffer = function getBusinessMaxOffer(offers) {
    if (!offers || !offers.length) return null;
    var maxOffer = offers.reduce(function (acc, cur) {
      return acc.rate > cur.rate ? acc : cur;
    });
    return maxOffer;
  };
  /**
   * Method to format date
   * @param {object} time
   */


  var formatDate = function formatDate(time) {
    var formatHour = (time === null || time === void 0 ? void 0 : time.hour) < 10 ? "0".concat(time === null || time === void 0 ? void 0 : time.hour) : time === null || time === void 0 ? void 0 : time.hour;
    var formatMinute = (time === null || time === void 0 ? void 0 : time.minute) < 10 ? "0".concat(time === null || time === void 0 ? void 0 : time.minute) : time === null || time === void 0 ? void 0 : time.minute;
    return time ? "".concat(formatHour, ":").concat(formatMinute) : 'none';
  };
  /**
   * Method to format numbers (only 2 decimals)
   * @param {number} num
   */


  var formatNumber = function formatNumber(num) {
    return Math.round(num * 1e2) / 1e2;
  };
  /**
   * Business time to close formatted
   */


  var timeToCloseFormatted = formatDate((businessObject === null || businessObject === void 0 ? void 0 : (_businessObject$today = businessObject.today) === null || _businessObject$today === void 0 ? void 0 : (_businessObject$today2 = _businessObject$today.lapses[0]) === null || _businessObject$today2 === void 0 ? void 0 : _businessObject$today2.close) || null);
  (0, _react.useEffect)(function () {
    var currentHour = currentTime === null || currentTime === void 0 ? void 0 : currentTime.split(':')[0];
    var currentMinute = currentTime === null || currentTime === void 0 ? void 0 : currentTime.split(':')[1];
    var hour = timeToCloseFormatted === null || timeToCloseFormatted === void 0 ? void 0 : timeToCloseFormatted.split(':')[0];
    var minute = timeToCloseFormatted === null || timeToCloseFormatted === void 0 ? void 0 : timeToCloseFormatted.split(':')[1];
    var result = currentHour > hour || currentHour === hour && currentMinute >= minute;

    if (timeToCloseFormatted) {
      setIsBusinessClose(result);
    }
  }, [currentTime]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      var currentHour = new Date().getHours();
      var currentMinute = new Date().getMinutes();
      setCurrentTime("".concat(currentHour, ":").concat(currentMinute));
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (business) {
      setBusinessObject(business);
    } else {
      getBusiness();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderState: orderState,
    isBusinessClose: isBusinessClose,
    business: businessObject,
    formatDate: formatDate,
    formatNumber: formatNumber,
    getBusinessOffer: getBusinessOffer,
    getBusinessMaxOffer: getBusinessMaxOffer,
    handleClick: handleCustomClick || onBusinessClick
  })));
};

exports.BusinessController = BusinessController;
BusinessController.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Business, contains a object with all business properties
   */
  business: _propTypes.default.object,

  /**
   * businessId, this must be containt id or slug to get business from API
   */
  businessId: _propTypes.default.number,

  /**
   * businessAttributes, Array of attributes to get business from API
   */
  businessAttributes: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * onBusinessClick, function to get click event and return business object after default behavior
   */
  onBusinessClick: _propTypes.default.func,

  /**
   * handleCustomClick, function to get click event and return business object without default behavior
   */
  handleCustomClick: _propTypes.default.func,

  /**
   * Components types before Business Controller
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Business Controller
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Business Controller
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessController.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};