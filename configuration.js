
module.exports = {
  js: {
    backend: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
      }
    },
    frontend: {
      parserOptions: {
        ecmaVersion: 12
      }
    },
    rules: {
      'space-before-function-paren': ['error', {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always'
      }],

      'max-len': ['error', {
        code: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreComments: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreTrailingComments: true
      }]
    },
    disabledRules: {
      'no-console': 'off',
      'no-restricted-syntax': [
        'error',
        {
          selector:
                "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
          message: 'Unexpected property on console object was called'
        }
      ]
    }
  },

  ts: {
    // the combination of 'files' and 'parserOptions.project'
    // are used to determine which files to lint
    files: ['src/**/*.ts', 'test/**/*.ts'], // ['*.ts']
    parserOptions: {
      project: ['./tsconfig.eslint.json']
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-dynamic-delete': 0,
      '@typescript-eslint/strict-boolean-expressions': 0,
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,

      '@typescript-eslint/space-before-function-paren': ['error', {
        named: 'never',
        anonymous: 'always',
        asyncArrow: 'always'
      }],

      '@typescript-eslint/explicit-module-boundary-types': [
        'error',
        {
          allowArgumentsExplicitlyTypedAsAny: true
        }
      ]
    }
  }
}
