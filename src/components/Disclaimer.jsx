import React, { memo } from 'react';
import './Disclaimer.css';

const Disclaimer = (props) => {
  return (
    <div className="disclaimer">
      <div>
        <p>Guideline only, always check your local employment laws before publishing a job ad.</p>
        <p>Last edited in December 2022</p>
      </div>
    </div>
  );
};

export default memo(Disclaimer);