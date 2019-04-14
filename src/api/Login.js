// import {POST} from './Core';

/**
 * Make user authentication network call
 * @param  {string}        username Username
 * @param  {string}        password Password
 * @return {Promise<any>}           Response data
 * @throws {Error}                  Throws error
 */
const authenticateUser = (username: string, password: string): Promise<any> => {
  // const endpoint = 'user/authenticate';
  // const headers = {};
  // const queryParams = {};
  // const bodyParams = {username, password};
  // return POST(endpoint, headers, queryParams, bodyParams);

  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'thisismytokenwithuseridandtokenid'
      });
    }, 500);
  });
};

export default authenticateUser;
