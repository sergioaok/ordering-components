import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ProductShare = (props) => {
  const {
    UIComponent,
    slug,
    categoryId,
    productId,
    defaultUrl
  } = props

  const [showShareButton, setShowShareButton] = useState(false)
  const urlToShare = defaultUrl || `${window.location.origin}/store/${slug}?category=${categoryId}&product=${productId}`

  const addToAnyScript = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://static.addtoany.com/menu/page.js'
    script.async = true
    script.defer = true
    script.id = 'addthis_widget'
    document.body.appendChild(script)
  }

  useEffect(() => {
    if (window.document.getElementById('addthis_widget')) {
      return
    }
    addToAnyScript()
  }, [])

  const changeShowCharedButton = (show) => {
    setShowShareButton(show)
    if (show && window.a2a) {
      window.a2a.init()
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          updateShowValue={changeShowCharedButton}
          showShareButton={showShareButton}
          urlToShare={urlToShare}
        />
      )}
    </>
  )
}

ProductShare.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business slug
   */
  slug: PropTypes.string,
  /**
   * product category id
   */
  categoryId: PropTypes.number,
  /**
   * product id
   */
  productId: PropTypes.number,
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element)
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
}

ProductShare.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default ProductShare
