import { combineReducers } from 'redux';

export default combineReducers({
  user: () => window.lti ? window.lti.user : null
});
