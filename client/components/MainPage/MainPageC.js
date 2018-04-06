import React from 'react';
import { getActivityDurationInMinutes, allActivitiesFinished } from './../../methods';
import Activity from './C/Activity';

const calcDayEfficiency = activitiesArr => {
  let completedMinutes = 0;
  let totalMinutes = 0;
  activitiesArr.forEach(act => {
    let activityMinutes = getActivityDurationInMinutes(act.startingMinutes, act.endingMinutes, act.startingHours, act.endingHours);
    totalMinutes += activityMinutes;
    if(act.status === 'completed') completedMinutes += activityMinutes;
  });
  return completedMinutes/totalMinutes;
}

const MainPageC = ({ activePlan, activities, handleChangingStatus, finishingPlan, handleUpdatingActivityStats, handleSendingTodayEfficiency }) => {
  let activitiesList = activePlan.map((activity, index) => {
    let time = {
      startingHours: activity.startingHours,
      startingMinutes: activity.startingMinutes,
      endingHours: activity.endingHours,
      endingMinutes: activity.endingMinutes
    }
    return <Activity key={activity.id.toString()+index.toString()} index={index} name={activities[activity.id].name} status={activity.status} time={time} changeStatus={handleChangingStatus} />;
  });
  const clickToFinishPlan = () => {
    if(allActivitiesFinished(activePlan)) {
      const dayEff = calcDayEfficiency(activePlan);
      activePlan.forEach(act => {
        if(act.status === 'completed') {
          let totalMinutes = getActivityDurationInMinutes(act.startingMinutes, act.endingMinutes, act.startingHours, act.endingHours);
          handleUpdatingActivityStats(act.id, totalMinutes);
        }
      });
      handleSendingTodayEfficiency(dayEff);
      finishingPlan(); 
    }
  }
  return (
    <div className="main-c">
      <header className='header'>
        <h2>Daily Plan</h2>
      </header>
      <ul className='list'>
        {activitiesList}
      </ul><br/>
      <button onClick={clickToFinishPlan} className='btn submit-btn'>finish</button>
      <button onClick={finishingPlan} className='btn del-btn'>discard</button>
    </div>
  );
}

export default MainPageC;
