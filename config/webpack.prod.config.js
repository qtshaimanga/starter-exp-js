var config = require('./webpack.config');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('bundle.css');

config.plugins = config.plugins.concat([
  extractCSS,
  new webpack.optimize.UglifyJsPlugin({
      comments: false
  })
])

var cssLoaders = config.module.loaders[0].loaders
config.module.loaders[0].loaders = null
config.module.loaders[0].loader = extractCSS.extract(cssLoaders.slice(1, cssLoaders.length+1));

module.exports = config;
