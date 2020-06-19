import {combineReducers} from 'redux';

import jobsReducer from './jobs/jobs.reducer';

const rootReducer = combineReducers({
  jobs: jobsReducer
});

export default rootReducer;