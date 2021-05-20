import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { useOrder } from '../../contexts/OrderContext'
import { useLanguage } from '../../contexts/LanguageContext'

dayjs.extend(utc)

export const BusinessAndProductList = (props) => {
  const {
    isSearchByName,
    isSearchByDescription,
    slug,
    categoryId,
    productId,
    isInitialRender,
    ordering,
    businessProps,
    menusProps,
    isGetMenus,
    UIComponent
  } = props

  const [orderState] = useOrder()
  const [languageState, t] = useLanguage()

  const [categorySelected, setCategorySelected] = useState({ id: null, name: t('ALL', 'All') })
  const [searchValue, setSearchValue] = useState(null)
  const [sortByValue, setSortByValue] = useState(null)
  const [filterByMenus, setFilterByMenus] = useState(null)
  const [businessState, setBusinessState] = useState({ business: {}, menus: null, loading: true, error: null })
  const [categoriesState, setCategoriesState] = useState({})
  const [orderOptions, setOrderOptions] = useState()
  const [requestsState, setRequestsState] = useState({})
  const [productModal, setProductModal] = useState({ product: null, loading: false, error: null })
  const [featuredProducts, setFeaturedProducts] = useState(false)

  const categoryStateDefault = {
    loading: true,
    pagination: { currentPage: 0, pageSize: 20, totalItems: null, totalPages: 0, nextPageItems: 10 },
    products: []
  }

  const [categoryState, setCategoryState] = useState(categoryStateDefault)
  const [errors, setErrors] = useState(null)
  const [errorQuantityProducts, setErrorQuantityProducts] = useState(false)

  /**
   * Change category selected
   * @param {Object} category Category object
   */
  const handleChangeCategory = (category) => {
    if (category?.id === categorySelected?.id) return
    setCategorySelected(category)
  }

  const handleChangeSearch = (search) => {
    setSearchValue(search)
  }

  const handleChangeSortBy = (val) => {
    setSortByValue(val)
  }

  const handleChangeFilterByMenus = (val) => {
    setFilterByMenus(val)
  }

  const isMatchSearch = (name, description) => {
    if (!searchValue) return true
    return (name && (name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName)) ||
      (description && (description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription))
  }

  const isValidMoment = (date, format) => dayjs.utc(date, format).format(format) === date

  const isFeaturedSearch = (product) => {
    if (product.featured) {
      if (!searchValue) return true
      return (product.name && (product.name.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByName)) ||
        (product.description && (product.description.toLowerCase().includes(searchValue.toLowerCase()) && isSearchByDescription))
    }
    return false
  }

  const sortProductsArray = (option, array) => {
    if (option === 'rank') {
      return array.sort((a, b) => b.rank - a.rank)
    }
    if (option === 'a-z') {
      return array.sort((a, b) =>
        (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      )
    }
    return array
  }

  const getProducts = async (newFetch) => {
    if (!businessState?.business?.lazy_load_products_recommended) {
      const isFeatured = !!businessState?.business?.categories?.find(
        category => category
      )?.products.filter(
        product => product.featured
      ).length
      setFeaturedProducts(isFeatured)
      const categoryState = {
        ...categoryStateDefault,
        loading: false
      }
      if (categorySelected.id !== 'featured' && categorySelected.id !== null) {
        const productsFiltered = businessState?.business?.categories?.find(
          category => category.id === categorySelected.id
        )?.products.filter(
          product => isMatchSearch(product.name, product.description)
        )
        categoryState.products = productsFiltered || []
      } else if (categorySelected.id === 'featured') {
        const productsFiltered = businessState?.business?.categories?.reduce(
          (products, category) => [...products, ...category.products], []
        ).filter(
          product => isFeaturedSearch(product)
        )
        categoryState.products = productsFiltered || []
      } else {
        const productsFiltered = businessState?.business?.categories?.reduce(
          (products, category) => [...products, ...category.products], []
        ).filter(
          product => isMatchSearch(product.name, product.description)
        )
        categoryState.products = productsFiltered || []
      }
      categoryState.products = sortProductsArray(sortByValue, categoryState.products)
      setCategoryState({ ...categoryState })
      return
    }

    const categoryKey = searchValue
      ? 'search'
      : categorySelected.id === 'featured'
        ? 'featured'
        : categorySelected.id
          ? `categoryId:${categorySelected.id}`
          : 'all'

    const categoryState = categoriesState[categoryKey] || categoryStateDefault
    categoryState.products = sortProductsArray(sortByValue, categoryState.products)
    const pagination = categoryState.pagination
    if (!newFetch && pagination.currentPage > 0 && pagination.currentPage === pagination.totalPages) {
      setCategoryState({ ...categoryState, loading: false })
      return
    }

    setCategoryState({ ...categoryState, loading: true })

    const parameters = {
      type: orderState.options?.type || 1,
      page: newFetch ? 1 : pagination.currentPage + 1,
      page_size: pagination.pageSize
    }

    if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
      const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
      parameters.timestamp = moment
    }

    if (sortByValue) {
      parameters.orderBy = sortByValue === 'a-z' ? 'name' : sortByValue
    }

    let where = null
    const searchConditions = []
    if (searchValue) {
      if (isSearchByName) {
        searchConditions.push(
          {
            attribute: 'name',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
      if (isSearchByDescription) {
        searchConditions.push(
          {
            attribute: 'description',
            value: {
              condition: 'ilike',
              value: encodeURI(`%${searchValue}%`)
            }
          }
        )
      }
    }

    where = {
      conditions: searchConditions,
      conector: 'OR'
    }

    if (categorySelected.id === 'featured') {
      parameters.params = 'features'
    }

    if (categorySelected.id === 'featured' && searchValue) {
      parameters.params = 'features'
      where = {
        conditions: [
          {
            conditions: searchConditions,
            conector: 'OR'
          }
        ],
        conector: 'AND'
      }
    }

    try {
      const functionFetch = categorySelected.id && categorySelected.id !== 'featured'
        ? ordering.businesses(businessState.business.id).categories(categorySelected.id).products()
        : ordering.businesses(businessState.business.id).products()
      const source = {}
      requestsState.products = source
      setRequestsState({ ...requestsState })
      const productEndpoint = where.conditions.length > 0
        ? functionFetch.parameters(parameters).where(where)
        : functionFetch.parameters(parameters)
      const { content: { error, result, pagination } } = await productEndpoint.get({ cancelToken: source })
      if (!error) {
        const newcategoryState = {
          pagination: {
            ...categoryState.pagination,
            currentPage: pagination.current_page,
            totalItems: pagination.total,
            totalPages: pagination.total_pages
          },
          loading: false,
          products: newFetch ? [...result] : [...categoryState.products, ...result]
        }

        categoriesState[categoryKey] = newcategoryState
        setCategoryState({ ...newcategoryState })
        setCategoriesState({ ...categoriesState })
        setFeaturedProducts(!!categoriesState.all.products.find(product => product.featured))
      } else {
        setErrors(result)
      }
    } catch (err) {
      setErrors([err.message])
    }
  }

  const getProduct = async () => {
    if (categoryId && productId && businessState.business.id) {
      try {
        setProductModal({
          ...productModal,
          loading: true
        })
        const source = {}
        requestsState.product = source
        const parameters = {
          type: orderState.options?.type || 1,
          moment: orderState.options?.moment || null
        }

        if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
          const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
          parameters.timestamp = moment
        }

        const { content: { result } } = await ordering
          .businesses(businessState.business.id)
          .categories(categoryId)
          .products(productId)
          .parameters(parameters)
          .get({ cancelToken: source })
        const product = Array.isArray(result) ? null : result
        setProductModal({
          ...productModal,
          product,
          loading: false
        })
      } catch (e) {
        setProductModal({
          ...productModal,
          loading: false,
          error: [e]
        })
      }
    }
  }

  useEffect(() => {
    if (isInitialRender) {
      getProduct()
    }
  }, [JSON.stringify(businessState.business?.id), isInitialRender])

  const getBusiness = async () => {
    try {
      setBusinessState({ ...businessState, loading: true })
      const source = {}
      requestsState.business = source
      setRequestsState({ ...requestsState })
      const parameters = {
        type: orderState.options?.type || 1,
        location: orderState.options?.address?.location
          ? `${orderState.options?.address?.location?.lat},${orderState.options?.address?.location?.lng}`
          : null
      }
      if (orderState.options?.moment && isValidMoment(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss')) {
        const moment = dayjs.utc(orderState.options?.moment, 'YYYY-MM-DD HH:mm:ss').local().unix()
        parameters.timestamp = moment
      }

      if (filterByMenus) {
        parameters.menu_id = filterByMenus
      }

      const { content: { result } } = await ordering
        .businesses(slug)
        .select(businessProps)
        .parameters(parameters)
        .get({ cancelToken: source })

      if (!result?.categories || result?.categories?.length === 0) {
        setErrorQuantityProducts(true)
      }

      const data = {
        ...businessState,
        business: result,
        loading: false
      }

      if (menusProps && isGetMenus) {
        const { content: { result: menus } } = await ordering
          .businesses(result.id)
          .menus()
          .select(menusProps)
          .get()

        data.menus = menus
      }

      setBusinessState(data)
    } catch (err) {
      setBusinessState({
        ...businessState,
        loading: false,
        error: [err.message]
      })
    }
  }

  useEffect(() => {
    if (!businessState.loading) {
      getProducts(true)
    }
  }, [businessState])

  useEffect(() => {
    getProducts(!!searchValue)
  }, [searchValue])

  useEffect(() => {
    getProducts(!!searchValue)
  }, [categorySelected.id])

  useEffect(() => {
    getProducts(!!searchValue)
  }, [sortByValue])

  useEffect(() => {
    getProducts()
  }, [slug])

  useEffect(() => {
    if (!orderState.loading && orderOptions && !languageState.loading) {
      getBusiness()
    }
  }, [orderOptions, languageState.loading, slug, filterByMenus])

  useEffect(() => {
    if (!orderState.loading) {
      setOrderOptions({
        type: orderState?.options?.type,
        moment: orderState?.options?.moment,
        location: orderState?.options?.address?.location
      })
    }
  }, [orderState?.options?.type, orderState?.options?.moment, JSON.stringify(orderState?.options?.address?.location)])

  /**
   * Cancel business request
   */
  useEffect(() => {
    const request = requestsState.business
    return () => {
      request && request.cancel && request.cancel()
    }
  }, [requestsState.business])

  /**
   * Cancel products request on unmount and pagination
   */
  useEffect(() => {
    const request = requestsState.products
    return () => {
      request && request.cancel && request.cancel()
    }
  }, [requestsState.products])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          errors={errors}
          categorySelected={categorySelected}
          searchValue={searchValue}
          sortByValue={sortByValue}
          filterByMenus={filterByMenus}
          categoryState={categoryState}
          businessState={businessState}
          productModal={productModal}
          featuredProducts={featuredProducts}
          errorQuantityProducts={errorQuantityProducts}
          handleChangeCategory={handleChangeCategory}
          handleChangeSearch={handleChangeSearch}
          handleChangeSortBy={handleChangeSortBy}
          handleChangeFilterByMenus={handleChangeFilterByMenus}
          getNextProducts={getProducts}
          updateProductModal={(val) => setProductModal({ ...productModal, product: val })}
        />
      )}
    </>
  )
}

BusinessAndProductList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType
}

BusinessAndProductList.defaultProps = {
}

export default BusinessAndProductList
