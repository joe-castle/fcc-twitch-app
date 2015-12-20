import React from 'react';
import { Provider } from 'react-redux';

import App from './containers/app';
import { getStreamer } from './actions/StreamerActions';

import DevTools from './containers/DevTools';

const store = configureStore();

module.exports = () => (
	<Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
	</Provider>
);

fetch('/streamers')
  .then(res => res.json())
  .then(json =>
    json.forEach(streamer => store.dispatch(getStreamer(streamer)))
  );
