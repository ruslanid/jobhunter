import axios from 'axios';
import JobsActionTypes from './jobs.types';

//
// SAVE JOB
//
const saveJobStart = () => ({
  type: JobsActionTypes.SAVE_JOB_START
});

const saveJobSuccess = job => ({
  type: JobsActionTypes.SAVE_JOB_SUCCESS,
  payload: job
});

const saveJobFailure = error => ({
  type: JobsActionTypes.SAVE_JOB_FAILURE,
  payload: error
});

export const addJob = job => {
  return dispatch => {
    dispatch(saveJobStart());

    axios.post('/api/jobs', job)
    .then (res => dispatch(saveJobSuccess(res.data)))
    .catch(error => dispatch(saveJobFailure(error.response.data)))
  }
};

export const saveJob = (job, history) => {
  return dispatch => {
    console.log(job);
    dispatch(saveJobStart());

    axios.put('/api/jobs', job)
    .then (res => {
      dispatch(saveJobSuccess(res.data));
      history.push(`/jobs/${job.id}`);
    })
    .catch(error => {
      console.log("here ------------------>");
      console.log(error);
      dispatch(saveJobFailure(error.response.data))
    })
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

export const fetchJobs = () => {
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