module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'react-native', 'react-hooks'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    'react-native/react-native': true,
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-console': ['warn', { allow: ['clear', 'info', 'error'] }],
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'import/no-cycle': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 'off', //make it strict at some point
    'react-native/no-color-literals': 0, //make it strict at some point
    'import/prefer-default-export': 0, //make it strict at some point
    'react-native/no-raw-text': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react-native/no-single-element-style-arrays': 2,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  globals: {
    fetch: false,
  },
};
