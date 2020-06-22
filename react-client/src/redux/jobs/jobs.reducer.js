import JobsActionTypes from './jobs.types';

import {
  saveJob
} from './jobs.utils';

const INITIAL_STATE = {
  allJobs: null,
  job: null,
  isSaving: false,
  errorsSaving: {},
  errorsFetching: {}
};

const jobsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case JobsActionTypes.SAVE_JOB_START:
      return {
        ...state,
        isSaving: true
      }
    case JobsActionTypes.SAVE_JOB_SUCCESS:
      return {
        ...state,
        isSaving: false,
        allJobs: saveJob(state.allJobs, action.payload),
        job: action.payload,
        errorsSaving: {}
      }
    case JobsActionTypes.SAVE_JOB_FAILURE:
      return {
        ...state,
        isSaving: false,
        errorsSaving: action.payload
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