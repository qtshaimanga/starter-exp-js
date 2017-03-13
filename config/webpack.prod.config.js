const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./webpack.config');
var extractCSS = new ExtractTextPlugin('bundle.css');

config.plugins = config.plugins.concat([
  extractCSS,
  new webpack.optimize.UglifyJsPlugin({
      comments: false,
      warnings: false,
      drop_console: true
  })
])

var cssLoaders = config.module.loaders[0].loaders
config.module.loaders[0].loaders = null
config.module.loaders[0].loader = extractCSS.extract(cssLoaders.slice(1, cssLoaders.length+1));

module.exports = config;
