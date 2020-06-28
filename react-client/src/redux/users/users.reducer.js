import UsersActionTypes from './users.types';

const INITIAL_STATE = {
  isSaving: false,
  errorsSaving: {}
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
    default:
      return state;
  }
};

export default usersReducer;