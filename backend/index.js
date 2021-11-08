const config = require('../configuration')

module.exports = {

  env: {
    // commonjs,
    node: true,
    es2021: true,
    browser: true
  },

  extends: [
    'standard'
  ],

  parserOptions: {
    ...config.js.backend.parserOptions
  },

  rules: {
    ...config.js.rules
  }
}
