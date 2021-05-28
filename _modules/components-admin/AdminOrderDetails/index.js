"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminOrderDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AdminOrderDetails = function AdminOrderDetails(props) {
  var orderId = props.orderId,
      propsToFetch = props.propsToFetch,
      asDashboard = props.asDashboard,
      hashKey = props.hashKey,
      userCustomerId = props.userCustomerId,
      UIComponent = props.UIComponent;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token,
      loading = _useSession2$.loading;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    order: null,
    loading: !props.order,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      orderState = _useState2[0],
      setOrderState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    status: null,
    loading: false,
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      messageErrors = _useState4[0],
      setMessageErrors = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      actionStatus = _useState6[0],
      setActionStatus = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: true,
    error: null,
    messages: []
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      messages = _useState8[0],
      setMessages = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      messagesReadList = _useState10[0],
      setMessagesReadList = _useState10[1];

  var socket = (0, _WebsocketContext.useWebsocket)();
  var accessToken = props.accessToken || token;
  /**
   * Method to format a price number
   * @param {Number} price
   */

  var formatPrice = function formatPrice(price) {
    return price && "$ ".concat(price.toFixed(2));
  };
  /**
   * Method to Load message for first time
   */


  var loadMessages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var url, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: true
              }));
              url = "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard");
              _context.next = 5;
              return fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 5:
              response = _context.sent;
              _context.next = 8;
              return response.json();

            case 8:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                setMessages({
                  messages: result,
                  loading: false,
                  error: null
                });
              } else {
                setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: [_context.t0.Messages]
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 14]]);
    }));

    return function loadMessages() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to send a message
   * @param {string} spot
   */


  var sendMessage = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(spot) {
      var _yield$fetch, status;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: true
              }));
              _context2.next = 4;
              return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages"), {
                method: 'post',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  can_see: '0,2,3',
                  comment: "I am on the parking number: ".concat(spot),
                  order_id: orderId,
                  type: 2
                })
              });

            case 4:
              _yield$fetch = _context2.sent;
              status = _yield$fetch.status;
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: false,
                status: status
              }));
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              setMessageErrors(_objectSpread(_objectSpread({}, messageErrors), {}, {
                loading: false,
                error: [_context2.t0.message]
              }));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function sendMessage(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * handler send message with spot info
   * @param {number} param0
   */


  var handlerSubmitSpotNumber = function handlerSubmitSpotNumber(_ref3) {
    var spot = _ref3.spot;
    sendMessage(spot);
  };
  /**
   * Method to get order from API
   */


  var getOrder = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var options, functionFetch, _yield$functionFetch$, result, order;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              options = {};

              if (hashKey) {
                options.headers = {
                  'X-uuid-access-X': hashKey
                };
              }

              if (userCustomerId) {
                options.query = {
                  mode: 'dashboard'
                };
              }

              _context3.prev = 3;
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: true
              }));

              if (propsToFetch) {
                functionFetch = asDashboard ? ordering.setAccessToken(token).orders(orderId).asDashboard().select(propsToFetch) : ordering.setAccessToken(token).orders(orderId).select(propsToFetch);
              } else {
                functionFetch = asDashboard ? ordering.setAccessToken(token).orders(orderId).asDashboard() : ordering.setAccessToken(token).orders(orderId);
              }

              _context3.next = 8;
              return functionFetch.get();

            case 8:
              _yield$functionFetch$ = _context3.sent;
              result = _yield$functionFetch$.content.result;
              order = Array.isArray(result) ? null : result;
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                order: order
              }));
              _context3.next = 17;
              break;

            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](3);
              setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 14]]);
    }));

    return function getOrder() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */


  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(order) {
      var requestsState, source, _yield$ordering$setAc, content;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              requestsState = {};
              source = {};
              requestsState.updateOrder = source;
              _context4.next = 7;
              return ordering.setAccessToken(token).orders(order.id).save({
                status: order.newStatus
              }, {
                cancelToken: source
              });

            case 7:
              _yield$ordering$setAc = _context4.sent;
              content = _yield$ordering$setAc.content;
              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });
              _context4.next = 15;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](0);
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: false,
                error: [_context4.t0.message]
              }));

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 12]]);
    }));

    return function handleUpdateOrderStatus(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var readMessages = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var _messages$messages, _messages$messages2;

      var messageId, response, _yield$response$json2, result;

      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              messageId = messages === null || messages === void 0 ? void 0 : (_messages$messages = messages.messages[(messages === null || messages === void 0 ? void 0 : (_messages$messages2 = messages.messages) === null || _messages$messages2 === void 0 ? void 0 : _messages$messages2.length) - 1]) === null || _messages$messages === void 0 ? void 0 : _messages$messages.id;
              _context5.prev = 1;
              _context5.next = 4;
              return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages/").concat(messageId, "/read"), {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(token),
                  'Content-Type': 'application/json'
                }
              });

            case 4:
              response = _context5.sent;
              _context5.next = 7;
              return response.json();

            case 7:
              _yield$response$json2 = _context5.sent;
              result = _yield$response$json2.result;
              setMessagesReadList(result);
              _context5.next = 15;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](1);
              console.log(_context5.t0.message);

            case 15:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[1, 12]]);
    }));

    return function readMessages() {
      return _ref6.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (props.order) {
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: props.order
      }));
    } else {
      getOrder();
    }
  }, [orderId]);
  (0, _react.useEffect)(function () {
    if (orderState.loading || loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      if (order.id !== orderState.order.id) return;
      delete order.total;
      delete order.subtotal;
      setOrderState(_objectSpread(_objectSpread({}, orderState), {}, {
        order: Object.assign(orderState.order, order)
      }));
    };

    if (!asDashboard) {
      socket.join("orders_".concat(user.id));
    }

    socket.on('update_order', handleUpdateOrder);
    return function () {
      if (!asDashboard) {
        socket.leave("orders_".concat(user.id));
      }

      socket.off('update_order', handleUpdateOrder);
    };
  }, [orderState.order, socket, loading]);
  (0, _react.useEffect)(function () {
    loadMessages();
  }, [orderId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    order: orderState,
    messageErrors: messageErrors,
    actionStatus: actionStatus,
    formatPrice: formatPrice,
    handlerSubmit: handlerSubmitSpotNumber,
    handleUpdateOrderStatus: handleUpdateOrderStatus,
    messages: messages,
    setMessages: setMessages,
    messagesReadList: messagesReadList,
    readMessages: readMessages
  })));
};

exports.AdminOrderDetails = AdminOrderDetails;
AdminOrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * This must be contains orderId to fetch
   */
  orderId: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Order, this must be contains an object with all order info
   */
  order: _propTypes.default.object,

  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AdminOrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};