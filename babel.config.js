module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'nativewind/babel',
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
      },
    ],
  ],
  plugins: ['react-native-reanimated/plugin']
};
