"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useEvent = exports.EventProvider = exports.EventContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Emitter = require("../../components/Emitter");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Create EventContext
 * This context will manage the app events and provide an interface
 */
var EventContext = /*#__PURE__*/(0, _react.createContext)();
/**
 * Custom provider to events manager
 * This provider has a reducer for manage event state
 * @param {props} props
 */

exports.EventContext = EventContext;

var EventProvider = function EventProvider(_ref) {
  var children = _ref.children;
  var events = new _Emitter.Emitter();
  return /*#__PURE__*/_react.default.createElement(EventContext.Provider, {
    value: [events]
  }, children);
};
/**
 * Hook to get and update events state
 */


exports.EventProvider = EventProvider;

var useEvent = function useEvent() {
  var configManager = (0, _react.useContext)(EventContext);
  return configManager || [new _Emitter.Emitter()];
};

exports.useEvent = useEvent;