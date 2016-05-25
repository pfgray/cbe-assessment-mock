import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import classNames from 'classnames';
import AssessmentService from './AssessmentService';

const Levels = [
    "Incomplete", "Basic", "Proficient", "Mastered"
];

const renderResult = setLevel => result => (
  <div>
    {result.competencies.map(comp => (
      <div className="competency">
        <div className="statement">{comp.statement}</div>
        <div>{comp.achievementLevel.label}</div>
        <div>
          {Levels.map(level => (
            <button className={classNames({
                "btn btn-default": true,
                "faded": level !== comp.achievementLevel.label
              })}
              onClick={() => setLevel(result, comp, level)}>
              {level}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const renderError = err => (
  <div>ERROR: {err.toString()}</div>
);

const changeResultLevel = (updateResult) => (result, competency, level) => {
  result.competencies =
    result.competencies.map(comp => {
      if(_.isEqual(comp, competency)) {
        comp.achievementLevel['@id'] = level;
        comp.achievementLevel.label = level;
      }
      return comp;
    });
  updateResult(JSON.stringify(result, null, 2));
};

const AssessmentDisplay = ({ result, updateResult }) => {
  return (
    <div className='assessment-result-container'>
      <div className='assessment-result-header'>
        <Link className='btn btn-default' to={'/assessment/source'}>{'{} source'}</Link>
      </div>
      <div className="bordered">
        {AssessmentService.parseResult(result, renderResult(changeResultLevel(updateResult)), renderError)}
      </div>
    </div>
  );
};

export default AssessmentDisplay;
