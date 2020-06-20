import {createSelector} from 'reselect';

const selectJobs = state => state.jobs;

export const selectIsAddingJob = createSelector(
  [selectJobs],
  jobs => jobs.isAdding
);

export const selectErrorsForAdding = createSelector(
  [selectJobs],
  jobs => jobs.errorsAdding
);

export const selectAllJobs = createSelector(
  [selectJobs],
  jobs => jobs.allJobs
);

export const selectAreJobsLoaded = createSelector(
  [selectJobs],
  jobs => !!jobs.allJobs
)