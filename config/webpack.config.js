//install --save-dev webpack babel-loader babel-core babel-preset-es2015 babel-stage-2
// css-loader style-loader json-loader url-loader file-loader extract-text-webpack-plugin node-sass
// webpack-dev-server : webpack-dev-server --hot --inline --content-base ./
// webpack-hot-middleware

// package.json
// build: 'node config/build.js'
// dev: 'node config/dev.js'

var path = require('path');
var root = path.resolve(__dirname, '../');

module.exports = {
  entry:{
    app: './src/style/main.scss', './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: (['style', "css"])
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loaders: ['style', 'css', 'sass']
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        includ: root
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json'
      // },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[hash:7].[ext]'
        }
      }
    ],
    plugins:[]
  }
}
