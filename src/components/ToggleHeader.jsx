import React, { memo, useCallback, useState } from "react";
import classNames from 'classnames';
import ArrowDown from '../images/arrow-down.svg';
import ArrowUp from '../images/arrow-up.svg';
import './ToggleHeader.css';

const ToggleHeader = (props) => {
  const { id, title, onClick, className } = props;
  const classes = classNames('toggle-header', className);
  const [ isExpanded, setIsExpanded ] = useState(false);


  const onClickHandler = () => {
    onClick?.(id, !isExpanded);
    setIsExpanded(!isExpanded);
  };

  const icon = isExpanded ? ArrowUp : ArrowDown;

  return (
    <div className={classes} onClick={onClickHandler}>
      <div className="toggle-header__title">{title}</div>
      <div className="toggle-header__toggle-icon">
        <img src={icon} />
      </div>
    </div>
  );
};

export default memo(ToggleHeader);