import React from 'react';

const ActivityUnit = ({ name, time }) =>
  <li className='activity'>
    <span>{time.startingHours}:{time.startingMinutes} - {time.endingHours}:{time.endingMinutes}</span>
    <strong>{name}</strong>
  </li>

export default ActivityUnit;
