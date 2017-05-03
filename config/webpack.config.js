const path = require('path');
const root = path.resolve(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: [
    './src/App.js',
    './src/style/main.scss'
   ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath:  process.env.NODE_ENV === 'production' ? './' : '/',  //prod ./ et dev /
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        includ: root
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'assets/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json',
        query: {
          name: 'assets/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        loader: 'raw!glslify'
      },
    ]
  },
  plugins:[
    new CopyWebpackPlugin(
      [
        { from: './src/assets', to: './assets' },
        { from: './static', to: './static' }
      ],
      {
        ignore: ['.DS_Store']
      }
    ),
    new HtmlWebpackPlugin ({
        inject: true,
        filename: 'index.html',
        template: 'index.html'
    })
  ]
}
