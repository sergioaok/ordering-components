"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Emitter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    _classCallCheck(this, Emitter);

    this._events = {};
  }

  _createClass(Emitter, [{
    key: "on",
    value: function on(name, listener) {
      if (!this._events[name]) {
        this._events[name] = [];
      }

      this._events[name].push(listener);
    }
  }, {
    key: "off",
    value: function off(name, listenerToRemove) {
      if (!this._events[name]) {
        return;
      }

      var filterListeners = function filterListeners(listener) {
        return listener !== listenerToRemove;
      };

      this._events[name] = this._events[name].filter(filterListeners);
    }
  }, {
    key: "emit",
    value: function emit(name) {
      for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        data[_key - 1] = arguments[_key];
      }

      if (!this._events[name]) {
        return;
      }

      var fireCallbacks = function fireCallbacks(callback) {
        // eslint-disable-next-line standard/no-callback-literal
        callback.apply(void 0, data);
      };

      this._events[name].forEach(fireCallbacks);
    }
  }]);

  return Emitter;
}();

exports.Emitter = Emitter;
var _default = Emitter;
exports.default = _default;