import {combineReducers} from 'redux';

import jobsReducer from './jobs/jobs.reducer';
import notesReducer from './notes/notes.reducer';
import usersReducer from './users/users.reducer';

const rootReducer = combineReducers({
  jobs: jobsReducer,
  notes: notesReducer,
  users: usersReducer
});

export default rootReducer;