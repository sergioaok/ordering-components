import React, { useEffect, useState } from 'react'
import { useEvent } from '../../contexts/EventContext'
import PropTypes from 'prop-types'

export const Analytics = (props) => {
  const {
    trackId,
    children
  } = props

  const [events] = useEvent()
  const [analyticsReady, setAnalyticsReady] = useState(false)

  useEffect(() => {
    if (!trackId) {
      return
    }
    if (window.document.getElementById('google-analytics-sdk')) {
      if (typeof ga !== 'undefined') {
        setAnalyticsReady(true)
      }
      return
    }

    const js = window.document.createElement('script')
    js.id = 'google-analytics-sdk'
    js.async = true
    js.defer = true
    js.src = 'https://www.google-analytics.com/analytics.js'
    js.onload = window?.ga && function () {
      setAnalyticsReady(true)
      window.ga('create', trackId)
      window.ga('require', 'ec')
      window.ga('set', 'page', window.location.pathname)
      window.ga('send', 'pageview')
    }

    window.document.body.appendChild(js)
    return () => {
      js.onload = null
    }
  }, [trackId])

  /**
   * Method to handle Pageview send to analytics
   * @param {String} pageName
   */
  const handlechangeView = (pageName) => {
    window.ga('set', 'page', pageName?.page)
    window.ga('send', 'pageview')
  }
  const handleClickProduct = (product) => {
    window.ga('ec:addProduct', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price
    })
    window.ga('ec:setAction', 'click')
    window.ga('send', 'event', 'UI', 'click', 'add to cart')
  }
  const handleProductAdded = (product) => {
    window.ga('ec:addProduct', {
      id: product.id,
      name: product.name,
      category: product.category_id,
      price: product.price,
      quantity: product.quantity
    })
    window.ga('ec:setAction', 'add')
    window.ga('send', 'event', 'UI', 'click', 'add to cart')
  }
  const handleLogin = (data) => {
    window.ga('set', 'userId', data.id)
  }
  const handleOrderPlaced = (order) => {
    window.ga('ec:setAction', 'purchase', { // Transaction details are provided in an actionFieldObject.
      id: order.id, // (Required) Transaction id (string).
      affiliation: order.business?.name, // Affiliation (string).
      revenue: order.total, // Revenue (number).
      tax: order.tax_total, // Tax (number).
      shipping: order.delivery_zone_price // Shipping (number).
    })
  }
  useEffect(() => {
    console.log('Analytic Ready')
    if (analyticsReady && window.ga) {
      events.on('change_view', handlechangeView)
      events.on('userLogin', handleLogin)
      events.on('product_clicked', handleClickProduct)
      events.on('product_added', handleProductAdded)
      events.on('order_placed', handleOrderPlaced)
    }
    return () => {
      if (analyticsReady && window.ga) {
        events.off('change_view', handlechangeView)
        events.off('userLogin', handleLogin)
        events.off('product_clicked', handleClickProduct)
        events.off('product_added', handleProductAdded)
        events.off('order_placed', handleOrderPlaced)
      }
    }
  }, [analyticsReady])
  return (
    <>
      {children}
    </>
  )
}

Analytics.propTypes = {
  /**
   * Your Google Analytics trackId
   * @see trackId What is trackID ? https://developers.google.com/analytics/devguides/collection/analyticsjs
   */
  trackId: PropTypes.string.isRequired
}

Analytics.defaultProps = {}

export default Analytics
