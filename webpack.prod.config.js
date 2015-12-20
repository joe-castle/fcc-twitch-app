'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = [{
  entry: './src/frontend/index',
  output: {
    path: path.join(__dirname, 'build', 'public'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      Root: './root',
      configureStore: './store/configureStore'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Twitch App',
      template: './src/frontend/index.template.html',
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      excluse: /node_modules/
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }]
  },
  devtool: 'source-map'
},{
  entry: './src/backend/',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: /^[a-z\-0-9]+$/,
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}];
