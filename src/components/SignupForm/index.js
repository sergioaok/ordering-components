import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useValidationFields } from '../../contexts/ValidationsFieldsContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage signup behavior without UI component
 */
export const SignupForm = (props) => {
  const {
    UIComponent,
    useChekoutFileds,
    handleButtonSignupClick,
    handleSuccessSignup,
    externalPhoneNumber,
    handleCustomSignup
  } = props
  const requestsState = {}

  const [ordering] = useApi()
  const [, { login }] = useSession()
  const [validationFields] = useValidationFields()

  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [signupData, setSignupData] = useState({ email: '', cellphone: externalPhoneNumber || '', password: '' })
  const [verifyPhoneState, setVerifyPhoneState] = useState({ loading: false, result: { error: false } })
  const [checkPhoneCodeState, setCheckPhoneCodeState] = useState({ loading: false, result: { error: false } })

  /**
   * Default fuction for signup workflow
   */
  const handleSignupClick = async (values) => {
    if (handleCustomSignup) {
      handleCustomSignup(values || signupData)
      return
    }
    try {
      setFormState({ ...formState, loading: true })
      const source = {}
      requestsState.signup = source
      const data = values || signupData
      const response = await ordering.users().save(data, { cancelToken: source })
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (handleSuccessSignup) {
          handleSuccessSignup(response.content.result)
        }
      }
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setFormState({
          result: {
            error: true,
            result: err.message
          },
          loading: false
        })
      }
    }
  }

  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e, isMany) => {
    let currentChanges = {}
    if (isMany) {
      Object.values(e).map(obj => {
        currentChanges = {
          ...currentChanges,
          [obj.name]: obj.value
        }
      })
    } else {
      currentChanges = {
        [e.target.name]: e.target.value
      }
    }

    setSignupData({
      ...signupData,
      ...currentChanges
    })
  }

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  const showField = (fieldName) => {
    return !useChekoutFileds ||
      (!validationFields.loading && !validationFields.fields?.checkout[fieldName]) ||
      (!validationFields.loading && validationFields.fields?.checkout[fieldName] &&
        validationFields.fields?.checkout[fieldName].enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return fieldName === 'password' || (useChekoutFileds &&
      !validationFields.loading &&
      validationFields.fields?.checkout?.[fieldName] &&
      validationFields.fields?.checkout?.[fieldName]?.enabled &&
      validationFields.fields?.checkout?.[fieldName]?.required)
  }

  /**
  * function to send verify code with twilio
  * @param {Object} values object with cellphone and country code values
  */
  const sendVerifyPhoneCode = async (values) => {
    try {
      setVerifyPhoneState({ ...verifyPhoneState, loading: true })
      const response = await fetch(`${ordering.root}/auth/sms/twilio/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          cellphone: values.cellphone,
          country_phone_code: `+${values.country_phone_code}`
        })
      })
      const res = await response.json()
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: res
      })
    } catch (error) {
      setVerifyPhoneState({
        ...verifyPhoneState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  const handleSetCheckPhoneCodeState = (data) => {
    const values = data || { loading: false, result: { error: false } }
    setCheckPhoneCodeState(values)
  }

  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */
  const checkVerifyPhoneCode = async (values) => {
    try {
      setCheckPhoneCodeState({ ...checkPhoneCodeState, loading: true })
      const response = await fetch(`${ordering.root}/auth/sms/twilio`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })
      const res = await response.json()
      if (!res?.error && res?.result?.id) {
        login({
          user: res?.result,
          token: res?.result?.session?.access_token
        })
        if (handleSuccessSignup) {
          handleSuccessSignup(res?.result)
        }
      }
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: res
      })
    } catch (error) {
      setCheckPhoneCodeState({
        ...checkPhoneCodeState,
        loading: false,
        result: {
          error: error.message
        }
      })
    }
  }

  useEffect(() => {
    return () => {
      if (requestsState.signup) {
        requestsState.signup.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          validationFields={validationFields}
          signupData={signupData}
          showField={showField}
          isRequiredField={isRequiredField}
          verifyPhoneState={verifyPhoneState}
          checkPhoneCodeState={checkPhoneCodeState}
          setCheckPhoneCodeState={handleSetCheckPhoneCodeState}
          handleChangeInput={handleChangeInput}
          handleButtonSignupClick={handleButtonSignupClick || handleSignupClick}
          handleSendVerifyCode={sendVerifyPhoneCode}
          handleCheckPhoneCode={checkVerifyPhoneCode}
        />
      )}
    </>
  )
}

SignupForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to change default signup behavior
   */
  handleButtonSignupClick: PropTypes.func,
  /**
   * Function to get signup success event
   * @param {Object} user User with session data
   */
  handleSuccessSignup: PropTypes.func,
  /**
   * Function to continue as guest behavior
   */
  handleContinueAsGuest: PropTypes.func,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useChekoutFileds: PropTypes.bool,
  /**
   * Custom function
   */
  handleCustomSignup: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return reset password data without default behavior
   */
  handleCustomSendReview: PropTypes.func,
  /**
   * Components types before signup form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after signup form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after signup form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: PropTypes.string,
  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: PropTypes.element
}

SignupForm.defaultProps = {
  useChekoutFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default SignupForm
