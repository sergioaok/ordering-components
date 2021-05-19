import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to render product options
 */
export const ProductOption = (props) => {
  const {
    UIComponent
  } = props

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
          />
        )
      }
    </>
  )
}

ProductOption.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Option object to render UI
   */
  option: PropTypes.object.isRequired,
  /**
   * Flag error
   */
  error: PropTypes.bool
}

ProductOption.defaultProps = {
  error: false
}

export default ProductOption
