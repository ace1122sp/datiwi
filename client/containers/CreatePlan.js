import { connect } from 'react-redux';
import { formatTimeUnit } from './../methods';
import { addActivity, removeLastActivity, setTimePoint } from './../actions/productionPlan';
import { endPlan } from './../actions/activePlan';
import { activateActivity, activateTimeUnit } from './../actions/active';
import { switchMainPage } from './../actions/mainPage';
import { fetchCreateActivity } from './../actions/fetchActivity';
import { fetchActivityID } from './../actions/fetchCounters';
import { fetchPlan } from './../actions/fetchPlan';
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
      dispatch(addActivity(id, time));
      let newTimePoint = time.endingHours + ':' + time.endingMinutes;
      dispatch(setTimePoint(newTimePoint));
    },
    handleCreatingNewActivity: (name, id) => {
      dispatch(fetchCreateActivity(`${baseUrl}activity`, name, id));
      dispatch(fetchActivityID(`${baseUrl}id-counter-activities`));
      dispatch(activateActivity(id));
    },
    removeLastActivity: prevTimePoint => {
      dispatch(removeLastActivity());
      dispatch(setTimePoint(prevTimePoint));
    },
    removeAllActivities: () => {
      dispatch(endPlan());
      dispatch(switchMainPage('A'));
    },
    createPlan: plan => {
      dispatch(fetchPlan(`${baseUrl}active-plan`, plan));
    },
    autoUpdateActiveTimeUnit: id => {
      dispatch(activateTimeUnit(id));
    }
  }
}

const CreatePlan = connect(mapStateToProps, mapDispatchToProps)(MainPageB);

export default CreatePlan;
