export const idCounterTimeUnits = (state = 0, action) => {
  switch (action.type) {
    case 'INC_TU_ID':
      return state + 1;
    case 'INIT_TIME_UNIT_COUNTER':
      return action.counter;
    default:
      return state;
  }
}
