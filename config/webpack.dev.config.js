var config = require('./webpack.config');
var webpack = require('webpack ');

config.entry.app.unshift("webpack-hot-middleware/client");
//"webpack-dev-server/client?http://localhost:" + port + "/", "webpack/hot/dev-server"

config.plugins = config.plugins.concat([
  new webpack.hotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
])

module.exports = config;
