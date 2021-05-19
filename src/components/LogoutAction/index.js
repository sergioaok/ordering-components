import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useConfig } from '../../contexts/ConfigContext'

/**
 * Component to manage logout behavior without UI component
 */
export const LogoutAction = (props) => {
  const {
    UIComponent,
    handleSuccessLogout,
    token,
    isNative,
    useDefualtSessionManager,
    handleCustomLogoutClick
  } = props

  const [ordering] = useApi()
  const [formState, setFormState] = useState({ loading: false, result: { error: false } })

  const [data, { logout }] = useSession()
  const [{ configs }] = useConfig()

  useEffect(() => {
    if (configs?.facebook_id?.value && !isNative) {
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: configs?.facebook_id?.value,
          cookie: true,
          xfbml: false,
          version: 'v7.0',
          status: true
        })
      }

      if (window.document.getElementById('facebook-jssdk')) {
        return
      }

      const js = window.document.createElement('script')
      const fjs = window.document.getElementsByTagName('script')[0]
      js.id = 'facebook-jssdk'
      js.async = true
      js.defer = true
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    }
  }, [configs?.facebook_id?.value])

  /**
   * Default fuction for logout workflow
   */
  const handleLogoutClick = async () => {
    if (handleCustomLogoutClick) {
      handleCustomLogoutClick && handleCustomLogoutClick()
    }
    try {
      setFormState({ ...formState, loading: true })
      const accessToken = token || data.token
      const response = await ordering.setAccessToken(accessToken).users().logout()
      setFormState({
        result: response.content,
        loading: false
      })
      if (!response.content.error) {
        if (useDefualtSessionManager) {
          logout()
        }
        if (handleSuccessLogout) {
          handleSuccessLogout()
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

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          formState={formState}
          handleLogoutClick={handleLogoutClick}
        />
      )}
    </>
  )
}

LogoutAction.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Function to get logout success event
   */
  handleSuccessLogout: PropTypes.func,
  /**
   * Function to get logout error event
   */
  handleErrorLogout: PropTypes.func,
  /**
   * Provide token if you use custom session manager
   */
  token: PropTypes.string,
  /**
   * Enable/Disable default session manager
   * Remove user and token with default session manager
   */
  useDefualtSessionManager: PropTypes.bool,
  /**
   * Custom function
   */
  handleCustomLogoutClick: PropTypes.func
}

LogoutAction.defaultProps = {
  useDefualtSessionManager: true
}

export default LogoutAction
