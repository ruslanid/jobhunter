import {createSelector} from 'reselect';

const selectUsers = state => state.users;

export const selectCurrentUser = createSelector(
  [selectUsers],
  users => users.currentUser
);

export const selectIsSaving = createSelector(
  [selectUsers],
  users => users.isSaving
);

export const selectErrorsSaving = createSelector(
  [selectUsers],
  users => users.errorsSaving
);

export const selectIsSigningIn = createSelector(
  [selectUsers],
  users => users.isSigningIn
);

export const selectErrorsSigningIn = createSelector(
  [selectUsers],
  users => users.errorsSigningIn
);

export const selectIsDeletingUser = createSelector(
  [selectUsers],
  users => users.isDeleting
);