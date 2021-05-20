"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReCaptcha = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactGoogleRecaptcha = _interopRequireDefault(require("react-google-recaptcha"));

var _ConfigContext = require("../../../src/contexts/ConfigContext");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ReCaptcha = function ReCaptcha(props) {
  var handleReCaptcha = props.handleReCaptcha;

  var _useConfig = (0, _ConfigContext.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;
  /**
   * Change reCaptcha
   */


  var onChange = function onChange(value) {
    handleReCaptcha(value);
  };

  var getReCaptChaSiteKey = function getReCaptChaSiteKey() {
    var _configs$security_rec;

    if (configs && Object.keys(configs).length > 0 && configs !== null && configs !== void 0 && (_configs$security_rec = configs.security_recaptcha_site_key) !== null && _configs$security_rec !== void 0 && _configs$security_rec.value) {
      return configs === null || configs === void 0 ? void 0 : configs.security_recaptcha_site_key.value;
    }

    throw new Error('ReCaptcha component: the config doesn\'t have recaptcha site key');
  };

  return /*#__PURE__*/_react.default.createElement(_reactGoogleRecaptcha.default, {
    sitekey: getReCaptChaSiteKey(),
    onChange: onChange
  });
};

exports.ReCaptcha = ReCaptcha;
ReCaptcha.propTypes = {
  /**
   * Set reCaptcha value token when changes
   */
  handleReCaptcha: _propTypes.default.func
};