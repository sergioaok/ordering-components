"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PaymentOptionCash = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import { useOrder } from '../../contexts/OrderContext'

/**
 * Component to manage payment option cash behavior without UI component
 */
var PaymentOptionCash = function PaymentOptionCash(props) {
  var UIComponent = props.UIComponent,
      orderTotal = props.orderTotal;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    total: orderTotal
  })));
};

exports.PaymentOptionCash = PaymentOptionCash;
PaymentOptionCash.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Flag to know if use props from context or not
   */
  useOrderContext: _propTypes.default.bool,

  /**
   * Business id to know where order total come from
   */
  businessId: _propTypes.default.number,

  /**
   * orderTotal, amount of order total
   */
  orderTotal: _propTypes.default.number,

  /**
   * handler value typed on input cash
   */
  handlerSubmit: _propTypes.default.func,

  /**
   * Components types before payment option cash
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after payment option cash
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before payment option cash
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after payment option cash
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PaymentOptionCash.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
var _default = PaymentOptionCash;
exports.default = _default;