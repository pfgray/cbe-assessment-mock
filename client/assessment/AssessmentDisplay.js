import React from 'react';
import { Link } from 'react-router';
import AssessmentService from './AssessmentService';

const renderResult = result => (
  <div>YAY: {JSON.stringify(result)}</div>
);

const renderError = err => (
  <div>ERROR: {JSON.stringify(err)}</div>
);

const AssessmentDisplay = ({ result }) => {
  return (
    <div className='assessment-result-container'>
      <div className='assessment-result-header'>
        <Link className='btn btn-default' to={'/assessment/source'}>{'{} source'}</Link>
      </div>
      {AssessmentService.parseResult(result, renderResult, renderError)}
    </div>
  );
};

export default AssessmentDisplay;
