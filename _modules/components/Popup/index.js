"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage login behavior without UI component
 */
var Popup = function Popup(props) {
  var UIComponent = props.UIComponent,
      open = props.open,
      backdropClassName = props.backdropClassName,
      closeOnBackdrop = props.closeOnBackdrop,
      onClose = props.onClose;
  var modalRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      root = _useState2[0],
      setRoot = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      defaultOverflow = _useState4[0],
      setDefaultOverflow = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      defaultPaddingRight = _useState6[0],
      setDefaultPaddingRight = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isFirst = _useState8[0],
      setIsFirst = _useState8[1];
  /**
   * Use onClose function when esc key was pressed
   * @param {Event} e Event when keydown
   */


  var handleKeyDown = function handleKeyDown(e) {
    e.keyCode === 27 && e.target.classList.contains('popup-component') && onClose && onClose();
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


    if (isFirst) {
      var modalRoot = window.document.getElementById('app-modals');

      if (modalRoot) {
        modalRoot.remove();
      }

      window.document.body.style.overflow = defaultOverflow;
      window.document.body.style.paddingRight = defaultPaddingRight;
    }
  };

  (0, _react.useEffect)(function () {
    if (open) {
      var modalRoot = window.document.getElementById('app-modals');

      if (!modalRoot) {
        modalRoot = window.document.createElement('div');
        modalRoot.id = 'app-modals';
        modalRoot.className = 'popup-component-backdrop popup-backdrop' + (backdropClassName ? " ".concat(backdropClassName) : '');
        document.body.append(modalRoot);
        setRoot(modalRoot);
        setIsFirst(true);
        setDefaultOverflow(window.document.body.style.overflow);
        setDefaultPaddingRight(window.document.body.style.paddingRight);
      } else {
        setRoot(modalRoot);
      }

      if (modalRef.current) {
        modalRef.current.focus();
      }
    }
    /**
     * Remove backdrop
     */


    return checkRemoveBackdrop;
  }, [open, isFirst, defaultOverflow, defaultPaddingRight]);
  var popupStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 2001,
    outline: 'none'
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, open && root && /*#__PURE__*/_reactDom.default.createPortal( /*#__PURE__*/_react.default.createElement("div", {
    className: "popup-component",
    style: popupStyles,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
    autoFocus: true,
    ref: modalRef
  }, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, props)), root));
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