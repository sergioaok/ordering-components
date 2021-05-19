import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useApi } from '../../contexts/ApiContext'

export const BusinessTypeFilter = (props) => {
  const {
    businessTypes,
    onChangeBusinessType,
    defaultBusinessType,
    UIComponent
  } = props

  const [ordering] = useApi()

  /**
   * This property is used to set in state the current value
   */
  const [typeSelected, setTypeSelected] = useState(defaultBusinessType)

  /**
   * This state save the business type info from API
   */
  const [typesState, setTypesState] = useState({ loading: true, error: null, types: [], pagination: null })

  /**
   * Handle when select value changes
   */
  const handleChangeBusinessType = (businessType) => {
    setTypeSelected(businessType)
    onChangeBusinessType(businessType)
  }

  /**
   * Method to get business types from API
   */
  const getBusinessTypes = async () => {
    try {
      const response = await fetch(`${ordering.root}/business_types`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const { error, result, pagination } = await response.json()
      if (!error) {
        result.unshift({ id: null, enabled: true, image: null, name: 'All' })
        setTypesState({
          ...typesState,
          loading: false,
          types: result,
          pagination
        })
        return
      }
      setTypesState({
        ...typesState,
        loading: false,
        error: result
      })
    } catch (error) {
      setTypesState({
        ...typesState,
        loading: false,
        error: [error || error?.toString() || error?.message]
      })
    }
  }

  useEffect(() => {
    if (businessTypes) {
      setTypesState({
        ...typesState,
        loading: false,
        types: businessTypes
      })
    } else {
      getBusinessTypes()
    }
  }, [businessTypes])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          typesState={typesState}
          businessTypes={businessTypes}
          currentTypeSelected={typeSelected}
          handleChangeBusinessType={handleChangeBusinessType}
        />
      )}
    </>
  )
}

BusinessTypeFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
   */
  businessTypes: PropTypes.arrayOf(PropTypes.object),
  /**
   * Default business type to show
   */
  defaultBusinessType: PropTypes.string,
  /**
   * Components types before business type filter
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after business type filter
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after business type filter
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

BusinessTypeFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default BusinessTypeFilter
