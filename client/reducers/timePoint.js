export const timePoint = (state = '08:00', action) => {
  switch (action.type) {
    case 'SET_TIME_POINT':
      return action.timePoint;
    default:
      return state;
  }
}
