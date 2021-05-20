"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ProductContext = require("../../contexts/ProductContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage login behavior without UI component
 */
var ProductComponent = function ProductComponent(props) {
  var product = props.product,
      UIComponent = props.UIComponent;

  var _useProduct = (0, _ProductContext.useProduct)(),
      _useProduct2 = _slicedToArray(_useProduct, 2),
      ingredients = _useProduct2[0].ingredients,
      dispatchIngredients = _useProduct2[1];

  var _useProduct3 = (0, _ProductContext.useProduct)(),
      _useProduct4 = _slicedToArray(_useProduct3, 2),
      options = _useProduct4[0].options,
      dispatchOptions = _useProduct4[1];

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      productCount = _useState2[0],
      setProductCount = _useState2[1];

  var _useState3 = (0, _react.useState)(product.price),
      _useState4 = _slicedToArray(_useState3, 2),
      productPrice = _useState4[0],
      setProductPrice = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      note = _useState6[0],
      setNote = _useState6[1];

  var initIngredients = function initIngredients() {
    var ingredientList = product.ingredients;

    for (var idx = 0; idx < ingredientList.length; idx++) {
      ingredientList[idx]['isChecked'] = true;
    }

    dispatchIngredients({
      type: _ProductContext.PRODUCT_ACTIONS.CHANGE_INGREDIENTS,
      ingredients: ingredientList
    });
  };

  var isCheckedRespectOption = function isCheckedRespectOption(options, respectId) {
    for (var oIdx = 0; oIdx < options.length; oIdx++) {
      var subOptionList = options[oIdx].suboptions;

      for (var sIdx = 0; sIdx < subOptionList.length; sIdx++) {
        if (subOptionList[sIdx].id == respectId) {
          return subOptionList[sIdx].isChecked;
        }
      }
    }

    return false;
  };

  var initOptions = function initOptions() {
    // console.log('===== Init options =====');
    var optionList = [];
    var extras = product.extras;

    for (var eIdx = 0; eIdx < extras.length; eIdx++) {
      optionList.push.apply(optionList, _toConsumableArray(extras[eIdx].options));
    }

    for (var oIdx = 0; oIdx < optionList.length; oIdx++) {
      var option = optionList[oIdx];
      option['isDisplay'] = true;

      if (option.conditioned) {
        var respectId = option.respect_to;

        if (typeof respectId == 'undefined' || respectId === '' || respectId == 'null') {
          option['isDisplay'] = false;
        }

        if (!isCheckedRespectOption(optionList, respectId)) {
          option['isDisplay'] = false;
        }
      }

      var subOptionList = option.suboptions;

      for (var sIdx = 0; sIdx < subOptionList.length; sIdx++) {
        subOptionList[sIdx]['isChecked'] = false;
      }
    }

    dispatchOptions({
      type: _ProductContext.PRODUCT_ACTIONS.CHANGE_OPTIONS,
      options: optionList
    });
  };

  (0, _react.useEffect)(function () {
    // console.log('===== use effect =====');
    initIngredients();
    initOptions();
  }, []);

  var onShare = function onShare() {
    if (props.onShare) {
      props.onShare(product);
    }
  };

  var onClose = function onClose() {
    if (props.onClose) {
      props.onClose();
    }
  };

  var onChangedIngredient = function onChangedIngredient(index) {
    // console.log('===== On changed ingredient =====');
    ingredients[index].isChecked = !ingredients[index].isChecked;
    dispatchIngredients({
      type: _ProductContext.PRODUCT_ACTIONS.CHANGE_INGREDIENTS,
      ingredients: ingredients
    });
  };

  var onChangedOption = function onChangedOption(optionIndex, subOptionIndex, optionType) {
    // console.log("===== On changed option =====");
    if (optionType) {
      // radio button
      for (var sIdx = 0; sIdx < options[optionIndex].suboptions.length; sIdx++) {
        options[optionIndex].suboptions[sIdx].isChecked = false;
      }

      options[optionIndex].suboptions[subOptionIndex].isChecked = true;
    } else {
      // checkbox
      options[optionIndex].suboptions[subOptionIndex].isChecked = !options[optionIndex].suboptions[subOptionIndex].isChecked;
    }

    for (var oIdx = 0; oIdx < options.length; oIdx++) {
      var option = options[oIdx];
      option['isDisplay'] = true;

      if (option.conditioned) {
        var respectId = option.respect_to;

        if (typeof respectId == 'undefined' || respectId === '' || respectId == 'null') {
          option['isDisplay'] = false;
        }

        if (!isCheckedRespectOption(options, respectId)) {
          option['isDisplay'] = false;
        }
      }
    }

    calculatePrice(productCount, options);
    dispatchOptions({
      type: _ProductContext.PRODUCT_ACTIONS.CHANGE_OPTIONS,
      options: options
    });
  };

  var calculatePrice = function calculatePrice(pCount, optionList) {
    var optionPrice = 0;

    for (var oIdx = 0; oIdx < optionList.length; oIdx++) {
      if (optionList[oIdx].isDisplay == false) continue;
      var subOptionList = optionList[oIdx].suboptions;

      for (var sIdx = 0; sIdx < subOptionList.length; sIdx++) {
        if (subOptionList[sIdx].isChecked) {
          optionPrice = optionPrice + parseFloat(subOptionList[sIdx].price);
        }
      }
    }

    var price = (parseFloat(product.price) + optionPrice) * pCount;
    setProductPrice(price);
  };

  var onChangedNote = function onChangedNote(e) {
    setNote(e.target.value);
  };

  var onClickedButtonPlus = function onClickedButtonPlus() {
    // console.log('===== on click button plus =====');
    setProductCount(productCount + 1);
    calculatePrice(productCount + 1, options);
  };

  var onClickedButtonMinus = function onClickedButtonMinus() {
    // console.log('===== on click button minues =====');
    if (productCount > 1) {
      setProductCount(productCount - 1);
      calculatePrice(productCount - 1, options);
    }
  };

  var onClickedButtonAdd = function onClickedButtonAdd() {
    if (props.onClickedButtonAdd) {
      product['ingredients'] = ingredients;
      product['options'] = options;
      product['note'] = note;
      product['quantity'] = productCount;
      props.onAdd(product);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    onShare: onShare,
    onClose: onClose,
    productName: product.name,
    productLogo: product.images,
    productCount: productCount,
    productPrice: productPrice,
    ingredients: ingredients,
    options: options,
    note: note,
    onChangedIngredient: onChangedIngredient,
    onChangedOption: onChangedOption,
    onChangedNote: onChangedNote,
    onClickedButtonPlus: onClickedButtonPlus,
    onClickedButtonMinus: onClickedButtonMinus,
    onClickedButtonAdd: onClickedButtonAdd
  })));
};

exports.ProductComponent = ProductComponent;
ProductComponent.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Custom function to check the sub-option is checked
   * @param
   * extraIndex, respectId
   * respectId is 'respect_to' field
   */
  onShare: _propTypes.default.func,
  onClose: _propTypes.default.func,
  productName: _propTypes.default.string,
  productLogo: _propTypes.default.string,
  productCount: _propTypes.default.number,
  productPrice: _propTypes.default.number,
  ingredients: _propTypes.default.array,
  options: _propTypes.default.array,
  note: _propTypes.default.array,
  onChangedIngredient: _propTypes.default.func,
  onChangedOption: _propTypes.default.func,
  onChangedNote: _propTypes.default.func,

  /**
   * Custom function to control the product number
   */
  onClickedButtonPlus: _propTypes.default.func,

  /**
   * Custom function to control the product number
   */
  onClickedButtonMinues: _propTypes.default.func,

  /**
   * Custom function to add the product to the cart
   */
  onClickedButtonAdd: _propTypes.default.func,

  /**
   * Components types before login form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after login form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after login form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
ProductComponent.defaultProps = {
  productName: ''
};