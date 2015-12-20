import * as types from '../constants/ActionTypes'

export const setIsFetching = (fetching) => ({
  type: types.SET_ISFETCHING,
  fetching
})

export const deleteStreamer = (id) => ({
  type: types.DELETE_STREAMER,
  id
});

export const addStreamer = ({channel, stream}) => ({
  type: types.ADD_STREAMER,
  payload: {
    channel,
    stream
  }
});

export const getStreamer = (streamer) => (
  dispatch => {
    dispatch(setIsFetching(true));

    let channel = fetch('https://api.twitch.tv/kraken/channels/'+streamer)
      .then(res => res.json());
  	let stream = fetch('https://api.twitch.tv/kraken/streams/'+streamer)
      .then(res => res.json());

    return Promise.all([channel, stream])
    	.then(json => {
        dispatch(setIsFetching(false));
    		if (json[0].error) {
          // TODO: Provide visual warning when stream data not available.
    			console.error(json[0].message);
    		} else {
    			dispatch(addStreamer({channel: json[0], stream: json[1]}));
    		}
    	});
  }
)
