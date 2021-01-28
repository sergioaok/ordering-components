import React from 'react'

import { AddressDetailsUI } from '../../components/AddressDetailsUI'
import { AddressDetails } from '../../../src/components/AddressDetails'
import { TestComponent } from '../../components/TestComponent'
import { useConfig } from '../../../src/contexts/ConfigContext'

export const AddressDetailsExample = () => {
  const [{ configs }] = useConfig()
  const props = {
    /**
     * UI Component, this must be containt all graphic elements and use parent props
     */
    UIComponent: AddressDetailsUI,
    /**
     * location, business location with lat, lng and zoom properties
     */
    location: null,
    /**
     * businessId, to get business information
     */
    businessId: 41,
    /**
     * apiKey, google maps api key
     */
    apiKey: configs?.google_maps_api_key?.value || 'AIzaSyBs9iJzThW-gVXM1m9RwYD328Mb34HVL4c',
    /**
     * zoom of google Map
     */
    mapZoom: 15,
    /**
     * Components types before address details
     * Array of type components, the parent props will pass to these components
     */
    beforeComponents: [TestComponent],
    /**
     * Components types after address details
     * Array of type components, the parent props will pass to these components
     */
    afterComponents: [TestComponent],
    /**
     * Elements before address details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    beforeElements: [<p key>Test Element Before</p>],
    /**
     * Elements after address details
     * Array of HTML/Components elements, these components will not get the parent props
     */
    afterElements: [<p key>Test Element After</p>]
  }
  return <AddressDetails {...props} />
}
