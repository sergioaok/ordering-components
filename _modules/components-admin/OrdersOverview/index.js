"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersOverview = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _WebsocketContext = require("../../contexts/WebsocketContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersOverview = function OrdersOverview(props) {
  var UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var requestsState = {};
  var socket = (0, _WebsocketContext.useWebsocket)();

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      loading = _useSession2$.loading;
  /**
   * Object to save pending orders
   */


  var _useState = (0, _react.useState)({
    loading: true,
    overview: {},
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      ordersOverviewStatus = _useState2[0],
      setOrdersOverviewStatus = _useState2[1];
  /**
   * Method to get total, pending, in progress, completed and cacelled orders quantity from Result
   */


  var getOrdersStatusQuantity = function getOrdersStatusQuantity(result) {
    var _totalQuantity = 0;
    var _pendingQuantity = 0;
    var _inProgressQuantity = 0;
    var _completedQuantity = 0;
    var _cancelledQuantity = 0;

    var _iterator = _createForOfIteratorHelper(result),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var order = _step.value;
        _totalQuantity += order.quantity;

        if (order.status === 0) {
          _pendingQuantity += order.quantity;
        }

        if (order.status === 3 || order.status === 4 || order.status === 7 || order.status === 8 || order.status === 9) {
          _inProgressQuantity += order.quantity;
        }

        if (order.status === 1 || order.status === 11) {
          _completedQuantity += order.quantity;
        }

        if (order.status === 2 || order.status === 5 || order.status === 6 || order.status === 10 || order.status === 12) {
          _cancelledQuantity += order.quantity;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return {
      total: _totalQuantity,
      pending: _pendingQuantity,
      inProgress: _inProgressQuantity,
      completed: _completedQuantity,
      cancelled: _cancelledQuantity
    };
  };
  /**
   * Method to get orders of selected driver from API
   */


  var getOrdersOverview = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var source, _yield$ordering$setAc, result, _result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setOrdersOverviewStatus(_objectSpread(_objectSpread({}, ordersOverviewStatus), {}, {
                loading: true
              }));
              source = {};
              requestsState.ordersOverview = source;
              _context.next = 6;
              return ordering.setAccessToken(token).orders().summary({
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc = _context.sent;
              result = _yield$ordering$setAc.content.result;
              _result = getOrdersStatusQuantity(result);
              setOrdersOverviewStatus(_objectSpread(_objectSpread({}, ordersOverviewStatus), {}, {
                overview: _result,
                loading: false
              }));
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setOrdersOverviewStatus(_objectSpread(_objectSpread({}, ordersOverviewStatus), {}, {
                loading: false,
                error: _context.t0
              }));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function getOrdersOverview() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to update orders overview for order update
   * @param {Object} updateData state update data
   */


  var updateOrdersOverview = function updateOrdersOverview(updateData) {
    var pendingState = [0];
    var inProgressState = [3, 4, 7, 8, 9];
    var completedState = [1, 11];
    var cancelledState = [2, 5, 6, 10, 12];

    var _overview = _objectSpread({}, ordersOverviewStatus.overview);

    if (pendingState.includes(updateData.old)) {
      _overview.pending = _overview.pending - 1;
    } else if (inProgressState.includes(updateData.old)) {
      _overview.inProgress = _overview.inProgress - 1;
    } else if (completedState.includes(updateData.old)) {
      _overview.completed = _overview.completed - 1;
    } else if (cancelledState.includes(updateData.old)) {
      _overview.cancelled = _overview.cancelled - 1;
    }

    if (pendingState.includes(updateData.new)) {
      _overview.pending = _overview.pending + 1;
    } else if (inProgressState.includes(updateData.new)) {
      _overview.inProgress = _overview.inProgress + 1;
    } else if (completedState.includes(updateData.new)) {
      _overview.completed = _overview.completed + 1;
    } else if (cancelledState.includes(updateData.new)) {
      _overview.cancelled = _overview.cancelled + 1;
    }

    setOrdersOverviewStatus(_objectSpread(_objectSpread({}, ordersOverviewStatus), {}, {
      overview: _overview
    }));
  };

  var isStateUpdate = function isStateUpdate(data) {
    if (Array.isArray(data)) {
      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _data = _step2.value;
          if (_data.attribute === 'status') return true;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else {
      if (data === null) return false;
      if (data.attribute === 'status') return true;
    }

    return false;
  };

  (0, _react.useEffect)(function () {
    if (ordersOverviewStatus.loading || loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      var stateUpdateData = order.history.filter(function (history) {
        return isStateUpdate(history.data);
      });
      if (stateUpdateData.length === 0) return;
      var lastStateUpdateData = stateUpdateData[stateUpdateData.length - 1].data;
      var statusChangeState = lastStateUpdateData.filter(function (data) {
        return isStateUpdate(data);
      });
      updateOrdersOverview(statusChangeState[0]);
    };

    var handleRegisterOrder = function handleRegisterOrder(order) {
      var _overview = _objectSpread({}, ordersOverviewStatus.overview);

      _overview.total += 1;
      _overview.pending += 1;
      setOrdersOverviewStatus(_objectSpread(_objectSpread({}, ordersOverviewStatus), {}, {
        overview: _overview
      }));
    };

    socket.join('orders');
    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleRegisterOrder);
    return function () {
      socket.leave('orders');
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleRegisterOrder);
    };
  }, [ordersOverviewStatus.overview, socket, loading]);
  (0, _react.useEffect)(function () {
    getOrdersOverview();
    return function () {
      if (requestsState.ordersOverview) {
        requestsState.ordersOverview.cancel();
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    ordersOverviewList: ordersOverviewStatus
  })));
};

exports.OrdersOverview = OrdersOverview;
OrdersOverview.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrdersOverview.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};