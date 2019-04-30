import axios from 'axios';
import {
  GET_EVENT,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  CREATE_EVENT,
  GET_EVENT_HISTORY,
  CHANGE_EVENT_ID,
  UPDATE_SEARCH_SUGGESTIONS,
  SEARCH_OVERLAY
} from '../types/DashBoardTypes';

export const getEvent = data => (dispatch, history) => {
  axios
    .post('eventapi/events', data)
    .then(res =>
      dispatch({
        type: GET_EVENT_SUCCESS,
        payload: res
      })
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
};

export const createEvent = data => (dispatch, history) => {
  axios
    .post('eventapi/eventcreate', data)
    .then(res =>
      dispatch({
        type: CREATE_EVENT,
        payload: res
      })
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
};

export const getPastEvents = data => (dispatch, history) => {
  axios
    .post('eventapi/eventpast', data)
    .then(res =>
      dispatch({
        type: GET_EVENT_HISTORY,
        payload: res
      })
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
};

export const selectEvent = data => (dispatch, history) => {
  // console.log(data);
  dispatch({ type: CHANGE_EVENT_ID, payload: data });
  // ({ type: CHANGE_EVENT_ID, payload: { data } });
};

export const setSearchSuggestions = data => (dispatch, history) => {
  dispatch({ type: UPDATE_SEARCH_SUGGESTIONS, payload: data });
}

export const setSerchOverlay = data => (dispatch) => {
  dispatch({ type: SEARCH_OVERLAY, payload: data });
}

//check token and load user
export const loadUser = () => (dispatch, getState) => { };
