import { CREATE_ACTIVITY, DELETE_ACTIVITY, RESET_DAY_EFFICIENCY, TODAY_EFFICIENCY, ACTIVITY_STATS, SHOW_LIBRARY } from './constants';

export const createActivity = (name, id) => {
  return {
    type: CREATE_ACTIVITY,
    name,
    id
  }
}

export const deleteActivity = id => {
  return {
    type: DELETE_ACTIVITY,
    id
  }
}

export const resetDayEfficiency = () => {
  return {
    type: RESET_DAY_EFFICIENCY
  }
}

export const sendTodayEfficiency = todayEfficiency => {
  return {
    type: TODAY_EFFICIENCY,
    todayEfficiency
  }
}

export const updateActivityStats = (id, minutes) => {
  return {
    type: ACTIVITY_STATS,
    id,
    minutes
  }
}

export const showingLibrary = () => {
  return {
    type: SHOW_LIBRARY
  }
}
