import React from 'react';
import TimeUnit from './IntervalsSettings/TimeUnit';

const IntervalsSettings = ({ timeUnits, lastTimeUnitID, clickToDeleteTimeUnit, submitToCreateTimeUnit, clickToCloseSettings }) => {
  const ids = (() => {
    let arrOfIds = [];
    for(let id in timeUnits) {
      arrOfIds.push(id);
    }
    return arrOfIds;
  })();
  const clickToDeleteAllTimeUnits = () => {
    ids.forEach(id => {
      clickToDeleteTimeUnit(id);
    });
  }
  let timeUnitsList = ids.map(id => <TimeUnit key={id.toString()} id={id} hours={timeUnits[id].hours} minutes={timeUnits[id].minutes} clickToDeleteTimeUnit={clickToDeleteTimeUnit} />);
  return (
    <div className="intervals-settings">
      <header className='header'>
        <h2>Time Units</h2>
        <div>
          <button onClick={clickToDeleteAllTimeUnits} className='btn del-btn'>delete all</button>
          <button onClick={clickToCloseSettings} className='btn'>close</button>
        </div>
      </header>
      <div className='settings-content'>
        {timeUnitsList}
      </div>
      <form onSubmit={e => {
        e.preventDefault();
        const id = lastTimeUnitID + 1;
        const time = e.target.startingTime.value;
        const hours = time.slice(0, 2);
        const minutes = time.slice(3, 5);
        const condition = (parseInt(hours) || parseInt(minutes));
        if(condition) submitToCreateTimeUnit(hours, minutes, id);
      }}>
        <label className='setter'>add new interval</label>
        <input type="time" name="startingTime" defaultValue="00:00" className='inp setter'/>
        <button type="submit" className='btn setter'>add</button>
      </form>
    </div>
  );
}

export default IntervalsSettings;
