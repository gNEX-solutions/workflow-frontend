/* eslint-disable indent */
import {
  GET_EVENT,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  CREATE_EVENT
} from '../types/DashBoardTypes';

const initialState = {
  selectedEventId: null,
  events: null,
  isLoading: false,
  responseMsg: null
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
      return {
        ...state,
        isLoading: false,
        events: action.payload.data
      };
    case CREATE_EVENT:
      return {
        ...state,
        responseMsg: action.payload.data
      };
    default:
      return state;
  }
}
