import React from 'react';

const Activity = ({ index, name, status, time, changeStatus }) =>
  <li className='activity'>
    <span>{time.startingHours}:{time.startingMinutes} - {time.endingHours}:{time.endingMinutes}</span>
    <strong onClick={() => {changeStatus(index)}} className='c-page-activity'>{name}</strong>
    <span className='status'>{status}</span>
  </li>

export default Activity;
