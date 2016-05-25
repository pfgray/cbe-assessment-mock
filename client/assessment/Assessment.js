import React from 'react';
import { connect } from 'react-redux';
import { assess, updateCompetencyResult } from './assessmentActions';

const Assessment = ({ assessment, updateResult, assess, children }) => {
  console.log('got props: ', assessment);
  return (
    <div className="assessment">
      <div className="title">This is the assessment</div>
      <div>
        {React.cloneElement(children, {result: assessment.competencyResult, updateResult})}
      </div>
      <div className="submit">
        <button className="btn btn-warning" onClick={() => assess(assessment.competencyResult)}>
          {assessment.loading ?
            <i className="fa fa-circle-o-notch fa-spin fa-fw" />
            : <i className="fa fa-send" /> } Send To LMS
        </button>
      </div>
    </div>
  );
};

export default connect(
  state => ({
    assessment: state.assessment
  }),
  dispatch => ({
    updateResult: res => dispatch(updateCompetencyResult(res)),
    assess: res => dispatch(assess(res))
  })
)(Assessment);
