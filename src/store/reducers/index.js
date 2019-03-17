import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
// import LoginReducer, {
//   INITIAL_STATE as InitialLoginState
// } from '../../modules/login/reducers/Login';

// const dataReducer = combineReducers({
//   ui: (state = {}) => state,
//   fileUploads: (state = {}) => state
// });

export default combineReducers({
  // Spreading all shared reducers
  // ...AllSharedReducers
  // You can override or add new reducers here
  auth: authReducer
});
