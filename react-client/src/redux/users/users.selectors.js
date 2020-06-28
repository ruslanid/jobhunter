import {createSelector} from 'reselect';

const selectUsers = state => state.users;

export const selectIsSaving = createSelector(
  [selectUsers],
  users => users.isSaving
);

export const selectErrorsSaving = createSelector(
  [selectUsers],
  users => users.errorsSaving
);