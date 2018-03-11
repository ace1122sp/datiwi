export const activeTimeUnit = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TIME_UNIT':
      return action.id;
    default:
      return state;
  }
}
