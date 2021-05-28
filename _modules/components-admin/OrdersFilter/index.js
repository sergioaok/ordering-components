"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var OrdersFilter = function OrdersFilter(props) {
  var UIComponent = props.UIComponent,
      driverGroupList = props.driverGroupList;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      singleDriverIds = _useState2[0],
      setSingleDriverIds = _useState2[1];
  /**
   * This property is used to set in state the current value
   */


  var _useState3 = (0, _react.useState)({
    orderId: null,
    groupTypes: [],
    dateType: null,
    deliveryFromDatetime: null,
    deliveryEndDatetime: null,
    businessIds: [],
    driverIds: [],
    cityIds: [],
    statuses: [],
    deliveryTypes: [],
    paymethodIds: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      filterValues = _useState4[0],
      setFilterValues = _useState4[1];
  /**
   * Changer order Id
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeOrderId = function handleChangeOrderId(e) {
    var orderId = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      orderId: orderId
    }));
  };
  /**
   * Change group type
   * * @param {object} groupType Group type
   */


  var handleChangeGroup = function handleChangeGroup(groupType) {
    var _groupTypes = _toConsumableArray(filterValues.groupTypes);

    if (!_groupTypes.includes(groupType)) {
      _groupTypes.push(groupType);
    } else {
      _groupTypes = _groupTypes.filter(function (type) {
        return type !== groupType;
      });
    } // setGroupDriverIds(_driverIds)


    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      groupTypes: _groupTypes
    }));
  };
  /**
   * Change date type
   * * @param {string} dateType date type
  */


  var handleChangeDateType = function handleChangeDateType(dateType) {
    var now = (0, _dayjs.default)();

    switch (dateType) {
      case 'default':
        setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
          dateType: 'default',
          deliveryFromDatetime: null,
          deliveryEndDatetime: null
        }));
        break;

      case 'today':
        {
          var today = now.format('YYYY-MM-DD');
          var todayDatetime = (0, _dayjs.default)(today).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'today',
            deliveryFromDatetime: todayDatetime
          }));
          break;
        }

      case 'yesterday':
        {
          var yesterday = now.subtract('1', 'day').format('YYYY-MM-DD');
          var yesterdayDatetime = (0, _dayjs.default)(yesterday).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'yesterday',
            deliveryFromDatetime: yesterdayDatetime
          }));
          break;
        }

      case 'last7':
        {
          var last7day = now.subtract('7', 'day').format('YYYY-MM-DD');
          var last7Datetime = (0, _dayjs.default)(last7day).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'last7',
            deliveryFromDatetime: last7Datetime
          }));
          break;
        }

      case 'last30':
        {
          var last30day = now.subtract('30', 'day').format('YYYY-MM-DD');
          var last30Datetime = (0, _dayjs.default)(last30day).format('YYYY-MM-DD HH:mm:ss');
          setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
            dateType: 'last30',
            deliveryFromDatetime: last30Datetime
          }));
          break;
        }

      case 'term':
        setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
          dateType: 'term',
          deliveryFromDatetime: null,
          deliveryEndDatetime: null
        }));
    }
  };
  /**
   * Change start date
   * * @param {date} fromDate start date
  */


  var handleChangeFromDate = function handleChangeFromDate(fromDate) {
    var fromDatetime;

    if (fromDate !== null) {
      fromDatetime = (0, _dayjs.default)(fromDate).format('YYYY-MM-DD HH:mm:ss');
    } else {
      fromDatetime = null;
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryFromDatetime: fromDatetime
    }));
  };
  /**
   * Change end date
   * * @param {date} endDate end date
  */


  var handleChangeEndDate = function handleChangeEndDate(endDate) {
    var endDatetime;

    if (endDate !== null) {
      endDatetime = (0, _dayjs.default)(endDate).format('YYYY-MM-DD HH:mm:ss');
    } else {
      endDate = null;
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryEndDatetime: endDatetime
    }));
  };
  /**
   * Change businesses
   * * @param {number} businessId business id
  */


  var handleChangeBusinesses = function handleChangeBusinesses(businessId) {
    var _businessIds = _toConsumableArray(filterValues.businessIds);

    if (!_businessIds.includes(businessId)) {
      _businessIds.push(businessId);
    } else {
      _businessIds = _businessIds.filter(function (_businessId) {
        return _businessId !== businessId;
      });
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      businessIds: _businessIds
    }));
  };
  /**
   * Change driver
   * * @param {number} driverId driver id
  */


  var handleChangeDriver = function handleChangeDriver(driverId) {
    var _driverIds = _toConsumableArray(singleDriverIds);

    if (!_driverIds.includes(driverId)) {
      _driverIds.push(driverId);
    } else {
      _driverIds = _driverIds.filter(function (id) {
        return id !== driverId;
      });
    }

    setSingleDriverIds(_driverIds);
  };
  /**
   * Change city
   * * @param {number} cityId city id of business
  */


  var handleChangeCity = function handleChangeCity(cityId) {
    var _cityIds = _toConsumableArray(filterValues.cityIds);

    if (!_cityIds.includes(cityId)) {
      _cityIds.push(cityId);
    } else {
      _cityIds = _cityIds.filter(function (_cityId) {
        return _cityId !== cityId;
      });
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      cityIds: _cityIds
    }));
  };
  /**
   * Change order status
   * * @param {number} status status
  */


  var handleChangeOrderStatus = function handleChangeOrderStatus(status) {
    var _statuses = _toConsumableArray(filterValues.statuses);

    if (!_statuses.includes(status)) {
      _statuses.push(status);
    } else {
      _statuses = _statuses.filter(function (_status) {
        return _status !== status;
      });
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      statuses: _statuses
    }));
  };
  /**
   * Change delivery type
   * * @param {number} deliveryType delivery type
  */


  var handleChangeDeliveryType = function handleChangeDeliveryType(deliveryType) {
    var _deliveryTypes = _toConsumableArray(filterValues.deliveryTypes);

    if (!_deliveryTypes.includes(deliveryType)) {
      _deliveryTypes.push(deliveryType);
    } else {
      _deliveryTypes = _deliveryTypes.filter(function (_deliveryType) {
        return _deliveryType !== deliveryType;
      });
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      deliveryTypes: _deliveryTypes
    }));
  };
  /**
   * Change paymethod type
   * * @param {number} paymethodId paymethod Id
  */


  var handleChangePaymethodType = function handleChangePaymethodType(paymethodId) {
    var _paymethodIds = _toConsumableArray(filterValues.paymethodIds);

    if (!_paymethodIds.includes(paymethodId)) {
      _paymethodIds.push(paymethodId);
    } else {
      _paymethodIds = _paymethodIds.filter(function (_paymethodId) {
        return _paymethodId !== paymethodId;
      });
    }

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      paymethodIds: _paymethodIds
    }));
  };
  /**
   * Reset filter values
  */


  var handleResetFilterValues = function handleResetFilterValues() {
    setFilterValues({
      orderId: null,
      groupTypes: [],
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      businessIds: [],
      driverIds: [],
      cityIds: [],
      statuses: [],
      deliveryTypes: [],
      paymethodIds: []
    });
    setSingleDriverIds([]);
  };

  (0, _react.useEffect)(function () {
    var groupDriverIds = [];

    if (filterValues.groupTypes.length > 0) {
      var _iterator = _createForOfIteratorHelper(filterValues.groupTypes),
          _step;

      try {
        var _loop = function _loop() {
          var groupId = _step.value;
          var selectedDriverGroup = driverGroupList.groups.filter(function (group) {
            return group.id === groupId;
          });

          var _iterator2 = _createForOfIteratorHelper(selectedDriverGroup[0].drivers),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var driver = _step2.value;
              groupDriverIds.push(driver.id);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    var _driverIds = [].concat(groupDriverIds, _toConsumableArray(singleDriverIds));

    var uniqueDriverIds = _driverIds.filter(function (v, i, a) {
      return a.indexOf(v) === i;
    });

    setFilterValues(_objectSpread(_objectSpread({}, filterValues), {}, {
      driverIds: uniqueDriverIds
    }));
  }, [filterValues.groupTypes, singleDriverIds]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    filterValues: filterValues,
    singleDriverIds: singleDriverIds,
    handleChangeOrderId: handleChangeOrderId,
    handleChangeGroup: handleChangeGroup,
    handleChangeDateType: handleChangeDateType,
    handleChangeFromDate: handleChangeFromDate,
    handleChangeEndDate: handleChangeEndDate,
    handleChangeBusinesses: handleChangeBusinesses,
    handleChangeDriver: handleChangeDriver,
    handleChangeCity: handleChangeCity,
    handleChangeOrderStatus: handleChangeOrderStatus,
    handleChangeDeliveryType: handleChangeDeliveryType,
    handleChangePaymethodType: handleChangePaymethodType,
    handleResetFilterValues: handleResetFilterValues
  })));
};

exports.OrdersFilter = OrdersFilter;
OrdersFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Array that contains business types to filter
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
OrdersFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};