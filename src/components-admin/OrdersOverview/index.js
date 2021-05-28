import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useWebsocket } from '../../contexts/WebsocketContext'

export const OrdersOverview = (props) => {
  const { UIComponent } = props

  const [ordering] = useApi()
  const requestsState = {}

  const socket = useWebsocket()
  const [{ token, loading }] = useSession()

  /**
   * Object to save pending orders
   */
  const [ordersOverviewStatus, setOrdersOverviewStatus] = useState({
    loading: true,
    overview: {},
    error: null
  })

  /**
   * Method to get total, pending, in progress, completed and cacelled orders quantity from Result
   */
  const getOrdersStatusQuantity = (result) => {
    let _totalQuantity = 0
    let _pendingQuantity = 0
    let _inProgressQuantity = 0
    let _completedQuantity = 0
    let _cancelledQuantity = 0
    for (const order of result) {
      _totalQuantity += order.quantity
      if (order.status === 0) {
        _pendingQuantity += order.quantity
      }
      if (
        order.status === 3 ||
        order.status === 4 ||
        order.status === 7 ||
        order.status === 8 ||
        order.status === 9
      ) {
        _inProgressQuantity += order.quantity
      }
      if (order.status === 1 || order.status === 11) {
        _completedQuantity += order.quantity
      }
      if (
        order.status === 2 ||
        order.status === 5 ||
        order.status === 6 ||
        order.status === 10 ||
        order.status === 12
      ) {
        _cancelledQuantity += order.quantity
      }
    }
    return {
      total: _totalQuantity,
      pending: _pendingQuantity,
      inProgress: _inProgressQuantity,
      completed: _completedQuantity,
      cancelled: _cancelledQuantity
    }
  }

  /**
   * Method to get orders of selected driver from API
   */
  const getOrdersOverview = async () => {
    try {
      setOrdersOverviewStatus({
        ...ordersOverviewStatus,
        loading: true
      })
      const source = {}
      requestsState.ordersOverview = source
      const { content: { result } } = await ordering.setAccessToken(token).orders().summary({ cancelToken: source })
      const _result = getOrdersStatusQuantity(result)
      setOrdersOverviewStatus({
        ...ordersOverviewStatus,
        overview: _result,
        loading: false
      })
    } catch (error) {
      setOrdersOverviewStatus({
        ...ordersOverviewStatus,
        loading: false,
        error
      })
    }
  }
  /**
   * Method to update orders overview for order update
   * @param {Object} updateData state update data
   */
  const updateOrdersOverview = (updateData) => {
    const pendingState = [0]
    const inProgressState = [3, 4, 7, 8, 9]
    const completedState = [1, 11]
    const cancelledState = [2, 5, 6, 10, 12]

    const _overview = { ...ordersOverviewStatus.overview }

    if (pendingState.includes(updateData.old)) {
      _overview.pending = _overview.pending - 1
    } else if (inProgressState.includes(updateData.old)) {
      _overview.inProgress = _overview.inProgress - 1
    } else if (completedState.includes(updateData.old)) {
      _overview.completed = _overview.completed - 1
    } else if (cancelledState.includes(updateData.old)) {
      _overview.cancelled = _overview.cancelled - 1
    }

    if (pendingState.includes(updateData.new)) {
      _overview.pending = _overview.pending + 1
    } else if (inProgressState.includes(updateData.new)) {
      _overview.inProgress = _overview.inProgress + 1
    } else if (completedState.includes(updateData.new)) {
      _overview.completed = _overview.completed + 1
    } else if (cancelledState.includes(updateData.new)) {
      _overview.cancelled = _overview.cancelled + 1
    }

    setOrdersOverviewStatus({ ...ordersOverviewStatus, overview: _overview })
  }

  const isStateUpdate = (data) => {
    if (Array.isArray(data)) {
      for (const _data of data) {
        if (_data.attribute === 'status') return true
      }
    } else {
      if (data === null) return false
      if (data.attribute === 'status') return true
    }
    return false
  }

  useEffect(() => {
    if (ordersOverviewStatus.loading || loading) return
    const handleUpdateOrder = (order) => {
      const stateUpdateData = order.history.filter(history => isStateUpdate(history.data))
      if (stateUpdateData.length === 0) return
      const lastStateUpdateData = stateUpdateData[stateUpdateData.length - 1].data
      const statusChangeState = lastStateUpdateData.filter(data => isStateUpdate(data))
      updateOrdersOverview(statusChangeState[0])
    }
    const handleRegisterOrder = (order) => {
      const _overview = { ...ordersOverviewStatus.overview }
      _overview.total += 1
      _overview.pending += 1
      setOrdersOverviewStatus({ ...ordersOverviewStatus, overview: _overview })
    }
    socket.join('orders')
    socket.on('update_order', handleUpdateOrder)
    socket.on('orders_register', handleRegisterOrder)
    return () => {
      socket.leave('orders')
      socket.off('update_order', handleUpdateOrder)
      socket.off('orders_register', handleRegisterOrder)
    }
  }, [ordersOverviewStatus.overview, socket, loading])

  useEffect(() => {
    getOrdersOverview()

    return () => {
      if (requestsState.ordersOverview) {
        requestsState.ordersOverview.cancel()
      }
    }
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent {...props} ordersOverviewList={ordersOverviewStatus} />
      )}
    </>
  )
}

OrdersOverview.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Components types before my orders
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after my orders
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after my orders
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

OrdersOverview.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
