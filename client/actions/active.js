import { SET_ACTIVE_ACTIVITY, SET_ACTIVE_TIME_UNIT } from './constants';

export const activateActivity = id => {
  return {
    type: SET_ACTIVE_ACTIVITY,
    id
  }
}

export const activateTimeUnit = id => {
  return {
    type: SET_ACTIVE_TIME_UNIT,
    id
  }
}
