import axios from 'axios';
import {
  GET_EVENT,
  GET_EVENT_SUCCESS,
  GET_EVENT_FAIL,
  CREATE_EVENT,
  GET_EVENT_HISTORY,
  CHANGE_EVENT_ID
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
export const getMonthlyEvents = data => (dispatch, history) => {
  console.log(data)
  axios
    .get('event/filter?', {
      params: {
        year: data.year,
        month: data.month
      }
    })
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
  console.log(data);
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

export const updateEvent = data => (dispatch, history) => {
  console.log(data);
  axios
    .put('event/', data)
    .then(res =>
      dispatch({
        type: CREATE_EVENT,
        payload: res
      })
      // console.log(res)
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
}

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

//check token and load user
export const loadUser = () => (dispatch, getState) => { };
