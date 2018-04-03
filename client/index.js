import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const PRELOADED_STATE_DATA = Object.assign({}, window.__PRELOADED_STATE_DATA__);

delete window.__PRELOADED_STATE_DATA__;

const activePlan = PRELOADED_STATE_DATA.plan.sort((a, b) => {
  const a1_hours = a.startingHours.toString();
  const a2_hours = b.startingHours.toString();
  let a1_minutes = a.startingMinutes.toString();
  let a2_minutes = b.startingMinutes.toString();
  if(a1_minutes.length === 1) a1_minutes = '0' + a1_minutes;
  if(a2_minutes.length === 1) a2_minutes = '0' + a2_minutes;

  let activity1 = parseInt(a1_hours + a1_minutes);
  let activity2 = parseInt(a2_hours + a2_minutes);
  return activity1 - activity2;
});
const dayEfficiency = PRELOADED_STATE_DATA.pointers.dayEfficiency;
const size = dayEfficiency.length;
const dayEfficiencyLast30days = dayEfficiency.slice(size - 30);

let activities = {};
let timeUnits = {};
activities = PRELOADED_STATE_DATA.activities.forEach(activity => {
  activities[activity.id] = activity;
});
timeUnits = PRELOADED_STATE_DATA.timeUnits.forEach(unit => {
  timeUnits[unit.id] = unit;
});
let activeActivity;
let activeTimeUnit;
if(PRELOADED_STATE_DATA.activities.length) activeActivity = parseInt(PRELOADED_STATE_DATA.activities[0].id);
if(PRELOADED_STATE_DATA.timeUnits.length) activeTimeUnits = parseInt(PRELOADED_STATE_DATA.timeUnits[0].id);

const initState = {
  activeActivity,
  activePlan,
  activeTimeUnit,
  activities,
  dayEfficiency: dayEfficiencyLast30days,
  idCounterActivities: PRELOADED_STATE_DATA.pointers.idCounterActivities,
  idCounterTimeUnits: PRELOADED_STATE_DATA.pointers.idCounterTimeUnits,
  showingLibrary: 'hide',
  showingMainPage: 'A',
  showTimeUnitsSettings: 'close',
  timeUnits,
  timePoint: '08:00'
};


const root = document.getElementById('root');
let store = createStore(rootReducer, initState, applyMiddleware(thunk));
console.log(store.getState());
// TODO: database ce da vodi evidenciju samo o planu koji je kreiran, sto znaci da
// plan koji se sastavlja nece biti sacuvan ako se refreshuje strana
//sa klikom na submit(u delu gde sastavljas plan) plan se kreira i tada se salje
//post req database-u
render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);
