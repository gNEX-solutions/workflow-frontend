import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const initialState = {};

const middleware = [thunk];

// const composeEnhancers =
//   (process.env.NODE_ENV === 'development' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
