import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
export const OrdersFilter = (props) => {
  const {
    UIComponent,
    driverGroupList
  } = props

  const [singleDriverIds, setSingleDriverIds] = useState([])
  /**
   * This property is used to set in state the current value
   */
  const [filterValues, setFilterValues] = useState({
    orderId: null,
    groupTypes: [],
    dateType: null,
    deliveryFromDatetime: null,
    deliveryEndDatetime: null,
    businessIds: [],
    driverIds: [],
    cityIds: [],
    statuses: [],
    deliveryTypes: [],
    paymethodIds: []
  })

  /**
   * Changer order Id
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeOrderId = (e) => {
    const orderId = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
    setFilterValues({ ...filterValues, orderId })
  }

  /**
   * Change group type
   * * @param {object} groupType Group type
   */
  const handleChangeGroup = (groupType) => {
    let _groupTypes = [...filterValues.groupTypes]
    if (!_groupTypes.includes(groupType)) {
      _groupTypes.push(groupType)
    } else {
      _groupTypes = _groupTypes.filter((type) => type !== groupType)
    }

    // setGroupDriverIds(_driverIds)
    setFilterValues({ ...filterValues, groupTypes: _groupTypes })
  }
  /**
   * Change date type
   * * @param {string} dateType date type
  */
  const handleChangeDateType = (dateType) => {
    const now = dayjs()
    switch (dateType) {
      case 'default':
        setFilterValues({ ...filterValues, dateType: 'default', deliveryFromDatetime: null, deliveryEndDatetime: null })
        break
      case 'today': {
        const today = now.format('YYYY-MM-DD')
        const todayDatetime = dayjs(today).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'today', deliveryFromDatetime: todayDatetime })
        break
      }
      case 'yesterday': {
        const yesterday = now.subtract('1', 'day').format('YYYY-MM-DD')
        const yesterdayDatetime = dayjs(yesterday).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'yesterday', deliveryFromDatetime: yesterdayDatetime })
        break
      }
      case 'last7': {
        const last7day = now.subtract('7', 'day').format('YYYY-MM-DD')
        const last7Datetime = dayjs(last7day).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'last7', deliveryFromDatetime: last7Datetime })
        break
      }
      case 'last30': {
        const last30day = now.subtract('30', 'day').format('YYYY-MM-DD')
        const last30Datetime = dayjs(last30day).format('YYYY-MM-DD HH:mm:ss')
        setFilterValues({ ...filterValues, dateType: 'last30', deliveryFromDatetime: last30Datetime })
        break
      }
      case 'term':
        setFilterValues({ ...filterValues, dateType: 'term', deliveryFromDatetime: null, deliveryEndDatetime: null })
    }
  }
  /**
   * Change start date
   * * @param {date} fromDate start date
  */
  const handleChangeFromDate = (fromDate) => {
    let fromDatetime
    if (fromDate !== null) {
      fromDatetime = dayjs(fromDate).format('YYYY-MM-DD HH:mm:ss')
    } else {
      fromDatetime = null
    }
    setFilterValues({ ...filterValues, deliveryFromDatetime: fromDatetime })
  }
  /**
   * Change end date
   * * @param {date} endDate end date
  */
  const handleChangeEndDate = (endDate) => {
    let endDatetime
    if (endDate !== null) {
      endDatetime = dayjs(endDate).format('YYYY-MM-DD HH:mm:ss')
    } else {
      endDate = null
    }
    setFilterValues({ ...filterValues, deliveryEndDatetime: endDatetime })
  }
  /**
   * Change businesses
   * * @param {number} businessId business id
  */
  const handleChangeBusinesses = (businessId) => {
    let _businessIds = [...filterValues.businessIds]
    if (!_businessIds.includes(businessId)) {
      _businessIds.push(businessId)
    } else {
      _businessIds = _businessIds.filter((_businessId) => _businessId !== businessId)
    }
    setFilterValues({ ...filterValues, businessIds: _businessIds })
  }
  /**
   * Change driver
   * * @param {number} driverId driver id
  */
  const handleChangeDriver = (driverId) => {
    let _driverIds = [...singleDriverIds]
    if (!_driverIds.includes(driverId)) {
      _driverIds.push(driverId)
    } else {
      _driverIds = _driverIds.filter((id) => id !== driverId)
    }
    setSingleDriverIds(_driverIds)
  }
  /**
   * Change city
   * * @param {number} cityId city id of business
  */
  const handleChangeCity = (cityId) => {
    let _cityIds = [...filterValues.cityIds]
    if (!_cityIds.includes(cityId)) {
      _cityIds.push(cityId)
    } else {
      _cityIds = _cityIds.filter((_cityId) => _cityId !== cityId)
    }
    setFilterValues({ ...filterValues, cityIds: _cityIds })
  }
  /**
   * Change order status
   * * @param {number} status status
  */
  const handleChangeOrderStatus = (status) => {
    let _statuses = [...filterValues.statuses]
    if (!_statuses.includes(status)) {
      _statuses.push(status)
    } else {
      _statuses = _statuses.filter((_status) => _status !== status)
    }
    setFilterValues({ ...filterValues, statuses: _statuses })
  }
  /**
   * Change delivery type
   * * @param {number} deliveryType delivery type
  */
  const handleChangeDeliveryType = (deliveryType) => {
    let _deliveryTypes = [...filterValues.deliveryTypes]
    if (!_deliveryTypes.includes(deliveryType)) {
      _deliveryTypes.push(deliveryType)
    } else {
      _deliveryTypes = _deliveryTypes.filter((_deliveryType) => _deliveryType !== deliveryType)
    }
    setFilterValues({ ...filterValues, deliveryTypes: _deliveryTypes })
  }
  /**
   * Change paymethod type
   * * @param {number} paymethodId paymethod Id
  */
  const handleChangePaymethodType = (paymethodId) => {
    let _paymethodIds = [...filterValues.paymethodIds]
    if (!_paymethodIds.includes(paymethodId)) {
      _paymethodIds.push(paymethodId)
    } else {
      _paymethodIds = _paymethodIds.filter((_paymethodId) => _paymethodId !== paymethodId)
    }
    setFilterValues({ ...filterValues, paymethodIds: _paymethodIds })
  }
  /**
   * Reset filter values
  */
  const handleResetFilterValues = () => {
    setFilterValues({
      orderId: null,
      groupTypes: [],
      deliveryFromDatetime: null,
      deliveryEndDatetime: null,
      businessIds: [],
      driverIds: [],
      cityIds: [],
      statuses: [],
      deliveryTypes: [],
      paymethodIds: []
    })
    setSingleDriverIds([])
  }

  useEffect(() => {
    const groupDriverIds = []
    if (filterValues.groupTypes.length > 0) {
      for (const groupId of filterValues.groupTypes) {
        const selectedDriverGroup = driverGroupList.groups.filter((group) => group.id === groupId)
        for (const driver of selectedDriverGroup[0].drivers) {
          groupDriverIds.push(driver.id)
        }
      }
    }
    const _driverIds = [...groupDriverIds, ...singleDriverIds]

    const uniqueDriverIds = _driverIds.filter((v, i, a) => a.indexOf(v) === i)
    setFilterValues({ ...filterValues, driverIds: uniqueDriverIds })
  }, [filterValues.groupTypes, singleDriverIds])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          filterValues={filterValues}
          singleDriverIds={singleDriverIds}
          handleChangeOrderId={handleChangeOrderId}
          handleChangeGroup={handleChangeGroup}
          handleChangeDateType={handleChangeDateType}
          handleChangeFromDate={handleChangeFromDate}
          handleChangeEndDate={handleChangeEndDate}
          handleChangeBusinesses={handleChangeBusinesses}
          handleChangeDriver={handleChangeDriver}
          handleChangeCity={handleChangeCity}
          handleChangeOrderStatus={handleChangeOrderStatus}
          handleChangeDeliveryType={handleChangeDeliveryType}
          handleChangePaymethodType={handleChangePaymethodType}
          handleResetFilterValues={handleResetFilterValues}
        />
      )}
    </>
  )
}

OrdersFilter.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Array that contains business types to filter
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

OrdersFilter.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}
