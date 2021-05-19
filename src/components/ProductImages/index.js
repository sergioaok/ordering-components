import React from 'react'
import PropTypes from 'prop-types'

export const ProductImages = (props) => {
  const {
    hero,
    gallery,
    UIComponent
  } = props

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          hero={hero}
          gallery={gallery}
        />
      )}
    </>
  )
}

ProductImages.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * hero, this must be contain the main product image
   */
  hero: PropTypes.string,
  /**
   * gallery, this must be contain the array of product images
   */
  gallery: PropTypes.arrayOf(PropTypes.string),
  /**
   * Components types before product images
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after product images
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before product images
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after product images
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductImages.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default ProductImages
