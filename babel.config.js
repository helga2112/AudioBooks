module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@components/*': ['src/components/*'],
          '@assets/*': ['src/assets/*'],
          '@navigation/*': ['src/navigation/*'],
          '@screens/*': ['src/screens/*'],
          '@model/*': ['src/model/*'],
          '@api/*': ['src/api/*'],
        },
      },
    ],
  ],
};
