import { increaseActivityID, increaseTimeUnitID } from './counters';

export const fetchActivityID = url =>
  dispatch => {
    const options = {
      method: 'PUT'
    };
    return fetch(url, options)
      .then(() => {
        dispatch(increaseActivityID());
      })
      .catch(e => console.error(e.message));
  }

export const fetchTimeUnitID = url =>
  dispatch => {
    const options = {
      method: 'PUT'
    };
    return fetch(url, options)
      .then(() => {
        dispatch(increaseTimeUnitID());
      })
      .catch(e => console.error(e.message));
  }
