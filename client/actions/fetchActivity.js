import { createActivity, deleteActivity, updateActivityStats } from './library';
import { activateActivity } from './../actions/active';

export const fetchCreateActivity = (url, name, id) =>
  dispatch => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ id, name }),
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(url, options)
      .then(() => {
        dispatch(createActivity(name, id));
        dispatch(activateActivity(id));
      })
      .catch(e => console.error(e.message));
  }

export const fetchDeleteActivity = (url, id) =>
  dispatch => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(url, options)
      .then(() => {
        dispatch(deleteActivity(id));
      })
      .catch(e => console.error(e.message));
  }

export const fetchUpdate = (url, id, minutes) =>
  dispatch => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ id, minutes }),
      headers: { 'Content-Type': 'application/json' }
    };
    dispatch(updateActivityStats(id, minutes));
    return fetch(url, options)
      .catch(e => console.error(e.message));
  }
