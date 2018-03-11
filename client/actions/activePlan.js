import { END_PLAN, CHANGE_STATUS } from './constants';

export const endPlan = () => {
  return {
    type: END_PLAN
  }
}

export const changeStatus = index => {
  return {
    type: CHANGE_STATUS,
    index
  }
}
