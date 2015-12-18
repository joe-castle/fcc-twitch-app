import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const finalCreateStore = compose(
  // Middleware you want to use in production:
  applyMiddleware(thunkMiddleWare),
  // Other store enhancers if you use any
)(createStore);

module.exports =  (initialState) => (
  finalCreateStore(rootReducer, initialState)
);
