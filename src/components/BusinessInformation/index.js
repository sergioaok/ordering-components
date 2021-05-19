import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const BusinessInformation = (props) => {
  const {
    googleMapsControls,
    business,
    optionToShow,
    UIComponent
  } = props

  const [showOption, setShowOption] = useState(optionToShow)
  const [photos, setPhotos] = useState([])
  const [videos, setVideos] = useState([])
  const [location, setLocation] = useState({})

  const onChangeOption = (value) => {
    setShowOption(value)
  }

  useEffect(() => {
    const photos = business?.gallery?.filter(item => item.file)
    const videos = business?.gallery?.filter(item => item.video)
    const location = {
      location: business?.location,
      address: business?.address,
      address_notes: business?.address_notes,
      googleMapsControls
    }
    setPhotos(photos)
    setVideos(videos)
    setLocation(location)
  }, [business])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          businessSchedule={business.schedule || []}
          businessPhotos={photos || []}
          businessVideos={videos || []}
          businessLocation={location || {}}
          optionToShow={showOption}
          onChangeOption={onChangeOption}
        />
      )}
    </>
  )
}

BusinessInformation.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Business, object with all data to render
   */
  business: PropTypes.object,
  /**
   * enable/disable business option of accordeon
   */
  optionToShow: PropTypes.string,
  /**
   * Components types before Business information
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Business information
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Business information
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Business information
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessInformation.defaultProps = {
  business: {},
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default BusinessInformation
