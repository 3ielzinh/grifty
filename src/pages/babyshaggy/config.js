export const checkoutUrl = import.meta.env.VITE_BABY_SHAGGY_CHECKOUT_URL || 'https://pay.hotmart.com/B106334207S?off=rz1o8t5l'

export const page2Asset = (path) =>
  `${import.meta.env.BASE_URL}page2/${path.replace(/^\/+/, '')}`
