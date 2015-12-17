import { SET_FETCH } from '../actions/actionTypes';

export default (state = false, action) => {
	switch(action.type) {
		case SET_FETCH:
			return action.fetch;
		default:
			return state;
	}
};
