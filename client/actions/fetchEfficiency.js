import { resetDayEfficiency, sendTodayEfficiency } from './library';

export const fetchReset = url =>
  dispatch => {
    const options = {
      method: 'DELETE'
    };
    return fetch(url, options)
      .then(() => {
        dispatch(resetDayEfficiency());
      })
      .catch(e => console.error(e.message));
  }

export const fetchTodayEfficiency = (url, eff) =>
  dispatch => {
    const options = {
      method: 'PUT',
      body: JSON.stringify({ eff }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(url, options)
      .then(() => {
        dispatch(sendTodayEfficiency(eff));
      })
      .catch(e => console.error(e.message));
  }
