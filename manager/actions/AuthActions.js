import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_USER
} from './types';

export const changedEmail = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const changedPassword = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
  Actions.main();
};

export const loginUserError = (dispatch, error) => {
  dispatch({
    type: LOGIN_ERROR,
    payload: error
  });
};

export const loginUser = ({ email, pass }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then((user) => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
          .then((user) => loginUserSuccess(dispatch, user))
          .catch((error) => loginUserError(dispatch, error.message));
      });
  };
};
