const checkoutUrls = {
  pt: import.meta.env.VITE_BABY_SHAGGY_CHECKOUT_URL_PT
    || import.meta.env.VITE_BABY_SHAGGY_CHECKOUT_URL
    || 'https://pay.hotmart.com/B106334207S?off=rz1o8t5l',
  en: import.meta.env.VITE_BABY_SHAGGY_CHECKOUT_URL_INTERNATIONAL
    || 'https://pay.hotmart.com/B106334207S?off=33i5c6o6',
  es: import.meta.env.VITE_BABY_SHAGGY_CHECKOUT_URL_INTERNATIONAL
    || 'https://pay.hotmart.com/B106334207S?off=33i5c6o6',
}

export const getCheckoutUrl = (language) => checkoutUrls[language] || checkoutUrls.pt

export const page2Asset = (path) =>
  `${import.meta.env.BASE_URL}page2/${path.replace(/^\/+/, '')}`
