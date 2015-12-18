// TODO: Provide visual warning when stream data not available.
import {
  SET_VISIBILITY_FILTER,
  SET_SEARCH_FILTER,
  SET_ISFETCHING,
  DELETE_STREAMER,
  ADD_STREAMER } from '../actions/actionTypes'

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const setSearchFilter = (filter) => ({
  type: SET_SEARCH_FILTER,
  filter
});

export const setIsFetching = (fetching) => ({
  type: SET_ISFETCHING,
  fetching
})

export const deleteStreamer = (id) => ({
  type: DELETE_STREAMER,
  id
});

export const addStreamer = ({channel, stream}) => ({
  type: ADD_STREAMER,
  payload: {
    channel,
    stream
  }
});

export const getStreamer = (streamer) => (
  dispatch => {
    dispatch(setIsFetching(true));

    let channel = fetch('https://api.twitch.tv/kraken/channels/'+streamer).then(res => res.json());
  	let stream = fetch('https://api.twitch.tv/kraken/streams/'+streamer).then(res => res.json());

    return Promise.all([channel, stream])
    	.then(json => {
        dispatch(setIsFetching(false));
    		if (json[0].error) {
    			console.error(json[0].message);
    		} else {
    			dispatch(addStreamer({channel: json[0], stream: json[1]}));
    		}
    	});
  }
)
