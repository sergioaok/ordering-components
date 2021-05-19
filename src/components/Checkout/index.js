import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage Checkout page behavior without UI component
 */
export const Checkout = (props) => {
  const {
    businessId,
    propsToFetch,
    actionsBeforePlace,
    handleCustomClick,
    onPlaceOrderClick,
    UIComponent
  } = props

  const [ordering] = useApi()

  const [placing, setPlacing] = useState(false)
  const [errors, setErrors] = useState(null)

  /**
   * Order context
   */
  const [orderState, { placeCart }] = useOrder()
  /**
   * Object to save an object with business information
   */
  const [businessDetails, setBusinessDetails] = useState({ business: null, loading: true, error: null })
  /**
   * This must be contains an object with info about paymente selected
   */
  const [paymethodSelected, setPaymethodSelected] = useState(null)
  /**
   * Current cart
   */
  const cart = orderState.carts?.[`businessId:${businessId}`]
  /**
   * Method to get business from API
   */
  const getBusiness = async () => {
    try {
      const { content: { result } } = await ordering.businesses(businessId).select(propsToFetch).get()
      setBusinessDetails({
        ...businessDetails,
        loading: false,
        business: result
      })
    } catch (error) {
      setBusinessDetails({
        ...businessDetails,
        loading: false,
        error
      })
    }
  }

  /**
   * Method to handle click on Place order
   */
  const handlerClickPlaceOrder = async () => {
    let paymethodData = paymethodSelected?.data
    if (['stripe', 'stripe_connect', 'stripe_direct'].includes(paymethodSelected.paymethod.gateway)) {
      paymethodData = {
        source_id: paymethodSelected?.data?.id
      }
    }
    let payload = {
      paymethod_id: paymethodSelected.paymethodId,
      paymethod_data: paymethodSelected?.data,
      offer_id: cart.offer_id,
      amount: cart.total
    }

    if (orderState.options.type === 1) {
      payload = {
        ...payload,
        delivery_zone_id: cart.delivery_zone_id
      }
    }

    if (handleCustomClick) {
      handleCustomClick(payload, paymethodSelected, cart)
      return
    }

    payload = {
      ...payload,
      paymethod_data: paymethodData
    }

    setPlacing(true)
    const result = await placeCart(cart.uuid, payload)

    if (result?.error) {
      setErrors(result?.result)
      return
    }

    const cartResult = result?.result

    if (cartResult?.paymethod_data?.status === 2 && actionsBeforePlace) {
      await actionsBeforePlace(paymethodSelected, result.result)
    }
    setPlacing(false)
    onPlaceOrderClick && onPlaceOrderClick(payload, paymethodSelected, cartResult)
  }

  const handlePaymethodChange = (paymethod) => {
    setPaymethodSelected(paymethod)
  }

  useEffect(() => {
    getBusiness()
  }, [businessId])

  /**
   * Update carts from sockets
   */
  useEffect(() => {
    if (cart && cart.status === 1) {
      const data = {
        paymethod_id: paymethodSelected.paymethodId,
        paymethod_data: paymethodSelected?.data,
        delivery_zone_id: cart.delivery_zone_id,
        offer_id: cart.offer_id,
        amount: cart.total
      }
      onPlaceOrderClick && onPlaceOrderClick(data, paymethodSelected, cart)
    }
  }, [cart])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cart={cart}
          placing={placing}
          errors={errors}
          orderOptions={orderState.options}
          paymethodSelected={paymethodSelected}
          businessDetails={businessDetails}
          handlePaymethodChange={handlePaymethodChange}
          handlerClickPlaceOrder={handlerClickPlaceOrder}
        />
      )}
    </>
  )
}

Checkout.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Custom method to receive props from checkout page
   */
  handleCustomClick: PropTypes.func,
  /**
   * onPlaceOrderClick, function to get click event and return business object after default behavior
   */
  onPlaceOrderClick: PropTypes.func,
  // /**
  //  * handler values from other components
  //  */
  // handlerValues: PropTypes.func,
  /**
   * Components types before Checkout
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Checkout
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Checkout
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

Checkout.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: [],
  propsToFetch: ['id', 'name', 'email', 'cellphone', 'address', 'paymethods', 'logo', 'location']
}

export default Checkout
