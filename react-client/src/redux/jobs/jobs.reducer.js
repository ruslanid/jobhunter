import JobsActionTypes from './jobs.types';

import {
  addJob
} from './jobs.utils';

const INITIAL_STATE = {
  allJobs: null,
  job: null,
  errorsAdding: {},
  errorsFetching: {}
};

const jobsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case JobsActionTypes.ADD_JOB_START:
      return {
        ...state,
        isAdding: true
      }
    case JobsActionTypes.ADD_JOB_SUCCESS:
      return {
        ...state,
        isAdding: false,
        allJobs: addJob(state.allJobs, action.payload),
        errorsAdding: {}
      }
    case JobsActionTypes.ADD_JOB_FAILURE:
      return {
        ...state,
        isAdding: false,
        errorsAdding: action.payload
      }
    case JobsActionTypes.FETCH_JOBS_START:
      return {
        ...state,
        isFetching: true
      }
    case JobsActionTypes.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        allJobs: action.payload,
        errorsFetching: {}
      }
    case JobsActionTypes.FETCH_JOBS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorsFetching: action.payload
      }
      case JobsActionTypes.FETCH_JOB_START:
        return {
          ...state,
          isFetching: true
        }
      case JobsActionTypes.FETCH_JOB_SUCCESS:
        return {
          ...state,
          isFetching: false,
          job: action.payload,
          errorsFetching: {}
        }
    default:
      return state;
  }
};

export default jobsReducer;