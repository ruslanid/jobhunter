import axios from 'axios';

import JobsActionTypes from './jobs.types';

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
