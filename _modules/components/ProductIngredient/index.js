"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProductIngredient = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Component to render product ingredient
 */
var ProductIngredient = function ProductIngredient(props) {
  var UIComponent = props.UIComponent,
      ingredient = props.ingredient,
      onChange = props.onChange;
  /**
   * Set current state
   */

  var state = {
    id: ingredient.id,
    name: ingredient.name,
    selected: props.state.selected
  };
  /**
   * Run onChange function with new state
   * @param {object} newState State with changes
   */

  var changeState = function changeState(newState) {
    onChange && onChange(newState, ingredient);
  };
  /**
   * Select/unselect the suboption
   */


  var toggleSelect = function toggleSelect() {
    changeState({
      selected: !state.selected
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    state: state,
    toggleSelect: toggleSelect
  })));
};

exports.ProductIngredient = ProductIngredient;
ProductIngredient.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Ingredient object to render UI
   */
  ingredient: _propTypes.default.object.isRequired,

  /**
   * Current state
   */
  state: _propTypes.default.shape({
    selected: _propTypes.default.bool
  }).isRequired,

  /**
   * Function to get ingredient changes
   */
  onChange: _propTypes.default.func
};
ProductIngredient.defaultProps = {
  state: {}
};
var _default = ProductIngredient;
exports.default = _default;