/* eslint-disable indent */
import {
  GET_EVENT,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  CREATE_EVENT,
  GET_EVENT_HISTORY,
  CHANGE_EVENT_ID,
  GET_EXPLORER_EVENTS
} from '../types/DashBoardTypes';
import { events, past, explorer } from './mock';

const initialState = {
  selectedEventId: null,
  events: [],
  isLoading: false,
  responseMsg: null,
  pastEvents: past,
  expEvents: explorer
};

export default function (state = initialState, action) {
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
    case GET_EVENT_HISTORY:
      return {
        ...state,
        pastEvents: action.payload.data
      };
    case CHANGE_EVENT_ID:
      return {
        ...state,
        selectedEventId: action.payload
      };
    case GET_EXPLORER_EVENTS:
      console.log(action.payload.data)
      return {
        ...state,
        expEvents: action.payload.data
      };
    default:
      return state;
  }
}
