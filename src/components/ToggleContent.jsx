import React, { memo, useState } from 'react';
import ToggleHeader from './ToggleHeader';
import classNames from 'classnames';
import './ToggleContent.css';

const ToggleContent = (props) => {
  const { title, content, className, headerClassName } = props;
  const classes = classNames('toggle-content', className);
  const [ showContent, setShowContent ] = useState(false);

  const onToggle = (id, isExpanded) => {
    setShowContent(isExpanded);
  };

  return (
    <div className={classes}>
      <ToggleHeader title={title} onClick={onToggle} className={headerClassName} />
      {
        showContent
          ? (
            <div className="toggle-content__content">
              {content}
            </div>
          )
          : null
      }
    </div>
  );
};

export default memo(ToggleContent);