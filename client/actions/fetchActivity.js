import { createActivity, deleteActivity, updadeActivityStats } from './library';

export const fetchCreate = (url, name, id) =>
  dispatch => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ id, name })
    };
    return fetch(url, options)
      .then(() => {
        dispatch(createActivity(name, id));
      })
      .catch(e => console.error(e.message));
  }

export const fetchDelete = (url, id) =>
  dispatch => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify({ id })
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
      body: JSON.stringify.({ id, minutes })
    };
    return fetch(url, options)
      .then(() => {
        dispatch(updateActivityStats(id, minutes));
      })
      .catch(e => console.error(e.message));
  }
