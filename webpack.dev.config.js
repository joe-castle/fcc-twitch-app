'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/frontend/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      // Injects Root and configureStore based on NODE_ENV.
      // Provides Redux devtools if in development,
      // and strips them if in production.
      // See /src/frontend/root.js.
      Root: './root',
      configureStore: './store/configureStore'
    }),
    new HtmlWebpackPlugin({
      title: 'Twitch App',
      template: './src/frontend/index.template.html',
      inject: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'autoprefixer', 'sass']
    }]
  },
};
