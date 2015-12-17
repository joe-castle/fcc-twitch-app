import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import store from './store/configureStore.dev';
import { getStreamer } from './actions/actionCreators'

import DevTools from './containers/DevTools';

render(
	<Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
	</Provider>,
	document.getElementById('root')
);

let initialStreamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'medrybw'];

initialStreamers.forEach(streamer => store.dispatch(getStreamer(streamer)));
