const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);
config.resolver.blockList = exclusionList([/.*\.agents.*/]);

module.exports = withUniwindConfig(config, {
  cssEntryFile: './global.css',
});
