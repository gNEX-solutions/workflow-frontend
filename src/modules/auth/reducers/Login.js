import { createReducer } from 'reduxsauce';
import { LOGIN } from '../actions/types';

const INITIAL_STATE = {
  token: {}
};

// import type { SessionData } from 'ancon-flash-lib/src/types/Auth';
// import {
//   SAVE_AUTH_DATA,
//   REMOVE_AUTH_DATA
// } from 'ancon-flash-lib/src/modules/auth/actions/SignIn';
// import { SIGN_OUT } from 'ancon-flash-lib/src/shared/actions/Auth';

// export type StoreAuthState = {
//   authData: SessionData | null
// };

// export const INITIAL_STATE: StoreAuthState = {
//   authData: null
// };

// const saveAuthData = (
//   state: StoreAuthState = INITIAL_STATE,
//   { payload: { authData } }: FlashReduxAction
// ): StoreAuthState => ({
//   ...state,
//   authData
// });

// const removeAuthData = (
//   state: StoreAuthState = INITIAL_STATE,
//   { payload }: FlashReduxAction
// ): StoreAuthState => ({
//   ...state,
//   authData: null
// });

// const signOut = (state: StoreAuthState = INITIAL_STATE): StoreAuthState =>
//   INITIAL_STATE;

// const ACTION_HANDLERS = {
//   [SAVE_AUTH_DATA]: saveAuthData,
//   [REMOVE_AUTH_DATA]: removeAuthData,

//   [SIGN_OUT]: signOut
// };

// export default createReducer(INITIAL_STATE, ACTION_HANDLERS);

const login = (state = INITIAL_STATE, { payload }) => ({
  ...state
});

const ACTION_HANDLERS = {
  [LOGIN]: login
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
