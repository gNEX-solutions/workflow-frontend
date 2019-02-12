import axios from 'axios';

export default function login(data) {
  return dispatch => axios.post('api/auth', data);
}
