/* eslint-disable @typescript-eslint/no-explicit-any */
import { GA_MEASUREMENT_ID } from 'config/env'

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

const loadScriptToHead = (id: string, src: string) => {
  return new Promise<void>((resolve) => {
    if (document.getElementById(id)) return resolve()
    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = true
    script.onload = () => resolve()
    document.head.appendChild(script)
  })
}

function gtag() {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer?.push(arguments)
}

export const initGA = async () => {
  if (!GA_MEASUREMENT_ID) return

  await loadScriptToHead(
    'ga-script',
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  )

  window.dataLayer = window.dataLayer || []
  ;(gtag as any)('js', new Date())
  ;(gtag as any)('config', GA_MEASUREMENT_ID)
}

/**
 * https://developers.google.com/tag-platform/gtagjs/reference#event
 */
export const sendEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  ;(gtag as any)('event', eventName, eventParams)
}
