import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import jobsReducer from './jobs/jobs.reducer';
import notesReducer from './notes/notes.reducer';
import usersReducer from './users/users.reducer';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['users']
}

const rootReducer = combineReducers({
  jobs: jobsReducer,
  notes: notesReducer,
  users: usersReducer
});

export default persistReducer(persistConfig, rootReducer);