import React from 'react';
import ActivityUnit from './B/ActivityUnit';

const MainPageB = ({ activeTimeUnit, activeActivity, activePlan, lastActivityID, activities, startTime, nextTime, handleAddingActivity, handleCreatingNewActivity, removeLastActivity, removeAllActivities, createPlan, autoUpdateActiveTimeUnit }) => {
  let activityUnits = activePlan.map((unit, index) => {
    let unitTime = {
      startingHours: unit.startingHours,
      startingMinutes: unit.startingMinutes,
      endingHours: unit.endingHours,
      endingMinutes: unit.endingMinutes
    };
    return <ActivityUnit key={unit.id.toString() + index.toString()} name={activities[unit.id].name} time={unitTime} />;
  });
  autoUpdateActiveTimeUnit(activeTimeUnit);
  const time = {
    startingHours: startTime.hours,
    startingMinutes: startTime.minutes,
    endingHours: nextTime.hours,
    endingMinutes: nextTime.minutes
  }
  const last = activePlan.length;
  const clickToRemoveLastActivity = () => {
    if(last) {
      const lastTime = `${activePlan[last-1].startingHours}:${activePlan[last-1].startingMinutes}`;
      removeLastActivity(lastTime);
    }
  }
  const handleCreatingPlan = () => {
    if (last) createPlan(activePlan);
  }
  return (
    <div className='main-b'>
      <header className='header'>
        <h2>Create Plan</h2>
      </header>
      <ul className='list'>
        {activityUnits}
      </ul>
      <div className='comp-wrapper adding-activity-section'>
        <label><span>{startTime.hours}</span>:<span>{startTime.minutes}</span> - <span>{nextTime.hours}</span>:<span>{nextTime.minutes}</span></label>
        <label>{activities[activeActivity].name}</label>
        <input type='submit' value='add' onClick={() => {
          handleAddingActivity(activeActivity, time);
        }} className='btn'/>
      </div>
      <form onSubmit={event => {
        event.preventDefault();
        const val = event.target.newActivity.value;
        const id = lastActivityID + 1;
        if(val.length) handleCreatingNewActivity(val, id);
      }}>
        <input type='text' name='newActivity' placeholder='new activity' className='inp'/>
        <input type='submit' value='create' className='btn'/>
      </form>
      <div className='rmv-btns-section'>
        <button onClick={clickToRemoveLastActivity} className='btn'>remove last activity</button>
        <button onClick={handleCreatingPlan} className='btn submit-btn'>submit</button>
        <button onClick={removeAllActivities} className='btn del-btn'>remove all activities</button>
      </div>
    </div>
  );
}

export default MainPageB;
