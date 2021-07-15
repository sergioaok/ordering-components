"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExamineClick = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ExamineClick = function ExamineClick(_ref) {
  var onFiles = _ref.onFiles,
      childRef = _ref.childRef,
      children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      accept = _ref.accept,
      disabled = _ref.disabled;
  var inputRef = (0, _react.useRef)(null);

  var handleClick = function handleClick(e) {
    if (!childRef) {
      inputRef.current.click();
    }
  };

  var handleChange = function handleChange(e) {
    e.preventDefault();
    e.stopPropagation();
    onFiles(e.target.files);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    draggable: true,
    onClick: handleClick,
    style: style,
    className: className
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    onChange: handleChange,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    ref: function ref(e) {
      inputRef.current = e;
      childRef && childRef(e);
    },
    accept: accept,
    disabled: disabled
  }), children);
};

exports.ExamineClick = ExamineClick;