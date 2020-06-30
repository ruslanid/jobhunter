import UsersActionTypes from './users.types';

const INITIAL_STATE = {
  isSaving: false,
  errorsSaving: {},
  currentUser: null,
  isSigningIn: false,
  errorsSigningIn: {}
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersActionTypes.SAVE_USER_START:
      return {
        ...state,
        isSaving: true,
        errorsSaving: {}
      }
    case UsersActionTypes.SAVE_USER_SUCCESS:
      return {
        ...state,
        isSaving: false
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
        currentUser: action.payload
      }
    case UsersActionTypes.SET_CURRENT_USER_FAILURE:
      return {
        ...state,
        isSigningIn: false,
        errorsSigningIn: action.payload
      }
    case UsersActionTypes.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      }
    default:
      return state;
  }
};

export default usersReducer;