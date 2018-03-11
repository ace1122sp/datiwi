import { ADD_ACTIVITY, REMOVE_LAST_ACTIVITY, CREATE_PLAN, SET_TIME_POINT } from './constants';

export const addActivity = (id, time) => {
  return {
    type: ADD_ACTIVITY,
    id,
    time
  }
}

export const removeLastActivity = () => {
  return {
    type: REMOVE_LAST_ACTIVITY
  }
}

export const setTimePoint = timePoint => {
  return {
    type: SET_TIME_POINT,
    timePoint
  }
}
