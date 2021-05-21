"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneAutocomplete = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LanguageContext = require("../../contexts/LanguageContext");

var _ApiContext = require("../../contexts/ApiContext");

var _SessionContext = require("../../contexts/SessionContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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

var PhoneAutocomplete = function PhoneAutocomplete(props) {
  var UIComponent = props.UIComponent;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      token = _useSession2[0].token;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      phone = _useState2[0],
      setPhone = _useState2[1];

  var _useState3 = (0, _react.useState)({
    customer: false,
    signup: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      openModal = _useState4[0],
      setOpenModal = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      customerState = _useState6[0],
      setCustomerState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    users: [],
    loading: true,
    error: null
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      customersPhones = _useState8[0],
      setCustomersPhones = _useState8[1];
  /**
   * filter phones depending of phone input value and get user data
   */


  var filterPhones = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(arr, value) {
      var user;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              user = arr.filter(function (user) {
                return (user === null || user === void 0 ? void 0 : user.cellphone) === value;
              });

              if (user[0]) {
                setCustomerState({
                  loading: false,
                  result: user[0]
                });
                setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
                  customer: true
                }));
              } else {
                setCustomerState({
                  loading: false,
                  result: {
                    error: false
                  }
                });
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function filterPhones(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * @param {event} e
   * Validate input that only numbers can be inserted
   */


  var onChangeNumber = function onChangeNumber(e) {
    var _e$target, _e$target$validity, _e$target2;

    setPhone((_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$validity = _e$target.validity) !== null && _e$target$validity !== void 0 && _e$target$validity.valid ? (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value : phone);
  };
  /**
   * Get users from API
   */


  var getUsers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _yield$ordering$setAc, result;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                loading: true
              }));
              _context2.prev = 1;
              _context2.next = 4;
              return ordering.setAccessToken(token).users().get();

            case 4:
              _yield$ordering$setAc = _context2.sent;
              result = _yield$ordering$setAc.content.result;
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                users: result,
                loading: false
              }));
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
                loading: false,
                error: _context2.t0.message
              }));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9]]);
    }));

    return function getUsers() {
      return _ref2.apply(this, arguments);
    };
  }();

  var dropDown = function dropDown(currentFocus, inp, arr, val, evt, closeAllLists, obj) {
    currentFocus = -1;
    var b;
    var i;
    /* create a DIV element that will contain the items (values): */

    var a = document.createElement('DIV');
    a = document.createElement('DIV');
    a.setAttribute('id', obj.id + 'autocomplete-list');
    a.setAttribute('class', 'autocomplete-items');
    /* append the DIV element as a child of the autocomplete container: */

    obj.parentNode.appendChild(a);
    /* for each item in the array... */

    for (i = 0; i < (arr === null || arr === void 0 ? void 0 : arr.length); i++) {
      var _arr$i, _arr$i$cellphone, _arr$i$cellphone$subs;

      /* check if the item starts with the same letters as the text field value: */
      if (((_arr$i = arr[i]) === null || _arr$i === void 0 ? void 0 : (_arr$i$cellphone = _arr$i.cellphone) === null || _arr$i$cellphone === void 0 ? void 0 : (_arr$i$cellphone$subs = _arr$i$cellphone.substr(0, val === null || val === void 0 ? void 0 : val.length)) === null || _arr$i$cellphone$subs === void 0 ? void 0 : _arr$i$cellphone$subs.toUpperCase()) === (val === null || val === void 0 ? void 0 : val.toUpperCase())) {
        var _arr$i2, _arr$i3;

        var cellphone = (_arr$i2 = arr[i]) === null || _arr$i2 === void 0 ? void 0 : _arr$i2.cellphone;
        /* create a DIV element for each matching element: */

        b = document.createElement('DIV');
        /* make the matching letters bold: */

        b.innerHTML = '<strong>' + (cellphone === null || cellphone === void 0 ? void 0 : cellphone.substr(0, val === null || val === void 0 ? void 0 : val.length)) + '</strong>';
        b.innerHTML += cellphone === null || cellphone === void 0 ? void 0 : cellphone.substr(val === null || val === void 0 ? void 0 : val.length); // insert name of the customer

        b.innerHTML += ' (' + ((_arr$i3 = arr[i]) === null || _arr$i3 === void 0 ? void 0 : _arr$i3.name) + ')';
        /* insert a input field that will hold the current array item's value: */

        b.innerHTML += "<input type='hidden' value='" + cellphone + "'>";
        /* execute a function when someone clicks on the item value (DIV element): */

        b.addEventListener('click', function (e) {
          /* insert the value for the autocomplete text field: */
          inp.value = this.getElementsByTagName('input')[0].value;
          setPhone(this.getElementsByTagName('input')[0].value);
          filterPhones(arr, this.getElementsByTagName('input')[0].value);
          /* close the list of autocompleted values,
                (or any other open lists of autocompleted values: */

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
    /* create a DIV element for add new users */


    b = document.createElement('DIV');
    b.innerHTML = '<strong>' + t('CREATE_CUSTOMER', 'Create new customer') + '</strong>';
    b.innerHTML += "<input type='hidden' value='" + t('CREATE_CUSTOMER', 'Create new customer') + "'>";
    b.addEventListener('click', function (e) {
      if (evt.target.value.length === 10 || phone.length === 10) {
        setOpenModal(_objectSpread(_objectSpread({}, openModal), {}, {
          signup: true
        }));
      } else {
        setCustomersPhones(_objectSpread(_objectSpread({}, customersPhones), {}, {
          error: t('ERROR_MIN_CHARACTERS_PHONE', 'The Phone / Mobile must be 10 characters')
        }));
      }

      closeAllLists();
    });
    a.appendChild(b);
  };
  /**
   * @param {input} inp
   * @param {array of phones} arr
   * script for autocomplete functionality
   */


  var autocomplete = function autocomplete(inp, arr, btn) {
    var currentFocus;

    function addActive(x) {
      /* a function to classify an item as "active": */
      if (!x) return false;
      /* start by removing the "active" class on all items: */

      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = x.length - 1;
      /* add class "autocomplete-active": */

      x[currentFocus].classList.add('autocomplete-active');
    }

    function removeActive(x) {
      /* a function to remove the "active" class from all autocomplete items: */
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove('autocomplete-active');
      }
    }

    function closeAllLists(elmnt) {
      /* close all autocomplete lists in the document,
      except the one passed as an argument: */
      var x = document.getElementsByClassName('autocomplete-items');

      for (var i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }

    inp.addEventListener('input', function (evt) {
      var val = this.value;
      closeAllLists();

      if (!val) {
        return false;
      }

      dropDown(currentFocus, inp, arr, val, evt, closeAllLists, this);
    });
    btn && btn.addEventListener('click', function (evt) {
      var val = inp.value;
      closeAllLists();

      if (!val) {
        return false;
      }

      dropDown(currentFocus, inp, arr, val, evt, closeAllLists, inp);
    });
    /* execute a function presses a key on the keyboard: */

    inp.addEventListener('keydown', function (e) {
      var x = document.getElementById(this.id + 'autocomplete-list');
      if (x) x = x.getElementsByTagName('div');

      if (e.keyCode === 40) {
        /* If the arrow DOWN key is pressed,
          increase the currentFocus variable: */
        currentFocus++;
        /* and and make the current item more visible: */

        addActive(x);
      } else if (e.keyCode === 38) {
        // up

        /* If the arrow UP key is pressed,
          decrease the currentFocus variable: */
        currentFocus--;
        /* and and make the current item more visible: */

        addActive(x);
      } else if (e.keyCode === 13) {
        /* If the ENTER key is pressed, prevent the form from being submitted, */
        e.preventDefault();

        if (currentFocus > -1) {
          /* and simulate a click on the "active" item: */
          if (x) x[currentFocus].click();
        }
      }
    });
    /* execute a function when someone clicks in the document: */

    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('phone-button')) {
        return;
      }

      closeAllLists(e.target);
    });
  };

  (0, _react.useEffect)(function () {
    autocomplete(document.getElementById('phone-input'), customersPhones.users, document.getElementById('phone-button'));
  });
  (0, _react.useEffect)(function () {
    getUsers();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    phone: phone,
    customerState: customerState,
    customersPhones: customersPhones,
    setCustomersPhones: setCustomersPhones,
    onChangeNumber: onChangeNumber,
    openModal: openModal,
    setOpenModal: setOpenModal,
    setCustomerState: setCustomerState
  })));
};

exports.PhoneAutocomplete = PhoneAutocomplete;
PhoneAutocomplete.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PhoneAutocomplete.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};