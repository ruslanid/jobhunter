import UsersActionTypes from './users.types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setJwtInHeader from './usersUtils';

//
// SAVE USER (SIGN UP AND UPDATE)
//
const saveUserStart = () => ({
  type: UsersActionTypes.SAVE_USER_START
});

const saveUserSuccess = () => ({
  type: UsersActionTypes.SAVE_USER_SUCCESS
});

const saveUserFailure = error => ({
  type: UsersActionTypes.SAVE_USER_FAILURE,
  payload: error
});

export const signupUser = (user, history) => {
  return dispatch => {
    dispatch(saveUserStart());

    axios.post(`/api/users/register`, user)
    .then(res => {
      dispatch(saveUserSuccess());
      history.push("/sign-in");
    })
    .catch(error => dispatch(saveUserFailure(error.response.data)))
  }
};

//
// SET CURRENT USER AFTER SIGN IN OR LOCAL STORAGE
//
const setCurrentUserStart = () => ({
  type: UsersActionTypes.SET_CURRENT_USER_START
});

const setCurrentUserSuccess = user => ({
  type: UsersActionTypes.SET_CURRENT_USER_SUCCESS,
  payload: user
});

const setCurrentUserFailure = error => ({
  type: UsersActionTypes.SET_CURRENT_USER_FAILURE,
  payload: error
});

export const signinUser = (user, history) => {
  return dispatch => {
    dispatch(setCurrentUserStart());

    axios.post('/api/users/login', user)
    .then(res => {
      const {token} = res.data;
      const decoded_jwt = jwt_decode(token);
      dispatch(setCurrentUserSuccess(decoded_jwt));
      localStorage.setItem("token", token);
      setJwtInHeader(token);
      history.push("/");
    })
    .catch(error => {
      console.log(error);
      dispatch(setCurrentUserFailure(error.response.data))})
  }
};

const removeCurrentUser = () => ({
  type: UsersActionTypes.REMOVE_CURRENT_USER
});

export const verifyCurrentUser = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      const decoded_jwt = jwt_decode(token);
      if (decoded_jwt.exp < (Date.now() / 1000)) {
        localStorage.removeItem("token");
        dispatch(removeCurrentUser());
      } else {
        setJwtInHeader(token);
        dispatch(setCurrentUserSuccess(decoded_jwt));
      }
    }
  }
};

export const signoutUser = () => {
  return dispatch => {
    localStorage.removeItem("token");
    dispatch(removeCurrentUser());
  }
};