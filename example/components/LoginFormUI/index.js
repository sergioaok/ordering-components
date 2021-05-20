import React from 'react'
import { useForm } from 'react-hook-form'
import { ReCaptcha } from '../../../src/components/ReCaptcha'

export const LoginFormUI = (props) => {
  const {
    formState,
    handleButtonLoginClick,
    handleContinueAsGuest,
    useLoginByEmail,
    useLoginByCellphone,
    handleChangeTab,
    loginTab,
    beforeComponents,
    afterComponents,
    beforeElements,
    afterElements,
    linkToSignup,
    linkToForgetPassword,
    elementLinkToSignup,
    elementLinkToForgetPassword,
    handleChangeInput,
    handleReCaptcha
  } = props

  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    handleButtonLoginClick()
  }

  return (
    <>
      <h1>Login</h1>
      {
        useLoginByEmail && useLoginByCellphone && (
          <div>
            {
              useLoginByEmail && (
                <button type='button' onClick={() => handleChangeTab('email')}>By Email {loginTab === 'email' && '(Selected)'}</button>
              )
            }
            {
              useLoginByCellphone && (
                <button type='button' onClick={() => handleChangeTab('cellphone')}>By Cellphone  {loginTab === 'cellphone' && '(Selected)'}</button>
              )
            }
          </div>
        )
      }
      {
        beforeElements.map((BeforeElement, i) => (
          <React.Fragment key={i}>
            {BeforeElement}
          </React.Fragment>
        ))
      }
      {
        beforeComponents.map((BeforeComponent, i) => <BeforeComponent key={i} {...props} />)
      }
      {
        (useLoginByCellphone || useLoginByEmail) && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {
                useLoginByCellphone && loginTab === 'cellphone' && (
                  <div>
                    <input
                      name='cellphone'
                      type='text'
                      placeholder='Cellphone'
                      // value={credentials.cellphone}
                      style={{ borderColor: errors.cellphone ? '#c10000' : null }}
                      onChange={handleChangeInput}
                      ref={register({
                        required: 'Cellphone is required'
                      })}
                    />
                    {errors.cellphone && <i style={{ color: '#c10000' }}>{errors.cellphone.message}</i>}
                  </div>
                )
              }
              {
                useLoginByEmail && loginTab === 'email' && (
                  <div>
                    <input
                      name='email'
                      type='text'
                      placeholder='Email'
                      // value={credentials.email}
                      style={{ borderColor: errors.email ? '#c10000' : null }}
                      onChange={handleChangeInput}
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && <i style={{ color: '#c10000' }}>{errors.email.message}</i>}
                  </div>
                )
              }
              <input
                name='password'
                type='password'
                placeholder='Password'
                style={{ borderColor: errors.password ? '#c10000' : null }}
                onChange={handleChangeInput}
                ref={register({
                  required: 'Password is required'
                })}
              />
              {errors.password && <i style={{ color: '#c10000' }}>{errors.password.message}</i>}
            </div>
            {/* <ReCaptcha handleReCaptcha={handleReCaptcha} /> */}
            <div>
              {formState.loading && <p>Loading...</p>}
              {!formState.loading && formState.result?.error && <p style={{ color: '#c10000' }}>Errors: {formState.result.result}</p>}
              {!formState.loading && <button type='submit'>Login</button>}
            </div>
          </form>
        )
      }
      {
        handleContinueAsGuest && (
          <div>
            <button onClick={() => handleContinueAsGuest()}>Continue as guest</button>
          </div>
        )
      }
      {
        afterComponents.map((AfterComponent, i) => <AfterComponent key={i} {...props} />)
      }
      {
        afterElements.map((AfterElement, i) => (
          <React.Fragment key={i}>
            {AfterElement}
          </React.Fragment>
        ))
      }
      {
        linkToSignup && <a href={linkToSignup}>Go to signup</a>
      }
      {
        linkToForgetPassword && <a href={linkToForgetPassword}>Go to forgot password</a>
      }
      {
        (elementLinkToSignup || elementLinkToForgetPassword) && (
          <div>
            {
              elementLinkToSignup
            }
            {
              elementLinkToForgetPassword
            }
          </div>
        )
      }
    </>
  )
}
