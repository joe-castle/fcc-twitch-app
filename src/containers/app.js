import React from 'react';
import { connect } from 'react-redux';

import Nav from '../components/nav';
import InputBox from '../components/input-box';
import StreamersBox from '../components/streamers-box';

import { setSearchFilter, setVisibilityFilter, deleteStreamer, getStreamer } from '../actions/actionCreators'

let App = ({dispatch, visibleStreamers, visibilityFilter, isFetching}) => (
	<div className='container'>
		<Nav
			visibilityFilter={visibilityFilter}
			onVisibilityClick={filter =>
				dispatch(setVisibilityFilter(filter))
		} />
		<InputBox
			onAddClick={streamer =>
        dispatch(getStreamer(streamer))
      }
			onSearchChange={filter =>
				dispatch(setSearchFilter(filter))
		} />
		{isFetching && <div className='spinner-container'>
			<div className='spinner-loader'>Loading...</div>
		</div>}
		<StreamersBox
			streamers={visibleStreamers}
			onDeleteClick={index =>
				dispatch(deleteStreamer(index))
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
