import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './reducers/root';
import App from './containers/app';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
