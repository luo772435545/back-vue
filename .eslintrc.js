// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    // allow async-await
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'generator-star-spacing': 'off',
    // allow semicolon
    'semi': [2, 'always'],
    'no-tabs': 'off',
    'no-inner-declarations': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/no-template-key': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
