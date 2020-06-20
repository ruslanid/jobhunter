export const addJob = (jobs, jobToAdd) => {
  const categoryExists = jobToAdd.category in jobs;

  if (categoryExists) {
    jobs[jobToAdd.category].push(jobToAdd);
    return {...jobs};
  } else {
    return {...jobs, [jobToAdd.category]: [jobToAdd]};
  }
};