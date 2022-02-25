module.exports = {
  root: true,
  plugins: ['solid'],
  extends: ['eslint/recommended', 'plugin:prettier/recommended', 'plugin:solid/recommended'],
  parser: "esprima",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    "solid/reactivity": "warn",
    "solid/no-destructure": "warn",
    "solid/jsx-no-undef": "error"
  }
};
