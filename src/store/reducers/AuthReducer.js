/* eslint-disable indent */
import { LOGIN, LOGIN_SUCCESS } from '../types/AuthTypes';

const initialState = {
  user: {
    firstName: 'Akalanka',
    lastName: 'Jayalth',
    email: '',
    designtion: 'PRESIDENT',
    pictureUrl:
      'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png'
  },
  token: null,
  isAuthenticated: false,
  isLoading: false
};

export default function (state = initialState, action) {
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
