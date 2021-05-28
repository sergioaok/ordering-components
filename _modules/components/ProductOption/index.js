"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOption = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component to render product options
 */
var ProductOption = function ProductOption(props) {
  var UIComponent = props.UIComponent;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props));
};

exports.ProductOption = ProductOption;
ProductOption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Option object to render UI
   */
  option: _propTypes.default.object.isRequired,

  /**
   * Flag error
   */
  error: _propTypes.default.bool
};
ProductOption.defaultProps = {
  error: false
};