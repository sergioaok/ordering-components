"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Analytics = void 0;

var _react = _interopRequireWildcard(require("react"));

var _EventContext = require("../../contexts/EventContext");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Analytics = function Analytics(props) {
  var trackId = props.trackId,
      children = props.children;

  var _useEvent = (0, _EventContext.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      analyticsReady = _useState2[0],
      setAnalyticsReady = _useState2[1];

  (0, _react.useEffect)(function () {
    var _window;

    if (!trackId) {
      return;
    }

    if (window.document.getElementById('google-analytics-sdk')) {
      if (typeof ga !== 'undefined') {
        setAnalyticsReady(true);
      }

      return;
    }

    var js = window.document.createElement('script');
    js.id = 'google-analytics-sdk';
    js.async = true;
    js.defer = true;
    js.src = 'https://www.google-analytics.com/analytics.js';

    js.onload = ((_window = window) === null || _window === void 0 ? void 0 : _window.ga) && function () {
      setAnalyticsReady(true);
      window.ga('create', trackId);
      window.ga('require', 'ec');
      window.ga('set', 'page', window.location.pathname);
      window.ga('send', 'pageview');
    };

    window.document.body.appendChild(js);
    return function () {
      js.onload = null;
    };
  }, [trackId]);
  /**
   * Method to handle Pageview send to analytics
   * @param {String} pageName
   */

  var handlechangeView = function handlechangeView(pageName) {
    window.ga('set', 'page', pageName === null || pageName === void 0 ? void 0 : pageName.page);
    window.ga('send', 'pageview');
  };

  var handleClickProduct = function handleClickProduct(product) {
    window.ga('ec:addProduct', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price
    });
    window.ga('ec:setAction', 'click');
    window.ga('send', 'event', 'UI', 'click', 'add to cart');
  };

  var handleProductAdded = function handleProductAdded(product) {
    window.ga('ec:addProduct', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    });
    window.ga('ec:setAction', 'add');
    window.ga('send', 'event', 'UI', 'click', 'add to cart');
  };

  var handleLogin = function handleLogin(data) {
    window.ga('set', 'userId', data.id);
  };

  var handleOrderPlaced = function handleOrderPlaced(order) {
    var _order$business;

    window.ga('ec:setAction', 'purchase', {
      // Transaction details are provided in an actionFieldObject.
      id: order.id,
      // (Required) Transaction id (string).
      affiliation: (_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.name,
      // Affiliation (string).
      revenue: order.total,
      // Revenue (number).
      tax: order.tax_total,
      // Tax (number).
      shipping: order.delivery_zone_price // Shipping (number).

    });
  };

  (0, _react.useEffect)(function () {
    console.log('Analytic Ready');

    if (analyticsReady && window.ga) {
      events.on('change_view', handlechangeView);
      events.on('userLogin', handleLogin);
      events.on('product_clicked', handleClickProduct);
      events.on('product_added', handleProductAdded);
      events.on('order_placed', handleOrderPlaced);
    }

    return function () {
      if (analyticsReady && window.ga) {
        events.off('change_view', handlechangeView);
        events.off('userLogin', handleLogin);
        events.off('product_clicked', handleClickProduct);
        events.off('product_added', handleProductAdded);
        events.off('order_placed', handleOrderPlaced);
      }
    };
  }, [analyticsReady]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};

exports.Analytics = Analytics;
Analytics.propTypes = {
  /**
   * Your Google Analytics trackId
   * @see trackId What is trackID ? https://developers.google.com/analytics/devguides/collection/analyticsjs
   */
  trackId: _propTypes.default.string.isRequired
};
Analytics.defaultProps = {};