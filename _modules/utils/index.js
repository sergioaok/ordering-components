"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepEqual = exports.randomString = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var randomString = function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var alphabet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  var charactersLength = alphabet.length;

  for (var i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

exports.randomString = randomString;

var deepEqual = function deepEqual(object1, object2) {
  var keys1 = Object.keys(object1);
  var keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (var _i = 0, _keys = keys1; _i < _keys.length; _i++) {
    var key = _keys[_i];
    var val1 = object1[key];
    var val2 = object2[key];
    var areObjects = isObject(val1) && isObject(val2);

    if (areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2) {
      return false;
    }
  }

  return true;
};

exports.deepEqual = deepEqual;

var isObject = function isObject(object) {
  return object != null && _typeof(object) === 'object';
};