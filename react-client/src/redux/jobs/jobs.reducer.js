import JobsActionTypes from './jobs.types';
import NotesActionTypes from '../notes/notes.types';

import {
  saveJob,
  deleteJob,
  saveNoteToJob,
  deleteNoteFromJob
} from './jobs.utils';

const INITIAL_STATE = {
  allJobs: null,
  job: null,
  isSaving: false,
  isDeleting: false,
  errorsSaving: {},
  errorsFetching: {},
  errorsDeleting: {}
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
        allJobs: null
      }
    case JobsActionTypes.FETCH_JOBS_SUCCESS:
      return {
        ...state,
        allJobs: action.payload,
        errorsFetching: {}
      }
    case JobsActionTypes.FETCH_JOBS_FAILURE:
      return {
        ...state,
        errorsFetching: action.payload
      }
    case JobsActionTypes.FETCH_JOB_START:
      return {
        ...state,
        job: null,
        errorsSaving: {},
        errorsDeleting: {}
      }
    case JobsActionTypes.FETCH_JOB_SUCCESS:
      return {
        ...state,
        job: action.payload,
        errorsFetching: {}
      }
    case JobsActionTypes.DELETE_JOB_START:
      return {
        ...state,
        isDeleting: true
      }
    case JobsActionTypes.DELETE_JOB_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        allJobs: deleteJob(state.allJobs, action.payload)
      }
    case JobsActionTypes.DELETE_JOB_FAILURE:
      return {
        ...state,
        isDeleting: false,
        errorsDeleting: action.payload
      }
    case NotesActionTypes.SAVE_NOTE_SUCCESS:
      return {
        ...state,
        job: saveNoteToJob(state.job, action.payload)
      }
    case NotesActionTypes.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        job: deleteNoteFromJob(state.job, action.payload)
      }
    default:
      return state;
  }
};

export default jobsReducer;