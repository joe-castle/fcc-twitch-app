import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/nav';
import InputBox from '../components/input-box';
import StreamersBox from '../components/streamers-box';

import { SET_VISIBILITY_FILTER, SET_SEARCH_FILTER, DELETE_STREAMER } from '../actions/actionTypes'
import getStreamer from '../utils/api'

let App = ({dispatch, visibleStreamers, visibilityFilter, isFetching}) => (
	<div className='container'>
		<Nav
			visibilityFilter={visibilityFilter}
			onVisibilityClick={text =>
				dispatch({ type: SET_VISIBILITY_FILTER, filter: text })
		} />
		<InputBox
			onAddClick={text => getStreamer(text)}
			onSearchChange={text =>
				dispatch({ type: SET_SEARCH_FILTER, filter: text })
		} />
		{isFetching && <div className='spinner-container'>
			<div className='spinner-loader'>Loading...</div>
		</div>}
		<StreamersBox
			streamers={visibleStreamers}
			onDeleteClick={index =>
				dispatch({ type: DELETE_STREAMER, index: index })
		} />
	</div>
);

let selectStreamers = (streamers, filters) => {
	let s = streamers.filter(i => i.channel.name.indexOf(filters.searchFilter) > -1);
	switch (filters.visibilityFilter) {
		case 'SHOW_ALL':
			return s;
		case 'SHOW_ONLINE':
			return s.filter(i => Boolean(i.stream.stream) === true);
		case 'SHOW_OFFLINE':
			return s.filter(i => Boolean(i.stream.stream) === false);
	}
};

export default connect(state => ({
		visibleStreamers: selectStreamers(state.streamers, state.filters),
		visibilityFilter: state.filters.visibilityFilter,
		isFetching: state.isFetching
	})
)(App);
