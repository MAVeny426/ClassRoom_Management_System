// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;

// const { getDefaultConfig } = require('metro-config');

// module.exports = async () => {
//   const {
//     resolver: { sourceExts, assetExts },
//   } = await getDefaultConfig();

//   return {
//     resolver: {
//       sourceExts: [...sourceExts, 'env'],
//       assetExts: assetExts.filter(ext => ext !== 'env'),
//     },
//   };
// };

// metro.config.js
// const { getDefaultConfig } = require('metro-config');

// module.exports = {
//   resolver: {
//     assetExts: ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'svg'],
//     sourceExts: ['js', 'jsx', 'ts', 'tsx'],
//   },
// };
