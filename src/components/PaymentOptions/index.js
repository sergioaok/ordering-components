import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useOrder } from '../../contexts/OrderContext'
import { useApi } from '../../contexts/ApiContext'

const paymethodsExisting = ['stripe', 'stripe_direct', 'stripe_connect', 'paypal']
const paymethodsNotAllowed = ['paypal_express', 'authorize']
const paymethodsCallcenterMode = ['cash', 'card_delivery']

/**
 * Component to manage payment options behavior without UI component
 */
export const PaymentOptions = (props) => {
  const {
    isLoading,
    paymethods,
    businessId,
    isCustomerMode,
    onPaymentChange,
    paymethodsCallCenterCustom,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [orderState, { changePaymethod }] = useOrder()
  const orderTotal = orderState.carts?.[`businessId:${businessId}`]?.total || 0

  const [paymethodsList, setPaymethodsList] = useState({ paymethods: [], loading: true, error: null })
  const [paymethodSelected, setPaymethodsSelected] = useState(null)
  const [paymethodData, setPaymethodData] = useState({})

  const parsePaymethods = (paymethods) => {
    const _paymethods = paymethods && paymethods
      .filter(credentials => isCustomerMode
        ? !paymethodsNotAllowed.includes(credentials?.paymethod?.gateway) &&
        paymethodsCallCenterCustom ? paymethodsCallCenterCustom.includes(credentials?.paymethod?.gateway) : paymethodsCallcenterMode.includes(credentials?.paymethod?.gateway)
        : !paymethodsNotAllowed.includes(credentials?.paymethod?.gateway))
      .map(credentials => {
        return {
          ...credentials?.paymethod,
          sandbox: credentials?.sandbox,
          credentials: credentials?.data
        }
      })
    return _paymethods
  }

  /**
   * Method to get payment options from API
   */
  const getPaymentOptions = async () => {
    try {
      const { content: { error, result } } = await ordering.businesses(businessId).get()
      if (!error) {
        paymethodsList.paymethods = parsePaymethods(result.paymethods)
      }
      setPaymethodsList({
        ...paymethodsList,
        error: error ? result : null,
        loading: false,
        paymethods: error ? [] : parsePaymethods(result.paymethods)
      })
    } catch (error) {
      setPaymethodsList({
        ...paymethodsList,
        loading: false,
        error: [error.message]
      })
    }
  }

  useEffect(() => {
    if (paymethods) {
      console.log(orderState)
      const orderPaymethodId = orderState.carts?.[`businessId:${businessId}`]?.paymethod_id || null
      // const orderPaymethodData = orderState.carts?.[`businessId:${businessId}`]?.paymethod_data || null
      console.log(paymethods)
      console.log(orderPaymethodId)

      const orderPaymethod = paymethods.find(paymethod => paymethod.paymethod_id === orderPaymethodId)
      console.log('orderPaymethod ', orderPaymethod)

      if (orderPaymethod) {
        setPaymethodsSelected(orderPaymethod.paymethod)
      }
      // setDriverTipAmount(orderDriverTip)
    }
  }, [orderState, paymethods])

  /**
   * Method to set payment option selected by user
   * @param {Object} val object with information of payment method selected
   */
  const handlePaymethodClick = (paymethod) => {
    setPaymethodsSelected(paymethod)
    handlePaymethodDataChange({})
  }

  const handlePaymethodDataChange = (data) => {
    if (paymethodSelected !== null) {
      changePaymethod(businessId, paymethodSelected.id, JSON.stringify(data))
    }
    setPaymethodData(data)
    if (paymethodSelected) {
      onPaymentChange && onPaymentChange({
        paymethodId: paymethodSelected.id,
        gateway: paymethodSelected.gateway,
        paymethod: paymethodSelected,
        data
      })
    } else {
      onPaymentChange && onPaymentChange(null)
    }
  }

  useEffect(() => {
    if (
      paymethodSelected &&
      (['card_delivery', 'cash', 'stripe_redirect'].includes(paymethodSelected?.gateway) ||
      !paymethodsExisting.includes(paymethodSelected?.gateway))
    ) {
      onPaymentChange && onPaymentChange({
        paymethodId: paymethodSelected.id,
        gateway: paymethodSelected.gateway,
        paymethod: paymethodSelected,
        data: {}
      })
    } else if (paymethodSelected === null && onPaymentChange) {
      onPaymentChange(null)
    }
  }, [paymethodSelected])

  useEffect(() => {
    if (isLoading) return
    if (paymethods) {
      setPaymethodsList({
        ...paymethodsList,
        loading: false,
        paymethods: parsePaymethods(paymethods)
      })
    } else {
      if (businessId) {
        getPaymentOptions()
      } else {
        setPaymethodsList({
          ...paymethodsList,
          loading: false
        })
      }
    }
  }, [isLoading])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderTotal={orderTotal}
          paymethodsList={paymethodsList}
          paymethodSelected={paymethodSelected}
          paymethodData={paymethodData}
          handlePaymethodClick={handlePaymethodClick}
          handlePaymethodDataChange={handlePaymethodDataChange}
        />
      )}
    </>
  )
}

PaymentOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Options, this must be containt an array of payment options
   */
  paymethods: PropTypes.array,
  /**
   * businessId, this must be contains business id to fetch business from API
   */
  businessId: PropTypes.number,
  /**
   * Get option selected
   */
  onPaymentChange: PropTypes.func,
  /**
   * Components types before Payment Options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Payment Options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Payment Options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
