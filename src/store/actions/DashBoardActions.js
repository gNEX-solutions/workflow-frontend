import axios from 'axios';
import {
  // GET_EVENT,
  GET_EVENT_SUCCESS,
  // GET_EVENT_FAIL,
  // CREATE_EVENT,
  GET_EVENT_HISTORY,
  CHANGE_EVENT_ID,
  GET_EXPLORER_EVENTS,
  UPDATE_SEARCH_SUGGESTIONS,
  SEARCH_OVERLAY
} from '../types/DashBoardTypes';
const URL = "https://tecops-backend.herokuapp.com";
// const URL = "";

export const getEvent = data => (dispatch, history) => {
  axios
    .post(URL + '/eventapi/events', data)
    .then(res =>
      // console.log(res)
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
  console.log(data);
  axios
    .get(URL + '/event/filter?', {
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
      // console.log(res)
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
};

export const getSearchEvents = data => (dispatch, history) => {
  console.log(data);
  axios
    .get(URL + '/event/search?', {
      params: {
        name: data
      }
    })
    .then(res =>
      dispatch({
        type: UPDATE_SEARCH_SUGGESTIONS,
        payload: res
      })
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
};

export const getExplorerEvents = data => (dispatch, history) => {
  console.log('ee data ' + data);
  axios
    .get(URL + '/event/filter?', {
      params: {
        year: data.year
      }
    })
    .then(res =>
      dispatch({
        type: GET_EXPLORER_EVENTS,
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
    .post(URL + '/event/', data)
    .then(res =>
      // dispatch({
      //   type: CREATE_EVENT,
      //   payload: res
      // })
      console.log(res)
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
};

export const updateEvent = data => (dispatch, history) => {

  console.log(data);
  axios
    .put(URL + '/event/', data)
    .then(
      res =>
        //   // dispatch({
        //   //   type: CREATE_EVENT,
        //   //   payload: res
        //   // })
        console.log(res)
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
};

export const deleteEvent = data => (dispatch, history) => {
  console.log(data);
  axios
    .delete(URL + '/event/' + data)
    .then(res =>
      //   dispatch({
      //     type: CREATE_EVENT,
      //     payload: res
      //   })
      console.log(res)
    )
    .catch(err => {
      console.log(err);
    });
  // payload:
};

export const getPastEvents = data => (dispatch, history) => {
  axios
    .post(URL + '/eventapi/eventpast', data)
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

// export const setSearchSuggestions = data => (dispatch, history) => {
//   dispatch({ type: UPDATE_SEARCH_SUGGESTIONS, payload: data });
// }

export const setSerchOverlay = data => (dispatch) => {
  dispatch({ type: SEARCH_OVERLAY, payload: data });
}

//check token and load user
export const loadUser = () => (dispatch, getState) => { };
