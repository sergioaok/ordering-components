import React from 'react'

export const GoogleLoginUI = (props) => {
  const {
    signIn,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements
  } = props

  return (
    <>
      {beforeElements.map((BeforeElement, i) => (
        <React.Fragment key={i}>{BeforeElement}</React.Fragment>
      ))}
      {beforeComponents.map((BeforeComponent, i) => (
        <BeforeComponent key={i} {...props} />
      ))}
      {<h2>Google Login test</h2>}
      {<div onClick={signIn} id='my-signin2'>Login</div>}
      {afterComponents.map((AfterComponent, i) => (
        <AfterComponent key={i} {...props} />
      ))}
      {afterElements.map((AfterElement, i) => (
        <React.Fragment key={i}>{AfterElement}</React.Fragment>
      ))}
    </>
  )
}
