import { combineReducers } from 'redux';

import filters from './filters';
import streamers from './streamers';
import isFetching from './isFetching';

export default combineReducers({
	streamers,
	filters,
	isFetching
});
