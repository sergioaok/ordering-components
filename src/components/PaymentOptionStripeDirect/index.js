import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage payment option stripe direct behavior without UI component
 */
export const PaymentOptionStripeDirect = (props) => {
  const {
    UIComponent
  } = props

  const [ordering] = useApi()

  const [{ token }] = useSession()
  /**
   * save stripe public key
   */
  const [stripePK, setStripePK] = useState(null)
  /**
   * Save client id used in stripe
   */
  const [requirements, setRequirements] = useState(null)

  /**
   * Method to get stripe credentials from API
   */
  const getCredentials = async () => {
    // Replace for a sdk method
    const response = await fetch(
      `${ordering.root}/payments/stripe/credentials`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const { result: { publishable } } = await response.json()
    setStripePK(publishable)
  }

  /**
   * Method to get client id for create stripe payment method
   */
  const getRequirements = async () => {
    // Replace for a sdk method
    const response = await fetch(
      `${ordering.root}/payments/stripe/requirements?type=add_card`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const { result } = await response.json()
    setRequirements(result)
  }

  useEffect(() => {
    if (!token) return
    getCredentials()
    getRequirements()
  }, [token])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          stripeKey={stripePK}
          clientSecret={requirements}
        />
      )}
    </>
  )
}

PaymentOptionStripeDirect.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option stripe direct
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option stripe direct
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionStripeDirect.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default PaymentOptionStripeDirect
