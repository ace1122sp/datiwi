export const showTimeUnitsSettings = (state = 'close', action) => {
  switch (action.type) {
    case 'SHOW_SETTINGS':
      return action.visibility;
    default:
      return state;
  }
}
