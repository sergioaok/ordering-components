"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LanguageContext = require("../../contexts/LanguageContext");

var _ApiContext = require("../../contexts/ApiContext");

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

var LanguageSelector = function LanguageSelector(props) {
  var _languageState$langua3;

  var currentLanguage = props.currentLanguage,
      languages = props.languages,
      UIComponent = props.UIComponent;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    loading: !languages,
    languages: languages,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      languagesState = _useState2[0],
      setLanguageState = _useState2[1];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 3),
      languageState = _useLanguage2[0],
      setLanguage = _useLanguage2[2];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      languageSelected = _useState4[0],
      setLanguageSelected = _useState4[1];

  var requestsState = {};
  /**
   * This method is used for change the current language
   */

  var onChangeLanguage = function onChangeLanguage(code) {
    var language = languagesState.languages.find(function (language) {
      return language.code === code;
    });

    if (props.handlerCustomChangeLanguage) {
      props.handlerCustomChangeLanguage(language);
      setLanguageSelected(language);
      return;
    }

    props.onChangeLanguage && props.onChangeLanguage(language);
    setLanguage(language);
  };
  /**
   * this method is used for load languages from API
   */


  var loadLanguages = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var source, _yield$ordering$langu, _yield$ordering$langu2, error, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLanguageState(_objectSpread(_objectSpread({}, languagesState), {}, {
                loading: true
              }));
              source = {};
              requestsState.languages = source;
              _context.next = 6;
              return ordering.languages().where([{
                attribute: 'enabled',
                value: true
              }]).get({
                cancelToken: source
              });

            case 6:
              _yield$ordering$langu = _context.sent;
              _yield$ordering$langu2 = _yield$ordering$langu.content;
              error = _yield$ordering$langu2.error;
              result = _yield$ordering$langu2.result;
              setLanguageState(_objectSpread(_objectSpread({}, languagesState), {}, {
                loading: false,
                languages: error ? [] : result
              }));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);

              if (_context.t0.constructor.name !== 'Cancel') {
                setLanguageState(_objectSpread(_objectSpread({}, languagesState), {}, {
                  loading: false,
                  error: [_context.t0]
                }));
              }

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function loadLanguages() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if ((languages === null || languages === void 0 ? void 0 : languages.length) > 0) {
      setLanguageState(_objectSpread(_objectSpread({}, languagesState), {}, {
        loading: false,
        languages: languages
      }));
    } else {
      loadLanguages();
    }

    return function () {
      if (requestsState.languages) {
        requestsState.languages.cancel();
      }
    };
  }, []);
  /**
   * Selecting default if exist and there is not one in local storage
   */

  (0, _react.useEffect)(function () {
    var _languageState$langua;

    if (currentLanguage) {
      var language = languages.find(function (language) {
        return language.code === currentLanguage;
      });
      setLanguage(language);
      setLanguageSelected(language);
    } else if (!(languageState !== null && languageState !== void 0 && (_languageState$langua = languageState.language) !== null && _languageState$langua !== void 0 && _languageState$langua.code) || !(languageSelected !== null && languageSelected !== void 0 && languageSelected.code)) {
      var _languageState$langua2, _languagesState$langu;

      var _language = languageState !== null && languageState !== void 0 && (_languageState$langua2 = languageState.language) !== null && _languageState$langua2 !== void 0 && _languageState$langua2.code ? languageState === null || languageState === void 0 ? void 0 : languageState.language : languagesState === null || languagesState === void 0 ? void 0 : (_languagesState$langu = languagesState.languages) === null || _languagesState$langu === void 0 ? void 0 : _languagesState$langu.find(function (language) {
        return language.default;
      });

      if (_language) {
        setLanguage(_language);
        setLanguageSelected(_language);
      }
    }
  }, [languages, languagesState]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    currentLanguage: props.handlerCustomChangeLanguage ? languageSelected === null || languageSelected === void 0 ? void 0 : languageSelected.code : languageState === null || languageState === void 0 ? void 0 : (_languageState$langua3 = languageState.language) === null || _languageState$langua3 === void 0 ? void 0 : _languageState$langua3.code,
    languagesState: languagesState,
    handleChangeLanguage: onChangeLanguage
  })));
};

exports.LanguageSelector = LanguageSelector;
LanguageSelector.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * currentLanguage, this must be containt current language to show in the app
   */
  currentLanguage: _propTypes.default.string,

  /**
   * languages, this array must be containt a list of available languages
   */
  languages: _propTypes.default.arrayOf(_propTypes.default.object),

  /**
   * Return language selected
   */
  onChangeLanguage: _propTypes.default.func,

  /**
   * handlerCustomChangeLanguage, handler change behavior
   */
  handlerCustomChangeLanguage: _propTypes.default.func,

  /**
   * Components types before language selector
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after language selector
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after language selector
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
LanguageSelector.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};