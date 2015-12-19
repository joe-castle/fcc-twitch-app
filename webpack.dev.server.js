'use strict';

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.dev.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
  proxy: {
    '/streamers': 'http://localhost:8000'
  }
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3000');
});
