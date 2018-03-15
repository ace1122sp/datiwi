export const timeUnits = (state = {0:{
  hours: '01',
  minutes: '00',
  id: 0
}}, action) => {
  switch (action.type) {
    case 'CREATE_TIME_UNIT':
      return Object.assign(
        {},
        state,
        {[action.id]: {
          hours: action.hours,
          minutes: action.minutes,
          id: action.id
        }}
      );
    case 'DELETE_TIME_UNIT':
      let afterDel = Object.assign({}, state);
      const count = Object.keys(afterDel).length;
      if(count > 1) delete afterDel[action.id];
      return afterDel;
    case 'INIT_TIME_UNITS':
      return action.timeUnits;
    default:
      return state;
  }
}
