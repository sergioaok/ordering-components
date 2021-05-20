"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkout = void 0;

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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage Checkout page behavior without UI component
 */
var Checkout = function Checkout(props) {
  var _orderState$carts;

  var businessId = props.businessId,
      propsToFetch = props.propsToFetch,
      actionsBeforePlace = props.actionsBeforePlace,
      handleCustomClick = props.handleCustomClick,
      onPlaceOrderClick = props.onPlaceOrderClick,
      UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      placing = _useState2[0],
      setPlacing = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];
  /**
   * Order context
   */


  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      placeCart = _useOrder2[1].placeCart;
  /**
   * Object to save an object with business information
   */


  var _useState5 = (0, _react.useState)({
    business: null,
    loading: true,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      businessDetails = _useState6[0],
      setBusinessDetails = _useState6[1];
  /**
   * This must be contains an object with info about paymente selected
   */


  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      paymethodSelected = _useState8[0],
      setPaymethodSelected = _useState8[1];
  /**
   * Current cart
   */


  var cart = (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat(businessId)];
  /**
   * Method to get business from API
   */

  var getBusiness = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return ordering.businesses(businessId).select(propsToFetch).get();

            case 3:
              _yield$ordering$busin = _context.sent;
              result = _yield$ordering$busin.content.result;
              setBusinessDetails(_objectSpread(_objectSpread({}, businessDetails), {}, {
                loading: false,
                business: result
              }));
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              setBusinessDetails(_objectSpread(_objectSpread({}, businessDetails), {}, {
                loading: false,
                error: _context.t0
              }));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function getBusiness() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to handle click on Place order
   */


  var handlerClickPlaceOrder = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _cartResult$paymethod;

      var paymethodData, _paymethodSelected$da, payload, result, cartResult;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              paymethodData = paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data;

              if (['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected.paymethod.gateway)) {
                paymethodData = {
                  source_id: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.id
                };
              }

              payload = {
                paymethod_id: paymethodSelected.paymethodId,
                paymethod_data: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data,
                offer_id: cart.offer_id,
                amount: cart.total
              };

              if (orderState.options.type === 1) {
                payload = _objectSpread(_objectSpread({}, payload), {}, {
                  delivery_zone_id: cart.delivery_zone_id
                });
              }

              if (!handleCustomClick) {
                _context2.next = 7;
                break;
              }

              handleCustomClick(payload, paymethodSelected, cart);
              return _context2.abrupt("return");

            case 7:
              payload = _objectSpread(_objectSpread({}, payload), {}, {
                paymethod_data: paymethodData
              });
              setPlacing(true);
              _context2.next = 11;
              return placeCart(cart.uuid, payload);

            case 11:
              result = _context2.sent;

              if (!(result !== null && result !== void 0 && result.error)) {
                _context2.next = 15;
                break;
              }

              setErrors(result === null || result === void 0 ? void 0 : result.result);
              return _context2.abrupt("return");

            case 15:
              cartResult = result === null || result === void 0 ? void 0 : result.result;

              if (!((cartResult === null || cartResult === void 0 ? void 0 : (_cartResult$paymethod = cartResult.paymethod_data) === null || _cartResult$paymethod === void 0 ? void 0 : _cartResult$paymethod.status) === 2 && actionsBeforePlace)) {
                _context2.next = 19;
                break;
              }

              _context2.next = 19;
              return actionsBeforePlace(paymethodSelected, result.result);

            case 19:
              setPlacing(false);
              onPlaceOrderClick && onPlaceOrderClick(payload, paymethodSelected, cartResult);

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handlerClickPlaceOrder() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handlePaymethodChange = function handlePaymethodChange(paymethod) {
    setPaymethodSelected(paymethod);
  };

  (0, _react.useEffect)(function () {
    getBusiness();
  }, [businessId]);
  /**
   * Update carts from sockets
   */

  (0, _react.useEffect)(function () {
    if (cart && cart.status === 1) {
      var data = {
        paymethod_id: paymethodSelected.paymethodId,
        paymethod_data: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.data,
        delivery_zone_id: cart.delivery_zone_id,
        offer_id: cart.offer_id,
        amount: cart.total
      };
      onPlaceOrderClick && onPlaceOrderClick(data, paymethodSelected, cart);
    }
  }, [cart]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cart: cart,
    placing: placing,
    errors: errors,
    orderOptions: orderState.options,
    paymethodSelected: paymethodSelected,
    businessDetails: businessDetails,
    handlePaymethodChange: handlePaymethodChange,
    handlerClickPlaceOrder: handlerClickPlaceOrder
  })));
};

exports.Checkout = Checkout;
Checkout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Custom method to receive props from checkout page
   */
  handleCustomClick: _propTypes.default.func,

  /**
   * onPlaceOrderClick, function to get click event and return business object after default behavior
   */
  onPlaceOrderClick: _propTypes.default.func,
  // /**
  //  * handler values from other components
  //  */
  // handlerValues: PropTypes.func,

  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
Checkout.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'paymethods', 'logo', 'location']
};