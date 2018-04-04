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
PRELOADED_STATE_DATA.activities.forEach(activity => {
  activities[activity.id] = activity;
});
PRELOADED_STATE_DATA.timeUnits.forEach(unit => {
  let hours = unit.hours.toString();
  let minutes = unit.minutes.toString();
  const id = unit.id;
  if(hours.length === 1) hours = '0' + hours;
  if(minutes.length === 1) minutes = '0' + minutes;
  timeUnits[id] = { hours, minutes, id };
});
let activeActivity;
let activeTimeUnit;
if(PRELOADED_STATE_DATA.activities.length) activeActivity = parseInt(PRELOADED_STATE_DATA.activities[0].id);
if(PRELOADED_STATE_DATA.timeUnits.length) activeTimeUnit = parseInt(PRELOADED_STATE_DATA.timeUnits[0].id);

const initState = {
  activePlan,
  activities,
  dayEfficiency: dayEfficiencyLast30days,
  idCounterActivities: PRELOADED_STATE_DATA.pointers.idCounterActivities,
  idCounterTimeUnits: PRELOADED_STATE_DATA.pointers.idCounterTimeUnits,
  timeUnits,
};

const root = document.getElementById('root');
let store = createStore(rootReducer, initState, applyMiddleware(thunk));
console.log('PRELOADED_STATE_DATA');
console.log(PRELOADED_STATE_DATA);
console.log('initState');
console.log(initState);
console.log('store');
console.log(store.getState());

render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);
