/* eslint-disable indent */
import { LOGIN, LOGIN_SUCCESS } from '../../modules/login/actions/types';

const initialState = {
  events: null
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { data } = action.payload;
      return {
        ...state,
        // ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        token: data.token
      };
    default:
      return state;
  }
}
