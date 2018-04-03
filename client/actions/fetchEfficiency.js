import { resetDayEfficiency, sendTodayEfficiency } from './library';

export const fetchReset = url =>
  dispatch => {
    const options = {
      method: 'PUT'
    };
    return fetch(url, options)
      .then(() => {
        dispatch(resetDayEfficiency());
      })
      .catch(e => console.error(e.message));
  }

export const fetchTodayEfficiency = (url, todayEfficiency) =>
  dispatch => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ todayEfficiency })
    }
    return fetch(url, options)
      .then(() => {
        dispatch(sendTodayEfficiency(todayEfficiency));
      })
      .catch(e => console.error(e.message));
  }
