"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleBusinessCard = function SingleBusinessCard(props) {
  var UIComponent = props.UIComponent;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props));
};

exports.SingleBusinessCard = SingleBusinessCard;
SingleBusinessCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Business name
   */
  name: _propTypes.default.string,

  /**
   * Minimun amount for an order of each business
   */
  minimun: _propTypes.default.number,

  /**
   * Price in dollars of delivery for each business
   */
  delivery_price: _propTypes.default.number,

  /**
   * Some useful description about business
   */
  description: _propTypes.default.string,

  /**
   * Distance between the customer and business
   */
  distance: _propTypes.default.number,

  /**
   * Time for deliveries of each business
   */
  delivery_time: _propTypes.default.string,

  /**
   * Time for pickup of each business
   */
  pickup_time: _propTypes.default.string,

  /**
   * Components types before single business card
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after single business card
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after single business card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
SingleBusinessCard.defaultProps = {
  id: 0,
  name: '',
  minimun: 0,
  delivery_price: 0,
  description: '',
  distance: 0,
  delivery_time: ''
};