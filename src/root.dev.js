import React from 'react';
import { Provider } from 'react-redux';

import App from './containers/app';
import { getStreamer } from './actions/actionCreators';

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

let initialStreamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'medrybw'];

initialStreamers.forEach(streamer => store.dispatch(getStreamer(streamer)));
