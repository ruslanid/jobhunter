import JobsActionTypes from './jobs.types';

import {
  addJob
} from './jobs.utils';

const INITIAL_STATE = {
  allJobs: [],
  isAdding: false,
  errorsForAdding: {}
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
        errorsForAdding: {}
      }
    case JobsActionTypes.ADD_JOB_FAILURE:
      return {
        ...state,
        isAdding: false,
        errorsForAdding: action.payload
      }
    default:
      return state;
  }
};

export default jobsReducer;