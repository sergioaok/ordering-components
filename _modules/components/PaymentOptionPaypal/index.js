"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionPaypal = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage payment option paypal behavior without UI component
 */
var PaymentOptionPaypal = function PaymentOptionPaypal(props) {
  var _window2, _window2$paypal, _window2$paypal$Butto;

  var body = props.body,
      clientId = props.clientId,
      btnStyle = props.btnStyle,
      UIComponent = props.UIComponent,
      handlerChangePaypal = props.handlerChangePaypal;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      _useOrder2$ = _useOrder2[1],
      confirmCart = _useOrder2$.confirmCart,
      placeCart = _useOrder2$.placeCart;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSdkReady = _useState2[0],
      setIsSdkReady = _useState2[1];

  (0, _react.useEffect)(function () {
    var _window;

    if (!clientId) return;

    if ((_window = window) !== null && _window !== void 0 && _window.paypal) {
      setIsSdkReady(true);
      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://www.paypal.com/sdk/js?client-id=".concat(clientId);
    script.async = true;

    script.onload = function () {
      setIsSdkReady(true);
    };

    script.onerror = function () {
      throw new Error('Paypal SDK could not be loaded.');
    };

    document.body.appendChild(script);
    return function () {
      script.onload = null;
    };
  }, [clientId]);

  var createOrder = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(data, actions) {
      var params, _yield$placeCart, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = {
                paymethod_id: body.paymethod_id,
                amount: body.amount,
                delivery_zone_id: body.delivery_zone_id
              };
              _context.next = 3;
              return placeCart(body.cartUuid, params);

            case 3:
              _yield$placeCart = _context.sent;
              error = _yield$placeCart.error;
              result = _yield$placeCart.result;

              if (!error) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", null);

            case 8:
              return _context.abrupt("return", result.pay_reference);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function createOrder(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var onApprove = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(data, actions) {
      var _yield$confirmCart, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return confirmCart(body.cartUuid);

            case 2:
              _yield$confirmCart = _context2.sent;
              error = _yield$confirmCart.error;
              result = _yield$confirmCart.result;

              if (!error) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", null);

            case 7:
              handlerChangePaypal && handlerChangePaypal(result.order.uuid);
              return _context2.abrupt("return", result);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onApprove(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onFail = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {
      var _yield$confirmCart2, result;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return confirmCart(body.cartUuid);

            case 2:
              _yield$confirmCart2 = _context3.sent;
              result = _yield$confirmCart2.result;
              return _context3.abrupt("return", result);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onFail(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Assign paypal button to an instance of react dom
   */


  var Button = (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$paypal = _window2.paypal) === null || _window2$paypal === void 0 ? void 0 : (_window2$paypal$Butto = _window2$paypal.Buttons) === null || _window2$paypal$Butto === void 0 ? void 0 : _window2$paypal$Butto.driver('react', {
    React: _react.default,
    ReactDOM: _reactDom.default
  });
  return UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isSdkReady: isSdkReady,
    PaypalButton: Button,
    paypalButtonProps: {
      createOrder: createOrder,
      onApprove: onApprove,
      onError: onFail,
      onCancel: onFail,
      style: btnStyle
    }
  }));
};

exports.PaymentOptionPaypal = PaymentOptionPaypal;
PaymentOptionPaypal.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Object with body data to place order
   */
  body: _propTypes.default.object.isRequired,

  /**
   * paypal ClientID
   */
  clientId: _propTypes.default.string.isRequired,

  /**
   * Method to get success response from paypal button
   */
  handlerChangePaypal: _propTypes.default.func,

  /**
   * Components types before Payment options paypal
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Payment options paypal
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Payment options paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Payment options paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PaymentOptionPaypal.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};