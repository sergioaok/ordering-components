"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpsellingPage = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ApiContext = require("../../contexts/ApiContext");

var _OrderContext = require("../../contexts/OrderContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UpsellingPage = function UpsellingPage(props) {
  var UIComponent = props.UIComponent,
      businessId = props.businessId,
      products = props.products,
      cartProducts = props.cartProducts,
      onSave = props.onSave;

  var _useState = (0, _react.useState)({
    products: [],
    loading: true,
    error: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      upsellingProducts = _useState2[0],
      setUpsellingProducts = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      businessProducts = _useState4[0],
      setBusinessProducts = _useState4[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  (0, _react.useEffect)(function () {
    if (products !== null && products !== void 0 && products.length || businessId) {
      if (products !== null && products !== void 0 && products.length) {
        getUpsellingProducts(products);
      } else {
        getProducts();
      }
    } else {
      setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
        error: true,
        message: 'BusinessId is required when products is not defined'
      }));
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (!upsellingProducts.loading) {
      getUpsellingProducts(businessProducts);
    }
  }, [orderState.loading]);
  /**
   * getting products if array of product is not defined
   */

  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$busin, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return ordering.businesses(businessId).products().parameters({
                type: 1,
                params: 'upsellings'
              }).get();

            case 3:
              _yield$ordering$busin = _context.sent;
              result = _yield$ordering$busin.content.result;
              setBusinessProducts(result);
              getUpsellingProducts(result);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
                loading: false,
                error: _context.t0
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function getProducts() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   *
   * filt products if they are already in the cart
   * @param {array} cartProducts
   */


  var getUpsellingProducts = function getUpsellingProducts(result) {
    var upsellingProductsfiltered = result.filter(function (product) {
      return product.upselling;
    });
    var repeatProducts = cartProducts.filter(function (cartProduct) {
      return upsellingProductsfiltered.find(function (product) {
        return product.id === cartProduct.id;
      });
    });

    if (repeatProducts.length) {
      setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
        loading: false,
        products: upsellingProductsfiltered.filter(function (product) {
          return !product.inventoried && !repeatProducts.find(function (repeatProduct) {
            return repeatProduct.id === product.id;
          });
        })
      }));
    } else {
      setUpsellingProducts(_objectSpread(_objectSpread({}, upsellingProducts), {}, {
        loading: false,
        products: upsellingProductsfiltered
      }));
    }
  };
  /**
   * Function for confirm that the productForm now can be displayed
   * @param {product} product
   */


  var handleFormProduct = function handleFormProduct(product) {
    onSave(product);
  };

  return /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    upsellingProducts: upsellingProducts,
    handleFormProduct: handleFormProduct
  }));
};

exports.UpsellingPage = UpsellingPage;
UpsellingPage.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
    * upselling products that do not repeat in the cart
   */
  upsellingProducts: _propTypes.default.array,

  /**
   * BusinessId is required when products is not defined
   */
  businessId: _propTypes.default.number,

  /**
   * handleCustomClick, function to get click event and return product without default behavior
   */
  onSave: _propTypes.default.func
};