const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID || '1475564524182805'

const installMetaPixel = () => {
  if (typeof window === 'undefined' || window.fbq) return

  const fbq = function (...args) {
    if (fbq.callMethod) {
      fbq.callMethod(...args)
      return
    }

    fbq.queue.push(args)
  }

  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []
  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
}

export const initializeMetaPixel = () => {
  if (typeof window === 'undefined') return

  installMetaPixel()

  window.__griftyMetaPixelIds ||= new Set()
  if (!window.__griftyMetaPixelIds.has(META_PIXEL_ID)) {
    window.fbq('init', META_PIXEL_ID)
    window.__griftyMetaPixelIds.add(META_PIXEL_ID)
  }

  const pageKey = `${window.location.pathname}${window.location.search}`
  window.__griftyMetaPixelPageViews ||= new Set()
  if (!window.__griftyMetaPixelPageViews.has(pageKey)) {
    window.fbq('track', 'PageView')
    window.__griftyMetaPixelPageViews.add(pageKey)
  }
}

export const trackCheckoutStart = () => {
  if (typeof window === 'undefined') return

  initializeMetaPixel()
  window.fbq('track', 'InitiateCheckout', {
    content_category: 'Curso online',
    content_ids: ['B106334207S'],
    content_name: 'Baby Shaggy',
    content_type: 'product',
    currency: 'BRL',
    value: 297,
  })
}
