import React, { createContext, useState, useContext, useEffect, lazy, Suspense } from 'react'
import { useApi } from '../ApiContext'
import { useLanguage } from '../LanguageContext'
const dayjs = lazy(() => import('dayjs'))
const utc = lazy(() => import('dayjs/plugin/utc'))

dayjs.extend(utc)

/**
 * Create ConfigContext
 * This context will manage the current configs internally and provide an easy interface
 */
export const ConfigContext = createContext()

/**
 * Custom provider to configs manager
 * This provider has a reducer for manage configs state
 * @param {props} props
 */
export const ConfigProvider = ({ children }) => {
  const [state, setState] = useState({ loading: true, configs: {} })
  const [languageState] = useLanguage()
  const [ordering] = useApi()

  const customConfigs = {
    max_days_preorder: {
      key: 'max_days_preorder',
      value: 6
    },
    meters_to_change_address: {
      key: 'meters_to_change_address',
      value: 500
    },
    default_order_type: {
      key: 'default_order_type',
      value: 'delivery'
    },
    order_types_allowed: {
      key: 'order_types_allowed',
      value: '1|2|3|4|5'
    },
    google_autocomplete_selection_required: {
      key: 'google_autocomplete_selection_required',
      value: 'true'
    },
    google_maps_api_key: {
      key: 'google_maps_api_key',
      value: 'AIzaSyDX5giPfK-mtbLR72qxzevCYSUrbi832Sk'
    },
    country_autocomplete: {
      key: 'country_autocomplete',
      value: '*'
    },
    track_id_google_analytics: {
      key: 'track_id_google_analytics',
      value: 'UA-51635411-4'
    },
    guest_uuid_max_days: {
      key: 'guest_uuid_max_days',
      value: 3
    },
    guest_uuid_access: {
      key: 'guest_uuid_access',
      value: 1
    },
    location_default_latitude: {
      key: 'location_default_latitude',
      value: 40.7751052
    },
    location_default_longitude: {
      key: 'location_default_longitude',
      value: -73.9651148
    },
    driver_tip_type: {
      key: 'driver_tip_type',
      value: 2 // 1: fixed, 2: percetaje
    },
    driver_tip_options: {
      key: 'driver_tip_options',
      value: [0, 10, 15, 20, 25]
    },
    driver_tip_use_custom: {
      key: 'driver_tip_use_custom',
      value: 0 // 0: disabled, 1: enabled
    }
  }

  const refreshConfigs = async () => {
    try {
      !state.loading && setState({ ...state, loading: true })
      const { content: { error, result } } = await ordering.configs().asDictionary().get()
      let data = null
      try {
        const response = await fetch('https://ipapi.co/json/')
        data = await response.json()
      } catch (error) {
        data = null
      }
      const conditionalConfigs = {
        dates_moment_format: {
          key: 'dates_moment_format',
          value: result?.dates_moment_format?.value ||
            (result?.format_time?.value === '24' ? 'MM/DD HH:mm' : 'MM/DD hh:mma')
        },
        dates_general_format: {
          key: 'dates_general_format',
          value: result?.dates_moment_format?.value ||
          (result?.format_time?.value === '24' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD hh:mm:ssa')
        },
      }
      const configsResult = {
        ...customConfigs,
        default_country_code: {
          value: (data && data?.country_code) || 'US',
          calling_number: (data && data?.country_calling_code) || '+1'
        },
        ...result,
        ...conditionalConfigs
      }
      setState({
        ...state,
        loading: false,
        configs: error ? {} : configsResult
      })
    } catch (err) {
      setState({ ...state, loading: false })
    }
  }

  const functions = {
    refreshConfigs
  }

  useEffect(() => {
    if (!languageState.loading) {
      refreshConfigs()
    }
  }, [languageState])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfigContext.Provider value={[state, functions]}>
        {children}
      </ConfigContext.Provider>
    </Suspense>
  )
}

/**
 * Hook to get and update configs state
 */
export const useConfig = () => {
  const configManager = useContext(ConfigContext)
  return configManager || [{}, async () => {}]
}
