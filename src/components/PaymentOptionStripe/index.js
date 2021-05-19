import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

/**
 * Component to manage payment option stripe behavior without UI component
 */
export const PaymentOptionStripe = (props) => {
  const {
    businessId,
    UIComponent
  } = props

  const [{ token, user }] = useSession()

  const [ordering] = useApi()

  /**
   * Contains and object to save cards, handle loading and error
   */
  const [cardsList, setCardsList] = useState({ cards: [], loading: true, error: null })
  /**
   * save stripe public key
   */
  const [publicKey, setPublicKey] = useState(props.publicKey)

  const [cardSelected, setCardSelected] = useState(null)
  const [cardDefault, setCardDefault] = useState(null)
  const [defaultCardSetActionStatus, setDefaultCardSetActionStatus] = useState({ loading: false, error: null })

  const requestState = {}

  /**
   * method to get cards from API
   */
  const getCards = async () => {
    setCardsList({ ...cardsList, loading: true })
    try {
      const source = {}
      requestState.paymentCards = source
      // The order of paymentCards params is businessId, userId. This sdk needs to be improved in the future,
      const { content: { result } } = await ordering.setAccessToken(token).paymentCards(businessId, user.id).get({ cancelToken: source })
      const defaultCard = result?.find(card => card.default)
      if (defaultCard) {
        setCardDefault({
          id: defaultCard.id,
          type: 'card',
          card: {
            brand: defaultCard.brand,
            last4: defaultCard.last4
          }
        })
      }
      setCardsList({
        ...cardsList,
        loading: false,
        cards: result
      })
    } catch (error) {
      setCardsList({
        ...cardsList,
        loading: false,
        error
      })
    }
  }

  /**
   * method to get cards from API
   */
  const deleteCard = async (card) => {
    try {
      // The order of paymentCards params is businessId, userId, cardId. This sdk needs to be improved in the future,
      const { content: { error } } = await ordering.paymentCards(-1, user.id, card.id).delete()
      if (!error) {
        cardsList.cards = cardsList.cards.filter(_card => _card.id !== card.id)
        setCardsList({
          ...cardsList
        })
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  /**
   * method to set card as default
   */
  const setDefaultCard = async (card) => {
    try {
      setDefaultCardSetActionStatus({ ...defaultCardSetActionStatus, loading: true })
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          business_id: businessId,
          user_id: user.id,
          card_id: card.id
        })
      }
      const functionFetch = `${ordering.root}/payments/stripe/cards/default`
      const response = await fetch(functionFetch, requestOptions)
      const content = await response.json()
      if (!content.error) {
        setCardDefault({
          id: card.id,
          type: 'card',
          card: {
            brand: card.brand,
            last4: card.last4
          }
        })
        setDefaultCardSetActionStatus({ loading: false, error: null })
      } else {
        setDefaultCardSetActionStatus({ loading: false, error: content.result })
      }
    } catch (error) {
      setDefaultCardSetActionStatus({ loading: false, error: error })
    }
  }
  /**
   * Method to get stripe credentials from API
   */
  const getCredentials = async () => {
    try {
      const { content: { result } } = await ordering.setAccessToken(token).paymentCards().getCredentials()
      setPublicKey(result.publishable)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleCardClick = (card) => {
    setCardSelected({
      id: card.id,
      type: 'card',
      card: {
        brand: card.brand,
        last4: card.last4
      }
    })
  }

  const handleNewCard = (card) => {
    cardsList.cards.push(card)
    setCardsList({
      ...cardsList
    })
    handleCardClick(card)
  }

  useEffect(() => {
    if (token) {
      getCards()
      if (!props.publicKey) {
        getCredentials()
      }
    }
    return () => {
      if (requestState.paymentCards) {
        requestState.paymentCards.cancel()
      }
    }
  }, [token])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          cardSelected={cardSelected}
          cardDefault={cardDefault}
          cardsList={cardsList}
          handleCardClick={handleCardClick}
          publicKey={publicKey}
          handleNewCard={handleNewCard}
          deleteCard={deleteCard}
          setDefaultCard={setDefaultCard}
          defaultCardSetActionStatus={defaultCardSetActionStatus}
        />
      )}
    </>
  )
}

PaymentOptionStripe.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business id to get cards from API
   */
  businessId: PropTypes.number.isRequired,
  /**
   * User id to pass in endpoint to get cards from API,
   */
  userId: PropTypes.number,
  /**
   * Components types before payment option stripe
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after payment option stripe
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before payment option stripe
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after payment option stripe
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

PaymentOptionStripe.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default PaymentOptionStripe
