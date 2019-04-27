import axios from 'axios';
import setAuthToken from '../../services/SetAuthToken';
import { LOGIN, GET_USER, LOGIN_SUCCESS, GET_ERRORS } from '../types/AuthTypes';

//register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/newuser', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.responce.data
      })
    );
};

export const login = data => (dispatch, history) => {
  axios
    .post('/auth/signin', data)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      })
    )
    .then(res => {
      // save to local storage
      const { token } = res.data;
      // set token to ls
      localStorage.setItem('token', token);
      // set token to auth header
      setAuthToken(token);
    })
    .then(res => history.push('/'))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.responce.data
      });
    });
  // payload:
};

//check token and load user
export const loadUser = () => (dispatch, getState) => {
  //user loading
  dispatch({ type: LOGIN });

  //get token from local storage
  const token = getState().auth.token;
  // const token =

  //Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // if token add to headers
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  axios
    .get('/userapi/me', config)
    .then(res =>
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    )
    .catch(err => {
      console.log(err);
    });
};

// export const login = data => dispatch => axios.post('/auth/signin', data);

// export function login(data) {
//   return dispatch => axios.post('api/auth', data);
// }
