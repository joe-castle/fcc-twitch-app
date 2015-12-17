// import fetch from 'whatwg-fetch';
// import Promise from 'es6-promise';

import store from '../reducers/root';
import { SET_FETCH, ADD_STREAMER } from '../actions/actionTypes';

let getStreamer = (streamer) => {
	store.dispatch({ type: SET_FETCH, fetch: true });

	let channel = fetch('https://api.twitch.tv/kraken/channels/'+streamer).then(res => res.json());
	let stream = fetch('https://api.twitch.tv/kraken/streams/'+streamer).then(res => res.json());

	Promise.all([channel, stream])
	.then(json => {
		if (json[0].error) {
			store.dispatch({ type: SET_FETCH, fetch: false });
			console.error(json[0].message);
		} else {
			store.dispatch({ type: SET_FETCH, fetch: false });
			store.dispatch({ type: ADD_STREAMER, payload: { channel: json[0], stream: json[1] }});
		}
	});
}

let initialStreamers = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2ninjas', 'beohoff', 'medrybw'];

initialStreamers.forEach(streamer => getStreamer(streamer));

export default getStreamer;
