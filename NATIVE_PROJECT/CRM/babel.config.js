// module.exports = {
//   presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
//   plugins: [
//     ['module:react-native-dotenv'],  // For accessing environment variables
//     'react-native-reanimated/plugin',  // If you're using React Native Reanimated
//   ],
// };

// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     ['module:react-native-dotenv'],  // For accessing environment variables
//     'react-native-reanimated/plugin',  // If you're using React Native Reanimated
//   ],
// };

// module.exports = {
//   presets: [
//     'babel-preset-expo', // For Expo compatibility
//     'module:metro-react-native-babel-preset', // Standard Metro preset
//   ],
//   plugins: [
//     ['module:react-native-dotenv'], // For accessing environment variables
//     'react-native-reanimated/plugin', // For Reanimated animations (if using it)
//   ],
// };

module.exports = {
  presets: ['babel-preset-expo'],  // Make sure this preset is included
  plugins: [
    ['module:react-native-dotenv'],  // If you're using environment variables
    'react-native-reanimated/plugin',  // If you're using React Native Reanimated
  ],
};


