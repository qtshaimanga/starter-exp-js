const webpack = require('webpack');
var config = require('./webpack.config');
const FriendlyErrors = require('friendly-errors-webpack-plugin')

Object.keys(config.entry).forEach(function (name) {
  config.entry[name] = ['./config/dev-client'].concat(config.entry[name])
})

config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new FriendlyErrors(),
]);

module.exports = config;
