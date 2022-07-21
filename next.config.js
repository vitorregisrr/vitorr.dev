// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt',
    pages: {
      '*': ['common'],
      "/": ["home"]
    }
  },
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com'],
  },
}