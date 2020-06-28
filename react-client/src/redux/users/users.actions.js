import UsersActionTypes from './users.types';
import axios from 'axios';
import { ThemeConsumer } from 'styled-components';

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