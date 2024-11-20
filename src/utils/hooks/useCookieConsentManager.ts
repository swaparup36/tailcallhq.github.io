import {useCallback, useState} from "react"
import {useCookieConsent} from "./useCookieConsent"

export const useCookieConsentManager = () => {
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
