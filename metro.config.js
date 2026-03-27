const { getDefaultConfig } = require('expo/metro-config');
const { withUniwindConfig } = require('uniwind/metro');

const config = getDefaultConfig(__dirname);

const blockList = Array.isArray(config.resolver.blockList) 
  ? config.resolver.blockList 
  : (config.resolver.blockList ? [config.resolver.blockList] : []);
blockList.push(/.*\.agents.*/);
config.resolver.blockList = blockList;

module.exports = withUniwindConfig(config, {
  cssEntryFile: './global.css',
});
