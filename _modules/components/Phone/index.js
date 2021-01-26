"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Phone = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LanguageContext = require("../../contexts/LanguageContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Phone = function Phone(props) {
  var UIComponent = props.UIComponent;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      phone = _useState2[0],
      setPhone = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openCustomer = _useState4[0],
      setOpenCustomer = _useState4[1];

  var _useState5 = (0, _react.useState)({
    dispatch: false,
    error: false
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      errorMinLength = _useState6[0],
      setErrorMinLength = _useState6[1];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState7 = (0, _react.useState)((props === null || props === void 0 ? void 0 : props.phones) || []),
      _useState8 = _slicedToArray(_useState7, 2),
      phones = _useState8[0],
      setPhones = _useState8[1];

  var testToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGl2NC5vcmRlcmluZy5jb1wvdjQwMFwvZW5cL2RlbW9cL2F1dGgiLCJpYXQiOjE2MTE1ODQxNjAsImV4cCI6MTY0MzEyMDE2MCwibmJmIjoxNjExNTg0MTYwLCJqdGkiOiI5WTNJYXA4dnJ2MFhRM1h0Iiwic3ViIjoxLCJsZXZlbCI6MH0.m4b6tvsmLEHwqd8b_RE3xuU6HzHN-tw18MzZv47tU5k';

  var onChangeNumber = function onChangeNumber(e) {
    var number = e.target.validity.valid ? e.target.value : phone;
    setPhone(number);
  };

  var getPhone = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var _yield$ordering$setAc, result, newPhones;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ordering.setAccessToken(testToken).users().where([{
                attribute: 'cellphone',
                value: {
                  condition: 'ilike',
                  value: encodeURI("%".concat(phone, "%"))
                }
              }]).get();

            case 2:
              _yield$ordering$setAc = _context.sent;
              result = _yield$ordering$setAc.content.result;
              newPhones = result.map(function (user) {
                return {
                  name: user.name,
                  phone: user.phone
                };
              });
              setPhones(newPhones);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getPhone() {
      return _ref.apply(this, arguments);
    };
  }();

  var autocomplete = function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener('input', function (evt) {
      var b;
      var i;
      var val = this.value;
      closeAllLists();

      if (!val) {
        return false;
      }

      currentFocus = -1;
      /* create a DIV element that will contain the items (values): */

      var a = document.createElement('DIV');
      a = document.createElement('DIV');
      a.setAttribute('id', this.id + 'autocomplete-list');
      a.setAttribute('class', 'autocomplete-items');
      /* append the DIV element as a child of the autocomplete container: */

      this.parentNode.appendChild(a);
      /* for each item in the array... */

      for (i = 0; i < arr.length; i++) {
        /* check if the item starts with the same letters as the text field value: */
        if (arr[i].phone.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          /* create a DIV element for each matching element: */
          b = document.createElement('DIV');
          /* make the matching letters bold: */

          b.innerHTML = '<strong>' + arr[i].phone.substr(0, val.length) + '</strong>';
          b.innerHTML += arr[i].phone.substr(val.length); // insert name of the customer

          b.innerHTML += ' (' + arr[i].name + ')';
          /* insert a input field that will hold the current array item's value: */

          b.innerHTML += "<input type='hidden' value='" + arr[i].phone + "'>";
          /* execute a function when someone clicks on the item value (DIV element): */

          b.addEventListener('click', function (e) {
            /* insert the value for the autocomplete text field: */
            inp.value = this.getElementsByTagName('input')[0].value;
            setPhone(this.getElementsByTagName('input')[0].value);
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
        if (evt.target.value.length === 10) {
          setErrorMinLength({
            error: false,
            dispatch: false
          });
          setOpenCustomer(true);
        } else {
          setErrorMinLength({
            error: true,
            dispatch: true
          });
        }

        closeAllLists();
      });
      a.appendChild(b);
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
    /* execute a function when someone clicks in the document: */


    document.addEventListener('click', function (e) {
      closeAllLists(e.target);
    });
  };

  (0, _react.useEffect)(function () {
    autocomplete(document.getElementById('phone-input'), phones);
  }, [phones]);
  (0, _react.useEffect)(function () {
    var _props$phones;

    if (!(props === null || props === void 0 ? void 0 : (_props$phones = props.phones) === null || _props$phones === void 0 ? void 0 : _props$phones.length)) {
      getPhone();
    }
  }, [phone]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    onChangeNumber: onChangeNumber,
    phone: phone,
    setErrorMinLength: setErrorMinLength,
    errorMinLength: errorMinLength,
    openCustomer: openCustomer,
    setOpenCustomer: setOpenCustomer
  })));
};

exports.Phone = Phone;
Phone.propTypes = {
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
Phone.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};