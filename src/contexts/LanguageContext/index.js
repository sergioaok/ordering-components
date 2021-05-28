import React, { createContext, useState, useContext, useEffect } from 'react'
import { useApi } from '../ApiContext'

/**
 * Create LanguageContext
 * This context will manage the current languages internally and provide an easy interface
 */
export const LanguageContext = createContext()

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const LanguageProvider = ({ children, strategy }) => {
  const [state, setState] = useState({
    loading: true,
    dictionary: {}
  })

  /**
   * Load language from localstorage and set state or load default language
   */
  const setLanguageFromLocalStorage = async () => {
    const language = await strategy.getItem('language', true)
    if (!language) {
      loadDefaultLanguage()
    } else {
      setState({ ...state, language })
      apiHelper.setLanguage(language?.code)
    }
  }

  const [ordering, apiHelper] = useApi()

  const refreshTranslations = async () => {
    try {
      !state.loading && setState({ ...state, loading: true })
      const { content: { error, result } } = await ordering.translations().asDictionary().get()
      setState({
        ...state,
        loading: false,
        dictionary: error ? {} : result
      })
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  const loadDefaultLanguage = async () => {
    try {
      const { content: { error, result } } = await ordering.languages().where([{ attribute: 'default', value: true }]).get()
      if (!error) {
        const language = { id: result[0].id, code: result[0].code, rtl: result[0].rtl }
        await strategy.setItem('language', language, true)
        setState({
          ...state,
          language
        })
      }
    } catch (err) {}
  }

  const setLanguage = async (language) => {
    if (!language || language.id === state.language?.id) return
    const _language = { id: language.id, code: language.code, rtl: language.rtl }
    await strategy.setItem('language', _language, true)
    setState({ ...state, loading: true, language: _language })
  }

  /**
   * Refresh translation when change language from ordering
   */
  useEffect(() => {
    if (state.language?.code && state.language?.code === ordering.language) {
      refreshTranslations()
    }
  }, [state.language?.code, ordering])

  useEffect(() => {
    if (!ordering?.project) return
    setLanguageFromLocalStorage()
  }, [ordering])

  useEffect(() => {
    apiHelper.setLanguage(state?.language?.code)
  }, [state.language])

  const t = (key, fallback = null) => {
    return (state?.dictionary && Object.keys(state?.dictionary).length > 0 && state.dictionary[key]) || fallback || key
  }

  return (
    <LanguageContext.Provider value={[state, t, setLanguage, refreshTranslations]}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook to get and update language state
 */
export const useLanguage = () => {
  const languageManager = useContext(LanguageContext)
  return languageManager || [{}, (key, fallback = null) => fallback || key, async () => {}, async () => {}]
}
