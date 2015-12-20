import { SET_VISIBILITY_FILTER, SET_SEARCH_FILTER } from '../constants/ActionTypes';

export default (state = {
	visibilityFilter: 'SHOW_ALL',
	searchFilter: ''
}, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return {
				...state,
				visibilityFilter: action.filter
			};
		case SET_SEARCH_FILTER:
			return {
				...state,
				searchFilter: action.filter
			};
		default:
			return state;
	}
};
