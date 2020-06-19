export const addJob = (jobs, jobToAdd) => {
  const categoryExists = jobs.find(job => jobToAdd.category in job);

  if (categoryExists) {
    return jobs.map(job => {
      if (jobToAdd.category in job) {
        job[jobToAdd.category].push(jobToAdd);
        return {[jobToAdd.category]: job[jobToAdd.category]};
      } else {
        return job;
      }
    });
  } else {
    return [...jobs, {[jobToAdd.category]: [jobToAdd]}];
  }
};