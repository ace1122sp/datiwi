import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const PRELOADED_STATE_DATA = Object.assign({}, window.__PRELOADED_STATE_DATA__);

delete window.__PRELOADED_STATE_DATA__;

let activePlan = PRELOADED_STATE_DATA.plan.sort((a, b) => a.order - b.order);

activePlan = activePlan.map(activity => {
  let formatedActivity = {...activity};
  formatedActivity.startingHours = formatedActivity.startingHours.toString();
  formatedActivity.startingMinutes = formatedActivity.startingMinutes.toString();
  formatedActivity.endingHours = formatedActivity.endingHours.toString();
  formatedActivity.endingMinutes = formatedActivity.endingMinutes.toString();

  if(formatedActivity.startingHours.length === 1) formatedActivity.startingHours = '0' + formatedActivity.startingHours;
  if(formatedActivity.startingMinutes.length === 1) formatedActivity.startingMinutes = '0' + formatedActivity.startingMinutes;
  if(formatedActivity.endingHours.length === 1) formatedActivity.endingHours = '0' + formatedActivity.endingHours;
  if(formatedActivity.endingMinutes.length === 1) formatedActivity.endingMinutes = '0' + formatedActivity.endingMinutes;
  return formatedActivity;
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

let showingMainPage = 'A';
if(activePlan.length) showingMainPage = 'C'

const initState = {
  activePlan,
  activities,
  dayEfficiency: dayEfficiencyLast30days,
  idCounterActivities: PRELOADED_STATE_DATA.pointers.idCounterActivities,
  idCounterTimeUnits: PRELOADED_STATE_DATA.pointers.idCounterTimeUnits,
  timeUnits,
  showingMainPage
};

const root = document.getElementById('root');
let store = createStore(rootReducer, initState, applyMiddleware(thunk));
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
