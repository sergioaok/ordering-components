"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMapsMap = exports.GoogleMaps = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WrapperGoogleMaps = require("../WrapperGoogleMaps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getMarkerColor = function getMarkerColor(n) {
  switch (n) {
    case 1:
      return 'red';

    case 2:
      return 'green';

    default:
      return 'blue';
  }
};

var GoogleMaps = function GoogleMaps(props) {
  var googleReady = props.googleReady,
      location = props.location,
      locations = props.locations,
      mapControls = props.mapControls,
      setErrors = props.setErrors,
      handleChangeAddressMap = props.handleChangeAddressMap,
      maxLimitLocation = props.maxLimitLocation;
  var divRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      googleMap = _useState2[0],
      setGoogleMap = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      markers = _useState4[0],
      setMarkers = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      boundMap = _useState6[0],
      setBoundMap = _useState6[1];

  var center = {
    lat: location.lat,
    lng: location.lng
  };
  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */

  var generateMarkers = function generateMarkers(map) {
    var bounds = new window.google.maps.LatLngBounds();

    var _loop = function _loop(i) {
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i].lat, locations[i].lng),
        map: map,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/".concat(getMarkerColor(i), "-dot.png")
        }
      });
      bounds.extend(marker.position);
      setMarkers(function (markers) {
        return [].concat(_toConsumableArray(markers), [marker]);
      });
    };

    for (var i = 0; i < locations.length; i++) {
      _loop(i);
    }

    map.fitBounds(bounds);
    setBoundMap(bounds);
  };
  /**
   * function to get all address information with a location
   * @param {google location} pos
   */


  var geocodePosition = function geocodePosition(pos, map, marker) {
    var geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({
      latLng: pos
    }, function (results) {
      var zipcode = null;

      if (results && results.length > 0) {
        var _iterator = _createForOfIteratorHelper(results[0].address_components),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var component = _step.value;
            var addressType = component.types[0];

            if (addressType === 'postal_code') {
              zipcode = component.short_name;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var address = {
          address: results[0].formatted_address,
          location: {
            lat: pos.lat(),
            lng: pos.lng()
          },
          zipcode: zipcode
        };
        handleChangeAddressMap(address);
        center.lat = address.location.lat;
        center.lng = address.location.lng;
      } else {
        marker && marker.setPosition(center);
        setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS');
      }

      map && map.panTo(new window.google.maps.LatLng(center.lat, center.lng));
    });
  };
  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */


  var validateResult = function validateResult(map, marker, curPos) {
    var loc1 = new window.google.maps.LatLng(curPos.lat(), curPos.lng());
    var loc2 = new window.google.maps.LatLng(location.lat, location.lng);
    var distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2);

    if (!maxLimitLocation) {
      geocodePosition(curPos, map, marker);
      return;
    }

    if (distance <= maxLimitLocation) {
      geocodePosition(curPos);
    } else {
      marker.setPosition(center);
      map.panTo(new window.google.maps.LatLng(center.lat, center.lng));
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION');
    }
  };

  (0, _react.useEffect)(function () {
    if (googleReady) {
      var map = new window.google.maps.Map(divRef.current, {
        zoom: location.zoom || mapControls.defaultZoom,
        center: center,
        zoomControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.zoomControl,
        streetViewControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.streetViewControl,
        fullscreenControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.fullscreenControl,
        mapTypeControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControl,
        mapTypeId: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeId,
        mapTypeControlOptions: _objectSpread({
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT
        }, mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControlOptions)
      });
      var marker = null;
      setGoogleMap(map);

      if (locations) {
        generateMarkers(map);
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center.lat, center.lng),
          map: map,
          draggable: true
        });
        window.google.maps.event.addListener(marker, 'dragend', function () {
          return validateResult(map, marker, marker.getPosition());
        });
        window.google.maps.event.addListener(map, 'drag', function () {
          return marker.setPosition(map.getCenter());
        });
        window.google.maps.event.addListener(map, 'dragend', function () {
          marker.setPosition(map.getCenter());
          validateResult(map, marker, map.getCenter());
        });
      }

      return function () {
        window.google.maps.event.clearListeners(marker, 'dragend');
        window.google.maps.event.clearListeners(map, 'drag');
        window.google.maps.event.clearListeners(map, 'dragend');
      };
    }
  }, [googleReady]);
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      if (googleReady) {
        var driverLocation = locations[0];
        var newLocation = new window.google.maps.LatLng(driverLocation.lat, driverLocation.lng);
        markers[0].setPosition(newLocation);
        markers.forEach(function (marker) {
          return boundMap.extend(marker.position);
        });
        googleMap.fitBounds(boundMap);
      }
    }, 1000);
    return function () {
      return clearInterval(interval);
    };
  }, [locations]);
  return googleReady && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '70%',
      height: '50%',
      position: 'absolute'
    },
    id: "map",
    ref: divRef
  });
};

exports.GoogleMaps = GoogleMaps;
GoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: _propTypes.default.number,

  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: _propTypes.default.func,

  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
GoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
var GoogleMapsMap = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(GoogleMaps);
exports.GoogleMapsMap = GoogleMapsMap;
GoogleMapsMap.propTypes = {
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