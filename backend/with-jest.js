const config = require('../configuration')

module.exports = {

  env: {
    node: true,
    es2021: true,
    browser: true,
    jest: true,
    'jest/globals': true
  },

  extends: [
    'plugin:jest/recommended',
    'standard'
  ],

  parserOptions: {
    ...config.js.backend.parserOptions
  },

  rules: {
    ...config.js.rules
  }
}
