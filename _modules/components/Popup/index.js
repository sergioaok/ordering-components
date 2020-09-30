"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage login behavior without UI component
 */
var Popup = function Popup(props) {
  var UIComponent = props.UIComponent,
      open = props.open,
      backdropClassName = props.backdropClassName,
      closeOnBackdrop = props.closeOnBackdrop,
      closeWithKeyboard = props.closeWithKeyboard,
      onClose = props.onClose;
  var modalRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(document.body.style.overflow),
      _useState2 = _slicedToArray(_useState, 1),
      bodyOverflowBackup = _useState2[0];
  /**
   * Use onClose function when esc key was pressed
   * @param {Event} e Event when keydown
   */


  var handleKeyDown = function handleKeyDown(e) {
    closeWithKeyboard && e.keyCode === 27 && onClose && onClose();
  };
  /**
   * Use onClose function when backdrop was clicked
   * @param {Event} e Event when click in backdrop
   */


  var handleClick = function handleClick(e) {
    closeOnBackdrop && e.target.classList.contains('popup-component') && onClose && onClose();
  };
  /**
   * Check backdrop on close or unmount
   */


  var checkRemoveBackdrop = function checkRemoveBackdrop() {
    var modals = document.querySelectorAll('.popup-component');
    /**
     * Focus next popup when close a popup
     */

    if (!open && modals.length > 1) {
      modals.length > 1 && modals[modals.length - 1].focus();
    }
    /**
     * Remove backdrop when close popup and modals quantity is 0
     * Remove backdrop when unmount and modals quantity is 1
     */


    var isFirst = typeof modals[0] === 'undefined' || modals[0] === (modalRef === null || modalRef === void 0 ? void 0 : modalRef.current);

    if (isFirst) {
      var backdrop = document.querySelector('.popup-component-backdrop');

      if (backdrop) {
        backdrop.remove();
      }

      document.body.style.overflow = bodyOverflowBackup;
    }
  };

  (0, _react.useEffect)(function () {
    if (!open) {
      checkRemoveBackdrop();
      return;
    }

    var backdrop = document.querySelector('.popup-backdrop');

    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'popup-component-backdrop popup-backdrop' + (backdropClassName ? " ".concat(backdropClassName) : '');
      document.body.append(backdrop);
      document.body.style.overflow = 'hidden';
    }

    modalRef.current.focus();
  }, [open]);
  (0, _react.useEffect)(function () {
    /**
     * Remove backdrop and enable scroll
     */
    return checkRemoveBackdrop;
  }, [open]);
  var popupStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1001,
    outline: 'none'
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, open && /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-component",
    style: popupStyles,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
    ref: modalRef,
    autoFocus: true
  }, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props)));
};

exports.Popup = Popup;
Popup.propTypes = {
  UIComponent: _propTypes.default.elementType,

  /**
   * Show or hide popup
   */
  open: _propTypes.default.bool,

  /**
   * Close popup when backdrop was clicked
   */
  closeOnBackdrop: _propTypes.default.bool,

  /**
   * Close popup when ESC key was pressed
   */
  closeWithKeyboard: _propTypes.default.bool,

  /**
   * Title of popup
   */
  title: _propTypes.default.string,

  /**
   * Content of popup
   */
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.string), _propTypes.default.elementType, _propTypes.default.element]),

  /**
   * Function when accept popup
   */
  onAccept: _propTypes.default.func,

  /**
   * Function when cancel popup
   */
  onCancel: _propTypes.default.func,

  /**
   * Function when close popup
   */
  onClose: _propTypes.default.func
};
Popup.defaultProps = {
  open: false,
  closeOnBackdrop: true,
  closeWithKeyboard: true
};