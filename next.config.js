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