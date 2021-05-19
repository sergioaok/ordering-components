import React from 'react'
import PropTypes from 'prop-types'

export const SingleOrderCard = (props) => {
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

SingleOrderCard.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Order details to render
   */
  order: PropTypes.object.isRequired,
  /**
   * Order type to validate: [active, previous]
   */
  orderType: PropTypes.string.isRequired,
  /**
   * Components types before Single order card
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Single order card
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Single order card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Single order card
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

SingleOrderCard.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default SingleOrderCard
