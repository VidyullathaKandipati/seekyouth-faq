import React, { memo, useState } from 'react';
import './SeekYouthInformation.css';
import { data } from './data';
import ToggleContent from './ToggleContent';
import parse from 'html-react-parser';
import ToggleHeader from './ToggleHeader';

const SeekYouthInformation = () => {
  const renderContent = () => {
    return data.map((d, index) => {
      return (
        d.states
          ? <CountryInformation key={index} title={d.title} states={d.states} />
          : <ToggleContent key={index} title={d.title} content={parse(d.content)} headerClassName="seek-youth-information__header" />
      );
    });
  }

  return (
    <div className="seek-youth-information">
      { renderContent() }
    </div>
  );
};

const CountryInformation = memo((props) => {
  const { title, states } = props;
  const [ showContent, setShowContent ] = useState(false); 

  const onClickHandler = (id, isExpanded) => {
    setShowContent(isExpanded);
  }

  const renderStateInformation = () => {
    return states.map((state, index) => {
      return <ToggleContent key={index} title={state.title} content={parse(state.content)} headerClassName="seek-youth-information__header" className="seek-youth-information__country__toggle-content" />
    });
  }

  return (
    <div className="seek-youth-information__country-content">
      <ToggleHeader title={title} onClick={onClickHandler} className="seek-youth-information__header" />
      {
        showContent
          ? renderStateInformation()
          : null
      }
    </div>
  );
});

export default memo(SeekYouthInformation);