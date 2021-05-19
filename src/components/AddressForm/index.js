import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSession } from '../../contexts/SessionContext'
import { useApi } from '../../contexts/ApiContext'
import { useOrder } from '../../contexts/OrderContext'
import { useValidationFields } from '../../contexts/ValidationsFieldsContext'
import { useCustomer } from '../../contexts/CustomerContext'

export const AddressForm = (props) => {
  const {
    UIComponent,
    addressId,
    address,
    useValidationFileds,
    onSaveAddress,
    isSelectedAfterAdd,
    onSaveCustomAddress
  } = props

  const [ordering] = useApi()
  const [validationFields] = useValidationFields()
  const [addressState, setAddressState] = useState({ loading: false, error: null, address: address || {} })
  const [formState, setFormState] = useState({ loading: false, changes: {}, error: null })
  const [{ auth, user, token }] = useSession()
  const requestsState = {}
  const [, { changeAddress }] = useOrder()
  const userId = props.userId || user?.id
  const accessToken = props.accessToken || token
  const [, { setUserCustomer }] = useCustomer()

  const [isEdit, setIsEdit] = useState(false)

  /**
   * Load an address by id
   * @param {number} userId User id for address user
   * @param {number} addressId Address id for address
   */
  const loadAddress = async (userId, addressId) => {
    try {
      setAddressState({ ...addressState, loading: true })
      const source = {}
      requestsState.address = source
      const { content } = await ordering.users(userId).addresses(addressId).get({ accessToken, cancelToken: source })
      setAddressState({
        loading: false,
        error: content.error ? content.result : null,
        address: content.error ? {} : content.result
      })
    } catch (err) {
      if (err.constructor.name !== 'Cancel') {
        setAddressState({
          loading: false,
          error: [err.message],
          address: {}
        })
      }
    }
  }

  /**
   * Update address data
   * @param {EventTarget} e Related HTML event
   */
  const handleChangeInput = (e) => {
    updateChanges({ [e.target.name]: e.target.value })
  }

  /**
   * Update address data
   * @param {object} changes object with changes
   */
  const updateChanges = (changes) => {
    setFormState({
      ...formState,
      changes: {
        ...formState.changes,
        ...changes
      }
    })
  }

  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */
  const showField = (fieldName) => {
    return !useValidationFileds ||
      (!validationFields.loading && !validationFields.fields?.address[fieldName]) ||
      (!validationFields.loading && validationFields.fields?.address[fieldName] &&
        validationFields.fields?.address[fieldName].enabled)
  }

  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */
  const isRequiredField = (fieldName) => {
    return useValidationFileds &&
      !validationFields.loading &&
      validationFields.fields?.address?.[fieldName] &&
      validationFields.fields?.address?.[fieldName]?.enabled &&
      validationFields.fields?.address?.[fieldName]?.required
  }

  /**
   * Function to save current changes
   * Update if address id exist or create if not
   */
  const saveAddress = async (values, userCustomerSetup) => {
    if (onSaveCustomAddress) {
      onSaveCustomAddress(values)
      return
    }
    if (!auth) {
      changeAddress({ ...values, ...formState.changes })
      onSaveAddress && onSaveAddress(formState.changes)
      return
    }
    if (userCustomerSetup) {
      setUserCustomer(userCustomerSetup, true)
    }
    setFormState({ ...formState, loading: true })
    try {
      const { content } = await ordering
        .users(userId)
        .addresses(addressState.address?.id)
        .save({ ...values, ...formState.changes }, { accessToken })
      setFormState({
        ...formState,
        loading: false,
        error: content.error ? content.result : null,
        changes: content.error ? formState.changes : {}
      })
      if (!content.error) {
        setAddressState({
          ...addressState,
          address: content.result
        })
        onSaveAddress && onSaveAddress(content.result)
        if (isSelectedAfterAdd) {
          changeAddress(content.result.id, {
            address: isEdit ? null : content.result,
            isEdit
          })
        }
      }
    } catch (err) {
      setFormState({
        ...formState,
        loading: false,
        error: [err.message],
        address: {}
      })
    }
  }

  useEffect(() => {
    setAddressState({
      ...addressState,
      address: address || {}
    })
  }, [address])

  useEffect(() => {
    if (addressId && !address) {
      loadAddress(userId, addressId)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (requestsState.address) {
        requestsState.address.cancel()
      }
    }
  }, [])

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            formState={formState}
            showField={showField}
            updateChanges={updateChanges}
            handleChangeInput={handleChangeInput}
            isRequiredField={isRequiredField}
            saveAddress={saveAddress}
            addressState={addressState}
            setIsEdit={(val) => setIsEdit(val)}
          />
        )
      }
    </>
  )
}

AddressForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Prop to set address after add
   */
  isSelectedAfterAdd: PropTypes.bool,
  /**
   * Enable to get checkout fields to show/hide fields from Ordering API
   */
  useValidationFileds: PropTypes.bool,
  /**
   * Address object to edit
   */
  address: PropTypes.object,
  /**
   * User id of the address to load from Ordering API
   * Omit if you use a SessionProvier context and the address is of the logged user
   */
  userId: PropTypes.number,
  /**
   * Address id to edit and load from Ordering API
   */
  addressId: PropTypes.number,
  /**
   * Address id to edit and load from Ordering API
   */
  onSaveAddress: PropTypes.func,
  /**
   * Custom function
   */
  onSaveCustomAddress: PropTypes.func,
  /**
   * Components types before address form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after address form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after address form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

AddressForm.defaultProps = {
  useValidationFileds: false,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default AddressForm
