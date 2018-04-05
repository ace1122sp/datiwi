import { endPlan, changeStatus } from './productionPlan';
import { switchMainPage } from './mainPage';

export const fetchPlan = (url, plan) =>
  dispatch => {
    console.log(plan);
    const options = {
      method: 'POST',
      body: JSON.stringify(plan),
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(url, options)
      .then(() => {
        dispatch(switchMainPage('C'));
      })
      .catch(e => console.error(e.message));
  }

export const fetchEnd = url =>
  dispatch => {
    const options = {
      method: 'PUT'
    };
    return fetch(url, options)
      .then(() => {
        dispatch(endPlan());
      })
      .catch(e => console.error(e.message));
  }

export const fetchStatusUpdate = (url, index) =>
  dispatch => {
    const options = {
      method: 'POST'
    };
    return fetch(url, options)
      .then(() => {
        dispatch(changeStatus(index));
      })
      .catch(e => console.error(e.message));
  }
