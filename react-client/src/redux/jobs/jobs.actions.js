import axios from 'axios';

import JobsActionTypes from './jobs.types';

//
// ADD JOB
//
const addJobStart = () => ({
  type: JobsActionTypes.ADD_JOB_START
});

const addJobSuccess = job => ({
  type: JobsActionTypes.ADD_JOB_SUCCESS,
  payload: job
});

const addJobFailure = error => ({
  type: JobsActionTypes.ADD_JOB_FAILURE,
  payload: error
});

export const addJob = job => {
  return dispatch => {
    dispatch(addJobStart());

    axios.post('/api/jobs', job)
    .then (res => dispatch(addJobSuccess(res.data)))
    .catch(error => dispatch(addJobFailure(error.response.data)))
  }
};

//
// FETCH JOBS
//

const fetchJobsStart = () => ({
  type: JobsActionTypes.FETCH_JOBS_START
});

const fetchJobsSuccess = job => ({
  type: JobsActionTypes.FETCH_JOBS_SUCCESS,
  payload: job
});

const fetchJobsFailure = error => ({
  type: JobsActionTypes.FETCH_JOBS_FAILURE,
  payload: error
});

export const fetchJobs = job => {
  return dispatch => {
    dispatch(fetchJobsStart());

    axios.get('/api/jobs')
    .then (res => {
      const jobsByCategory = {
        "Interested": [],
        "Applied": [],
        "Hot": [],
        "Cold": [],
        "Offer": [],
        "Rejected": []
      };
      
      res.data.map(job => {
        if (job.category) {
          jobsByCategory[job.category].push(job);
        }
      });

      dispatch(fetchJobsSuccess(jobsByCategory));
    })
    .catch(error => {
      dispatch(fetchJobsFailure(error.response.data));
    })
  };
};

//
// FETCH JOB
//

const fetchJobStart = () => ({
  type: JobsActionTypes.FETCH_JOB_START
});

const fetchJobSuccess = job => ({
  type: JobsActionTypes.FETCH_JOB_SUCCESS,
  payload: job
});

export const fetchJob = (jobId, history) => {
  return dispatch => {
    dispatch(fetchJobStart());

    axios.get(`/api/jobs/${jobId}`)
    .then(res => dispatch(fetchJobSuccess(res.data)))
    .catch(error => history.push("/jobs"))
  }
};