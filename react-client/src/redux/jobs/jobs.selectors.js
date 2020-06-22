import {createSelector} from 'reselect';

const selectJobs = state => state.jobs;

export const selectIsSavingJob = createSelector(
  [selectJobs],
  jobs => jobs.isSaving
);

export const selectErrorsSaving = createSelector(
  [selectJobs],
  jobs => jobs.errorsSaving
);

export const selectAllJobs = createSelector(
  [selectJobs],
  jobs => jobs.allJobs
);

export const selectAreJobsLoaded = createSelector(
  [selectJobs],
  jobs => !!jobs.allJobs
);

export const selectJob = createSelector(
  [selectJobs],
  jobs => jobs.job
)

export const selectIsJobLoaded = createSelector(
  [selectJobs],
  jobs => !!jobs.job
);