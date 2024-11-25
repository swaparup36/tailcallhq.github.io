import React, {useEffect, useMemo, useState} from "react"
import styles from "./styles.module.css"
import clsx from "clsx"
import {CookiePreferenceCategory} from "@site/src/constants"
import Link from "@docusaurus/Link"
import {pageLinks} from "@site/src/constants/routes"

interface CookieConsentModalProps {
  open: boolean
  onAccept: () => void
  onDeny: () => void
  onPartialAccept: (preferences: string[]) => void
  onClose?: () => void
}

interface ConsentOption {
  text: string
  onClick?: () => void
}

interface PreferenceOption {
  name: string
  selected: boolean
  readonly?: boolean
}

const CookieConsentModal: React.FC<CookieConsentModalProps> = ({open, onAccept, onDeny, onPartialAccept, onClose}) => {
  const [showPreferences, setShowPreferences] = useState(false)

  const consentOptions: Array<ConsentOption> = [
    {
      text: "Accept All",
      onClick: onAccept,
    },
    ...[
      showPreferences
        ? {
            text: "Accept Selected",
            onClick: () => {
              onPartialAccept(selectedPreferencesNames)
            },
          }
        : {
            text: "Manage Preferences",
            onClick: () => setShowPreferences(true),
          },
    ],
    {
      text: "Accept Only Essential",
      onClick: onDeny,
    },
  ]

  const initialPreferences: Array<PreferenceOption> = [
    {name: CookiePreferenceCategory.NECESSARY, selected: true, readonly: true},
    {name: CookiePreferenceCategory.PREFERENCE, selected: false},
    {name: CookiePreferenceCategory.MARKETING, selected: false},
    {name: CookiePreferenceCategory.ANALYTICS, selected: false},
  ]

  const [preferences, setPreferences] = useState(initialPreferences)

  const selectedPreferencesNames = useMemo(() => {
    return preferences.reduce((acc: string[], preference: PreferenceOption) => {
      if (preference.selected) acc.push(preference.name)
      return acc
    }, [])
  }, [preferences])

  useEffect(() => {
    if (typeof window === "undefined") return

    if (open) {
      requestAnimationFrame(() => {
        document.body.style.overflow = "hidden"
      })
    } else {
      document.body.style.overflow = "visible"
    }
  }, [open])

  const handlePreferenceToggle = (index: number) => {
    if (preferences[index].readonly) return

    const updatedPreferences = [...preferences]
    updatedPreferences[index].selected = !updatedPreferences[index].selected
    setPreferences(updatedPreferences)
  }

  const handleClose = () => {
    setShowPreferences(false)
    setPreferences(initialPreferences)

    if (onClose) onClose()
  }

  return (
    <>
      {open ? (
        <>
          {/* Overlay */}
          <div
            className={clsx("block fixed inset-0 bg-black bg-opacity-50", styles.modalOverlay)}
            onClick={handleClose}
          ></div>

          {/* Modal Container */}
          <div className={clsx("p-4 bg-black", styles.cookieConsentModal)}>
            <div className="relative p-2 border border-solid border-tailCall-border-light-600">
              <div
                className={clsx(
                  "flex flex-col items-center justify-center py-12 md:py-8 px-5 md:px-16 gap-5 font-space-mono border border-solid border-tailCall-border-light-600",
                  styles.bodyContainer,
                )}
              >
                <div className="flex flex-col items-center justify-center p-3 gap-2 text-center text-tailCall-light-300">
                  <img src={require("@site/static/images/cookie-consent/cookie.png").default} height={54} width={54} />
                  <span className="text-title-small md:text-title-medium">We Value Your Privacy</span>
                  <span className="text-content-mini md:text-content-small">
                    Our website uses cookies to enhance your browsing experience, improve website functionality, and
                    analyze website traffic. We also collect and process your IP address for purposes such as ensuring
                    security and maintaining network performance.
                  </span>
                  <span className="text-content-mini md:text-content-small">
                    You can choose which cookies to accept by selecting your preferences below. Essential cookies are
                    necessary for the website to function and cannot be disabled. By clicking “Accept All” you consent
                    to the use of all cookies.
                  </span>
                  <span className="text-content-mini md:text-content-small">
                    For more information, please review our{" "}
                    <Link
                      href={pageLinks.privacyPolicy}
                      className="text-tailCall-light-300 hover:text-tailCall-light-300 underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                  {showPreferences && (
                    <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-x-5">
                      {preferences.map((preference: PreferenceOption, index: number) => {
                        return (
                          <span
                            key={index}
                            className={clsx(
                              "flex cursor-pointer text-content-mini md:text-content-small gap-2 p-1",
                              preference.selected ? "text-tailCall-light-600" : "",
                            )}
                            onClick={() => handlePreferenceToggle(index)}
                          >
                            <span className="whitespace-pre">{`${preference.selected ? `[ X ]` : `[   ]`}`}</span>
                            <span>{preference.name}</span>
                          </span>
                        )
                      })}
                    </div>
                  )}
                </div>
                <div className={clsx("flex flex-col md:flex-row gap-6", styles.consentOptionsContainer)}>
                  {consentOptions.map((btn: ConsentOption, index: number) => {
                    return (
                      <span
                        key={index}
                        className={clsx(
                          "flex items-center justify-center md:whitespace-nowrap py-1 px-3 text-title-medium bg-tailCall-dark-400 border border-solid border-tailCall-dark-300 cursor-pointer text-center",
                          styles.consentOption,
                        )}
                        onClick={btn.onClick}
                      >
                        {btn.text}
                      </span>
                    )
                  })}
                </div>
              </div>
              <span
                className={clsx(
                  "absolute px-2 text-title-small md:text-title-medium text-tailCall-light-300 bg-black",
                  styles.modalHeading,
                )}
              >
                Cookie Settings
              </span>
              <img
                className={clsx("absolute cursor-pointer", styles.closeBtn)}
                src={require("@site/static/images/cookie-consent/close-btn.png").default}
                height={16}
                width={25}
                onClick={handleClose}
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default CookieConsentModal
