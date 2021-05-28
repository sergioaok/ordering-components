"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminOrdersList = void 0;

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

var AdminOrdersList = function AdminOrdersList(props) {
  var _paginationSettings$p;

  var UIComponent = props.UIComponent,
      propsToFetch = props.propsToFetch,
      orders = props.orders,
      isOnlyDelivery = props.isOnlyDelivery,
      initialPageSize = props.initialPageSize,
      driverId = props.driverId,
      loadMorePageSize = props.loadMorePageSize,
      orderIds = props.orderIds,
      deletedOrderId = props.deletedOrderId,
      orderStatus = props.orderStatus,
      orderBy = props.orderBy,
      orderDirection = props.orderDirection,
      useDefualtSessionManager = props.useDefualtSessionManager,
      paginationSettings = props.paginationSettings,
      filterValues = props.filterValues,
      searchValue = props.searchValue,
      isSearchByOrderId = props.isSearchByOrderId,
      isSearchByCustomerEmail = props.isSearchByCustomerEmail,
      isSearchByCustomerPhone = props.isSearchByCustomerPhone,
      orderIdForUnreadCountUpdate = props.orderIdForUnreadCountUpdate;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    loading: !orders,
    error: null,
    orders: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      orderList = _useState2[0],
      setOrderList = _useState2[1];

  var _useState3 = (0, _react.useState)({
    currentPage: paginationSettings.controlType === 'pages' && paginationSettings.initialPage && paginationSettings.initialPage >= 1 ? paginationSettings.initialPage - 1 : 0,
    pageSize: (_paginationSettings$p = paginationSettings.pageSize) !== null && _paginationSettings$p !== void 0 ? _paginationSettings$p : 10
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      pagination = _useState4[0],
      setPagination = _useState4[1];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      session = _useSession2[0];

  var socket = (0, _WebsocketContext.useWebsocket)();
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  var requestsState = {};

  var _useState5 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      actionStatus = _useState6[0],
      setActionStatus = _useState6[1];

  var sortOrdersArray = function sortOrdersArray(option, array) {
    if (option === 'id') {
      if (orderDirection === 'desc') {
        return array.sort(function (a, b) {
          return b.id - a.id;
        });
      }

      if (orderDirection === 'asc') {
        return array.sort(function (a, b) {
          return a.id - b.id;
        });
      }
    }

    if (option === 'last_direct_message_at') {
      return array.sort(function (a, b) {
        return new Date(b.last_direct_message_at) - new Date(a.last_direct_message_at);
      });
    }

    return array;
  };
  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */


  var handleUpdateOrderStatus = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(order) {
      var source, _yield$ordering$setAc, content, _orders2;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setActionStatus(_objectSpread(_objectSpread({}, actionStatus), {}, {
                loading: true
              }));
              source = {};
              requestsState.updateOrders = source;
              _context.next = 6;
              return ordering.setAccessToken(accessToken).orders(order.id).save({
                status: order.newStatus
              }, {
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc = _context.sent;
              content = _yield$ordering$setAc.content;
              setActionStatus({
                loading: false,
                error: content.error ? content.result : null
              });

              if (!content.error) {
                _orders2 = orderList.orders.filter(function (_order) {
                  return _order.id !== order.id;
                });
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  orders: _orders2
                }));
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              setActionStatus({
                loading: false,
                error: [_context.t0.message]
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }));

    return function handleUpdateOrderStatus(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Method to get orders from API
   * @param {number} page page number
   */


  var getOrders = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(pageSize, page) {
      var where, conditions, options, checkInnerContain, checkOutContain, searchConditions, filterConditons, source, functionFetch;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              where = [];
              conditions = [];
              options = {
                query: {
                  orderBy: (orderDirection === 'desc' ? '-' : '') + orderBy,
                  page: page,
                  page_size: pageSize
                }
              };

              if (orderIds) {
                conditions.push({
                  attribute: 'id',
                  value: orderIds
                });
              }

              if (Object.keys(filterValues).length === 0) {
                if (orderStatus) {
                  conditions.push({
                    attribute: 'status',
                    value: orderStatus
                  });
                }
              } else {
                if (filterValues.statuses.length > 0) {
                  checkInnerContain = filterValues.statuses.every(function (el) {
                    return orderStatus.indexOf(el) !== -1;
                  });
                  checkOutContain = orderStatus.every(function (el) {
                    return filterValues.statuses.indexOf(el) !== -1;
                  });
                  if (checkInnerContain) conditions.push({
                    attribute: 'status',
                    value: filterValues.statuses
                  });

                  if (checkOutContain) {
                    if (orderStatus) {
                      conditions.push({
                        attribute: 'status',
                        value: orderStatus
                      });
                    }
                  }
                } else {
                  if (orderStatus) {
                    conditions.push({
                      attribute: 'status',
                      value: orderStatus
                    });
                  }
                }
              }

              if (isOnlyDelivery) {
                conditions.push({
                  attribute: 'delivery_type',
                  value: 1
                });
              }

              if (driverId) {
                conditions.push({
                  attribute: 'driver_id',
                  value: driverId
                });
              }

              if (searchValue) {
                searchConditions = [];

                if (isSearchByOrderId) {
                  searchConditions.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByCustomerEmail) {
                  searchConditions.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'email',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(searchValue, "%"))
                      }
                    }]
                  });
                }

                if (isSearchByCustomerPhone) {
                  searchConditions.push({
                    attribute: 'customer',
                    conditions: [{
                      attribute: 'cellphone',
                      value: {
                        condition: 'ilike',
                        value: encodeURI("%".concat(searchValue, "%"))
                      }
                    }]
                  });
                }

                conditions.push({
                  conector: 'OR',
                  conditions: searchConditions
                });
              }

              if (Object.keys(filterValues).length) {
                filterConditons = [];

                if (filterValues !== null && filterValues !== void 0 && filterValues.orderId) {
                  filterConditons.push({
                    attribute: 'id',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(filterValues === null || filterValues === void 0 ? void 0 : filterValues.orderId, "%"))
                    }
                  });
                }

                if (filterValues.deliveryFromDatetime !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '>=',
                      value: encodeURI(filterValues.deliveryFromDatetime)
                    }
                  });
                }

                if (filterValues.deliveryEndDatetime !== null) {
                  filterConditons.push({
                    attribute: 'delivery_datetime',
                    value: {
                      condition: '<=',
                      value: filterValues.deliveryEndDatetime
                    }
                  });
                }

                if (filterValues.businessIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'business_id',
                    value: filterValues.businessIds
                  });
                }

                if (filterValues.driverIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'driver_id',
                    value: filterValues.driverIds
                  });
                }

                if (filterValues.deliveryTypes.length !== 0) {
                  filterConditons.push({
                    attribute: 'delivery_type',
                    value: filterValues.deliveryTypes
                  });
                }

                if (filterValues.paymethodIds.length !== 0) {
                  filterConditons.push({
                    attribute: 'paymethod_id',
                    value: filterValues.paymethodIds
                  });
                }

                if (filterConditons.length) {
                  conditions.push({
                    conector: 'AND',
                    conditions: filterConditons
                  });
                }
              }

              if (conditions.length) {
                where = {
                  conditions: conditions,
                  conector: 'AND'
                };
              }

              source = {};
              requestsState.orders = source;
              options.cancelToken = source;

              if (propsToFetch) {
                functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().select(propsToFetch).where(where);
              } else {
                functionFetch = ordering.setAccessToken(accessToken).orders().asDashboard().where(where);
              }

              _context2.next = 16;
              return functionFetch.get(options);

            case 16:
              return _context2.abrupt("return", _context2.sent);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getOrders(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * Method to detect if incoming order and update order belong to filter.
   * @param {Object} order incoming order and update order
   */


  var isFilteredOrder = function isFilteredOrder(order) {
    var filterCheck = true;

    if (filterValues.businessIds !== undefined && filterValues.businessIds.length > 0) {
      if (!filterValues.businessIds.includes(order.business_id)) {
        filterCheck = false;
      }
    }

    if (filterValues.driverIds !== undefined && filterValues.driverIds.length > 0) {
      if (!filterValues.driverIds.includes(order.driver_id)) {
        filterCheck = false;
      }
    }

    if (filterValues.deliveryTypes !== undefined && filterValues.deliveryTypes.length > 0) {
      if (!filterValues.deliveryTypes.includes(order.delivery_type)) {
        filterCheck = false;
      }
    }

    if (filterValues.paymethodIds !== undefined && filterValues.paymethodIds.length > 0) {
      if (!filterValues.paymethodIds.includes(order.paymethod_id)) {
        filterCheck = false;
      }
    }

    if (filterValues.statuses !== undefined && filterValues.statuses.length > 0) {
      if (!filterValues.statuses.includes(parseInt(order.status))) {
        filterCheck = false;
      }
    }

    return filterCheck;
  };

  var loadOrders = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var response;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (session.token) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.prev = 2;
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context3.next = 6;
              return getOrders(initialPageSize, 1);

            case 6:
              response = _context3.sent;
              setOrderList({
                loading: false,
                orders: response.content.error ? [] : response.content.result,
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: initialPageSize / loadMorePageSize,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](2);

              if (_context3.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context3.t0.message]
                }));
              }

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 11]]);
    }));

    return function loadOrders() {
      return _ref3.apply(this, arguments);
    };
  }();

  var loadMoreOrders = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var response;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                loading: true
              }));
              _context4.prev = 1;
              _context4.next = 4;
              return getOrders(loadMorePageSize, pagination.currentPage + 1);

            case 4:
              response = _context4.sent;
              setOrderList({
                loading: false,
                orders: response.content.error ? orderList.orders : orderList.orders.concat(response.content.result),
                error: response.content.error ? response.content.result : null
              });

              if (!response.content.error) {
                setPagination({
                  currentPage: response.content.pagination.current_page,
                  pageSize: response.content.pagination.page_size,
                  totalPages: response.content.pagination.total_pages,
                  total: response.content.pagination.total,
                  from: response.content.pagination.from,
                  to: response.content.pagination.to
                });
              }

              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](1);

              if (_context4.t0.constructor.name !== 'Cancel') {
                setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
                  loading: false,
                  error: [_context4.t0.message]
                }));
              }

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 9]]);
    }));

    return function loadMoreOrders() {
      return _ref4.apply(this, arguments);
    };
  }();
  /**
   * Listening order id to update for unread_count parameter
   */


  (0, _react.useEffect)(function () {
    if (orderIdForUnreadCountUpdate === null || orderList.orders.length === 0) return;

    var _orders = orderList.orders.filter(function (order) {
      if (order.id === orderIdForUnreadCountUpdate) {
        order.unread_count = 0;
        order.unread_general_count = 0;
        order.unread_direct_count = 0;
      }

      return true;
    });

    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: _orders
    }));
  }, [orderIdForUnreadCountUpdate]);
  /**
   * Listening deleted order
   */

  (0, _react.useEffect)(function () {
    if (deletedOrderId === null) return;
    var orders = orderList.orders.filter(function (_order) {
      return _order.id !== deletedOrderId;
    });
    loadOrders();
    setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
      orders: orders
    }));
  }, [deletedOrderId]);
  /**
   * Listening sesssion and filter values change
   */

  (0, _react.useEffect)(function () {
    if (orders) {
      setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
        orders: orders
      }));
    } else {
      var checkInnerContain = false;
      var checkOutContain = false;

      if (Object.keys(filterValues).length > 0) {
        checkInnerContain = filterValues.statuses.every(function (el) {
          return orderStatus.indexOf(el) !== -1;
        });
        checkOutContain = orderStatus.every(function (el) {
          return filterValues.statuses.indexOf(el) !== -1;
        });

        if (!checkInnerContain && !checkOutContain) {
          setOrderList({
            loading: false,
            orders: [],
            error: null
          });
          return;
        }
      }

      loadOrders();
    }

    return function () {
      if (requestsState.orders) {
        requestsState.orders.cancel();
      }
    };
  }, [session, searchValue, orderBy, filterValues, isOnlyDelivery, driverId, orders]);
  (0, _react.useEffect)(function () {
    if (orderList.loading) return;

    var handleUpdateOrder = function handleUpdateOrder(order) {
      var found = orderList.orders.find(function (_order) {
        return _order.id === order.id;
      });
      var orders = [];

      if (found) {
        orders = orderList.orders.filter(function (_order) {
          var valid = true;

          if (_order.id === order.id) {
            delete order.total;
            delete order.subtotal;
            Object.assign(_order, order);
            valid = (orderStatus.length === 0 || orderStatus.includes(parseInt(_order.status))) && isFilteredOrder(order);

            if (!valid) {
              pagination.total--;
              setPagination(_objectSpread({}, pagination));
            }
          }

          return valid;
        });

        var _orders = sortOrdersArray(orderBy, orders);

        setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
          orders: _orders
        }));
      } else {
        if (isFilteredOrder(order)) {
          var isOrderStatus = orderStatus.includes(parseInt(order.status));

          if (isOrderStatus) {
            orders = [].concat(_toConsumableArray(orderList.orders), [order]);

            var _orders3 = sortOrdersArray(orderBy, orders);

            pagination.total++;
            setPagination(_objectSpread({}, pagination));
            setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
              orders: _orders3
            }));
          }
        }
      }
    };

    var handleRegisterOrder = function handleRegisterOrder(order) {
      var found = orderList.orders.find(function (_order) {
        return _order.id === order.id;
      });
      if (found) return;
      var orders = [];

      if (isFilteredOrder(order)) {
        if (orderStatus.includes(0) && order.status === 0 || orderStatus.includes(13) && order.status === 13) {
          orders = [order].concat(_toConsumableArray(orderList.orders));

          var _orders = sortOrdersArray(orderBy, orders);

          pagination.total++;
          setPagination(_objectSpread({}, pagination));
          setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
            orders: _orders
          }));
        }
      }
    };

    var handleNewMessage = function handleNewMessage(message) {
      if (orderList.orders.length === 0) return;
      var found = orderList.orders.find(function (order) {
        return order.id === message.order.id;
      });

      if (found) {
        var _orders = orderList.orders.filter(function (order) {
          if (order.id === message.order.id) {
            if (order.last_message_at !== message.created_at) {
              if (message.type === 1) {
                order.last_general_message_at = message.created_at;

                if (message.author.level !== 0) {
                  order.unread_general_count = order.unread_general_count + 1;
                }
              } else {
                order.last_direct_message_at = message.created_at;

                if (message.author.level !== 0) {
                  order.unread_direct_count = order.unread_direct_count + 1;
                }
              }

              order.last_message_at = message.created_at;

              if (message.author.level !== 0) {
                order.unread_count = order.unread_count + 1;
              }
            }
          }

          return true;
        });

        var _sortedOrders = sortOrdersArray(orderBy, _orders);

        setOrderList(_objectSpread(_objectSpread({}, orderList), {}, {
          orders: _sortedOrders
        }));
      }
    };

    socket.on('update_order', handleUpdateOrder);
    socket.on('orders_register', handleRegisterOrder);
    socket.on('message', handleNewMessage);
    return function () {
      socket.off('update_order', handleUpdateOrder);
      socket.off('orders_register', handleRegisterOrder);
      socket.off('message', handleNewMessage);
    };
  }, [orderList.orders, pagination, orderBy, socket]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    orderList: orderList,
    pagination: pagination,
    loadMoreOrders: loadMoreOrders,
    handleUpdateOrderStatus: handleUpdateOrderStatus
  })));
};

