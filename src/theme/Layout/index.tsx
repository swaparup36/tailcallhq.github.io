import React, {useEffect} from "react"
import Layout from "@theme-original/Layout"
import type LayoutType from "@theme/Layout"
import type {WrapperProps} from "@docusaurus/types"
import GlobalHead from "@site/src/components/shared/GlobalHead"
import CookieConsentModal from "@site/src/components/shared/CookieConsentModal/CookieConsentModal"
import {useCookieConsentManager} from "@site/src/utils/hooks/useCookieConsentManager"
import {pageLinks} from "@site/src/constants/routes"

type Props = WrapperProps<typeof LayoutType>

export default function LayoutWrapper(props: Props): JSX.Element {
  const {
    isCookieConsentModalVisible,
    openCookieConsentModal,
    closeCookieConsentModal,
    onAccept,
    onDeny,
    onPartialAccept,
    cookieConsent,
  } = useCookieConsentManager()

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname.includes(pageLinks.privacyPolicy)) return

    if (!cookieConsent) {
      openCookieConsentModal()
    }
  }, [cookieConsent])

  return (
    <>
      <CookieConsentModal
        open={isCookieConsentModalVisible}
        onClose={closeCookieConsentModal}
        onAccept={onAccept}
        onDeny={onDeny}
        onPartialAccept={onPartialAccept}
      />
      <GlobalHead isCookieConsentAccepted={Boolean(cookieConsent?.accepted)} preferences={cookieConsent?.preferences} />
      <Layout {...props} />
    </>
  )
}
