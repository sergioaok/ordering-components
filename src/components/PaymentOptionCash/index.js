import React from 'react'
import PropTypes from 'prop-types'
// import { useOrder } from '../../contexts/OrderContext'

/**
 * Component to manage payment option cash behavior without UI component
 */
export const PaymentOptionCash = (props) => {
  const {
    UIComponent,
    orderTotal
  } = props

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          total={orderTotal}
        />
      )}
    </>
  )
}

PaymentOptionCash.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Flag to know if use props from context or not
   */
  useOrderContext: PropTypes.bool,
  /**
   * Business id to know where order total come from
   */
  businessId: PropTypes.number,
  /**
   * orderTotal, amount of order total
   */
  orderTotal: PropTypes.number,
  /**
   * handler value typed on input cash
   */
  handlerSubmit: PropTypes.func,
  /**
   * Components types before payment option cash
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option cash
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option cash
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option cash
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionCash.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default PaymentOptionCash
