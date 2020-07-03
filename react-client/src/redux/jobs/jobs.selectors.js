import {createSelector} from 'reselect';

const selectJobs = state => state.jobs;

export const selectIsSaving = createSelector(
  [selectJobs],
  jobs => jobs.isSaving
);

export const selectErrorsSaving = createSelector(
  [selectJobs],
  jobs => jobs.errorsSaving
);

export const selectAllJobs = createSelector(
  [selectJobs],
  jobs => {
    const jobsByCategory = {
      "Interested": [],
      "Applied": [],
      "Hot": [],
      "Cold": [],
      "Offer": [],
      "Rejected": []
    };

    jobs.allJobs.forEach(job => {
      if (job.category) {
        jobsByCategory[job.category].push(job);
      }
    });

    return jobsByCategory;
  }
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

export const selectIsDeleting = createSelector(
  [selectJobs],
  jobs => jobs.isDeleting
);

export const selectIsDeletingAllJobs = createSelector(
  [selectJobs],
  jobs => jobs.isDeletingAll
)