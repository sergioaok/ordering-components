"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

var _ApiContext = require("../../contexts/ApiContext");

var _UtilsContext = require("../../contexts/UtilsContext");

var _ConfigContext = require("../../contexts/ConfigContext");

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

/**
 * Component to manage address details behavior without UI component
 */
var AddressDetails = function AddressDetails(props) {
  var _configs$google_maps_;

  var apiKey = props.apiKey,
      UIComponent = props.UIComponent,
      mapConfigs = props.mapConfigs;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useUtils = (0, _UtilsContext.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var GM_API_KEY = apiKey || (configs === null || configs === void 0 ? void 0 : (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value);
  var requestsState = {};
  /**
   * This must be contains an object with business location
   */

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      location = _useState2[0],
      setLocation = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      logo = _useState4[0],
      setLogo = _useState4[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * Method to format google url for business location
   */


  var formatUrl = function formatUrl(location) {
    var _orderState$options, _orderState$options$a, _mapConfigs$mapSize, _mapConfigs$mapSize2, _mapConfigs$mapSize3, _mapConfigs$mapSize4;

    var orderLocation = props.orderLocation || (orderState === null || orderState === void 0 ? void 0 : (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : (_orderState$options$a = _orderState$options.address) === null || _orderState$options$a === void 0 ? void 0 : _orderState$options$a.location);
    return orderState.options.type === 1 ? "https://maps.googleapis.com/maps/api/staticmap?size=".concat((mapConfigs === null || mapConfigs === void 0 ? void 0 : (_mapConfigs$mapSize = mapConfigs.mapSize) === null || _mapConfigs$mapSize === void 0 ? void 0 : _mapConfigs$mapSize.width) || 500, "x").concat((mapConfigs === null || mapConfigs === void 0 ? void 0 : (_mapConfigs$mapSize2 = mapConfigs.mapSize) === null || _mapConfigs$mapSize2 === void 0 ? void 0 : _mapConfigs$mapSize2.height) || 190, "&center=").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lat, ",").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lng, "&zoom=").concat((mapConfigs === null || mapConfigs === void 0 ? void 0 : mapConfigs.mapZoom) || 15, "&scale=2&maptype=roadmap&markers=icon:%7Ccolor:red%7C").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lat, ",").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lng, "&key=").concat(GM_API_KEY) : "https://maps.googleapis.com/maps/api/staticmap?size=".concat((mapConfigs === null || mapConfigs === void 0 ? void 0 : (_mapConfigs$mapSize3 = mapConfigs.mapSize) === null || _mapConfigs$mapSize3 === void 0 ? void 0 : _mapConfigs$mapSize3.width) || 500, "x").concat((mapConfigs === null || mapConfigs === void 0 ? void 0 : (_mapConfigs$mapSize4 = mapConfigs.mapSize) === null || _mapConfigs$mapSize4 === void 0 ? void 0 : _mapConfigs$mapSize4.height) || 190, "&scale=2&maptype=roadmap&markers=icon:%7Ccolor:red%7C").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lat, ",").concat(orderLocation === null || orderLocation === void 0 ? void 0 : orderLocation.lng, "&markers=icon:").concat(optimizeImage(logo, 'w_60,h_60,r_max'), "%7Ccolor:white%7C").concat(location === null || location === void 0 ? void 0 : location.lat, ",").concat(location === null || location === void 0 ? void 0 : location.lng, "&key=").concat(GM_API_KEY);
  };
  /**
   * Method to get business location from API
   */


  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var source, _yield$ordering$busin, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              source = {};
              requestsState.business = source;
              _context.next = 5;
              return ordering.businesses(props.businessId).select(['location', 'logo']).get({
                cancelToken: source
              });

            case 5:
              _yield$ordering$busin = _context.sent;
              result = _yield$ordering$busin.content.result;
              setLogo(result.logo);
              setLocation(result.location);
              _context.next = 13;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (props.location && props.businessLogo) {
      setLocation(props.location);
      setLogo(props.businessLogo);
    } else {
      getBusiness();
    }

    return function () {
      if (requestsState.business) {
        requestsState.business.cancel();
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    googleMapsUrl: formatUrl(location)
  })));
};

exports.AddressDetails = AddressDetails;
AddressDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * location, business location with lat, lng and zoom properties
   */
  business: _propTypes.default.object,

  /**
   * business, object with business info, should be contains address and locations property
   */
  businessId: _propTypes.default.number,

  /**
   * Components types before Address Details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Address Details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Address Details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Address Details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AddressDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};