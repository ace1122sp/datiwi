import React from 'react';

const TimeUnit = ({ id, hours, minutes, activate }) =>
  <button onClick={() => {activate(id);}} className='btn'>{hours}:{minutes}</button>

export default TimeUnit;
