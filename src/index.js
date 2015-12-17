import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import store from './store/configureStore.dev';

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