exports.AdminOrdersList = AdminOrdersList;
AdminOrdersList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array of drivers props to fetch
   */
  propsToFetch: _propTypes.default.arrayOf(_propTypes.string),

  /**
   * Function to get order that was clicked
   * @param {Object} order Order that was clicked
   */
  onOrderClick: _propTypes.default.func,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,

  /**
   * Array of orders
   * This is used of first option to show list
   */
  orders: _propTypes.default.arrayOf(_propTypes.object),

  /**
   * Array of id of orders
   * Get a list of orders by ids form Ordering API
   */
  orderIds: _propTypes.default.arrayOf(_propTypes.number),

  /**
   * id of order to update unread_count parameter
   */
  orderIdForUnreadCountUpdate: _propTypes.default.number,

  /**
   * Array of id of orders
   * Get a list of orders by status form Ordering API
   * This can be use together `orderIds` option but not has effect with `orders` option
   */
  orderStatus: _propTypes.default.arrayOf(_propTypes.number),

  /**
   * Order orders by some attribute. Default by `id`.
   */
  orderBy: _propTypes.default.string,

  /**
   * Order direction ascendent (asc) or descendent (desc). Default is `desc`.
   */
  orderDirection: _propTypes.default.oneOf(['asc', 'desc']),

  /**
   * Pagination settings
   * You can set the pageSize, initialPage and controlType can be by pages or infinity
   */
  paginationSettings: _propTypes.default.exact({
    /**
     * initialPage only work with control type `pages`
     */
    initialPage: _propTypes.default.number,
    pageSize: _propTypes.default.number,
    controlType: _propTypes.default.oneOf(['infinity', 'pages'])
  }),

  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AdminOrdersList.defaultProps = {
  orderBy: 'id',
  orderDirection: 'desc',
  paginationSettings: {
    initialPage: 1,
    pageSize: 10,
    controlType: 'infinity'
  },
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};