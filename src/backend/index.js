'use strict';

// Provides correct path to static files base on NODE_ENV.
const app = require('./routes')(
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
  const webpack = require('webpack');
  const WebpackDevServer = require('webpack-dev-server');
  const config = require('../../webpack.dev.config');

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
