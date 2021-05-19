import React from 'react'
import PropTypes from 'prop-types'

export const FloatingButton = (props) => {
  const {
    handleClick,
    btnText,
    btnValue,
    UIComponent
  } = props

  return (
    <>
      {UIComponent && (
        <UIComponent
          {...props}
          handleButtonClick={handleClick}
          btnText={btnText}
          btnValue={btnValue}
        />
      )}
    </>
  )
}

FloatingButton.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Text for button
   */
  btnText: PropTypes.string.isRequired,
  /**
   * Value to show in button
   */
  btnValue: PropTypes.number,
  /**
   * handle click button
   */
  handleClick: PropTypes.func,
  /**
   * Components types before Floating button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Components types after Floating button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: PropTypes.arrayOf(PropTypes.elementType),
  /**
   * Elements before Floating button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: PropTypes.arrayOf(PropTypes.element),
  /**
   * Elements after Floating button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: PropTypes.arrayOf(PropTypes.element)
}

FloatingButton.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
}

export default FloatingButton
