import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to manage stripe redirect form behavior without UI component
 */
export const StripeRedirectForm = (props) => {
  const {
    UIComponent,
    handleStripeRedirect
  } = props

  /**
   * Method to handle all workflow about stripe redirect page
   * @param {Object} param0 object with name, email and paydata from stripe form
   */
  const handleSubmitPaymentMethod = async ({ type, name, email }) => {
    handleStripeRedirect && handleStripeRedirect({
      type,
      owner: {
        name,
        email
      }
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleSubmitPaymentMethod={handleSubmitPaymentMethod}
        />
      )}
    </>
  )
}

StripeRedirectForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before stripe redirect form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after stripe redirect form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before stripe redirect form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after stripe redirect form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

StripeRedirectForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default StripeRedirectForm
