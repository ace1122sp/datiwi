import { CREATE_TIME_UNIT, DELETE_TIME_UNIT, SHOW_SETTINGS } from './constants';

export const createTimeUnit = (hours, minutes, id) => {
  return {
    type: CREATE_TIME_UNIT,
    hours,
    minutes,
    id
  }
}

export const deleteTimeUnit = id => {
  return {
    type: DELETE_TIME_UNIT,
    id
  }
}

export const showSettings = visibility => {
  return {
    type: SHOW_SETTINGS,
    visibility
  }
}
