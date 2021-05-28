import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const AdminOrderDetails = (props) => {
  const {
    orderId,
    propsToFetch,
    asDashboard,
    hashKey,
    userCustomerId,
    UIComponent
  } = props

  const [{ user, token, loading }] = useSession()
  const [ordering] = useApi()
  const [orderState, setOrderState] = useState({ order: null, loading: !props.order, error: null })
  const [messageErrors, setMessageErrors] = useState({ status: null, loading: false, error: null })
  const [actionStatus, setActionStatus] = useState({ loading: false, error: null })
  const [messages, setMessages] = useState({ loading: true, error: null, messages: [] })
  const [messagesReadList, setMessagesReadList] = useState(false)

  const socket = useWebsocket()

  const accessToken = props.accessToken || token

  /**
   * Method to format a price number
   * @param {Number} price
   */
  const formatPrice = price => price && `$ ${price.toFixed(2)}`

  /**
   * Method to Load message for first time
   */
  const loadMessages = async () => {
    try {
      setMessages({ ...messages, loading: true })
      const url = `${ordering.root}/orders/${orderId}/messages?mode=dashboard`
      const response = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` } })
      const { error, result } = await response.json()
      if (!error) {
        setMessages({
          messages: result,
          loading: false,
          error: null
        })
      } else {
        setMessages({
          ...messages,
          loading: false,
          error: result
        })
      }
    } catch (error) {
      setMessages({ ...messages, loading: false, error: [error.Messages] })
    }
  }

  /**
   * Method to send a message
   * @param {string} spot
   */
  const sendMessage = async (spot) => {
    try {
      setMessageErrors({
        ...messageErrors,
        loading: true
      })
      const { status } = await fetch(`${ordering.root}/orders/${orderId}/messages`, {
        method: 'post',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          can_see: '0,2,3',
          comment: `I am on the parking number: ${spot}`,
          order_id: orderId,
          type: 2
        })
      })
      setMessageErrors({
        ...messageErrors,
        loading: false,
        status
      })
    } catch (e) {
      setMessageErrors({
        ...messageErrors,
        loading: false,
        error: [e.message]
      })
    }
  }

  /**
   * handler send message with spot info
   * @param {number} param0
   */
  const handlerSubmitSpotNumber = ({ spot }) => {
    sendMessage(spot)
  }

  /**
   * Method to get order from API
   */
  const getOrder = async () => {
    const options = {}
    if (hashKey) {
      options.headers = {
        'X-uuid-access-X': hashKey
      }
    }
    if (userCustomerId) {
      options.query = {
        mode: 'dashboard'
      }
    }
    try {
      setOrderState({
        ...orderState,
        loading: true
      })
      let functionFetch
      if (propsToFetch) {
        functionFetch = asDashboard
          ? ordering.setAccessToken(token).orders(orderId).asDashboard().select(propsToFetch)
          : ordering.setAccessToken(token).orders(orderId).select(propsToFetch)
      } else {
        functionFetch = asDashboard
          ? ordering.setAccessToken(token).orders(orderId).asDashboard()
          : ordering.setAccessToken(token).orders(orderId)
      }
      const { content: { result } } = await functionFetch.get()
      const order = Array.isArray(result) ? null : result
      setOrderState({
        ...orderState,
        loading: false,
        order
      })
    } catch (e) {
      setOrderState({
        ...orderState,
        loading: false,
        error: [e.message]
      })
    }
  }
  /**
   * Method to change order status from API
   * @param {object} order orders id and new status
   */
  const handleUpdateOrderStatus = async (order) => {
    try {
      setActionStatus({ ...actionStatus, loading: true })
      const requestsState = {}
      const source = {}
      requestsState.updateOrder = source
      const { content } = await ordering.setAccessToken(token).orders(order.id).save({ status: order.newStatus }, { cancelToken: source })
      setActionStatus({
        loading: false,
        error: content.error ? content.result : null
      })
    } catch (err) {
      setActionStatus({ ...actionStatus, loading: false, error: [err.message] })
    }
  }

  const readMessages = async () => {
    const messageId = messages?.messages[messages?.messages?.length - 1]?.id
    try {
      const response = await fetch(`${ordering.root}/orders/${orderId}/messages/${messageId}/read`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      const { result } = await response.json()

      setMessagesReadList(result)
    } catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    if (props.order) {
      setOrderState({
        ...orderState,
        order: props.order
      })
    } else {
      getOrder()
    }
  }, [orderId])

  useEffect(() => {
    if (orderState.loading || loading) return
    const handleUpdateOrder = (order) => {
      if (order.id !== orderState.order.id) return
      delete order.total
      delete order.subtotal
      setOrderState({
        ...orderState,
        order: Object.assign(orderState.order, order)
      })
    }
    if (!asDashboard) {
      socket.join(`orders_${user.id}`)
    }
    socket.on('update_order', handleUpdateOrder)
    return () => {
      if (!asDashboard) {
        socket.leave(`orders_${user.id}`)
      }
      socket.off('update_order', handleUpdateOrder)
    }
  }, [orderState.order, socket, loading])

  useEffect(() => {
    loadMessages()
  }, [orderId])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          order={orderState}
          messageErrors={messageErrors}
          actionStatus={actionStatus}
          formatPrice={formatPrice}
          handlerSubmit={handlerSubmitSpotNumber}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
          messages={messages}
          setMessages={setMessages}
          messagesReadList={messagesReadList}
          readMessages={readMessages}
        />
      )}
    </>
  )
}

AdminOrderDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
  /**
   * This must be contains orderId to fetch
   */
  orderId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * Order, this must be contains an object with all order info
   */
  order: PropTypes.object,
  /**
   * Components types before order details
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after order details
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after order details
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AdminOrderDetails.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
