import UsersActionTypes from './users.types';

import {updateCurrentUser} from './usersUtils';

const INITIAL_STATE = {
  isSaving: false,
  errorsSaving: {},
  currentUser: null,
  isSigningIn: false,
  errorsSigningIn: {},
  isDeleting: false,
  errorsDeleting: {}
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.SAVE_USER_START:
      return {
        ...state,
        isSaving: true,
        errorsSaving: {},
        errorsSigningIn: {}
      }
    case UsersActionTypes.SAVE_USER_SUCCESS:
      return {
        ...state,
        isSaving: false,
        currentUser: updateCurrentUser(action.payload, state.currentUser)
      }
    case UsersActionTypes.SAVE_USER_FAILURE:
      return {
        ...state,
        isSaving: false,
        errorsSaving: action.payload
      }
    case UsersActionTypes.SET_CURRENT_USER_START:
      return {
        ...state,
        isSigningIn: true,
        errorsSigningIn: {}
      }
    case UsersActionTypes.SET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isSigningIn: false,
        currentUser: action.payload,
        errorsSaving: {}
      }
    case UsersActionTypes.SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        errorsSigningIn: action.payload
      }
    case UsersActionTypes.DELETE_CURRENT_USER_START:
      return {
        ...state,
        isDeleting: true
      }
    case UsersActionTypes.DELETE_CURRENT_USER_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        currentUser: null
      }
    case UsersActionTypes.DELETE_CURRENT_USER_FAILURE:
      return {
        ...state,
        isDeleting: false,
        errorsDeleting: action.payload
      }
    default:
      return state;
  }
};

export default usersReducer;