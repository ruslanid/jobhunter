export const saveJob = (jobs, jobToSave) => {
    const jobExists = jobs.find(job => jobToSave.id === job.id);

    if (jobExists) {
      return jobs.map(job => {
        if (job.id === jobToSave.id) {
          return jobToSave;
        } else {
          return job;
        }
      });
    } else {
      return [...jobs, {...jobToSave}];
    }
};

export const deleteJob = (jobs, jobId) => {
  return jobs.filter(job => job.id !== jobId);
};