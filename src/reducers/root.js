import { combineReducers, createStore } from 'redux';

import filters from './filters';
import streamers from './streamers';
import isFetching from './isFetching';

let twitchApp = combineReducers({
	streamers,
	filters,
	isFetching
});

export default createStore(twitchApp);
