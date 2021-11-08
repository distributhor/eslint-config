const config = require('../configuration')

module.exports = {

  env: {
    es2021: true,
    browser: true
  },

  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'standard'
  ],

  parserOptions: {
    ...config.js.frontend.parserOptions
  },

  rules: {
    ...config.js.rules
  }
}
