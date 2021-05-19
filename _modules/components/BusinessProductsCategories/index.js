"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BusinessProductsCategories = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var BusinessProductsCategories = function BusinessProductsCategories(props) {
  var categories = props.categories,
      onClickCategory = props.onClickCategory,
      UIComponent = props.UIComponent;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    categories: categories,
    handlerClickCategory: onClickCategory
  })));
};

exports.BusinessProductsCategories = BusinessProductsCategories;
BusinessProductsCategories.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * categories, this must be contains an array of products categories
   */
  categories: _propTypes.default.arrayOf(_propTypes.default.object),

  /**
   * Components types before business products categories
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business products categories
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business products categories
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business products categories
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
BusinessProductsCategories.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
var _default = BusinessProductsCategories;
exports.default = _default;