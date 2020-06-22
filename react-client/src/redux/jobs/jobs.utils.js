export const saveJob = (jobs, jobToAdd) => {
  const categoryExists = jobToAdd.category in jobs;

  if (categoryExists) {
    const jobExists = jobs[jobToAdd.category].find(job => jobToAdd.id === job.id);

    if (jobExists) {
      return jobs[jobToAdd.category].map(job => {
        if (jobToAdd.id === job.id) {
          return jobToAdd;
        } else {
          return job;
        }
      });
    } else {
      jobs[jobToAdd.category].push(jobToAdd);
      return {...jobs};
    }
  } else {
    return {...jobs, [jobToAdd.category]: [jobToAdd]};
  }
};