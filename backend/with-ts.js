const config = require('../configuration')

module.exports = {

  env: {
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
  },

  overrides: [
    {
      files: [...config.ts.files],

      extends: [
        'standard-with-typescript'
      ],

      parserOptions: {
        ...config.ts.parserOptions
      },

      rules: {
        ...config.ts.rules
      }
    }
  ]
}
