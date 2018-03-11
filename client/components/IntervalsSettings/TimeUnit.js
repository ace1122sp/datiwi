import React from 'react';

const TimeUnit = ({ id, hours, minutes, clickToDeleteTimeUnit }) =>
  <div className='time-unit-settings'>
    <label className='setter'>{hours}:{minutes}</label>
    <button onClick={() => {
      clickToDeleteTimeUnit(id);
    }} className='btn setter'>x
    </button>
  </div>

export default TimeUnit;
