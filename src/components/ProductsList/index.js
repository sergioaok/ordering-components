import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ProductsList = (props) => {
  const {
    categories,
    UIComponent
  } = props

  const [categoriesFiltered, setCategoriesFiltered] = useState(categories)

  useEffect(() => {
    setCategoriesFiltered(
      categories.filter(category => category.id)
    )
  }, [categories])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          categories={categoriesFiltered}
        />
      )}
    </>
  )
}

ProductsList.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * productslist, this must be contains an object with products, loading and error data
   */
  productsList: PropTypes.object,
  /**
   * categories, this must be contains an array of products categories
   */
  categories: PropTypes.arrayOf(PropTypes.object),
  /**
   * flag shows categories with products or only products
   */
  isAllCategory: PropTypes.bool,
  /**
   * Components types before products list
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after products list
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before products list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after products list
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

ProductsList.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default ProductsList
