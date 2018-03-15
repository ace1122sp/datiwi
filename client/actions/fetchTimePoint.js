import { setTimePoint } from './productionPlan';

export const fetchTimePoint = (url, timePoint) =>
  dispatch => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ timePoint })
    };
    return fetch(url, options)
      .then(() => {
        dispatch(setTimePoint(timePoint));
      })
      .catch(e => console.error(e.message));
  }
