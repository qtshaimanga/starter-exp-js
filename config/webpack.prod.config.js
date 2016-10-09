var config = require('./webpack.config');
var webpack = require('webpack ');
var extractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new extractTextPlugin('bundle.css');

config.plugins = config.plugins.concat([
  extractCSS,
  new webpack.optimize.UglifyJsPlugin({
    comments:false
  })
]);

var cssLoaders = config.module.loaders[0].loaders
config.modules.loaders[0].loaders = null
config.modules.loaders[0].loaders = extractCSS.extract(cssLoaders.slice(1, cssLoaders.lenght-1));

module.exports = config;
