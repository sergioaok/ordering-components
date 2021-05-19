import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useEvent } from '../../contexts/EventContext'

export const BusinessesMap = (props) => {
  const {
    UIComponent,
    businessList,
    userLocation,
    setErrors,
    onBusinessCustomClick
  } = props

  const [events] = useEvent()
  const [businessLocations, setBusinessLocations] = useState([])

  /**
   * Getting necessary info for locate business on the map
   */
  const getBusinessListLocations = () => {
    setBusinessLocations(businessList.map(business => {
      return {
        lat: business.location.lat,
        lng: business.location.lng,
        icon: business.logo,
        slug: business.slug
      }
    }))
  }

  /**
   * @param {business_slug} slug
   * handler event when clicks business on the map
   */
  const onBusinessClick = (slug) => {
    if (onBusinessCustomClick) {
      return onBusinessCustomClick(slug)
    }
    events.emit('go_to_page', { page: 'business', params: { store: slug } })
  }

  useEffect(() => {
    getBusinessListLocations()
  }, [businessList])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessLocations={businessLocations}
          userLocation={userLocation}
          onBusinessClick={onBusinessClick}
          setErrors={setErrors}
        />
      )}
    </>
  )
}

BusinessesMap.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   *  Business list must contain location
   */
  businessList: PropTypes.array.isRequired,
  /**
    * User location is used for place center of the map
    */
  userLocation: PropTypes.object,
  /**
   * setter for map errors
   */
  setErrors: PropTypes.func,
  /**
   * handleCustomClick, function to get click event and return business slug without default behavior
   */
  onBusinessCustomClick: PropTypes.func,
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

BusinessesMap.defaultProps = {
  businessList: [],
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default BusinessesMap
