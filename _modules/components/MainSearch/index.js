"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainSearch = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

var _ApiContext = require("../../contexts/ApiContext");

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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MainSearch = function MainSearch(props) {
  var _orderState$options;

  var searchByAddress = props.searchByAddress,
      handlerFindBusiness = props.handlerFindBusiness,
      UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];
  /**
   * Object to save all arrays to use
   */


  var _useState = (0, _react.useState)({
    countries: [],
    cities: [],
    citiesOptions: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      allListValues = _useState2[0],
      setAllListValues = _useState2[1];
  /**
   * Object to save current values about country selection
   */


  var _useState3 = (0, _react.useState)({
    cityId: null,
    dropdownOptionId: null,
    orderType: ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) || 1
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      countryValues = _useState4[0],
      setCountryValues = _useState4[1];
  /**
   * Handle form error
   */


  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      countryFormErrors = _useState6[0],
      setCountryFormErrors = _useState6[1];
  /**
   * Method to get countries from SDK
   */


  var getContries = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _response$data, _yield$ordering$count, response;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return ordering.countries().get();

            case 3:
              _yield$ordering$count = _context.sent;
              response = _yield$ordering$count.response;
              setAllListValues(_objectSpread(_objectSpread({}, allListValues), {}, {
                countries: response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.result
              }));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getContries() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to handle change values when searchByAddres is false
   * @param {object} e
   */


  var onChangeValue = function onChangeValue(_ref2) {
    var name = _ref2.name,
        value = _ref2.value;

    switch (name) {
      case 'country':
        {
          var country = allListValues === null || allListValues === void 0 ? void 0 : allListValues.countries.find(function (country) {
            return Number(country.id) === Number(value);
          });
          var cities = country === null || country === void 0 ? void 0 : country.cities.filter(function (city) {
            return city.options.length;
          });
          setAllListValues(_objectSpread(_objectSpread({}, allListValues), {}, {
            cities: cities
          }));
          setCountryValues(_objectSpread(_objectSpread({}, countryValues), {}, {
            cityId: null
          }));
          break;
        }

      case 'cityId':
        {
          var city = allListValues.cities.find(function (city) {
            return Number(city.id) === Number(value);
          });
          setAllListValues(_objectSpread(_objectSpread({}, allListValues), {}, {
            citiesOptions: city === null || city === void 0 ? void 0 : city.options
          }));
          setCountryValues(_objectSpread(_objectSpread({}, countryValues), {}, {
            cityId: value,
            dropdownOptionId: null
          }));
          break;
        }

      case 'dropdownOptionId':
        {
          setCountryValues(_objectSpread(_objectSpread({}, countryValues), {}, {
            dropdownOptionId: value
          }));
          break;
        }
    }
  };
  /**
   * Method to valid if all countries values are valid
   */


  var onClickFindBusiness = function onClickFindBusiness() {
    var isCityOption = allListValues.citiesOptions.length > 0 ? !!countryValues.dropdownOptionId : true;
    var isValid = countryValues.cityId && isCityOption;

    if (isValid) {
      handlerFindBusiness(countryValues);
    }

    setCountryFormErrors(!isValid);
  };

  (0, _react.useEffect)(function () {
    if (!searchByAddress) {
      getContries();
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderState: orderState,
    allListValues: allListValues,
    currentValues: countryValues,
    isFormErrors: countryFormErrors,
    handleChangeValue: onChangeValue,
    handleFindBusiness: onClickFindBusiness
  })));
};

exports.MainSearch = MainSearch;
MainSearch.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * searchByAddress is used to validate if use address list and address form or dropdown options
   */
  searchByAddress: _propTypes.default.bool,

  /**
   * Method to find business from API
   */
  handlerFindBusiness: _propTypes.default.func,

  /**
   * Components types before main search
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after main search
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before main search
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after main search
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
MainSearch.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};