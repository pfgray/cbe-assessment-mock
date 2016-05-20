
import React from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';
import defaultAssessment from './defaultAssessment.js';

import 'brace/mode/json';
import 'brace/theme/monokai';

function onChange(newValue) {
  console.log('change', newValue);
}

const Assessment = () => (
  <div className="assessment">
    <div className="title">This is the assessment</div>
    <div>
      <AceEditor
        mode="json"
        theme="monokai"
        onChange={onChange}
        value={JSON.stringify(defaultAssessment, null, 2)}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: false }}
        showGutter={false}
        setOptions= {{
          showPrintMargin: false,
          fontSize: 18
        }}
        height={600}
        width={900}
      />
    </div>
    <div className="submit">
      <button className="btn btn-warning"><i className="fa fa-envelope" />Send To LMS</button>
    </div>
  </div>
);

export default Assessment;
