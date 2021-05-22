import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const GoogleLoginButton = (props) => {
  const {
    UIComponent,
    onSuccess,
    onFailure,
    onRequest,
    responseType,
    handleSuccessGoogleLogin,
    handleSuccessGoogleLogout,
    initParams,
    buttonStyle,
    handleGoogleLoginClick
  } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })
  const [googleStatus, setGoogleStatus] = useState({ loaded: false, logged: false })
  let wasUnmounted = false

  useEffect(() => {
    insertGapiScript()
    return () => {
      wasUnmounted = true
      const element = document.getElementById('google-login')
      if (element) {
        element.parentNode.removeChild(element)
      }
    }
  }, [])

  /**
   * loading script for the google's api
   */
  const insertGapiScript = () => {
    const js = window.document.createElement('script')
    js.id = 'google-login'
    js.src = 'https://apis.google.com/js/api.js'
    js.async = true
    js.defer = true
    js.onload = () => {
      initializeGoogleSignIn()
    }
    window.document.body.appendChild(js)
  }

  /**
   * Start Login google
   */
  const initializeGoogleSignIn = () => {
    window.gapi.load('auth2', () => {
      const GoogleAuth = window.gapi.auth2.getAuthInstance()
      if (!GoogleAuth) {
        window.gapi.auth2
          .init(initParams)
          .then(
            async (res) => {
              if (!wasUnmounted) {
                setGoogleStatus({ ...googleStatus, loaded: true })
                const signedIn = res.isSignedIn.get()
                if (signedIn) {
                  handleSigninSuccess(res.currentUser.get())
                }
              }
            },
            () => {
              setGoogleStatus({ ...googleStatus, loaded: true })
            }
          ).catch(() => {})
      } else if (GoogleAuth.isSignedIn.get()) {
        if (!wasUnmounted) {
          setGoogleStatus({ ...googleStatus, loaded: true })
          handleSigninSuccess(GoogleAuth.currentUser.get())
        }
      } else if (!wasUnmounted) {
        wasUnmounted && setGoogleStatus({ ...googleStatus, loaded: true })
      }
    })
    // window.gapi.load('signin2', () => {
    //   if (!wasUnmounted) {
    //     window.gapi.signin2.render('my-signin2', {
    //       ...buttonStyle,
    //       onsuccess: onSuccess,
    //       onfailure: onFailure
    //     })
    //   }
    // })
  }

  /**
   * handling response of google
   * @param {EventTarget} e Click button event
   */
  const signIn = (e) => {
    if (e) {
      e.preventDefault() // to prevent submit if used within form
    }
    if (googleStatus.loaded) {
      const GoogleAuth = window.gapi.auth2.getAuthInstance()
      if (onRequest) {
        onRequest()
      }
      if (responseType === 'code') {
        GoogleAuth.grantOfflineAccess(initParams).then(
          (res) => onSuccess(res),
          (err) => onFailure(err)
        )
      } else {
        GoogleAuth.signIn(initParams).then(
          (res) => {
            setFormState({ loading: false, result: { error: false } })
            setGoogleStatus({ ...googleStatus, logged: true })
            handleSigninSuccess(res)
          },
          (err) => {
            setFormState({ loading: false, result: { error: true, result: 'Error login with Google' } })
            if (onFailure) {
              onFailure(err)
            }
          }
        )
      }
    }
  }

  const signOut = (e) => {
    if (e) {
      e.preventDefault() // to prevent submit if used within form
    }
    if (googleStatus.loaded) {
      const GoogleAuth = window.gapi.auth2.getAuthInstance()

      GoogleAuth.signOut().then(
        GoogleAuth.disconnect().then(() => {
          setFormState({ loading: false, result: { error: false } })
          setGoogleStatus({ ...googleStatus, logged: false })
          if (handleSuccessGoogleLogout) {
            handleSuccessGoogleLogout()
          }
        })
      )
    }
  }
  /**
   * Function that return token of the user
   * @param {object} res from Google
   */
  const handleSigninSuccess = async (res) => {
    if (handleGoogleLoginClick) {
      handleGoogleLoginClick(res)
      return
    }
    const basicProfile = res.getBasicProfile()
    const authResponse = res.getAuthResponse()

    res.googleId = basicProfile.getId()
    res.tokenObj = authResponse
    res.tokenId = authResponse.id_token
    res.accessToken = authResponse.access_token
    res.profileObj = {
      googleId: basicProfile.getId(),
      imageUrl: basicProfile.getImageUrl(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName(),
      givenName: basicProfile.getGivenName(),
      familyName: basicProfile.getFamilyName()
    }

    // login with backend
    try {
      setFormState({ ...formState, loading: true })
      const response = await ordering.users().authGoogle({ access_token: authResponse?.access_token })
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (handleSuccessGoogleLogin) {
          handleSuccessGoogleLogin(response.content.result)
        }
        if (onSuccess) {
          onSuccess(response)
        }
      } else {
        signOut()
      }
    } catch (err) {
      setFormState({
        result: {
          error: true,
          result: err.message
        },
        loading: false
      })
      signOut()
    }
  }

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          googleStatus={googleStatus}
          signIn={signIn}
          signOut={signOut}
        />
      )}
    </>
  )
}

GoogleLoginButton.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
    * property to get response code if type "code"
    */
  responseType: PropTypes.string,
  /**
     * Function to get login with google success event
     * @param {object} user User logged
     */
  handleSuccessGoogleLogin: PropTypes.func,
  /**
     * handling response of google
     * @param {Object} result google response when the result is success
     */
  onSuccess: PropTypes.func,
  /**
     * handling response of google
     * @param {Object} result google response when the result is error
     */
  onFailure: PropTypes.func,
  /**
     * handling response of google
     * google response when the user is logging
     */
  onRequest: PropTypes.func,
  /**
   * loading script for the google's api
   */
  insertGapiScript: PropTypes.func,
  /**
   * Start Login google
   */
  initializeGoogleSignIn: PropTypes.func,
  /**
   * handling response of google
   */
  signIn: PropTypes.func,
  /**
   * Function that return token of the user
   */
  handleSigninSuccess: PropTypes.func,
  /**
   * @param {google_response} res
   * handleCustomClick, function to get click event and return google response without default behavior
   */
  handleGoogleLoginClick: PropTypes.func,
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

GoogleLoginButton.defaultProps = {
  responseType: '',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
