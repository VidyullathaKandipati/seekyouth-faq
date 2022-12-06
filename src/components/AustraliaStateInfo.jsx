import React, { memo } from 'react';
import './AustraliaStateInfo.css';
import { data } from './data';
import ToggleContent from './ToggleContent';
import parse from 'html-react-parser';

const AustraliaStateInfo = (props) => {
  return (
    <div className="australia-state-info">
      {
        data.map((d) => (
          <ToggleContent title={d.title} content={parse(d.content)} />
        ))
      }
    </div>
  );
};

export default memo(AustraliaStateInfo);