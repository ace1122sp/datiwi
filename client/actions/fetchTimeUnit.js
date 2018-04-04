import { createTimeUnit, deleteTimeUnit } from './timeUnit';

export const fetchCreateTimeUnit = (url, timeUnit) =>
  dispatch => {
    const options = {
      method: 'POST',
      body: JSON.stringify(timeUnit),
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(url, options)
      .then(() => {
        let { hours, minutes, id } = timeUnit;
        dispatch(createTimeUnit(hours, minutes, id));
      })
      .catch(e => console.error(e.message));
  }

export const fetchDeleteTimeUnit = (url, id) =>
  dispatch => {
    const options = {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    };
    return fetch(url, options)
      .then(() => {
        dispatch(deleteTimeUnit(id));
      })
      .catch(e => console.error(e.message));
  }
