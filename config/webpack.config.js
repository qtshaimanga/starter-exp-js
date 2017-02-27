var path = require('path')
var root = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: ['./src/style/main.scss', './src/main.js']
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
        loaders: ['style', 'css']
      },
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
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        loader: 'raw!glslify'
      },
    ]
  },
  plugins:[]
}
