import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const ResetPassword = (props) => {
  const {
    UIComponent,
    code,
    random,
    handleSuccessResetPassword,
    handleCustomResetPassword
  } = props

  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [resetPasswordData, setResetPasswordData] = useState({ code: code, random: random, password: '' })
  const [ordering] = useApi()

  const handleResetPassword = async () => {
    if (handleCustomResetPassword) {
      return handleCustomResetPassword(resetPasswordData)
    }
    try {
      setFormState({ ...formState, loading: true })
      const { response } = await ordering.users().resetPassword(resetPasswordData)
      const result = response.data
      setFormState({
        result: result,
        loading: false
      })
      if (!result.error) {
        if (handleSuccessResetPassword) {
          handleSuccessResetPassword(result.result)
        }
      }
    } catch (error) {
      if (error.constructor.name !== 'Cancel') {
        setFormState({
          result: {
            error: true,
            result: error.message
          },
          loading: false
        })
      }
    }
  }

  const handleChangeInput = e => {
    setResetPasswordData({ ...resetPasswordData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleResetPassword={handleResetPassword}
          handleChangeInput={handleChangeInput}
          resetPasswordData={resetPasswordData}
          formState={formState}
        />
      )}
    </>
  )
}

ResetPassword.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   *  Code is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
   */
  code: PropTypes.string,
  /**
   *  Random is generated with the endpoint Users Forgot Password, injected on the link received on the Forgot Password email.
   */
  random: PropTypes.string,
  /**
   * handleCustomClick, function to get click event and return data without default behavior
   */
  handleCustomResetPassword: PropTypes.func,
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

ResetPassword.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default ResetPassword
