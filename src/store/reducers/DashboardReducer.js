/* eslint-disable indent */
import {
  GET_EVENT,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL
} from '../types/DashBoardTypes';

const initialState = {
  events: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT:
      return {
        ...state,
        isLoading: true
      };
    case GET_EVENT_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const { data } = action.payload;
      return {
        ...state,
        isLoading: false,
        events: data
      };
    default:
      return state;
  }
}
