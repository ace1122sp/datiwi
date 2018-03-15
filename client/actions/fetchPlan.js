import { endPlan, changeStatus } from './productionPlan';
import { addActivity, removeLastActivity } from './activePlan';

export const fetchAddedActivity = (url, activity) =>
  dispatch => {
    const { id, time } = activity;
    const options = {
      method: 'PUT',
      body: JSON.stringify({ id, time })
    };
    return fetch(url, options)
      .then(() => {
        dispatch(addActivity(id, time));
      })
      .catch(e => console.error(e.message));
  }

export const fetchRemovedActivity = url =>
  dispatch => {
    const options = {
      method: 'PUT',
    };
    return fetch(url, options)
      .then(() => {
        dispatch(removeLastActivity());
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
