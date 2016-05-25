import request from 'superagent';
import AssessmentService from './AssessmentService';

export const ASSESS_LOADING = 'ASSESS_LOADING';
export const ASSESS_FINISHED = 'ASSESS_FINISHED';
export const ASSESS_ERRORED = 'ASSESS_ERRORED';
export const UPDATE_RESULT = 'UPDATE_RESULT';

export const assess = (competencyResultString) => {
  return dispatch => {
    dispatch({ type: ASSESS_LOADING });
    AssessmentService.parseResult(competencyResultString,
      result => {
        request.post('/api/assessment')
          .send(result)
          .end((err, response) => {
            if(err) {
              dispatch({ type: ASSESS_ERRORED });
            } else {
              dispatch({
                type: ASSESS_FINISHED,
                result: response.body
              });
            }
          });
      }, () => {});
  };
};

export const updateCompetencyResult = (competencyResult) => {
  return {
    type: UPDATE_RESULT,
    competencyResult
  };
};
