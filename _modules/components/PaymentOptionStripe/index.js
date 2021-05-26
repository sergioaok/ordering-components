"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptionStripe = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SessionContext = require("../../contexts/SessionContext");

var _ApiContext = require("../../contexts/ApiContext");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage payment option stripe behavior without UI component
 */
var PaymentOptionStripe = function PaymentOptionStripe(props) {
  var businessId = props.businessId,
      UIComponent = props.UIComponent;

  var _useSession = (0, _SessionContext.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      _useSession2$ = _useSession2[0],
      token = _useSession2$.token,
      user = _useSession2$.user;

  var _useApi = (0, _ApiContext.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * Contains and object to save cards, handle loading and error
   */


  var _useState = (0, _react.useState)({
    cards: [],
    loading: true,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      cardsList = _useState2[0],
      setCardsList = _useState2[1];
  /**
   * save stripe public key
   */


  var _useState3 = (0, _react.useState)(props.publicKey),
      _useState4 = _slicedToArray(_useState3, 2),
      publicKey = _useState4[0],
      setPublicKey = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      cardSelected = _useState6[0],
      setCardSelected = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      cardDefault = _useState8[0],
      setCardDefault = _useState8[1];

  var _useState9 = (0, _react.useState)({
    loading: false,
    error: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      defaultCardSetActionStatus = _useState10[0],
      setDefaultCardSetActionStatus = _useState10[1];

  var requestState = {};
  /**
   * method to get cards from API
   */

  var getCards = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var source, _yield$ordering$setAc, result, defaultCard;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: true
              }));
              _context.prev = 1;
              source = {};
              requestState.paymentCards = source; // The order of paymentCards params is businessId, userId. This sdk needs to be improved in the future,

              _context.next = 6;
              return ordering.setAccessToken(token).paymentCards(businessId, user.id).get({
                cancelToken: source
              });

            case 6:
              _yield$ordering$setAc = _context.sent;
              result = _yield$ordering$setAc.content.result;
              defaultCard = result === null || result === void 0 ? void 0 : result.find(function (card) {
                return card.default;
              });

              if (defaultCard) {
                setCardDefault({
                  id: defaultCard.id,
                  type: 'card',
                  card: {
                    brand: defaultCard.brand,
                    last4: defaultCard.last4
                  }
                });
              }

              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                cards: result
              }));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              setCardsList(_objectSpread(_objectSpread({}, cardsList), {}, {
                loading: false,
                error: _context.t0
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function getCards() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * method to get cards from API
   */


  var deleteCard = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(card) {
      var _yield$ordering$payme, error;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return ordering.paymentCards(-1, user.id, card.id).delete();

            case 3:
              _yield$ordering$payme = _context2.sent;
              error = _yield$ordering$payme.content.error;

              if (!error) {
                cardsList.cards = cardsList.cards.filter(function (_card) {
                  return _card.id !== card.id;
                });
                setCardsList(_objectSpread({}, cardsList));
              }

              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0.message);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function deleteCard(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * method to set card as default
   */


  var setDefaultCard = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(card) {
      var requestOptions, functionFetch, response, content;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setDefaultCardSetActionStatus(_objectSpread(_objectSpread({}, defaultCardSetActionStatus), {}, {
                loading: true
              }));
              requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify({
                  business_id: businessId,
                  user_id: user.id,
                  card_id: card.id
                })
              };
              functionFetch = "".concat(ordering.root, "/payments/stripe/cards/default");
              _context3.next = 6;
              return fetch(functionFetch, requestOptions);

            case 6:
              response = _context3.sent;
              _context3.next = 9;
              return response.json();

            case 9:
              content = _context3.sent;

              if (!content.error) {
                setCardDefault({
                  id: card.id,
                  type: 'card',
                  card: {
                    brand: card.brand,
                    last4: card.last4
                  }
                });
                setDefaultCardSetActionStatus({
                  loading: false,
                  error: null
                });
              } else {
                setDefaultCardSetActionStatus({
                  loading: false,
                  error: content.result
                });
              }

              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              setDefaultCardSetActionStatus({
                loading: false,
                error: _context3.t0
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function setDefaultCard(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Method to get stripe credentials from API
   */


  var getCredentials = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var _yield$ordering$setAc2, result;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return ordering.setAccessToken(token).paymentCards().getCredentials();

            case 3:
              _yield$ordering$setAc2 = _context4.sent;
              result = _yield$ordering$setAc2.content.result;
              setPublicKey(result.publishable);
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0.message);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 8]]);
    }));

    return function getCredentials() {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleCardClick = function handleCardClick(card) {
    setCardSelected({
      id: card.id,
      type: 'card',
      card: {
        brand: card.brand,
        last4: card.last4
      }
    });
  };

  var handleNewCard = function handleNewCard(card) {
    cardsList.cards.push(card);
    setCardsList(_objectSpread({}, cardsList));
    handleCardClick(card);
  };

  (0, _react.useEffect)(function () {
    if (token) {
      getCards();

      if (!props.publicKey) {
        getCredentials();
      }
    }

    return function () {
      if (requestState.paymentCards && requestState.paymentCards.cancel) {
        requestState.paymentCards.cancel();
      }
    };
  }, [token]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    cardSelected: cardSelected,
    cardDefault: cardDefault,
    cardsList: cardsList,
    handleCardClick: handleCardClick,
    publicKey: publicKey,
    handleNewCard: handleNewCard,
    deleteCard: deleteCard,
    setDefaultCard: setDefaultCard,
    defaultCardSetActionStatus: defaultCardSetActionStatus
  })));
};

exports.PaymentOptionStripe = PaymentOptionStripe;
PaymentOptionStripe.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Business id to get cards from API
   */
  businessId: _propTypes.default.number.isRequired,

  /**
   * User id to pass in endpoint to get cards from API,
   */
  userId: _propTypes.default.number,

  /**
   * Components types before payment option stripe
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after payment option stripe
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before payment option stripe
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after payment option stripe
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
PaymentOptionStripe.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};