import React from 'react';
import TimeUnit from './IntervalsShort/TimeUnit';

const IntervalsShort = ({ timeUnits, onTimeUnitClick, clickToShowSettings }) => {
  const ids = (() => {
    let arrOfIds = [];
    for(let id in timeUnits) {
      arrOfIds.push(id);
    }
    return arrOfIds;
  })();
  const timeUnitsList = ids.map(id => <TimeUnit key={id.toString()} id={id} hours={timeUnits[id].hours} minutes={timeUnits[id].minutes} activate={onTimeUnitClick} />);
  return (
    <aside>
      <button onClick={clickToShowSettings} className='btn special-btn'>edit</button>
      <div>
        {timeUnitsList}
      </div>
    </aside>
  );
}

export default IntervalsShort;
