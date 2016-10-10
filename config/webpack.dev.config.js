var config = require('./webpack.config');
var webpack = require('webpack');

Object.keys(config.entry).forEach(function (name) {
  config.entry[name] = ['./config/dev-client'].concat(config.entry[name])
})

config.plugins = config.plugins.concat([
   new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
]);

module.exports = config;
