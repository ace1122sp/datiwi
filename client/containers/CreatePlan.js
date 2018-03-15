import { connect } from 'react-redux';
import { formatTimeUnit } from './../methods';
import { fetchTimePoint } from './../actions/fetchTimePoint';
import { fetchAddedActivity, fetchRemovedActivity, fetchEnd } from './../actions/fetchPlan';
import { activateActivity, activateTimeUnit } from './../actions/active';
import { switchMainPage } from './../actions/mainPage';
import { fetchCreateActivity } from './../actions/fetchActivity';
import { fetchActivityID } from './../actions/counters';
import MainPageB from './../components/MainPage/MainPageB';

const baseUrl = 'http://localhost:9336/api/';

const mapStateToProps = state => {
  const startTime = state.timePoint;
  const startTimeStrings = {
    hours: startTime.slice(0, 2),
    minutes: startTime.slice(3, 5)
  }
  const startHours = parseInt(startTimeStrings.hours);
  const startMinutes = parseInt(startTimeStrings.minutes);

  const timeUnitsKeys = Object.keys(state.timeUnits);
  let activeIDTimeUnit = state.activeTimeUnit;
  const validActiveTimeUnit = timeUnitsKeys.some(id => id === activeIDTimeUnit);
  if(!validActiveTimeUnit) activeIDTimeUnit = timeUnitsKeys[0];

  let nextHours = startHours + parseInt(state.timeUnits[activeIDTimeUnit].hours),
        nextMinutes = startMinutes + parseInt(state.timeUnits[activeIDTimeUnit].minutes);
  if(nextMinutes >= 60) {
    let minutesLeft = nextMinutes%60;
    nextHours += Math.floor(nextMinutes/60);
    nextMinutes = minutesLeft;
  }
  if(nextHours >= 24) nextHours -= 24;

  const endHoursString = formatTimeUnit(nextHours);
  const endMinutesString = formatTimeUnit(nextMinutes);
  const endTimeStrings = {
    hours: endHoursString,
    minutes: endMinutesString
  }
  return {
    activeTimeUnit: activeIDTimeUnit,
    activeActivity: state.activeActivity,
    activePlan: [...state.activePlan],
    lastActivityID: state.idCounterActivities,
    activities: {...state.activities},
    startTime: {
      hours: startTimeStrings.hours,
      minutes: startTimeStrings.minutes
    },
    nextTime: {
      hours: endTimeStrings.hours,
      minutes: endTimeStrings.minutes
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddingActivity: (id, time) => {
      dispatch(fetchAddedActivity(`${baseUrl}active-plan/add`, id, time));
      let newTimePoint = time.endingHours + ':' + time.endingMinutes;
      dispatch(fetchTimePoint(`${baseUrl}time-point`, newTimePoint));
    },
    handleCreatingNewActivity: (val, id) => {
      dispatch(fetchCreateActivity(`${baseUrl}activity`, val, id));
      dispatch(fetchActivityID(`${baseUrl}id-counter-activities`));
      dispatch(activateActivity(id));
    },
    removeLastActivity: prevTimePoint => {
      dispatch(fetchRemovedActivity(`${baseUrl}active-plan/remove-last`));
      dispatch(fetchTimePoint(`${baseUrl}time-point`, prevTimePoint));
    },
    removeAllActivities: () => {
      dispatch(fetchEnd(`${baseUrl}active-plan/end`));
      dispatch(switchMainPage('A'));
    },
    createPlan: () => {
      dispatch(switchMainPage('C'));
    },
    autoUpdateActiveTimeUnit: id => {
      dispatch(activateTimeUnit(id));
    }
  }
}

const CreatePlan = connect(mapStateToProps, mapDispatchToProps)(MainPageB);

export default CreatePlan;
