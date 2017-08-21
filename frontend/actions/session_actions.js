import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  };
};

export const signUp = (user) => (dispatch) => {
  return APIUtil.signUp(user).then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logIn = (user) => (dispatch) => {
  return APIUtil.logIn(user).then(
    (user) => (dispatch(receiveCurrentUser(user))),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logOut = () => (dispatch) => {
  return APIUtil.logOut().then(
    () => (dispatch(receiveCurrentUser(null)))
  );
};
