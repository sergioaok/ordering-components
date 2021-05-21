"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useProduct = exports.ProductProvider = exports.ProductContext = exports.PRODUCT_ACTIONS = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PRODUCT_ACTIONS = {
  CHANGE_INGREDIENTS: 'change_ingredients',
  CHANGE_OPTIONS: 'change_options'
};
/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */

exports.PRODUCT_ACTIONS = PRODUCT_ACTIONS;
var ProductContext = /*#__PURE__*/(0, _react.createContext)();
exports.ProductContext = ProductContext;
var defaultInitialState = {
  ingredients: [],
  options: []
};
/**
 * Default reducer definition
 * @param {object} state Currente state reducer
 * @param {object} action Data to change state reducer
 */

var defaultReducer = function defaultReducer(state, action) {
  switch (action.type) {
    case PRODUCT_ACTIONS.CHANGE_INGREDIENTS:
      {
        window.localStorage.setItem('ingredients', JSON.stringify(action.ingredients));
        return _objectSpread(_objectSpread({}, state), {}, {
          ingredients: action.ingredients
        });
      }

    case PRODUCT_ACTIONS.CHANGE_OPTIONS:
      {
        window.localStorage.setItem('options', JSON.stringify(action.options));
        return _objectSpread(_objectSpread({}, state), {}, {
          options: action.options
        });
      }

    default:
      return state;
  }
};
/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */


var ProductProvider = function ProductProvider(_ref) {
  var _ref$reducer = _ref.reducer,
      reducer = _ref$reducer === void 0 ? defaultReducer : _ref$reducer,
      _ref$initialState = _ref.initialState,
      initialState = _ref$initialState === void 0 ? defaultInitialState : _ref$initialState,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(ProductContext.Provider, {
    value: (0, _react.useReducer)(reducer, initialState)
  }, children);
};
/**
 * Hook to get and update order state
 */


exports.ProductProvider = ProductProvider;

var useProduct = function useProduct() {
  var productManager = (0, _react.useContext)(ProductContext);
  return productManager || [{}, function () {}];
};

exports.useProduct = useProduct;