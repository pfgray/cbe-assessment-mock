import { combineReducers } from 'redux';
import { assessmentReducer } from '../assessment/assessmentReducer';

export default combineReducers({
  user: () => window.lti ? window.lti.user : null,
  assessment: assessmentReducer
});
