"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Cart = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OrderContext = require("../../contexts/OrderContext");

var _ConfigContext = require("../../contexts/ConfigContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Cart = function Cart(props) {
  var _stateConfig$order;

  var cart = props.cart,
      UIComponent = props.UIComponent,
      handleEditProduct = props.handleEditProduct;
  /**
   * Order context manager
   */

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      _useOrder2$ = _useOrder2[1],
      updateProduct = _useOrder2$.updateProduct,
      removeProduct = _useOrder2$.removeProduct,
      clearCart = _useOrder2$.clearCart;
  /**
   * Config context manager
   */


  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      stateConfig = _useConfig2[0];
  /**
   * Total product in cart
   */


  var totalBalance = ((_stateConfig$order = stateConfig.order) === null || _stateConfig$order === void 0 ? void 0 : _stateConfig$order.quantity) || 0;
  /**
   * Max total product in cart by config
   */

  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  /**
   * Calc balance by product id
   */

  var getProductMax = function getProductMax(product) {
    var productMax = product.inventoried ? product.stock : maxCartProductConfig;
    var max = product.quantity + productMax - product.balance;
    return max < product.quantity ? product.quantity : max;
  };
  /**
   * Calc balance by product id
   */


  var offsetDisabled = function offsetDisabled(product) {
    var productMax = product.inventoried ? product.stock : maxCartProductConfig;
    return productMax - (product.balance - product.quantity);
  };
  /**
   * Change product quantity of the cart
   */


  var changeQuantity = function changeQuantity(product, quantity) {
    if (quantity === 0) {
      removeProduct(product, cart);
    } else {
      updateProduct({
        id: product.id,
        business_id: product.business_id,
        code: product.code,
        quantity: quantity
      }, cart);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    carts: orderState.carts,
    orderState: orderState,
    clearCart: clearCart,
    removeProduct: removeProduct,
    changeQuantity: changeQuantity,
    getProductMax: getProductMax,
    offsetDisabled: offsetDisabled,
    handleEditProduct: handleEditProduct
  })));
};

exports.Cart = Cart;
Cart.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Function to edit product behavior
   */
  handleEditProduct: _propTypes.default.func,

  /**
   * String filter to fetch validation fields
   */
  validationFieldsType: _propTypes.default.string
};
var _default = Cart;
exports.default = _default;