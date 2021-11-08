const config = require('../configuration')

module.exports = {

  env: {
    jest: true,
    es2021: true,
    browser: true,
    'jest/globals': true
  },

  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:jest/recommended',
    'standard'
  ],

  parserOptions: {
    ...config.js.frontend.parserOptions
  },

  rules: {
    ...config.js.rules
  }
}
