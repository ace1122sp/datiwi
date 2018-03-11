export const idCounterActivities = (state = 0, action) => {
  switch (action.type) {
    case 'INC_ACT_ID':
      return state + 1;
    default:
      return state;
  }
}
