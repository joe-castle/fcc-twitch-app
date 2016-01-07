module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// Provides correct path to static files base on NODE_ENV.
	const app = __webpack_require__(1)(
	  process.env.NODE_ENV === 'production' ?
	  'public' :
	  '../public'
	);

	const port = process.env.PORT || 3000;
	app.listen(port, () =>
	  console.log('Express server listening on port', port)
	);

	// React-Hot-Reload Server. For development only.
	if (process.env.NODE_ENV === 'development') {
	  const webpack = __webpack_require__(4);
	  const WebpackDevServer = __webpack_require__(5);
	  const config = __webpack_require__(6);

	  new WebpackDevServer(webpack(config), {
	    publicPath: config.output.publicPath,
	    hot: true,
	    stats: { colors: true },
	    proxy: {
	      '*': `http://localhost:${port}`
	    }
	  })
	  .listen(3001, 'localhost', (err, result) => {
	    if (err) {
	      console.log(err);
	    }
	    console.log('Webpack-dev-server listening on port', 3001);
	  });
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const express = __webpack_require__(2);
	const path = __webpack_require__(3);

	const app = express();

	module.exports = (staticPath) => {
	  app.use('/', express.static(path.join(__dirname, staticPath)));

	  app.get('/streamers', (req, res) => {
	    res.json(['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx','RobotCaleb','thomasballinger','noobs2ninjas','beohoff', 'medrybw']);
	  });

	  return app;
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("webpack");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("webpack-dev-server");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	const webpack = __webpack_require__(4);
	const HtmlWebpackPlugin = __webpack_require__(7);
	const path = __webpack_require__(3);

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


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("html-webpack-plugin");

/***/ }
/******/ ]);