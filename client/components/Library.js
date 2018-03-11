import React from 'react';
import Activity from './Library/Activity';
import { calcTotalEfficiency, checkIfActivityAvailableForDelete } from './../methods';

const Library = ({ activeActivity, activePlan, activities, totalEfficiency, onResetClick, deleteActivity, onActivityClick }) => {
  const ids = Object.keys(activities);
  let activePlanIds = [];
  activePlan.forEach(act => {
    activePlanIds.push(act.id);
  });
  const deleteAllActivities = () => {
    ids.forEach(id => {
      let count = Object.keys(activities).length;
      if(count > 1) {
        let availableToDelete = checkIfActivityAvailableForDelete(id, activeActivity, activePlanIds);
        if(availableToDelete) deleteActivity(id);
      }
    });
  }
  const clickToDeleteActivity = id => {
    let notOnlyOne = Object.keys(activities).length > 1;
    let availableToDelete = checkIfActivityAvailableForDelete(id, activeActivity, activePlanIds);
    if(notOnlyOne && availableToDelete) deleteActivity(id);
  }
  const activity = ids.map(id => <Activity key={id.toString()} id={id} name={activities[id].name} minutes={activities[id].minutes} activate={onActivityClick} deleteActivity={clickToDeleteActivity} />);
  const averageEfficiencyPerDay = calcTotalEfficiency(totalEfficiency);
  return(
    <div className='library'>
      <header className='header'>
        <h2>Library</h2>
        <label>day efficiency: {averageEfficiencyPerDay}%</label>
        <button onClick={onResetClick} className='btn del-btn'>reset</button>
      </header>
      <div className='comp-wrapper'>
        <div className='subheader'>
          <label>minutes</label>
          <button onClick={deleteAllActivities} className='btn del-btn'>delete all</button>
        </div>
        <ul className='list'>
          {activity}
        </ul>
      </div>
    </div>
  );
}

export default Library;
