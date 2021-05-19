import React from 'react'
import PropTypes from 'prop-types'

export const BusinessProductsCategories = (props) => {
  const {
    categories,
    onClickCategory,
    UIComponent
  } = props

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          categories={categories}
          handlerClickCategory={onClickCategory}
        />
      )}
    </>
  )
}

BusinessProductsCategories.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * categories, this must be contains an array of products categories
   */
  categories: PropTypes.arrayOf(PropTypes.object),
  /**
   * Components types before business products categories
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business products categories
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business products categories
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business products categories
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessProductsCategories.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default BusinessProductsCategories
