module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['turbo', 'airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
