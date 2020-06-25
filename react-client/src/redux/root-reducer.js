import {combineReducers} from 'redux';

import jobsReducer from './jobs/jobs.reducer';
import notesReducer from './notes/notes.reducer';

const rootReducer = combineReducers({
  jobs: jobsReducer,
  notes: notesReducer
});

export default rootReducer;