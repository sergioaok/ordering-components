import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'

/**
 * Component to manage driver tips behavior without UI component
 */
export const DriverTips = (props) => {
  const {
    UIComponent,
    businessId,
    isFixedPrice,
    useOrderContext
  } = props

  if (useOrderContext && !businessId) {
    throw new Error('`businessId` is required when `useOrderContext` is true.')
  }

  /**
   * Order context
   */
  const [orderState, { changeDriverTip }] = useOrder()

  /**
   * Save percentage selected by user
   */
  const [optionSelected, setOptionSelected] = useState(0)
  /**
   * Amount of driver tip, calculate with order.total and optionSelected
   */
  const [driverTipAmount, setDriverTipAmount] = useState(0)

  /**
   * handler when user change driver tip option
   * @param {number} val
   */
  const handlerChangeOption = (driverTip) => {
    driverTip = typeof driverTip === 'string' ? parseInt(driverTip) :driverTip
    if (useOrderContext) {
      changeDriverTip(businessId, driverTip, isFixedPrice)
    } else {
      setOptionSelected(driverTip)
    }
    props.handlerChangeDriverOption && props.handlerChangeDriverOption(driverTip)
  }

  useEffect(() => {
    const orderDriverTipRate = orderState.carts?.[`businessId:${businessId}`]?.driver_tip_rate || 0
    const orderDriverTip = orderState.carts?.[`businessId:${businessId}`]?.driver_tip || 0

    setOptionSelected(isFixedPrice ? orderDriverTip : orderDriverTipRate)
    setDriverTipAmount(orderDriverTip)
  }, [orderState])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          driverTipAmount={driverTipAmount}
          optionSelected={optionSelected}
          handlerChangeOption={handlerChangeOption}
        />
      )}
    </>
  )
}

DriverTips.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Cart business id
   */
  businessId: PropTypes.number,
  /**
   * Switch to use order context
   */
  useOrderContext: PropTypes.bool,
  /**
   * driver tips options
   */
  driverTipsOptions: PropTypes.arrayOf(PropTypes.number),
  /**
   * method to get option selected
   */
  handlerChangeDriverOption: PropTypes.func,
  /**
   * Components types before driver tips
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after driver tips
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before driver tips
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after driver tips
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

DriverTips.defaultProps = {
  useOrderContext: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default DriverTips
