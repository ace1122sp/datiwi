import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let activePlan = window.__PRELOADED_STATE_DATA__.plan.sort((a, b) => a.order - b.order);

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

const dayEfficiency = window.__PRELOADED_STATE_DATA__.pointers.dayEfficiency;
const size = dayEfficiency.length;
const dayEfficiencyLast30days = dayEfficiency.slice(size - 30);

let activities = {};
let timeUnits = {};
window.__PRELOADED_STATE_DATA__.activities.forEach(activity => {
  activities[activity.id] = activity;
});
window.__PRELOADED_STATE_DATA__.timeUnits.forEach(unit => {
  let hours = unit.hours.toString();
  let minutes = unit.minutes.toString();
  const id = unit.id;
  if(hours.length === 1) hours = '0' + hours;
  if(minutes.length === 1) minutes = '0' + minutes;
  timeUnits[id] = { hours, minutes, id };
});
let activeActivity;
let activeTimeUnit;
if(window.__PRELOADED_STATE_DATA__.activities.length) activeActivity = parseInt(window.__PRELOADED_STATE_DATA__.activities[0].id);
if(window.__PRELOADED_STATE_DATA__.timeUnits.length) activeTimeUnit = parseInt(window.__PRELOADED_STATE_DATA__.timeUnits[0].id);

let showingMainPage = 'A';
if(activePlan.length) showingMainPage = 'C'

const initState = {
  activeActivity,
  activePlan,
  activeTimeUnit,
  activities,
  dayEfficiency: dayEfficiencyLast30days,
  idCounterActivities: window.__PRELOADED_STATE_DATA__.pointers.idCounterActivities,
  idCounterTimeUnits: window.__PRELOADED_STATE_DATA__.pointers.idCounterTimeUnits,
  timeUnits,
  showingMainPage
};

const root = document.getElementById('root');
let store = createStore(rootReducer, initState, applyMiddleware(thunk));

delete window.__PRELOADED_STATE_DATA__;

render(
  <Provider store={store} >
    <App />
  </Provider>,
  root
);
