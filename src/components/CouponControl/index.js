import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useOrder } from '../../contexts/OrderContext'
import { useLanguage } from '../../contexts/LanguageContext'

/**
 * Component to manage coupon form behavior without UI component
 */
export const CouponControl = (props) => {
  const {
    businessId,
    price,
    UIComponent
  } = props

  const [orderState, { applyCoupon }] = useOrder()
  const [confirm, setConfirm] = useState({ open: false, content: null, error: false })
  const [, t] = useLanguage()

  const couponDefault = (
    orderState?.carts &&
    businessId &&
    orderState?.carts?.[`businessId:${businessId}`]?.coupon
  ) || null

  const [couponInput, setCouponInput] = useState(null)

  /**
   * method to manage coupon apply button
   */
  const handleButtonApplyClick = () => {
    applyCoupon({
      business_id: businessId,
      coupon: couponInput
    })
  }

  /**
   * method to manage remove coupon assigned
   */
  const handleRemoveCouponClick = () => {
    applyCoupon({
      business_id: businessId,
      coupon: null
    })
  }

  useEffect(() => {
    if (price < 1) {
      handleRemoveCouponClick()
      setConfirm({ ...confirm, open: true, content: t('COUPON_TOTAL_ERROR', 'The total value of the cart with discount must be at least 1$'), error: true })
    }
  }, [price])

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          couponDefault={couponDefault}
          couponInput={couponInput}
          onChangeInputCoupon={(val => setCouponInput(val))}
          handleButtonApplyClick={handleButtonApplyClick}
          handleRemoveCouponClick={handleRemoveCouponClick}
          confirm={confirm}
          setConfirm={setConfirm}
        />
      )}
    </>
  )
}

CouponControl.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * isDisabled, flag to enable/disable coupon input
   */
  isDisabled: PropTypes.bool,
  /**
   * Components types before coupon control
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after coupon control
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before coupon control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after coupon control
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

CouponControl.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default CouponControl
