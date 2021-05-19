import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'

/**
 * Component to manage payment option paypal behavior without UI component
 */
export const PaymentOptionPaypal = (props) => {
  const {
    body,
    clientId,
    btnStyle,
    UIComponent,
    handlerChangePaypal
  } = props

  const [, { confirmCart, placeCart }] = useOrder()
  const [isSdkReady, setIsSdkReady] = useState(false)

  useEffect(() => {
    if (!clientId) return
    if (window?.paypal) {
      setIsSdkReady(true)
      return
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
    script.async = true
    script.onload = () => {
      setIsSdkReady(true)
    }
    script.onerror = () => {
      throw new Error('Paypal SDK could not be loaded.')
    }

    document.body.appendChild(script)

    return () => {
      script.onload = null
    }
  }, [clientId])

  const createOrder = async (data, actions) => {
    const params = {
      paymethod_id: body.paymethod_id,
      amount: body.amount,
      delivery_zone_id: body.delivery_zone_id
    }

    const { error, result } = await placeCart(body.cartUuid, params)
    if (error) {
      return null
    }
    return result.pay_reference
  }

  const onApprove = async (data, actions) => {
    const { error, result } = await confirmCart(body.cartUuid)
    if (error) {
      return null
    }
    handlerChangePaypal && handlerChangePaypal(result.order.uuid)
    return result
  }

  const onFail = async (data) => {
    const { result } = await confirmCart(body.cartUuid)
    return result
  }

  /**
   * Assign paypal button to an instance of react dom
   */
  const Button = window?.paypal?.Buttons?.driver('react', {
    React,
    ReactDOM
  })

  return (
    UIComponent && (
      <UIComponent
        {...props}
        isSdkReady={isSdkReady}
        PaypalButton={Button}
        paypalButtonProps={{
          createOrder,
          onApprove,
          onError: onFail,
          onCancel: onFail,
          style: btnStyle
        }}
      />
    )
  )
}

PaymentOptionPaypal.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Object with body data to place order
   */
  body: PropTypes.object.isRequired,
  /**
   * paypal ClientID
   */
  clientId: PropTypes.string.isRequired,
  /**
   * Method to get success response from paypal button
   */
  handlerChangePaypal: PropTypes.func,
  /**
   * Components types before Payment options paypal
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Payment options paypal
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Payment options paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Payment options paypal
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionPaypal.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default PaymentOptionPaypal
