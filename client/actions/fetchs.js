import { INIT_ACTIVE_PLAN, INIT_ACTIVITIES, INIT_TIME_UNITS, INIT_ACTIVITY_COUNTER, INIT_TIME_UNIT_COUNTER, INIT_EFFICIENCY } from './constants';
import { setTimePoint } from './productionPlan';

//treba da posalje req i da onda uzme response i da za svaki prop iz responsa
//dispatch-uje actions kako bi update-ovao state

// FIXME: ne moraš da šalješ init fetch, jer app stiže sa json init state
// TODO: pri pokretanju app, update state 

export const initializeActivePlan = activePlan => {
  return {
    type: INIT_ACTIVE_PLAN,
    activePlan
  }
}

export const initializeActivities = activities => {
  return {
    type: INIT_ACTIVITIES,
    activities
  }
}

export const initializeTimeUnits = timeUnits => {
  return {
    type: INIT_TIME_UNITS,
    timeUnits
  }
}

export const initializeActivityCounter = counter => {
  return {
    type: INIT_ACTIVITY_COUNTER,
    counter
  }
}

export const initializeTimeUnitCounter => counter => {
  return {
    type: INIT_TIME_UNIT_COUNTER,
    counter
  }
}

export const initializeEfficiency = efficiencyArr => {
  return {
    type: INIT_EFFICIENCY,
    efficiencyArr
  }
}

export const getInitState = url =>
  dispatch =>
    fetch(url)
      .then(response => {
        if(!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(initState => {
        dispatch(initializeActivePlan(initState.activePlan));
        dispatch(initializeActivities(initState.activities));
        dispatch(initializeTimeUnits(initState.timeUnits));
        dispatch(initializeActivityCounter(initState.idCounterActivities));
        dispatch(initializeTimeUnitCounter(initState.idCounterTimeUnits));
        dispatch(setTimePoint(initState.timePoint));
        dispatch(initializeEfficiency(initState.efficiencyArr));
      })
      .catch(() => console.log('error'));


//send updates
//what methods???
