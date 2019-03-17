import { LOGIN, LOGIN_SUCCESS } from '../../modules/login/actions/types';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
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
