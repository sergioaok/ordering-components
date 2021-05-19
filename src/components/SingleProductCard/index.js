import React from 'react'
import PropTypes from 'prop-types'

export const SingleProductCard = (props) => {
  const {
    UIComponent
  } = props

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
        />
      )}
    </>
  )
}

SingleProductCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Check if a product is sold out status
   */
  isSoldOut: PropTypes.bool,
  /**
   * Product images
   */
  images: PropTypes.string,
  /**
   * Product name
   */
  name: PropTypes.string,
  /**
   * Product description
   */
  description: PropTypes.string,
  /**
   * Product price
   */
  price: PropTypes.number,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SingleProductCard.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default SingleProductCard
