import { ADD_STREAMER, DELETE_STREAMER } from '../actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_STREAMER:
			return [
				{...action.payload},
				...state
			];
		case DELETE_STREAMER:
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];
		default:
			return state;
	}
};
