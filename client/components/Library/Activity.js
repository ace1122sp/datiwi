import React from 'react';

const Activity = ({ id, name, minutes, activate, deleteActivity }) =>
  <li className='activity'>
    <button onClick={() => {
        activate(id);
      }} className='btn'>{name}
    </button>
    <span>{minutes}</span>
    <button onClick={() => deleteActivity(id)} className='btn'>x</button>
  </li>

export default Activity;
