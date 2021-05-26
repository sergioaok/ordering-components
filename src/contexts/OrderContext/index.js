import React, { createContext, useContext, useState, useEffect } from 'react'
import { useSession } from '../SessionContext'
import { useApi } from '../ApiContext'
import { useWebsocket } from '../WebsocketContext'
import { useLanguage } from '../LanguageContext'
import { useEvent } from '../EventContext'
import { useConfig } from '../ConfigContext'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

/**
 * Create OrderContext
 * This context will manage the current order with options internally and provide an easy interface
 */
export const OrderContext = createContext()

/**
 * Custom provider to order manager
 * This provider has a reducer for manage order state
 * @param {props} props
 */
export const OrderProvider = ({ Alert, children, strategy }) => {
  const [confirmAlert, setConfirm] = useState({ show: false })
  const [alert, setAlert] = useState({ show: false })
  const [ordering] = useApi()
  const [languageState, t] = useLanguage()
  const socket = useWebsocket()
  const [events] = useEvent()
  const [configState] = useConfig()
  const [session] = useSession()

  const orderTypes = {
    delivery: 1,
    pickup: 2,
    eatin: 3,
    curbside: 4,
    drivethru: 5
  }

  const [state, setState] = useState({
    loading: true,
    options: {
      type: orderTypes[configState?.configs?.default_order_type?.value],
      moment: null
    },
    carts: {},
    confirmAlert,
    alert
  })

  /**
   * Refresh order options and carts from API
   */
  const refreshOrderOptions = async () => {
    try {
      if (!state.loading) {
        setState({ ...state, loading: true })
      }
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const options = {}
      if (userCustomerId) {
        options.query = {
          user_id: userCustomerId
        }
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).orderOptions().get(options)
      if (!error) {
        const { carts, ...options } = result
        state.carts = {}
        carts.forEach(cart => {
          state.carts[`businessId:${cart.business_id}`] = cart
        })
        state.options = {
          ...state.options,
          ...options
        }
      }
      if (error) {
        setAlert({ show: true, content: result })
      }
      const localOptions = await strategy.getItem('options', true)
      if (localOptions) {
        const options = {}
        if (Object.keys(localOptions.address).length > 0) {
          const conditions = [
            { attribute: 'address', value: localOptions?.address?.address }
          ]
          const userId = userCustomerId || session.user.id
          const addressesResponse = await ordering.setAccessToken(session.token).users(userId).addresses().where(conditions).get()
          let address = addressesResponse.content.result.find(address => {
            localOptions.address.internal_number = localOptions.address?.internal_number || null
            localOptions.address.zipcode = localOptions.address?.zipcode || null
            localOptions.address.address_notes = localOptions.address?.address_notes || null

            return address.location.lat === localOptions.address.location.lat &&
              address.location.lng === localOptions.address.location.lng &&
              address.internal_number === localOptions.address.internal_number &&
              address.zipcode === localOptions.address.zipcode &&
              address.address_notes === localOptions.address.address_notes
          })
          if (!address) {
            Object.keys(localOptions.address).forEach(key => localOptions.address[key] === null && delete localOptions.address[key])
            const { content: { error, result } } = await ordering.setAccessToken(session.token).users(userId).addresses().save(localOptions.address)
            if (!error) {
              address = result
            }
          } else {
            await ordering.setAccessToken(session.token).users(userId).addresses(address.id).save({ default: true })
          }
          address && (options.address_id = address.id)
        }
        if (localOptions.type) {
          options.type = localOptions.type
        }
        if (localOptions.moment) {
          options.moment = dayjs.utc(localOptions.moment, 'YYYY-MM-DD HH:mm:ss').unix()
        }
        if (localOptions?.address_id) {
          options.address_id = localOptions?.address_id
        }
        if (options && Object.keys(options).length > 0) {
          updateOrderOptions(options)
        } else {
          setState({ ...state, loading: false })
        }
        await strategy.removeItem('options')
      } else {
        setState({ ...state, loading: false })
      }
    } catch (err) {
      const message = err?.message?.includes('Internal error')
        ? 'INTERNAL_ERROR'
        : err.message
      setAlert({ show: true, content: [message] })
      setState({ ...state, loading: false })
    }
  }

  const checkAddress = (address) => {
    const props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number']
    const values = []
    props.forEach(prop => {
      if (state.options?.address && state.options?.address[prop]) {
        if (prop === 'location') {
          values.push(address[prop].lat === state.options?.address[prop].lat &&
            address[prop].lng === state.options?.address[prop].lng)
        } else {
          values.push(address[prop] === state.options?.address[prop])
        }
      } else {
        values.push(!address[prop])
      }
    })
    return values.every(value => value)
  }

  /**
   * Change order address
   */
  const changeAddress = async (addressId, params) => {
    if (typeof addressId === 'object') {
      const optionsStorage = await strategy.getItem('options', true)
      const options = {
        ...state.options,
        ...optionsStorage,
        address: {
          ...optionsStorage?.address,
          ...addressId
        }
      }

      if (!session.auth) {
        options.type = orderTypes[configState?.configs?.default_order_type?.value]
      }
      await strategy.setItem('options', options, true)
      setState({
        ...state,
        options
      })
      return
    }

    if (params && params?.address && !checkAddress(params?.address)) {
      updateOrderOptions({ address_id: params?.address?.id })
      return
    }

    if (params && params?.isEdit) {
      if (addressId !== state.options.address_id) {
        return
      }
      updateOrderOptions({ address_id: addressId })
      return
    }

    updateOrderOptions({ address_id: addressId })
  }

  /**
   * Change order type
   */
  const changeType = async (type) => {
    const options = {
      ...state.options,
      type
    }
    if (state.options.type === type) {
      return
    }

    if (!session.auth) {
      await strategy.setItem('options', options, true)
      setState({
        ...state,
        options
      })
    }

    updateOrderOptions({ type })
  }

  /**
   * Change order moment
   */
  const changeMoment = async (moment) => {
    const momentUnix = moment ? moment.getTime() / 1000 : null
    const momentFormatted = momentUnix ? dayjs.unix(momentUnix).utc().format('YYYY-MM-DD HH:mm:ss') : null

    const options = {
      ...state.options,
      moment: momentFormatted
    }
    if (state.options.moment === momentFormatted) {
      return
    }

    if (!session.auth) {
      await strategy.setItem('options', options, true)
      setState({
        ...state,
        options
      })
    }

    updateOrderOptions({ moment: momentUnix })
  }
  /**
   * Update order option data
   * @param {object} changes Changes to update order options
   */
  const updateOrderOptions = async (changes) => {
    if (session.auth) {
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        ...changes,
        user_id: userCustomerId || session.user.id
      }
      try {
        setState({ ...state, loading: true })
        const { content: { error, result } } = await ordering
          .setAccessToken(session.token)
          .orderOptions()
          .save(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
        if (!error) {
          const { carts, ...options } = result
          state.carts = {}
          carts.forEach(cart => {
            state.carts[`businessId:${cart.business_id}`] = cart
          })
          state.options = {
            ...state.options,
            ...options
          }
        } else {
          setAlert({ show: true, content: result })
        }
        setState({ ...state, loading: false })
        return !error
      } catch (err) {
        const message = err?.message?.includes('Internal error')
          ? 'INTERNAL_ERROR'
          : err.message
        setAlert({ show: true, content: [message] })
        setState({ ...state, loading: false })
        return false
      }
    }
  }

  /**
   * Add product to cart
   */
  const addProduct = async (product, cart) => {
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        product,
        business_id: cart.business_id,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().addProduct(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_added', product, result)
        events.emit('cart_updated', result)
        events.emit('product_added', product)
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Remove product to cart
   */
  const removeProduct = async (product, cart) => {
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        product: {
          id: product.id,
          code: product.code,
          business_id: product.business_id
        },
        business_id: cart.business_id,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().removeProduct(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_removed', product, result)
        events.emit('cart_updated', result)
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Clear products of cart
   */
  const clearCart = async (uuid) => {
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = JSON.stringify({
        uuid,
        user_id: userCustomerId || session.user.id
      })
      const response = await fetch(`${ordering.root}/carts/clear`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Socket-Id-X': socket?.getId(), Authorization: `Bearer ${session.token}` }, body })
      const { error, result } = await response.json()
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Update product to cart
   */
  const updateProduct = async (product, cart) => {
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        product,
        business_id: cart.business_id,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().updateProduct(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_product_updated', product, result)
        events.emit('cart_updated', result)
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Apply coupon to cart
   */
  const applyCoupon = async (couponData) => {
    if (!couponData.business_id) {
      throw new Error('`business_id` is required.')
    }
    if (typeof couponData.coupon === 'undefined') {
      throw new Error('`coupon` is required.')
    }
    if (state.carts[`businessId:${couponData.business_id}`]?.coupon === couponData.coupon) {
      return
    }
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        business_id: couponData.business_id,
        coupon: couponData.coupon,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().applyCoupon(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_updated', result)
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Apply coupon to cart
   */
  const changeDriverTip = async (businessId, driverTipRate, isFixedPrice) => {
    if (!businessId) {
      throw new Error('`businessId` is required.')
    }
    if (!driverTipRate && driverTipRate !== 0) {
      throw new Error('`driverTipRate` is required.')
    }
    if (!state.carts[`businessId:${businessId}`] || state.carts[`businessId:${businessId}`]?.driver_tip_rate === driverTipRate) {
      return
    }
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        business_id: businessId,
        [isFixedPrice ? 'driver_tip' : 'driver_tip_rate']: driverTipRate,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().changeDriverTip(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_updated', result)
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Change payment method
   */
  const changePaymethod = async (businessId, paymethodId) => {
    if (!businessId) {
      throw new Error('`businessId` is required.')
    }
    if (!paymethodId) {
      throw new Error('`paymethodId` is required.')
    }
    if (!state.carts[`businessId:${businessId}`] || state.carts[`businessId:${businessId}`]?.paymethodId === paymethodId) {
      return
    }
    try {
      setState({ ...state, loading: true })
      const body = {
        business_id: businessId,
        paymethod_id: paymethodId
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts().changePaymethod(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_updated', result)
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return !error
    } catch (err) {
      setState({ ...state, loading: false })
      return false
    }
  }

  /**
   * Place cart
   */
  const placeCart = async (cardId, data) => {
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        ...data,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).carts(cardId).place(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        if (result.status !== 1) {
          state.carts[`businessId:${result.business_id}`] = result
          events.emit('cart_updated', result)
        } else {
          delete state.carts[`businessId:${result.business_id}`]
          const orderObject = {
            id: result.order.uuid,
            business: { name: result.business.name },
            total: result.total,
            tax_total: result.tax,
            delivery_zone_price: result.delivery_price
          }
          events.emit('order_placed', orderObject)
        }
      } else {
        setAlert({ show: true, content: result })
        setState({ ...state, loading: false })
        return
      }
      setState({ ...state, loading: false })
      return { error, result }
    } catch (err) {
      setState({ ...state, loading: false })
      return {
        error: true,
        result: [err.message]
      }
    }
  }

  /**
   * Confirm cart
   */
  const confirmCart = async (cardId, data) => {
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const body = {
        ...data,
        user_id: userCustomerId || session.user.id
      }
      const { content: { error, result, cart } } = await ordering.setAccessToken(session.token).carts(cardId).confirm(body, { headers: { 'X-Socket-Id-X': socket?.getId() } })
      if (!error) {
        if (result.status !== 1) {
          state.carts[`businessId:${result.business_id}`] = result
          events.emit('cart_updated', result)
        } else {
          delete state.carts[`businessId:${result.business_id}`]
        }
      } else if (cart) {
        state.carts[`businessId:${cart.business_id}`] = cart
        events.emit('cart_updated', cart)
      }
      setState({ ...state, loading: false })
      return { error, result }
    } catch (err) {
      setState({ ...state, loading: false })
      return {
        error: true,
        result: [err.message]
      }
    }
  }

  /**
   * Reorder an order and get cart
   */
  const reorder = async (orderId) => {
    try {
      setState({ ...state, loading: true })
      const customerFromLocalStorage = await strategy.getItem('user-customer', true)
      const userCustomerId = customerFromLocalStorage?.id
      const query = userCustomerId
        ? { user_id: userCustomerId }
        : null
      const options = {
        headers: { 'X-Socket-Id-X': socket?.getId() }
      }
      if (query) {
        options.query = query
      }
      const { content: { error, result } } = await ordering.setAccessToken(session.token).orders(orderId).reorder(options)
      if (!error) {
        state.carts[`businessId:${result.business_id}`] = result
        events.emit('cart_added', result)
      } else {
        setAlert({ show: true, content: result })
      }
      setState({ ...state, loading: false })
      return { error, result }
    } catch (err) {
      setState({ ...state, loading: false })
      return { error: true, result: [err.message] }
    }
  }

  const [optionsLocalStorage, setOptionsLocalStorage] = useState(null)

  const getOptionFromLocalStorage = async () => {
    const options = await strategy.getItem('options', true)
    setOptionsLocalStorage(options)
  }

  useEffect(() => {
    if (session.loading || languageState.loading) return
    if (session.auth) {
      refreshOrderOptions()
    }
  }, [session.auth, session.loading, languageState.loading])

  useEffect(() => {
    if (session.loading || configState.loading) return
    if (!session.auth) {
      getOptionFromLocalStorage()
      setState({
        ...state,
        loading: false,
        options: {
          type: optionsLocalStorage?.type || orderTypes[configState?.configs?.default_order_type?.value],
          moment: optionsLocalStorage?.moment || null,
          address: optionsLocalStorage?.address || {}
        }
      })
    }
  }, [session.auth, session.loading, configState])

  /**
   * Update carts from sockets
   */
  useEffect(() => {
    const handleCartUpdate = (cart) => {
      if (cart.status === 1) {
        if (state.carts[`businessId:${cart.business_id}`]) {
          delete state.carts[`businessId:${cart.business_id}`]
        }
      } else {
        state.carts[`businessId:${cart.business_id}`] = {
          ...state.carts[`businessId:${cart.business_id}`],
          ...cart
        }
      }
      setState({ ...state })
    }
    const handleOrderOptionUpdate = ({ carts, ...options }) => {
      const newCarts = {}
      carts.forEach(cart => {
        newCarts[`businessId:${cart.business_id}`] = cart
      })
      const newState = {
        ...state,
        options: {
          ...state.options,
          ...options
        },
        carts: {
          ...state.carts,
          ...newCarts
        }
      }
      setState({ ...newState })
    }
    socket.on('carts_update', handleCartUpdate)
    socket.on('order_options_update', handleOrderOptionUpdate)
    return () => {
      socket.off('carts_update', handleCartUpdate)
      socket.off('order_options_update', handleOrderOptionUpdate)
    }
  }, [state, socket])

  /**
   * Join to carts room
   */
  useEffect(() => {
    if (!session.auth || session.loading) return
    socket.join(`carts_${session?.user?.id}`)
    socket.join(`orderoptions_${session?.user?.id}`)
    return () => {
      socket.leave(`carts_${session?.user?.id}`)
      socket.leave(`orderoptions_${session?.user?.id}`)
    }
  }, [socket, session])

  useEffect(() => {
    let timeout
    if (state.loading && !languageState.loading) {
      timeout = setTimeout(() => {
        if (state.loading && session.auth && !languageState.loading) {
          refreshOrderOptions()
        }
      }, 10000)
    }
    return () => {
      if (typeof timeout === 'number') {
        clearTimeout(timeout)
      }
    }
  }, [state.loading])

  const functions = {
    refreshOrderOptions,
    changeAddress,
    changeType,
    changeMoment,
    addProduct,
    removeProduct,
    updateProduct,
    clearCart,
    applyCoupon,
    changeDriverTip,
    changePaymethod,
    placeCart,
    confirmCart,
    reorder,
    setAlert,
    setConfirm
  }

  const copyState = JSON.parse(JSON.stringify(state))

  return (
    <OrderContext.Provider value={[copyState, functions]}>
      {
        Alert && (
          <Alert
            open={alert.show}
            title={t('ERROR', 'Error')}
            onAccept={() => setAlert({ show: false })}
            onClose={() => setAlert({ show: false })}
            content={alert.content}
          />
        )
      }
      {children}
    </OrderContext.Provider>
  )
}

/**
 * Hook to get and update order state
 */
export const useOrder = () => {
  const orderManager = useContext(OrderContext)
  const warningMessage = () => {
    console.warn('Must use OrderProvider to wrappe the app.')
  }
  /**
   * Functions to avoid fails
   */
  const functionsPlaceholders = {
    refreshOrderOptions: warningMessage,
    changeAddress: warningMessage,
    changeType: warningMessage,
    changeMoment: warningMessage,
    addProduct: warningMessage,
    removeProduct: warningMessage,
    updateProduct: warningMessage,
    clearCart: warningMessage,
    applyCoupon: warningMessage,
    placeCart: warningMessage,
    confirmCart: warningMessage,
    setAlert: warningMessage,
    setConfirm: warningMessage,
    changeDriverTip: warningMessage,
    changePaymethod: warningMessage,
    reorder: warningMessage
  }
  return orderManager || [{}, functionsPlaceholders]
}
