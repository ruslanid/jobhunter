import {createSelector} from 'reselect';

const selectJobs = state => state.jobs;

export const selectIsAddingJob = createSelector(
  [selectJobs],
  jobs => jobs.isAdding
);

export const selectErrorsForAdding = createSelector(
  [selectJobs],
  jobs => jobs.errorsForAdding
)