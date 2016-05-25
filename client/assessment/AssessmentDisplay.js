import React from 'react';
import { Link } from 'react-router'


const AssessmentDisplay = ({result}) => {
  return (
    <div className='assessment-result-container'>
      <div className='assessment-result-header'>
        <Link className='btn btn-default' to={'/assessment/source'}>{'{} source'}</Link>
      </div>
      <div>
        hmmm {result}
      </div>
    </div>
  );
}

export default AssessmentDisplay;
