import {
  ASSESS_LOADING, ASSESS_FINISHED,
  ASSESS_ERRORED, UPDATE_RESULT
} from './assessmentActions';
import defaultAssessment from './defaultAssessment.js';

const defaultState = {
  competencyResult: defaultAssessment
};

const mergeIt = state => newState => Object.assign({}, state, newState);

export const assessmentReducer = (state = defaultState, action) => {
  const mergeToState = mergeIt(state);
  switch (action.type) {
  case ASSESS_LOADING:
    return mergeToState({
      loading: true
    });
  case ASSESS_FINISHED:
    return mergeToState({
      loading: false
    });
  case ASSESS_ERRORED:
    return mergeToState({
      loading: false
    });
  case UPDATE_RESULT:
    return mergeToState({
      competencyResult: action.competencyResult
    });
  default:
    return state;
  }
};
