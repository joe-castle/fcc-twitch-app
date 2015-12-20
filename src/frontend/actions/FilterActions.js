import * as types from '../constants/ActionTypes'

export const setVisibilityFilter = (filter) => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

export const setSearchFilter = (filter) => ({
  type: types.SET_SEARCH_FILTER,
  filter
});
