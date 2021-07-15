"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

var _OrderContext = require("../../contexts/OrderContext");

var _ValidationsFieldsContext = require("../../contexts/ValidationsFieldsContext");

var _CustomerContext = require("../../contexts/CustomerContext");

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

var AddressForm = function AddressForm(props) {
  var UIComponent = props.UIComponent,
      addressId = props.addressId,
      address = props.address,
      useValidationFileds = props.useValidationFileds,
      onSaveAddress = props.onSaveAddress,
      isSelectedAfterAdd = props.isSelectedAfterAdd,
      onSaveCustomAddress = props.onSaveCustomAddress;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useValidationFields = (0, _ValidationsFieldsContext.useValidationFields)(),
      _useValidationFields2 = _slicedToArray(_useValidationFields, 1),
      validationFields = _useValidationFields2[0];

  var _useState = (0, _react.useState)({
    loading: false,
    error: null,
    address: address || {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      addressState = _useState2[0],
      setAddressState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    error: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      auth = _useSession2$.auth,
      user = _useSession2$.user,
      token = _useSession2$.token;

  var requestsState = {};

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      changeAddress = _useOrder2[1].changeAddress;

  var userId = props.userId || (user === null || user === void 0 ? void 0 : user.id);
  var accessToken = props.accessToken || token;

  var _useCustomer = (0, _CustomerContext.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      setUserCustomer = _useCustomer2[1].setUserCustomer;

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isEdit = _useState6[0],
      _setIsEdit = _useState6[1];
  /**
   * Load an address by id
   * @param {number} userId User id for address user
   * @param {number} addressId Address id for address
   */


  var loadAddress = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(userId, addressId) {
      var source, _yield$ordering$users, content;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
                loading: true
              }));
              source = {};
              requestsState.address = source;
              _context.next = 6;
              return ordering.users(userId).addresses(addressId).get({
                accessToken: accessToken,
                cancelToken: source
              });

            case 6:
              _yield$ordering$users = _context.sent;
              content = _yield$ordering$users.content;
              setAddressState({
                loading: false,
                error: content.error ? content.result : null,
                address: content.error ? {} : content.result
              });
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setAddressState({
                  loading: false,
                  error: [_context.t0.message],
                  address: {}
                });
              }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function loadAddress(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Update address data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e) {
    updateChanges(_defineProperty({}, e.target.name, e.target.value));
  };
  /**
   * Update address data
   * @param {object} changes object with changes
   */


  var updateChanges = function updateChanges(changes) {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), changes)
    }));
  };
  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */


  var showField = function showField(fieldName) {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3;

    return !useValidationFileds || !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && _validationFields$fie.address[fieldName]) || !validationFields.loading && ((_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : _validationFields$fie2.address[fieldName]) && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 ? void 0 : _validationFields$fie3.address[fieldName].enabled);
  };
  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */


  var isRequiredField = function isRequiredField(fieldName) {
    var _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _validationFields$fie11;

    return useValidationFileds && !validationFields.loading && ((_validationFields$fie4 = validationFields.fields) === null || _validationFields$fie4 === void 0 ? void 0 : (_validationFields$fie5 = _validationFields$fie4.address) === null || _validationFields$fie5 === void 0 ? void 0 : _validationFields$fie5[fieldName]) && ((_validationFields$fie6 = validationFields.fields) === null || _validationFields$fie6 === void 0 ? void 0 : (_validationFields$fie7 = _validationFields$fie6.address) === null || _validationFields$fie7 === void 0 ? void 0 : (_validationFields$fie8 = _validationFields$fie7[fieldName]) === null || _validationFields$fie8 === void 0 ? void 0 : _validationFields$fie8.enabled) && ((_validationFields$fie9 = validationFields.fields) === null || _validationFields$fie9 === void 0 ? void 0 : (_validationFields$fie10 = _validationFields$fie9.address) === null || _validationFields$fie10 === void 0 ? void 0 : (_validationFields$fie11 = _validationFields$fie10[fieldName]) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.required);
  };
  /**
   * Function to save current changes
   * Update if address id exist or create if not
   */


  var saveAddress = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(values, userCustomerSetup) {
      var _addressState$address, _yield$ordering$users2, content;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!onSaveCustomAddress) {
                _context2.next = 3;
                break;
              }

              onSaveCustomAddress(values);
              return _context2.abrupt("return");

            case 3:
              if (auth) {
                _context2.next = 7;
                break;
              }

              changeAddress(_objectSpread(_objectSpread({}, values), formState.changes));
              onSaveAddress && onSaveAddress(formState.changes);
              return _context2.abrupt("return");

            case 7:
              if (userCustomerSetup) {
                setUserCustomer(userCustomerSetup, true);
              }

              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context2.prev = 9;
              _context2.next = 12;
              return ordering.users(userId).addresses((_addressState$address = addressState.address) === null || _addressState$address === void 0 ? void 0 : _addressState$address.id).save(_objectSpread(_objectSpread({}, values), formState.changes), {
                accessToken: accessToken
              });

            case 12:
              _yield$ordering$users2 = _context2.sent;
              content = _yield$ordering$users2.content;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: content.error ? content.result : null,
                changes: content.error ? formState.changes : {}
              }));

              if (!content.error) {
                setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
                  address: content.result
                }));
                onSaveAddress && onSaveAddress(content.result);

                if (isSelectedAfterAdd) {
                  changeAddress(content.result.id, {
                    address: isEdit ? null : content.result,
                    isEdit: isEdit
                  });
                }
              }

              _context2.next = 21;
              break;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](9);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: false,
                error: [_context2.t0.message],
                address: {}
              }));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[9, 18]]);
    }));

    return function saveAddress(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setAddressState(_objectSpread(_objectSpread({}, addressState), {}, {
      address: address || {}
    }));
  }, [address]);
  (0, _react.useEffect)(function () {
    if (addressId && !address) {
      loadAddress(userId, addressId);
    }
  }, []);
  (0, _react.useEffect)(function () {
    return function () {
      if (requestsState.address) {
        requestsState.address.cancel();
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    showField: showField,
    updateChanges: updateChanges,
    handleChangeInput: handleChangeInput,
    isRequiredField: isRequiredField,
    saveAddress: saveAddress,
    addressState: addressState,
    setIsEdit: function setIsEdit(val) {
      return _setIsEdit(val);
    }
  })));
};

exports.AddressForm = AddressForm;
AddressForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Prop to set address after add
   */
  isSelectedAfterAdd: _propTypes.default.bool,

  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useValidationFileds: _propTypes.default.bool,

  /**
   * Address object to edit
   */
  address: _propTypes.default.object,

  /**
   * User id of the address to load from Ordering API
   * Omit if you use a SessionProvier context and the address is of the logged user
   */
  userId: _propTypes.default.number,

  /**
   * Address id to edit and load from Ordering API
   */
  addressId: _propTypes.default.number,

  /**
   * Address id to edit and load from Ordering API
   */
  onSaveAddress: _propTypes.default.func,

  /**
   * Custom function
   */
  onSaveCustomAddress: _propTypes.default.func,

  /**
   * Components types before address form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after address form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
AddressForm.defaultProps = {
  useValidationFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};