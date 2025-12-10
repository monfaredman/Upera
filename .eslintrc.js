module.exports = {
  root: true,
  env: { browser: true, node: true, jquery: true },
  parserOptions: { parser: 'babel-eslint' },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': 0,
    'vue/html-indent': 'off', // Disable indentation rules for HTML in Vue templates
    'vue/html-closing-bracket-newline': 'off', // Disable newlines for closing brackets in Vue templates
    'vue/singleline-html-element-content-newline': 'off', // Disable newlines for single-line HTML elements in Vue templates
    'vue/html-self-closing': 'off', // Disable self-closing rules for HTML elements in Vue templates
    'vue/attribute-hyphenation': 'off', // Disable enforcing hyphenated attributes in Vue templates
  },
}
