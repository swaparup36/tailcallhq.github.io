import React, {createContext, useCallback, useContext, useState} from "react"
import {CookieConsentType, useCookieConsent} from "@site/src/utils/hooks/useCookieConsent"

interface CookieConsentContextType {
  cookieConsent: CookieConsentType
  isCookieConsentModalVisible: boolean
  openCookieConsentModal: () => void
  closeCookieConsentModal: () => void
  onAccept: () => void
  onDeny: () => void
  onPartialAccept: (selectedPreferences: string[]) => void
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null)

const useCookieConsentContextValue = (): CookieConsentContextType => {
  const {getCookieConsent, setCookieConsent} = useCookieConsent()
  const [isCookieConsentModalVisible, setIsCookieConsentModalVisible] = useState(false)
  const cookieConsent = getCookieConsent()

  const openCookieConsentModal = useCallback(() => {
    setIsCookieConsentModalVisible(true)
  }, [])

  const closeCookieConsentModal = useCallback(() => {
    setIsCookieConsentModalVisible(false)
  }, [])

  const onAccept = useCallback(() => {
    const consentData = {accepted: true}
    setCookieConsent(consentData)
    closeCookieConsentModal()
  }, [setCookieConsent])

  const onDeny = useCallback(() => {
    const consentData = {accepted: false}
    setCookieConsent(consentData)
    closeCookieConsentModal()
  }, [setCookieConsent])

  const onPartialAccept = useCallback(
    (selectedPreferences: string[]) => {
      const consentData = {
        accepted: true,
        preferences: selectedPreferences,
      }
      setCookieConsent(consentData)
      closeCookieConsentModal()
    },
    [setCookieConsent],
  )

  return {
    cookieConsent,
    isCookieConsentModalVisible,
    openCookieConsentModal,
    closeCookieConsentModal,
    onAccept,
    onDeny,
    onPartialAccept,
  }
}

export const CookieConsentProvider = ({children}: {children: React.ReactNode}) => {
  const value = useCookieConsentContextValue()
  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
}

export const useCookieConsentManager = () => {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error("useCookieConsentManager must be used within a CookieConsentProvider")
  }
  return context
}
