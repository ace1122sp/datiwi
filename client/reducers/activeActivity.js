export const activeActivity = (state = 0, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ACTIVITY':
      return action.id;
    default:
      return state;
  }
}
