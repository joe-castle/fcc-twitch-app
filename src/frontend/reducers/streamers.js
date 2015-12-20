import { ADD_STREAMER, DELETE_STREAMER } from '../constants/ActionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case ADD_STREAMER:
			return [
				{...action.payload},
				...state
			];
		case DELETE_STREAMER:
      let index = state.map(x => x.channel._id).indexOf(action.id);
			return [
				...state.slice(0, index),
				...state.slice(index + 1)
			];
		default:
			return state;
	}
};
