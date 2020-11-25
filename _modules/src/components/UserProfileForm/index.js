"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**
 * Component to manage user profile behavior without UI component
 */
var UserProfileForm = function UserProfileForm(props) {
  var UIComponent = props.UIComponent,
      useSessionUser = props.useSessionUser,
      refreshSessionUser = props.refreshSessionUser,
      useDefualtSessionManager = props.useDefualtSessionManager,
      userId = props.userId,
      user = props.user,
      useValidationFileds = props.useValidationFileds,
      validationFieldsType = props.validationFieldsType,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      handleSuccessUpdate = props.handleSuccessUpdate;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      session = _useSession2[0],
      changeUser = _useSession2[1].changeUser;

  var _useState = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      userState = _useState2[0],
      setUserState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: false
    }
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      formState = _useState4[0],
      setFormState = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: useValidationFileds
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      validationFields = _useState6[0],
      setValidationFields = _useState6[1];

  var requestsState = {};
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  (0, _react.useEffect)(function () {
    if ((userId || useSessionUser && refreshSessionUser) && !session.loading) {
      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        loading: true
      }));
      var source = {};
      requestsState.user = source;
      ordering.setAccessToken(accessToken).users(useSessionUser && refreshSessionUser ? session.user.id : userId).get({
        cancelToken: source
      }).then(function (response) {
        setUserState({
          loading: false,
          result: response.content
        });

        if (response.content.result) {
          changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
        }
      }).catch(function (err) {
        if (err.constructor.name !== 'Cancel') {
          setUserState({
            loading: false,
            result: {
              error: true,
              result: err.message
            }
          });
        }
      });
    } else {
      setUserState({
        loading: false,
        result: {
          error: false,
          result: useSessionUser && !refreshSessionUser ? session.user : user
        }
      });
    }

    if (useValidationFileds) {
      var _source = {};
      requestsState.validation = _source;
      ordering.validationFields().toType(validationFieldsType).get({
        cancelToken: _source
      }).then(function (response) {
        var fields = {};
        response.content.result.forEach(function (field) {
          fields[field.code === 'mobile_phone' ? 'cellphone' : field.code] = field;
        });
        setValidationFields({
          loading: false,
          fields: fields
        });
      }).catch(function (err) {
        if (err.constructor.name !== 'Cancel') {
          setValidationFields({
            loading: false
          });
        }
      });
    }

    return function () {
      if (requestsState.user) {
        requestsState.user.cancel();
      }

      if (requestsState.validation) {
        requestsState.validation.cancel();
      }
    };
  }, [session.loading]);
  /**
   * Clean formState
   */

  var cleanFormState = function cleanFormState() {
    return setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: {}
    }));
  };
  /**
   * Default fuction for user profile workflow
   */


  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(changes) {
      var response;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!handleButtonUpdateClick) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", handleButtonUpdateClick(userState.result.result, formState.changes));

            case 2:
              _context.prev = 2;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));

              if (changes) {
                formState.changes = _objectSpread(_objectSpread({}, formState.changes), changes);
              }

              _context.next = 7;
              return ordering.users(userState.result.result.id).save(formState.changes, {
                accessToken: accessToken
              });

            case 7:
              response = _context.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: response.content.error ? formState.changes : {},
                result: response.content,
                loading: false
              }));

              if (!response.content.error) {
                setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                  result: _objectSpread(_objectSpread({}, userState.result), response.content)
                }));
                changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));

                if (handleSuccessUpdate) {
                  handleSuccessUpdate(response.content.result);
                }
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function handleUpdateClick(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e, isMany) {
    var currentChanges = {};

    if (isMany) {
      Object.values(e).map(function (obj) {
        currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
   * Update user photo data
   * @param {File} file Image to change user photo
   */


  var handlechangeImage = function handlechangeImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          photo: reader.result
        })
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */


  var showField = function showField(fieldName) {
    return !useValidationFileds || !validationFields.loading && !validationFields.fields[fieldName] || !validationFields.loading && validationFields.fields[fieldName] && validationFields.fields[fieldName].enabled;
  };
  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */


  var isRequiredField = function isRequiredField(fieldName) {
    return useValidationFileds && !validationFields.loading && validationFields.fields[fieldName] && validationFields.fields[fieldName].enabled && validationFields.fields[fieldName].required;
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    userState: userState,
    cleanFormState: cleanFormState,
    validationFields: validationFields,
    showField: showField,
    isRequiredField: isRequiredField,
    handleChangeInput: handleChangeInput,
    handlechangeImage: handlechangeImage,
    handleButtonUpdateClick: handleUpdateClick
  })));
};

exports.UserProfileForm = UserProfileForm;
UserProfileForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Use session user to profile
   */
  useSessionUser: function useSessionUser(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'boolean') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `boolean`."));
    }

    if (props.user === undefined && props.userId === undefined && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `user` and `userId` is not present."));
    }

    if (props[propName] && (props.user !== undefined || props.userId !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `userId` and `user`."));
    }
  },

  /**
   * Refresh session user data from Ordering API
   */
  refreshSessionUser: _propTypes.default.bool,

  /**
   * User ID
   * If you provide the user id the component get user form Ordering API
   */
  userId: function userId(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'number') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `number`."));
    }

    if (props.user === undefined && !props.useSessionUser && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `user` and `useSessionUser` is not present."));
    }

    if (props[propName] && (props.useSessionUser || props.user !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `useSessionUser` and `user`."));
    }
  },

  /**
   * User object
   * If you provide user object the component not get user form Ordering API
   */
  user: function user(props, propName) {
    if (props[propName] !== undefined && _typeof(props[propName]) !== 'object') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `object`."));
    }

    if (props.userId === undefined && !props.useSessionUser && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `useSessionUser` and `userId` is not present."));
    }

    if (props[propName] && (props.useSessionUser || props.userId !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `useSessionUser` and `userId`."));
    }
  },

  /**
   * Function to change default user profile behavior
   * @param {Object} user Current user data
   * @param {Object} changes Current form changes
   */
  handleButtonUpdateClick: _propTypes.default.func,

  /**
   * Function to get user update success event
   * @param {Object} user User with session data
   */
  handleSuccessUpdate: _propTypes.default.func,

  /**
   * Enable to get validation fields to show/hide fields from Ordering API
   */
  useValidationFileds: _propTypes.default.bool,

  /**
   * Type of validation field to apply and get from API
   */
  validationFieldsType: _propTypes.default.string,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,

  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: function accessToken(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserProfile`, expected `object`."));
    }

    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error("Invalid prop `".concat(propName, "` is required when `useDefualtSessionManager` is false."));
    }
  },

  /**
   * Components types before user profile form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after user profile form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before user profile form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after user profile form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: _propTypes.default.string,

  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: _propTypes.default.element
};
UserProfileForm.defaultProps = {
  useValidationFileds: false,
  validationFieldsType: 'checkout',
  useDefualtSessionManager: true,
  refreshSessionUser: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};