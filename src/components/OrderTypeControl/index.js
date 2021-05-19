import React, { useState, useEffect } from 'react'
import PropTypes, { object } from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'

export const OrderTypeControl = (props) => {
  const {
    UIComponent
  } = props
  const [orderState, { changeType }] = useOrder()
  const [typeSelected, setTypeSelected] = useState(null)

  const handleChangeOrderType = (orderType) => {
    setTypeSelected(orderType)
    changeType(orderType)
  }

  useEffect(() => {
    setTypeSelected(orderState.options.type)
  }, [orderState.options.type])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          typeSelected={typeSelected || orderState.options.type}
          handleChangeOrderType={props.handleChangeOrderType || handleChangeOrderType}
        />
      )}
    </>
  )
}

OrderTypeControl.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Order availables to the control
   */
  orderTypes: PropTypes.arrayOf(object),
  /**
   * Custom function to control order type changes
   */
  handleChangeOrderType: PropTypes.func,
  /**
   * Components types before order type control
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order type control
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order type control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order type control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrderTypeControl.defaultProps = {
  orderTypes: [1, 2, 3, 4, 5],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default OrderTypeControl
