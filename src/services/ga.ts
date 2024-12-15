import { GA_MEASUREMENT_ID } from 'config/env'

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

const loadScriptToHead = (id: string, src: string) => {
  if (document.getElementById(id)) return

  const script = document.createElement('script')
  script.id = id
  script.src = src
  script.async = true
  document.head.appendChild(script)
}

const gtag = (...args: unknown[]) => {
  window.dataLayer.push(args)
}

export const initGA = () => {
  loadScriptToHead(
    'ga-script',
    `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  )

  window.dataLayer = window.dataLayer || []

  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
  console.log('🍎 GA loaded:', GA_MEASUREMENT_ID)
}

/**
 * https://developers.google.com/tag-platform/gtagjs/reference#event
 */
export const sendEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  gtag('event', eventName, eventParams)
}
