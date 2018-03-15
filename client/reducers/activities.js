export const activities = (state = {0:{
  name: 'add your first activity',
  minutes: 0,
  id: 0
}}, action) => {
  switch (action.type) {
    case 'CREATE_ACTIVITY':
      return Object.assign(
        {},
        state,
        {[action.id]: {
          name: action.name,
          minutes: 0,
          id: action.id
        }}
      );
    case 'DELETE_ACTIVITY':
      let afterDel = Object.assign({}, state);
      delete afterDel[action.id];
      return afterDel;
    case 'ACTIVITY_STATS':
      let updatedActivity = {...state[action.id], minutes: action.minutes + state[action.id].minutes};
      return Object.assign(
        {},
        state,
        {[action.id]:
          {...updatedActivity}});
    case 'INIT_ACTIVITES':
      return action.activities;
    default:
      return state;
  }
}
