import request from 'superagent';

export const ASSESS_LOADING = 'ASSESS_LOADING';
export const ASSESS_FINISHED = 'ASSESS_FINISHED';
export const ASSESS_ERRORED = 'ASSESS_ERRORED';
export const UPDATE_RESULT = 'UPDATE_RESULT';

export const assess = (competencyResult) => {
  return dispatch => {
    dispatch({ type: ASSESS_LOADING });
    request.post('/api/assessment')
      .send(competencyResult)
      .end((err, res) => {
        if(err) {
          dispatch({ type: ASSESS_ERRORED });
        } else {
          dispatch({
            type: ASSESS_FINISHED,
            result: res.body
          });
        }
      });
  };
};

export const updateCompetencyResult = (competencyResult) => {
  return {
    type: UPDATE_RESULT,
    competencyResult
  };
};
