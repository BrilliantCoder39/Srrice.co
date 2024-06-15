// rootReducer.js

import { combineReducers } from 'redux';
import humanReducer from './humanReducer';
import styledReducer from './projectStatusReducer';
// Import other reducers if you have them

const rootReducer = combineReducers({
  human: humanReducer,
  activedProjecs: styledReducer,
  // Add other reducers here
});

export default rootReducer;
