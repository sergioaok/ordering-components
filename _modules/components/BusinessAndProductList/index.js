"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessAndProductList = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _utc = _interopRequireDefault(require("dayjs/plugin/utc"));

var _OrderContext = require("../../contexts/OrderContext");

var _LanguageContext = require("../../contexts/LanguageContext");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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

_dayjs.default.extend(_utc.default);

var BusinessAndProductList = function BusinessAndProductList(props) {
  var _businessState$busine12, _orderState$options26, _orderState$options27, _orderState$options28, _orderState$options29;

  var isSearchByName = props.isSearchByName,
      isSearchByDescription = props.isSearchByDescription,
      slug = props.slug,
      categoryId = props.categoryId,
      productId = props.productId,
      isInitialRender = props.isInitialRender,
      ordering = props.ordering,
      businessProps = props.businessProps,
      menusProps = props.menusProps,
      isGetMenus = props.isGetMenus,
      UIComponent = props.UIComponent;

  var _useOrder = (0, _OrderContext.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 1),
      orderState = _useOrder2[0];

  var _useLanguage = (0, _LanguageContext.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      languageState = _useLanguage2[0],
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({
    id: null,
    name: t('ALL', 'All')
  }),
      _useState2 = _slicedToArray(_useState, 2),
      categorySelected = _useState2[0],
      setCategorySelected = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      searchValue = _useState4[0],
      setSearchValue = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      sortByValue = _useState6[0],
      setSortByValue = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      filterByMenus = _useState8[0],
      setFilterByMenus = _useState8[1];

  var _useState9 = (0, _react.useState)({
    business: {},
    menus: null,
    loading: true,
    error: null
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      businessState = _useState10[0],
      setBusinessState = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      categoriesState = _useState12[0],
      setCategoriesState = _useState12[1];

  var _useState13 = (0, _react.useState)(),
      _useState14 = _slicedToArray(_useState13, 2),
      orderOptions = _useState14[0],
      setOrderOptions = _useState14[1];

  var _useState15 = (0, _react.useState)({}),
      _useState16 = _slicedToArray(_useState15, 2),
      requestsState = _useState16[0],
      setRequestsState = _useState16[1];

  var _useState17 = (0, _react.useState)({
    product: null,
    loading: false,
    error: null
  }),
      _useState18 = _slicedToArray(_useState17, 2),
      productModal = _useState18[0],
      setProductModal = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = _slicedToArray(_useState19, 2),
      featuredProducts = _useState20[0],
      setFeaturedProducts = _useState20[1];

  var categoryStateDefault = {
    loading: true,
    pagination: {
      currentPage: 0,
      pageSize: 20,
      totalItems: null,
      totalPages: 0,
      nextPageItems: 10
    },
    products: []
  };

  var _useState21 = (0, _react.useState)(categoryStateDefault),
      _useState22 = _slicedToArray(_useState21, 2),
      categoryState = _useState22[0],
      setCategoryState = _useState22[1];

  var _useState23 = (0, _react.useState)(null),
      _useState24 = _slicedToArray(_useState23, 2),
      errors = _useState24[0],
      setErrors = _useState24[1];

  var _useState25 = (0, _react.useState)(false),
      _useState26 = _slicedToArray(_useState25, 2),
      errorQuantityProducts = _useState26[0],
      setErrorQuantityProducts = _useState26[1];
  /**
   * Change category selected
   * @param {Object} category Category object
   */


  var handleChangeCategory = function handleChangeCategory(category) {
    if ((category === null || category === void 0 ? void 0 : category.id) === (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id)) return;
    setCategorySelected(category);
  };

  var handleChangeSearch = function handleChangeSearch(search) {
    setSearchValue(search);
  };

  var handleChangeSortBy = function handleChangeSortBy(val) {
    setSortByValue(val);
  };

  var handleChangeFilterByMenus = function handleChangeFilterByMenus(val) {
    setFilterByMenus(val);
  };

  var isMatchSearch = function isMatchSearch(name, description) {
    if (!searchValue) return true;
    return name && name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName || description && description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription;
  };

  var isValidMoment = function isValidMoment(date, format) {
    return _dayjs.default.utc(date, format).format(format) === date;
  };

  var isFeaturedSearch = function isFeaturedSearch(product) {
    if (product.featured) {
      if (!searchValue) return true;
      return product.name && product.name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName || product.description && product.description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription;
    }

    return false;
  };

  var sortProductsArray = function sortProductsArray(option, array) {
    if (option === 'rank') {
      return array.sort(function (a, b) {
        return b.rank - a.rank;
      });
    }

    if (option === 'a-z') {
      return array.sort(function (a, b) {
        return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
      });
    }

    return array;
  };

  var getProducts = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newFetch) {
      var _businessState$busine, _orderState$options, _orderState$options2, _orderState$options3;

      var _businessState$busine2, _businessState$busine3, _businessState$busine4, isFeatured, _categoryState, _businessState$busine5, _businessState$busine6, _businessState$busine7, productsFiltered, _businessState$busine8, _businessState$busine9, _productsFiltered, _businessState$busine10, _businessState$busine11, _productsFiltered2, categoryKey, categoryState, pagination, parameters, _orderState$options4, moment, where, searchConditions, functionFetch, source, productEndpoint, _yield$productEndpoin, _yield$productEndpoin2, error, result, _pagination, newcategoryState;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (businessState !== null && businessState !== void 0 && (_businessState$busine = businessState.business) !== null && _businessState$busine !== void 0 && _businessState$busine.lazy_load_products_recommended) {
                _context.next = 8;
                break;
              }

              isFeatured = !!(businessState !== null && businessState !== void 0 && (_businessState$busine2 = businessState.business) !== null && _businessState$busine2 !== void 0 && (_businessState$busine3 = _businessState$busine2.categories) !== null && _businessState$busine3 !== void 0 && (_businessState$busine4 = _businessState$busine3.find(function (category) {
                return category;
              })) !== null && _businessState$busine4 !== void 0 && _businessState$busine4.products.filter(function (product) {
                return product.featured;
              }).length);
              setFeaturedProducts(isFeatured);
              _categoryState = _objectSpread(_objectSpread({}, categoryStateDefault), {}, {
                loading: false
              });

              if (categorySelected.id !== 'featured' && categorySelected.id !== null) {
                productsFiltered = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : (_businessState$busine6 = _businessState$busine5.categories) === null || _businessState$busine6 === void 0 ? void 0 : (_businessState$busine7 = _businessState$busine6.find(function (category) {
                  return category.id === categorySelected.id;
                })) === null || _businessState$busine7 === void 0 ? void 0 : _businessState$busine7.products.filter(function (product) {
                  return isMatchSearch(product.name, product.description);
                });
                _categoryState.products = productsFiltered || [];
              } else if (categorySelected.id === 'featured') {
                _productsFiltered = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine8 = businessState.business) === null || _businessState$busine8 === void 0 ? void 0 : (_businessState$busine9 = _businessState$busine8.categories) === null || _businessState$busine9 === void 0 ? void 0 : _businessState$busine9.reduce(function (products, category) {
                  return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                }, []).filter(function (product) {
                  return isFeaturedSearch(product);
                });
                _categoryState.products = _productsFiltered || [];
              } else {
                _productsFiltered2 = businessState === null || businessState === void 0 ? void 0 : (_businessState$busine10 = businessState.business) === null || _businessState$busine10 === void 0 ? void 0 : (_businessState$busine11 = _businessState$busine10.categories) === null || _businessState$busine11 === void 0 ? void 0 : _businessState$busine11.reduce(function (products, category) {
                  return [].concat(_toConsumableArray(products), _toConsumableArray(category.products));
                }, []).filter(function (product) {
                  return isMatchSearch(product.name, product.description);
                });
                _categoryState.products = _productsFiltered2 || [];
              }

              _categoryState.products = sortProductsArray(sortByValue, _categoryState.products);
              setCategoryState(_objectSpread({}, _categoryState));
              return _context.abrupt("return");

            case 8:
              categoryKey = searchValue ? 'search' : categorySelected.id === 'featured' ? 'featured' : categorySelected.id ? "categoryId:".concat(categorySelected.id) : 'all';
              categoryState = categoriesState[categoryKey] || categoryStateDefault;
              categoryState.products = sortProductsArray(sortByValue, categoryState.products);
              pagination = categoryState.pagination;

              if (!(!newFetch && pagination.currentPage > 0 && pagination.currentPage === pagination.totalPages)) {
                _context.next = 15;
                break;
              }

              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                loading: false
              }));
              return _context.abrupt("return");

            case 15:
              setCategoryState(_objectSpread(_objectSpread({}, categoryState), {}, {
                loading: true
              }));
              parameters = {
                type: ((_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) || 1,
                page: newFetch ? 1 : pagination.currentPage + 1,
                page_size: pagination.pageSize
              };

              if ((_orderState$options2 = orderState.options) !== null && _orderState$options2 !== void 0 && _orderState$options2.moment && isValidMoment((_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              if (sortByValue) {
                parameters.orderBy = sortByValue === 'a-z' ? 'name' : sortByValue;
              }

              where = null;
              searchConditions = [];

              if (searchValue) {
                if (isSearchByName) {
                  searchConditions.push({
                    attribute: 'name',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }

                if (isSearchByDescription) {
                  searchConditions.push({
                    attribute: 'description',
                    value: {
                      condition: 'ilike',
                      value: encodeURI("%".concat(searchValue, "%"))
                    }
                  });
                }
              }

              where = {
                conditions: searchConditions,
                conector: 'OR'
              };

              if (categorySelected.id === 'featured') {
                parameters.params = 'features';
              }

              if (categorySelected.id === 'featured' && searchValue) {
                parameters.params = 'features';
                where = {
                  conditions: [{
                    conditions: searchConditions,
                    conector: 'OR'
                  }],
                  conector: 'AND'
                };
              }

              _context.prev = 25;
              functionFetch = categorySelected.id && categorySelected.id !== 'featured' ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products() : ordering.businesses(businessState.business.id).products();
              source = {};
              requestsState.products = source;
              setRequestsState(_objectSpread({}, requestsState));
              productEndpoint = where.conditions.length > 0 ? functionFetch.parameters(parameters).where(where) : functionFetch.parameters(parameters);
              _context.next = 33;
              return productEndpoint.get({
                cancelToken: source
              });

            case 33:
              _yield$productEndpoin = _context.sent;
              _yield$productEndpoin2 = _yield$productEndpoin.content;
              error = _yield$productEndpoin2.error;
              result = _yield$productEndpoin2.result;
              _pagination = _yield$productEndpoin2.pagination;

              if (!error) {
                newcategoryState = {
                  pagination: _objectSpread(_objectSpread({}, categoryState.pagination), {}, {
                    currentPage: _pagination.current_page,
                    totalItems: _pagination.total,
                    totalPages: _pagination.total_pages
                  }),
                  loading: false,
                  products: newFetch ? _toConsumableArray(result) : [].concat(_toConsumableArray(categoryState.products), _toConsumableArray(result))
                };
                categoriesState[categoryKey] = newcategoryState;
                setCategoryState(_objectSpread({}, newcategoryState));
                setCategoriesState(_objectSpread({}, categoriesState));
                setFeaturedProducts(!!categoriesState.all.products.find(function (product) {
                  return product.featured;
                }));
              } else {
                setErrors(result);
              }

              _context.next = 44;
              break;

            case 41:
              _context.prev = 41;
              _context.t0 = _context["catch"](25);
              setErrors([_context.t0.message]);

            case 44:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[25, 41]]);
    }));

    return function getProducts(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var getProduct = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _props$product, _props$product2, _props$product3;

      var _orderState$options5, _orderState$options6, _orderState$options7, _orderState$options8, _props$product4, _props$product5, _props$product6, source, parameters, _orderState$options9, moment, _yield$ordering$busin, result, product;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(categoryId && productId && businessState.business.id || (_props$product = props.product) !== null && _props$product !== void 0 && _props$product.businessId && (_props$product2 = props.product) !== null && _props$product2 !== void 0 && _props$product2.categoryId && (_props$product3 = props.product) !== null && _props$product3 !== void 0 && _props$product3.id)) {
                _context2.next = 18;
                break;
              }

              _context2.prev = 1;
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                loading: true
              }));
              source = {};
              requestsState.product = source;
              parameters = {
                type: ((_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5.type) || 1,
                moment: ((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.moment) || null
              };

              if ((_orderState$options7 = orderState.options) !== null && _orderState$options7 !== void 0 && _orderState$options7.moment && isValidMoment((_orderState$options8 = orderState.options) === null || _orderState$options8 === void 0 ? void 0 : _orderState$options8.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options9 = orderState.options) === null || _orderState$options9 === void 0 ? void 0 : _orderState$options9.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              _context2.next = 9;
              return ordering.businesses(businessState.business.id || ((_props$product4 = props.product) === null || _props$product4 === void 0 ? void 0 : _props$product4.businessId)).categories(categoryId || ((_props$product5 = props.product) === null || _props$product5 === void 0 ? void 0 : _props$product5.categoryId)).products(productId || ((_props$product6 = props.product) === null || _props$product6 === void 0 ? void 0 : _props$product6.id)).parameters(parameters).get({
                cancelToken: source
              });

            case 9:
              _yield$ordering$busin = _context2.sent;
              result = _yield$ordering$busin.content.result;
              product = Array.isArray(result) ? null : result;
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                product: product,
                loading: false
              }));
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](1);
              setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
                loading: false,
                error: [_context2.t0]
              }));

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 15]]);
    }));

    return function getProduct() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (isInitialRender) {
      getProduct();
    }
  }, [JSON.stringify((_businessState$busine12 = businessState.business) === null || _businessState$busine12 === void 0 ? void 0 : _businessState$busine12.id), isInitialRender]);

  var getBusiness = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var _orderState$options10, _orderState$options11, _orderState$options12, _orderState$options13, _orderState$options14, _orderState$options15, _orderState$options16, _orderState$options17, _orderState$options18, _orderState$options19, _orderState$options20, _result$categories, source, parameters, _orderState$options21, moment, _yield$ordering$busin2, result, data, _yield$ordering$busin3, menus;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: true
              }));
              source = {};
              requestsState.business = source;
              setRequestsState(_objectSpread({}, requestsState));
              parameters = {
                type: ((_orderState$options10 = orderState.options) === null || _orderState$options10 === void 0 ? void 0 : _orderState$options10.type) || 1,
                location: (_orderState$options11 = orderState.options) !== null && _orderState$options11 !== void 0 && (_orderState$options12 = _orderState$options11.address) !== null && _orderState$options12 !== void 0 && _orderState$options12.location ? "".concat((_orderState$options13 = orderState.options) === null || _orderState$options13 === void 0 ? void 0 : (_orderState$options14 = _orderState$options13.address) === null || _orderState$options14 === void 0 ? void 0 : (_orderState$options15 = _orderState$options14.location) === null || _orderState$options15 === void 0 ? void 0 : _orderState$options15.lat, ",").concat((_orderState$options16 = orderState.options) === null || _orderState$options16 === void 0 ? void 0 : (_orderState$options17 = _orderState$options16.address) === null || _orderState$options17 === void 0 ? void 0 : (_orderState$options18 = _orderState$options17.location) === null || _orderState$options18 === void 0 ? void 0 : _orderState$options18.lng) : null
              };

              if ((_orderState$options19 = orderState.options) !== null && _orderState$options19 !== void 0 && _orderState$options19.moment && isValidMoment((_orderState$options20 = orderState.options) === null || _orderState$options20 === void 0 ? void 0 : _orderState$options20.moment, 'YYYY-MM-DD HH:mm:ss')) {
                moment = _dayjs.default.utc((_orderState$options21 = orderState.options) === null || _orderState$options21 === void 0 ? void 0 : _orderState$options21.moment, 'YYYY-MM-DD HH:mm:ss').local().unix();
                parameters.timestamp = moment;
              }

              if (filterByMenus) {
                parameters.menu_id = filterByMenus;
              }

              _context3.next = 10;
              return ordering.businesses(slug).select(businessProps).parameters(parameters).get({
                cancelToken: source
              });

            case 10:
              _yield$ordering$busin2 = _context3.sent;
              result = _yield$ordering$busin2.content.result;

              if (!(result !== null && result !== void 0 && result.categories) || (result === null || result === void 0 ? void 0 : (_result$categories = result.categories) === null || _result$categories === void 0 ? void 0 : _result$categories.length) === 0) {
                setErrorQuantityProducts(true);
              }

              data = _objectSpread(_objectSpread({}, businessState), {}, {
                business: result,
                loading: false
              });

              if (!(menusProps && isGetMenus)) {
                _context3.next = 20;
                break;
              }

              _context3.next = 17;
              return ordering.businesses(result.id).menus().select(menusProps).get();

            case 17:
              _yield$ordering$busin3 = _context3.sent;
              menus = _yield$ordering$busin3.content.result;
              data.menus = menus;

            case 20:
              setBusinessState(data);
              _context3.next = 26;
              break;

            case 23:
              _context3.prev = 23;
              _context3.t0 = _context3["catch"](0);
              setBusinessState(_objectSpread(_objectSpread({}, businessState), {}, {
                loading: false,
                error: [_context3.t0.message]
              }));

            case 26:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 23]]);
    }));

    return function getBusiness() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (!businessState.loading) {
      getProducts(true);
    }
  }, [businessState]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [searchValue]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [categorySelected.id]);
  (0, _react.useEffect)(function () {
    getProducts(!!searchValue);
  }, [sortByValue]);
  (0, _react.useEffect)(function () {
    getProducts();
  }, [slug]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading && orderOptions && !languageState.loading) {
      getBusiness();
    }
  }, [orderOptions, languageState.loading, slug, filterByMenus]);
  /**
   * getBusiness if orderState is loading the first time when is rendered
   */

  (0, _react.useEffect)(function () {
    var _Object$keys;

    if (props.product && !orderState.loading && !((_Object$keys = Object.keys(businessState.business)) !== null && _Object$keys !== void 0 && _Object$keys.length)) {
      getBusiness();
    }
  }, [orderState.loading]);
  /**
   * getProduct when login after guest
   */

  (0, _react.useEffect)(function () {
    var _props$product7, _props$product8, _props$product9;

    if ((_props$product7 = props.product) !== null && _props$product7 !== void 0 && _props$product7.businessId && (_props$product8 = props.product) !== null && _props$product8 !== void 0 && _props$product8.categoryId && (_props$product9 = props.product) !== null && _props$product9 !== void 0 && _props$product9.id && !orderState.loading) {
      getProduct();
    }
  }, [props.product]);
  (0, _react.useEffect)(function () {
    if (!orderState.loading) {
      var _orderState$options22, _orderState$options23, _orderState$options24, _orderState$options25;

      setOrderOptions({
        type: orderState === null || orderState === void 0 ? void 0 : (_orderState$options22 = orderState.options) === null || _orderState$options22 === void 0 ? void 0 : _orderState$options22.type,
        moment: orderState === null || orderState === void 0 ? void 0 : (_orderState$options23 = orderState.options) === null || _orderState$options23 === void 0 ? void 0 : _orderState$options23.moment,
        location: orderState === null || orderState === void 0 ? void 0 : (_orderState$options24 = orderState.options) === null || _orderState$options24 === void 0 ? void 0 : (_orderState$options25 = _orderState$options24.address) === null || _orderState$options25 === void 0 ? void 0 : _orderState$options25.location
      });
    }
  }, [orderState === null || orderState === void 0 ? void 0 : (_orderState$options26 = orderState.options) === null || _orderState$options26 === void 0 ? void 0 : _orderState$options26.type, orderState === null || orderState === void 0 ? void 0 : (_orderState$options27 = orderState.options) === null || _orderState$options27 === void 0 ? void 0 : _orderState$options27.moment, JSON.stringify(orderState === null || orderState === void 0 ? void 0 : (_orderState$options28 = orderState.options) === null || _orderState$options28 === void 0 ? void 0 : (_orderState$options29 = _orderState$options28.address) === null || _orderState$options29 === void 0 ? void 0 : _orderState$options29.location)]);
  /**
   * Cancel business request
   */

  (0, _react.useEffect)(function () {
    var request = requestsState.business;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.business]);
  /**
   * Cancel products request on unmount and pagination
   */

  (0, _react.useEffect)(function () {
    var request = requestsState.products;
    return function () {
      request && request.cancel && request.cancel();
    };
  }, [requestsState.products]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    errors: errors,
    categorySelected: categorySelected,
    searchValue: searchValue,
    sortByValue: sortByValue,
    filterByMenus: filterByMenus,
    categoryState: categoryState,
    businessState: businessState,
    productModal: productModal,
    featuredProducts: featuredProducts,
    errorQuantityProducts: errorQuantityProducts,
    handleChangeCategory: handleChangeCategory,
    handleChangeSearch: handleChangeSearch,
    handleChangeSortBy: handleChangeSortBy,
    handleChangeFilterByMenus: handleChangeFilterByMenus,
    getNextProducts: getProducts,
    updateProductModal: function updateProductModal(val) {
      return setProductModal(_objectSpread(_objectSpread({}, productModal), {}, {
        product: val
      }));
    }
  })));
};

exports.BusinessAndProductList = BusinessAndProductList;
BusinessAndProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType
};
BusinessAndProductList.defaultProps = {};