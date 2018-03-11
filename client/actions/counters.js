import { INC_ACT_ID, INC_TU_ID } from './constants';

export const increaseActivityID = () => {
  return {
    type: INC_ACT_ID
  }
}

export const increaseTimeUnitID = () => {
  return {
    type: INC_TU_ID
  }
}
