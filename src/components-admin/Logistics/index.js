import React, { useEffect, useState } from 'react'
import PropTypes, { string } from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'

export const Logistics = (props) => {
  const {
    orderId,
    UIComponent
  } = props

  const [ordering] = useApi()
  const [session] = useSession()

  /**
   * Array to save logistics
   */
  const [logisticList, setLogisticList] = useState({ logs: [], loading: true, error: null })

  /**
   * Method to get logistics from API
   */
  const getLogistics = async () => {
    try {
      setLogisticList({ ...logisticList, loading: true })
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`
        }
      }
      const response = await fetch(`${ordering.root}/orders/${orderId}/logs?order_id=${orderId}`, requestOptions)
      const { result } = await response.json()
      setLogisticList({ ...logisticList, loading: false, logs: result })
    } catch (err) {
      setLogisticList({ ...logisticList, loading: false, error: err.message })
    }
  }

  useEffect(() => {
    getLogistics()
  }, [])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          logisticList={logisticList}
        />
      )}
    </>
  )
}

Logistics.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array of drivers props to fetch
   */
  propsToFetch: PropTypes.arrayOf(string),
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

Logistics.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
