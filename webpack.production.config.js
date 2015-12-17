var path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
