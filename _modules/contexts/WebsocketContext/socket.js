"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Socket = void 0;

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Socket = /*#__PURE__*/function () {
  function Socket(_ref) {
    var url = _ref.url,
        project = _ref.project,
        accessToken = _ref.accessToken;

    _classCallCheck(this, Socket);

    this.url = url;
    this.project = project;
    this.accessToken = accessToken;
    this.queue = [];
  }

  _createClass(Socket, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.socket = (0, _socket.default)(this.url, {
        extraHeaders: {
          Authorization: "Bearer ".concat(this.accessToken)
        },
        query: "token=".concat(this.accessToken, "&project=").concat(this.project),
        transports: ['websocket']
      });
      this.socket.on('connect', function () {
        var item;

        while ((item = _this.queue.shift()) !== undefined) {
          if (item.action === 'on') {
            _this.on(item.event, item.func);
          } else if (item.action === 'join') {
            _this.join(item.room);
          } else if (item.action === 'leave') {
            _this.leave(item.room);
          } else if (item.action === 'off') {
            _this.off(item.room);
          }
        }
      });
    }
  }, {
    key: "getId",
    value: function getId() {
      var _this$socket;

      return (_this$socket = this.socket) === null || _this$socket === void 0 ? void 0 : _this$socket.id;
    }
  }, {
    key: "close",
    value: function close() {
      var _this$socket2;

      if ((_this$socket2 = this.socket) === null || _this$socket2 === void 0 ? void 0 : _this$socket2.connected) {
        this.socket.close();
      }
    }
  }, {
    key: "join",
    value: function join(room) {
      var _this$socket3;

      if ((_this$socket3 = this.socket) === null || _this$socket3 === void 0 ? void 0 : _this$socket3.connected) {
        this.socket.emit('join', "".concat(this.project, "_").concat(room));
      } else {
        this.queue.push({
          action: 'join',
          room: room
        });
      }

      return this;
    }
  }, {
    key: "leave",
    value: function leave(room) {
      var _this$socket4;

      if ((_this$socket4 = this.socket) === null || _this$socket4 === void 0 ? void 0 : _this$socket4.connected) {
        this.socket.emit('leave', "".concat(this.project, "_").concat(room));
      } else {
        this.queue.push({
          action: 'leave',
          room: room
        });
      }

      return this;
    }
  }, {
    key: "on",
    value: function on(event) {
      var _this$socket5;

      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if ((_this$socket5 = this.socket) === null || _this$socket5 === void 0 ? void 0 : _this$socket5.connected) {
        this.socket.on(event, func);
      } else {
        this.queue.push({
          action: 'on',
          event: event,
          func: func
        });
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(event) {
      var _this$socket6;

      var func = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

      if ((_this$socket6 = this.socket) === null || _this$socket6 === void 0 ? void 0 : _this$socket6.connected) {
        this.socket.off(event, func);
      } else {
        this.queue.push({
          action: 'off',
          event: event,
          func: func
        });
      }

      return this;
    }
  }]);

  return Socket;
}();

exports.Socket = Socket;