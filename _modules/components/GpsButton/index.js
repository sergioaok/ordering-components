"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleGpsButton = exports.GpsButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WrapperGoogleMaps = require("../WrapperGoogleMaps");

var _LanguageContext = require("../../contexts/LanguageContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to get information from GPS
 * @param {object} props Props of GpsButton component
 */
var GpsButton = function GpsButton(props) {
  var UIComponent = props.UIComponent,
      googleReady = props.googleReady,
      onData = props.onData,
      onError = props.onError,
      onAddress = props.onAddress;

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var isGoogleButton = typeof googleReady !== 'undefined';
  /**
   * Function to get location from GPS
   */

  var handleGPS = function handleGPS() {
    if (isGoogleButton && !googleReady || isLoading) {
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(function (geo) {
      var location = {
        lat: geo.coords.latitude,
        lng: geo.coords.longitude
      };

      if (isGoogleButton && onAddress) {
        var geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({
          location: location
        }, function (results, status) {
          var _results$;

          setIsLoading(false);
          var postalCode = null;

          if (results !== null && results !== void 0 && (_results$ = results[0]) !== null && _results$ !== void 0 && _results$.address_components) {
            var _iterator = _createForOfIteratorHelper(results[0].address_components),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var component = _step.value;
                var addressType = component.types[0];

                if (addressType === 'postal_code') {
                  postalCode = component.short_name;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (status === 'OK') {
              onAddress({
                address: results[0].formatted_address,
                location: location,
                utc_offset: new Date().getTimezoneOffset(),
                zipcode: postalCode,
                map_data: {
                  library: 'google',
                  place_id: results[0].place_id
                }
              });
            } else {
              onError && onError(t('ERROR_GPS_BUTTON', 'Error to get result with gps button'));
            }
          } else {
            onError && onError(t('ERROR_NOT_FOUND_ADDRESS', 'The Address was not found'));
          }
        });
      } else {
        setIsLoading(false);
        onData && onData({
          location: location,
          utc_offset: new Date().getTimezoneOffset()
        });
      }
    }, function (err) {
      setIsLoading(false);
      onError && onError(t('ERROR_GPS_BUTTON', err.message));
    }, {
      timeout: 5000,
      enableHighAccuracy: true
    });
  };

  return navigator.geolocation && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    handleGPS: handleGPS,
    isGoogleButton: isGoogleButton,
    googleReady: googleReady,
    isLoading: isLoading
  }));
};

exports.GpsButton = GpsButton;
GpsButton.propTypes = {
  /**
   * Function to get data from GPS
   * @param {object} data New address
   */
  onData: _propTypes.default.func,

  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: _propTypes.default.func
};
var GoogleGpsButton = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(GpsButton);
exports.GoogleGpsButton = GoogleGpsButton;
GoogleGpsButton.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired,

  /**
   * Function to get address from GPS
   * @param {object} address New address
   */
  onAddress: _propTypes.default.func,

  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: _propTypes.default.func
};