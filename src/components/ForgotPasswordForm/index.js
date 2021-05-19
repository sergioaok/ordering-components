import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage forgot password behavior without UI component
 */
export const ForgotPasswordForm = (props) => {
  const {
    UIComponent,
    defaultEmail,
    handleButtonForgotPasswordClick,
    handleSuccessForgotPassword,
    handleCustomForgotPasswordClick
  } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [formData, setFormData] = useState({ email: defaultEmail || '' })

  /**
   * Default fuction for forgot password workflow
   */
  const handleForgotPasswordClick = async (data) => {
    if (handleCustomForgotPasswordClick) {
      const values = data || formData
      return handleCustomForgotPasswordClick(values)
    }
    try {
      setFormState({ ...formState, loading: true })
      const values = data || formData
      const response = await ordering.users().forgotPassword(values)
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (handleSuccessForgotPassword) {
          handleSuccessForgotPassword(formData.email)
        }
      }
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
    }
  }

  /**
   * Update form data data
   * @param {EventTarget} e Related HTML event
   */
  const hanldeChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          formData={formData}
          hanldeChangeInput={hanldeChangeInput}
          handleButtonForgotPasswordClick={handleButtonForgotPasswordClick || handleForgotPasswordClick}
        />
      )}
    </>
  )
}

ForgotPasswordForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to change default forgot password behavior
   */
  handleButtonForgotPasswordClick: PropTypes.func,
  /**
   * Function to get forgot password success event
   * @param {string} email Email to which it was sent
   */
  handleSuccessForgotPassword: PropTypes.func,
  /**
   * Default email to forgot password form
   */
  defaultEmail: PropTypes.string,
  /**
   * @param {form_data} data
   * handleCustomClick, function to get click event and return data without default behavior
   */
  handleCustomForgotPasswordClick: PropTypes.func,
  /**
   * Components types before forgot password form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after forgot password form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before forgot password form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after forgot password form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to signup page
   * Url to create element link to signup page
   */
  linkToSignup: PropTypes.string,
  /**
   * Url to login page
   * Url to create element link to login
   */
  linkToLogin: PropTypes.string,
  /**
   * Element to custom link to signup
   * You can provide de link element as react router Link or your custom Anchor to signup page
   */
  elementLinkToSignup: PropTypes.element,
  /**
   * Element to custo link to Login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: PropTypes.element
}

ForgotPasswordForm.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default ForgotPasswordForm
