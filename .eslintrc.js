module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['prettier', 'prettier/react'],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es2020: true,
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-new-func': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
  },
};
