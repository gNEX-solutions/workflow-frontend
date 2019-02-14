import axios from 'axios';

export function login(data) {
  return dispatch => axios.post('api/auth', data);
}
