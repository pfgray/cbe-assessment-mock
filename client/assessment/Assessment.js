import React from 'react';
import { connect } from 'react-redux';
import brace from 'brace';
import AceEditor from 'react-ace';
import { assess, updateCompetencyResult } from './assessmentActions';

import 'brace/mode/json';
import 'brace/theme/monokai';

const Assessment = ({ assessment, updateResult, assess }) => {
  console.log('got props: ', assessment);
  return (
    <div className="assessment">
      <div className="title">This is the assessment</div>
      <div>
        <AceEditor
          mode="json"
          theme="monokai"
          onChange={updateResult}
          value={JSON.stringify(assessment.competencyResult, null, 2)}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: false }}
          showGutter={false}
          setOptions= {{
            showPrintMargin: false,
            fontSize: 18
          }}
          height={'600px'}
          width={'900px'}
        />
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
