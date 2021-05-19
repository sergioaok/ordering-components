import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'
import { useSession } from '../../contexts/SessionContext'

/**
 * Component to manage stripe elements form behavior without UI component
 */
export const StripeElementsForm = (props) => {
  const {
    UIComponent,
    toSave
  } = props

  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [requirements, setRequirements] = useState()

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
    toSave && getRequirements()
  }, [token])

  return (
    <UIComponent
      {...props}
      requirements={requirements}
    />
  )
}

StripeElementsForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business id to get cards from API
   */
  businessId: PropTypes.number,
  /**
   * Create card to save or pay
   */
  toSave: PropTypes.bool,
  /**
   * save stripe public key to use stripe form
   */
  publicKey: PropTypes.string,
  /**
   * Save client secret id used in stripe for create a payment method
   */
  clientSecret: PropTypes.string,
  /**
   * method used for handle card token created
   */
  handleSource: PropTypes.func
}

export default StripeElementsForm
