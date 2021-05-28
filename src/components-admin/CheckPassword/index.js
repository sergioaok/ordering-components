import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

export const CheckPassword = (props) => {
  const {
    UIComponent
  } = props
  const [ordering] = useApi()
  const [{ token }] = useSession()

  const [passwordValue, setPasswordValue] = useState(null)
  const [checkPasswordStatus, setCheckPasswordStatus] = useState({ result: null, loading: false, error: null })

  /**
   * Change text to password
   * @param {string} password Search value
   */
  const handleChangePassword = (password) => {
    setPasswordValue(password)
  }

  /**
   * Method to confirm password from API
   */
  const getCheckPassword = async () => {
    try {
      setCheckPasswordStatus({ ...checkPasswordStatus, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ password: passwordValue })
      }
      const response = await fetch(`${ordering.root}/users/check_password`, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCheckPasswordStatus({ ...checkPasswordStatus, loading: false, result: content.result, error: null })
      } else {
        setCheckPasswordStatus({ ...checkPasswordStatus, loading: false, error: content.result })
      }
    } catch (err) {
      setCheckPasswordStatus({ ...checkPasswordStatus, loading: false, error: err })
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          checkPasswordStatus={checkPasswordStatus}
          handleChangePassword={handleChangePassword}
          getCheckPassword={getCheckPassword}
        />
      )}
    </>
  )
}

CheckPassword.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CheckPassword.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
