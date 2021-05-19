import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'

export const SearchOptions = (props) => {
  const {
    UIComponent
  } = props

  const [optionSelected, setOptionSelected] = useState(null)

  const [orderState] = useOrder(null)

  /**
   * Method to handle tabs options
   * @param {String} val
   */
  const onClickOption = (val) => {
    const value = val === optionSelected ? null : val
    setOptionSelected(value)
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          orderState={orderState}
          optionSelected={optionSelected}
          handleClickOption={onClickOption}
        />
      )}
    </>
  )
}

SearchOptions.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before search options
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after search options
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before search options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after search options
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SearchOptions.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default SearchOptions
