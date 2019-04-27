import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // apply to every request
    axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
  } else {
    // delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
