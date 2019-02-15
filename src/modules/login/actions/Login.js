import axios from 'axios';

export const POST_AUTHENTICATE_USER = 'POST_AUTHENTICATE_USER';
export const POST_AUTHENTICATE_USER_SUCCESS =
  'POSTPOST_AUTHENTICATE_USER_SUCCESS';
export const POST_AUTHENTICATE_USER_FAILURE = 'POST_AUTHENTICATE_USER_FAILURE';

export const SAVE_AUTH_DATA = 'SAVE_AUTH_DATA';
export const REMOVE_AUTH_DATA = 'REMOVE_AUTH_DATA';

export const LOGIN = 'LOGIN';

// /**
//  * Redux action for user authentication action
//  * @param   {string}            username  Username
//  * @param   {string}            password  Password
//  * @return  {FlashReduxAction}            Redux action
//  */
// export const authenticateUser = (
//   username: string,
//   password: string
// ): FlashReduxAction => ({
//   type: POST_AUTHENTICATE_USER,
//   payload: { username, password }
// });

// /**
//  * Redux action for user authentication success action
//  * @param   {string}            token   Auth token
//  * @return  {FlashReduxAction}          Redux action
//  */
// export const authenticateUserSuccess = (token: string): FlashReduxAction => ({
//   type: POST_AUTHENTICATE_USER_SUCCESS,
//   payload: { token }
// });

// /**
//  * Redux action for user authentication failure action
//  * @param   {string}            error   Reason for the failure
//  * @return  {FlashReduxAction}          Redux action
//  */
// export const authenticateUserFailure = (error: any): FlashReduxAction => ({
//   type: POST_AUTHENTICATE_USER,
//   payload: { error }
// });

// /**
//  * Redux action for storing auth data
//  * @param   {any}            authData  Username
//  * @return  {FlashReduxAction}            Redux action
//  */
// export const saveAuthData = (authData: any): FlashReduxAction => ({
//   type: SAVE_AUTH_DATA,
//   payload: { authData }
// });

// /**
//  * Redux action for removing auth data
//  * @return  {FlashReduxAction}            Redux action
//  */
// export const removeAuthData = (): FlashReduxAction => ({
//   type: REMOVE_AUTH_DATA,
//   payload: {}
// });

export const login = data => ({
  type: LOGIN,
  payload: { data }
});

// const login = data => dispatch => axios.post('api/auth', data);

// export function login(data) {
//   return dispatch => axios.post('api/auth', data);
// }
