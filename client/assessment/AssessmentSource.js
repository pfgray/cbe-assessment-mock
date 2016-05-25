import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import { Link } from 'react-router';

import 'brace/mode/json';
import 'brace/theme/monokai';

const AssessmentSource = ({ result, updateResult }) => {
  return (
    <div className='assessment-result-container'>
      <div className='assessment-result-header'>
        <Link className='btn btn-default' to={'/assessment'}>
          <i className="fa fa-file-o" aria-hidden="true"></i> display
        </Link>
      </div>
      <div>
        <AceEditor
            mode="json"
            theme="monokai"
            onChange={updateResult}
            value={result}
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
    </div>
  );
};

export default AssessmentSource;
