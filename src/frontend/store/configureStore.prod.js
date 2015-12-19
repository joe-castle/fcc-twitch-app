import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleWare),
)(createStore);

module.exports = (initialState) => (
  finalCreateStore(rootReducer, initialState)
);
