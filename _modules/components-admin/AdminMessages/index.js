"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminMessages = void 0;

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var AdminMessages = function AdminMessages(props) {
  var UIComponent = props.UIComponent,
      orderId = props.orderId,
      customHandleSend = props.customHandleSend,
      orderMessages = props.messages,
      setOrderMessages = props.setMessages,
      asDashboard = props.asDashboard,
      order = props.order,
      handleUpdateOrderForUnreadCount = props.handleUpdateOrderForUnreadCount;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      user = _useSession2$.user,
      token = _useSession2$.token;

  var accessToken = props.accessToken || token;

  var _useState = (0, _react.useState)({
    business: true,
    administrator: true,
    driver: true,
    customer: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      canRead = _useState2[0],
      setCanRead = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: true,
    error: null,
    messages: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      messages = _useState6[0],
      setMessages = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      sendMessage = _useState8[0],
      setSendMessages = _useState8[1];

  var _useState9 = (0, _react.useState)({
    loading: true,
    error: null,
    messages: []
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      readMessages = _useState10[0],
      setReadMessages = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      image = _useState12[0],
      setImage = _useState12[1];

  var socket = (0, _WebsocketContext.useWebsocket)();
  /**
   * Method to send message
   */

  var handleSend = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _canRead, body, response, _yield$response$json, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!customHandleSend) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", customHandleSend(message));

            case 2:
              _context.prev = 2;
              setSendMessages({
                loading: true,
                error: null
              });
              _canRead = [];

              if (canRead.customer) {
                _canRead.push(3);
              }

              if (canRead.administrator) {
                _canRead.push(0);
              }

              if (canRead.business) {
                _canRead.push(2);
              }

              if (canRead.driver) {
                _canRead.push(4);
              }

              body = {
                comment: message,
                type: 2,
                can_see: _canRead.join(',')
              };

              if (image) {
                body.type = 3;
                body.file = image;
              }

              _context.next = 13;
              return fetch("".concat(ordering.root, "/orders/").concat(orderId, "/messages"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                },
                body: JSON.stringify(body)
              });

            case 13:
              response = _context.sent;
              _context.next = 16;
              return response.json();

            case 16:
              _yield$response$json = _context.sent;
              error = _yield$response$json.error;
              result = _yield$response$json.result;

              if (!error) {
                if (setOrderMessages && orderMessages) {
                  setOrderMessages(_objectSpread(_objectSpread({}, orderMessages), {}, {
                    messages: [].concat(_toConsumableArray(orderMessages.messages), [result])
                  }));
                } else {
                  setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                    messages: [].concat(_toConsumableArray(messages.messages), [result])
                  }));
                }
              }

              setSendMessages({
                loading: false,
                error: error ? result : null
              });
              _context.next = 26;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](2);
              setSendMessages({
                loading: false,
                error: [_context.t0.Messages]
              });

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 23]]);
    }));

    return function handleSend() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to Load message for first time
   */


  var loadMessages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var functionFetch, response, _yield$response$json2, error, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: true
              }));
              functionFetch = asDashboard ? "".concat(ordering.root, "/orders/").concat(orderId, "/messages?mode=dashboard") : "".concat(ordering.root, "/orders/").concat(orderId, "/messages");
              _context2.next = 5;
              return fetch(functionFetch, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 5:
              response = _context2.sent;
              _context2.next = 8;
              return response.json();

            case 8:
              _yield$response$json2 = _context2.sent;
              error = _yield$response$json2.error;
              result = _yield$response$json2.result;

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

              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                loading: false,
                error: [_context2.t0.Messages]
              }));

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function loadMessages() {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to Load message for first time
   * @param {number} messageId order message Id
   */


  var handleReadMessages = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(messageId) {
      var functionFetch, response, _yield$response$json3, error, result, _messages;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(orderMessages && setOrderMessages)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
                loading: true
              }));
              functionFetch = "".concat(ordering.root, "/orders/").concat(orderId, "/messages/").concat(messageId, "/read?order_id=").concat(orderId, "&order_message_id=").concat(messageId);
              _context3.next = 7;
              return fetch(functionFetch, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 7:
              response = _context3.sent;
              _context3.next = 10;
              return response.json();

            case 10:
              _yield$response$json3 = _context3.sent;
              error = _yield$response$json3.error;
              result = _yield$response$json3.result;

              if (!error) {
                setReadMessages({
                  messages: result,
                  loading: false,
                  error: null
                });

                if (messages.messages.length > 0) {
                  _messages = messages.messages.filter(function (message) {
                    if (message.id === messageId) {
                      message.read = true;
                    }

                    return true;
                  });
                  setMessages(_objectSpread(_objectSpread({}, messages), {}, {
                    messages: _messages
                  }));
                }

                handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(null);
                handleUpdateOrderForUnreadCount && handleUpdateOrderForUnreadCount(orderId);
              } else {
                setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
                  loading: false,
                  error: result
                }));
              }

              _context3.next = 19;
              break;

            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](2);
              setReadMessages(_objectSpread(_objectSpread({}, readMessages), {}, {
                loading: false,
                error: [_context3.t0.Messages]
              }));

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 16]]);
    }));

    return function handleReadMessages(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (orderMessages && setOrderMessages) return;
    loadMessages();
  }, [orderId]);
  (0, _react.useEffect)(function () {
    if (messages.loading || orderMessages && setOrderMessages) return;

    var handleNewMessage = function handleNewMessage(message) {
      if (message.order.id === orderId) {
        var found = messages.messages.find(function (_message) {
          return _message.id === message.id;
        });

        if (!found) {
          setMessages(_objectSpread(_objectSpread({}, messages), {}, {
            messages: [].concat(_toConsumableArray(messages.messages), [message])
          }));
        }
      }
    };

    socket.on('message', handleNewMessage);
    return function () {
      socket.off('message', handleNewMessage);
    };
  }, [messages, socket, order === null || order === void 0 ? void 0 : order.status]);
  (0, _react.useEffect)(function () {
    if (asDashboard) {
      socket.join("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
    } else {
      socket.join("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
    }

    return function () {
      if (asDashboard) {
        socket.leave("messages_orders_".concat(orderId, "_").concat(user === null || user === void 0 ? void 0 : user.level));
      } else {
        socket.leave("messages_orders_".concat(user === null || user === void 0 ? void 0 : user.id));
      }
    };
  }, [socket, orderId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    messages: orderMessages || messages,
    image: image,
    canRead: canRead,
    handleSend: handleSend,
    message: message,
    handleReadMessages: handleReadMessages,
    setMessage: setMessage,
    setCanRead: setCanRead,
    sendMessage: sendMessage,
    setImage: setImage
  })));
};

exports.AdminMessages = AdminMessages;
AdminMessages.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Custom Send messageS
   * @param {object} message Message to send
   */
  handleClickSetDefault: _propTypes.default.func,

  /**
   * @param {object} message
   * handleCustomClick, function to get click event and return message without default behavior
   */
  customHandleSend: _propTypes.default.func,

  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AdminMessages.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};