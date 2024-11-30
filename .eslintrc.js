module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: 'babel-eslint',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': 'off',
  },
};
