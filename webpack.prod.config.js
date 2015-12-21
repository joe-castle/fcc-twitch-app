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
      // Injects Root and configureStore based on NODE_ENV.
      // Provides Redux devtools if in development,
      // and strips them if in production.
      // See /src/frontend/root.js.
      Root: './root',
      configureStore: './store/configureStore'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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
      exclude: /node_modules/
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
}];
