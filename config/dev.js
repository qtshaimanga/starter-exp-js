var webpack = require('webpack')
var config = require('./webpack.dev.config');
var webDevServer = require('webpack-dev-server')
var port = 8080;
var compiler = webpack(config)
var hotMiddleware = require('webpack-hot-middleware')(compiler);

var server = new webDevServer(compiler, {
  hot: true,
  // proxy: {
  //   "*": {
  //      target: "http://localhost:8000/",
  //      changeOrigin : true
  //   }
  // },
  contentBase: './',
  quiet: false,
  noInfo: false,
  publicPath: config.output.publicPath,
  stats: {colors: true}
});

server.use('hotMiddleware');

server.listen(port, function(error){
  if(error){
    console.log(error);
  }else{
    console.log("http://localhost:" + port + "/");
  }
});
