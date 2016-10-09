require('shelljs/global')

var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.config.js')

var spinner = ora('building for production...')
spinner.start()

rm('-rf ', 'dist');

webpack(webpackConfig, function(error, stats){
  spinner.stop()
  if(error)throw error
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
