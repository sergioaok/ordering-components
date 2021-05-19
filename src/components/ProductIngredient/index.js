import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component to render product ingredient
 */
export const ProductIngredient = (props) => {
  const {
    UIComponent,
    ingredient,
    onChange
  } = props

  /**
   * Set current state
   */
  const state = { id: ingredient.id, name: ingredient.name, selected: props.state.selected }

  /**
   * Run onChange function with new state
   * @param {object} newState State with changes
   */
  const changeState = (newState) => {
    onChange && onChange(newState, ingredient)
  }

  /**
   * Select/unselect the suboption
   */
  const toggleSelect = () => {
    changeState({ selected: !state.selected })
  }

  return (
    <>
      {
        UIComponent && (
          <UIComponent
            {...props}
            state={state}
            toggleSelect={toggleSelect}
          />
        )
      }
    </>
  )
}

ProductIngredient.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: PropTypes.elementType,
  /**
   * Ingredient object to render UI
   */
  ingredient: PropTypes.object.isRequired,
  /**
   * Current state
   */
  state: PropTypes.shape({
    selected: PropTypes.bool
  }).isRequired,
  /**
   * Function to get ingredient changes
   */
  onChange: PropTypes.func
}

ProductIngredient.defaultProps = {
  state: {}
}

export default ProductIngredient
