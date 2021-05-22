import React, { createContext } from 'react'
import { ConfigProvider } from '../ConfigContext'
import { SessionProvider } from '../SessionContext'
import { WebsocketProvider } from '../WebsocketContext'
import { OrderProvider } from '../OrderContext'
import { BusinessProvider } from '../BusinessContext'
import { LanguageProvider } from '../LanguageContext'
import { ApiProvider } from '../ApiContext'
import { EventProvider } from '../EventContext'
import { UtilsProviders } from '../UtilsContext'
import { ValidationFieldsProvider } from '../ValidationsFieldsContext'
import { CustomerProvider } from '../CustomerContext'
import { WebStrategy } from '../../webStrategy'

/**
 * Create OrderingContext
 * Wrapper to use all context to ordering apps
 */
export const OrderingContext = createContext()

/**
 * Custom provider to languages manager
 * This provider has a reducer for manage languages state
 * @param {props} props
 */
export const OrderingProvider = ({ Alert, settings, children }) => {
  const webStrategy = new WebStrategy()
  return (
    <OrderingContext.Provider>
      <EventProvider>
        <ApiProvider settings={Object.assign(settings.api, { project: settings.project, appId: settings.app_id })}>
          <LanguageProvider strategy={webStrategy}>
            <ConfigProvider>
              <UtilsProviders>
                <ValidationFieldsProvider>
                  <SessionProvider strategy={webStrategy}>
                    <WebsocketProvider settings={Object.assign(settings.socket, { project: settings.project, appId: settings.app_id })}>
                      <OrderProvider strategy={webStrategy} Alert={Alert}>
                        <BusinessProvider>
                          <CustomerProvider strategy={webStrategy}>
                            {children}
                          </CustomerProvider>
                        </BusinessProvider>
                      </OrderProvider>
                    </WebsocketProvider>
                  </SessionProvider>
                </ValidationFieldsProvider>
              </UtilsProviders>
            </ConfigProvider>
          </LanguageProvider>
        </ApiProvider>
      </EventProvider>
    </OrderingContext.Provider>
  )
}

export default OrderingProvider
